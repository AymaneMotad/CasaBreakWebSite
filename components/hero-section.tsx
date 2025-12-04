"use client"

import { VideoPlayer } from "./video-player"
import { useTranslations } from 'next-intl'

export function HeroSection() {
  const t = useTranslations('home.hero')
  
  return (
    <section className="relative min-h-[110vh] lg:min-h-[120vh] flex items-center justify-center bg-charcoal overflow-hidden pt-32 lg:pt-40">
      <div className="absolute inset-0 z-0">
        <img
          src="/casablanca-cityscape-atlantic-ocean-aerial-view-mo.jpg"
          alt="Casablanca cityscape"
          className="w-full h-full object-cover animate-gentle-float"
        />
        
        {/* Subtle video enhancement - lighter overlay (reduced on mobile) */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/25 lg:from-charcoal/30 lg:to-charcoal/40" />
        
        {/* Color enhancement overlay - subtle (only on desktop) */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-br from-[#00a346]/8 via-transparent to-[#c10000]/8 mix-blend-overlay" />
        
        {/* Dynamic light effect - gentle (only on desktop) */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-off-white/3 to-transparent animate-gentle-float" />
        
        {/* Moroccan Artistic Elements (more subtle on mobile) */}
        <div className="absolute inset-0 z-10 opacity-50 lg:opacity-100">
          {/* Top decorative border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00a346]/60 to-transparent"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c10000]/35 to-transparent"></div>
          
          
          {/* Side decorative lines */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#00a346]/40 to-transparent"></div>
          <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#c10000]/40 to-transparent"></div>
          
          {/* Bottom decorative elements */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-10 opacity-30">
            <svg viewBox="0 0 160 40" className="w-full h-full text-[#00a346]/60">
              <path d="M8 20 Q40 8, 72 20 Q104 32, 136 20 Q144 16, 152 20" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="32" cy="20" r="3" fill="currentColor"/>
              <circle cx="64" cy="20" r="3" fill="currentColor"/>
              <circle cx="96" cy="20" r="3" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        
        {/* Elegant Patrimoine badge with artistic styling */}
        <div className="relative z-30 animate-gentle-fade-in -mb-8">
          <div className="inline-block relative">
            {/* Decorative border elements */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00a346]/20 via-transparent to-[#c10000]/20 rounded-full blur-sm"></div>
            <div className="relative px-8 py-4 bg-gradient-to-r from-charcoal/80 via-charcoal/70 to-charcoal/80 backdrop-blur-md border border-off-white/20 rounded-full shadow-2xl">
              <span className="text-off-white text-sm font-sans tracking-widest uppercase font-medium drop-shadow-lg">
                {t("badge")}
              </span>
              {/* Subtle accent dots */}
              <div className="absolute -right-2 -top-1 w-2 h-2 bg-[#00a346]/60 rounded-full animate-gentle-pulse"></div>
              <div className="absolute -left-2 -bottom-1 w-1.5 h-1.5 bg-[#c10000]/60 rounded-full animate-gentle-pulse delay-300"></div>
            </div>
          </div>
        </div>
        
        {/* Refined text container with reduced opacity and elegant styling */}
        <div className="relative bg-gradient-to-b from-charcoal/15 via-charcoal/10 to-charcoal/20 lg:from-charcoal/20 lg:via-charcoal/15 lg:to-charcoal/25 rounded-3xl backdrop-blur-md pt-8 pb-8 px-6 lg:px-10 max-w-2xl mx-auto border border-off-white/10 shadow-2xl">
          
          {/* Artistic corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 opacity-20">
            <svg viewBox="0 0 32 32" className="w-full h-full text-[#00a346]/40">
              <path d="M4 4 L28 4 L28 8 L8 8 L8 28 L4 28 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
            <svg viewBox="0 0 32 32" className="w-full h-full text-[#c10000]/40">
              <path d="M28 4 L4 4 L4 8 L24 8 L24 28 L28 28 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 w-8 h-8 opacity-20">
            <svg viewBox="0 0 32 32" className="w-full h-full text-[#00a346]/40">
              <path d="M4 28 L28 28 L28 24 L8 24 L8 4 L4 4 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20">
            <svg viewBox="0 0 32 32" className="w-full h-full text-[#c10000]/40">
              <path d="M28 28 L4 28 L4 24 L24 24 L24 4 L28 4 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Elegant title with artistic flourishes */}
          <div className="relative mb-6">
            <h1 className="relative z-10 font-serif font-light text-3xl md:text-4xl lg:text-5xl text-off-white leading-tight tracking-wide animate-gentle-fade-in stagger-1 drop-shadow-2xl">
              {t("title")}
            </h1>
            {/* Decorative line under title */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#00a346]/40 to-transparent animate-gentle-fade-in stagger-2"></div>
          </div>
          
          {/* Refined description with better spacing */}
          <p className="relative z-10 font-sans text-base md:text-lg text-off-white/95 max-w-2xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2 text-readable mb-10 drop-shadow-xl">
            {t("description")}
          </p>

          {/* Elegant button group with artistic styling */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center items-center animate-gentle-fade-in stagger-3">
            {/* Primary button with enhanced styling */}
            <a
              href="/visiter/individuels"
              className="group relative px-10 py-4 bg-gradient-to-r from-[#00a346]/90 to-[#c10000]/90 text-off-white text-sm font-sans tracking-wider uppercase hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-full shadow-xl border border-off-white/20 font-medium backdrop-blur-sm overflow-hidden"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00a346] to-[#c10000] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">{t("visitButton")}</span>
              {/* Decorative corner elements */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-off-white/60 rounded-full group-hover:animate-pulse"></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-off-white/60 rounded-full group-hover:animate-pulse delay-150"></div>
            </a>
            
            {/* Secondary button with refined styling */}
            <a
              href="/decouvrir/histoire"
              className="group relative px-10 py-4 bg-transparent border-2 border-off-white/40 text-off-white text-sm font-sans tracking-wider uppercase hover:bg-off-white/10 hover:border-off-white/60 transition-all duration-500 rounded-full backdrop-blur-md shadow-lg font-medium overflow-hidden"
            >
              <span className="relative z-10">{t("discoverButton")}</span>
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-off-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
