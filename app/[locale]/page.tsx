"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useTranslations, useLocale } from 'next-intl'
import Link from "next/link"
import { useState, useEffect } from "react"
import { 
  MapPin, Utensils, Coffee, Camera, ShoppingBag, Calendar, Star, ArrowRight, 
  Compass, Heart, Building, Waves, Route, Music, Trophy, Plane, Home, Users, 
  PartyPopper, Palette, Store, Sparkles, Play, ChevronDown, Ticket, Clock,
  ArrowUpRight, Zap
} from "lucide-react"

// Countdown Component - CAN 2025 Style
function MiniCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })
  
  useEffect(() => {
    const targetDate = new Date('2025-12-21T18:00:00').getTime()
    
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        })
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-black text-white tabular-nums">{timeLeft.days}j</span>
      <span className="text-white/60">:</span>
      <span className="font-black text-white tabular-nums">{timeLeft.hours}h</span>
      <span className="text-white/60">:</span>
      <span className="font-black text-white tabular-nums">{timeLeft.minutes}m</span>
    </div>
  )
}

// Floating Moroccan Pattern Particles
function FloatingPatterns() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Zelij-inspired geometric shapes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-20"
          style={{
            left: `${10 + (i * 8) % 90}%`,
            top: `${5 + (i * 12) % 85}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + (i % 3)}s`
          }}
        >
          {i % 3 === 0 ? (
            // 8-pointed star
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" fill={['#00a346', '#c10000', '#ffd700'][i % 3]} />
            </svg>
          ) : i % 3 === 1 ? (
            // Diamond
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0L20 10L10 20L0 10Z" fill={['#00a346', '#c10000', '#0066b2'][i % 3]} />
            </svg>
          ) : (
            // Hexagon
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 0L21 5.5V16.5L11 22L1 16.5V5.5Z" fill={['#ffd700', '#00a346', '#c10000'][i % 3]} />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  const t = useTranslations('home')
  const locale = useLocale()
  
  return (
    <main className="min-h-screen bg-[#fafaf8] overflow-hidden">
      <Navigation />
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION - REVOLUTIONARY PINTEREST + CAN 2025 FUSION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Base gradient - warm terracotta & sand tones */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fef7ed] via-[#fdf4e8] to-[#fef9f0]" />
          
          {/* Moroccan-inspired color orbs */}
          <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#00a346]/15 rounded-full blur-[180px] animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#c10000]/12 rounded-full blur-[150px] animate-pulse-slow animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffd700]/15 rounded-full blur-[120px] animate-pulse-slow animation-delay-4000" />
          
          {/* Floating Moroccan patterns */}
          <FloatingPatterns />
          
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 80px),
                              repeating-linear-gradient(90deg, #000 0px, transparent 1px, transparent 80px)`
          }} />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-16 pt-32 pb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
            
            {/* Left - Main Content (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* CAN 2025 Live Badge */}
              <Link 
                href={`/${locale}/can-2025`}
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00a346] to-[#006633] text-white shadow-lg shadow-[#00a346]/25 hover:shadow-[#00a346]/40 transition-all hover:scale-105"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="text-sm font-bold tracking-wide">CAN 2025</span>
                <div className="h-4 w-px bg-white/30" />
                <MiniCountdown />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="block text-[#1a1a1a]">Vivez</span>
                  <span className="block bg-gradient-to-r from-[#00a346] via-[#ffd700] to-[#c10000] bg-clip-text text-transparent">
                    Casablanca
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-[#555] max-w-md leading-relaxed">
                  La capitale économique du Maroc vous ouvre ses portes. 
                  <span className="text-[#00a346] font-semibold"> 500+ lieux</span> à découvrir.
                </p>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/can-2025`}
                  className="group px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#006633] text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-[#00a346]/30 transition-all flex items-center gap-3 shadow-xl"
                >
                  <Trophy className="w-5 h-5 text-[#ffd700]" />
                  <span>Guide CAN 2025</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href={`/${locale}/decouvrir/monuments`}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#00a346]/20 text-[#00533a] font-bold rounded-2xl hover:border-[#00a346]/50 hover:bg-white transition-all"
                >
                  Explorer la ville
                </Link>
              </div>
              
              {/* Quick Stats */}
              <div className="flex items-center gap-8 pt-6">
                {[
                  { value: '500+', label: 'Lieux', color: '#00a346' },
                  { value: '200+', label: 'Restos', color: '#c10000' },
                  { value: '50K+', label: 'Visiteurs', color: '#0066b2' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl lg:text-3xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-xs text-[#888] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Pinterest-style Bento Grid (7 cols) */}
            <div className="lg:col-span-7 relative">
              {/* Decorative glow behind */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#00a346]/20 via-[#ffd700]/10 to-[#c10000]/20 rounded-[3rem] blur-3xl opacity-60" />
              
              {/* Bento Grid */}
              <div className="relative grid grid-cols-12 grid-rows-6 gap-3 lg:gap-4 h-[600px] lg:h-[700px]">
                
                {/* Card 1 - Large Featured (Hassan II) */}
                <div className="col-span-7 row-span-4 group relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1696259629194-5411989d6675?w=800&q=80" 
                    alt="Mosquée Hassan II"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#00a346] text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" /> TOP 1
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-1">Mosquée Hassan II</h3>
                    <p className="text-white/70 text-sm">Le chef-d'œuvre de Casablanca</p>
                  </div>
                  
                  {/* Hover action */}
                  <Link href={`/${locale}/decouvrir/monuments`} className="absolute inset-0">
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                  </Link>
                </div>
                
                {/* Card 2 - CAN 2025 Promo */}
                <div className="col-span-5 row-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#00a346] via-[#008c3c] to-[#006633] shadow-xl">
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <pattern id="zelij" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10 0L20 10L10 20L0 10Z" fill="white" fillOpacity="0.3"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#zelij)"/>
                    </svg>
                  </div>
                  
                  <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-6 h-6 text-[#ffd700]" />
                        <span className="text-white font-bold text-lg">CAN 2025</span>
                      </div>
                      <div className="px-3 py-1 bg-white/20 backdrop-blur rounded-full">
                        <span className="text-white text-xs font-bold">MAROC</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-2">Coup d'envoi dans</p>
                      <div className="flex items-center gap-1 text-2xl font-black text-white">
                        <MiniCountdown />
                      </div>
                    </div>
                  </div>
                  
                  <Link href={`/${locale}/can-2025`} className="absolute inset-0" />
                </div>
                
                {/* Card 3 - Restaurants */}
                <div className="col-span-5 row-span-2 group relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80" 
                    alt="Restaurant"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Utensils className="w-4 h-4 text-[#c10000]" />
                      <span className="text-white font-bold">Restaurants</span>
                    </div>
                    <p className="text-white/60 text-xs">200+ adresses vérifiées</p>
                  </div>
                  
                  <Link href={`/${locale}/manger-sortir/restaurants`} className="absolute inset-0" />
                </div>
                
                {/* Card 4 - Quartiers */}
                <div className="col-span-4 row-span-2 group relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80" 
                    alt="Quartier"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-[#0066b2]" />
                      <span className="text-white font-bold text-sm">Quartiers</span>
                    </div>
                    <p className="text-white/60 text-xs">Habous, Maarif, Anfa...</p>
                  </div>
                  
                  <Link href={`/${locale}/decouvrir/quartiers`} className="absolute inset-0" />
                </div>
                
                {/* Card 5 - Nightlife */}
                <div className="col-span-4 row-span-2 group relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80" 
                    alt="Bar"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <PartyPopper className="w-4 h-4 text-[#c10000]" />
                      <span className="text-white font-bold text-sm">Sortir</span>
                    </div>
                    <p className="text-white/60 text-xs">Bars & Rooftops</p>
                  </div>
                  
                  <Link href={`/${locale}/manger-sortir/bars-nightlife`} className="absolute inset-0" />
                </div>
                
                {/* Card 6 - Plages */}
                <div className="col-span-4 row-span-2 group relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" 
                    alt="Plage"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0066b2]/90 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Waves className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">Plages</span>
                    </div>
                    <p className="text-white/80 text-xs">Ain Diab, Corniche</p>
                  </div>
                  
                  <Link href={`/${locale}/decouvrir/mer-plages`} className="absolute inset-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <a href="#discover" className="flex flex-col items-center gap-2 text-[#888] hover:text-[#1a1a1a] transition-colors">
            <span className="text-xs uppercase tracking-widest">Explorer</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          DISCOVER SECTION - BENTO STYLE
      ═══════════════════════════════════════════════════════════════ */}
      <section id="discover" className="py-24 lg:py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00a346]/30 to-transparent" />
        
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a346]/10 border border-[#00a346]/20 mb-4">
                <Compass className="w-4 h-4 text-[#00a346]" />
                <span className="text-sm text-[#00a346] font-bold">Découvrir</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-[#1a1a1a] leading-tight">
                Explorez la<br />
                <span className="text-gradient-can">ville blanche</span>
              </h2>
            </div>
            <p className="text-[#666] max-w-md text-lg">
              Des monuments historiques aux quartiers branchés, découvrez tous les trésors cachés de Casablanca
            </p>
          </div>
          
          {/* Bento Grid - Pinterest Style */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            
            {/* Large Card - Monuments */}
            <Link href={`/${locale}/decouvrir/monuments`} className="col-span-12 lg:col-span-8 group">
              <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80" 
                  alt="Monuments de Casablanca"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#00a346] flex items-center justify-center">
                      <Building className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-black text-white">Monuments</h3>
                      <p className="text-white/70">Mosquée Hassan II, Art Déco, lieux emblématiques</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm group-hover:text-white transition-colors">
                    <span>Explorer les monuments</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Stacked Cards - Right Side */}
            <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4 lg:gap-6">
              
              {/* Quartiers */}
              <Link href={`/${locale}/decouvrir/quartiers`} className="group relative h-[200px] lg:h-auto rounded-[2rem] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" 
                  alt="Quartiers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0066b2]/90 via-[#0066b2]/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-white" />
                    <div>
                      <h3 className="text-xl font-black text-white">Quartiers</h3>
                      <p className="text-white/70 text-sm">Habous, Maarif, Gauthier</p>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Mer & Plages */}
              <Link href={`/${locale}/decouvrir/mer-plages`} className="group relative h-[200px] lg:h-auto rounded-[2rem] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" 
                  alt="Plages"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c10000]/90 via-[#c10000]/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <Waves className="w-6 h-6 text-white" />
                    <div>
                      <h3 className="text-xl font-black text-white">Mer & Plages</h3>
                      <p className="text-white/70 text-sm">Corniche, Ain Diab</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          ACTIVITIES - HORIZONTAL SCROLL CARDS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#00533a] via-[#004d36] to-[#003d2b]">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00a346]/40 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ffd700]/20 rounded-full blur-[150px]" />
        </div>
        
        {/* Zelij pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="zelij-activities" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M15 0L30 15L15 30L0 15Z" fill="none" stroke="#fff" strokeWidth="0.3"/>
              <circle cx="15" cy="15" r="2" fill="#ffd700" fillOpacity="0.3"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#zelij-activities)"/>
          </svg>
        </div>
        
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 mb-4">
                <Star className="w-4 h-4 text-[#ffd700]" />
                <span className="text-sm text-white font-bold">Activités</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                Vivez des<br />
                <span className="bg-gradient-to-r from-[#ffd700] via-white to-[#ffd700] bg-clip-text text-transparent">expériences uniques</span>
              </h2>
            </div>
            <Link href={`/${locale}/activites/incontournables`} className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm group">
              <span>Voir toutes les activités</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Horizontal Scroll */}
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 lg:-mx-16 lg:px-16">
            {[
              { icon: Camera, title: 'Incontournables', desc: 'Les must-do à Casa', href: `/${locale}/activites/incontournables`, color: '#00a346', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=500&q=80' },
              { icon: Waves, title: 'Plein air & Mer', desc: 'Surf, jet-ski, balades', href: `/${locale}/activites/plein-air-mer`, color: '#0066b2', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500&q=80' },
              { icon: Compass, title: 'Tours & Expériences', desc: 'Visites guidées exclusives', href: `/${locale}/activites/tours-experiences`, color: '#c10000', image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&q=80' },
              { icon: Users, title: 'En famille', desc: 'Activités pour enfants', href: `/${locale}/activites/famille-enfants`, color: '#ffd700', image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=500&q=80' },
              { icon: ShoppingBag, title: 'Shopping', desc: 'Malls & boutiques', href: `/${locale}/activites/shopping`, color: '#00a346', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80' },
            ].map((item, i) => (
              <Link 
                key={i} 
                href={item.href}
                className="group flex-shrink-0 w-[280px] lg:w-[320px] snap-start"
              >
                <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.color }}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-black text-white mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{item.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: item.color }}>
                      <span>Explorer</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          FOOD & NIGHTLIFE - MOSAIC GRID
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Warm background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fef6ee] via-[#fff8f3] to-[#fef9f5]" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#c10000]/10 rounded-full blur-[150px]" />
        
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c10000]/10 border border-[#c10000]/20 mb-6">
                <Utensils className="w-4 h-4 text-[#c10000]" />
                <span className="text-sm text-[#c10000] font-bold">Gastronomie & Sorties</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-[#1a1a1a] leading-tight mb-6">
                Savourez<br />
                <span className="text-gradient-can">Casablanca</span>
              </h2>
              <p className="text-[#666] text-lg mb-10 max-w-md">
                Des restaurants gastronomiques aux cafés branchés, des rooftops aux souks authentiques - découvrez la scène culinaire et festive de Casa
              </p>
              
              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Utensils, label: 'Restaurants', href: `/${locale}/manger-sortir/restaurants`, color: '#00a346' },
                  { icon: Coffee, label: 'Cafés', href: `/${locale}/manger-sortir/cafes-brunchs`, color: '#0066b2' },
                  { icon: PartyPopper, label: 'Nightlife', href: `/${locale}/manger-sortir/bars-nightlife`, color: '#c10000' },
                  { icon: Store, label: 'Souks', href: `/${locale}/manger-sortir/souks-artisanat`, color: '#ffd700' },
                ].map((item, i) => (
                  <Link 
                    key={i}
                    href={item.href}
                    className="group flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <span className="font-bold text-[#1a1a1a] group-hover:text-[#00a346] transition-colors">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Right - Mosaic */}
            <div className="grid grid-cols-6 grid-rows-4 gap-3 h-[500px]">
              <div className="col-span-4 row-span-2 rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80" alt="Restaurant" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" alt="Café" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80" alt="Bar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" alt="Nightlife" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="col-span-2 row-span-1 rounded-2xl bg-gradient-to-r from-[#00a346] to-[#008c3c] flex items-center justify-center shadow-xl">
                <span className="text-white font-black text-lg">200+ spots</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          EVENTS - LARGE FEATURED + GRID
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative bg-[#f8f8f6]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c10000]/10 border border-[#c10000]/20 mb-6">
              <Calendar className="w-4 h-4 text-[#c10000]" />
              <span className="text-sm text-[#c10000] font-bold">Événements</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-[#1a1a1a]">
              Ne manquez <span className="text-gradient-can">rien</span>
            </h2>
          </div>
          
          {/* Events Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Music, title: 'Concerts', desc: 'Musique live', href: `/${locale}/evenements/concerts-spectacles`, color: '#c10000' },
              { icon: Palette, title: 'Expos', desc: 'Art contemporain', href: `/${locale}/evenements/expositions-galeries`, color: '#0066b2' },
              { icon: PartyPopper, title: 'Festivals', desc: 'Événements annuels', href: `/${locale}/evenements/festivals`, color: '#00a346' },
              { icon: Trophy, title: 'Sports', desc: 'Matchs & compétitions', href: `/${locale}/evenements/evenements-sportifs`, color: '#ffd700' },
              { icon: Building, title: 'Salons', desc: 'Foires & B2B', href: `/${locale}/evenements/foires-salons`, color: '#0066b2' },
            ].map((item, i) => (
              <Link 
                key={i}
                href={item.href}
                className="group p-6 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${item.color}15` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-1">{item.title}</h3>
                <p className="text-[#888] text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          PLAN YOUR STAY - CARDS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4] via-[#f0f9ff] to-[#fef7ed]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#00a346]/15 via-[#0066b2]/10 to-[#c10000]/15 rounded-full blur-[150px]" />
        
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066b2]/10 border border-[#0066b2]/20 mb-6">
              <Plane className="w-4 h-4 text-[#0066b2]" />
              <span className="text-sm text-[#0066b2] font-bold">Planifier</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-[#1a1a1a]">
              Préparez votre <span className="text-gradient-can">voyage</span>
            </h2>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Home, title: 'Hébergement', desc: 'Hôtels, riads', href: `/${locale}/planifier/hebergement`, color: '#00a346' },
              { icon: MapPin, title: 'Où loger ?', desc: 'Guide quartiers', href: `/${locale}/planifier/ou-loger`, color: '#0066b2' },
              { icon: Route, title: 'Se déplacer', desc: 'Tram, taxi, VTC', href: `/${locale}/planifier/se-deplacer`, color: '#c10000' },
              { icon: Plane, title: 'Aéroport', desc: 'Transferts', href: `/${locale}/planifier/aeroport-centre-ville`, color: '#00a346' },
              { icon: Zap, title: 'Infos pratiques', desc: 'Conseils & astuces', href: `/${locale}/planifier/infos-pratiques`, color: '#0066b2' },
            ].map((item, i) => (
              <Link 
                key={i}
                href={item.href}
                className="group p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${item.color}15` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-1">{item.title}</h3>
                <p className="text-[#888] text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA - CAN 2025 STYLE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        {/* Rich gradient background - Moroccan inspired warm tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c1d1d] via-[#991b1b] to-[#b91c1c]" />
        
        {/* Moroccan pattern overlay */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="zelij-cta" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L40 20L20 40L0 20Z" fill="none" stroke="#ffd700" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="3" fill="#ffd700" fillOpacity="0.4"/>
              <path d="M20 10L25 20L20 30L15 20Z" fill="#fff" fillOpacity="0.1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#zelij-cta)"/>
          </svg>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#ffd700]/25 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00a346]/25 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white shadow-lg mb-8">
            <Trophy className="w-5 h-5 text-[#ffd700]" />
            <span className="font-bold">CAN 2025 au Maroc</span>
          </div>
          
          <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Le moment est<br />
            <span className="bg-gradient-to-r from-[#ffd700] via-white to-[#ffd700] bg-clip-text text-transparent">historique.</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Rejoignez des millions de supporters pour célébrer le football africain au Maroc. Casablanca vous attend.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/can-2025`}
              className="px-10 py-5 bg-white text-[#991b1b] font-black text-lg rounded-2xl hover:bg-white/90 transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              <Trophy className="w-6 h-6 text-[#ffd700]" />
              <span>Guide CAN 2025</span>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  )
}
