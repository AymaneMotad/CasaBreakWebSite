export function MagazineSection() {
  return (
    <section className="py-24 lg:py-32 bg-off-white relative overflow-hidden">
      {/* Subtle Moroccan decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative border */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/50 to-transparent"></div>
        
        {/* Corner geometric accents */}
        <div className="absolute top-12 left-12 w-12 h-12 opacity-25">
          <svg viewBox="0 0 48 48" className="w-full h-full text-vibrant-pink/50">
            <path d="M6 6 L42 6 L42 42 L6 42 Z M12 12 L36 12 L36 36 L12 36 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M18 18 L30 18 L30 30 L18 30 Z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>
        
        <div className="absolute top-12 right-12 w-12 h-12 opacity-25">
          <svg viewBox="0 0 48 48" className="w-full h-full text-warm-terracotta/50">
            <path d="M6 6 L42 6 L42 42 L6 42 Z M12 12 L36 12 L36 36 L12 36 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M18 18 L30 18 L30 30 L18 30 Z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Side decorative lines */}
        <div className="absolute left-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-blue-500/25 to-transparent"></div>
        <div className="absolute right-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/30 to-transparent"></div>
        
        {/* Bottom decorative pattern */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 opacity-20">
          <svg viewBox="0 0 128 32" className="w-full h-full text-vibrant-pink/50">
            <path d="M8 16 Q32 4, 56 16 Q80 28, 104 16 Q112 12, 120 16" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="32" cy="16" r="2" fill="currentColor"/>
            <circle cx="64" cy="16" r="2" fill="currentColor"/>
            <circle cx="96" cy="16" r="2" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* First Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div className="animate-gentle-fade-in flex justify-center">
            <img
              src="/sacrefront.png"
              alt="Façade du Sacré-Cœur de Casablanca"
              className="w-full max-w-none h-[650px] object-contain rounded-lg hover-scale-subtle transition-smooth"
            />
          </div>
          <div className="animate-gentle-fade-in stagger-1">
            <h2 className="font-serif font-normal text-4xl lg:text-5xl text-charcoal mb-6 leading-tight text-enhanced">
              Un chef-d'œuvre architectural
            </h2>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed mb-4 text-readable">
              L'Ex Sacré-Cœur de Casablanca, érigé en 1930, incarne l'élégance de l'architecture Art Déco. Ses lignes
              épurées et sa façade blanche immaculée en font un monument emblématique de la ville.
            </p>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed text-readable">
              Aujourd'hui transformé en centre culturel, il accueille expositions, concerts et événements qui célèbrent
              le patrimoine marocain et international.
            </p>
          </div>
        </div>

        {/* Second Block - Text Left, Image Right (Offset) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 lg:pl-20">
          <div className="order-2 lg:order-1 animate-slide-in-left stagger-1">
            <h2 className="font-serif font-normal text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Un mélange harmonieux de styles
            </h2>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed mb-4">
              L'édifice dialogue avec l'architecture mauresque traditionnelle tout en affirmant sa modernité. Ses
              vitraux colorés et ses volumes généreux créent une atmosphère unique.
            </p>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed">
              Chaque détail architectural raconte l'histoire d'une époque où l'art et la foi se rencontraient dans une
              harmonie parfaite.
            </p>
          </div>
          <div className="order-1 lg:order-2 animate-slide-in-right stagger-1">
            <img
              src="/site-map-images/evenements-optimized/soiree/evenement - soiree 5.jpg"
              alt="Exhibition at Ex Sacré-Cœur"
              className="w-full h-[500px] object-cover rounded-lg hover-scale"
            />
          </div>
        </div>

        {/* Third Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-slide-in-left stagger-2">
            <img
              src="/reserve.png"
              alt="Cultural diversity at Ex Sacré-Cœur"
              className="w-full h-[500px] object-cover rounded-lg hover-scale"
            />
          </div>
          <div className="animate-slide-in-right stagger-2">
            <h2 className="font-serif font-normal text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Un symbole de la diversité culturelle
            </h2>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed mb-4">
              L'église Ex Sacré-Cœur témoigne de la richesse du patrimoine culturel de Casablanca. Elle représente un
              pont entre les cultures, les époques et les communautés.
            </p>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed">
              Aujourd'hui, elle continue d'inspirer artistes, architectes et visiteurs du monde entier, perpétuant son
              rôle de lieu de rencontre et d'échange.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
