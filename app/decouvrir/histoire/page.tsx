import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export default function HistoirePage() {
  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: "Histoire", href: "/decouvrir/histoire" }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/vintage-black-and-white-photo-of-cathedral-constru.jpg"
          alt="Construction historique du Sacré-Cœur"
          fill
          className="object-cover grayscale animate-subtle-float"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        <div className="relative z-10 text-center px-6">
          <div className="animate-gentle-fade-in">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-vibrant-pink/20 to-warm-terracotta/20 backdrop-blur-sm border border-off-white/20 rounded-full mb-8">
              <span className="text-off-white/90 text-sm font-sans tracking-wider uppercase">
                Patrimoine Historique
              </span>
            </div>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-off-white mb-6 animate-gentle-fade-in stagger-1 text-enhanced">
            Histoire
          </h1>
          <p className="font-sans text-lg md:text-xl text-off-white/90 max-w-2xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2 text-readable">
            Un monument emblématique de Casablanca qui raconte l'histoire d'une époque
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-off-white to-charcoal/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 animate-gentle-fade-in">
              Chronologie Historique
            </h2>
            <p className="font-sans text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-gentle-fade-in stagger-1">
              Découvrez les étapes clés qui ont façonné l'histoire de ce monument emblématique
            </p>
          </div>
          
          <div className="space-y-32">
            {/* 1930 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border border-vibrant-pink/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">Époque de Conception</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1930</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">La Conception</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Le projet du Sacré-Cœur de Casablanca naît dans le contexte du protectorat français. Conçu par
                  l'architecte Paul Tournon, le bâtiment devait incarner la grandeur et la modernité de l'époque Art Déco
                  tout en respectant les traditions architecturales gothiques.
                </p>
              </div>
              <div className="relative h-[500px] animate-gentle-fade-in stagger-1">
                <Image 
                  src="/architectural-blueprints-art-deco-cathedral-1930s.jpg" 
                  alt="Plans architecturaux 1930" 
                  fill 
                  className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                />
              </div>
            </div>

            {/* 1930-1953 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] animate-gentle-fade-in">
                <Image
                  src="/cathedral-construction-workers-1940s-casablanca.jpg"
                  alt="Construction du Sacré-Cœur"
                  fill
                  className="object-cover grayscale rounded-2xl shadow-2xl hover-scale-subtle transition-smooth"
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-warm-terracotta/10 to-charcoal/10 border border-warm-terracotta/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">Période de Construction</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">1930-1953</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">La Construction</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  La construction s'étend sur plus de deux décennies, interrompue par la Seconde Guerre mondiale. Les deux
                  tours jumelles de 50 mètres de hauteur deviennent progressivement un repère emblématique du paysage
                  urbain de Casablanca, visible depuis le port et le centre-ville.
                </p>
              </div>
            </div>

            {/* 1956 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border border-vibrant-pink/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">Indépendance du Maroc</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1956</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">L'Indépendance</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Avec l'indépendance du Maroc, le Sacré-Cœur cesse progressivement ses fonctions religieuses. Cette
                  période marque un tournant dans l'histoire du bâtiment, qui commence sa transformation vers un nouveau
                  destin culturel et patrimonial.
                </p>
              </div>
              <div className="relative h-[500px] animate-gentle-fade-in stagger-1">
                <Image
                  src="/morocco-independence-1956-celebration-casablanca.jpg"
                  alt="Indépendance du Maroc 1956"
                  fill
                  className="object-cover grayscale rounded-2xl shadow-2xl hover-scale-subtle transition-smooth"
                />
              </div>
            </div>

            {/* Aujourd'hui */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] animate-gentle-fade-in">
                <Image 
                  src="/modern-cultural-center-art-exhibition-morocco.jpg" 
                  alt="Le Sacré-Cœur aujourd'hui" 
                  fill 
                  className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-warm-terracotta/10 to-vibrant-pink/10 border border-warm-terracotta/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">Époque Contemporaine</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">Aujourd'hui</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">Un Héritage Vivant</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Aujourd'hui, l'ex-cathédrale Sacré-Cœur est devenue un centre culturel dynamique, accueillant des
                  expositions d'art, des concerts et des événements culturels. Ce monument historique continue d'inspirer
                  et de rassembler les Casablancais et les visiteurs du monde entier.
                </p>
              </div>
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
