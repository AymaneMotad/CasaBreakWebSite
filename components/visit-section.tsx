export function VisitSection() {
  return (
    <section id="visiter" className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Informations</p>
            <h2 className="font-serif font-light text-5xl lg:text-7xl text-charcoal mb-8 leading-tight">
              Planifiez votre visite
            </h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-sm tracking-widest uppercase text-charcoal mb-3">Adresse</h3>
              <p className="font-sans text-lg text-charcoal/70">
                Angle rue d'Alger et boulevard Rachdi
                <br />
                Quartier Gautier, Casablanca 20250
              </p>
            </div>
            <div>
              <h3 className="font-sans text-sm tracking-widest uppercase text-charcoal mb-3">Horaires</h3>
              <p className="font-sans text-lg text-charcoal/70">
                Lundi - Dimanche
                <br />
                8h00 - 18h00
              </p>
            </div>
            <div>
              <h3 className="font-sans text-sm tracking-widest uppercase text-charcoal mb-3">Visites Guidées</h3>
              <p className="font-sans text-lg text-charcoal/70">
                Disponibles sur réservation
                <br />
                Français, Anglais, Arabe
              </p>
            </div>
          </div>
        </div>

        <div className="relative aspect-[21/9] overflow-hidden">
          <img
            src="/sacre-coeur-cathedral-casablanca-white-art-deco-bu.jpg"
            alt="Vue extérieure de la cathédrale"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
