import { NextResponse } from 'next/server'
import { ChatRequest, ChatResponse, PerplexityRequest, PerplexityResponse, ChatLink } from '@/lib/chatbot/types'
import { buildContextForLLM, getRelevantLinks } from '@/lib/chatbot/content-extractor'
import { detectLanguage, getSystemPromptForLanguage } from '@/lib/chatbot/language-detector'

const PERPLEXITY_KEY = process.env.PERPLEXITY_KEY
const PERPLEXITY_MODEL = process.env.PERPLEXITY_MODEL || 'sonar'

export async function POST(request: Request) {
  try {
    // Check API key
    if (!PERPLEXITY_KEY) {
      console.error('PERPLEXITY_KEY is not set')
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      )
    }

    // Parse request
    const body: ChatRequest = await request.json()
    const { message, locale, history = [] } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Detect language (French or Darija)
    const languageResult = detectLanguage(message)
    console.log('Language detected:', languageResult)

    // Build context from website content
    const context = buildContextForLLM(message, locale || 'fr')

    // Get system prompt based on language
    const systemPrompt = getSystemPromptForLanguage(languageResult.language)

    // Build messages for Perplexity
    const messages: PerplexityRequest['messages'] = [
      {
        role: 'system',
        content: `${systemPrompt}\n\n--- CONTEXTE DU SITE WEB ---\n${context}`
      }
    ]

    // Add conversation history (last 6 messages max)
    const recentHistory = history.slice(-6)
    recentHistory.forEach(msg => {
      messages.push({
        role: msg.role,
        content: msg.content
      })
    })

    // Add current message
    messages.push({
      role: 'user',
      content: message
    })

    // Call Perplexity API
    const perplexityRequest: PerplexityRequest = {
      model: PERPLEXITY_MODEL,
      messages,
      max_tokens: 1024,
      temperature: 0.7,
      top_p: 0.9
    }

    console.log('Calling Perplexity API...')
    
    const perplexityResponse = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PERPLEXITY_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(perplexityRequest)
    })

    if (!perplexityResponse.ok) {
      const errorText = await perplexityResponse.text()
      console.error('Perplexity API error:', perplexityResponse.status, errorText)
      return NextResponse.json(
        { error: `AI service error: ${perplexityResponse.status}` },
        { status: 502 }
      )
    }

    const perplexityData: PerplexityResponse = await perplexityResponse.json()
    
    if (!perplexityData.choices || perplexityData.choices.length === 0) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 502 }
      )
    }

    const assistantMessage = perplexityData.choices[0].message.content

    // Extract links from response and add relevant links
    const relevantLinks = getRelevantLinks(message, locale || 'fr')
    
    // Parse any links in the response
    const linksFromResponse = extractLinksFromText(assistantMessage, locale || 'fr')
    
    // Combine links, prioritizing those from the response
    const allLinks: ChatLink[] = [
      ...linksFromResponse,
      ...relevantLinks.filter(rl => !linksFromResponse.some(lr => lr.url === rl.url))
    ].slice(0, 3)

    const response: ChatResponse = {
      message: assistantMessage,
      links: allLinks
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper to extract markdown links from text
function extractLinksFromText(text: string, locale: string): ChatLink[] {
  const links: ChatLink[] = []
  
  // Match markdown links: [title](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  let match
  
  while ((match = linkRegex.exec(text)) !== null) {
    const title = match[1]
    let url = match[2]
    
    // Ensure URL has locale prefix if it's a relative path
    if (url.startsWith('/') && !url.startsWith(`/${locale}`)) {
      url = `/${locale}${url}`
    }
    
    links.push({ title, url })
  }
  
  return links
}

