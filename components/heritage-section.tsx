import Image from "next/image"
import Link from "next/link"
import { BookOpen, Building, Users, Calendar, ArrowRight } from "lucide-react"

export function HeritageSection() {
  return (
    <section className="py-20 bg-charcoal text-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
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
              src="/art-deco-cathedral-exterior-casablanca-architectur.jpg"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md"
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
                className="px-8 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md"
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
