"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Volume1 } from "lucide-react"

interface TextToSpeechPlayerProps {
  text: string
  title?: string
}

export function TextToSpeechPlayer({ text, title }: TextToSpeechPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const [voicesLoaded, setVoicesLoaded] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    // Check if browser supports speech synthesis
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setIsSupported(true)
      
      // Load voices with better handling
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices()
        console.log("Loading voices:", voices.length)
        if (voices.length > 0) {
          setVoicesLoaded(true)
          // Log Arabic voices specifically
          const arabicVoices = voices.filter(voice => 
            voice.lang.startsWith('ar-') || voice.lang === 'ar' || 
            voice.name.toLowerCase().includes('arabic') ||
            voice.name.toLowerCase().includes('salma') ||
            voice.name.toLowerCase().includes('zeina') ||
            voice.name.toLowerCase().includes('hoda') ||
            voice.name.toLowerCase().includes('maged')
          )
          if (arabicVoices.length > 0) {
            console.log("Arabic voices detected:", arabicVoices.map(v => v.name))
          } else {
            console.log("No Arabic voices detected")
          }
        }
      }

      // Load voices immediately
      loadVoices()

      // Some browsers need this event to load voices
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices
      }

      // Multiple fallback attempts to ensure voices are loaded
      const timeouts = [100, 500, 1000, 2000]
      timeouts.forEach(delay => {
        setTimeout(loadVoices, delay)
      })
    }

    // Cleanup function
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const startSpeech = (volumeToUse: number = volume) => {
    if (!isSupported || !voicesLoaded) {
      console.log("Speech synthesis not ready")
      return
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    // Start new speech
    const utterance = new SpeechSynthesisUtterance(text)
    
     // Get available voices
     const voices = window.speechSynthesis.getVoices()
     console.log("Available voices:", voices.map(v => `${v.name} (${v.lang})`))
     
     // Check specifically for Arabic voices
     const arabicVoices = voices.filter(voice => 
       voice.lang.startsWith('ar-') || voice.lang === 'ar' || 
       voice.name.toLowerCase().includes('arabic') ||
       voice.name.toLowerCase().includes('salma') ||
       voice.name.toLowerCase().includes('zeina') ||
       voice.name.toLowerCase().includes('hoda') ||
       voice.name.toLowerCase().includes('maged')
     )
     console.log("Arabic voices found:", arabicVoices.map(v => `${v.name} (${v.lang})`))
     
     // Prioritize high-quality French female voices and Arabic voices
     const preferredFrenchVoiceNames = [
       'Amelie',
       'Amelie (Enhanced)',
       'Samantha (Enhanced)',
       'Microsoft Hortense - French (France)',
       'Microsoft Denise - French (France)',
       'Microsoft Julie - French (France)',
       'Aurelie',
       'Google français',
       'Google French'
     ]
     
     const preferredArabicVoiceNames = [
       'Microsoft Salma - Arabic (Egypt)',
       'Microsoft Zeina - Arabic (Egypt)',
       'Microsoft Hoda - Arabic (Egypt)',
       'Microsoft Naayf - Arabic (Saudi Arabia)',
       'Microsoft Talal - Arabic (Saudi Arabia)',
       'Google العربية',
       'Google Arabic',
       'Arabic Female',
       'Arabic',
       'Salma',
       'Zeina',
       'Hoda',
       'Naayf',
       'Talal'
     ]
     
     // Check text language to determine voice preference
     const hasArabicText = /[\u0600-\u06FF]/.test(text)
     const hasFrenchText = /[àâäéèêëïîôöùûüÿç]/.test(text)
     const hasEnglishText = /[a-zA-Z]/.test(text) && !hasFrenchText && !hasArabicText
     
     console.log("Text analysis:", { hasArabicText, hasEnglishText, hasFrenchText })
     console.log("Sample text:", text.substring(0, 50))
     
     let selectedVoice = null
     
     // Priority 1: Arabic voices for Arabic text
     if (hasArabicText) {
       console.log("Looking for Arabic voices...")
       
       // First try to find any Arabic voice (broader search)
       selectedVoice = arabicVoices.find(voice => 
         preferredArabicVoiceNames.some(name => voice.name.includes(name))
       )
       
       // If no preferred Arabic voice, try any Arabic voice
       if (!selectedVoice && arabicVoices.length > 0) {
         selectedVoice = arabicVoices[0] // Use first available Arabic voice
         console.log("Using first available Arabic voice:", selectedVoice.name)
       }
       
       // If still no Arabic voices, try broader search in all voices
       if (!selectedVoice) {
         selectedVoice = voices.find(voice => 
           voice.name.toLowerCase().includes('arabic') ||
           voice.name.toLowerCase().includes('salma') ||
           voice.name.toLowerCase().includes('zeina') ||
           voice.name.toLowerCase().includes('hoda') ||
           voice.name.toLowerCase().includes('maged')
         )
       }
       
       // If no Arabic voices available, use English voice as fallback for Arabic text
       if (!selectedVoice) {
         console.log("No Arabic voices found, using English fallback...")
         selectedVoice = voices.find(voice => 
           (voice.lang.startsWith('en-') || voice.lang === 'en') && 
           (voice.name.includes('Zira') || voice.name.includes('Samantha') || voice.name.includes('Google US English'))
         )
       }
       console.log("Arabic voice found:", selectedVoice?.name)
     }
     
     // Priority 2: English voices for English text
     else if (hasEnglishText) {
       console.log("Looking for English voices...")
       // Try to find a preferred English female voice
       const preferredEnglishVoiceNames = [
         'Samantha',
         'Samantha (Enhanced)',
         'Microsoft Zira - English (United States)',
         'Microsoft Susan - English (United States)',
         'Microsoft Hazel - English (Great Britain)',
         'Google English',
         'Google English (US)',
         'English Female',
         'English'
       ]
       
       selectedVoice = voices.find(voice => 
         (voice.lang.startsWith('en-') || voice.lang === 'en') && 
         preferredEnglishVoiceNames.some(name => voice.name.includes(name))
       )
       
       // If no preferred English voice, try any English voice
       if (!selectedVoice) {
         selectedVoice = voices.find(voice => 
           voice.lang.startsWith('en-') || voice.lang === 'en'
         )
       }
       console.log("English voice found:", selectedVoice?.name)
     }
     
     // Priority 3: French voices for French text or fallback
     if (!selectedVoice) {
       console.log("Looking for French voices...")
       // Try to find a preferred high-quality French female voice
       selectedVoice = voices.find(voice => 
         (voice.lang.startsWith('fr-') || voice.lang === 'fr') && 
         preferredFrenchVoiceNames.some(name => voice.name.includes(name))
       )
       
       // If no preferred French voice, try any premium/natural sounding French voice
       if (!selectedVoice) {
         selectedVoice = voices.find(voice => 
           (voice.lang.startsWith('fr-') || voice.lang === 'fr') && 
           (voice.name.toLowerCase().includes('premium') || 
            voice.name.toLowerCase().includes('enhanced') ||
            voice.name.toLowerCase().includes('natural'))
         )
       }
       
       // Fallback to any French voice
       if (!selectedVoice) {
         selectedVoice = voices.find(voice => 
           voice.lang.startsWith('fr-') || voice.lang === 'fr'
         )
       }
       console.log("French voice found:", selectedVoice?.name)
     }
    
     if (selectedVoice) {
       utterance.voice = selectedVoice
       console.log("Selected voice:", selectedVoice.name, "Language:", selectedVoice.lang)
     }
     
     // Set language based on text content, but be smart about fallbacks
     if (hasArabicText) {
       // Only set Arabic language if we have an Arabic voice, otherwise use English
       if (selectedVoice && (selectedVoice.lang.startsWith('ar-') || selectedVoice.lang === 'ar')) {
         utterance.lang = "ar-SA"
         console.log("Setting language to Arabic")
       } else {
         utterance.lang = "en-US"
         console.log("No Arabic voice available, using English language for Arabic text")
       }
     } else if (hasEnglishText) {
       utterance.lang = "en-US"
       console.log("Setting language to English")
     } else {
       utterance.lang = "fr-FR"
       console.log("Setting language to French")
     }
    utterance.rate = 0.85  // Slightly slower for more elegance
    utterance.pitch = 0.95  // Slightly lower pitch for more sophistication
    utterance.volume = volumeToUse

    utterance.onstart = () => {
      console.log("Speech started")
      setIsPlaying(true)
      setIsPaused(false)
    }

    utterance.onend = () => {
      console.log("Speech ended")
      setIsPlaying(false)
      setIsPaused(false)
      utteranceRef.current = null
    }

    utterance.onerror = (event) => {
      console.error("Speech error:", event)
      setIsPlaying(false)
      setIsPaused(false)
      utteranceRef.current = null
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  const handlePlay = () => {
    if (!isSupported || !voicesLoaded) {
      console.log("Speech synthesis not ready")
      return
    }

    // If already speaking, pause it
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause()
      setIsPaused(true)
      return
    }

    // If paused, resume it
    if (window.speechSynthesis.paused && utteranceRef.current) {
      window.speechSynthesis.resume()
      setIsPaused(false)
      return
    }

    // Start new speech
    startSpeech()
  }

  const handleStop = () => {
    if (!isSupported) return
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setIsPaused(false)
    utteranceRef.current = null
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    
    // If currently playing, we need to restart to apply new volume
    if (isPlaying && !isPaused && utteranceRef.current) {
      // Cancel and restart with new volume
      window.speechSynthesis.cancel()
      
      // Small delay to prevent UI jumping
      setTimeout(() => {
        startSpeech(newVolume)
      }, 50)
    }
  }

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="w-4 h-4" />
    if (volume < 0.5) return <Volume1 className="w-4 h-4" />
    return <Volume2 className="w-4 h-4" />
  }

  if (!isSupported) {
    return null
  }

  return (
    <div className="mt-6 group">
      <div className="inline-flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlay}
          disabled={!voicesLoaded}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={isPaused ? "Reprendre la lecture" : isPlaying ? "Mettre en pause" : "Lire le texte"}
        >
          {isPlaying && !isPaused ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>

        {/* Text and Status */}
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-sm font-sans text-charcoal font-semibold">
            {title || "Écouter le texte"}
          </span>
          {isPlaying && (
            <span className="text-xs font-sans text-blue-600 animate-gentle-pulse font-medium">
              {isPaused ? "⏸ En pause..." : "▶ Lecture en cours..."}
            </span>
          )}
          {!voicesLoaded && (
            <span className="text-xs font-sans text-charcoal/50">
              Chargement...
            </span>
          )}
        </div>

        {/* Volume Control - Compact */}
        <div className="relative flex items-center gap-2">
          <button
            onClick={() => setShowVolumeSlider(!showVolumeSlider)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-all duration-300 shadow-sm hover:shadow"
            aria-label="Ajuster le volume"
          >
            {getVolumeIcon()}
          </button>
          
          {showVolumeSlider && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-4 bg-white border-2 border-blue-200 rounded-xl shadow-xl animate-gentle-scale z-50">
              <div className="flex flex-col items-center gap-2 w-32">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-blue-700 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                />
                <span className="text-xs font-sans text-blue-600 font-semibold">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Stop Button */}
        {isPlaying && (
          <button
            onClick={handleStop}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-all duration-300 shadow-sm hover:shadow"
            aria-label="Arrêter la lecture"
          >
            <VolumeX className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="relative">
        <div className="absolute -top-1 left-10 w-16 h-px bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -bottom-1 left-10 w-16 h-px bg-gradient-to-r from-blue-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75"></div>
      </div>
    </div>
  )
}

