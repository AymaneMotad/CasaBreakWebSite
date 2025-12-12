"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'
import { Waves, Sparkles, ArrowRight, Umbrella, Sunset, TreePine, Train, Bus, MapPin } from "lucide-react"

export default function MerPlagesPage() {
  const t = useTranslations('merPlages')
  const locale = useLocale()
  
  const sections = [
    {
      id: "plageAinDiab",
      title: t("sections.plageAinDiab.title"),
      description: t("sections.plageAinDiab.description"),
      icon: Waves,
      color: "#00a346",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff2/Plage%20Ain%20Diab.jpeg",
      address: "Boulevard de l'océan atlantique casablanca",
      transport: {
        tramway: ["T2 : Station Ain Diab Terminus"],
        busway: [],
        bus: ["L005"]
      }
    },
    {
      id: "beachClubs",
      title: t("sections.beachClubs.title"),
      description: t("sections.beachClubs.description"),
      addresses: t("sections.beachClubs.addresses"),
      icon: Umbrella,
      color: "#0066b2",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff2/Beach%20Clubs.jpeg",
      address: "Boulevard de Biarritz et Boulevard de l'Océan Atlantique",
      transport: {
        tramway: [],
        busway: [],
        bus: ["L005"]
      }
    },
    {
      id: "surfSchools",
      title: t("sections.surfSchools.title"),
      description: t("sections.surfSchools.description"),
      schools: t("sections.surfSchools.schools"),
      icon: Waves,
      color: "#c10000",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff2/ecoles%20de%20Surf.jpeg",
      transport: {
        tramway: [],
        busway: [],
        bus: ["L005"]
      }
    },
    {
      id: "corniche",
      title: t("sections.corniche.title"),
      description: t("sections.corniche.description"),
      icon: Waves,
      color: "#00a346",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff2/Promenade%20de%20la%20corniche.jpeg",
      address: "Boulevard de la Corniche - Ain Diab",
      transport: {
        tramway: ["T2 : Station Ain Diab Terminus"],
        busway: [],
        bus: ["L005"]
      }
    },
    {
      id: "parcs",
      title: t("sections.parcs.title"),
      description: t("sections.parcs.description"),
      icon: TreePine,
      color: "#0066b2",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff2/Parcs%20&%20Espaces%20Verts%20Cotiers.jpeg",
      address: "Boulevard de la Corniche - Ain Diab",
      transport: {
        tramway: [],
        busway: [],
        bus: ["L005"]
      }
    },
    {
      id: "sunsets",
      title: t("sections.sunsets.title"),
      description: t("sections.sunsets.description"),
      icon: Sunset,
      color: "#c10000",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff2/Couchers%20de%20Soleil.jpeg",
      address: "Boulevard de la Corniche - Ain Diab",
      transport: {
        tramway: ["T2 : Station Ain Diab Terminus"],
        busway: [],
        bus: ["L005"]
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
              { label: t("breadcrumb.merPlages"), href: `/${locale}/decouvrir/mer-plages` }
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
              <Waves className="w-4 h-4 text-[#00a346]" />
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

      {/* Sections */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066b2]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div
                  key={section.id}
                  className="group animate-fade-in-up bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  {section.image && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/20"
                          style={{ backgroundColor: `${section.color}30` }}
                        >
                          <IconComponent 
                            className="w-6 h-6 text-white" 
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Icon (if no image) */}
                    {!section.image && (
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${section.color}15` }}
                      >
                        <IconComponent 
                          className="w-8 h-8" 
                          style={{ color: section.color }}
                        />
                      </div>
                    )}
                    
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {section.description}
                    </p>
                    
                    {/* Address */}
                    {section.address && (
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                          <p className="text-sm text-gray-600">
                            {section.address}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* Addresses/Schools */}
                    {(section.addresses || section.schools) && (
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          {section.addresses ? "Adresses populaires :" : "Écoles recommandées :"}
                        </p>
                        <p className="text-sm text-gray-600">
                          {section.addresses || section.schools}
                        </p>
                      </div>
                    )}
                    
                    {/* Transportation Info */}
                    {(section.transport.tramway.length > 0 || section.transport.busway.length > 0 || section.transport.bus.length > 0) && (
                      <div className="pt-4 border-t border-gray-200 space-y-2">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Comment s'y rendre :</p>
                      
                      {section.transport.tramway.length > 0 && (
                        <a 
                          href="http://casatramway.ma/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 hover:opacity-80 transition-opacity cursor-pointer"
                        >
                          <Train className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00a346]" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-700 mb-1">Tramway</p>
                            <div className="flex flex-wrap gap-1.5">
                              {section.transport.tramway.map((line, idx) => (
                                <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                                  {line}
                                </span>
                              ))}
                            </div>
                          </div>
                        </a>
                      )}
                      
                      {section.transport.busway.length > 0 && (
                        <div className="flex items-start gap-2">
                          <Bus className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0066b2]" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-700 mb-1">Busway</p>
                            <div className="flex flex-wrap gap-1.5">
                              {section.transport.busway.map((line, idx) => (
                                <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                                  {line}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {section.transport.bus.length > 0 && (
                        <a 
                          href="https://www.casabus.ma/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 hover:opacity-80 transition-opacity cursor-pointer"
                        >
                          <Bus className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0066b2]" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-700 mb-1">Bus</p>
                            <div className="flex flex-wrap gap-1.5">
                              {section.transport.bus.map((line, idx) => (
                                <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                                  {line}
                                </span>
                              ))}
                            </div>
                          </div>
                        </a>
                      )}
                    </div>
                  )}
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
              href={`/${locale}/activites/plein-air-mer`}
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
