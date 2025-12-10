"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'
import { Trees, Sparkles, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PleinAirMerPage() {
  const t = useTranslations('pleinAirMer')
  const locale = useLocale()

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("breadcrumb.activities"), href: `/${locale}/activites/incontournables` },
              { label: t("breadcrumb.pleinAirMer"), href: `/${locale}/activites/plein-air-mer` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-blue-50/40 to-rose-50/50" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00a346]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0066b2]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200/50 mb-6 shadow-sm">
              <Trees className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm text-gray-700 font-medium">{t("hero.badge")}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient-can">{t("hero.title")}</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Zoo de Ain Sebaa - Featured */}
          <div className="mb-16">
            <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80"
                    alt={t("activities.zoo.title")}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-2 bg-[#00a346] text-white rounded-full text-sm font-bold flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {t("activities.zoo.badge")}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 group-hover:text-[#00a346] transition-colors">
                      {t("activities.zoo.title")}
                    </h2>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {t("activities.zoo.description")}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#00a346] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{t("activities.zoo.location")}</p>
                        <p className="text-sm text-gray-600">{t("activities.zoo.address")}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#0066b2] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{t("activities.zoo.hours")}</p>
                        <p className="text-sm text-gray-600">{t("activities.zoo.hoursDetail")}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[#c10000] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{t("activities.zoo.species")}</p>
                        <p className="text-sm text-gray-600">{t("activities.zoo.speciesDetail")}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-3">{t("activities.zoo.perfectFor")}</p>
                    <div className="flex flex-wrap gap-2">
                      {t("activities.zoo.highlights").split(', ').map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Other Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['anfa', 'ligue', 'velodrome', 'skatepark'].map((activityKey) => (
              <article
                key={activityKey}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-100 via-blue-100 to-rose-100 flex items-center justify-center">
                    <Trees className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00a346] transition-colors">
                    {t(`activities.${activityKey}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {t(`activities.${activityKey}.description`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00a346]/10 via-[#0066b2]/10 to-[#c10000]/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00a346]/15 via-[#0066b2]/15 to-[#c10000]/15 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#0066b2]" />
              <span className="text-sm text-gray-700 font-medium">{t("cta.badge")}</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              {t("cta.title")}
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00a346] via-[#0066b2] to-[#00a346] bg-[length:200%_100%] text-white font-semibold rounded-2xl hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-[#00a346]/25 hover:shadow-[#00a346]/40 hover:scale-105 group"
            >
              <span>{t("cta.button")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
