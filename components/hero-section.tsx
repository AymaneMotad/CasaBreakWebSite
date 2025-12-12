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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-emerald-50/60" style={{ paddingTop: '0', marginTop: '0' }}>
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-blue-100/30 to-rose-100/30" />
        {/* Primary gradient orbs - Responsive sizing */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] bg-[#00a346]/25 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] bg-[#0066b2]/25 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] bg-[#c10000]/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        {/* Grid pattern overlay - Responsive grid size */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px] md:bg-[size:60px_60px]" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/90 backdrop-blur-sm border border-emerald-200/50 shadow-sm mb-6 sm:mb-8 animate-fade-in-up">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a346]" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wide">
                {t("badge")}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="font-serif text-3xl min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-[1.1] mb-4 sm:mb-5 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="block">Découvrez</span>
              <span className="block text-gradient-can">Casablanca</span>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-700 leading-relaxed sm:leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t("description")}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={triggerInstall}
                className="group relative inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#00a346] via-[#0066b2] to-[#00a346] bg-[length:200%_100%] text-white text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-[#00a346]/25 hover:shadow-[#00a346]/40 hover:scale-105 active:scale-95"
              >
                <span>{t("visitButton")}</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/5 border border-white/10 text-white text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm active:scale-95"
              >
                {t("discoverButton")}
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 border-t border-gray-200/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-0.5 sm:mb-1">+500</div>
                <div className="text-xs sm:text-sm text-gray-600">Lieux</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-0.5 sm:mb-1">+50K</div>
                <div className="text-xs sm:text-sm text-gray-600">Utilisateurs</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-0.5 sm:mb-1">4.9</div>
                <div className="text-xs sm:text-sm text-gray-600">Note App</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Dynamic Visual */}
          <div className="relative order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-[#00a346]/30 via-[#0066b2]/20 to-[#c10000]/30 rounded-full blur-[80px] sm:blur-[90px] md:blur-[100px]" />
            </div>
            
            {/* Main Image Grid - Casablanca Vibes */}
            <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Central large image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1696259629194-5411989d6675?w=800&q=80"
                  alt="Casablanca - Hassan II Mosque"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 flex-wrap">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#00a346] text-white text-[10px] sm:text-xs font-bold rounded-full">POPULAIRE</span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 backdrop-blur text-white text-[10px] sm:text-xs font-medium rounded-full">À voir</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">Mosquée Hassan II</h3>
                  <p className="text-white/70 text-[11px] sm:text-xs md:text-sm">Le joyau architectural de Casablanca</p>
                </div>
              </div>
              
              {/* Floating cards - Hidden on very small screens, shown with adjusted positioning on larger */}
              <div className="hidden min-[375px]:block absolute -top-2 sm:-top-4 -left-2 sm:-left-4 md:-left-8 lg:-left-12 animate-subtle-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=100&q=80" alt="Restaurant" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">Restaurants</div>
                    <div className="text-[10px] sm:text-xs text-[#00a346] font-medium">+200 adresses</div>
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:block absolute top-1/4 -right-2 sm:-right-4 md:-right-8 lg:-right-16 animate-subtle-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&q=80" alt="Café" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">Cafés</div>
                    <div className="text-[10px] sm:text-xs text-[#0066b2] font-medium">+150 spots</div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block absolute bottom-1/4 -left-2 sm:-left-4 md:-left-8 lg:-left-16 animate-subtle-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#c10000] to-[#00a346] flex items-center justify-center flex-shrink-0">
                    <span className="text-base sm:text-xl">🎉</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">Événements</div>
                    <div className="text-[10px] sm:text-xs text-[#c10000] font-medium">Cette semaine</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-6 right-2 sm:right-4 md:right-0 lg:right-0 animate-subtle-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#00a346] rounded-full shadow-lg">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping" />
                  <span className="text-white text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap">+500 lieux à découvrir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 scroll-indicator z-10">
        <div className="flex flex-col items-center gap-1.5 sm:gap-2">
          <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 animate-bounce" />
        </div>
      </div>
      
      {/* Bottom gradient fade - Responsive height */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-emerald-50/60 to-transparent z-[5]" />
    </section>
  )
}
