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
    
    // Try to find a French voice
    const frenchVoice = voices.find(voice => 
      voice.lang.startsWith('fr-') || voice.lang === 'fr'
    )
    
    if (frenchVoice) {
      utterance.voice = frenchVoice
    }
    
    utterance.lang = "fr-FR"
    utterance.rate = 0.9
    utterance.pitch = 1
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
    <div className="mt-4 group">
      <div className="inline-flex items-center gap-3 px-4 py-3 bg-primary/5 hover:bg-primary/10 rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlay}
          disabled={!voicesLoaded}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={isPaused ? "Reprendre la lecture" : isPlaying ? "Mettre en pause" : "Lire le texte"}
        >
          {isPlaying && !isPaused ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>

        {/* Text and Status */}
        <div className="flex flex-col flex-1">
          <span className="text-sm font-sans text-foreground font-medium">
            {title || "Écouter le texte"}
          </span>
          {isPlaying && (
            <span className="text-xs font-sans text-primary animate-gentle-pulse">
              {isPaused ? "En pause..." : "Lecture en cours..."}
            </span>
          )}
          {!voicesLoaded && (
            <span className="text-xs font-sans text-muted-foreground">
              Chargement...
            </span>
          )}
        </div>

        {/* Volume Control - Compact */}
        <div className="relative flex items-center gap-2">
          <button
            onClick={() => setShowVolumeSlider(!showVolumeSlider)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
            aria-label="Ajuster le volume"
          >
            {getVolumeIcon()}
          </button>
          
          {showVolumeSlider && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 bg-background border border-primary/20 rounded-lg shadow-lg animate-gentle-scale z-50">
              <div className="flex flex-col items-center gap-2 w-32">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                />
                <span className="text-xs font-sans text-primary font-medium">
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
            className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
            aria-label="Arrêter la lecture"
          >
            <VolumeX className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="relative">
        <div className="absolute -top-1 left-8 w-12 h-px bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  )
}

