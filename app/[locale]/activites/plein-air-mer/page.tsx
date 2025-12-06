"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'
import { Trees, Sparkles, ArrowRight, Bike, Skating } from "lucide-react"

export default function PleinAirMerPage() {
  const t = useTranslations('pleinAirMer')
  const locale = useLocale()
  
  const activities = [
    {
      id: "anfa",
      title: t("activities.anfa.title"),
      description: t("activities.anfa.description"),
      icon: Trees,
      color: "#00a346"
    },
    {
      id: "ligue",
      title: t("activities.ligue.title"),
      description: t("activities.ligue.description"),
      icon: Trees,
      color: "#0066b2"
    },
    {
      id: "velodrome",
      title: t("activities.velodrome.title"),
      description: t("activities.velodrome.description"),
      icon: Bike,
      color: "#c10000"
    },
    {
      id: "skatepark",
      title: t("activities.skatepark.title"),
      description: t("activities.skatepark.description"),
      icon: Skating,
      color: "#00a346"
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
              { label: t("breadcrumb.activities"), href: `/${locale}/activites/incontournables` },
              { label: t("breadcrumb.pleinAirMer"), href: `/${locale}/activites/plein-air-mer` }
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
              <Trees className="w-4 h-4 text-[#00a346]" />
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

      {/* Activities Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066b2]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <div
                  key={activity.id}
                  className="group animate-fade-in-up bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${activity.color}15` }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: activity.color }}
                    />
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#00a346] transition-colors">
                    {activity.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {activity.description}
                  </p>
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
              href={`/${locale}/decouvrir/mer-plages`}
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
