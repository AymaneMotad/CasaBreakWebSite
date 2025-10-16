export function IntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Patrimoine Culturel
            </p>
            <h2 className="font-serif font-light text-5xl lg:text-7xl text-charcoal mb-8 leading-tight">
              Une cathédrale devenue centre culturel
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-sans text-lg leading-relaxed text-charcoal/80">
              L'Ex église Sacré-Cœur, construite entre 1930 et 1953 par l'architecte français Paul Tournon, représente un
              exemple remarquable de l'architecture Art Déco mêlée aux influences néo-gothiques et marocaines.
            </p>
            <p className="font-sans text-lg leading-relaxed text-charcoal/80">
              Désacralisée en 1956 après l'indépendance du Maroc, elle sert aujourd'hui de lieu d'exposition et
              d'événements, témoignant de l'histoire coloniale et de la richesse architecturale de Casablanca.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
