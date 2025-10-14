"use client"

import Image from "next/image"
import { Calendar, Users, Mail, Phone, User, Key, UsersRound, Volume2, Sofa, Shield, Sparkles, ParkingCircle, Headphones, Play, Pause } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ImageLightbox } from "@/components/image-lightbox"
import { useRef, useState } from "react"

export default function ReserverPage() {
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
              { label: "Réserver", href: "/reserver" }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image src="/reserve.png" alt="Réserver l'Ex église Sacré-Cœur" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-off-white mb-4 animate-fade-in-up text-balance">
            Réserver votre espace
          </h1>
          <p className="font-sans text-sm md:text-base text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1">
            Un lieu d'exception pour vos événements
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
              Un espace d'exception pour vos événements
            </h2>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-6">
              L'Ex église Sacré-Cœur de Casablanca s'impose aujourd'hui comme un lieu emblématique pour les événements professionnels, culturels et institutionnels.
              Grâce à son architecture monumentale, sa localisation centrale et ses espaces modulables, il offre un cadre unique pour accueillir conférences, forums, lancements, expositions ou soirées de prestige.
            </p>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed">
              Notre équipe vous accompagne dans l'organisation de votre événement pour garantir une expérience unique et mémorable.
            </p>
          </div>
          <div className="relative h-[500px] animate-fade-in-up stagger-1">
            <Image
              src="/site-map-images/reserver sacre coeur/reserver sacre coeur - ferrari /reserver sacre coeur - ferrari 2.jpeg"
              alt="Événement privé"
              fill
              className="object-cover shadow-2xl"
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
              Revivez l'inauguration du l'Ex Église Sacré-Cœur
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
                  "Un voyage architectural à travers l'histoire et l'élégance"
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
              Découvrez nos espaces
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
              L'Ex Église Sacré-Cœur met à votre disposition une variété d'espaces, intérieurs comme extérieurs, où chaque détail contribue à la réussite de vos événements.
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
                "Des espaces uniques pour des événements d'exception"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-warm-terracotta"></div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-warm-terracotta"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events - Elegant Portfolio Gallery */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal relative overflow-hidden">
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-20 w-40 h-40">
            <svg viewBox="0 0 128 128" className="w-full h-full text-off-white">
              <path d="M16 16 L112 16 L112 112 L16 112 Z M32 32 L96 32 L96 96 L32 96 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="64" cy="64" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-20 w-40 h-40">
            <svg viewBox="0 0 128 128" className="w-full h-full text-off-white">
              <path d="M16 16 L112 16 L112 112 L16 112 Z M32 32 L96 32 L96 96 L32 96 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="64" cy="64" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            <svg viewBox="0 0 200 200" className="w-full h-full text-off-white/5">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Enhanced Header with Elegant Typography */}
          <div className="text-center mb-20 lg:mb-24 animate-fade-in-up">
            <div className="inline-flex items-center gap-4 mb-8">
           
              
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-off-white mb-8 tracking-tight leading-[0.9]">
              Ils nous ont fait
              <span className="block text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-vibrant-pink via-warm-terracotta to-vibrant-pink bg-clip-text text-transparent uppercase font-light tracking-[0.15em] leading-[0.8]">
                confiance
              </span>
            </h2>
            
            <p className="font-sans text-xl md:text-2xl text-off-white/80 max-w-5xl mx-auto leading-relaxed">
              Des marques prestigieuses et institutions de renom ont choisi l'Ex église Sacré-Cœur pour leurs événements d'exception
            </p>
          </div>

          {/* Enhanced Grid Gallery - No Empty Spaces */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                title: "Lancement Ferrari",
                
                image: "/site-map-images/reserver sacre coeur/reserver sacre coeur - ferrari /reserver sacre coeur - ferrari 1.jpeg"
              },
              {
                title: "LH Fashion Show",
                
                image: "/site-map-images/reserver sacre coeur/fashion show/fashion-show.jpg"
              },
              {
                title: "Casa Arab Festival",
                
                image: "/site-map-images/reserver sacre coeur/casa arab festival/WhatsApp Image 2025-10-02 at 11.26.11 AM.jpeg"
              },
              {
                title: "Casablanca Arab Film Festival",
                
                image: "/site-map-images/reserver sacre coeur/casa arab festival/WhatsApp Image 2025-10-02 at 11.26.11 AM-2.jpeg"
              },
              {
                title: "Co-branding Visa & RAM",
                
                image: "/site-map-images/reserver sacre coeur/coebranding ram visa/WhatsApp Image 2025-10-02 at 12.02.47 PM.jpeg"
              },
              {
                title: "Young Moroccan Architecture Awards",
                
                image: "/site-map-images/reserver sacre coeur/ymaa/yama.jpg"
              },
            ].map((event, index) => (
              <div
                key={event.title}
                className={`group relative h-[350px] rounded-xl overflow-hidden animate-fade-in-up stagger-${index + 1} transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-vibrant-pink/20`}
              >
                {/* Premium Container with Enhanced Styling */}
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-charcoal/20 to-charcoal/40 backdrop-blur-sm border border-off-white/10 group-hover:border-vibrant-pink/30 transition-all duration-500">
                  
                  {/* Image Container */}
                  <div className="absolute inset-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                  
                  {/* Sophisticated Overlay with Enhanced Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:from-black/98 group-hover:via-black/70 transition-all duration-500"></div>
                  
                  {/* Elegant Corner Accents with Enhanced Animation */}
                  <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-vibrant-pink/60 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-warm-terracotta/60 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Content Section with Enhanced Typography */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10">
                    <div className="space-y-4 transform transition-all duration-500 group-hover:translate-y-0">
                      {/* Enhanced Accent Line with Animation */}
                      <div className="w-16 h-0.5 bg-gradient-to-r from-vibrant-pink via-vibrant-pink to-transparent group-hover:w-20 transition-all duration-500"></div>
                      
                      {/* Enhanced Title with Better Typography */}
                      <h3 className="font-serif text-2xl lg:text-3xl text-white font-bold leading-tight group-hover:text-vibrant-pink transition-colors duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                        {event.title}
                      </h3>
                      
                     
                      
                      {/* Enhanced Hover Effect - Additional Info */}
                     
                    </div>
                  </div>
                  
                  {/* Enhanced Border Effect with Multiple Layers */}
                  <div className="absolute inset-0 rounded-2xl border border-off-white/5 group-hover:border-vibrant-pink/20 transition-all duration-500 pointer-events-none"></div>
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-vibrant-pink/10 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Bottom Decoration */}
          <div className="flex justify-center mt-20 lg:mt-24 animate-fade-in-up">
            <div className="flex items-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-vibrant-pink/50 to-transparent"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-vibrant-pink animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-off-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-warm-terracotta animate-pulse"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-warm-terracotta/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 py-20">
        <div className="bg-charcoal/5 p-10 lg:p-16">
          <h2 className="font-serif text-4xl text-charcoal mb-8 text-center animate-fade-in-up">
            Demande de réservation
          </h2>
          <p className="font-sans text-sm text-charcoal/70 text-center mb-12 animate-fade-in-up stagger-1">
            Remplissez ce formulaire et nous vous contacterons dans les 48 heures
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-2">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Nom complet *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-3">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-4">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Téléphone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="tel"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-5">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Type d'événement *
                </label>
                <select
                  required
                  className="w-full px-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="mariage">Mariage & Cérémonie</option>
                  <option value="concert">Concert Privé</option>
                  <option value="photo">Séance Photo</option>
                  <option value="tournage">Tournage</option>
                  <option value="corporate">Événement Corporatif</option>
                  <option value="exposition">Exposition</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-6">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Date souhaitée *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="date"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-7">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Nombre de personnes
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="number"
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="50"
                  />
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up stagger-8">
              <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                Détails de votre projet
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm resize-none"
                placeholder="Décrivez votre événement, vos besoins spécifiques, horaires souhaités..."
              />
            </div>

            <div className="text-center animate-fade-in-up stagger-9">
              <p className="font-sans text-xs text-charcoal/60 mb-6 max-w-2xl mx-auto leading-relaxed">
                Réservez l'Ex église Sacré-Cœur pour votre événement ! Contactez notre équipe pour organiser votre événement à l'Ex église Sacré-Cœur et profitez d'un cadre prestigieux au cœur de Casablanca.
              </p>
              <button
                type="submit"
                className="px-16 py-5 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-sans tracking-[0.15em] uppercase hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
              >
                Réserver maintenant
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Services Included */}
      <section className="bg-charcoal text-off-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center animate-fade-in-up">Services inclus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Key, text: "Accès exclusif aux espaces" },
              { icon: UsersRound, text: "Équipe d'accueil dédiée" },
              { icon: Volume2, text: "Système son et éclairage" },
              { icon: Sofa, text: "Mobilier et décoration de base" },
              { icon: Shield, text: "Sécurité et surveillance" },
              { icon: Sparkles, text: "Nettoyage après événement" },
              { icon: Headphones, text: "Assistance technique" },
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