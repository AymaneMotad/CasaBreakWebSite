"use client"

import Image from "next/image"
import { Calendar, Users, Mail, Phone, User, Key, UsersRound, Volume2, Sofa, Shield, Sparkles, ParkingCircle, Headphones, Play, Pause } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ImageLightbox } from "@/components/image-lightbox"
import { useTranslations, useLocale } from 'next-intl'
import { useRef, useState } from "react"

export default function ReserverPage() {
  const t = useTranslations('reserver')
  const locale = useLocale()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("breadcrumb.reserve"), href: `/${locale}/reserver` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image src="/reserve.png" alt={t("hero.imageAlt")} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-charcoal/50" />
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
            <br />
            <p className="font-sans text-base text-charcoal/70 leading-relaxed">
            {t("introduction.description3")}
            </p>
          </div>
          <div className="relative h-[500px] animate-fade-in-up stagger-1">
            <Image
              src="/site-map-images/reserver sacre coeur/reserver sacre coeur - ferrari /reserver sacre coeur - ferrari 2.jpeg"
              alt={t("reserver.introduction.imageAlt")}
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Video Showcase Section - Enhanced Stylistic Design */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-off-white via-off-white to-charcoal/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-40 left-10 w-96 h-96 border-2 border-vibrant-pink rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 border-2 border-warm-terracotta rounded-full"></div>
          <div className="absolute top-60 right-40 w-2 h-2 bg-vibrant-pink rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-60 w-3 h-3 bg-warm-terracotta rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Enhanced Header with Decorative Elements */}
          <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-vibrant-pink"></div>
              <div className="w-2 h-2 rounded-full bg-vibrant-pink animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-warm-terracotta"></div>
              <div className="w-2 h-2 rounded-full bg-vibrant-pink animate-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-vibrant-pink"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-5xl text-charcoal mb-6 tracking-tight">
              {t("video.title")}
            </h2>
            
            <div className="inline-flex items-center gap-2 mt-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-warm-terracotta/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-warm-terracotta"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-warm-terracotta/60"></div>
            </div>
          </div>

          {/* Premium Video Container with Cinematic Styling */}
          <div className="max-w-[1200px] mx-auto animate-fade-in-up stagger-1">
            {/* Outer Decorative Frame */}
            <div className="relative p-8 lg:p-12">
              {/* Corner Accents - Art Deco Style */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-vibrant-pink opacity-40"></div>
              <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-vibrant-pink opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-warm-terracotta opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-warm-terracotta opacity-40"></div>

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-vibrant-pink/10 via-transparent to-warm-terracotta/10 blur-2xl"></div>

              {/* Video Frame Container */}
              <div className="relative">
                {/* Premium Border with Multiple Layers */}
                <div className="absolute -inset-4 bg-gradient-to-br from-vibrant-pink/20 via-transparent to-warm-terracotta/20 rounded-2xl blur-xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-tr from-charcoal/10 via-charcoal/5 to-charcoal/10 rounded-xl"></div>

                {/* Main Video Container */}
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-charcoal group cursor-pointer" onClick={togglePlay}>
                  {/* Video Element */}
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    preload="metadata"
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/videos/opening.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>

                  {/* Custom Play/Pause Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none">
                    <div className={`transition-all duration-500 ${isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100 group-hover:scale-110'}`}>
                      {/* Outer Glow Ring */}
                      <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/30 to-warm-terracotta/30 rounded-full blur-2xl scale-150"></div>

                      {/* Button Background */}
                      <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-white/95 to-white/90 shadow-2xl flex items-center justify-center backdrop-blur-sm border-4 border-white/50 transition-all duration-300 group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)]">
                        {/* Inner Button Ring */}
                        <div className="absolute inset-3 rounded-full border-2 border-vibrant-pink/20"></div>

                        {/* Play/Pause Icon */}
                        {isPlaying ? (
                          <Pause className="w-10 h-10 lg:w-12 lg:h-12 text-charcoal fill-charcoal" />
                        ) : (
                          <Play className="w-10 h-10 lg:w-12 lg:h-12 text-charcoal fill-charcoal ml-1" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Elegant Overlay Frame */}
                  <div className="absolute inset-0 border-4 border-white/5 rounded-xl pointer-events-none"></div>
                  <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>

                  {/* Cinematic Vignette Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none rounded-xl transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}></div>
                </div>

                {/* Floating Accent Bars */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-vibrant-pink to-transparent opacity-60"></div>
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-warm-terracotta to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Enhanced Video Info with Styled Details */}
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-vibrant-pink"></div>
                  <div className="w-2 h-2 rounded-full bg-vibrant-pink"></div>
                </div>
                <p className="font-serif text-lg text-charcoal/50 italic">
                  "{t("video.subtitle")}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-warm-terracotta"></div>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-warm-terracotta"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Our Spaces Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-off-white via-off-white to-charcoal/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-40 left-10 w-96 h-96 border-2 border-vibrant-pink rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 border-2 border-warm-terracotta rounded-full"></div>
          <div className="absolute top-60 right-40 w-2 h-2 bg-vibrant-pink rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-60 w-3 h-3 bg-warm-terracotta rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Enhanced Header with Decorative Elements */}
          <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-vibrant-pink"></div>
              <div className="w-2 h-2 rounded-full bg-vibrant-pink animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-warm-terracotta"></div>
              <div className="w-2 h-2 rounded-full bg-vibrant-pink animate-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-vibrant-pink"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-5xl text-charcoal mb-6 tracking-tight">
              {t("spaces.title")}
            </h2>
            
            <div className="inline-flex items-center gap-2 mt-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-warm-terracotta/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-warm-terracotta"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-warm-terracotta/60"></div>
            </div>
          </div>

          {/* Description Section */}
          <div className="text-center mb-16 animate-fade-in-up stagger-1">
            <p className="font-sans text-xl md:text-2xl text-charcoal/80 max-w-5xl mx-auto leading-relaxed">
              {t("spaces.description")}
            </p>
          </div>

          {/* Premium Image Gallery Container with Cinematic Styling */}
          <div className="max-w-[1200px] mx-auto animate-fade-in-up stagger-2">
            {/* Outer Decorative Frame */}
            <div className="relative p-8 lg:p-12">
              {/* Corner Accents - Art Deco Style */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-vibrant-pink opacity-40"></div>
              <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-vibrant-pink opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-warm-terracotta opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-warm-terracotta opacity-40"></div>

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-vibrant-pink/10 via-transparent to-warm-terracotta/10 blur-2xl"></div>

              {/* Image Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
                {[
                  {
                    image: "/decouvrer/decouvrer-1.jpg",
                    alt: "Vue panoramique de l'Ex Église Sacré-Cœur"
                  },
                  {
                    image: "/decouvrer/decouvrer-3.jpg",
                    alt: "Espace intérieur de l'Ex Église Sacré-Cœur"
                  },
                  {
                    image: "/decouvrer/decouvrer-4.jpg",
                    alt: "Architecture intérieure de l'Ex Église Sacré-Cœur"
                  },
                  {
                    image: "/decouvrer/decouvrer-5.jpg",
                    alt: "Détails architecturaux de l'Ex Église Sacré-Cœur"
                  },
                  {
                    image: "/decouvrer/decouvrer-6.jpg",
                    alt: "Perspective intérieure de l'Ex Église Sacré-Cœur"
                  },
                  {
                    image: "/decouvrer/decouvrer-7.jpg",
                    alt: "Vue d'ensemble de l'Ex Église Sacré-Cœur"
                  },
                  {
                    image: "/decouvrer/decouvrer-8.jpg",
                    alt: "Espace événementiel de l'Ex Église Sacré-Cœur"
                  },
                  {
                    image: "/decouvrer/decouvrer-9.jpg",
                    alt: "Architecture extérieure de l'Ex Église Sacré-Cœur"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group relative h-[350px] rounded-xl overflow-hidden animate-fade-in-up stagger-${index + 1} transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-vibrant-pink/20`}
                  >
                    {/* Premium Container with Enhanced Styling */}
                    <div className="relative h-full w-full overflow-hidden rounded-xl border border-off-white/10 group-hover:border-vibrant-pink/30 transition-all duration-500">
                      
                      {/* Clickable Image with Lightbox */}
                      <div className="absolute inset-0 cursor-pointer" onClick={() => {
                        // Create modal HTML
                        const modal = document.createElement('div')
                        modal.id = 'image-lightbox-modal'
                        modal.style.cssText = `
                          position: fixed;
                          top: 0;
                          left: 0;
                          width: 100%;
                          height: 100%;
                          background-color: rgba(0, 0, 0, 0.95);
                          z-index: 9999;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          padding: 20px;
                          box-sizing: border-box;
                        `
                        
                        // Create close button
                        const closeBtn = document.createElement('button')
                        closeBtn.innerHTML = '×'
                        closeBtn.style.cssText = `
                          position: absolute;
                          top: 20px;
                          right: 20px;
                          background: rgba(255, 255, 255, 0.1);
                          border: none;
                          color: white;
                          font-size: 24px;
                          width: 40px;
                          height: 40px;
                          border-radius: 50%;
                          cursor: pointer;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        `
                        
                        // Create image
                        const img = document.createElement('img')
                        img.src = item.image
                        img.alt = item.alt
                        img.style.cssText = `
                          max-width: 90vw;
                          max-height: 90vh;
                          object-fit: contain;
                          border-radius: 8px;
                          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                        `
                        
                        // Add elements to modal
                        modal.appendChild(closeBtn)
                        modal.appendChild(img)
                        document.body.appendChild(modal)
                        
                        // Prevent body scroll
                        document.body.style.overflow = 'hidden'
                        
                        // Close functions
                        const closeModal = () => {
                          document.body.removeChild(modal)
                          document.body.style.overflow = ''
                        }
                        
                        closeBtn.onclick = closeModal
                        modal.onclick = (e) => {
                          if (e.target === modal) closeModal()
                        }
                        
                        // Escape key
                        const handleKeydown = (e: KeyboardEvent) => {
                          if (e.key === 'Escape') {
                            closeModal()
                            document.removeEventListener('keydown', handleKeydown)
                          }
                        }
                        document.addEventListener('keydown', handleKeydown)
                      }}>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                        />
                        {/* Zoom overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/20 p-3 rounded-full">
                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Reduced Overlay with Lighter Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10 group-hover:from-black/60 group-hover:via-black/30 transition-all duration-500 pointer-events-none"></div>
                      
                      {/* Elegant Corner Accents with Enhanced Animation */}
                      <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-vibrant-pink/60 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
                      <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-warm-terracotta/60 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
                      
                      {/* Enhanced Border Effect with Multiple Layers */}
                      <div className="absolute inset-0 rounded-xl border border-off-white/5 group-hover:border-vibrant-pink/20 transition-all duration-500 pointer-events-none"></div>
                      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-vibrant-pink/10 transition-all duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Accent Bars */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-vibrant-pink to-transparent opacity-60"></div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-warm-terracotta to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Enhanced Bottom Decoration */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-vibrant-pink"></div>
                <div className="w-2 h-2 rounded-full bg-vibrant-pink"></div>
              </div>
              <p className="font-serif text-lg text-charcoal/50 italic">
                "{t("spaces.subtitle")}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-warm-terracotta"></div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-warm-terracotta"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Booking Form */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 py-20">
        <div className="bg-charcoal/5 p-10 lg:p-16">
          <h2 className="font-serif text-4xl text-charcoal mb-8 text-center animate-fade-in-up">
            {t("booking.title")}
          </h2>
          <p className="font-sans text-sm text-charcoal/70 text-center mb-12 animate-fade-in-up stagger-1">
            {t("booking.description")}
          </p>

          <form className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-charcoal mb-4 animate-fade-in-up">{t("booking.personalInfo")}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="animate-fade-in-up stagger-2">
                  <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                    {t("booking.name")}
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                    <input
                      type="text"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm rounded-lg"
                      placeholder="Nom & Prénom"
                    />
                  </div>
                </div>

                <div className="animate-fade-in-up stagger-3">
                  <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                    {t("booking.company")}
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                    <input
                      type="text"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm rounded-lg"
                      placeholder="Nom de l'Entreprise"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="animate-fade-in-up stagger-4">
                  <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                    {t("booking.email")}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                    <input
                      type="email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm rounded-lg"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="animate-fade-in-up stagger-5">
                  <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                    {t("booking.phone")}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                    <input
                      type="tel"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm rounded-lg"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Event Information Section */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-charcoal mb-4 animate-fade-in-up">{t("booking.eventDetails")}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="animate-fade-in-up stagger-6">
                  <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                    {t("booking.eventType")}
                  </label>
                  <select
                    required
                    className="w-full px-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm rounded-lg"
                  >
                    <option value="">{t("booking.selectOption")}</option>
                    <option value="festival">{t("booking.eventTypes.festival")}</option>
                    <option value="concert">{t("booking.eventTypes.concert")}</option>
                    <option value="photo">{t("booking.eventTypes.photo")}</option>
                    <option value="tournage">{t("booking.eventTypes.shooting")}</option>
                    <option value="corporate">{t("booking.eventTypes.corporate")}</option>
                    <option value="exposition">{t("booking.eventTypes.exhibition")}</option>
                    <option value="autre">{t("booking.eventTypes.other")}</option>
                  </select>
                </div>

                <div className="animate-fade-in-up stagger-7">
                  <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                    {t("booking.desiredDate")}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                    <input
                      type="date"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up stagger-8">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  {t("booking.numberOfPeople")}
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="number"
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm rounded-lg"
                    placeholder="50"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-9">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  {t("booking.projectDetails")}
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm resize-none rounded-lg"
                  placeholder={t("booking.projectPlaceholder")}
                />
              </div>
            </div>

            {/* Submit Section */}
            <div className="text-center animate-fade-in-up stagger-10 pt-6 border-t border-charcoal/10">
              <p className="font-sans text-xs text-charcoal/60 mb-6 max-w-2xl mx-auto leading-relaxed">
                {t("booking.contactText")}
              </p>
              <button
                type="submit"
                className="px-16 py-5 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-sans tracking-[0.15em] uppercase hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
              >
                {t("booking.bookNow")}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Services Included */}
      <section className="bg-charcoal text-off-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center animate-fade-in-up">{t("services.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Key, text: t("services.items.access") },
              { icon: UsersRound, text: t("services.items.team") },
              { icon: Volume2, text: t("services.items.sound") },
              { icon: Sofa, text: t("services.items.furniture") },
              { icon: Shield, text: t("services.items.security") },
              { icon: Sparkles, text: t("services.items.cleaning") },
              { icon: Headphones, text: t("services.items.support") },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.text} className={`text-center p-6 bg-off-white/5 rounded-lg hover:bg-off-white/10 transition-colors animate-fade-in-up stagger-${index + 1}`}>
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="font-sans text-sm">{service.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}