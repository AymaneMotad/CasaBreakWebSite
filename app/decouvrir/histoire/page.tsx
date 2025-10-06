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
      <section className="py-24 bg-gradient-to-b from-off-white to-charcoal/5 relative overflow-hidden">
        {/* Moroccan Artistic Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top decorative elements */}
          <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/35 to-transparent"></div>
          <div className="absolute top-4 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-warm-terracotta/25 to-transparent"></div>
          
          {/* Corner geometric patterns */}
          <div className="absolute top-16 left-16 w-12 h-12 opacity-18">
            <svg viewBox="0 0 48 48" className="w-full h-full text-vibrant-pink/35">
              <path d="M6 6 L42 6 L42 42 L6 42 Z M12 12 L36 12 L36 36 L12 36 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M18 18 L30 18 L30 30 L18 30 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-16 right-16 w-12 h-12 opacity-18">
            <svg viewBox="0 0 48 48" className="w-full h-full text-warm-terracotta/35">
              <path d="M6 6 L42 6 L42 42 L6 42 Z M12 12 L36 12 L36 36 L12 36 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M18 18 L30 18 L30 30 L18 30 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          {/* Side decorative lines */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/20 to-transparent"></div>
          <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/20 to-transparent"></div>
          
          {/* Center decorative pattern */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-14 opacity-12">
            <svg viewBox="0 0 112 56" className="w-full h-full text-vibrant-pink/25">
              <path d="M8 28 Q28 14, 48 28 Q68 42, 88 28 Q96 24, 104 28" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="28" cy="28" r="2" fill="currentColor"/>
              <circle cx="56" cy="28" r="2" fill="currentColor"/>
              <circle cx="84" cy="28" r="2" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Bottom decorative elements */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 opacity-10">
            <svg viewBox="0 0 128 32" className="w-full h-full text-warm-terracotta/25">
              <path d="M8 16 Q32 4, 56 16 Q80 28, 104 16 Q112 12, 120 16" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="32" cy="16" r="1.5" fill="currentColor"/>
              <circle cx="64" cy="16" r="1.5" fill="currentColor"/>
              <circle cx="96" cy="16" r="1.5" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
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
      <section className="bg-charcoal py-20 lg:py-32 relative overflow-hidden">
        {/* Moroccan Artistic Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top decorative border */}
          <div className="absolute top-0 left-1/3 right-1/3 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/50 to-transparent"></div>
          <div className="absolute top-2 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-warm-terracotta/35 to-transparent"></div>
          
          {/* Corner geometric patterns */}
          <div className="absolute top-16 left-16 w-14 h-14 opacity-20">
            <svg viewBox="0 0 56 56" className="w-full h-full text-vibrant-pink/40">
              <path d="M7 7 L49 7 L49 49 L7 49 Z M14 14 L42 14 L42 42 L14 42 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M21 21 L35 21 L35 35 L21 35 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-16 right-16 w-14 h-14 opacity-20">
            <svg viewBox="0 0 56 56" className="w-full h-full text-warm-terracotta/40">
              <path d="M7 7 L49 7 L49 49 L7 49 Z M14 14 L42 14 L42 42 L14 42 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M21 21 L35 21 L35 35 L21 35 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          {/* Side decorative elements */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/30 to-transparent"></div>
          <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/30 to-transparent"></div>
          
          {/* Bottom decorative pattern */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-10 opacity-15">
            <svg viewBox="0 0 160 40" className="w-full h-full text-vibrant-pink/40">
              <path d="M8 20 Q40 8, 72 20 Q104 32, 136 20 Q144 16, 152 20" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="40" cy="20" r="2" fill="currentColor"/>
              <circle cx="80" cy="20" r="2" fill="currentColor"/>
              <circle cx="120" cy="20" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center relative z-10">
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
