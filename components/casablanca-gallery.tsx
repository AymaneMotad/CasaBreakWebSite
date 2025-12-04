"use client"

export function CasablancaGallery() {
  // Using external Casablanca images from reliable sources
  // These URLs can be replaced with specific Casablanca image URLs
  const casablancaImages = [
    {
      src: "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Vue aérienne de Casablanca sur l'océan Atlantique",
      title: "Casablanca vue du ciel",
      span: "md:col-span-2 lg:col-span-2" // Make first image larger
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      alt: "Mosquée Hassan II de Casablanca",
      title: "Mosquée Hassan II"
    },
    {
      src: "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Corniche de Casablanca",
      title: "Corniche d'Ain Diab"
    },
    {
      src: "https://images.unsplash.com/photo-1605634732163-6e5c5c5b5b5b?w=800&h=600&fit=crop",
      alt: "Architecture Art Déco de Casablanca",
      title: "Architecture Art Déco"
    },
    {
      src: "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Place Mohammed V Casablanca",
      title: "Place Mohammed V"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      alt: "Marché central de Casablanca",
      title: "Marché Central"
    },
    {
      src: "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Twin Center Casablanca",
      title: "Twin Center"
    },
    {
      src: "https://images.unsplash.com/photo-1605634732163-6e5c5c5b5b5b?w=800&h=600&fit=crop",
      alt: "Vieille médina de Casablanca",
      title: "Vieille Médina"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-charcoal via-charcoal/95 to-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00a346]/60 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {casablancaImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3] animate-fade-in-up ${image.span || ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  e.currentTarget.src = `https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`
                }}
              />
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-off-white text-sm font-sans font-medium drop-shadow-lg">
                    {image.title}
                  </p>
                </div>
              </div>
              
              {/* Accent corner */}
              <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${
                index % 2 === 0 ? "bg-[#00a346]" : "bg-[#c10000]"
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c10000]/60 to-transparent"></div>
    </section>
  )
}

