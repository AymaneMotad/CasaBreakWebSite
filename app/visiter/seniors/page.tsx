import Image from "next/image"
import Link from "next/link"
import { Heart, Clock, Coffee, Accessibility, Users, Euro } from "lucide-react"

export default function SeniorsPage() {
  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/senior-visitors-enjoying-peaceful-cathedral-interi.jpg" alt="Visiteurs seniors" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-off-white mb-4 animate-fade-in-up text-balance">
            Visites Seniors
          </h1>
          <p className="font-sans text-sm md:text-base text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1">
            Confort et sérénité pour votre visite
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
              Une visite adaptée à votre rythme
            </h2>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-6">
              Le Sacré-Cœur de Casablanca accueille les visiteurs seniors dans un cadre confortable et serein. Nos
              visites sont spécialement conçues pour respecter votre rythme, avec des pauses régulières et des sièges
              disponibles tout au long du parcours.
            </p>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-8">
              Profitez d'une expérience enrichissante dans une atmosphère paisible, accompagné de guides attentionnés.
            </p>
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white">
              <p className="font-serif text-3xl mb-1">35 MAD</p>
              <p className="font-sans text-xs tracking-wider uppercase">Tarif senior (60+)</p>
            </div>
          </div>
          <div className="relative h-[500px] animate-fade-in-up stagger-1">
            <Image
              src="/elderly-couple-admiring-stained-glass-windows-in-c.jpg"
              alt="Couple senior visitant"
              fill
              className="object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-charcoal/5 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 text-center animate-fade-in-up">
            Services dédiés
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Visites à rythme adapté",
                description: "Parcours plus lents avec pauses régulières. Durée flexible selon vos besoins.",
              },
              {
                icon: Accessibility,
                title: "Accessibilité totale",
                description: "Ascenseurs, rampes d'accès, sièges disponibles dans chaque espace.",
              },
              {
                icon: Coffee,
                title: "Espace détente",
                description: "Salon de repos avec boissons chaudes offertes. Ambiance calme et confortable.",
              },
              {
                icon: Users,
                title: "Guides expérimentés",
                description: "Accompagnateurs patients et attentionnés, habitués aux groupes seniors.",
              },
              {
                icon: Heart,
                title: "Assistance personnalisée",
                description: "Personnel disponible pour vous accompagner et répondre à vos besoins.",
              },
              {
                icon: Euro,
                title: "Tarif préférentiel",
                description: "Réduction de 30% sur le tarif normal pour les personnes de 60 ans et plus.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className={`bg-off-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
              >
                <service.icon className="h-10 w-10 text-vibrant-pink mb-4" />
                <h3 className="font-serif text-xl text-charcoal mb-3">{service.title}</h3>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Options */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 text-center animate-fade-in-up">
          Formules de visite
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-charcoal/5 p-10 animate-fade-in-up">
            <h3 className="font-serif text-3xl text-charcoal mb-6">Visite Tranquillité</h3>
            <p className="font-serif text-4xl text-vibrant-pink mb-6">35 MAD</p>
            <ul className="space-y-4 mb-8 font-sans text-sm text-charcoal/70">
              <li className="flex items-start gap-3">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Visite guidée à rythme adapté (1h30)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Pauses régulières avec sièges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Boisson chaude offerte</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Documentation en gros caractères</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Assistance personnalisée</span>
              </li>
            </ul>
            <Link
              href="/reserver"
              className="block text-center px-8 py-4 bg-charcoal text-off-white text-xs font-sans tracking-wider uppercase hover:bg-charcoal/90 transition-colors"
            >
              Réserver
            </Link>
          </div>

          <div className="bg-gradient-to-br from-vibrant-pink to-warm-terracotta p-10 text-off-white animate-fade-in-up stagger-1">
            <div className="inline-block px-4 py-1 bg-off-white/20 text-xs font-sans tracking-wider uppercase mb-4">
              Recommandé
            </div>
            <h3 className="font-serif text-3xl mb-6">Visite Privilège</h3>
            <p className="font-serif text-4xl mb-6">55 MAD</p>
            <ul className="space-y-4 mb-8 font-sans text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <span>Tout de la formule Tranquillité</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <span>Visite approfondie (2h30)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <span>Accès aux zones privées</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <span>Démonstration de l'orgue</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <span>Pause gourmande incluse</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <span>Souvenir photo offert</span>
              </li>
            </ul>
            <Link
              href="/reserver"
              className="block text-center px-8 py-4 bg-off-white text-charcoal text-xs font-sans tracking-wider uppercase hover:bg-off-white/90 transition-colors"
            >
              Réserver
            </Link>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="bg-charcoal/5 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <h2 className="font-serif text-4xl text-charcoal mb-8">Informations pratiques</h2>
              <div className="space-y-6 font-sans text-sm text-charcoal/70 leading-relaxed">
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">Horaires recommandés</h3>
                  <p>
                    Nous recommandons les créneaux du matin (10h-11h) pour une visite plus calme. Les après-midis en
                    semaine sont également très tranquilles.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">Accessibilité</h3>
                  <p>
                    Ascenseurs disponibles pour accéder aux tours. Fauteuils roulants disponibles gratuitement sur
                    demande. Toilettes adaptées à chaque niveau.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">Stationnement</h3>
                  <p>Parking gratuit avec places réservées seniors à proximité immédiate de l'entrée principale.</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">Accompagnateurs</h3>
                  <p>
                    Les accompagnateurs de personnes seniors bénéficient d'un tarif réduit de 50%. Un accompagnateur par
                    personne maximum.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] animate-fade-in-up stagger-1">
              <Image
                src="/senior-visitors-relaxing-in-cathedral-garden.jpg"
                alt="Visiteurs dans le jardin"
                fill
                className="object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1000px] mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 animate-fade-in-up">Réservez votre visite</h2>
        <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-10 animate-fade-in-up stagger-1">
          Contactez-nous pour organiser votre visite dans les meilleures conditions.
        </p>
        <Link
          href="/reserver"
          className="inline-block px-12 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-sm font-sans tracking-wider uppercase hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up stagger-2"
        >
          Réserver maintenant
        </Link>
      </section>
    </main>
  )
}
