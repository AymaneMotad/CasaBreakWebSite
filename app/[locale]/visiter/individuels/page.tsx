"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'
import Image from "next/image"
import { Clock, Camera, Headphones, MapPin, Users, Calendar, GraduationCap, Heart, Accessibility, Euro } from "lucide-react"

export default function IndividuelsPage() {
  const t = useTranslations('individuels')
  const locale = useLocale()
  const tips = [
    {
      icon: Clock,
      title: t("tips.bestTimes.title"),
      description: t("tips.bestTimes.description"),
    },
    {
      icon: Camera,
      title: t("tips.photography.title"),
      description: t("tips.photography.description"),
    },
    {
      icon: Headphones,
      title: t("tips.audioGuide.title"),
      description: t("tips.audioGuide.description"),
    },
    {
      icon: MapPin,
      title: t("tips.duration.title"),
      description: t("tips.duration.description"),
    },
    {
      icon: Users,
      title: t("tips.family.title"),
      description: t("tips.family.description"),
    },
    {
      icon: Calendar,
      title: t("tips.booking.title"),
      description: t("tips.booking.description"),
    },
  ]

  const visitorTypes = [
    {
      icon: Users,
      title: t("visitorTypes.individuals.title"),
      price: t("visitorTypes.individuals.price"),
      description: t("visitorTypes.individuals.description"),
      features: t.raw("visitorTypes.individuals.features")
    },
    {
      icon: GraduationCap,
      title: t("visitorTypes.students.title"),
      price: t("visitorTypes.students.price"),
      description: t("visitorTypes.students.description"),
      features: t.raw("visitorTypes.students.features")
    },
    {
      icon: Heart,
      title: t("visitorTypes.seniors.title"),
      price: t("visitorTypes.seniors.price"),
      description: t("visitorTypes.seniors.description"),
      features: t.raw("visitorTypes.seniors.features")
    },
    {
      icon: Accessibility,
      title: t("visitorTypes.disabled.title"),
      price: t("visitorTypes.disabled.price"),
      description: t("visitorTypes.disabled.description"),
      features: t.raw("visitorTypes.disabled.features")
    }
  ]

  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("breadcrumb.individuals"), href: `/${locale}/visiter/individuels` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/site-map-images/architecture-optimized/cethedrale image.jpeg"
          alt={t("hero.imageAlt")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-off-white mb-6 animate-fade-in-up text-balance">
            {t("hero.title")}
          </h1>
          <p className="font-sans text-sm md:text-base lg:text-lg tracking-wide text-off-white/90 animate-fade-in-up delay-100">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
       

        <div className="text-center mb-24">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 rounded-full mb-8 animate-fade-in-up">
              <span className="font-sans text-sm font-medium text-vibrant-pink tracking-wider uppercase">{t("introduction.badge")}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl text-charcoal mb-8 animate-fade-in-up delay-100 tracking-tight">
              {t("introduction.title")}
            </h2>
            <p className="font-sans text-lg lg:text-xl text-charcoal/70 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-200">
              {t("introduction.description")}
            </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {tips.map((tip, index) => (
            <div key={tip.title} className={`group bg-white/50 backdrop-blur-sm border border-charcoal/5 rounded-2xl p-8 hover:shadow-xl hover:shadow-vibrant-pink/10 transition-all duration-500 animate-fade-in-up delay-${index * 100} hover:-translate-y-2`}>
              <div className="w-16 h-16 bg-gradient-to-br from-vibrant-pink/10 to-warm-terracotta/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <tip.icon className="h-8 w-8 text-vibrant-pink" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">{tip.title}</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visitor Types */}
      <section className="bg-gradient-to-br from-charcoal/3 via-off-white to-charcoal/5 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-vibrant-pink/10 rounded-full mb-8 animate-fade-in-up">
              <span className="font-sans text-sm font-medium text-blue-600 tracking-wider uppercase">{t("visitorTypes.badge")}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl text-charcoal mb-8 animate-fade-in-up delay-100 tracking-tight">
              {t("visitorTypes.title")}
            </h2>
            <p className="font-sans text-lg lg:text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
              {t("visitorTypes.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {visitorTypes.map((type, index) => (
              <div key={type.title} className={`group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up stagger-${index + 1} hover:-translate-y-2 overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/5 via-transparent to-warm-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-vibrant-pink/10 to-warm-terracotta/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <type.icon className="h-10 w-10 text-vibrant-pink" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-charcoal mb-2">{type.title}</h3>
                      <p className="font-serif text-4xl text-vibrant-pink font-bold">{type.price}</p>
                    </div>
                  </div>
                  <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-8">{type.description}</p>
                  <ul className="space-y-3">
                    {Array.isArray(type.features) ? type.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-vibrant-pink rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-sans text-sm text-charcoal/70">{feature}</span>
                      </li>
                    )) : (
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-vibrant-pink rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-sans text-sm text-charcoal/70">{type.features}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Practical Info */}
      <section className="bg-gradient-to-br from-vibrant-pink/5 via-off-white to-warm-terracotta/5 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 rounded-full mb-8 animate-fade-in-up">
              <span className="font-sans text-sm font-medium text-vibrant-pink tracking-wider uppercase">{t("practicalInfo.badge")}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl text-charcoal mb-8 animate-fade-in-up delay-100 tracking-tight">
              {t("practicalInfo.title")}
            </h2>
            <p className="font-sans text-lg lg:text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
              {t("practicalInfo.description")}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm border border-charcoal/5 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up group">
              <div className="w-16 h-16 bg-gradient-to-br from-vibrant-pink/10 to-warm-terracotta/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-vibrant-pink" />
              </div>
              <h3 className="font-serif text-3xl text-charcoal mb-6">{t("practicalInfo.hours.title")}</h3>
              <div className="space-y-4 font-sans text-base text-charcoal/70 leading-relaxed">
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>{t("practicalInfo.hours.tuesdaySunday")}</span>
                  <span className="font-semibold text-charcoal">{t("practicalInfo.hours.hours")}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>{t("practicalInfo.hours.monday")}</span>
                  <span className="font-semibold text-charcoal/60">{t("practicalInfo.hours.closed")}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>{t("practicalInfo.hours.lastEntry")}</span>
                  <span className="font-semibold text-charcoal">{t("practicalInfo.hours.lastEntryTime")}</span>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-charcoal/5 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up delay-100 group">
              <div className="w-16 h-16 bg-gradient-to-br from-warm-terracotta/10 to-vibrant-pink/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Euro className="h-8 w-8 text-warm-terracotta" />
              </div>
              <h3 className="font-serif text-3xl text-charcoal mb-6">{t("practicalInfo.pricing.title")}</h3>
              <div className="space-y-4 font-sans text-base text-charcoal/70 leading-relaxed">
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>{t("practicalInfo.pricing.adults")}</span>
                  <span className="font-semibold text-charcoal">{t("practicalInfo.pricing.adultsPrice")}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>{t("practicalInfo.pricing.students")}</span>
                  <span className="font-semibold text-charcoal">{t("practicalInfo.pricing.studentsPrice")}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>{t("practicalInfo.pricing.seniors")}</span>
                  <span className="font-semibold text-charcoal">{t("practicalInfo.pricing.seniorsPrice")}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>{t("practicalInfo.pricing.children")}</span>
                  <span className="font-semibold text-charcoal">{t("practicalInfo.pricing.childrenPrice")}</span>
                </div>
               
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>{t("practicalInfo.pricing.familyPack")}</span>
                  <span className="font-semibold text-charcoal">{t("practicalInfo.pricing.familyPackPrice")}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>{t("practicalInfo.pricing.disabled")}</span>
                  <span className="font-semibold text-vibrant-pink">{t("practicalInfo.pricing.disabledPrice")}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>{t("practicalInfo.pricing.residents")}</span>
                  <span className="font-semibold text-vibrant-pink">{t("practicalInfo.pricing.residentsPrice")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <a
              href="https://casawe.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 text-sm font-sans tracking-wider uppercase bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-500 animate-fade-in-up delay-200 rounded-2xl group"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>{t("practicalInfo.bookingButton")}</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}