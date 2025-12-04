"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from 'next-intl'
import { Globe, ChevronDown, Check, Clock } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
  status: 'active' | 'coming-soon'
}

const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '', status: 'active' },
  { code: 'en', name: 'English', flag: '', status: 'active' },
  { code: 'ar', name: 'العربية', flag: '', status: 'coming-soon' }
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  
  // Fallback: Extract locale from pathname if useLocale() is not working
  const getCurrentLocale = () => {
    const segments = pathname.split('/').filter(Boolean)
    const validLocales = ['fr', 'en', 'ar']
    const pathLocale = segments[0]
    
    if (validLocales.includes(pathLocale)) {
      return pathLocale
    }
    
    return locale || 'fr' // Fallback to useLocale() or 'fr'
  }

  const currentLocale = getCurrentLocale()
  const selectedLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]
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
      setIsOpen(false)
      
      // Get the current path without any locale prefix
      let pathWithoutLocale = pathname
      
      // Remove any locale prefix from the path (handle cases with multiple locales)
      const segments = pathname.split('/').filter(Boolean)
      const validLocales = ['fr', 'en', 'ar']
      
      // Find the first segment that is not a locale
      let pathStartIndex = 0
      for (let i = 0; i < segments.length; i++) {
        if (!validLocales.includes(segments[i])) {
          pathStartIndex = i
          break
        }
        // If we've checked all segments and they're all locales, we're at root
        if (i === segments.length - 1) {
          pathStartIndex = segments.length
        }
      }
      
      // Reconstruct the path without any locale prefixes
      if (pathStartIndex < segments.length) {
        pathWithoutLocale = '/' + segments.slice(pathStartIndex).join('/')
      } else {
        pathWithoutLocale = '/'
      }
      
      // Handle root path
      if (pathWithoutLocale === '/') {
        pathWithoutLocale = ''
      }
      
      // Navigate to the same page with the new locale
      const newPath = `/${language.code}${pathWithoutLocale}`
      
      // Additional safety check to prevent double locale prefixes
      if (newPath.includes(`/${language.code}/${language.code}`)) {
        console.warn('Prevented double locale prefix in navigation')
        return
      }
      
      router.push(newPath)
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
        className="flex items-center gap-2 px-3 py-2 text-sm font-sans tracking-wide text-charcoal/80 hover:text-charcoal transition-all duration-300 hover:bg-white/90 bg-white/80 backdrop-blur-sm rounded-lg border border-charcoal/10 hover:border-charcoal/20 shadow-md hover:shadow-lg group"
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
