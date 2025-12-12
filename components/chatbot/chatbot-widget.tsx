"use client"

import { useState, useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { X, Send, ExternalLink, Loader2 } from 'lucide-react'
import { ChatMessage, ChatLink } from '@/lib/chatbot/types'
import Link from 'next/link'

// Mascot Avatar Component
function MascotAvatar({ size = 72, className = "" }: { size?: number; className?: string }) {
  const uniqueId = `mascot-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <svg width={size} height={size} viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={`${uniqueId}-skinBase`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EBC8A5"/>
          <stop offset="100%" stopColor="#C99E75"/>
        </linearGradient>
        <radialGradient id={`${uniqueId}-cheekBlush`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id={`${uniqueId}-jellabaCloth`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F9FAFB"/>
          <stop offset="50%" stopColor="#FFFFFF"/>
          <stop offset="100%" stopColor="#E5E7EB"/>
        </linearGradient>
        <linearGradient id={`${uniqueId}-jellabaShadow`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000000" stopOpacity="0"/>
          <stop offset="100%" stopColor="#000000" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id={`${uniqueId}-goldThread`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B45309"/>
          <stop offset="50%" stopColor="#FCD34D"/>
          <stop offset="100%" stopColor="#B45309"/>
        </linearGradient>
        <linearGradient id={`${uniqueId}-fezRed`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7F1D1D"/>
          <stop offset="40%" stopColor="#B91C1C"/>
          <stop offset="100%" stopColor="#7F1D1D"/>
        </linearGradient>
      </defs>
      <g className="anim-breathe">
        <path d="M190 230 C190 230 250 210 310 230 C310 230 320 250 330 260 L 170 260 C 180 250 190 230 190 230" fill="#E5E7EB"/>
        <path d="M150 260 C150 260 120 400 110 550 L 390 550 C 380 400 350 260 350 260 Q 250 280 150 260 Z" fill={`url(#${uniqueId}-jellabaCloth)`}/>
        <path d="M150 260 C150 260 120 400 110 550 L 390 550 C 380 400 350 260 350 260 Q 250 280 150 260 Z" fill={`url(#${uniqueId}-jellabaShadow)`}/>
        <g className="anim-hand-left">
          <path d="M155 265 Q 110 280 90 380 L 140 400 Q 160 350 180 320" fill={`url(#${uniqueId}-jellabaCloth)`} stroke="#D1D5DB" strokeWidth="1"/>
          <path d="M90 380 Q 80 420 100 430 C 110 435 125 430 130 420 L 135 400" fill={`url(#${uniqueId}-skinBase)`}/>
        </g>
        <g className="anim-hand-right">
          <path d="M345 265 Q 390 280 410 380 L 360 400 Q 340 350 320 320" fill={`url(#${uniqueId}-jellabaCloth)`} stroke="#D1D5DB" strokeWidth="1"/>
          <path d="M410 380 Q 420 420 400 430 C 390 435 375 430 370 420 L 365 400" fill={`url(#${uniqueId}-skinBase)`}/>
        </g>
        <rect x="242" y="275" width="16" height="275" fill="#0D9488"/>
        <path d="M250 275 L 250 550" stroke={`url(#${uniqueId}-goldThread)`} strokeWidth="2" strokeDasharray="4 4"/>
        <path d="M244 275 L 244 550" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
        <path d="M256 275 L 256 550" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
        <path d="M220 268 Q 250 290 280 268" stroke={`url(#${uniqueId}-goldThread)`} strokeWidth="4" fill="none"/>
      </g>
      <g className="anim-head">
        <rect x="225" y="220" width="50" height="50" rx="10" fill={`url(#${uniqueId}-skinBase)`}/>
        <path d="M225 240 Q 250 250 275 240" fill="#000000" opacity="0.1"/>
        <path d="M250 260 C 210 260 190 220 190 180 C 190 120 210 100 250 100 C 290 100 310 120 310 180 C 310 220 290 260 250 260 Z" fill={`url(#${uniqueId}-skinBase)`}/>
        <path d="M190 180 C 190 220 210 260 250 260 C 290 260 310 220 310 180 Q 290 200 250 200 Q 210 200 190 180 Z" fill="#374151" opacity="0.1"/>
        <path d="M190 180 C 180 180 180 210 192 210" fill={`url(#${uniqueId}-skinBase)`}/>
        <path d="M310 180 C 320 180 320 210 308 210" fill={`url(#${uniqueId}-skinBase)`}/>
        <circle cx="215" cy="200" r="15" fill={`url(#${uniqueId}-cheekBlush)`}/>
        <circle cx="285" cy="200" r="15" fill={`url(#${uniqueId}-cheekBlush)`}/>
        <path d="M250 180 L 245 205 Q 250 210 255 205 Z" fill="#C99E75"/>
        <path d="M250 180 L 245 205 Q 250 210 255 205" stroke="#B08968" strokeWidth="1" fill="none"/>
        <path d="M225 225 Q 250 245 275 225" stroke="#A05A2C" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M222 222 Q 225 228 228 222" stroke="#A05A2C" strokeWidth="1.5" opacity="0.5"/>
        <path d="M272 222 Q 275 228 278 222" stroke="#A05A2C" strokeWidth="1.5" opacity="0.5"/>
        <g>
          <path d="M205 165 Q 220 155 235 168" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" fill="none"/>
          <path d="M265 168 Q 280 155 295 165" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" fill="none"/>
          <g transform="translate(220, 180)" className="anim-blink">
            <ellipse cx="0" cy="0" rx="12" ry="8" fill="#FFFFFF"/>
            <circle cx="0" cy="0" r="5" fill="#4B5563"/>
            <circle cx="0" cy="0" r="2.5" fill="#000000"/>
            <circle cx="2" cy="-2" r="1.5" fill="#FFFFFF" opacity="0.8"/>
          </g>
          <g transform="translate(280, 180)" className="anim-blink">
            <ellipse cx="0" cy="0" rx="12" ry="8" fill="#FFFFFF"/>
            <circle cx="0" cy="0" r="5" fill="#4B5563"/>
            <circle cx="0" cy="0" r="2.5" fill="#000000"/>
            <circle cx="2" cy="-2" r="1.5" fill="#FFFFFF" opacity="0.8"/>
          </g>
        </g>
        <g transform="translate(0, -10)">
          <path d="M215 110 L 220 60 Q 250 55 280 60 L 285 110 Q 250 125 215 110 Z" fill={`url(#${uniqueId}-fezRed)`}/>
          <ellipse cx="250" cy="60" rx="30" ry="8" fill="#7F1D1D"/>
          <path d="M215 110 L 220 60 Q 250 55 280 60 L 285 110 Q 250 125 215 110 Z" fill={`url(#${uniqueId}-fezRed)`} opacity="0.8"/>
          <g className="anim-tassel">
            <path d="M250 60 Q 265 70 270 90" stroke="#111827" strokeWidth="2" fill="none"/>
            <g transform="translate(270, 90)">
              <path d="M0 0 L -3 15 L 3 15 Z" fill="#111827"/>
              <line x1="0" y1="15" x2="-2" y2="25" stroke="#111827" strokeWidth="1"/>
              <line x1="0" y1="15" x2="0" y2="28" stroke="#111827" strokeWidth="1"/>
              <line x1="0" y1="15" x2="2" y2="25" stroke="#111827" strokeWidth="1"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

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
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#00a346] via-[#ffd700] to-[#c10000] p-[2px] shadow-lg shadow-[#00a346]/30 hover:shadow-[#00a346]/50 active:scale-95 sm:hover:scale-110 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Ouvrir le chat"
      >
        <div className="w-full h-full rounded-full bg-[#030303] flex items-center justify-center relative overflow-hidden group">
          {/* Animated background - only on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00a346]/20 via-transparent to-[#c10000]/20 group-hover:animate-pulse-slow" />
          {/* Mascot Character */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <MascotAvatar size={56} className="drop-shadow-lg" />
          </div>
          {/* Pulse indicator - only on hover */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="group-hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a346] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-full w-full bg-[#00a346]"></span>
          </span>
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh] transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full sm:translate-y-8 opacity-0 pointer-events-none'}`}
      >
        <div className="w-full h-full bg-[#030303]/95 backdrop-blur-xl sm:rounded-3xl border border-white/10 shadow-2xl shadow-black/50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="relative px-3 py-3 sm:px-4 sm:py-4 border-b border-white/10">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a346]/10 via-[#0066b2]/5 to-[#c10000]/10" />
            
            <div className="relative flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#00a346] to-[#0066b2] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <MascotAvatar size={36} className="drop-shadow-sm" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-white text-xs sm:text-sm md:text-base truncate">Assistant CasaBreak</h3>
                  <p className="text-[10px] sm:text-xs text-white/50 truncate">CAN 2025 • Casablanca</p>
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
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#00a346] to-[#0066b2] flex items-center justify-center overflow-hidden flex-shrink-0">
                    <MascotAvatar size={28} className="drop-shadow-sm" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#00a346]/30 to-[#0066b2]/30 border border-[#00a346]/30 text-white'
                      : 'bg-white/5 border border-white/10 text-white/90'
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
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
              <div className="flex items-start gap-2 justify-start">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#00a346] to-[#0066b2] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <MascotAvatar size={28} className="drop-shadow-sm" />
                </div>
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
          <div className="p-3 sm:p-4 border-t border-white/10">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={locale === 'fr' ? "Posez votre question..." : "Ask your question..."}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00a346]/50 focus:ring-2 focus:ring-[#00a346]/20 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#00a346] to-[#0066b2] flex items-center justify-center hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-[#00a346]/30 flex-shrink-0"
                aria-label="Envoyer"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-spin" />
                ) : (
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                )}
              </button>
            </form>
            
            {/* Quick suggestions */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
              {[
                locale === 'fr' ? 'CAN 2025' : 'CAN 2025',
                locale === 'fr' ? 'Restaurants' : 'Restaurants',
                locale === 'fr' ? 'Que visiter ?' : 'What to visit?'
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInputValue(suggestion)}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00a346]/30 rounded-full text-white/60 hover:text-white transition-all"
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

