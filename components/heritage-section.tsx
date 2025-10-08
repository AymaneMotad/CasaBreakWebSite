import Image from "next/image"
import Link from "next/link"
import { BookOpen, Building, Users, Calendar, ArrowRight } from "lucide-react"

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
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 animate-gentle-fade-in">
            Un patrimoine à découvrir
          </h2>
          <p className="font-sans text-lg text-off-white/80 max-w-2xl mx-auto animate-gentle-fade-in stagger-1">
            Explorez l'histoire, l'architecture et les trésors de l'Ex Sacré-Cœur de Casablanca
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-gentle-fade-in">
            <Image
              src="/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-1-1024x576.jpeg"
              alt="Architecture Art Déco"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="animate-gentle-fade-in stagger-1">
            <h3 className="font-serif text-3xl mb-6">Architecture Art Déco</h3>
            <p className="font-sans text-base text-off-white/80 leading-relaxed mb-6">
              Construit en 1930, l'Ex Sacré-Cœur représente l'apogée de l'architecture Art Déco au Maroc. 
              Ses lignes épurées, ses motifs géométriques et sa façade blanche immaculée en font un 
              monument emblématique de Casablanca.
            </p>
            <p className="font-sans text-base text-off-white/80 leading-relaxed mb-8">
              Découvrez les secrets de sa construction, ses influences architecturales et son évolution 
              à travers les décennies.
            </p>
            <Link
              href="/decouvrir/architecture"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg"
            >
              Explorer l'architecture
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
              className={`bg-gradient-to-br ${item.color} p-8 rounded-lg text-off-white animate-gentle-fade-in stagger-${index + 1}`}
            >
              <item.icon className="h-10 w-10 mb-6" />
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <p className="font-sans text-sm leading-relaxed mb-6 text-off-white/90">
                {item.description}
              </p>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-sm font-sans tracking-wider uppercase hover:scale-105 transition-transform"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Cultural Events CTA */}
        <div className="mt-20 text-center animate-gentle-fade-in">
          <div className="bg-off-white/10 backdrop-blur-sm border border-off-white/20 rounded-lg p-12">
            <h3 className="font-serif text-3xl mb-4">Événements culturels</h3>
            <p className="font-sans text-base text-off-white/80 mb-8 max-w-2xl mx-auto">
              Découvrez notre programmation d'expositions, concerts et événements culturels 
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
