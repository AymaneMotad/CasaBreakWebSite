"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { useTranslations, useLocale } from 'next-intl'
import Link from "next/link"
import { MapPin, Utensils, Coffee, Camera, ShoppingBag, Calendar, Star, ArrowRight, CheckCircle2, Compass, Heart, Zap, Building, Waves, Route, Music, Trophy, Plane, Home, Users, PartyPopper, Palette, Store } from "lucide-react"

export default function HomePage() {
  const t = useTranslations('home')
  const locale = useLocale()
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
      <Navigation />
      <HeroSection />
      
      {/* DISCOVER CASABLANCA Section - LIGHT GRADIENT */}
      <section id="decouvrir" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-blue-50/40 to-rose-50/50" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00a346]/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200/50 mb-6 shadow-sm">
              <Compass className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm text-gray-700 font-medium">Découvrir Casablanca</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explorez la <span className="text-gradient-can">ville blanche</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des monuments historiques aux quartiers branchés, découvrez tous les trésors de Casablanca
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href={`/${locale}/decouvrir/monuments`} className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 p-6 hover:border-[#00a346]/50 hover:shadow-lg transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-[#00a346]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building className="w-6 h-6 text-[#00a346]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Monuments</h3>
              <p className="text-gray-600 text-sm mb-4">Mosquée Hassan II, Art Déco, lieux emblématiques</p>
              <span className="text-[#00a346] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explorer <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link href={`/${locale}/decouvrir/quartiers`} className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 p-6 hover:border-[#0066b2]/50 hover:shadow-lg transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-[#0066b2]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-[#0066b2]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quartiers</h3>
              <p className="text-gray-600 text-sm mb-4">Habous, Maarif, Gauthier, Anfa et plus</p>
              <span className="text-[#0066b2] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explorer <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link href={`/${locale}/decouvrir/mer-plages`} className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 p-6 hover:border-[#c10000]/50 hover:shadow-lg transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-[#c10000]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Waves className="w-6 h-6 text-[#c10000]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mer & Plages</h3>
              <p className="text-gray-600 text-sm mb-4">Corniche, Ain Diab, plages et spots surf</p>
              <span className="text-[#c10000] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explorer <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link href={`/${locale}/decouvrir/itineraires`} className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 p-6 hover:border-[#00a346]/50 hover:shadow-lg transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-[#00a346]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Route className="w-6 h-6 text-[#00a346]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Itinéraires</h3>
              <p className="text-gray-600 text-sm mb-4">Casa en 1, 2 ou 3 jours - parcours optimisés</p>
              <span className="text-[#00a346] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explorer <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* ACTIVITIES Section - LIGHT */}
      <section id="activites" className="py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066b2]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066b2]/10 border border-[#0066b2]/20 mb-6">
              <Star className="w-4 h-4 text-[#0066b2]" />
              <span className="text-sm text-[#0066b2] font-medium">Activités</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Vivez des <span className="text-gradient-can">expériences uniques</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tours guidés, activités en famille, sorties en mer... il y en a pour tous les goûts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link href={`/${locale}/activites/incontournables`} className="group p-6 rounded-2xl bg-gray-50 hover:bg-[#00a346]/5 border border-gray-100 hover:border-[#00a346]/30 transition-all duration-300">
              <Camera className="w-8 h-8 text-[#00a346] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Incontournables</h3>
              <p className="text-sm text-gray-500">Les must-do à Casa</p>
            </Link>
            
            <Link href={`/${locale}/activites/plein-air-mer`} className="group p-6 rounded-2xl bg-gray-50 hover:bg-[#0066b2]/5 border border-gray-100 hover:border-[#0066b2]/30 transition-all duration-300">
              <Waves className="w-8 h-8 text-[#0066b2] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Plein air & Mer</h3>
              <p className="text-sm text-gray-500">Surf, jet-ski, balades</p>
            </Link>
            
            <Link href={`/${locale}/activites/tours-experiences`} className="group p-6 rounded-2xl bg-gray-50 hover:bg-[#c10000]/5 border border-gray-100 hover:border-[#c10000]/30 transition-all duration-300">
              <Compass className="w-8 h-8 text-[#c10000] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Tours & Expériences</h3>
              <p className="text-sm text-gray-500">Visites guidées exclusives</p>
            </Link>
            
            <Link href={`/${locale}/activites/famille-enfants`} className="group p-6 rounded-2xl bg-gray-50 hover:bg-[#00a346]/5 border border-gray-100 hover:border-[#00a346]/30 transition-all duration-300">
              <Users className="w-8 h-8 text-[#00a346] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">En famille</h3>
              <p className="text-sm text-gray-500">Activités pour enfants</p>
            </Link>
            
            <Link href={`/${locale}/activites/shopping`} className="group p-6 rounded-2xl bg-gray-50 hover:bg-[#0066b2]/5 border border-gray-100 hover:border-[#0066b2]/30 transition-all duration-300">
              <ShoppingBag className="w-8 h-8 text-[#0066b2] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Shopping</h3>
              <p className="text-sm text-gray-500">Malls & boutiques</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FOOD & FUN Section - LIGHT GRADIENT */}
      <section id="manger-sortir" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 via-amber-50/40 to-emerald-50/50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#c10000]/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-rose-200/50 mb-6 shadow-sm">
                <Utensils className="w-4 h-4 text-[#c10000]" />
                <span className="text-sm text-gray-700 font-medium">Gastronomie & Sorties</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Savourez <span className="text-gradient-can">Casablanca</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Des restaurants gastronomiques aux cafés branchés, des rooftops aux souks authentiques - découvrez la scène culinaire et festive de Casa
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Link href={`/${locale}/manger-sortir/restaurants`} className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#00a346]/50 hover:shadow-md transition-all group">
                  <Utensils className="w-6 h-6 text-[#00a346]" />
                  <span className="text-gray-900 font-medium">Restaurants</span>
                </Link>
                <Link href={`/${locale}/manger-sortir/cafes-brunchs`} className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#0066b2]/50 hover:shadow-md transition-all group">
                  <Coffee className="w-6 h-6 text-[#0066b2]" />
                  <span className="text-gray-900 font-medium">Cafés & Brunchs</span>
                </Link>
                <Link href={`/${locale}/manger-sortir/bars-nightlife`} className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#c10000]/50 hover:shadow-md transition-all group">
                  <PartyPopper className="w-6 h-6 text-[#c10000]" />
                  <span className="text-gray-900 font-medium">Bars & Nightlife</span>
                </Link>
                <Link href={`/${locale}/manger-sortir/souks-artisanat`} className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#00a346]/50 hover:shadow-md transition-all group">
                  <Store className="w-6 h-6 text-[#00a346]" />
                  <span className="text-gray-900 font-medium">Souks & Artisanat</span>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                  <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80" alt="Restaurant" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80" alt="Bar" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" alt="Café" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" alt="Nightlife" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* EVENTS Section - LIGHT */}
      <section id="evenements" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00a346]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c10000]/10 border border-[#c10000]/20 mb-6">
              <Calendar className="w-4 h-4 text-[#c10000]" />
              <span className="text-sm text-[#c10000] font-medium">Événements</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ne manquez <span className="text-gradient-can">rien</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Concerts, festivals, expositions, événements sportifs... restez au courant de tout ce qui se passe à Casa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link href={`/${locale}/evenements/concerts-spectacles`} className="group p-6 rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition-all duration-300">
              <Music className="w-8 h-8 text-[#c10000] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Concerts & Spectacles</h3>
              <p className="text-sm text-gray-500">Musique live, théâtre</p>
            </Link>
            
            <Link href={`/${locale}/evenements/expositions-galeries`} className="group p-6 rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition-all duration-300">
              <Palette className="w-8 h-8 text-[#0066b2] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Expositions & Galeries</h3>
              <p className="text-sm text-gray-500">Art contemporain</p>
            </Link>
            
            <Link href={`/${locale}/evenements/festivals`} className="group p-6 rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition-all duration-300">
              <PartyPopper className="w-8 h-8 text-[#00a346] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Festivals</h3>
              <p className="text-sm text-gray-500">Événements annuels</p>
            </Link>
            
            <Link href={`/${locale}/evenements/evenements-sportifs`} className="group p-6 rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition-all duration-300">
              <Trophy className="w-8 h-8 text-[#c10000] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Sports</h3>
              <p className="text-sm text-gray-500">Matchs, compétitions</p>
            </Link>
            
            <Link href={`/${locale}/evenements/foires-salons`} className="group p-6 rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition-all duration-300">
              <Building className="w-8 h-8 text-[#0066b2] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Foires & Salons</h3>
              <p className="text-sm text-gray-500">Professionnels, B2B</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/* PLAN YOUR STAY Section - LIGHT GRADIENT */}
      <section id="planifier" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-emerald-50/50 to-slate-50/70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00a346]/15 via-[#0066b2]/15 to-[#c10000]/15 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 mb-6 shadow-sm">
              <Plane className="w-4 h-4 text-[#0066b2]" />
              <span className="text-sm text-gray-700 font-medium">Planifier votre séjour</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Préparez votre <span className="text-gradient-can">voyage</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hébergement, transports, conseils pratiques... tout ce qu'il faut savoir avant de venir
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link href={`/${locale}/planifier/hebergement`} className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#00a346]/50 hover:shadow-md transition-all duration-300">
              <Home className="w-8 h-8 text-[#00a346] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Hébergement</h3>
              <p className="text-sm text-gray-600">Hôtels, riads, Airbnb</p>
            </Link>
            
            <Link href={`/${locale}/planifier/ou-loger`} className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#0066b2]/50 hover:shadow-md transition-all duration-300">
              <MapPin className="w-8 h-8 text-[#0066b2] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Où loger ?</h3>
              <p className="text-sm text-gray-600">Guide des quartiers</p>
            </Link>
            
            <Link href={`/${locale}/planifier/se-deplacer`} className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#c10000]/50 hover:shadow-md transition-all duration-300">
              <Route className="w-8 h-8 text-[#c10000] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Se déplacer</h3>
              <p className="text-sm text-gray-600">Tram, taxi, VTC</p>
            </Link>
            
            <Link href={`/${locale}/planifier/aeroport-centre-ville`} className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#00a346]/50 hover:shadow-md transition-all duration-300">
              <Plane className="w-8 h-8 text-[#00a346] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Aéroport → Ville</h3>
              <p className="text-sm text-gray-600">Transferts, navettes</p>
            </Link>
            
            <Link href={`/${locale}/planifier/infos-pratiques`} className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#0066b2]/50 hover:shadow-md transition-all duration-300">
              <CheckCircle2 className="w-8 h-8 text-[#0066b2] mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Infos pratiques</h3>
              <p className="text-sm text-gray-600">Conseils & astuces</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section - LIGHT */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#00a346]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0066b2]/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Restez informé
          </h2>
          <p className="text-gray-600 mb-8">
            Recevez les dernières actualités et bons plans de Casablanca
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-grow px-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00a346] focus:ring-2 focus:ring-[#00a346]/20 transition-all shadow-sm"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#0066b2] text-white font-semibold rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-[#00a346]/25"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
