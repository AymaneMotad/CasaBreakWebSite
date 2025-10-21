"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'

export default function EvenementsPage() {
  const t = useTranslations('evenements')
  const locale = useLocale()
  
  const pastEvents = [
    {
      title: t("events.festivalEgregore.title"),
      image: "/dosei.jpeg",
      description: t("events.festivalEgregore.description"),
    },
    {
      title: t("events.inauguration.title"),
      image: "/site-map-images/evenements-optimized/soiree/evenement - soiree 2.jpg",
      description: t("events.inauguration.description"),
    },
    {
      title: t("events.smartCity.title"),
      image: "/site-map-images/evenements-optimized/smart-city/evenement-smartcity2.jpg",
      description: t("events.smartCity.description"),
    },
  ]

  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("breadcrumb.events"), href: `/${locale}/evenements` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/site-map-images/evenements-optimized/soiree/evenement - soiree 1.jpg" 
          alt={t("hero.imageAlt")} 
          fill 
          className="object-cover animate-subtle-float" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        
        {/* Moroccan Artistic Elements */}
        <div className="absolute inset-0 z-5">
          {/* Top decorative border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/50 to-transparent"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-terracotta/40 to-transparent"></div>
          
          {/* Corner geometric patterns */}
          <div className="absolute top-8 left-8 w-16 h-16 opacity-25">
            <svg viewBox="0 0 64 64" className="w-full h-full text-vibrant-pink/50">
              <path d="M8 8 L56 8 L56 56 L8 56 Z M16 16 L48 16 L48 48 L16 48 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M24 24 L40 24 L40 40 L24 40 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-8 right-8 w-16 h-16 opacity-25">
            <svg viewBox="0 0 64 64" className="w-full h-full text-warm-terracotta/50">
              <path d="M8 8 L56 8 L56 56 L8 56 Z M16 16 L48 16 L48 48 L16 48 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M24 24 L40 24 L40 40 L24 40 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          {/* Side decorative lines */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/30 to-transparent"></div>
          <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/30 to-transparent"></div>
          
          {/* Bottom decorative elements */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 opacity-20">
            <svg viewBox="0 0 128 32" className="w-full h-full text-vibrant-pink/40">
              <path d="M8 16 Q32 4, 56 16 Q80 28, 104 16 Q112 12, 120 16" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="32" cy="16" r="2" fill="currentColor"/>
              <circle cx="64" cy="16" r="2" fill="currentColor"/>
              <circle cx="96" cy="16" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-6">
       
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-off-white mb-6 animate-gentle-fade-in stagger-1 text-enhanced">
            {t("hero.title")}
          </h1>
          <p className="font-sans text-lg md:text-xl text-off-white/90 max-w-3xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2 text-readable">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Past Events Gallery - Enhanced */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-off-white to-charcoal/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-vibrant-pink/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-vibrant-pink"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-vibrant-pink/60"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 animate-fade-in-up">
              {t("events.title")}
            </h2>
            <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
              {t("events.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={event.title}
                className={`group relative h-[380px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up stagger-${index + 1}`}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                />
                {/* Strong overlay for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 group-hover:from-black/95 transition-all duration-500" />
                
                {/* Border accent */}
                <div className="absolute inset-0 border-2 border-off-white/10 group-hover:border-vibrant-pink/40 transition-all duration-500 rounded-xl"></div>
                
                {/* Text content - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10 text-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-vibrant-pink to-transparent mb-4 group-hover:w-20 transition-all duration-500"></div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] text-center leading-tight">
                    {event.title}
                  </h3>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white/90 text-sm leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-center">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
