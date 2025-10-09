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
      
      // Load voices
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices()
        if (voices.length > 0) {
          setVoicesLoaded(true)
        }
      }

      // Load voices immediately
      loadVoices()

      // Some browsers need this event to load voices
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices
      }

      // Fallback timeout to ensure voices are loaded
      setTimeout(loadVoices, 100)
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
    
    // Prioritize high-quality French voices (Google, Microsoft, Apple)
    const preferredVoiceNames = [
      'Google français',
      'Google French',
      'Microsoft Hortense - French (France)',
      'Microsoft Denise - French (France)',
      'Thomas',
      'Amelie',
      'Samantha (Enhanced)',
      'Amelie (Enhanced)'
    ]
    
    // Try to find a preferred high-quality voice first
    let frenchVoice = voices.find(voice => 
      (voice.lang.startsWith('fr-') || voice.lang === 'fr') && 
      preferredVoiceNames.some(name => voice.name.includes(name))
    )
    
    // If no preferred voice, try to find any premium/natural sounding French voice
    if (!frenchVoice) {
      frenchVoice = voices.find(voice => 
        (voice.lang.startsWith('fr-') || voice.lang === 'fr') && 
        (voice.name.toLowerCase().includes('premium') || 
         voice.name.toLowerCase().includes('enhanced') ||
         voice.name.toLowerCase().includes('natural'))
      )
    }
    
    // Fallback to any French voice
    if (!frenchVoice) {
      frenchVoice = voices.find(voice => 
        voice.lang.startsWith('fr-') || voice.lang === 'fr'
      )
    }
    
    if (frenchVoice) {
      utterance.voice = frenchVoice
    }
    
    utterance.lang = "fr-FR"
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

