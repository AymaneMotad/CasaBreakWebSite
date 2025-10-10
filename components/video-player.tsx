"use client"

import { useRef, useState, useEffect } from "react"
import { Play, Pause } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  showControls?: boolean
}

export function VideoPlayer({ src, poster, className = "", showControls = true }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        // Autoplay was prevented, show play button
        setIsPlaying(false)
        setShowButton(true)
      })
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className={className}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {showControls && (
        <button
          onClick={togglePlay}
          className={`
            absolute top-4 right-4 z-10
            p-3 rounded-full
            bg-charcoal/60 hover:bg-charcoal/80 backdrop-blur-sm
            text-white
            transition-all duration-300
            ${showButton || !isPlaying ? 'opacity-100' : 'opacity-0'}
          `}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </button>
      )}
    </div>
  )
}

