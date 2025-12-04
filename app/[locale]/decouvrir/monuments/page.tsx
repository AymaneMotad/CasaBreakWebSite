"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { TextToSpeechPlayer } from "@/components/text-to-speech-player"
import { useTranslations, useLocale } from 'next-intl'
import Image from "next/image"

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
      audioText: t("monuments.hassan2.description"),
    },
    {
      id: "habous",
      title: t("monuments.habous.title"),
      description: t("monuments.habous.description"),
      imageUrls: [
        "https://stayhere.ma/wp-content/uploads/2024/04/Quartier-Habous.jpeg",
        "https://www.casablancacity.ma/couvertures/article/VHJxttdLS5Apk1JoMXG8q9LO05rEv6MPf2NynFhl.jpeg"
      ],
      audioText: t("monuments.habous.description"),
    },
    {
      id: "medina",
      title: t("monuments.medina.title"),
      description: t("monuments.medina.description"),
      imageUrls: [
        "https://aujourdhui.ma/wp-content/uploads/2016/02/lancienne-medina-de-casablanca.jpg"
      ],
      audioText: t("monuments.medina.description"),
    },
    {
      id: "artdeco",
      title: t("monuments.artdeco.title"),
      description: t("monuments.artdeco.description"),
      imageUrls: [
        "https://moroccotravelblog.com/wp-content/uploads/2015/05/Art-Deco-Architecture-Casablanca-Morocco-Travel-Blog.png",
        "https://moroccotravelblog.com/wp-content/uploads/2015/05/Art-Deco-Building-Casablanca-Morocco-Travel-Blog-435x435.png"
      ],
      audioText: t("monuments.artdeco.description"),
    },
    {
      id: "sacrecoeur",
      title: t("monuments.sacrecoeur.title"),
      description: t("monuments.sacrecoeur.description"),
      imageUrls: [
        "https://upload.wikimedia.org/wikipedia/en/f/f1/Cath%C3%A9drale_Casablanca.jpg",
        "https://aemagazine.ma/wp-content/uploads/Eglise-du-Sacre-Coeur-4-scaled.jpg"
      ],
      audioText: t("monuments.sacrecoeur.description"),
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
              { label: t("breadcrumb.discover"), href: `/${locale}/decouvrir/histoire` },
              { label: t("breadcrumb.monuments"), href: `/${locale}/decouvrir/monuments` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00a346]/10 via-off-white to-[#c10000]/10">
        <div className="absolute inset-0">
          <Image
            src="/casablanca-cityscape-atlantic-ocean-aerial-view-mo.jpg"
            alt={t("hero.imageAlt")}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        {/* Decorative Elements with Green/Red Theme */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#00a346]/60 to-transparent"></div>
          <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c10000]/50 to-transparent"></div>
          
          {/* Geometric patterns */}
          <div className="absolute top-12 left-12 w-20 h-20 opacity-20">
            <svg viewBox="0 0 80 80" className="w-full h-full text-[#00a346]">
              <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2"/>
              <rect x="20" y="20" width="40" height="40" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-12 right-12 w-20 h-20 opacity-20">
            <svg viewBox="0 0 80 80" className="w-full h-full text-[#c10000]">
              <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="40" cy="40" r="15" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-10 opacity-25">
            <svg viewBox="0 0 160 40" className="w-full h-full text-[#00a346]">
              <path d="M10 20 Q40 8, 80 20 Q120 32, 150 20 Q155 18, 160 20" fill="none" stroke="currentColor" strokeWidth="2.5"/>
              <circle cx="40" cy="20" r="3" fill="currentColor"/>
              <circle cx="80" cy="20" r="3" fill="currentColor"/>
              <circle cx="120" cy="20" r="3" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="animate-gentle-fade-in">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#00a346]/20 to-[#c10000]/20 backdrop-blur-sm border-2 border-[#00a346]/30 rounded-full mb-10 shadow-lg">
              <span className="text-charcoal text-sm font-sans tracking-widest uppercase font-bold">
                {t("hero.badge")}
              </span>
            </div>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-charcoal mb-8 animate-gentle-fade-in stagger-1 text-enhanced drop-shadow-lg">
            {t("hero.title")}
          </h1>
          <p className="font-sans text-lg md:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2 text-readable">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Monuments Section */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-40 bg-off-white">
        <div className="space-y-32">
          {monuments.map((monument, index) => (
            <div
              key={monument.id}
              className={`relative group ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card container with green/red accent */}
              <div className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                index % 2 === 0 ? "border-l-4 border-l-[#00a346]" : "border-r-4 border-r-[#c10000]"
              }`}>
                <div className={`${index % 2 === 1 ? "md:order-2" : ""} animate-fade-in-up`}>
                  {/* Badge */}
                  <div className={`inline-block px-4 py-2 rounded-full mb-6 ${
                    index % 2 === 0 ? "bg-[#00a346]/10 text-[#00a346]" : "bg-[#c10000]/10 text-[#c10000]"
                  }`}>
                    <span className="text-xs font-bold tracking-wider uppercase">
                      {index + 1} / {monuments.length}
                    </span>
                  </div>
                  
                  <h3 className={`font-serif text-4xl lg:text-5xl mb-6 leading-tight ${
                    index % 2 === 0 ? "text-[#00a346]" : "text-[#c10000]"
                  }`}>
                    {monument.title}
                  </h3>
                  <p className="font-sans text-base lg:text-lg text-charcoal/75 leading-relaxed mb-8 whitespace-pre-line">
                    {monument.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className={`w-24 h-1 mb-6 ${
                    index % 2 === 0 ? "bg-[#00a346]" : "bg-[#c10000]"
                  }`}></div>
                  
                  <TextToSpeechPlayer 
                    text={monument.audioText}
                    title={monument.title}
                  />
                </div>
                
                <div className={`${index % 2 === 1 ? "md:order-1" : ""} animate-fade-in-up delay-100`}>
                  <div className="grid grid-cols-1 gap-4">
                    {monument.imageUrls.map((imageUrl, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className={`relative h-[350px] lg:h-[450px] rounded-xl overflow-hidden shadow-xl group/image ${
                          index % 2 === 0 ? "ring-2 ring-[#00a346]/20" : "ring-2 ring-[#c10000]/20"
                        }`}
                      >
                        <Image
                          src={imageUrl}
                          alt={`${monument.title} - Image ${imgIndex + 1}`}
                          fill
                          className="object-cover group-hover/image:scale-110 transition-transform duration-700"
                          unoptimized
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${
                          index % 2 === 0 
                            ? "from-[#00a346]/30 to-transparent" 
                            : "from-[#c10000]/30 to-transparent"
                        } opacity-0 group-hover/image:opacity-100 transition-opacity duration-500`}></div>
                        
                        {/* Corner accent */}
                        <div className={`absolute top-4 right-4 w-12 h-12 ${
                          index % 2 === 0 ? "bg-[#00a346]" : "bg-[#c10000]"
                        } rounded-full opacity-20 group-hover/image:opacity-40 transition-opacity`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-24 lg:py-40 text-center bg-gradient-to-br from-[#00a346]/5 via-off-white to-[#c10000]/5">
        <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-xl border-2 border-[#00a346]/20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#00a346]/20 to-[#c10000]/20 border-2 border-[#00a346]/30 rounded-full mb-8">
            <span className="text-charcoal text-sm font-sans tracking-widest uppercase font-bold">
              {t("cta.badge")}
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-6 animate-fade-in-up">
            {t("cta.title")}
          </h2>
          <p className="font-sans text-lg text-charcoal/75 leading-relaxed mb-12 animate-fade-in-up delay-100 max-w-3xl mx-auto">
            {t("cta.description")}
          </p>
          <a
            href={`/${locale}/visiter/individuels`}
            className="inline-block px-10 py-5 text-sm font-sans tracking-widest uppercase bg-gradient-to-r from-[#00a346] to-[#c10000] text-white hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up delay-200 rounded-xl font-bold"
          >
            {t("cta.button")}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

