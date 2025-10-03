import { Clock, MapPin, Users, Phone, Calendar, Euro } from "lucide-react"

export function PracticalInfoSection() {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 animate-gentle-fade-in">
            Bien préparer sa visite
          </h2>
          <p className="font-sans text-lg text-charcoal/70 max-w-2xl mx-auto animate-gentle-fade-in stagger-1">
            Tout ce qu'il faut savoir pour préparer au mieux votre venue à l'Ex Sacré-Cœur de Casablanca
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Opening Hours */}
          <div className="bg-charcoal/5 p-8 rounded-lg animate-gentle-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-vibrant-pink" />
              <h3 className="font-serif text-2xl text-charcoal">Horaires d'ouverture</h3>
            </div>
            <div className="space-y-4 font-sans text-sm text-charcoal/70">
              <div>
                <p className="font-semibold text-charcoal">Mardi - Dimanche</p>
                <p>9h00 - 18h00</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Dernière entrée</p>
                <p>30 minutes avant la fermeture</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Fermé le lundi</p>
                <p>Entretien et maintenance</p>
              </div>
            </div>
          </div>

          {/* Access & Transport */}
          <div className="bg-charcoal/5 p-8 rounded-lg animate-gentle-fade-in stagger-1">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-vibrant-pink" />
              <h3 className="font-serif text-2xl text-charcoal">Accès et transports</h3>
            </div>
            <div className="space-y-4 font-sans text-sm text-charcoal/70">
              <div>
                <p className="font-semibold text-charcoal">Adresse</p>
                <p>Ex Sacré-Cœur, Casablanca</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Tramway</p>
                <p>Ligne T1 - Arrêt Sacré-Cœur</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Bus</p>
                <p>Lignes 1, 3, 5, 7</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Parking</p>
                <p>Gratuit sur place</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-charcoal/5 p-8 rounded-lg animate-gentle-fade-in stagger-2">
            <div className="flex items-center gap-3 mb-6">
              <Euro className="h-6 w-6 text-vibrant-pink" />
              <h3 className="font-serif text-2xl text-charcoal">Tarifs</h3>
            </div>
            <div className="space-y-4 font-sans text-sm text-charcoal/70">
              <div>
                <p className="font-semibold text-charcoal">Adulte</p>
                <p className="font-serif text-lg text-charcoal">50 MAD</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Étudiant</p>
                <p className="font-serif text-lg text-charcoal">25 MAD</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Senior (60+)</p>
                <p className="font-serif text-lg text-charcoal">35 MAD</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Handicapé</p>
                <p className="font-serif text-lg text-vibrant-pink">Gratuit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-vibrant-pink to-warm-terracotta p-8 rounded-lg text-off-white animate-gentle-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6" />
              <h3 className="font-serif text-2xl">Réserver votre visite</h3>
            </div>
            <p className="font-sans text-sm mb-6 leading-relaxed">
              Réservez votre créneau de visite pour éviter l'attente et profiter pleinement de votre découverte.
            </p>
            <a
              href="/visiter/individuels"
              className="inline-block px-6 py-3 bg-off-white text-charcoal text-xs font-sans tracking-wider uppercase hover:bg-off-white/90 transition-colors rounded-md"
            >
              Réserver maintenant
            </a>
          </div>

          <div className="bg-charcoal p-8 rounded-lg text-off-white animate-gentle-fade-in stagger-1">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="h-6 w-6 text-vibrant-pink" />
              <h3 className="font-serif text-2xl">Nous contacter</h3>
            </div>
            <p className="font-sans text-sm mb-6 leading-relaxed">
              Des questions sur votre visite ? Notre équipe est là pour vous accompagner.
            </p>
            <div className="space-y-2 font-sans text-sm">
              <p><strong>Téléphone:</strong> +212 522 27 45 78</p>
              <p><strong>Email:</strong> info@sacrecoeur-casa.ma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
