import Image from "next/image"
import { Calendar, Users, Mail, Phone, User } from "lucide-react"

export default function ReserverPage() {
  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1600" alt="Réserver" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-off-white mb-4 animate-fade-in-up text-balance">
            Réserver le Sacré-Cœur
          </h1>
          <p className="font-sans text-sm md:text-base text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1">
            Un lieu d'exception pour vos événements
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
              Privatisez un monument historique
            </h2>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-6">
              Le Sacré-Cœur de Casablanca ouvre ses portes pour accueillir vos événements privés dans un cadre
              architectural exceptionnel. Mariages, concerts privés, séances photo, tournages, événements corporatifs...
              créez des moments inoubliables dans ce joyau du patrimoine marocain.
            </p>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed">
              Notre équipe vous accompagne dans l'organisation de votre événement pour garantir une expérience unique et
              mémorable.
            </p>
          </div>
          <div className="relative h-[500px] animate-fade-in-up stagger-1">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Événement privé"
              fill
              className="object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-charcoal/5 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 text-center animate-fade-in-up">
            Types d'événements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mariages & Cérémonies",
                description: "Célébrez votre union dans un cadre majestueux. Capacité jusqu'à 300 personnes.",
                image: "/placeholder.svg?height=300&width=400",
                price: "À partir de 5000 MAD",
              },
              {
                title: "Concerts Privés",
                description: "Acoustique exceptionnelle pour vos concerts et récitals. Orgue disponible.",
                image: "/placeholder.svg?height=300&width=400",
                price: "À partir de 8000 MAD",
              },
              {
                title: "Séances Photo",
                description: "Shootings mode, portraits, photos de mariage dans un décor unique.",
                image: "/placeholder.svg?height=300&width=400",
                price: "À partir de 2000 MAD",
              },
              {
                title: "Tournages",
                description: "Films, clips, publicités. Équipe technique bienvenue.",
                image: "/placeholder.svg?height=300&width=400",
                price: "Sur devis",
              },
              {
                title: "Événements Corporatifs",
                description: "Séminaires, lancements de produits, galas d'entreprise.",
                image: "/placeholder.svg?height=300&width=400",
                price: "À partir de 10000 MAD",
              },
              {
                title: "Expositions",
                description: "Vernissages et expositions d'art dans nos espaces.",
                image: "/placeholder.svg?height=300&width=400",
                price: "À partir de 6000 MAD",
              },
            ].map((eventType, index) => (
              <div
                key={eventType.title}
                className={`bg-off-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="relative h-[200px]">
                  <Image
                    src={eventType.image || "/placeholder.svg"}
                    alt={eventType.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-charcoal mb-3">{eventType.title}</h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">{eventType.description}</p>
                  <p className="font-serif text-lg text-vibrant-pink">{eventType.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 py-20">
        <div className="bg-charcoal/5 p-10 lg:p-16">
          <h2 className="font-serif text-4xl text-charcoal mb-8 text-center animate-fade-in-up">
            Demande de réservation
          </h2>
          <p className="font-sans text-sm text-charcoal/70 text-center mb-12 animate-fade-in-up stagger-1">
            Remplissez ce formulaire et nous vous contacterons dans les 48 heures
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-2">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Nom complet *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-3">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-4">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Téléphone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="tel"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-5">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Type d'événement *
                </label>
                <select
                  required
                  className="w-full px-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="mariage">Mariage & Cérémonie</option>
                  <option value="concert">Concert Privé</option>
                  <option value="photo">Séance Photo</option>
                  <option value="tournage">Tournage</option>
                  <option value="corporate">Événement Corporatif</option>
                  <option value="exposition">Exposition</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-6">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Date souhaitée *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="date"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-7">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Nombre de personnes
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="number"
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="50"
                  />
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up stagger-8">
              <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                Détails de votre projet
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm resize-none"
                placeholder="Décrivez votre événement, vos besoins spécifiques, horaires souhaités..."
              />
            </div>

            <div className="text-center animate-fade-in-up stagger-9">
              <button
                type="submit"
                className="px-16 py-5 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-sm font-sans tracking-[0.15em] uppercase hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Envoyer la demande
              </button>
              <p className="font-sans text-xs text-charcoal/50 mt-6">Nous vous répondrons dans les 48 heures</p>
            </div>
          </form>
        </div>
      </section>

      {/* Services Included */}
      <section className="bg-charcoal text-off-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center animate-fade-in-up">Services inclus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Accès exclusif aux espaces",
              "Équipe d'accueil dédiée",
              "Système son et éclairage",
              "Mobilier et décoration de base",
              "Sécurité et surveillance",
              "Nettoyage après événement",
              "Parking privatisé",
              "Assistance technique",
            ].map((service, index) => (
              <div key={service} className={`text-center p-6 bg-off-white/5 animate-fade-in-up stagger-${index + 1}`}>
                <p className="font-sans text-sm">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
