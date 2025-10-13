import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"
import { Clock, Camera, Headphones, MapPin, Users, Calendar } from "lucide-react"

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
      description: "Audio-guides disponibles en français, arabe, anglais et espagnol",
    },
    {
      icon: MapPin,
      title: "Durée de visite",
      description: "Ouvert de 9h à 18h - Comptez 1h pour une visite complète et contemplative",
    },
    {
      icon: Users,
      title: "Visites en famille",
      description: "Activités ludiques disponibles pour les enfants de 6 à 12 ans",
    },
    {
      icon: Calendar,
      title: "Réservation",
      description: "Réservation recommandée mais pas obligatoire pour les individuels",
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
              { label: "Visiter", href: "/visiter/individuels" },
              { label: "Individuels et familles", href: "/visiter/individuels" }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/family-visiting-cathedral-interior-together-casabl.jpg"
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
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 animate-fade-in-up">
            Une Expérience Personnalisée
          </h2>
          <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed animate-fade-in-up delay-100">
            Que vous soyez seul, en couple ou en famille, l'Ex église Sacré-Cœur vous accueille pour une visite libre ou guidée.
            Explorez ce monument historique à votre rythme et laissez-vous inspirer par son architecture exceptionnelle
            et son atmosphère unique.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {tips.map((tip, index) => (
            <div key={tip.title} className={`animate-fade-in-up delay-${index * 100}`}>
              <tip.icon className="h-10 w-10 text-vibrant-pink mb-4" />
              <h3 className="font-serif text-2xl text-charcoal mb-3">{tip.title}</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Self-Guided Tour */}
      <section className="bg-charcoal py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-serif text-4xl lg:text-5xl text-off-white mb-6">Visite Libre</h2>
              <p className="font-sans text-base lg:text-lg text-off-white/70 leading-relaxed mb-8">
                Explorez l'Ex église Sacré-Cœur à votre propre rythme. Des panneaux informatifs en français et en arabe vous
                guident à travers l'histoire et l'architecture du monument. Prenez le temps de contempler les vitraux,
                d'admirer les voûtes et de ressentir l'atmosphère unique de ce lieu.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-vibrant-pink rounded-full mt-2" />
                  <p className="font-sans text-sm text-off-white/70">Accès libre pendant les horaires d'ouverture</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-vibrant-pink rounded-full mt-2" />
                  <p className="font-sans text-sm text-off-white/70">Plan du monument fourni à l'entrée</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-vibrant-pink rounded-full mt-2" />
                  <p className="font-sans text-sm text-off-white/70">Audio-guide disponible en location (30 MAD)</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] animate-fade-in-up delay-100">
              <Image src="/person-exploring-cathedral-interior-alone-peaceful.jpg" alt="Visite libre" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Family Activities */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[400px] lg:h-[500px] animate-fade-in-up">
            <Image src="/children-family-activity-cathedral-educational-fun.jpg" alt="Activités familiales" fill className="object-cover" />
          </div>
          <div className="animate-fade-in-up delay-100">
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6">Activités Familiales</h2>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed mb-8">
              Nous proposons des activités spécialement conçues pour les familles avec enfants. Des livrets-jeux
              permettent aux plus jeunes de découvrir le monument de manière ludique et éducative.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-warm-terracotta rounded-full mt-2" />
                <p className="font-sans text-sm text-charcoal/70">Livret-jeu "Les Mystères de l'Ex église Sacré-Cœur" (6-12 ans)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-warm-terracotta rounded-full mt-2" />
                <p className="font-sans text-sm text-charcoal/70">Ateliers créatifs le week-end (sur réservation)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-warm-terracotta rounded-full mt-2" />
                <p className="font-sans text-sm text-charcoal/70">Tarif famille : 2 adultes + 2 enfants = 120 MAD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="bg-vibrant-pink/5 py-20 lg:py-32">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-12 animate-fade-in-up">
            Informations Pratiques
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-off-white p-8 animate-fade-in-up">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Horaires</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                Mardi - Dimanche : 10h00 - 18h00
                <br />
                Fermé le lundi
                <br />
                Dernière entrée : 17h30
              </p>
            </div>
            <div className="bg-off-white p-8 animate-fade-in-up delay-100">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Tarifs</h3>
              <div className="space-y-4 font-sans text-sm text-charcoal/70 leading-relaxed">
                <div>
                  <p className="font-semibold text-charcoal">Adultes : 50 MAD</p>
                  <p className="text-xs text-charcoal/60 mt-1">Découvrez la cathédrale librement et profitez d'un moment de culture et de contemplation au cœur de Casablanca.</p>
                </div>
                <div>
                  <p className="font-semibold text-charcoal">Enfants (6 à 12 ans) : 25 MAD</p>
                  <p className="text-xs text-charcoal/60 mt-1">Un parcours adapté aux plus jeunes pour éveiller leur curiosité autour du patrimoine et de l'architecture.</p>
                </div>
                <div>
                  <p className="font-semibold text-charcoal">Gratuit pour les moins de 6 ans</p>
                  <p className="text-xs text-charcoal/60 mt-1">L'accès est libre pour les tout-petits accompagnés d'un adulte.</p>
                </div>
                <div>
                  <p className="font-semibold text-charcoal">Pack famille – 2 adultes + 2 enfants : 120 MAD</p>
                  <p className="text-xs text-charcoal/60 mt-1">Une offre avantageuse pour partager une expérience culturelle en famille à tarif réduit.</p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="/ticket"
            className="inline-block mt-12 px-8 py-4 text-xs font-sans tracking-wider uppercase bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200 rounded-lg"
          >
            Réserver ma visite
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
