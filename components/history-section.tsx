export function HistorySection() {
  const timeline = [
    {
      number: "01",
      year: "1930",
      title: "Conception",
      description:
        "Paul Tournon conçoit l'église dans un style Art Déco moderniste, fusionnant les éléments néo-gothiques, Art Déco et marocains.",
    },
    {
      number: "02",
      year: "1953",
      title: "Achèvement",
      description:
        "Après 23 ans de construction, l'édifice devient un lieu de culte important pour la communauté catholique de Casablanca.",
    },
    {
      number: "03",
      year: "1956",
      title: "Indépendance",
      description:
        "Suite à l'indépendance du Maroc, la population catholique diminue et l'église cesse progressivement ses activités religieuses.",
    },
    {
      number: "04",
      year: "Aujourd'hui",
      title: "Centre Culturel",
      description:
        "Le bâtiment est préservé comme monument historique et accueille des événements culturels, expositions d'art et concerts.",
    },
  ]

  return (
    <section id="histoire" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Histoire</p>
          <h2 className="font-serif font-light text-5xl lg:text-7xl text-charcoal leading-tight max-w-3xl">
            Un voyage à travers le temps
          </h2>
        </div>

        <div className="space-y-16">
          {timeline.map((item) => (
            <div key={item.number} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-2">
                <div className="font-serif text-6xl lg:text-7xl text-terracotta/30 font-light">{item.number}</div>
              </div>
              <div className="lg:col-span-3">
                <div className="font-serif text-4xl lg:text-5xl text-charcoal font-light mb-2">{item.year}</div>
                <div className="font-sans text-xl font-medium text-charcoal">{item.title}</div>
              </div>
              <div className="lg:col-span-7">
                <p className="font-sans text-lg leading-relaxed text-charcoal/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
