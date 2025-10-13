"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

interface ImageLightboxProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function ImageLightbox({ src, alt, width, height, className }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Thumbnail with hover effect */}
      <div
        className="relative group cursor-pointer overflow-hidden rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width || 600}
          height={height || 400}
          className={className}
        />
        {/* Zoom overlay */}
        <div 
          className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}
        >
          <div 
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          >
            <ZoomIn className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            filter: 'blur(0px)'
          }}
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] animate-gentle-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}

