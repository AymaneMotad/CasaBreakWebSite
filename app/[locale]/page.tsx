"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import { MapPin, Utensils, Coffee, Camera, ShoppingBag, Calendar, Star, ArrowRight, CheckCircle2, Compass, Heart, Zap } from "lucide-react"

export default function Home() {
  const t = useTranslations('home')
  
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <HeroSection />
      
      {/* Features Bento Grid Section - DARK */}
      <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00a346]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0066b2]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00a346] animate-pulse" />
              <span className="text-sm text-white/70">Fonctionnalités</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Tout Casablanca<br />
              <span className="text-gradient-can">dans votre poche</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Découvrez les meilleures adresses, événements et expériences de la ville blanche
            </p>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Large Feature Card - Restaurants */}
            <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-8 hover:border-[#00a346]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00a346]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-[#00a346]/20 flex items-center justify-center mb-6">
                  <Utensils className="w-8 h-8 text-[#00a346]" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Restaurants</h3>
                <p className="text-white/50 mb-6 flex-grow">Découvrez les meilleures tables de Casablanca, des restaurants gastronomiques aux adresses locales authentiques.</p>
                <div className="relative h-48 lg:h-64 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80"
                    alt="Restaurants"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#00a346] text-white text-sm font-medium rounded-full">+200 adresses</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cafés Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-6 hover:border-[#0066b2]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066b2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#0066b2]/20 flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-[#0066b2]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cafés & Brunchs</h3>
                <p className="text-white/50 text-sm">Les meilleurs spots pour travailler ou se détendre</p>
                <div className="mt-4 text-3xl font-bold text-[#0066b2]">150+</div>
              </div>
            </div>
            
            {/* Attractions Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-6 hover:border-[#c10000]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c10000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#c10000]/20 flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-[#c10000]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Attractions</h3>
                <p className="text-white/50 text-sm">Monuments et lieux emblématiques à visiter</p>
                <div className="mt-4 text-3xl font-bold text-[#c10000]">80+</div>
              </div>
            </div>
            
            {/* Events Card - Wide */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-6 hover:border-[#00a346]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00a346]/5 via-[#0066b2]/5 to-[#c10000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00a346]/20 to-[#c10000]/20 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">Événements</h3>
                  <p className="text-white/50 text-sm">Ne manquez aucun concert, festival ou soirée à Casablanca</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#00a346] to-[#0066b2] text-white text-sm font-medium rounded-full">
                    Mise à jour hebdo
                  </span>
                </div>
              </div>
            </div>
            
            {/* Shopping Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-6 hover:border-[#00a346]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00a346]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#00a346]/20 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-[#00a346]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Shopping</h3>
                <p className="text-white/50 text-sm">Malls, boutiques et souks</p>
                <div className="mt-4 text-3xl font-bold text-[#00a346]">100+</div>
              </div>
            </div>
            
            {/* Geolocation Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-6 hover:border-[#0066b2]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066b2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#0066b2]/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#0066b2]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Géolocalisation</h3>
                <p className="text-white/50 text-sm">Trouvez les spots près de vous</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0066b2] animate-ping" />
                  <span className="text-sm text-[#0066b2]">En temps réel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Discover Casablanca Section - LIGHT */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00a346]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0066b2]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Images Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=600&q=80"
                      alt="Hassan II Mosque"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                      alt="Restaurant"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
                      alt="Café"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
                      alt="Event"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#00a346] flex items-center justify-center text-white text-xs font-bold">JD</div>
                    <div className="w-8 h-8 rounded-full bg-[#0066b2] flex items-center justify-center text-white text-xs font-bold">MA</div>
                    <div className="w-8 h-8 rounded-full bg-[#c10000] flex items-center justify-center text-white text-xs font-bold">SK</div>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">+50K utilisateurs actifs</span>
                </div>
              </div>
            </div>
            
            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a346]/10 border border-[#00a346]/20 mb-6">
                <Star className="w-4 h-4 text-[#00a346]" />
                <span className="text-sm text-[#00a346] font-medium">Guide #1 à Casablanca</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                L'expérience<br />
                <span className="text-gradient-can">Casablancaise</span><br />
                réinventée
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CasaBreak révolutionne la façon dont vous explorez Casablanca. Interface intuitive, géolocalisation précise, et des milliers de recommandations vérifiées.
              </p>
              
              {/* Features List */}
              <div className="space-y-4 mb-10">
                {[
                  "Recommandations personnalisées basées sur vos goûts",
                  "Avis et photos de la communauté",
                  "Itinéraires optimisés",
                  "Fonctionne même hors-ligne"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00a346]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#00a346]" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="#explore"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#0066b2] text-white font-semibold rounded-2xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#00a346]/25 group"
              >
                <span>Commencer l'exploration</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why CasaBreak Section - DARK */}
      <section id="explore" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#00a346]/10 via-[#0066b2]/10 to-[#c10000]/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Pourquoi <span className="text-gradient-can">CasaBreak</span> ?
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Plus qu'un simple guide, c'est votre compagnon pour vivre Casablanca autrement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-8 hover:border-[#00a346]/30 transition-all duration-500 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#00a346]/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Compass className="w-8 h-8 text-[#00a346]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Découverte Facile</h3>
              <p className="text-white/50">Explorez les meilleurs spots de Casa en quelques clics, filtrés par vos préférences</p>
            </div>
            
            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-8 hover:border-[#0066b2]/30 transition-all duration-500 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#0066b2]/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-[#0066b2]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">100% Local</h3>
              <p className="text-white/50">Des recommandations authentiques par des Casablancais, pour des expériences uniques</p>
            </div>
            
            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-8 hover:border-[#c10000]/30 transition-all duration-500 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#c10000]/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-[#c10000]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Toujours à Jour</h3>
              <p className="text-white/50">Nouvelles adresses, événements et bons plans ajoutés chaque semaine</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section - LIGHT */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#00a346]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0066b2]/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066b2]/10 border border-[#0066b2]/20 mb-6">
            <span className="text-sm text-[#0066b2] font-medium">Newsletter</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Restez informé
          </h2>
          <p className="text-gray-600 mb-8">
            Recevez les dernières actualités et bons plans de Casablanca directement dans votre boîte mail
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
