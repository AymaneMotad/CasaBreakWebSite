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
      <div className="pt-24 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: "Événements", href: "/evenements" }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/placeholder.svg?height=900&width=1600" alt="Événements" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-6xl md:text-8xl text-off-white mb-6 animate-fade-in-up text-balance">
            Événements
          </h1>
          <p className="font-sans text-base md:text-lg text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1 max-w-2xl mx-auto">
            Concerts, expositions, ateliers et festivals au cœur du patrimoine
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="flex items-center justify-between mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal animate-fade-in-up">Événements à venir</h2>
          <Link
            href="/ticket"
            className="hidden md:inline-block px-8 py-3 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-xs font-sans tracking-wider uppercase hover:shadow-xl transition-all animate-fade-in-up stagger-1"
          >
            Réserver
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.title}
              className={`group bg-off-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-vibrant-pink text-off-white text-xs font-sans tracking-wider uppercase">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-charcoal mb-3 group-hover:text-vibrant-pink transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4 text-sm font-sans text-charcoal/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-vibrant-pink" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-vibrant-pink" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-vibrant-pink" />
                    <span>Sacré-Cœur Casablanca</span>
                  </div>
                </div>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg text-charcoal">{event.price}</span>
                  <Link
                    href="/ticket"
                    className="px-6 py-2 bg-charcoal text-off-white text-xs font-sans tracking-wider uppercase hover:bg-charcoal/90 transition-colors"
                  >
                    Billets
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
