"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'
import Image from "next/image"
import { MapPin, Sparkles, ArrowRight, ShoppingBag, Coffee, Waves, Building2, History, Train, Bus } from "lucide-react"

export default function QuartiersPage() {
  const t = useTranslations('quartiers')
  const locale = useLocale()
  
  const quartiers = [
    {
      id: "maarif",
      title: t("quartiers.maarif.title"),
      ideal: t("quartiers.maarif.ideal"),
      description: t("quartiers.maarif.description"),
      features: t("quartiers.maarif.features"),
      icon: ShoppingBag,
      color: "#00a346",
      imageUrl: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/alpha-plus-3vGmCMgTdiA-unsplash.jpg",
      transport: {
        tramway: ["T1 : Station Hassan 2"],
        busway: [],
        bus: ["L067", "L038", "L001"]
      }
    },
    {
      id: "gauthier",
      title: t("quartiers.gauthier.title"),
      ideal: t("quartiers.gauthier.ideal"),
      description: t("quartiers.gauthier.description"),
      features: t("quartiers.gauthier.features"),
      icon: Coffee,
      color: "#0066b2",
      imageUrl: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/gauthier.jpeg",
      transport: {
        tramway: [],
        busway: [],
        bus: ["L067", "L060", "L050", "L038"]
      }
    },
    {
      id: "racine",
      title: t("quartiers.racine.title"),
      ideal: t("quartiers.racine.ideal"),
      description: t("quartiers.racine.description"),
      features: t("quartiers.racine.features"),
      icon: Building2,
      color: "#c10000",
      imageUrl: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/racine.jpeg",
      transport: {
        tramway: [],
        busway: [],
        bus: ["L038", "L050", "L060", "L067", "L084", "L09E"]
      }
    },
    {
      id: "aindiab",
      title: t("quartiers.aindiab.title"),
      ideal: t("quartiers.aindiab.ideal"),
      description: t("quartiers.aindiab.description"),
      features: t("quartiers.aindiab.features"),
      icon: Waves,
      color: "#00a346",
      imageUrl: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/ain%20diab%20plage%201.jpeg",
      transport: {
        tramway: ["T2 : Station Ain Diab Terminus"],
        busway: [],
        bus: ["L005"]
      }
    },
    {
      id: "medina",
      title: t("quartiers.medina.title"),
      ideal: t("quartiers.medina.ideal"),
      description: t("quartiers.medina.description"),
      features: t("quartiers.medina.features"),
      icon: History,
      color: "#0066b2",
      imageUrl: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/ancienne%20medina.jpeg",
      transport: {
        tramway: ["T1 : Station des Nations unies"],
        busway: [],
        bus: ["L023", "L006", "L007", "L019", "L022", "L040", "L056", "L120", "L011", "L055", "L043", "L062", "L139", "L033", "L082"]
      }
    },
    {
      id: "cfc",
      title: t("quartiers.cfc.title"),
      ideal: t("quartiers.cfc.ideal"),
      description: t("quartiers.cfc.description"),
      features: t("quartiers.cfc.features"),
      icon: Building2,
      color: "#c10000",
      imageUrl: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/cfc.jpeg",
      transport: {
        tramway: ["T2 : Station Place Financière"],
        busway: ["BW2 : Station Aéropostale"],
        bus: ["L109", "L072", "L306", "L050", "L007"]
      }
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("breadcrumb.quartiers"), href: `/${locale}/decouvrir/quartiers` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-blue-50/40 to-rose-50/50" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00a346]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0066b2]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-[#c10000]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200/50 mb-6 shadow-sm animate-fade-in-up">
              <MapPin className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm text-gray-700 font-medium">{t("hero.badge")}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient-can">{t("hero.title")}</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Quartiers Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066b2]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="space-y-16 lg:space-y-24">
            {quartiers.map((quartier, index) => {
              const IconComponent = quartier.icon
              return (
                <div
                  key={quartier.id}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Modern Glass Card */}
                  <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}>
                    {/* Content Side */}
                    <div className={`${index % 2 === 1 ? "md:order-2" : ""} space-y-6`}>
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: quartier.color }} />
                        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          {index + 1} / {quartiers.length}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                        <span className="text-gradient-can">{quartier.title}</span>
                      </h2>
                      
                      {/* Ideal For */}
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-sm border border-gray-200/50">
                        <IconComponent className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: quartier.color }} />
                        <p className="text-sm font-medium text-gray-700">{quartier.ideal}</p>
                      </div>
                      
                      {/* Description */}
                      <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        {quartier.description}
                      </p>
                      
                      {/* Features */}
                      <div className="pt-2">
                        <p className="text-sm text-gray-500 mb-2 font-medium">Ce qu'on y trouve :</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{quartier.features}</p>
                      </div>
                      
                      {/* Transportation Info */}
                      {(quartier.transport.tramway.length > 0 || quartier.transport.busway.length > 0 || quartier.transport.bus.length > 0) && (
                        <div className="pt-4 space-y-3">
                          <p className="text-sm font-semibold text-gray-700 mb-3">Comment s'y rendre :</p>
                          
                          {quartier.transport.tramway.length > 0 && (
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200/50">
                              <Train className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00a346]" />
                              <div className="flex-1">
                                <p className="text-xs font-semibold text-gray-700 mb-1">Tramway</p>
                                <div className="flex flex-wrap gap-2">
                                  {quartier.transport.tramway.map((line, idx) => (
                                    <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                      {line}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {quartier.transport.busway.length > 0 && (
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200/50">
                              <Bus className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#0066b2]" />
                              <div className="flex-1">
                                <p className="text-xs font-semibold text-gray-700 mb-1">Busway</p>
                                <div className="flex flex-wrap gap-2">
                                  {quartier.transport.busway.map((line, idx) => (
                                    <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                      {line}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {quartier.transport.bus.length > 0 && (
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200/50">
                              <Bus className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#0066b2]" />
                              <div className="flex-1">
                                <p className="text-xs font-semibold text-gray-700 mb-1">Bus</p>
                                <div className="flex flex-wrap gap-2">
                                  {quartier.transport.bus.map((line, idx) => (
                                    <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                      {line}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Image Side */}
                    <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <div className="relative group/image rounded-2xl overflow-hidden shadow-xl border border-white/50">
                        <div className="relative h-[400px] lg:h-[500px] xl:h-[550px]">
                          <Image
                            src={quartier.imageUrl}
                            alt={quartier.title}
                            fill
                            className={`object-cover ${quartier.id === 'maarif' ? 'object-top' : ''} group-hover/image:scale-110 transition-transform duration-700`}
                            unoptimized
                          />
                          {/* Gradient Overlay */}
                          <div 
                            className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"
                            style={{ 
                              background: `linear-gradient(to top, ${quartier.color}40, transparent)` 
                            }}
                          />
                          
                          {/* Corner Accent */}
                          <div 
                            className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20 group-hover/image:opacity-40 transition-opacity blur-xl"
                            style={{ backgroundColor: quartier.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-emerald-50/50 to-slate-50/70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00a346]/15 via-[#0066b2]/15 to-[#c10000]/15 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 mb-6 shadow-sm animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-[#0066b2]" />
              <span className="text-sm text-gray-700 font-medium">{t("cta.badge")}</span>
            </div>
            
            {/* Title */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t("cta.title")}
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t("cta.description")}
            </p>
            
            {/* CTA Button */}
            <a
              href={`/${locale}/visiter/individuels`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00a346] via-[#0066b2] to-[#00a346] bg-[length:200%_100%] text-white font-semibold rounded-2xl hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-[#00a346]/25 hover:shadow-[#00a346]/40 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: '0.3s' }}
            >
              <span>{t("cta.button")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
