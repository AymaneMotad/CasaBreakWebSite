"use client"

import { VideoPlayer } from "./video-player"
import { useTranslations } from 'next-intl'

export function SpinningCathedral() {
  const t = useTranslations('home.spinningCathedral')
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Moroccan Artistic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative border */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#00a346]/30 to-transparent"></div>
        
        {/* Side decorative lines */}
        <div className="absolute left-0 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-[#00a346]/18 to-transparent"></div>
        <div className="absolute right-0 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-[#c10000]/20 to-transparent"></div>
        
        {/* Bottom decorative elements */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-6 opacity-15">
          <svg viewBox="0 0 128 24" className="w-full h-full text-[#00a346]/30">
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
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00a346]"></div>
            <div className="w-2 h-2 rounded-full bg-[#00a346]"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c10000]"></div>
          </div>
          
          <h2 className="font-serif text-3xl lg:text-5xl text-charcoal mb-6 leading-tight">
            {t("title")}
          </h2>
          
          <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Image Grid Section - Casablanca Attractions */}
        <div className="animate-fade-in-up stagger-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
              <img
                src="/decouvrer/decouvrer-5.jpg"
                alt="Monuments de Casablanca"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg">Monuments</h3>
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
              <img
                src="/decouvrer/decouvrer-6.jpg"
                alt="Restaurants à Casablanca"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg">Restaurants</h3>
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
              <img
                src="/decouvrer/decouvrer-7.jpg"
                alt="Cafés à Casablanca"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg">Cafés</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
