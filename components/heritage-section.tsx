import Link from "next/link"
import { BookOpen, Building, Users, Calendar, ArrowRight } from "lucide-react"
import { ImageLightbox } from "./image-lightbox"

export function HeritageSection() {
  return (
    <section className="py-20 bg-charcoal text-off-white relative overflow-hidden">
      {/* Subtle Moroccan decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative border */}
        <div className="absolute top-0 left-1/3 right-1/3 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/60 to-transparent"></div>
        <div className="absolute top-2 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-warm-terracotta/40 to-transparent"></div>
        
        {/* Corner geometric patterns */}
        <div className="absolute top-16 left-16 w-16 h-16 opacity-30">
          <svg viewBox="0 0 64 64" className="w-full h-full text-vibrant-pink/60">
            <path d="M8 8 L56 8 L56 56 L8 56 Z M16 16 L48 16 L48 48 L16 48 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M24 24 L40 24 L40 40 L24 40 Z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>
        
        <div className="absolute top-16 right-16 w-16 h-16 opacity-30">
          <svg viewBox="0 0 64 64" className="w-full h-full text-warm-terracotta/60">
            <path d="M8 8 L56 8 L56 56 L8 56 Z M16 16 L48 16 L48 48 L16 48 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M24 24 L40 24 L40 40 L24 40 Z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Side decorative elements */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/40 to-transparent"></div>
        <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/40 to-transparent"></div>
        
        {/* Bottom decorative pattern */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-12 opacity-25">
          <svg viewBox="0 0 192 48" className="w-full h-full text-vibrant-pink/60">
            <path d="M8 24 Q48 8, 88 24 Q128 40, 168 24 Q176 20, 184 24" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="48" cy="24" r="3" fill="currentColor"/>
            <circle cx="96" cy="24" r="3" fill="currentColor"/>
            <circle cx="144" cy="24" r="3" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-gentle-fade-in">
            <ImageLightbox
              src="/site-map-images/histoire-optimized/1A1_H1-19_136p.jpg"
              alt="Ex Sacré-Cœur de Casablanca - Histoire"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
            />
            <p className="font-sans text-[10px] text-off-white/60 mt-3 text-center italic">
              Photo issue du Fonds Flandrin, collection privée de la Fondation Banque Populaire
            </p>
          </div>
          <div className="animate-gentle-fade-in stagger-1">
            <h3 className="font-serif text-3xl mb-6">Mémoire de Casablanca</h3>
            <p className="font-sans text-base text-off-white/80 leading-relaxed mb-8">
              Au centre de Casablanca, l'Ex Église Sacré Coeur incarne le lien entre tradition et modernité. Construit dans les années 1930, ce monument emblématique témoigne de la richesse culturelle et architecturale de la ville. Transformé au fil des décennies, il a su préserver son authenticité tout en se réinventant en espace de création et de partage. Lieu de mémoire devenu lieu de vie, il illustre la capacité de Casablanca à faire dialoguer passé et avenir.
            </p>
            <Link
              href="/decouvrir/histoire"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg"
            >
              Explorer l'histoire
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Histoire",
              description: "Découvrez l'histoire fascinante de ce monument depuis sa construction en 1930 jusqu'à sa transformation en centre culturel.",
              link: "/decouvrir/histoire",
              color: "from-vibrant-pink to-warm-terracotta"
            },
            {
              icon: Building,
              title: "Architecture",
              description: "Explorez les détails architecturaux, les influences Art Déco et les techniques de construction de l'époque.",
              link: "/decouvrir/architecture",
              color: "from-warm-terracotta to-charcoal"
            },
            {
              icon: Users,
              title: "Visites guidées",
              description: "Participez à nos visites guidées avec des experts pour une découverte approfondie du patrimoine.",
              link: "/visiter/individuels",
              color: "from-charcoal to-vibrant-pink"
            }
          ].map((item, index) => (
            <div
              key={item.title}
              className={`
                bg-gradient-to-br ${item.color} p-8 rounded-lg text-off-white 
                animate-gentle-fade-in stagger-${index + 1}
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                group
              `}
            >
              <item.icon className="h-10 w-10 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <p className="font-sans text-sm leading-relaxed mb-6 text-off-white/90">
                {item.description}
              </p>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-sm font-sans tracking-wider uppercase hover:gap-3 transition-all duration-300"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Cultural Events CTA */}
        <div className="mt-20 text-center animate-gentle-fade-in">
          <div className="bg-off-white/10 backdrop-blur-sm border border-off-white/20 rounded-lg p-12">
            <h3 className="font-serif text-3xl mb-4">Événements</h3>
            <p className="font-sans text-base text-off-white/80 mb-8 max-w-2xl mx-auto">
              Découvrez notre programmation d'expositions, concerts et événements 
              qui font vivre ce patrimoine exceptionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/evenements"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg"
              >
                Voir les événements
              </Link>
              <Link
                href="/reserver"
                className="px-8 py-4 bg-transparent border-2 border-off-white/30 text-off-white text-sm font-sans tracking-wider uppercase hover:bg-off-white/10 hover:border-off-white/50 transition-all duration-300 rounded-md"
              >
                Réserver le lieu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
