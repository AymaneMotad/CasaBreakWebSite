"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SpinningCathedral } from "@/components/spinning-cathedral"
import { MagazineSection } from "@/components/magazine-section"
import { BookingSection } from "@/components/booking-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import { MapPin, Utensils, Coffee, Camera, ShoppingBag, Calendar, Star } from "lucide-react"

export default function Home() {
  const t = useTranslations('home')
  
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SpinningCathedral />
      <MagazineSection />
      
      {/* Features Section - Mobile App Features */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-off-white to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#00a346]/50 to-transparent"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#00a346]/10 to-[#c10000]/10 border-2 border-[#00a346]/20 rounded-full mb-8">
              <span className="text-charcoal text-sm font-sans tracking-widest uppercase font-bold">
                Fonctionnalités
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 tracking-tight">
              Découvrez Casablanca avec CasaBreak
            </h2>
            <p className="font-sans text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Toutes les fonctionnalités dont vous avez besoin pour explorer la ville blanche
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Géolocalisation",
                description: "Trouvez instantanément les meilleurs endroits près de vous",
                color: "from-[#00a346] to-[#00a346]/80"
              },
              {
                icon: Utensils,
                title: "Restaurants",
                description: "Découvrez les meilleurs restaurants de Casablanca",
                color: "from-[#c10000] to-[#c10000]/80"
              },
              {
                icon: Coffee,
                title: "Cafés & Brunchs",
                description: "Trouvez le café parfait pour travailler ou vous détendre",
                color: "from-[#00a346] to-[#00a346]/80"
              },
              {
                icon: Camera,
                title: "Attractions",
                description: "Explorez les monuments et lieux emblématiques",
                color: "from-[#c10000] to-[#c10000]/80"
              },
              {
                icon: ShoppingBag,
                title: "Shopping",
                description: "Centres commerciaux et boutiques à découvrir",
                color: "from-[#00a346] to-[#00a346]/80"
              },
              {
                icon: Calendar,
                title: "Événements",
                description: "Ne manquez aucun événement culturel ou festif",
                color: "from-[#c10000] to-[#c10000]/80"
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#00a346]/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-4">{feature.title}</h3>
                <p className="font-sans text-base text-charcoal/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* App Screenshots Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#00a346]/5 via-white to-[#c10000]/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#00a346]/10 to-[#c10000]/10 border-2 border-[#00a346]/20 rounded-full mb-8">
                <span className="text-charcoal text-sm font-sans tracking-widest uppercase font-bold">
                  Application Mobile
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
                Téléchargez CasaBreak maintenant
              </h2>
              <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-8">
                Disponible sur iOS et Android. Explorez Casablanca comme jamais auparavant avec une interface intuitive et des fonctionnalités puissantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#c10000] text-white font-sans text-sm tracking-wide uppercase rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold"
                >
                  Télécharger sur App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#c10000] text-white font-sans text-sm tracking-wide uppercase rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold"
                >
                  Télécharger sur Google Play
                </a>
              </div>
            </div>
            <div className="animate-fade-in-up delay-100 flex justify-center">
              <div className="relative">
                <img
                  src="/casawee.png"
                  alt="CasaBreak Mobile App"
                  className="w-[300px] h-[600px] lg:w-[350px] lg:h-[700px] object-contain rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <BookingSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
