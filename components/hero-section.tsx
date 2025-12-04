"use client"

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ArrowDown, Sparkles } from 'lucide-react'

export function HeroSection() {
  const t = useTranslations('home.hero')
  
  // Simple function to trigger PWA install popup
  const triggerInstall = () => {
    window.dispatchEvent(new CustomEvent("trigger-pwa-install"));
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#00a346]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#0066b2]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-[#c10000]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm font-medium text-white/80 tracking-wide">
                {t("badge")}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="block">Découvrez</span>
              <span className="block text-gradient-can">Casablanca</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t("description")}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={triggerInstall}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00a346] via-[#0066b2] to-[#00a346] bg-[length:200%_100%] text-white font-semibold rounded-2xl hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-[#00a346]/25 hover:shadow-[#00a346]/40 hover:scale-105"
              >
                <span>{t("visitButton")}</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {t("discoverButton")}
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-white/50">Lieux</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">50K+</div>
                <div className="text-sm text-white/50">Utilisateurs</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">4.9</div>
                <div className="text-sm text-white/50">Note App</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Dynamic Visual */}
          <div className="relative order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-[#00a346]/30 via-[#0066b2]/20 to-[#c10000]/30 rounded-full blur-[100px]" />
            </div>
            
            {/* Main Image Grid - Casablanca Vibes */}
            <div className="relative z-10 w-full max-w-md">
              {/* Central large image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80"
                  alt="Casablanca - Hassan II Mosque"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#00a346] text-white text-xs font-bold rounded-full">POPULAIRE</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur text-white text-xs font-medium rounded-full">À voir</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Mosquée Hassan II</h3>
                  <p className="text-white/70 text-sm">Le joyau architectural de Casablanca</p>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 lg:-left-12 animate-subtle-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=100&q=80" alt="Restaurant" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Restaurants</div>
                    <div className="text-xs text-[#00a346] font-medium">+200 adresses</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/4 -right-4 lg:-right-16 animate-subtle-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&q=80" alt="Café" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Cafés</div>
                    <div className="text-xs text-[#0066b2] font-medium">+150 spots</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 -left-4 lg:-left-16 animate-subtle-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c10000] to-[#00a346] flex items-center justify-center">
                    <span className="text-xl">🎉</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Événements</div>
                    <div className="text-xs text-[#c10000] font-medium">Cette semaine</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 right-4 lg:right-0 animate-subtle-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#00a346] rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                  <span className="text-white text-sm font-medium">500+ lieux à découvrir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 scroll-indicator z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5 text-white/40 animate-bounce" />
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[5]" />
    </section>
  )
}
