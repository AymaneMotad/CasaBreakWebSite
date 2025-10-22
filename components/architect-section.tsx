"use client"

import Image from "next/image"
import { TextToSpeechPlayer } from "@/components/text-to-speech-player"
import { useTranslations } from 'next-intl'

export function ArchitectSection() {
  const t = useTranslations('architect')

  return (
    <section className="relative py-32 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        {/* Geometric architectural patterns */}
        <div className="absolute top-20 left-20 w-96 h-96 border border-vibrant-pink/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-warm-terracotta/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-off-white/10 rounded-full"></div>
        
        {/* Architectural grid pattern */}
        <div className="absolute inset-0 opacity-[0.01]">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-off-white/5"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-vibrant-pink"></div>
            <span className="text-xs font-sans tracking-wider uppercase text-vibrant-pink/80">
              {t("badge")}
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-vibrant-pink"></div>
          </div>
          
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-off-white mb-8 leading-tight">
            {t("title")}
          </h2>
          <p className="font-sans text-xl text-off-white/80 max-w-4xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Portrait and Key Info */}
          <div className="space-y-12">
            {/* Portrait Section */}
            <div className="relative group">
              <div className="relative h-[600px] overflow-hidden rounded-3xl">
                <Image
                  src="/paul.png"
                  alt="Paul Tournon, architecte du Sacré-Cœur de Casablanca"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                
                {/* Decorative Frame */}
                <div className="absolute inset-6 border-2 border-vibrant-pink/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Portrait Label */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-vibrant-pink/90 to-warm-terracotta/90 backdrop-blur-sm rounded-xl shadow-2xl">
                    <div className="w-3 h-3 rounded-full bg-off-white animate-pulse"></div>
                    <span className="text-sm font-sans font-semibold text-off-white">
                      {t("portrait.label")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-vibrant-pink/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-warm-terracotta/20 to-transparent rounded-full blur-2xl"></div>
            </div>

            {/* Key Information Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-vibrant-pink/10 to-transparent backdrop-blur-sm border border-vibrant-pink/20 rounded-2xl p-6">
                <div className="text-3xl font-serif text-vibrant-pink mb-2">
                  {t("info.birth")}
                </div>
                <div className="text-sm font-sans text-off-white/80 uppercase tracking-wider">
                  {t("info.birthLabel")}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-warm-terracotta/10 to-transparent backdrop-blur-sm border border-warm-terracotta/20 rounded-2xl p-6">
                <div className="text-3xl font-serif text-warm-terracotta mb-2">
                  {t("info.death")}
                </div>
                <div className="text-sm font-sans text-off-white/80 uppercase tracking-wider">
                  {t("info.deathLabel")}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Biography and Achievements */}
          <div className="space-y-12">
            {/* Biography */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-4xl lg:text-5xl text-off-white mb-6">
                  {t("biography.title")}
                </h3>
                <div className="space-y-6 text-lg text-off-white/90 leading-relaxed">
                  <p>{t("biography.paragraph1")}</p>
                  <p>{t("biography.paragraph2")}</p>
                  <p>{t("biography.paragraph3")}</p>
                </div>
                <TextToSpeechPlayer 
                  text={`${t("biography.paragraph1")} ${t("biography.paragraph2")} ${t("biography.paragraph3")}`}
                  title={t("biography.audioTitle")}
                />
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-r from-off-white/5 to-transparent backdrop-blur-sm border border-off-white/10 rounded-2xl p-8">
              <h4 className="font-serif text-2xl text-off-white mb-6">
                {t("achievements.title")}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-vibrant-pink mt-3 flex-shrink-0"></div>
                  <p className="text-off-white/80">{t("achievements.achievement1")}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-warm-terracotta mt-3 flex-shrink-0"></div>
                  <p className="text-off-white/80">{t("achievements.achievement2")}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-vibrant-pink mt-3 flex-shrink-0"></div>
                  <p className="text-off-white/80">{t("achievements.achievement3")}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-warm-terracotta mt-3 flex-shrink-0"></div>
                  <p className="text-off-white/80">{t("achievements.achievement4")}</p>
                </div>
              </div>
            </div>

            {/* Architectural Philosophy */}
            <div className="bg-gradient-to-r from-transparent to-off-white/5 backdrop-blur-sm border border-off-white/10 rounded-2xl p-8">
              <h4 className="font-serif text-2xl text-off-white mb-6">
                {t("philosophy.title")}
              </h4>
              <p className="text-lg text-off-white/90 leading-relaxed mb-6">
                {t("philosophy.description")}
              </p>
              <div className="flex items-center gap-3 text-vibrant-pink/80">
                <div className="w-8 h-px bg-vibrant-pink/40"></div>
                <span className="text-sm font-sans italic">
                  {t("philosophy.quote")}
                </span>
                <div className="w-8 h-px bg-vibrant-pink/40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-vibrant-pink/40"></div>
            <div className="w-3 h-3 rounded-full bg-vibrant-pink/60"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-warm-terracotta/40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
