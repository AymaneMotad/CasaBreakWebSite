// Chatbot Types

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  links?: ChatLink[]
  timestamp: Date
}

export interface ChatLink {
  title: string
  url: string
  description?: string
}

export interface ContentChunk {
  id: string
  content: string
  url: string
  title: string
  section: string
  language: 'fr' | 'en' | 'ar'
  keywords: string[]
}

export interface ChatRequest {
  message: string
  locale: string
  history?: { role: 'user' | 'assistant'; content: string }[]
}

export interface ChatResponse {
  message: string
  links: ChatLink[]
}

export interface PerplexityMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface PerplexityRequest {
  model: string
  messages: PerplexityMessage[]
  max_tokens?: number
  temperature?: number
  top_p?: number
  stream?: boolean
}

export interface PerplexityResponse {
  id: string
  model: string
  choices: {
    index: number
    finish_reason: string
    message: {
      role: string
      content: string
    }
  }[]
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

