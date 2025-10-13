"use client"

import Image from "next/image"
import { ZoomIn } from "lucide-react"

interface ImageLightboxProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function ImageLightbox({ src, alt, width, height, className }: ImageLightboxProps) {
  const openLightbox = () => {
    // Create modal HTML
    const modal = document.createElement('div')
    modal.id = 'image-lightbox-modal'
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.95);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      box-sizing: border-box;
    `
    
    // Create close button
    const closeBtn = document.createElement('button')
    closeBtn.innerHTML = '×'
    closeBtn.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: white;
      font-size: 24px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    `
    
    // Create image
    const img = document.createElement('img')
    img.src = src
    img.alt = alt
    img.style.cssText = `
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    `
    
    // Add elements to modal
    modal.appendChild(closeBtn)
    modal.appendChild(img)
    document.body.appendChild(modal)
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden'
    
    // Close functions
    const closeModal = () => {
      document.body.removeChild(modal)
      document.body.style.overflow = ''
    }
    
    closeBtn.onclick = closeModal
    modal.onclick = (e) => {
      if (e.target === modal) closeModal()
    }
    
    // Escape key
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
        document.removeEventListener('keydown', handleKeydown)
      }
    }
    document.addEventListener('keydown', handleKeydown)
  }

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      onClick={openLightbox}
    >
      <Image
        src={src}
        alt={alt}
        width={width || 600}
        height={height || 400}
        className={className}
      />
      {/* Zoom overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-white/20 p-3 rounded-full">
          <ZoomIn className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  )
}

