"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'
import Image from "next/image"
import { Building, MapPin, Sparkles, ArrowRight } from "lucide-react"

export default function MonumentsPage() {
  const t = useTranslations('monuments')
  const locale = useLocale()
  
  const monuments = [
    {
      id: "hassan2",
      title: t("monuments.hassan2.title"),
      description: t("monuments.hassan2.description"),
      imageUrls: [
        "https://upload.wikimedia.org/wikipedia/fr/f/fc/Mosqu%C3%A9e_Hassan_II_-_2016-04-13.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/4d/c3/07/ii.jpg?h=500&s=1&w=900"
      ],
      color: "#00a346"
    },
    {
      id: "habous",
      title: t("monuments.habous.title"),
      description: t("monuments.habous.description"),
      imageUrls: [
        "https://stayhere.ma/wp-content/uploads/2024/04/Quartier-Habous.jpeg",
        "https://www.casablancacity.ma/couvertures/article/VHJxttdLS5Apk1JoMXG8q9LO05rEv6MPf2NynFhl.jpeg"
      ],
      color: "#0066b2"
    },
    {
      id: "medina",
      title: t("monuments.medina.title"),
      description: t("monuments.medina.description"),
      imageUrls: [
        "https://aujourdhui.ma/wp-content/uploads/2016/02/lancienne-medina-de-casablanca.jpg"
      ],
      color: "#c10000"
    },
    {
      id: "artdeco",
      title: t("monuments.artdeco.title"),
      description: t("monuments.artdeco.description"),
      imageUrls: [
        "https://moroccotravelblog.com/wp-content/uploads/2015/05/Art-Deco-Architecture-Casablanca-Morocco-Travel-Blog.png",
        "https://moroccotravelblog.com/wp-content/uploads/2015/05/Art-Deco-Building-Casablanca-Morocco-Travel-Blog-435x435.png"
      ],
      color: "#00a346"
    },
    {
      id: "sacrecoeur",
      title: t("monuments.sacrecoeur.title"),
      description: t("monuments.sacrecoeur.description"),
      imageUrls: [
        "https://upload.wikimedia.org/wikipedia/en/f/f1/Cath%C3%A9drale_Casablanca.jpg",
        "https://aemagazine.ma/wp-content/uploads/Eglise-du-Sacre-Coeur-4-scaled.jpg"
      ],
      color: "#0066b2"
    },
    {
      id: "slaoui",
      title: t("monuments.slaoui.title"),
      description: t("monuments.slaoui.description"),
      imageUrls: [
        "https://www.maroc-hebdo.press.ma/sites/default/files/styles/article/public/2023-11/musee-slaoui.jpg"
      ],
      color: "#00a346"
    },
    {
      id: "mahkama",
      title: t("monuments.mahkama.title"),
      description: t("monuments.mahkama.description"),
      imageUrls: [
        "https://www.casablancacity.ma/couvertures/article/VHJxttdLS5Apk1JoMXG8q9LO05rEv6MPf2NynFhl.jpeg"
      ],
      color: "#c10000"
    },
    {
      id: "abattoirs",
      title: t("monuments.abattoirs.title"),
      description: t("monuments.abattoirs.description"),
      imageUrls: [
        "https://www.casablancacity.ma/couvertures/article/anciens-abattoirs-casablanca.jpg"
      ],
      color: "#0066b2"
    },
    {
      id: "judaisme",
      title: t("monuments.judaisme.title"),
      description: t("monuments.judaisme.description"),
      imageUrls: [
        "https://www.casablancacity.ma/couvertures/article/musee-judaisme-marocain.jpg"
      ],
      color: "#00a346"
    },
    {
      id: "rialto",
      title: t("monuments.rialto.title"),
      description: t("monuments.rialto.description"),
      imageUrls: [
        "https://www.casablancacity.ma/couvertures/article/cinema-rialto-casablanca.jpg"
      ],
      color: "#c10000"
    },
    {
      id: "sqala",
      title: t("monuments.sqala.title"),
      description: t("monuments.sqala.description"),
      imageUrls: [
        "https://www.casablancacity.ma/couvertures/article/sqala-casablanca.jpg"
      ],
      color: "#0066b2"
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
              { label: t("breadcrumb.discover"), href: `/${locale}/decouvrir/histoire` },
              { label: t("breadcrumb.monuments"), href: `/${locale}/decouvrir/monuments` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section - Matching Home Page Style */}
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
              <Building className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm text-gray-700 font-medium">{t("hero.badge")}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t("hero.title").includes('&') ? (
                <>
                  {t("hero.title").split('&')[0]}
                  & <span className="text-gradient-can">{t("hero.title").split('&')[1]}</span>
                </>
              ) : (
                <span className="text-gradient-can">{t("hero.title")}</span>
              )}
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Monuments Section - Modern Gradient Cards */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066b2]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="space-y-24 lg:space-y-32">
            {monuments.map((monument, index) => (
              <div
                key={monument.id}
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
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: monument.color }} />
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        {index + 1} / {monuments.length}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                      <span className="text-gradient-can">{monument.title}</span>
                    </h2>
                    
                    {/* Description */}
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                      {monument.description}
                    </p>
                  </div>
                  
                  {/* Image Side */}
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="grid grid-cols-1 gap-4">
                      {monument.imageUrls.map((imageUrl, imgIndex) => (
                        <div 
                          key={imgIndex} 
                          className="relative group/image rounded-2xl overflow-hidden shadow-xl border border-white/50"
                        >
                          <div className="relative h-[300px] lg:h-[400px] xl:h-[450px]">
                            <Image
                              src={imageUrl}
                              alt={`${monument.title} - Image ${imgIndex + 1}`}
                              fill
                              className="object-cover group-hover/image:scale-110 transition-transform duration-700"
                              unoptimized
                            />
                            {/* Gradient Overlay */}
                            <div 
                              className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"
                              style={{ 
                                background: `linear-gradient(to top, ${monument.color}40, transparent)` 
                              }}
                            />
                            
                            {/* Corner Accent */}
                            <div 
                              className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20 group-hover/image:opacity-40 transition-opacity blur-xl"
                              style={{ backgroundColor: monument.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Matching Home Page Style */}
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

