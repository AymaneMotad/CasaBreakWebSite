import { Clock, MapPin, Users, Phone, Calendar, Euro } from "lucide-react"

export function PracticalInfoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-off-white to-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border border-vibrant-pink/20 rounded-full mb-8 animate-gentle-fade-in">
            <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">
              Informations Pratiques
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 animate-gentle-fade-in stagger-1">
            Bien préparer sa visite
          </h2>
          <p className="font-sans text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2">
            Tout ce qu'il faut savoir pour préparer au mieux votre venue à l'Ex Sacré-Cœur de Casablanca
          </p>
        </div>

        {/* Main Info Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Opening Hours */}
          <div className="group bg-off-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-gentle-fade-in hover-lift-subtle">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-vibrant-pink to-warm-terracotta rounded-xl">
                <Clock className="h-8 w-8 text-off-white" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">Horaires d'ouverture</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-vibrant-pink pl-6">
                <p className="font-semibold text-charcoal text-lg mb-2">Mardi - Dimanche</p>
                <p className="font-sans text-charcoal/70">9h00 - 18h00</p>
              </div>
              <div className="border-l-4 border-warm-terracotta pl-6">
                <p className="font-semibold text-charcoal text-lg mb-2">Dernière entrée</p>
                <p className="font-sans text-charcoal/70">30 minutes avant la fermeture</p>
              </div>
              <div className="border-l-4 border-charcoal/30 pl-6">
                <p className="font-semibold text-charcoal text-lg mb-2">Fermé le lundi</p>
                <p className="font-sans text-charcoal/70">Entretien et maintenance</p>
              </div>
            </div>
          </div>

          {/* Access & Transport */}
          <div className="group bg-off-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-gentle-fade-in stagger-1 hover-lift-subtle">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-warm-terracotta to-charcoal rounded-xl">
                <MapPin className="h-8 w-8 text-off-white" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">Accès et transports</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-vibrant-pink pl-6">
                <p className="font-semibold text-charcoal text-lg mb-2">Adresse</p>
                <p className="font-sans text-charcoal/70">Ex Sacré-Cœur, Casablanca</p>
              </div>
              <div className="border-l-4 border-warm-terracotta pl-6">
                <p className="font-semibold text-charcoal text-lg mb-2">Tramway</p>
                <p className="font-sans text-charcoal/70">Ligne T1 - Arrêt Sacré-Cœur</p>
              </div>
              <div className="border-l-4 border-charcoal/30 pl-6">
                <p className="font-semibold text-charcoal text-lg mb-2">Bus</p>
                <p className="font-sans text-charcoal/70">Lignes 1, 3, 5, 7</p>
              </div>
              <div className="border-l-4 border-vibrant-pink pl-6">
                <p className="font-semibold text-charcoal text-lg mb-2">Parking</p>
                <p className="font-sans text-charcoal/70">Gratuit sur place</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="group bg-gradient-to-br from-charcoal to-charcoal/90 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-gentle-fade-in stagger-2 hover-lift-subtle text-off-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-vibrant-pink to-warm-terracotta rounded-xl">
                <Euro className="h-8 w-8 text-off-white" />
              </div>
              <h3 className="font-serif text-2xl">Tarifs</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-vibrant-pink pl-6">
                <p className="font-semibold text-lg mb-2">Adulte</p>
                <p className="font-serif text-2xl text-vibrant-pink">50 MAD</p>
              </div>
              <div className="border-l-4 border-warm-terracotta pl-6">
                <p className="font-semibold text-lg mb-2">Étudiant</p>
                <p className="font-serif text-2xl text-warm-terracotta">25 MAD</p>
              </div>
              <div className="border-l-4 border-off-white/30 pl-6">
                <p className="font-semibold text-lg mb-2">Senior (60+)</p>
                <p className="font-serif text-2xl text-off-white">35 MAD</p>
              </div>
              <div className="border-l-4 border-vibrant-pink pl-6">
                <p className="font-semibold text-lg mb-2">Handicapé</p>
                <p className="font-serif text-2xl text-vibrant-pink">Gratuit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="group bg-gradient-to-br from-vibrant-pink to-warm-terracotta p-12 rounded-2xl text-off-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-gentle-fade-in hover-scale-subtle">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-off-white/20 rounded-xl">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl">Réserver votre visite</h3>
            </div>
            <p className="font-sans text-lg mb-8 leading-relaxed text-off-white/90">
              Réservez votre créneau de visite pour éviter l'attente et profiter pleinement de votre découverte du patrimoine Art Déco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/visiter/individuels"
                className="inline-flex items-center justify-center px-8 py-4 bg-off-white text-charcoal text-sm font-sans tracking-wider uppercase hover:bg-off-white/90 transition-colors rounded-lg font-semibold"
              >
                Réserver maintenant
              </a>
              <a
                href="/visiter/groupes"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-off-white/30 text-off-white text-sm font-sans tracking-wider uppercase hover:bg-off-white/10 hover:border-off-white/50 transition-all duration-300 rounded-lg"
              >
                Visite de groupe
              </a>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-charcoal to-charcoal/90 p-12 rounded-2xl text-off-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-gentle-fade-in stagger-1 hover-scale-subtle">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-vibrant-pink to-warm-terracotta rounded-xl">
                <Phone className="h-8 w-8 text-off-white" />
              </div>
              <h3 className="font-serif text-3xl">Nous contacter</h3>
            </div>
            <p className="font-sans text-lg mb-8 leading-relaxed text-off-white/90">
              Des questions sur votre visite ? Notre équipe est là pour vous accompagner et personnaliser votre expérience.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-off-white/10 rounded-lg">
                <Phone className="h-5 w-5 text-vibrant-pink" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-off-white/80">+212 522 27 45 78</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-off-white/10 rounded-lg">
                <Users className="h-5 w-5 text-warm-terracotta" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-off-white/80">info@sacrecoeur-casa.ma</p>
                </div>
              </div>
            </div>
            <a
              href="/reserver"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg font-semibold"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
