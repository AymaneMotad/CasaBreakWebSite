"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLocale } from "next-intl"
import Link from "next/link"
import { useState, useEffect } from "react"
import { 
  MapPin, Calendar, Users, Trophy, Star, ArrowRight, 
  ChevronDown, Sparkles, Globe, Building, Heart,
  Utensils, Coffee, Hotel, Bus, Play, ArrowUpRight,
  Compass, Camera, Waves, ShoppingBag, Music
} from "lucide-react"

// Epic Countdown Timer Component
function EpicCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    const targetDate = new Date('2025-12-21T18:00:00').getTime()
    
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null
  
  return (
    <div className="flex gap-4 sm:gap-6 lg:gap-8">
      {[
        { value: timeLeft.days, label: 'Jours', color: '#00a346' },
        { value: timeLeft.hours, label: 'Heures', color: '#ffd700' },
        { value: timeLeft.minutes, label: 'Minutes', color: '#c10000' },
        { value: timeLeft.seconds, label: 'Secondes', color: '#00a346' }
      ].map((item, i) => (
        <div key={i} className="relative group">
          {/* Glow effect */}
          <div 
            className="absolute -inset-2 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"
            style={{ backgroundColor: item.color }}
          />
          
          <div className="relative w-20 sm:w-28 lg:w-32 h-24 sm:h-32 lg:h-36 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/50 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
            {/* Top accent */}
            <div 
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: item.color }}
            />
            
            {/* Number */}
            <span 
              className="text-4xl sm:text-6xl lg:text-7xl font-black tabular-nums"
              style={{ color: item.color }}
            >
              {String(item.value).padStart(2, '0')}
            </span>
            
            {/* Label */}
            <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-medium mt-1">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Animated Moroccan Pattern Background
function MoroccanPatternBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Zelij-inspired SVG pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="zelij-hero" width="20" height="20" patternUnits="userSpaceOnUse">
            {/* 8-pointed star */}
            <path d="M10 0L12 8L10 6L8 8Z M10 20L12 12L10 14L8 12Z M0 10L8 12L6 10L8 8Z M20 10L12 12L14 10L12 8Z" fill="#00a346"/>
            {/* Diamond center */}
            <path d="M10 7L13 10L10 13L7 10Z" fill="#c10000"/>
            {/* Corner accents */}
            <circle cx="0" cy="0" r="1" fill="#ffd700"/>
            <circle cx="20" cy="0" r="1" fill="#ffd700"/>
            <circle cx="0" cy="20" r="1" fill="#ffd700"/>
            <circle cx="20" cy="20" r="1" fill="#ffd700"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#zelij-hero)"/>
      </svg>
      
      {/* Floating geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-20"
          style={{
            left: `${5 + (i * 7) % 90}%`,
            top: `${10 + (i * 11) % 80}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${5 + (i % 4)}s`
          }}
        >
          {i % 4 === 0 ? (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 0L20 12L16 8L12 12Z M16 32L20 20L16 24L12 20Z M0 16L12 20L8 16L12 12Z M32 16L20 20L24 16L20 12Z" fill="#00a346"/>
            </svg>
          ) : i % 4 === 1 ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 0L24 12L12 24L0 12Z" fill="#c10000"/>
            </svg>
          ) : i % 4 === 2 ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#ffd700" strokeWidth="2" fill="none"/>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 0L28 7V21L14 28L0 21V7Z" fill="#0066b2"/>
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

// Stadium Bento Card
function StadiumBentoCard({ city, stadium, image, capacity, matches, isLarge = false, accentColor = '#00a346', imageClass = '' }: {
  city: string
  stadium: string
  image: string
  capacity: string
  matches: string
  isLarge?: boolean
  accentColor?: string
  imageClass?: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-xl h-full">
      <img 
        src={image} 
        alt={stadium}
        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${imageClass}`}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      
      {/* Hover color overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500"
        style={{ backgroundColor: accentColor }}
      />
      
      {/* City badge */}
      <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full shadow-lg">
        <span className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <MapPin className="w-4 h-4" style={{ color: accentColor }} />
          {city}
        </span>
      </div>
      
      {/* Match type badge */}
      <div 
        className="absolute top-4 right-4 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg"
        style={{ backgroundColor: accentColor }}
      >
        {matches}
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <h3 className={`font-black text-white mb-2 ${isLarge ? 'text-2xl lg:text-4xl' : 'text-xl lg:text-2xl'}`}>
          {stadium}
        </h3>
        <div className="flex items-center gap-4 text-white/90 text-sm lg:text-base">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            <Users className="w-4 h-4" />
            {capacity} places
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Can2025Page() {
  const locale = useLocale()
  
  const hostCities = [
    { city: 'Casablanca', stadium: 'Stade Mohammed V', image: '/stadiums/mohammed-v-casablanca.jpg', capacity: '67 000', matches: '8 matchs', accentColor: '#00a346' },
    { city: 'Rabat', stadium: 'Complexe Sportif Prince Moulay Abdellah', image: '/stadiums/moulay-abdellah-rabat.jpg', capacity: '68 000', matches: 'Finale', accentColor: '#c10000' },
    { city: 'Marrakech', stadium: 'Grand Stade de Marrakech', image: '/stadiums/marrakech.jpg', capacity: '45 240', matches: '8 matchs', accentColor: '#ffd700' },
    { city: 'Tanger', stadium: 'Grand Stade de Tanger', image: '/stadiums/tanger.jpg', capacity: '68 000', matches: '6 matchs', accentColor: '#0066b2' },
    { city: 'Fès', stadium: 'Complexe Sportif de Fès', image: '/stadiums/fes.jpg', capacity: '45 000', matches: '4 matchs', accentColor: '#00a346' },
    { city: 'Agadir', stadium: 'Grand Stade d\'Agadir', image: '/stadiums/agadir.jpg', capacity: '45 480', matches: '8 matchs', accentColor: '#c10000' },
  ]

  const teams = [
    '🇲🇦 Maroc', '🇸🇳 Sénégal', '🇳🇬 Nigeria', '🇪🇬 Égypte', 
    '🇩🇿 Algérie', '🇨🇮 Côte d\'Ivoire', '🇨🇲 Cameroun', '🇹🇳 Tunisie',
    '🇬🇭 Ghana', '🇲🇱 Mali', '🇿🇦 Afrique du Sud', '🇨🇩 RD Congo',
    '🇧🇫 Burkina Faso', '🇦🇴 Angola', '🇿🇲 Zambie', '🇬🇳 Guinée',
    '🇬🇦 Gabon', '🇲🇿 Mozambique', '🇧🇯 Bénin', '🇹🇿 Tanzanie',
    '🇺🇬 Ouganda', '🇿🇼 Zimbabwe', '🇸🇩 Soudan', '🇬🇶 Guinée Éq.'
  ]
  
  return (
    <main className="min-h-screen bg-[#fafaf8] overflow-hidden">
      <Navigation />
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION - IMMERSIVE CAN 2025 EXPERIENCE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Base warm gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fef7ed] via-[#f0fdf4] to-[#fef2f2]" />
          
          {/* Animated color orbs */}
          <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#00a346]/20 rounded-full blur-[200px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#c10000]/15 rounded-full blur-[180px] animate-pulse-slow animation-delay-2000" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ffd700]/20 rounded-full blur-[150px] animate-pulse-slow animation-delay-4000" />
          
          {/* Moroccan pattern */}
          <MoroccanPatternBg />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-16 pt-32 pb-20">
          <div className="text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00a346] to-[#006633] text-white shadow-lg shadow-[#00a346]/25 mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-sm font-bold tracking-wide">21 Décembre 2025 - 18 Janvier 2026</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tight mb-8 animate-fade-in-up animation-delay-200">
              <span className="block text-gray-900">COUPE D'AFRIQUE</span>
              <span className="block bg-gradient-to-r from-[#00a346] via-[#ffd700] to-[#c10000] bg-clip-text text-transparent">
                DES NATIONS
              </span>
              <span className="block mt-2 text-4xl sm:text-5xl lg:text-6xl text-gray-600 font-bold">
                MAROC · 2025
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-500 mb-16 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Le plus grand événement footballistique du continent africain arrive au Royaume du Maroc
            </p>
            
            {/* Epic Countdown */}
            <div className="mb-16 animate-fade-in-up animation-delay-600">
              <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-6 font-medium">Coup d'envoi dans</p>
              <div className="flex justify-center">
                <EpicCountdown />
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
              <a
                href="#casablanca"
                className="group px-10 py-5 bg-gradient-to-r from-[#00a346] to-[#006633] text-white font-bold text-lg rounded-2xl hover:shadow-xl hover:shadow-[#00a346]/30 transition-all flex items-center justify-center gap-3"
              >
                <MapPin className="w-6 h-6" />
                <span>Découvrir Casablanca</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <a href="#stats" className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <span className="text-xs uppercase tracking-widest">Explorer</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          STATS SECTION - CREATIVE BENTO STATS
      ═══════════════════════════════════════════════════════════════ */}
      <section id="stats" className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00a346]/5 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
          {/* Creative Bento Stats Grid */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            
            {/* Main Stat - 24 Équipes (Large) */}
            <div className="col-span-12 lg:col-span-5 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#00a346] to-[#006633] p-8 lg:p-10 shadow-2xl shadow-[#00a346]/20">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="zelij-stat1" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M10 0L20 10L10 20L0 10Z" fill="white"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#zelij-stat1)"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <Users className="w-12 h-12 text-white/80 mb-6" />
                <div className="text-8xl lg:text-9xl font-black text-white leading-none mb-2">24</div>
                <div className="text-xl lg:text-2xl text-white/90 font-bold">Équipes qualifiées</div>
                <p className="text-white/60 mt-2 text-sm">Les meilleures nations africaines</p>
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-white text-sm font-bold">🌍 Afrique</span>
              </div>
            </div>
            
            {/* 6 Villes + 52 Matchs Stack */}
            <div className="col-span-6 lg:col-span-4 flex flex-col gap-4 lg:gap-6">
              
              {/* 6 Villes */}
              <div className="group relative flex-1 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ffd700] to-[#f59e0b] p-6 lg:p-8 shadow-xl shadow-[#ffd700]/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <MapPin className="w-8 h-8 text-gray-900/70 mb-3" />
                  <div className="text-5xl lg:text-6xl font-black text-gray-900 leading-none">6</div>
                  <div className="text-gray-900/80 font-bold mt-1">Villes hôtes</div>
                </div>
                <div className="absolute bottom-4 right-4 text-4xl">🏟️</div>
              </div>
              
              {/* 52 Matchs */}
              <div className="group relative flex-1 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#c10000] to-[#991b1b] p-6 lg:p-8 shadow-xl shadow-[#c10000]/20">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <Trophy className="w-8 h-8 text-white/70 mb-3" />
                  <div className="text-5xl lg:text-6xl font-black text-white leading-none">52</div>
                  <div className="text-white/80 font-bold mt-1">Matchs au total</div>
                </div>
                <div className="absolute bottom-4 right-4 text-4xl">⚽</div>
              </div>
            </div>
            
            {/* 29 Jours + Morocco flag visual */}
            <div className="col-span-6 lg:col-span-3 flex flex-col gap-4 lg:gap-6">
              
              {/* 29 Jours */}
              <div className="group relative flex-1 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0066b2] to-[#0052a3] p-6 lg:p-8 shadow-xl shadow-[#0066b2]/20">
                <div className="relative z-10">
                  <Calendar className="w-8 h-8 text-white/70 mb-3" />
                  <div className="text-5xl lg:text-6xl font-black text-white leading-none">29</div>
                  <div className="text-white/80 font-bold mt-1">Jours</div>
                </div>
                <div className="absolute bottom-4 right-4 text-3xl">📅</div>
              </div>
              
              {/* Morocco Pride */}
              <div className="group relative flex-1 overflow-hidden rounded-[2rem] bg-white border-2 border-gray-100 p-6 shadow-lg">
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <span className="text-5xl mb-2">🇲🇦</span>
                  <div className="text-gray-900 font-black text-lg">MAROC</div>
                  <div className="text-gray-500 text-xs font-medium">Pays hôte</div>
                </div>
                {/* Morocco colors accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00a346] via-[#c10000] to-[#00a346]" />
              </div>
            </div>
          </div>
          
          {/* Bottom tagline */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-lg">
              <span className="font-bold text-gray-900">Du 21 décembre 2025 au 18 janvier 2026</span> — Une fête du football africain
            </p>
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          HOST CITIES - BENTO GRID
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00a346]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#c10000]/10 rounded-full blur-[150px]" />
        
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 mb-4">
                <Globe className="w-4 h-4 text-[#ffd700]" />
                <span className="text-sm text-gray-700 font-bold">Villes Hôtes</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
                6 villes.<br />
                <span className="text-gradient-can">6 ambiances.</span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-lg">
              Du nord au sud, le Maroc vous accueille dans ses plus beaux stades pour une CAN inoubliable
            </p>
          </div>
          
          {/* Bento Grid - 6 Cities */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {/* Row 1 */}
            {/* Casablanca - Featured Large */}
            <div className="col-span-12 lg:col-span-8 h-[350px] lg:h-[450px]">
              <StadiumBentoCard {...hostCities[0]} isLarge={true} />
            </div>
            
            {/* Rabat */}
            <div className="col-span-6 lg:col-span-4 h-[250px] lg:h-[450px]">
              <StadiumBentoCard {...hostCities[1]} />
            </div>
            
            {/* Row 2 */}
            {/* Marrakech */}
            <div className="col-span-6 lg:col-span-4 h-[250px] lg:h-[300px]">
              <StadiumBentoCard {...hostCities[2]} />
            </div>
            
            {/* Tanger */}
            <div className="col-span-6 lg:col-span-4 h-[250px] lg:h-[300px]">
              <StadiumBentoCard {...hostCities[3]} />
            </div>
            
            {/* Fès */}
            <div className="col-span-6 lg:col-span-4 h-[250px] lg:h-[300px]">
              <StadiumBentoCard {...hostCities[4]} />
            </div>
            
            {/* Agadir - Full width on mobile */}
            <div className="col-span-6 lg:col-span-12 h-[300px] lg:h-[400px]">
              <StadiumBentoCard {...hostCities[5]} imageClass="object-center" />
            </div>
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          TEAMS SHOWCASE - SCROLLING MARQUEE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#00533a] via-[#004d36] to-[#003d2b]">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="zelij-teams" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M15 0L30 15L15 30L0 15Z" fill="none" stroke="#fff" strokeWidth="0.3"/>
              <circle cx="15" cy="15" r="2" fill="#ffd700" fillOpacity="0.3"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#zelij-teams)"/>
          </svg>
        </div>
        
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#00a346]/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ffd700]/20 rounded-full blur-[150px]" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 mb-6">
              <Trophy className="w-4 h-4 text-[#ffd700]" />
              <span className="text-sm text-white font-bold">24 Nations</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white">
              Un continent,<br />
              <span className="bg-gradient-to-r from-[#ffd700] via-white to-[#ffd700] bg-clip-text text-transparent">une passion.</span>
            </h2>
          </div>
          
          {/* Scrolling Teams - Row 1 */}
          <div className="relative overflow-hidden py-4 mb-4">
            <div className="flex gap-4 animate-scroll-left">
              {[...teams, ...teams].map((team, i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-default"
                >
                  <span className="text-xl font-bold text-white whitespace-nowrap">{team}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scrolling Teams - Row 2 (Reverse) */}
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-4 animate-scroll-right">
              {[...teams.slice().reverse(), ...teams.slice().reverse()].map((team, i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-default"
                >
                  <span className="text-xl font-bold text-white whitespace-nowrap">{team}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          CASABLANCA FOCUS - YOUR GUIDE
      ═══════════════════════════════════════════════════════════════ */}
      <section id="casablanca" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fef7ed] via-[#fff] to-[#f0fdf4]" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#00a346]/10 rounded-full blur-[150px]" />
        
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a346]/10 border border-[#00a346]/30 mb-6">
                <Sparkles className="w-4 h-4 text-[#ffd700]" />
                <span className="text-sm text-gray-700 font-bold">Ville Hôte de la Finale</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Vivez la CAN à<br />
                <span className="text-gradient-can">Casablanca</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                La capitale économique du Maroc vous ouvre ses portes. Avec le 
                <strong className="text-gray-900"> Stade Mohammed V</strong> et ses 67 000 places, 
                vivez une expérience footballistique unique au monde. Le stade accueillera 8 matchs de la CAN 2025, 
                dont le match pour la 3ème place.
              </p>
              
              {/* Stadium Card */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-lg mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00a346] to-[#006633] flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">Stade Mohammed V</h3>
                    <p className="text-gray-600">67 000 places • 8 matchs CAN 2025</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Le monument. Le "Donor", inauguré en 1955, reste l'un des théâtres les plus iconiques 
                  du football africain. Dans le quartier Maârif, l'enceinte casablancaise accueillera huit affiches 
                  de la CAN, fidèle à sa réputation d'arène incandescente et d'hôte des grands rendez-vous.
                </p>
              </div>
              
              {/* CTA */}
              <Link
                href={`/${locale}`}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#006633] text-white font-bold text-lg rounded-2xl hover:shadow-lg hover:shadow-[#00a346]/30 transition-all"
              >
                <span>Explorer Casablanca avec CasaBreak</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
            
            {/* Right - Bento Visual */}
            <div className="grid grid-cols-6 grid-rows-4 gap-3 h-[500px]">
              {/* Main Image */}
              <div className="col-span-4 row-span-3 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1696259629194-5411989d6675?w=800&q=80" 
                  alt="Mosquée Hassan II"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Side cards */}
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80" 
                  alt="Casablanca"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-[#00a346] to-[#006633] flex items-center justify-center shadow-xl">
                <div className="text-center text-white p-4">
                  <div className="text-4xl font-black">500+</div>
                  <div className="text-sm opacity-80">Lieux à découvrir</div>
                </div>
              </div>
              
              <div className="col-span-4 row-span-1 rounded-2xl bg-gradient-to-r from-[#ffd700] to-[#ffb800] flex items-center justify-center shadow-xl">
                <div className="flex items-center gap-4 text-gray-900">
                  <Star className="w-6 h-6" />
                  <span className="font-bold text-lg">La ville qui ne dort jamais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          CASABREAK SERVICES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-[#f8f8f6]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c10000]/10 border border-[#c10000]/30 mb-6">
              <Heart className="w-4 h-4 text-[#c10000]" />
              <span className="text-sm text-gray-700 font-bold">Votre guide à Casablanca</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900">
              CasaBreak vous<br />
              <span className="text-gradient-can">accompagne</span>
            </h2>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: Utensils, title: 'Restaurants', desc: '200+ adresses', href: `/${locale}/manger-sortir/restaurants`, color: '#00a346', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
              { icon: Coffee, title: 'Cafés', desc: 'Les meilleurs spots', href: `/${locale}/manger-sortir/cafes-brunchs`, color: '#0066b2', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80' },
              { icon: Hotel, title: 'Hébergement', desc: 'Hôtels & Riads', href: `/${locale}/planifier/hebergement`, color: '#ffd700', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' },
              { icon: Bus, title: 'Transports', desc: 'Se déplacer', href: `/${locale}/planifier/se-deplacer`, color: '#c10000', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
              { icon: Camera, title: 'Monuments', desc: 'À ne pas manquer', href: `/${locale}/decouvrir/monuments`, color: '#00a346', image: 'https://images.unsplash.com/photo-1696259629194-5411989d6675?w=800&q=80' },
              { icon: Waves, title: 'Plages', desc: 'Corniche & Ain Diab', href: `/${locale}/decouvrir/mer-plages`, color: '#0066b2', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80' },
              { icon: ShoppingBag, title: 'Shopping', desc: 'Malls & souks', href: `/${locale}/activites/shopping`, color: '#ffd700', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' },
              { icon: Music, title: 'Nightlife', desc: 'Bars & clubs', href: `/${locale}/manger-sortir/bars-nightlife`, color: '#c10000', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80' },
            ].map((item, i) => (
              <Link 
                key={i}
                href={item.href}
                className="group relative h-[200px] lg:h-[250px] rounded-3xl overflow-hidden shadow-lg"
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Icon badge */}
                <div 
                  className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        {/* Rich gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c1d1d] via-[#991b1b] to-[#b91c1c]" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="zelij-final" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L40 20L20 40L0 20Z" fill="none" stroke="#ffd700" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="3" fill="#ffd700" fillOpacity="0.3"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#zelij-final)"/>
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
            Rejoignez des millions de supporters pour célébrer le football africain au Maroc. 
            Casablanca vous attend pour vivre une expérience inoubliable.
          </p>
          
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#991b1b] font-black text-lg rounded-2xl hover:bg-white/90 transition-all shadow-xl"
          >
            <Compass className="w-6 h-6" />
            <span>Explorer Casablanca</span>
          </Link>
        </div>
      </section>
      
      <Footer />
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  )
}

