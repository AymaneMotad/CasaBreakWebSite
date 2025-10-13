"use client"

import { VideoPlayer } from "./video-player"

export function SpinningCathedral() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Moroccan Artistic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative border */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-vibrant-pink/30 to-transparent"></div>
        
        {/* Side decorative lines */}
        <div className="absolute left-0 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-blue-500/18 to-transparent"></div>
        <div className="absolute right-0 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-warm-terracotta/20 to-transparent"></div>
        
        {/* Bottom decorative elements */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-6 opacity-15">
          <svg viewBox="0 0 128 24" className="w-full h-full text-vibrant-pink/30">
            <path d="M8 12 Q32 4, 56 12 Q80 20, 104 12 Q112 8, 120 12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="32" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="64" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="96" cy="12" r="1.5" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Centered Text Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-vibrant-pink"></div>
            <div className="w-2 h-2 rounded-full bg-vibrant-pink"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-vibrant-pink"></div>
          </div>
          
          <h2 className="font-serif text-3xl lg:text-5xl text-charcoal mb-6 leading-tight">
            Un Monument au Cœur de Casablanca
          </h2>
          
          <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
            Découvrez l'histoire fascinante de l'Ex église Sacré-Cœur, un joyau architectural Art Déco 
            qui continue d'inspirer et de rassembler les Casablancais et les visiteurs du monde entier.
          </p>
        </div>

        {/* 3D Video Section */}
        <div className="animate-fade-in-up stagger-1">
          <div className="w-full max-w-3xl mx-auto">
            <VideoPlayer
              src="/videos/sacreloop.mp4"
              className="w-full h-auto rounded-lg"
              showControls={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
