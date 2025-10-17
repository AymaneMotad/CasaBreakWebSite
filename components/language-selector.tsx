"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Globe, ChevronDown, Check, Clock } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
  status: 'active' | 'coming-soon'
}

const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '', status: 'active' },
  { code: 'ar', name: 'العربية', flag: '', status: 'coming-soon' },
  { code: 'en', name: 'English', flag: '', status: 'coming-soon' }
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageSelect = (language: Language) => {
    if (language.status === 'active') {
      setSelectedLanguage(language)
      setIsOpen(false)
      // Here you could add language switching logic
      // For now, we'll just update the UI state
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, language: Language) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleLanguageSelect(language)
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-sans tracking-wide text-charcoal/80 hover:text-charcoal transition-all duration-300 hover:bg-charcoal/5 rounded-lg border border-charcoal/10 hover:border-charcoal/20 group"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4 transition-transform group-hover:rotate-12" />
        <span className="hidden sm:inline">{selectedLanguage.name}</span>
        <ChevronDown 
          className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 min-w-[200px] bg-white rounded-lg shadow-lg border border-charcoal/10 overflow-hidden z-50 animate-gentle-scale">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                onKeyDown={(e) => handleKeyDown(e, language)}
                disabled={language.status === 'coming-soon'}
                className={`
                  w-full flex items-center justify-between px-4 py-3 text-sm font-sans transition-all duration-200 group
                  ${language.status === 'active' 
                    ? 'text-charcoal hover:bg-charcoal/5 cursor-pointer focus:bg-charcoal/5 focus:outline-none' 
                    : 'text-charcoal/50 cursor-not-allowed'
                  }
                  ${selectedLanguage.code === language.code ? 'bg-blue-50 text-blue-600' : ''}
                `}
                aria-label={`Select ${language.name} language`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium">{language.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {language.status === 'coming-soon' && (
                    <div className="flex items-center gap-1 text-xs text-charcoal/40 bg-charcoal/10 px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3" />
                      <span>En cours</span>
                    </div>
                  )}
                  {selectedLanguage.code === language.code && language.status === 'active' && (
                    <Check className="h-4 w-4 text-blue-600" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
