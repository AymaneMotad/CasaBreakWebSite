import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"
import { Clock, Camera, Headphones, MapPin, Users, Calendar, GraduationCap, Heart, Accessibility, Euro } from "lucide-react"

export default function IndividuelsPage() {
  const tips = [
    {
      icon: Clock,
      title: "Meilleurs moments",
      description: "Visitez en matinée pour une expérience plus calme et contemplative",
    },
    {
      icon: Camera,
      title: "Photographie",
      description: "La photographie est autorisée. Les vitraux sont particulièrement photogéniques",
    },
    {
      icon: Headphones,
      title: "Audio-guide",
      description: "Audio-guides disponibles en français, arabe et anglais",
    },
    {
      icon: MapPin,
      title: "Durée de visite",
      description: "Ouvert de 9h à 18h - Comptez 1h pour une visite complète et contemplative",
    },
    {
      icon: Users,
      title: "Visites en famille",
      description: "Un moment de partage et de découverte pour toute la famille",
    },
    {
      icon: Calendar,
      title: "Réservation",
      description: "Réservation recommandée mais pas obligatoire pour les individuels",
    },
  ]

  const visitorTypes = [
    {
      icon: Users,
      title: "Individuels & Familles",
      price: "50 MAD",
      description: "Visite libre ou guidée pour découvrir l'Ex Église Sacré-Cœur à votre rythme",
      features: ["Visite libre", "Audio-guide disponible", "Livret-jeu pour enfants", "Pack famille : 120 MAD (2 adultes + 2 enfants)"]
    },
    {
      icon: GraduationCap,
      title: "Étudiants",
      price: "25 MAD",
      description: "Tarif préférentiel avec programmes éducatifs adaptés",
      features: ["Tarif réduit sur présentation carte étudiante", "Programmes spécialisés", "Documentation académique", "Autorisation photo pour projets"]
    },
    {
      icon: Heart,
      title: "Seniors (60+)",
      price: "35 MAD",
      description: "Visite adaptée à votre rythme avec services dédiés",
      features: ["Visite à rythme adapté", "Pauses régulières", "Sièges disponibles", "Espace détente avec boissons"]
    },
    {
      icon: Accessibility,
      title: "Visiteurs à mobilité réduite",
      price: "Gratuit",
      description: "Entrée gratuite avec équipements adaptés pour tous",
      features: ["Entrée gratuite", "Visites tactiles", "Visites LSF", "Équipements PMR", "Accompagnateur gratuit"]
    }
  ]

  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: "Visiter", href: "/visiter/individuels" },
              { label: "Individuels et familles", href: "/visiter/individuels" }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Visite individuelle et familiale"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-off-white mb-6 animate-fade-in-up text-balance">
            Individuels et Familles
          </h1>
          <p className="font-sans text-sm md:text-base lg:text-lg tracking-wide text-off-white/90 animate-fade-in-up delay-100">
            Découvrez l'Ex église Sacré-Cœur à votre rythme, seul ou en famille
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 rounded-full mb-8 animate-fade-in-up">
            <span className="font-sans text-sm font-medium text-vibrant-pink tracking-wider uppercase">Découvrez</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-7xl text-charcoal mb-8 animate-fade-in-up delay-100 tracking-tight">
            Une Expérience Personnalisée
          </h2>
          <p className="font-sans text-lg lg:text-xl text-charcoal/70 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-200">
            Que vous soyez seul, en couple, en famille, étudiant, senior ou visiteur à mobilité réduite, 
            l'Ex église Sacré-Cœur vous accueille avec des services adaptés à vos besoins.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {tips.map((tip, index) => (
            <div key={tip.title} className={`group bg-white/50 backdrop-blur-sm border border-charcoal/5 rounded-2xl p-8 hover:shadow-xl hover:shadow-vibrant-pink/10 transition-all duration-500 animate-fade-in-up delay-${index * 100} hover:-translate-y-2`}>
              <div className="w-16 h-16 bg-gradient-to-br from-vibrant-pink/10 to-warm-terracotta/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <tip.icon className="h-8 w-8 text-vibrant-pink" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">{tip.title}</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visitor Types */}
      <section className="bg-gradient-to-br from-charcoal/3 via-off-white to-charcoal/5 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-vibrant-pink/10 rounded-full mb-8 animate-fade-in-up">
              <span className="font-sans text-sm font-medium text-blue-600 tracking-wider uppercase">Formules</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl text-charcoal mb-8 animate-fade-in-up delay-100 tracking-tight">
              Formules de Visite
            </h2>
            <p className="font-sans text-lg lg:text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
              Choisissez la formule qui correspond le mieux à votre profil et vos besoins
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {visitorTypes.map((type, index) => (
              <div key={type.title} className={`group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up stagger-${index + 1} hover:-translate-y-2 overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/5 via-transparent to-warm-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-vibrant-pink/10 to-warm-terracotta/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <type.icon className="h-10 w-10 text-vibrant-pink" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-charcoal mb-2">{type.title}</h3>
                      <p className="font-serif text-4xl text-vibrant-pink font-bold">{type.price}</p>
                    </div>
                  </div>
                  <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-8">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-vibrant-pink rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-sans text-sm text-charcoal/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Guided Tour */}
      <section className="bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/5 via-transparent to-warm-terracotta/5"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/20 to-warm-terracotta/20 rounded-full mb-8">
                <span className="font-sans text-sm font-medium text-vibrant-pink tracking-wider uppercase">Découverte</span>
              </div>
              <h2 className="font-serif text-5xl lg:text-7xl text-off-white mb-8 tracking-tight">Visite Libre</h2>
              <p className="font-sans text-lg lg:text-xl text-off-white/80 leading-relaxed mb-10">
                Explorez l'Ex église Sacré-Cœur à votre propre rythme. Des panneaux informatifs en français et en arabe vous
                guident à travers l'histoire et l'architecture du monument.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-vibrant-pink to-warm-terracotta rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <p className="font-sans text-base text-off-white/80 group-hover:text-off-white transition-colors">Accès libre pendant les horaires d'ouverture</p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-vibrant-pink to-warm-terracotta rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <p className="font-sans text-base text-off-white/80 group-hover:text-off-white transition-colors">Plan du monument fourni à l'entrée</p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-vibrant-pink to-warm-terracotta rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <p className="font-sans text-base text-off-white/80 group-hover:text-off-white transition-colors">Audio-guide disponible en location (30 MAD)</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px] animate-fade-in-up delay-100 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Visite libre" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Activities */}
      <section className="bg-gradient-to-br from-off-white via-white to-off-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="relative h-[500px] lg:h-[600px] animate-fade-in-up rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Activités familiales" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
            </div>
            <div className="animate-fade-in-up delay-100">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-warm-terracotta/10 to-vibrant-pink/10 rounded-full mb-8">
                <span className="font-sans text-sm font-medium text-warm-terracotta tracking-wider uppercase">Activités</span>
              </div>
              <h2 className="font-serif text-5xl lg:text-7xl text-charcoal mb-8 tracking-tight">Activités Familiales</h2>
              <p className="font-sans text-lg lg:text-xl text-charcoal/70 leading-relaxed mb-10">
                Des activités spécialement conçues pour les familles avec enfants, étudiants et seniors.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-warm-terracotta to-vibrant-pink rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <p className="font-sans text-base text-charcoal/70 group-hover:text-charcoal transition-colors">Livret-jeu "Les Mystères de l'Ex église Sacré-Cœur" (6-12 ans)</p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-warm-terracotta to-vibrant-pink rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <p className="font-sans text-base text-charcoal/70 group-hover:text-charcoal transition-colors">Programmes éducatifs pour étudiants</p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-warm-terracotta to-vibrant-pink rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <p className="font-sans text-base text-charcoal/70 group-hover:text-charcoal transition-colors">Visites adaptées pour seniors</p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-warm-terracotta to-vibrant-pink rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                  <p className="font-sans text-base text-charcoal/70 group-hover:text-charcoal transition-colors">Équipements d'accessibilité complets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="bg-gradient-to-br from-vibrant-pink/5 via-off-white to-warm-terracotta/5 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 rounded-full mb-8 animate-fade-in-up">
              <span className="font-sans text-sm font-medium text-vibrant-pink tracking-wider uppercase">Informations</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl text-charcoal mb-8 animate-fade-in-up delay-100 tracking-tight">
              Informations Pratiques
            </h2>
            <p className="font-sans text-lg lg:text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
              Tout ce que vous devez savoir pour préparer votre visite
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm border border-charcoal/5 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up group">
              <div className="w-16 h-16 bg-gradient-to-br from-vibrant-pink/10 to-warm-terracotta/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-vibrant-pink" />
              </div>
              <h3 className="font-serif text-3xl text-charcoal mb-6">Horaires</h3>
              <div className="space-y-4 font-sans text-base text-charcoal/70 leading-relaxed">
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>Mardi - Dimanche</span>
                  <span className="font-semibold text-charcoal">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>Lundi</span>
                  <span className="font-semibold text-charcoal/60">Fermé</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Dernière entrée</span>
                  <span className="font-semibold text-charcoal">17h30</span>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-charcoal/5 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up delay-100 group">
              <div className="w-16 h-16 bg-gradient-to-br from-warm-terracotta/10 to-vibrant-pink/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Euro className="h-8 w-8 text-warm-terracotta" />
              </div>
              <h3 className="font-serif text-3xl text-charcoal mb-6">Tarifs</h3>
              <div className="space-y-4 font-sans text-base text-charcoal/70 leading-relaxed">
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>Adultes</span>
                  <span className="font-semibold text-charcoal">50 MAD</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>Étudiants</span>
                  <span className="font-semibold text-charcoal">25 MAD</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>Seniors (60+)</span>
                  <span className="font-semibold text-charcoal">35 MAD</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>Enfants (6-12 ans)</span>
                  <span className="font-semibold text-charcoal">25 MAD</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>Visiteurs à mobilité réduite</span>
                  <span className="font-semibold text-vibrant-pink">Gratuit</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span>Pack famille</span>
                  <span className="font-semibold text-charcoal">120 MAD</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Résidents au Maroc</span>
                  <span className="font-semibold text-vibrant-pink">Gratuit</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <a
              href="/ticket"
              className="inline-flex items-center gap-4 px-12 py-6 text-sm font-sans tracking-wider uppercase bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-500 animate-fade-in-up delay-200 rounded-2xl group"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Réserver ma visite</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}