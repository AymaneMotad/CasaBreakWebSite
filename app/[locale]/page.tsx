"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CasablancaGallery } from "@/components/casablanca-gallery"
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
      <CasablancaGallery />
      <SpinningCathedral />
      <MagazineSection />
      
      {/* Features Section - Mobile App Features */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 tracking-tight">
              Découvrez Casablanca avec CasaBreak
            </h2>
            <p className="font-sans text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Toutes les fonctionnalités dont vous avez besoin pour explorer la ville blanche
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Géolocalisation",
                description: "Trouvez instantanément les meilleurs endroits près de vous",
                color: "from-[#00a346] to-[#00a346]/80",
                image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Casablanca_skyline.jpg"
              },
              {
                icon: Utensils,
                title: "Restaurants",
                description: "Découvrez les meilleurs restaurants de Casablanca",
                color: "from-[#c10000] to-[#c10000]/80",
                image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Rick%27s_Cafe_Casablanca.jpg"
              },
              {
                icon: Coffee,
                title: "Cafés & Brunchs",
                description: "Trouvez le café parfait pour travailler ou vous détendre",
                color: "from-[#00a346] to-[#00a346]/80",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Ain_Diab_Corniche_Casablanca.jpg"
              },
              {
                icon: Camera,
                title: "Attractions",
                description: "Explorez les monuments et lieux emblématiques",
                color: "from-[#c10000] to-[#c10000]/80",
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Casablanca_Hassan_II_Mosque.jpg"
              },
              {
                icon: ShoppingBag,
                title: "Shopping",
                description: "Centres commerciaux et boutiques à découvrir",
                color: "from-[#00a346] to-[#00a346]/80",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Casablanca_Twin_Center.jpg"
              },
              {
                icon: Calendar,
                title: "Événements",
                description: "Ne manquez aucun événement culturel ou festif",
                color: "from-[#c10000] to-[#c10000]/80",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Mohammed_V_Square_Casablanca.jpg"
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                    onError={(e) => {
                      // Fallback to a smaller size if the main image fails
                      const originalSrc = e.currentTarget.src
                      if (!originalSrc.includes('thumb')) {
                        e.currentTarget.src = originalSrc.replace('/commons/', '/commons/thumb/').replace('.jpg', '/800px-' + originalSrc.split('/').pop())
                      }
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-charcoal mb-2">{feature.title}</h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* App Screenshots Section */}
      <section id="download" className="py-24 lg:py-32 bg-gradient-to-b from-white to-off-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
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
