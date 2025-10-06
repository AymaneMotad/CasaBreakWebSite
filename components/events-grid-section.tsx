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
    <section className="py-24 lg:py-32 bg-off-white relative overflow-hidden">
      {/* Moroccan Artistic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative border */}
        <div className="absolute top-0 left-1/5 right-1/5 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/50 to-transparent"></div>
        <div className="absolute top-3 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-warm-terracotta/40 to-transparent"></div>
        
        {/* Corner geometric patterns */}
        <div className="absolute top-12 left-12 w-10 h-10 opacity-25">
          <svg viewBox="0 0 40 40" className="w-full h-full text-vibrant-pink/50">
            <path d="M5 5 L35 5 L35 35 L5 35 Z M10 10 L30 10 L30 30 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M15 15 L25 15 L25 25 L15 25 Z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>
        
        <div className="absolute top-12 right-12 w-10 h-10 opacity-25">
          <svg viewBox="0 0 40 40" className="w-full h-full text-warm-terracotta/50">
            <path d="M5 5 L35 5 L35 35 L5 35 Z M10 10 L30 10 L30 30 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M15 15 L25 15 L25 25 L15 25 Z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Side decorative lines */}
        <div className="absolute left-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/30 to-transparent"></div>
        <div className="absolute right-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/30 to-transparent"></div>
        
        {/* Center decorative pattern */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-24 h-12 opacity-18">
          <svg viewBox="0 0 96 48" className="w-full h-full text-vibrant-pink/40">
            <path d="M8 24 Q24 12, 40 24 Q56 36, 72 24 Q80 20, 88 24" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="24" cy="24" r="2" fill="currentColor"/>
            <circle cx="48" cy="24" r="2" fill="currentColor"/>
            <circle cx="72" cy="24" r="2" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-36 h-10 opacity-15">
          <svg viewBox="0 0 144 40" className="w-full h-full text-warm-terracotta/40">
            <path d="M8 20 Q36 8, 64 20 Q92 32, 120 20 Q128 16, 136 20" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="36" cy="20" r="2" fill="currentColor"/>
            <circle cx="72" cy="20" r="2" fill="currentColor"/>
            <circle cx="108" cy="20" r="2" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
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
