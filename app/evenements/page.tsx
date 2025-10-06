import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Music, Palette, Camera } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function EvenementsPage() {
  const upcomingEvents = [
    {
      title: "Concert de Musique Classique",
      date: "15 Décembre 2025",
      time: "20h00",
      category: "Concert",
      image: "/classical-music-concert-in-cathedral-with-orchestr.jpg",
      description: "Soirée exceptionnelle avec l'Orchestre Philharmonique de Casablanca",
      price: "150 MAD",
    },
    {
      title: "Exposition d'Art Contemporain",
      date: "20-30 Décembre 2025",
      time: "10h-18h",
      category: "Exposition",
      image: "/contemporary-art-exhibition-in-cathedral-gallery.jpg",
      description: "Dialogue entre patrimoine et création contemporaine",
      price: "Gratuit",
    },
    {
      title: "Atelier Photographie d'Architecture",
      date: "5 Janvier 2026",
      time: "14h-17h",
      category: "Atelier",
      image: "/photography-workshop-cathedral-architecture.jpg",
      description: "Apprenez à capturer la beauté architecturale avec un photographe professionnel",
      price: "200 MAD",
    },
    {
      title: "Festival de Musique Sacrée",
      date: "10-12 Janvier 2026",
      time: "19h00",
      category: "Festival",
      image: "/placeholder.svg?height=400&width=600",
      description: "Trois soirées de musique sacrée du monde entier",
      price: "100-250 MAD",
    },
    {
      title: "Visite Nocturne aux Chandelles",
      date: "18 Janvier 2026",
      time: "21h00",
      category: "Visite",
      image: "/placeholder.svg?height=400&width=600",
      description: "Découvrez la cathédrale dans une ambiance magique à la lueur des bougies",
      price: "80 MAD",
    },
    {
      title: "Concert de Jazz",
      date: "25 Janvier 2026",
      time: "20h30",
      category: "Concert",
      image: "/placeholder.svg?height=400&width=600",
      description: "Fusion unique entre jazz moderne et acoustique cathédrale",
      price: "180 MAD",
    },
  ]

  const pastEvents = [
    {
      title: "Nuit des Cathédrales 2025",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Concert de Noël 2024",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Exposition Vitraux Contemporains",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Festival Musique du Monde",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Atelier Restauration Patrimoine",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Projection Cinéma en Plein Air",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: "Événements", href: "/evenements" }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/classical-music-concert-cathedral-performance.jpg" 
          alt="Événements au Sacré-Cœur" 
          fill 
          className="object-cover animate-subtle-float" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        
        {/* Moroccan Artistic Elements */}
        <div className="absolute inset-0 z-5">
          {/* Top decorative border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/50 to-transparent"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-terracotta/40 to-transparent"></div>
          
          {/* Corner geometric patterns */}
          <div className="absolute top-8 left-8 w-16 h-16 opacity-25">
            <svg viewBox="0 0 64 64" className="w-full h-full text-vibrant-pink/50">
              <path d="M8 8 L56 8 L56 56 L8 56 Z M16 16 L48 16 L48 48 L16 48 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M24 24 L40 24 L40 40 L24 40 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-8 right-8 w-16 h-16 opacity-25">
            <svg viewBox="0 0 64 64" className="w-full h-full text-warm-terracotta/50">
              <path d="M8 8 L56 8 L56 56 L8 56 Z M16 16 L48 16 L48 48 L16 48 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M24 24 L40 24 L40 40 L24 40 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          {/* Side decorative lines */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/30 to-transparent"></div>
          <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/30 to-transparent"></div>
          
          {/* Bottom decorative elements */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 opacity-20">
            <svg viewBox="0 0 128 32" className="w-full h-full text-vibrant-pink/40">
              <path d="M8 16 Q32 4, 56 16 Q80 28, 104 16 Q112 12, 120 16" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="32" cy="16" r="2" fill="currentColor"/>
              <circle cx="64" cy="16" r="2" fill="currentColor"/>
              <circle cx="96" cy="16" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="animate-gentle-fade-in">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-vibrant-pink/20 to-warm-terracotta/20 backdrop-blur-sm border border-off-white/20 rounded-full mb-8">
              <span className="text-off-white/90 text-sm font-sans tracking-wider uppercase">
                Programmation Culturelle
              </span>
            </div>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-off-white mb-6 animate-gentle-fade-in stagger-1 text-enhanced">
            Événements
          </h1>
          <p className="font-sans text-lg md:text-xl text-off-white/90 max-w-3xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2 text-readable">
            Concerts, expositions, ateliers et festivals au cœur du patrimoine
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-gradient-to-b from-off-white to-charcoal/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 animate-gentle-fade-in">
              Événements à venir
            </h2>
            <p className="font-sans text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-gentle-fade-in stagger-1">
              Découvrez notre programmation culturelle et réservez votre place pour des expériences uniques
            </p>
            <div className="mt-8 animate-gentle-fade-in stagger-2">
              <Link
                href="https://tickets.sacrecoeur-casa.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg"
              >
                Réserver maintenant
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className={`group bg-off-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-gentle-fade-in stagger-${index + 1} hover-lift-subtle`}
              >
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-xs font-sans tracking-wider uppercase rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-charcoal mb-4 group-hover:text-vibrant-pink transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-3 mb-6 text-sm font-sans text-charcoal/60">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-vibrant-pink" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-warm-terracotta" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-charcoal/40" />
                      <span className="font-medium">Sacré-Cœur Casablanca</span>
                    </div>
                  </div>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-6 text-readable">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-charcoal font-semibold">{event.price}</span>
                    <Link
                      href="https://tickets.sacrecoeur-casa.ma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-xs font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg"
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="bg-charcoal text-off-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center animate-fade-in-up">Types d'événements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Music,
                title: "Concerts",
                description: "Classique, jazz, musique sacrée et contemporaine",
              },
              {
                icon: Palette,
                title: "Expositions",
                description: "Art contemporain, photographie et patrimoine",
              },
              {
                icon: Camera,
                title: "Ateliers",
                description: "Photographie, restauration et découverte",
              },
              {
                icon: Calendar,
                title: "Festivals",
                description: "Événements culturels et célébrations",
              },
            ].map((category, index) => (
              <div
                key={category.title}
                className={`text-center p-8 bg-off-white/5 hover:bg-off-white/10 transition-colors animate-fade-in-up stagger-${index + 1}`}
              >
                <category.icon className="h-12 w-12 text-vibrant-pink mx-auto mb-4" />
                <h3 className="font-serif text-xl mb-3">{category.title}</h3>
                <p className="font-sans text-sm text-off-white/70">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 text-center animate-fade-in-up">
          Événements passés
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <div
              key={event.title}
              className={`group relative h-[300px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-xl text-off-white">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 animate-fade-in-up">Restez informé</h2>
          <p className="font-sans text-base mb-10 animate-fade-in-up stagger-1">
            Inscrivez-vous à notre newsletter pour recevoir le programme des événements
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up stagger-2">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-4 text-charcoal font-sans text-sm focus:outline-none focus:ring-2 focus:ring-off-white"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-charcoal text-off-white text-xs font-sans tracking-wider uppercase hover:bg-charcoal/90 transition-colors"
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
