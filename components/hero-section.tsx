"use client"

import { VideoPlayer } from "./video-player"

export function HeroSection() {
  return (
    <section className="relative min-h-[110vh] lg:min-h-[120vh] flex items-center justify-center bg-charcoal overflow-hidden pt-32 lg:pt-40">
      <div className="absolute inset-0 z-0">
        <VideoPlayer
          src="http://casaevents.ma/wp-content/uploads/2025/10/WhatsApp-Video-2025-10-02-at-11.13.41.mp4"
          poster="/site-map-images/architecture-optimized/cethedrale image.jpeg"
          className="w-full h-full object-cover animate-gentle-float"
          showControls={true}
        />
        
        {/* Subtle video enhancement - lighter overlay (reduced on mobile) */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/10 via-transparent to-charcoal/15 lg:from-charcoal/20 lg:to-charcoal/30" />
        
        {/* Color enhancement overlay - subtle (only on desktop) */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-br from-vibrant-pink/8 via-blue-500/4 to-warm-terracotta/8 mix-blend-overlay" />
        
        {/* Dynamic light effect - gentle (only on desktop) */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-off-white/3 to-transparent animate-gentle-float" />
        
        {/* Moroccan Artistic Elements (more subtle on mobile) */}
        <div className="absolute inset-0 z-10 opacity-50 lg:opacity-100">
          {/* Top decorative border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/60 to-transparent"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent"></div>
          
          
          {/* Side decorative lines */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/40 to-transparent"></div>
          <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/40 to-transparent"></div>
          
          {/* Bottom decorative elements */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-10 opacity-30">
            <svg viewBox="0 0 160 40" className="w-full h-full text-vibrant-pink/60">
              <path d="M8 20 Q40 8, 72 20 Q104 32, 136 20 Q144 16, 152 20" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="32" cy="20" r="3" fill="currentColor"/>
              <circle cx="64" cy="20" r="3" fill="currentColor"/>
              <circle cx="96" cy="20" r="3" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        
        {/* Patrimoine badge - positioned to overlap container */}
        <div className="relative z-30 animate-gentle-fade-in -mb-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-blue-600 rounded-full shadow-2xl">
            <span className="text-white text-sm font-sans tracking-wider uppercase font-semibold drop-shadow-lg">
              Patrimoine Culturel • Depuis 1930
            </span>
          </div>
        </div>
        
        {/* Enhanced text contrast background container (more compact) */}
        <div className="relative bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/50 lg:from-charcoal/60 lg:via-charcoal/40 lg:to-charcoal/70 rounded-2xl backdrop-blur-sm pt-8 pb-8 px-6 lg:px-8 max-w-4xl mx-auto">
          
          <h1 className="relative z-10 font-serif font-normal text-3xl md:text-4xl lg:text-5xl text-off-white mb-4 leading-tight tracking-wide animate-gentle-fade-in stagger-1 drop-shadow-2xl">
          Un joyau patrimonial au cœur de Casablanca
          </h1>
          
          
          <p className="relative z-10 font-sans text-base md:text-lg text-off-white max-w-xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2 text-readable mb-8 drop-shadow-xl">
            L'icône du patrimoine casablancais, l'espace sacré coeur, s'éveille à une nouvelle vie.
            Désormais centre culturel et espace de création, elle incarne la rencontre entre la mémoire d'hier et la modernité d'aujourd'hui.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-gentle-fade-in stagger-3">
            <a
              href="/visiter/individuels"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg shadow-lg border-2 border-blue-600 font-semibold"
            >
              Visiter
            </a>
            <a
              href="/decouvrir/histoire"
              className="px-8 py-3 bg-transparent border-2 border-off-white/60 text-off-white text-sm font-sans tracking-wider uppercase hover:bg-off-white/20 hover:border-off-white/80 transition-all duration-300 rounded-lg backdrop-blur-sm shadow-lg font-semibold"
            >
              Découvrir
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-gentle-fade-in stagger-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-off-white/30 to-transparent animate-gentle-pulse" />
          <div className="w-2 h-2 bg-off-white/60 rounded-full animate-gentle-pulse" />
        </div>
      </div>
    </section>
  )
}
