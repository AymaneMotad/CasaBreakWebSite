export function MagazineSection() {
  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* First Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div className="animate-gentle-fade-in">
            <img
              src="/classical-music-concert-cathedral-performance.jpg"
              alt="Concert at Ex Sacré-Cœur"
              className="w-full h-[500px] object-cover rounded-lg hover-scale-subtle transition-smooth"
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
              src="/art-exhibition-contemporary-gallery-cathedral.jpg"
              alt="Exhibition at Ex Sacré-Cœur"
              className="w-full h-[500px] object-cover rounded-lg hover-scale"
            />
          </div>
        </div>

        {/* Third Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-slide-in-left stagger-2">
            <img
              src="/heritage-workshop-restoration-architecture.jpg"
              alt="Cultural diversity at Ex Sacré-Cœur"
              className="w-full h-[500px] object-cover rounded-lg hover-scale"
            />
          </div>
          <div className="animate-slide-in-right stagger-2">
            <h2 className="font-serif font-normal text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Un symbole de la diversité culturelle
            </h2>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed mb-4">
              L'église du Sacré-Cœur témoigne de la richesse du patrimoine culturel de Casablanca. Elle représente un
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
