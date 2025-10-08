import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export default function ArchitecturePage() {
  const features = [
    {
      title: "Entre Art Déco et modernisme spirituel",
      description:
        "L'architecture du Sacré-Cœur est une œuvre pionnière du mouvement Art Déco marocain, où se rencontrent spiritualité et innovation technique. Le choix du béton armé matériau novateur à l'époque a permis la création de volumes vertigineux, de voûtes élancées, et d'un espace intérieur d'une légèreté lumineuse exceptionnelle. Les ouvertures rythmées de vitraux laissent pénétrer une lumière filtrée, transformant chaque rayon en une vibration colorée sur les murs blancs.",
      image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-10-1-576x1024.jpeg",
    },
    {
      title: "Les Vitraux",
      description:
        "Des vitraux colorés filtrent la lumière naturelle, créant une atmosphère mystique et contemplative. Chaque vitrail raconte une histoire à travers ses motifs géométriques Art Déco.",
      image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-3-768x1024.jpeg",
    },
    {
      title: "La Nef Centrale",
      description:
        "Un espace monumental de 30 mètres de hauteur, caractérisé par des arcs brisés et des colonnes élancées qui créent une sensation de verticalité et de grandeur.",
      image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-8-1-1024x768.jpeg",
    },
    {
      title: "La Façade",
      description:
        "Une façade imposante en pierre blanche qui combine des éléments néo-gothiques avec des détails Art Déco, créant un dialogue unique entre tradition et modernité.",
      image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-1-1024x576.jpeg",
    },
  ]

  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: "Découvrir", href: "/decouvrir/histoire" },
              { label: "Architecture", href: "/decouvrir/architecture" }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/site-map-images/architecture-optimized/cethedrale image.jpeg"
          alt="Architecture du Sacré-Cœur"
          fill
          className="object-cover animate-subtle-float"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        
        {/* Moroccan Artistic Elements */}
        <div className="absolute inset-0 z-5">
          {/* Top decorative border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/50 to-transparent"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-terracotta/40 to-transparent"></div>
          
          {/* Corner geometric patterns */}
          <div className="absolute top-8 left-8 w-16 h-16 opacity-25">
            <svg viewBox="0 0 64 64" className="w-full h-full text-vibrant-pink/50">
              <path d="M8 8 L56 8 L56 56 L8 56 Z M16 16 L48 16 L48 48 L16 48 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M24 24 L40 24 L40 40 L24 40 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-8 right-8 w-16 h-16 opacity-25">
            <svg viewBox="0 0 64 64" className="w-full h-full text-warm-terracotta/50">
              <path d="M8 8 L56 8 L56 56 L8 56 Z M16 16 L48 16 L48 48 L16 48 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M24 24 L40 24 L40 40 L24 40 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          {/* Side decorative lines */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/30 to-transparent"></div>
          <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/30 to-transparent"></div>
          
          {/* Bottom decorative elements */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 opacity-20">
            <svg viewBox="0 0 128 32" className="w-full h-full text-vibrant-pink/40">
              <path d="M8 16 Q32 4, 56 16 Q80 28, 104 16 Q112 12, 120 16" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="32" cy="16" r="2" fill="currentColor"/>
              <circle cx="64" cy="16" r="2" fill="currentColor"/>
              <circle cx="96" cy="16" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="animate-gentle-fade-in">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-vibrant-pink/20 to-warm-terracotta/20 backdrop-blur-sm border border-off-white/20 rounded-full mb-8">
              <span className="text-off-white/90 text-sm font-sans tracking-wider uppercase">
                Architecture Art Déco
              </span>
            </div>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-off-white mb-6 animate-gentle-fade-in stagger-1 text-enhanced">
            Architecture
          </h1>
          <p className="font-sans text-lg md:text-xl text-off-white/90 max-w-3xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2 text-readable">
            Un chef-d'œuvre de l'Art Déco marocain alliant tradition gothique et modernité
          </p>
        </div>
      </section>

      {/* Architectural Features */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""} animate-fade-in-up`}>
                <h3 className="font-serif text-3xl lg:text-5xl text-charcoal mb-6">{feature.title}</h3>
                <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed">{feature.description}</p>
              </div>
              <div
                className={`relative h-[400px] lg:h-[500px] ${index % 2 === 1 ? "md:order-1" : ""} animate-fade-in-up delay-100`}
              >
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Details */}
      <section className="bg-charcoal py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl lg:text-6xl text-off-white mb-16 text-center animate-fade-in-up">
            Caractéristiques Techniques
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in-up">
              <div className="font-serif text-5xl lg:text-7xl text-vibrant-pink mb-4">50m</div>
              <div className="font-sans text-sm tracking-wider uppercase text-off-white/70">Hauteur des tours</div>
            </div>
            <div className="text-center animate-fade-in-up delay-100">
              <div className="font-serif text-5xl lg:text-7xl text-warm-terracotta mb-4">30m</div>
              <div className="font-sans text-sm tracking-wider uppercase text-off-white/70">Hauteur de la nef</div>
            </div>
            <div className="text-center animate-fade-in-up delay-200">
              <div className="font-serif text-5xl lg:text-7xl text-vibrant-pink mb-4">1930</div>
              <div className="font-sans text-sm tracking-wider uppercase text-off-white/70">Année de conception</div>
            </div>
          </div>
        </div>
      </section>

      {/* Une alliance subtile entre cultures */}
      <section className="py-20 lg:py-32 bg-charcoal/5">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 animate-fade-in-up text-center">
            Une alliance subtile entre cultures
          </h2>
          <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-6 animate-fade-in-up delay-100 text-readable">
            L'esthétique de l'édifice évoque un dialogue entre les styles européens et arabo-andalous.
            Les résilles géométriques qui décorent les façades rappellent l'artisanat local, tandis que les deux clochers élancés font écho à l'architecture islamique.
            Cette hybridation fait du Sacré-Cœur un symbole unique de la Casablanca des années 1930, ville d'échanges et de coexistence culturelle.
          </p>
        </div>
      </section>

      {/* Une restauration respectueuse */}
      <section className="py-20 lg:py-32 bg-off-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 animate-fade-in-up text-center">
            Une restauration respectueuse et innovante
          </h2>
          <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-6 animate-fade-in-up delay-100 text-readable">
            Lors de la rénovation, chaque élément a été traité avec soin : les piliers, voûtes, vitraux et coupoles ont été nettoyés, consolidés et protégés durablement.
            Une attention particulière a été portée à l'acoustique, avec l'ajout de panneaux absorbants permettant de réduire la réverbération tout en préservant le volume monumental.
            Les interventions contemporaines, sobres et réversibles, s'intègrent harmonieusement dans la structure originelle, révélant la puissance géométrique et la pureté architecturale de l'édifice.
          </p>
        </div>
      </section>

      {/* Un espace vivant et modulable */}
      <section className="py-20 lg:py-32 bg-charcoal text-off-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl lg:text-6xl mb-8 animate-fade-in-up text-center">
            Un espace vivant et modulable
          </h2>
          <p className="font-sans text-lg text-off-white/80 leading-relaxed mb-6 animate-fade-in-up delay-100 text-readable">
            Grâce à sa modularité intérieure, l'Ex Sacré-Cœur s'adapte aujourd'hui à de nouvelles fonctions : expositions, concerts, conférences, installations artistiques ou performances.
            Ses proportions grandioses et sa lumière naturelle offrent un cadre unique où le patrimoine dialogue avec la création contemporaine.
          </p>
          <p className="font-sans text-sm text-off-white/60 leading-relaxed animate-fade-in-up delay-200 text-center">
            Source : A+E Magazine, publié le 20 février 2025. Rénovation et reconversion de l'Église du Sacré-cœur de Casablanca
          </p>
        </div>
      </section>

      {/* Architecture Photo Gallery */}
      <section className="py-20 lg:py-32 bg-off-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-6 animate-fade-in-up">
              Galerie Architecturale
            </h2>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 max-w-3xl mx-auto animate-fade-in-up stagger-1">
              Explorez les détails architecturaux uniques du Sacré-Cœur à travers notre collection de photographies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Vue Extérieure",
                image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-9-1024x768.jpeg",
              },
              {
                title: "Détail Architectural",
                image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-2-1-461x1024.jpeg",
              },
              {
                title: "Perspective Intérieure",
                image: "/site-map-images/architecture-optimized/IMG-20210712-WA0035-576x1024.jpeg",
              },
              {
                title: "Vue Panoramique",
                image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-6-1024x461.jpeg",
              },
              {
                title: "Élévation",
                image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-7-1024x461.jpeg",
              },
              {
                title: "Détail de Façade",
                image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-4-696x313.jpeg",
              },
            ].map((photo, index) => (
              <div
                key={photo.title}
                className={`group relative h-[400px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up stagger-${index + 1}`}
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Corner Accents */}
                <div className="absolute inset-4 border border-off-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-vibrant-pink"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-vibrant-pink"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-warm-terracotta"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-warm-terracotta"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-px bg-gradient-to-r from-vibrant-pink to-transparent mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="font-serif text-xl lg:text-2xl text-off-white">
                    {photo.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 py-20 lg:py-32 text-center">
        <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 animate-fade-in-up">
          Visitez ce Chef-d'Œuvre
        </h2>
        <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed mb-12 animate-fade-in-up delay-100">
          Découvrez l'architecture exceptionnelle du Sacré-Cœur lors d'une visite guidée ou en autonomie
        </p>
        <a
          href="/visiter/individuels"
          className="inline-block px-8 py-4 text-xs font-sans tracking-wider uppercase bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200 rounded-lg"
        >
          Planifier ma visite
        </a>
      </section>

      <Footer />
    </main>
  )
}
