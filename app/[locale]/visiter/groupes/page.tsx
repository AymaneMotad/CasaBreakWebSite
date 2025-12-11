"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Phone, Users, Baby } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'

export default function GroupesPage() {
  const t = useTranslations('groupes')
  const locale = useLocale()
  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb items={[
            { label: t("breadcrumb.groups"), href: `/${locale}/visiter/groupes` }
          ]} />
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/site-cal/architecture-header.JPG" alt={t("hero.imageAlt")} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-off-white mb-4 animate-fade-in-up text-balance">
            {t("hero.title")}
          </h1>
          <p className="font-sans text-sm md:text-base text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
              {t("introduction.title")}
            </h2>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-6">
              {t("introduction.description1")}
            </p>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed">
              {t("introduction.description2")}
            </p>
          </div>
          <div className="relative h-[500px] animate-fade-in-up stagger-1">
            <Image 
              src="/site-cal/visiter-1.JPG" 
              alt={t("introduction.imageAlt")} 
              fill 
              className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-br from-charcoal/3 via-off-white to-charcoal/5 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl lg:text-7xl text-charcoal mb-8 animate-fade-in-up delay-100 tracking-tight">
              {t("pricing.title")}
            </h2>
          </div>
          <div className="max-w-[900px] mx-auto">
            {/* Combined Groups Pricing Card */}
            <div className="group relative bg-white rounded-3xl p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/5 via-transparent to-warm-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-vibrant-pink/10 to-warm-terracotta/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-vibrant-pink" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-charcoal mb-2">{t("pricing.groups.title")}</h3>
                    <p className="font-serif text-4xl text-vibrant-pink font-bold">{t("pricing.groups.price")}</p>
                  </div>
                </div>
                <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-8">{t("pricing.groups.description")}</p>
                
                {/* Pricing Tiers */}
                <div className="border-t border-charcoal/10 pt-8 mt-8">
                  <div className="flex items-center justify-between gap-4 p-6 bg-gradient-to-r from-vibrant-pink/5 to-warm-terracotta/5 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-vibrant-pink/10 to-warm-terracotta/10 rounded-xl flex items-center justify-center">
                        <Baby className="h-6 w-6 text-vibrant-pink" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl text-charcoal">{t("pricing.children.title")}</h4>
                      </div>
                    </div>
                    <p className="font-serif text-3xl text-vibrant-pink font-bold">{t("pricing.children.price")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information - Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-off-white to-charcoal/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/40 to-transparent"></div>
          <div className="absolute top-4 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-warm-terracotta/30 to-transparent"></div>
          
          {/* Corner geometric patterns */}
          <div className="absolute top-16 left-16 w-14 h-14 opacity-20">
            <svg viewBox="0 0 56 56" className="w-full h-full text-vibrant-pink/40">
              <path d="M7 7 L49 7 L49 49 L7 49 Z M14 14 L42 14 L42 42 L14 42 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M21 21 L35 21 L35 35 L21 35 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-16 right-16 w-14 h-14 opacity-20">
            <svg viewBox="0 0 56 56" className="w-full h-full text-warm-terracotta/40">
              <path d="M7 7 L49 7 L49 49 L7 49 Z M14 14 L42 14 L42 42 L14 42 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M21 21 L35 21 L35 35 L21 35 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border border-vibrant-pink/20 rounded-full mb-8 animate-gentle-fade-in">
              <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">
                {t("practicalInfo.badge")}
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 animate-gentle-fade-in stagger-1">
              {t("practicalInfo.title")}
            </h2>
            <p className="font-sans text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2">
              {t("practicalInfo.description")}
            </p>
          </div>

          {/* Main Info Grid - Premium Minimal Design */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-[1200px] mx-auto">
            {/* Booking Information */}
            <div className="group relative animate-gentle-fade-in bg-gradient-to-br from-white via-blue-500/[0.03] to-white border border-blue-500/20 hover:border-blue-500/40 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative p-10">
                <div className="flex items-center gap-4 mb-12 pb-6 border-b border-blue-500/30">
                  <div className="p-2.5 bg-gradient-to-br from-blue-500/15 to-blue-500/10 rounded-lg shadow-sm">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-blue-600 tracking-tight font-medium">{t("practicalInfo.booking.title")}</h3>
                </div>
                <div className="space-y-6">
                  <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                    {t("practicalInfo.booking.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="group relative animate-gentle-fade-in stagger-1 bg-gradient-to-br from-white via-blue-500/[0.03] to-white border border-blue-500/20 hover:border-blue-500/40 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative p-10">
                <div className="flex items-center gap-4 mb-12 pb-6 border-b border-blue-500/30">
                  <div className="p-2.5 bg-gradient-to-br from-blue-500/15 to-blue-500/10 rounded-lg shadow-sm">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-blue-600 tracking-tight font-medium">{t("practicalInfo.hours.title")}</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-sm text-charcoal/50 uppercase tracking-wider">{t("practicalInfo.hours.tuesdaySunday")}</span>
                    <span className="font-sans text-lg text-charcoal font-light">{t("practicalInfo.hours.hours")}</span>
                  </div>
                  <div className="h-px bg-charcoal/5"></div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-sm text-charcoal/50 uppercase tracking-wider">{t("practicalInfo.hours.monday")}</span>
                    <span className="font-sans text-lg text-charcoal font-light">{t("practicalInfo.hours.closed")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-[800px] mx-auto">
            <div className="group bg-gradient-to-br from-charcoal to-charcoal/90 p-12 rounded-2xl text-off-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-gentle-fade-in hover-scale-subtle">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-vibrant-pink to-warm-terracotta rounded-xl">
                  <Phone className="h-8 w-8 text-off-white" />
                </div>
                <h3 className="font-serif text-3xl">{t("practicalInfo.contact.title")}</h3>
              </div>
              <p className="font-sans text-lg mb-8 leading-relaxed text-off-white/90">
                {t("practicalInfo.contact.description")}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between gap-4 p-4 bg-off-white/10 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-vibrant-pink" />
                    <div>
                      <p className="font-semibold">{t("practicalInfo.contact.phone")}</p>
                      <p className="text-off-white/80">{t("practicalInfo.contact.phoneNumber")}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 bg-off-white/10 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-5 w-5 text-warm-terracotta" />
                    <div>
                      <p className="font-semibold">{t("practicalInfo.contact.email")}</p>
                      <p className="text-off-white/80">{t("practicalInfo.contact.emailAddress")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://casawe.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg font-semibold"
              >
                Réserver maintenant pour votre groupe
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
