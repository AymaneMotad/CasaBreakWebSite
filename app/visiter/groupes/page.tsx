import Image from "next/image"
import Link from "next/link"
import { Calendar, Phone } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function GroupesPage() {
  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb items={[
            { label: "Visiter", href: "/visiter/individuels" },
            { label: "Groupes", href: "/visiter/groupes" }
          ]} />
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/large-group-tour-inside-cathedral-with-guide.jpg" alt="Visite de groupe" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-off-white mb-4 animate-fade-in-up text-balance">
            Visites de Groupe
          </h1>
          <p className="font-sans text-sm md:text-base text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1">
            Découvrez ensemble le patrimoine
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
              Découvrez l'Ex Église Sacré-Cœur en groupe
            </h2>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-6">
              Vous souhaitez découvrir l'Ex Église Sacré-Cœur entre amis ou en petit groupe (plus de 10 personnes) ? 
              Profitez d'une visite libre ou accompagnée, selon vos envies, pour explorer l'histoire, l'architecture et la symbolique de ce monument emblématique de Casablanca.
            </p>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed">
              Choisissez le parcours qui vous correspond le mieux, prenez le temps d'admirer les vitraux, les volumes et la lumière, et laissez-vous porter par la magie du lieu.
            </p>
          </div>
          <div className="relative h-[500px] animate-fade-in-up stagger-1">
            <Image src="/tour-guide-explaining-cathedral-architecture-to-gr.jpg" alt="Guide avec groupe" fill className="object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Practical Information - Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-off-white to-charcoal/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/40 to-transparent"></div>
          <div className="absolute top-4 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-warm-terracotta/30 to-transparent"></div>
          
          {/* Corner geometric patterns */}
          <div className="absolute top-16 left-16 w-14 h-14 opacity-20">
            <svg viewBox="0 0 56 56" className="w-full h-full text-vibrant-pink/40">
              <path d="M7 7 L49 7 L49 49 L7 49 Z M14 14 L42 14 L42 42 L14 42 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M21 21 L35 21 L35 35 L21 35 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-16 right-16 w-14 h-14 opacity-20">
            <svg viewBox="0 0 56 56" className="w-full h-full text-warm-terracotta/40">
              <path d="M7 7 L49 7 L49 49 L7 49 Z M14 14 L42 14 L42 42 L14 42 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M21 21 L35 21 L35 35 L21 35 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border border-vibrant-pink/20 rounded-full mb-8 animate-gentle-fade-in">
              <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">
                Informations Pratiques
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 animate-gentle-fade-in stagger-1">
              Informations pratiques
            </h2>
            <p className="font-sans text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2">
              Toutes les informations essentielles pour organiser votre visite de groupe.
            </p>
          </div>

          {/* Main Info Grid - Premium Minimal Design */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-[1200px] mx-auto">
            {/* Booking Information */}
            <div className="group relative animate-gentle-fade-in bg-gradient-to-br from-white via-blue-500/[0.03] to-white border border-blue-500/20 hover:border-blue-500/40 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative p-10">
                <div className="flex items-center gap-4 mb-12 pb-6 border-b border-blue-500/30">
                  <div className="p-2.5 bg-gradient-to-br from-blue-500/15 to-blue-500/10 rounded-lg shadow-sm">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-blue-600 tracking-tight font-medium">Réservation</h3>
                </div>
                <div className="space-y-6">
                  <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                    Contactez-nous par téléphone ou via notre formulaire en ligne pour organiser votre visite.
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="group relative animate-gentle-fade-in stagger-1 bg-gradient-to-br from-white via-blue-500/[0.03] to-white border border-blue-500/20 hover:border-blue-500/40 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative p-10">
                <div className="flex items-center gap-4 mb-12 pb-6 border-b border-blue-500/30">
                  <div className="p-2.5 bg-gradient-to-br from-blue-500/15 to-blue-500/10 rounded-lg shadow-sm">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-blue-600 tracking-tight font-medium">Horaires disponibles</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-sm text-charcoal/50 uppercase tracking-wider">Mardi - Dimanche</span>
                    <span className="font-sans text-lg text-charcoal font-light">9h00 - 18h00</span>
                  </div>
                  <div className="h-px bg-charcoal/5"></div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-sm text-charcoal/50 uppercase tracking-wider">Lundi</span>
                    <span className="font-sans text-lg text-charcoal font-light">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-[800px] mx-auto">
            <div className="group bg-gradient-to-br from-charcoal to-charcoal/90 p-12 rounded-2xl text-off-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-gentle-fade-in hover-scale-subtle">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-vibrant-pink to-warm-terracotta rounded-xl">
                  <Phone className="h-8 w-8 text-off-white" />
                </div>
                <h3 className="font-serif text-3xl">Nous contacter</h3>
              </div>
              <p className="font-sans text-lg mb-8 leading-relaxed text-off-white/90">
                Des questions sur votre visite de groupe ? Notre équipe est là pour vous accompagner et personnaliser votre expérience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between gap-4 p-4 bg-off-white/10 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-vibrant-pink" />
                    <div>
                      <p className="font-semibold">Téléphone</p>
                      <p className="text-off-white/80">+212 522 227 745</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 bg-off-white/10 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-5 w-5 text-warm-terracotta" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-off-white/80">contact@casaevents.ma</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/reserver"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg font-semibold"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
