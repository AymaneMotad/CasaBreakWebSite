"use client"

import { useState, useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { MessageCircle, X, Send, Sparkles, ExternalLink, Loader2 } from 'lucide-react'
import { ChatMessage, ChatLink } from '@/lib/chatbot/types'
import Link from 'next/link'

export function ChatbotWidget() {
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Add welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        role: 'assistant',
        content: locale === 'fr' 
          ? "Salam! 👋⚽ CAN 2025, restos, sorties à Casa... demande-moi! 🇲🇦"
          : "Salam! 👋⚽ CAN 2025, restaurants, things to do in Casa... ask me! 🇲🇦",
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length, locale])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const history = messages
        .filter(m => m.id !== 'welcome')
        .map(m => ({ role: m.role, content: m.content }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          locale,
          history
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.message,
        links: data.links,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: locale === 'fr' 
          ? "Désolé, une erreur s'est produite. Veuillez réessayer."
          : "Sorry, an error occurred. Please try again.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Render message content with markdown links
  const renderMessageContent = (content: string) => {
    // Replace markdown links with styled links
    const parts = content.split(/(\[[^\]]+\]\([^)]+\))/g)
    
    return parts.map((part, index) => {
      const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
      if (linkMatch) {
        const [, title, url] = linkMatch
        const fullUrl = url.startsWith('/') ? `/${locale}${url.replace(/^\/[a-z]{2}\//, '/')}` : url
        return (
          <Link
            key={index}
            href={fullUrl}
            className="inline-flex items-center gap-1 text-[#00a346] hover:text-[#ffd700] underline underline-offset-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {title}
            <ExternalLink className="w-3 h-3" />
          </Link>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#00a346] via-[#ffd700] to-[#c10000] p-[2px] shadow-lg shadow-[#00a346]/30 hover:shadow-[#00a346]/50 hover:scale-110 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Ouvrir le chat"
      >
        <div className="w-full h-full rounded-full bg-[#030303] flex items-center justify-center relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00a346]/20 via-transparent to-[#c10000]/20 animate-pulse-slow" />
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
          {/* Pulse indicator */}
          <span className="absolute top-0 right-0 w-3 h-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a346] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00a346]"></span>
          </span>
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh] transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full sm:translate-y-8 opacity-0 pointer-events-none'}`}
      >
        <div className="w-full h-full bg-[#030303]/95 backdrop-blur-xl sm:rounded-3xl border border-white/10 shadow-2xl shadow-black/50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="relative px-4 py-4 border-b border-white/10">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a346]/10 via-[#0066b2]/5 to-[#c10000]/10" />
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00a346] to-[#0066b2] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">Assistant CasaBreak</h3>
                  <p className="text-xs text-white/50">CAN 2025 • Casablanca</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Fermer le chat"
              >
                <X className="w-4 h-4 text-white/70" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#00a346]/30 to-[#0066b2]/30 border border-[#00a346]/30 text-white'
                      : 'bg-white/5 border border-white/10 text-white/90'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {renderMessageContent(message.content)}
                  </p>
                  
                  {/* Links */}
                  {message.links && message.links.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                      {message.links.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#00a346]/20 hover:to-[#c10000]/20 border border-white/10 hover:border-[#00a346]/30 transition-all group"
                        >
                          <ExternalLink className="w-4 h-4 text-[#00a346] group-hover:text-[#ffd700] transition-colors" />
                          <span className="text-xs text-white/80 group-hover:text-white transition-colors">{link.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#00a346] animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-[#c10000] animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={locale === 'fr' ? "Posez votre question..." : "Ask your question..."}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00a346]/50 focus:ring-2 focus:ring-[#00a346]/20 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00a346] to-[#0066b2] flex items-center justify-center hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-[#00a346]/30"
                aria-label="Envoyer"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-white animate-spin" />
                ) : (
                  <Send className="w-5 h-5 text-white" />
                )}
              </button>
            </form>
            
            {/* Quick suggestions */}
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                locale === 'fr' ? 'CAN 2025' : 'CAN 2025',
                locale === 'fr' ? 'Restaurants' : 'Restaurants',
                locale === 'fr' ? 'Que visiter ?' : 'What to visit?'
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInputValue(suggestion)}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00a346]/30 rounded-full text-white/60 hover:text-white transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

