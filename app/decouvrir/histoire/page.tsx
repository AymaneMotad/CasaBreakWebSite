import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HistoirePage() {
  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/vintage-black-and-white-photo-of-cathedral-constru.jpg"
          alt="Construction historique du Sacré-Cœur"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-off-white mb-4 animate-fade-in-up">
            Histoire
          </h1>
          <p className="font-sans text-sm md:text-base tracking-wider uppercase text-off-white/80 animate-fade-in-up delay-100">
            Un monument emblématique de Casablanca
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="space-y-24">
          {/* 1930 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="font-serif text-6xl lg:text-8xl text-vibrant-pink">1930</span>
              <h2 className="font-serif text-3xl lg:text-5xl text-charcoal mt-4 mb-6">La Conception</h2>
              <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed">
                Le projet du Sacré-Cœur de Casablanca naît dans le contexte du protectorat français. Conçu par
                l'architecte Paul Tournon, le bâtiment devait incarner la grandeur et la modernité de l'époque Art Déco
                tout en respectant les traditions architecturales gothiques.
              </p>
            </div>
            <div className="relative h-[400px] animate-fade-in-up delay-100">
              <Image src="/architectural-blueprints-art-deco-cathedral-1930s.jpg" alt="Plans architecturaux 1930" fill className="object-cover" />
            </div>
          </div>

          {/* 1930-1953 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] order-2 md:order-1 animate-fade-in-up delay-100">
              <Image
                src="/cathedral-construction-workers-1940s-casablanca.jpg"
                alt="Construction du Sacré-Cœur"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in-up">
              <span className="font-serif text-6xl lg:text-8xl text-warm-terracotta">1930-1953</span>
              <h2 className="font-serif text-3xl lg:text-5xl text-charcoal mt-4 mb-6">La Construction</h2>
              <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed">
                La construction s'étend sur plus de deux décennies, interrompue par la Seconde Guerre mondiale. Les deux
                tours jumelles de 50 mètres de hauteur deviennent progressivement un repère emblématique du paysage
                urbain de Casablanca, visible depuis le port et le centre-ville.
              </p>
            </div>
          </div>

          {/* 1956 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="font-serif text-6xl lg:text-8xl text-vibrant-pink">1956</span>
              <h2 className="font-serif text-3xl lg:text-5xl text-charcoal mt-4 mb-6">L'Indépendance</h2>
              <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed">
                Avec l'indépendance du Maroc, le Sacré-Cœur cesse progressivement ses fonctions religieuses. Cette
                période marque un tournant dans l'histoire du bâtiment, qui commence sa transformation vers un nouveau
                destin culturel et patrimonial.
              </p>
            </div>
            <div className="relative h-[400px] animate-fade-in-up delay-100">
              <Image
                src="/morocco-independence-1956-celebration-casablanca.jpg"
                alt="Indépendance du Maroc 1956"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>

          {/* Aujourd'hui */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] order-2 md:order-1 animate-fade-in-up delay-100">
              <Image src="/modern-cultural-center-art-exhibition-morocco.jpg" alt="Le Sacré-Cœur aujourd'hui" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2 animate-fade-in-up">
              <span className="font-serif text-6xl lg:text-8xl text-warm-terracotta">Aujourd'hui</span>
              <h2 className="font-serif text-3xl lg:text-5xl text-charcoal mt-4 mb-6">Un Héritage Vivant</h2>
              <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed">
                Aujourd'hui, l'ex-cathédrale Sacré-Cœur est devenue un centre culturel dynamique, accueillant des
                expositions d'art, des concerts et des événements culturels. Ce monument historique continue d'inspirer
                et de rassembler les Casablancais et les visiteurs du monde entier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="bg-charcoal py-20 lg:py-32">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl lg:text-6xl text-off-white mb-8 animate-fade-in-up">
            Un Patrimoine Architectural Exceptionnel
          </h2>
          <p className="font-sans text-base lg:text-lg text-off-white/70 leading-relaxed mb-12 animate-fade-in-up delay-100">
            Le Sacré-Cœur de Casablanca représente un témoignage unique de l'architecture Art Déco au Maroc. Son style
            néo-gothique modernisé, ses vitraux colorés et ses proportions majestueuses en font l'un des monuments les
            plus photographiés et admirés de la ville blanche.
          </p>
          <a
            href="/decouvrir/architecture"
            className="inline-block px-8 py-4 text-xs font-sans tracking-wider uppercase bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200"
          >
            Découvrir l'Architecture
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
