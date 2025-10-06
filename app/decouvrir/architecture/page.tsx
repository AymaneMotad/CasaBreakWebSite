import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export default function ArchitecturePage() {
  const features = [
    {
      title: "Les Tours Jumelles",
      description:
        "Deux tours de 50 mètres de hauteur dominent le paysage urbain, inspirées des cathédrales gothiques européennes mais réinterprétées dans un style Art Déco épuré.",
      image: "/twin-towers-cathedral-art-deco-casablanca.jpg",
    },
    {
      title: "Les Vitraux",
      description:
        "Des vitraux colorés filtrent la lumière naturelle, créant une atmosphère mystique et contemplative. Chaque vitrail raconte une histoire à travers ses motifs géométriques Art Déco.",
      image: "/colorful-stained-glass-windows-art-deco-cathedral.jpg",
    },
    {
      title: "La Nef Centrale",
      description:
        "Un espace monumental de 30 mètres de hauteur, caractérisé par des arcs brisés et des colonnes élancées qui créent une sensation de verticalité et de grandeur.",
      image: "/cathedral-nave-interior-high-ceiling-columns.jpg",
    },
    {
      title: "La Façade",
      description:
        "Une façade imposante en pierre blanche qui combine des éléments néo-gothiques avec des détails Art Déco, créant un dialogue unique entre tradition et modernité.",
      image: "/white-stone-cathedral-facade-art-deco-morocco.jpg",
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
              { label: "Architecture", href: "/decouvrir/architecture" }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/cathedral-architecture-exterior-dramatic-angle-cas.jpg"
          alt="Architecture du Sacré-Cœur"
          fill
          className="object-cover animate-subtle-float"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
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

      {/* Introduction */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 py-20 lg:py-32 text-center">
        <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 animate-fade-in-up">
          Un Dialogue Entre Époques
        </h2>
        <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed animate-fade-in-up delay-100">
          Conçu par l'architecte Paul Tournon, le Sacré-Cœur de Casablanca représente une synthèse remarquable entre
          l'architecture gothique traditionnelle et l'esthétique Art Déco des années 1930. Chaque élément architectural
          a été pensé pour créer un espace à la fois spirituel et moderne, reflétant l'esprit d'une époque de
          transformation.
        </p>
      </section>

      {/* Architectural Features */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
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
          className="inline-block px-8 py-4 text-xs font-sans tracking-wider uppercase bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200"
        >
          Planifier ma visite
        </a>
      </section>

      <Footer />
    </main>
  )
}
