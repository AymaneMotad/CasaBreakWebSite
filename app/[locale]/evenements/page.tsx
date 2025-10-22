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

      {/* Past Events - Elegant Portfolio Gallery */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal relative overflow-hidden">
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-20 w-40 h-40">
            <svg viewBox="0 0 128 128" className="w-full h-full text-off-white">
              <path d="M16 16 L112 16 L112 112 L16 112 Z M32 32 L96 32 L96 96 L32 96 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="64" cy="64" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-20 w-40 h-40">
            <svg viewBox="0 0 128 128" className="w-full h-full text-off-white">
              <path d="M16 16 L112 16 L112 112 L16 112 Z M32 32 L96 32 L96 96 L32 96 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="64" cy="64" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            <svg viewBox="0 0 200 200" className="w-full h-full text-off-white/5">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Enhanced Header with Elegant Typography */}
          <div className="text-center mb-20 lg:mb-24 animate-fade-in-up">
            <div className="inline-flex items-center gap-4 mb-8">
           
              
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-off-white mb-8 tracking-tight leading-[0.9]">
              {t("trust.title")}
              <span className="block text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-vibrant-pink via-warm-terracotta to-vibrant-pink bg-clip-text text-transparent uppercase font-light tracking-[0.15em] leading-[1.2] mt-4 pb-2">
                {t("trust.subtitle")}
              </span>
            </h2>
            
            <p className="font-sans text-xl md:text-2xl text-off-white/80 max-w-5xl mx-auto leading-relaxed">
              {t("trust.description")}
            </p>
          </div>

          {/* Enhanced Grid Gallery - No Empty Spaces */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                title: "Lancement Ferrari",
                
                image: "/site-map-images/reserver sacre coeur/reserver sacre coeur - ferrari /reserver sacre coeur - ferrari 1.jpeg"
              },
              {
                title: "LH Fashion Show",
                
                image: "/site-map-images/reserver sacre coeur/fashion show/fashion-show.jpg"
              },
              {
                title: "Casablanca Arab Film Festival",
                
                image: "/site-map-images/reserver sacre coeur/casa arab festival/WhatsApp Image 2025-10-02 at 11.26.11 AM.jpeg"
              },
              
              {
                title: "Co-branding VISA & RAM",
                
                image: "/site-map-images/reserver sacre coeur/coebranding ram visa/WhatsApp Image 2025-10-02 at 12.02.47 PM.jpeg"
              },
              {
                title: "Young Moroccan Architecture Awards",
                
                image: "/site-map-images/reserver sacre coeur/ymaa/yama.jpg"
              },
            ].map((event, index) => (
              <div
                key={event.title}
                className={`group relative h-[350px] rounded-xl overflow-hidden animate-fade-in-up stagger-${index + 1} transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-vibrant-pink/20`}
              >
                {/* Premium Container with Enhanced Styling */}
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-charcoal/20 to-charcoal/40 backdrop-blur-sm border border-off-white/10 group-hover:border-vibrant-pink/30 transition-all duration-500">
                  
                  {/* Image Container */}
                  <div className="absolute inset-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                  
                  {/* Sophisticated Overlay with Enhanced Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:from-black/98 group-hover:via-black/70 transition-all duration-500"></div>
                  
                  {/* Elegant Corner Accents with Enhanced Animation */}
                  <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-vibrant-pink/60 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-warm-terracotta/60 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Content Section with Enhanced Typography */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10">
                    <div className="space-y-4 transform transition-all duration-500 group-hover:translate-y-0">
                      {/* Enhanced Accent Line with Animation */}
                      <div className="w-16 h-0.5 bg-gradient-to-r from-vibrant-pink via-vibrant-pink to-transparent group-hover:w-20 transition-all duration-500"></div>
                      
                      {/* Enhanced Title with Better Typography */}
                      <h3 className="font-serif text-2xl lg:text-3xl text-white font-bold leading-tight group-hover:text-vibrant-pink transition-colors duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                        {event.title}
                      </h3>
                      
                     
                      
                      {/* Enhanced Hover Effect - Additional Info */}
                     
                    </div>
                  </div>
                  
                  {/* Enhanced Border Effect with Multiple Layers */}
                  <div className="absolute inset-0 rounded-2xl border border-off-white/5 group-hover:border-vibrant-pink/20 transition-all duration-500 pointer-events-none"></div>
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-vibrant-pink/10 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Bottom Decoration */}
          <div className="flex justify-center mt-20 lg:mt-24 animate-fade-in-up">
            <div className="flex items-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-vibrant-pink/50 to-transparent"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-vibrant-pink animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-off-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-warm-terracotta animate-pulse"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-warm-terracotta/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
