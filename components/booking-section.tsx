import { Calendar, Clock, MapPin } from "lucide-react"

export function BookingSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif font-normal text-5xl lg:text-6xl text-charcoal mb-8 leading-tight">
              Voulez-vous réserver les billets pour vos prochains événements au Sacré-Cœur ?
            </h2>
            <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-8">
              Découvrez notre plateforme de réservation en ligne pour accéder facilement aux concerts, expositions et
              visites guidées. Réservez votre place en quelques clics.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-terracotta mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-sans font-medium text-charcoal mb-1">Calendrier en temps réel</h3>
                  <p className="font-sans text-sm text-charcoal/60">Consultez tous les événements à venir</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-terracotta mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-sans font-medium text-charcoal mb-1">Réservation instantanée</h3>
                  <p className="font-sans text-sm text-charcoal/60">Confirmation immédiate par email</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-terracotta mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-sans font-medium text-charcoal mb-1">Accès facilité</h3>
                  <p className="font-sans text-sm text-charcoal/60">Plan et informations pratiques</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-charcoal text-off-white font-sans text-sm tracking-wide uppercase rounded-md hover:bg-charcoal/90 transition-all duration-300 hover:scale-105">
              Réserver maintenant
            </button>
          </div>

            <div className="animate-gentle-scale stagger-1 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/casawee.png"
                  alt="Plateforme de réservation Sacré-Cœur"
                  className="w-[400px] h-[600px] lg:w-[450px] lg:h-[650px] object-cover rounded-[3rem] shadow-2xl hover-scale-subtle transition-smooth"
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
