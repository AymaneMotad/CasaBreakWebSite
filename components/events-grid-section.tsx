export function EventsGridSection() {
  const events = [
    {
      image: "/classical-music-concert-cathedral-performance.jpg",
      title: "Concert Classique",
      description: "Soirée Mozart sous les voûtes",
    },
    {
      image: "/art-exhibition-contemporary-gallery-cathedral.jpg",
      title: "Exposition d'Art Moderne",
      description: "Artistes marocains contemporains",
    },
    {
      image: "/heritage-workshop-restoration-architecture.jpg",
      title: "Conférence Architecture",
      description: "L'Art Déco au Maroc",
    },
    {
      image: "/architectural-tour-guide-cathedral-interior.jpg",
      title: "Visite Guidée",
      description: "Découverte du patrimoine",
    },
    {
      image: "/photographer-cathedral-architecture-natural-light.jpg",
      title: "Atelier Photographie",
      description: "Capturer l'architecture",
    },
    {
      image: "/classical-music-concert-cathedral-performance.jpg",
      title: "Festival de Musique",
      description: "Trois jours de concerts",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="font-serif font-normal text-5xl lg:text-6xl text-charcoal mb-4 text-center animate-fade-in-up">
          Les événements réalisés
        </h2>
        <p className="font-sans text-lg text-charcoal/60 text-center mb-16 animate-fade-in-up stagger-1">
          Découvrez nos événements passés et à venir
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className={`group cursor-pointer animate-fade-in-up stagger-${Math.min(index + 1, 6)}`}>
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5]">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">{event.title}</h3>
              <p className="font-sans text-sm text-charcoal/60">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
