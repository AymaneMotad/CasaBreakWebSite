"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { TextToSpeechPlayer } from "@/components/text-to-speech-player"
import { ArchitectSection } from "@/components/architect-section"
import { useTranslations, useLocale } from 'next-intl'
import Image from "next/image"

export default function HistoirePage() {
  const t = useTranslations('histoire')
  const locale = useLocale()
  
  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("breadcrumb.discover"), href: `/${locale}/decouvrir/histoire` },
              { label: t("breadcrumb.history"), href: `/${locale}/decouvrir/histoire` }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/site-map-images/histoire-optimized/1A1_H1-19_136p.jpg"
          alt="Construction historique de l'Ex église Sacré-Cœur"
          fill
          className="object-cover grayscale animate-subtle-float"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        
        {/* Photo Credit */}
        <div className="absolute bottom-4 right-4 z-10">
          <p className="text-xs text-off-white/60 font-sans italic">
            {t("hero.photoCredit")}
          </p>
        </div>
        
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
          <div className="animate-gentle-fade-in">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-vibrant-pink/20 to-warm-terracotta/20 backdrop-blur-sm border border-off-white/20 rounded-full mb-8">
              <span className="text-off-white/90 text-sm font-sans tracking-wider uppercase">
                {t("hero.badge")}
              </span>
            </div>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-off-white mb-6 animate-gentle-fade-in stagger-1 text-enhanced">
            {t("hero.title")}
          </h1>
          <p className="font-sans text-lg md:text-xl text-off-white/90 max-w-2xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2 text-readable">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-off-white to-charcoal/5 relative overflow-hidden">
        {/* Moroccan Artistic Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top decorative elements */}
          <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/35 to-transparent"></div>
          <div className="absolute top-4 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-warm-terracotta/25 to-transparent"></div>
          
          {/* Corner geometric patterns */}
          <div className="absolute top-16 left-16 w-12 h-12 opacity-18">
            <svg viewBox="0 0 48 48" className="w-full h-full text-vibrant-pink/35">
              <path d="M6 6 L42 6 L42 42 L6 42 Z M12 12 L36 12 L36 36 L12 36 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M18 18 L30 18 L30 30 L18 30 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-16 right-16 w-12 h-12 opacity-18">
            <svg viewBox="0 0 48 48" className="w-full h-full text-warm-terracotta/35">
              <path d="M6 6 L42 6 L42 42 L6 42 Z M12 12 L36 12 L36 36 L12 36 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M18 18 L30 18 L30 30 L18 30 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          {/* Side decorative lines */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/20 to-transparent"></div>
          <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/20 to-transparent"></div>
          
          {/* Center decorative pattern */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-14 opacity-12">
            <svg viewBox="0 0 112 56" className="w-full h-full text-vibrant-pink/25">
              <path d="M8 28 Q28 14, 48 28 Q68 42, 88 28 Q96 24, 104 28" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="28" cy="28" r="2" fill="currentColor"/>
              <circle cx="56" cy="28" r="2" fill="currentColor"/>
              <circle cx="84" cy="28" r="2" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Bottom decorative elements */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 opacity-10">
            <svg viewBox="0 0 128 32" className="w-full h-full text-warm-terracotta/25">
              <path d="M8 16 Q32 4, 56 16 Q80 28, 104 16 Q112 12, 120 16" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="32" cy="16" r="1.5" fill="currentColor"/>
              <circle cx="64" cy="16" r="1.5" fill="currentColor"/>
              <circle cx="96" cy="16" r="1.5" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 animate-gentle-fade-in">
              {t("timeline.title")}
            </h2>
            <p className="font-sans text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-gentle-fade-in stagger-1">
              {t("timeline.description")}
            </p>
          </div>
          
          <div className="space-y-32">
            {/* 1923 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="animate-gentle-fade-in">
           
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1923</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">{t("timeline.events.1923.title")}</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  {t("timeline.events.1923.description")}
                </p>
                <TextToSpeechPlayer 
                  text={t("timeline.events.1923.description")}
                  title={t("timeline.events.1923.audioTitle")}
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="relative h-[500px]">
                  <Image 
                    src="/site-map-images/histoire-optimized/1A1_H1-2563_8W.jpg" 
                    alt="Plans architecturaux 1923" 
                    fill 
                    className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">{t.raw("hero.photoCredit")}</p>
              </div>
            </div>

            {/* 1930 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="animate-gentle-fade-in">
                <div className="relative h-[500px]">
                  <Image
                    src="/site-map-images/histoire-optimized/1A1_H1-4-156P341.jpg"
                    alt="Construction de l'Ex église Sacré-Cœur"
                    fill
                    className="object-cover grayscale rounded-2xl shadow-2xl hover-scale-subtle transition-smooth"
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">{t.raw("hero.photoCredit")}</p>
              </div>
              <div className="animate-gentle-fade-in stagger-1">
             
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">1930</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">{t("timeline.events.1930.title")}</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  {t("timeline.events.1930.description1")}
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  {t("timeline.events.1930.description2")}
                </p>
                <TextToSpeechPlayer 
                  text={`${t("timeline.events.1930.description1")} ${t("timeline.events.1930.description2")}`}
                  title={t("timeline.events.1930.audioTitle")}
                />
              </div>
            </div>

            {/* 1956 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="animate-gentle-fade-in">
             
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1956</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">{t("timeline.events.1956.title")}</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  {t("timeline.events.1956.description1")}
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  {t("timeline.events.1956.description2")}
                </p>
                <TextToSpeechPlayer 
                  text={`${t("timeline.events.1956.description1")} ${t("timeline.events.1956.description2")}`}
                  title={t("timeline.events.1956.audioTitle")}
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="relative h-[500px] overflow-hidden rounded-2xl">
                  <Image
                    src="/3C2_G22-39-1-044.jpg"
                    alt="Indépendance du Maroc 1956"
                    fill
                    className="object-cover grayscale shadow-2xl hover-scale-subtle transition-smooth"
                    style={{ transform: 'translateY(20px)' }}
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">{t.raw("hero.photoCredit")}</p>
              </div>
            </div>

            {/* 1976 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="animate-gentle-fade-in">
                <div className="relative h-[500px]">
                  <Image 
                    src="/site-map-images/histoire-optimized/1A2_H1-4083_-037.jpg" 
                    alt="Espace culturel 1976" 
                    fill 
                    className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">{t.raw("hero.photoCredit")}</p>
              </div>
              <div className="animate-gentle-fade-in stagger-1">
               
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">1976</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">{t("timeline.events.1976.title")}</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  {t("timeline.events.1976.description1")}
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  {t("timeline.events.1976.description2")}
                </p>
                <TextToSpeechPlayer 
                  text={`${t("timeline.events.1976.description1")} ${t("timeline.events.1976.description2")}`}
                  title={t("timeline.events.1976.audioTitle")}
                />
              </div>
            </div>

            {/* 1990-2000 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="animate-gentle-fade-in">
              
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1990-2000</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">{t("timeline.events.1990-2000.title")}</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  {t("timeline.events.1990-2000.description1")}
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  {t("timeline.events.1990-2000.description2")}
                </p>
                <TextToSpeechPlayer 
                  text={`${t("timeline.events.1990-2000.description1")} ${t("timeline.events.1990-2000.description2")}`}
                  title={t("timeline.events.1990-2000.audioTitle")}
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="relative h-[500px]">
                  <Image 
                    src="/histoire-1.png" 
                    alt="Patrimoine architectural" 
                    fill 
                    className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">{t.raw("hero.photoCredit")}</p>
              </div>
            </div>

            {/* 2010 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="animate-gentle-fade-in">
                <div className="relative h-[500px]">
                  <Image 
                    src="/site-cal/histoire-2010.JPG" 
                    alt="Réhabilitation 2010" 
                    fill 
                    className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">{t.raw("hero.photoCredit")}</p>
              </div>
              <div className="animate-gentle-fade-in stagger-1">
               
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">2010</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">{t("timeline.events.2010.title")}</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  {t("timeline.events.2010.description1")}
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  {t("timeline.events.2010.description2")}
                </p>
                <TextToSpeechPlayer 
                  text={`${t("timeline.events.2010.description1")} ${t("timeline.events.2010.description2")}`}
                  title={t("timeline.events.2010.audioTitle")}
                />
              </div>
            </div>

            {/* Aujourd'hui */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="animate-gentle-fade-in">
               
                <span className="font-serif text-6xl lg:text-7xl text-vibrant-pink block mb-6">{t("timeline.events.today.label")}</span>
                <h3 className="font-serif text-3xl lg:text-5xl text-charcoal mb-8">{t("timeline.events.today.title")}</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  {t("timeline.events.today.description1")}
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  {t("timeline.events.today.description2")}
                </p>
                <TextToSpeechPlayer 
                  text={`${t("timeline.events.today.description1")} ${t("timeline.events.today.description2")}`}
                  title={t("timeline.events.today.audioTitle")}
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="relative h-[500px]">
                  <Image 
                    src="/histoire-3.png" 
                    alt="L'Ex église Sacré-Cœur aujourd'hui" 
                    fill 
                    className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">{t.raw("hero.photoCredit")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architect Section */}
      <ArchitectSection />

      {/* Call to Action - Architecture Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-off-white via-blue-50/30 to-off-white overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute top-20 left-20 w-64 h-64 border border-blue-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-vibrant-pink rounded-full"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
                <span className="text-xs font-sans tracking-wider uppercase text-blue-600">{t("cta.badge")}</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                {t("cta.title")}
              </h2>
              
              <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-8">
                {t("cta.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/decouvrir/architecture"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-sans font-semibold tracking-wider uppercase rounded-xl hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                >
                  <span>{t("cta.button")}</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Visual Preview */}
            <div className="relative animate-fade-in-up stagger-1">
              <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/site-cal/histoire-last.JPG"
                  alt="Architecture de l'Ex église Sacré-Cœur"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                
                {/* Decorative Frame */}
                <div className="absolute inset-4 border-2 border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-sm font-sans font-semibold text-charcoal">{t("cta.label")}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-vibrant-pink/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Transition Element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
      </section>

      <Footer />
    </main>
  )
}
