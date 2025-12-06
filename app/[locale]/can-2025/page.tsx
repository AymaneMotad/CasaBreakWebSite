"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLocale } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { 
  MapPin, Calendar, Users, Trophy, Plane, Star, ArrowRight, 
  ChevronDown, Sparkles, Zap, Globe, Clock, Building, Heart,
  Utensils, Coffee, Hotel, Bus, Ticket
} from "lucide-react"

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  
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
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="flex gap-3 sm:gap-6">
      {[
        { value: timeLeft.days, label: 'Jours' },
        { value: timeLeft.hours, label: 'Heures' },
        { value: timeLeft.minutes, label: 'Min' },
        { value: timeLeft.seconds, label: 'Sec' }
      ].map((item, i) => (
        <div key={i} className="relative group">
          <div className="w-16 sm:w-24 h-20 sm:h-28 bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg flex flex-col items-center justify-center overflow-hidden">
            {/* Animated glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00a346]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-3xl sm:text-5xl font-black text-gray-900 tabular-nums">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-widest">{item.label}</span>
          </div>
          {/* Separator */}
          {i < 3 && (
            <div className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400 font-bold hidden sm:block">:</div>
          )}
        </div>
      ))}
    </div>
  )
}

// Floating Particles Component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ['#00a346', '#0066b2', '#c10000', '#ffd700'][Math.floor(Math.random() * 4)],
            opacity: 0.3 + Math.random() * 0.4,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  )
}

// Stadium Card Component
function StadiumCard({ city, stadium, image, capacity, matches, delay }: {
  city: string
  stadium: string
  image: string
  capacity: string
  matches: string
  delay: number
}) {
  return (
    <div 
      className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-md hover:border-[#00a346]/50 hover:shadow-xl transition-all duration-500 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={image} 
          alt={stadium}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#00a346]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* City badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full border border-white/50 shadow-sm">
          <span className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {city}
          </span>
        </div>
      </div>
      
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00a346] transition-colors">{stadium}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {capacity}
          </span>
          <span className="flex items-center gap-1">
            <Trophy className="w-4 h-4" />
            {matches}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Can2025Page() {
  const locale = useLocale()
  const [activeTab, setActiveTab] = useState('discover')
  
  const hostCities = [
    { city: 'Casablanca', stadium: 'Stade Mohammed V', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80', capacity: '67 000', matches: 'Demi-finale' },
    { city: 'Rabat', stadium: 'Stade Moulay Abdellah', image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80', capacity: '52 000', matches: 'Finale' },
    { city: 'Marrakech', stadium: 'Grand Stade', image: 'https://images.unsplash.com/photo-1597212618440-806f0b1a5ba5?w=800&q=80', capacity: '45 000', matches: 'Quarts' },
    { city: 'Tanger', stadium: 'Stade Ibn Batouta', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80', capacity: '45 000', matches: 'Poules' },
    { city: 'Fès', stadium: 'Stade de Fès', image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80', capacity: '35 000', matches: 'Poules' },
    { city: 'Agadir', stadium: 'Stade Adrar', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80', capacity: '45 000', matches: 'Poules' },
  ]
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/40 to-rose-50/30 overflow-hidden">
      <Navigation />
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-blue-50/40 to-rose-100/50" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#00a346]/30 rounded-full blur-[150px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#c10000]/30 rounded-full blur-[150px] animate-pulse-slow animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffd700]/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-4000" />
          
          {/* Floating particles */}
          <FloatingParticles />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.3)_70%)]" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-32">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-emerald-200/50 shadow-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a346] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a346]"></span>
            </span>
            <span className="text-sm text-gray-700 font-medium">21 Décembre 2025 - 18 Janvier 2026</span>
          </div>
          
          {/* Main Title with Gradient */}
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black mb-6 leading-none animate-fade-in-up animation-delay-200">
            <span className="block text-gray-900 mb-2">COUPE D'AFRIQUE</span>
            <span className="block bg-gradient-to-r from-[#00a346] via-[#ffd700] to-[#c10000] bg-clip-text text-transparent animate-gradient-x">
              MAROC 2025
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            24 nations. 6 villes. 1 champion.<br/>
            <span className="text-gray-900 font-semibold">Le football africain arrive au Maroc.</span>
          </p>
          
          {/* Countdown */}
          <div className="mb-12 animate-fade-in-up animation-delay-600">
            <p className="text-sm text-gray-600 uppercase tracking-widest mb-4 font-medium">Coup d'envoi dans</p>
            <CountdownTimer />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <a
              href="https://casawe.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#00a346]/80 rounded-2xl text-white font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#00a346]/30"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Ticket className="w-5 h-5" />
                Réserver mes billets
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] to-[#00a346] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <Link
              href="#casablanca"
              className="px-8 py-4 bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl text-gray-900 font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MapPin className="w-5 h-5" />
              Découvrir Casablanca
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-500" />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-50/60 to-transparent" />
      </section>
      
      {/* ==================== TOURNAMENT INFO ==================== */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stats Cards */}
            {[
              { icon: Users, value: '24', label: 'Équipes qualifiées', color: '#00a346' },
              { icon: MapPin, value: '6', label: 'Villes hôtes', color: '#ffd700' },
              { icon: Trophy, value: '52', label: 'Matchs à jouer', color: '#c10000' },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/70 shadow-sm hover:shadow-md transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: `linear-gradient(135deg, ${stat.color}15, transparent)` }} />
                <stat.icon className="w-10 h-10 mb-4" style={{ color: stat.color }} />
                <div className="text-5xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ==================== HOST CITIES ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#00a346]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#c10000]/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200/50 mb-6 shadow-sm">
              <Globe className="w-4 h-4 text-[#ffd700]" />
              <span className="text-sm text-gray-700 font-medium">Villes Hôtes</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4">
              6 villes. 6 <span className="text-gradient-can">ambiances.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Du nord au sud, le Maroc vous accueille dans ses plus beaux stades
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostCities.map((city, i) => (
              <StadiumCard key={i} {...city} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
      
      {/* ==================== CASABLANCA SECTION ==================== */}
      <section id="casablanca" className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 via-blue-50/30 to-rose-100/40" />
          <div className="absolute inset-0 bg-white/60" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100/60 to-rose-100/60 border border-gray-200/50 mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#ffd700]" />
                <span className="text-sm text-gray-700 font-medium">Ville Hôte Principale</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Vivez la CAN à<br/>
                <span className="text-gradient-can">Casablanca</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                La plus grande ville du Maroc vous ouvre ses portes. Stade mythique, 
                atmosphère électrique, gastronomie exceptionnelle et vie nocturne 
                vibrante – Casablanca est prête à vous accueillir.
              </p>
              
              {/* Stadium Info Card */}
              <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 mb-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#00a346]/10 flex items-center justify-center">
                    <Building className="w-7 h-7 text-[#00a346]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Stade Mohammed V</h3>
                    <p className="text-gray-600">67 000 places • Demi-finale</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Temple du football marocain, le stade Mohammed V a vu les plus grandes stars africaines fouler sa pelouse. 
                  Préparez-vous à vivre des moments historiques.
                </p>
              </div>
              
              {/* CTA */}
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#030303] font-bold rounded-xl hover:bg-white/90 transition-all group"
              >
                <span>Explorer Casablanca avec CasaBreak</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Right - Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1696259629194-5411989d6675?w=800&q=80"
                  alt="Hassan II Mosque Casablanca"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-bold">Mosquée Hassan II</p>
                      <p className="text-gray-600 text-sm">À 15 min du stade</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#ffd700]">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold text-gray-900">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00a346]/20 to-[#c10000]/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      
      {/* ==================== CASABREAK INTEGRATION ==================== */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-emerald-50/50 to-slate-50/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-rose-200/50 mb-6 shadow-sm">
              <Heart className="w-4 h-4 text-[#c10000]" />
              <span className="text-sm text-gray-700 font-medium">Votre guide à Casablanca</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4">
              CasaBreak vous <span className="text-gradient-can">accompagne</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Restaurants, cafés, transports, hébergements – tout ce qu'il vous faut pour un séjour parfait
            </p>
          </div>
          
          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Utensils, title: 'Restaurants', desc: '200+ adresses vérifiées', href: `/${locale}/manger-sortir/restaurants`, color: '#00a346' },
              { icon: Coffee, title: 'Cafés & Brunchs', desc: 'Les meilleurs spots', href: `/${locale}/manger-sortir/cafes-brunchs`, color: '#0066b2' },
              { icon: Hotel, title: 'Hébergement', desc: 'Hôtels & Riads', href: `/${locale}/planifier/hebergement`, color: '#ffd700' },
              { icon: Bus, title: 'Transports', desc: 'Tram, Taxi, VTC', href: `/${locale}/planifier/se-deplacer`, color: '#c10000' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/70 hover:shadow-md transition-all duration-300"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#00a346] transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
          
          {/* Big CTA Card */}
          <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-emerald-100/60 via-blue-100/40 to-rose-100/60 border border-gray-200/50 relative overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Prêt pour la CAN 2025 ?
                </h3>
                <p className="text-gray-700 max-w-lg">
                  Ajoutez CasaBreak à votre écran d'accueil et accédez à tout ce dont vous avez besoin, même hors ligne.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${locale}`}
                  className="px-8 py-4 bg-white text-[#030303] font-bold rounded-2xl hover:bg-white/90 transition-all flex items-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Explorer CasaBreak
                </Link>
                <a
                  href="https://casawe.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#c10000] text-white font-bold rounded-2xl hover:opacity-90 transition-all flex items-center gap-2"
                >
                  <Ticket className="w-5 h-5" />
                  Acheter mes billets
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ==================== TEAMS SHOWCASE ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200/50 mb-6 shadow-sm">
              <Trophy className="w-4 h-4 text-[#ffd700]" />
              <span className="text-sm text-gray-700 font-medium">Les favoris</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              24 équipes. 1 <span className="text-gradient-can">couronne.</span>
            </h2>
          </div>
          
          {/* Scrolling Teams Animation */}
          <div className="relative overflow-hidden py-8">
            <div className="flex gap-8 animate-scroll">
              {['🇲🇦 Maroc', '🇸🇳 Sénégal', '🇳🇬 Nigeria', '🇪🇬 Égypte', '🇩🇿 Algérie', '🇨🇮 Côte d\'Ivoire', '🇨🇲 Cameroun', '🇹🇳 Tunisie', '🇬🇭 Ghana', '🇲🇱 Mali', '🇿🇦 Afrique du Sud', '🇨🇩 RD Congo'].map((team, i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-[#ffd700]/50 shadow-sm transition-all cursor-default"
                >
                  <span className="text-xl font-bold text-gray-900 whitespace-nowrap">{team}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {['🇲🇦 Maroc', '🇸🇳 Sénégal', '🇳🇬 Nigeria', '🇪🇬 Égypte', '🇩🇿 Algérie', '🇨🇮 Côte d\'Ivoire', '🇨🇲 Cameroun', '🇹🇳 Tunisie', '🇬🇭 Ghana', '🇲🇱 Mali', '🇿🇦 Afrique du Sud', '🇨🇩 RD Congo'].map((team, i) => (
                <div 
                  key={`dup-${i}`}
                  className="flex-shrink-0 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-[#ffd700]/50 shadow-sm transition-all cursor-default"
                >
                  <span className="text-xl font-bold text-gray-900 whitespace-nowrap">{team}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ==================== FINAL CTA ==================== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-amber-50/40 to-rose-100/50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#00a346]/25 via-[#ffd700]/15 to-[#c10000]/25 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Le moment est <span className="text-gradient-can">historique.</span>
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Rejoignez des millions de supporters pour célébrer le football africain au Maroc.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://casawe.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gradient-to-r from-[#00a346] via-[#ffd700] to-[#c10000] text-white font-bold text-lg rounded-2xl hover:opacity-90 transition-all animate-gradient-x"
            >
              Réserver mes billets maintenant
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
