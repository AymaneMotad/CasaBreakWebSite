"use client"

export function CasablancaGallery() {
  // Using external Casablanca images from reliable sources
  // These URLs can be replaced with specific Casablanca image URLs
  const casablancaImages = [
    {
      src: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80",
      alt: "Mosquée Hassan II de Casablanca",
      title: "Mosquée Hassan II",
      span: "md:col-span-2 lg:col-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      alt: "Restaurant gastronomique à Casablanca",
      title: "Gastronomie"
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      alt: "Café tendance à Casablanca",
      title: "Cafés & Brunchs"
    },
    {
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
      alt: "Architecture Art Déco de Casablanca",
      title: "Architecture Art Déco"
    },
    {
      src: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80",
      alt: "Plage et corniche de Casablanca",
      title: "Corniche"
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      alt: "Soirée et nightlife à Casablanca",
      title: "Sorties"
    },
    {
      src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      alt: "Shopping à Casablanca",
      title: "Shopping"
    },
    {
      src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
      alt: "Vue nocturne de Casablanca",
      title: "Casablanca by Night"
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

