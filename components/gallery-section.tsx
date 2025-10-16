export function GallerySection() {
  const images = [
    {
      src: "/casablanca-sacred-heart-cathedral-exterior-white-b.jpg",
      alt: "Exterior view of l'espace sacré coeur Cathedral",
      caption: "The iconic white facade with twin minaret-inspired towers",
    },
    {
      src: "/cathedral-interior-stained-glass-windows-colorful-.jpg",
      alt: "Stained glass windows",
      caption: "Magnificent stained-glass windows by Florence Tournon-Branly",
    },
    {
      src: "/cathedral-barrel-vault-ceiling-archways-architectu.jpg",
      alt: "Barrel-vaulted nave",
      caption: "The soaring barrel-vaulted nave with 11 spans of archways",
    },
    {
      src: "/casablanca-cityscape-atlantic-ocean-aerial-view-mo.jpg",
      alt: "View from the towers",
      caption: "Panoramic views of Casablanca and the Atlantic Ocean",
    },
    {
      src: "/art-deco-architectural-details-geometric-patterns-.jpg",
      alt: "Art Deco details",
      caption: "Intricate Art Deco and Moroccan architectural details",
    },
    {
      src: "/cathedral-cultural-event-exhibition-art-gallery-pe.jpg",
      alt: "Cultural event",
      caption: "The space transformed for contemporary cultural events",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Photo Gallery</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center text-pretty">
            Explore the architectural beauty and cultural vibrancy of l'espace sacré coeur
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-300"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
