import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { TextToSpeechPlayer } from "@/components/text-to-speech-player"
import Image from "next/image"

export default function ArchitecturePage() {
  const features = [
    {
      title: "Entre Art Déco et modernisme spirituel",
      description:
        "L'architecture de l'Ex église Sacré-Cœur est une œuvre pionnière du mouvement Art Déco marocain, où se rencontrent spiritualité et innovation technique. Le choix du béton armé matériau novateur à l'époque a permis la création de volumes vertigineux, de voûtes élancées, et d'un espace intérieur d'une légèreté lumineuse exceptionnelle. Les ouvertures rythmées de vitraux laissent pénétrer une lumière filtrée, transformant chaque rayon en une vibration colorée sur les murs blancs.",
      image: "/archi-2.png",
      audioText: "L'architecture de l'Ex église Sacré-Cœur est une œuvre pionnière du mouvement Art Déco marocain, où se rencontrent spiritualité et innovation technique. Le choix du béton armé matériau novateur à l'époque a permis la création de volumes vertigineux, de voûtes élancées, et d'un espace intérieur d'une légèreté lumineuse exceptionnelle. Les ouvertures rythmées de vitraux laissent pénétrer une lumière filtrée, transformant chaque rayon en une vibration colorée sur les murs blancs.",
    },
    {
      title: "Une alliance subtile entre cultures",
      description:
        "L'esthétique de l'édifice évoque un dialogue entre les styles européens et arabo-andalous. Les résilles géométriques qui décorent les façades rappellent l'artisanat local, tandis que les deux clochers élancés font écho à l'architecture islamique. Cette hybridation fait de l'Ex église Sacré-Cœur un symbole unique de la Casablanca des années 1930, ville d'échanges et de coexistence culturelle.",
      image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-3-768x1024.jpeg",
      audioText: "L'esthétique de l'édifice évoque un dialogue entre les styles européens et arabo-andalous. Les résilles géométriques qui décorent les façades rappellent l'artisanat local, tandis que les deux clochers élancés font écho à l'architecture islamique. Cette hybridation fait de l'Ex église Sacré-Cœur un symbole unique de la Casablanca des années 1930, ville d'échanges et de coexistence culturelle.",
    },
    {
      title: "Une restauration respectueuse et innovante",
      description:
        "Lors de la rénovation, chaque élément a été traité avec soin : les piliers, voûtes, vitraux et coupoles ont été nettoyés, consolidés et protégés durablement. Une attention particulière a été portée à l'acoustique, avec l'ajout de panneaux absorbants permettant de réduire la réverbération tout en préservant le volume monumental. Les interventions contemporaines, sobres et réversibles, s'intègrent harmonieusement dans la structure originelle, révélant la puissance géométrique et la pureté architecturale de l'édifice.",
      image: "/archi-3.png",
      audioText: "Lors de la rénovation, chaque élément a été traité avec soin : les piliers, voûtes, vitraux et coupoles ont été nettoyés, consolidés et protégés durablement. Une attention particulière a été portée à l'acoustique, avec l'ajout de panneaux absorbants permettant de réduire la réverbération tout en préservant le volume monumental. Les interventions contemporaines, sobres et réversibles, s'intègrent harmonieusement dans la structure originelle, révélant la puissance géométrique et la pureté architecturale de l'édifice.",
    },
    {
      title: "Un espace vivant et modulable",
      description:
        "Grâce à sa modularité intérieure, l'Ex église Sacré-Cœur s'adapte aujourd'hui à de nouvelles fonctions : expositions, concerts, conférences, installations artistiques ou performances. Ses proportions grandioses et sa lumière naturelle offrent un cadre unique où le patrimoine dialogue avec la création contemporaine.",
      image: "/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-1-1024x576.jpeg",
      audioText: "Grâce à sa modularité intérieure, l'Ex église Sacré-Cœur s'adapte aujourd'hui à de nouvelles fonctions : expositions, concerts, conférences, installations artistiques ou performances. Ses proportions grandioses et sa lumière naturelle offrent un cadre unique où le patrimoine dialogue avec la création contemporaine.",
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
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/site-map-images/architecture-optimized/cethedrale image.jpeg"
          alt="Architecture de l'Ex église Sacré-Cœur"
          fill
          className="object-cover animate-subtle-float"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />
        
        {/* Architectural Elements */}
        <div className="absolute inset-0 z-5">
          {/* Top decorative border */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-vibrant-pink/60 to-transparent"></div>
          <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-terracotta/50 to-transparent"></div>
          
          {/* Corner geometric patterns */}
          <div className="absolute top-12 left-12 w-20 h-20 opacity-30">
            <svg viewBox="0 0 80 80" className="w-full h-full text-vibrant-pink/60">
              <path d="M10 10 L70 10 L70 70 L10 70 Z M20 20 L60 20 L60 60 L20 60 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 30 L50 30 L50 50 L30 50 Z" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
          
          <div className="absolute top-12 right-12 w-20 h-20 opacity-30">
            <svg viewBox="0 0 80 80" className="w-full h-full text-warm-terracotta/60">
              <path d="M10 10 L70 10 L70 70 L10 70 Z M20 20 L60 20 L60 60 L20 60 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 30 L50 30 L50 50 L30 50 Z" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
          
          {/* Side decorative lines */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-2 bg-gradient-to-b from-transparent via-vibrant-pink/40 to-transparent"></div>
          <div className="absolute right-0 top-1/4 bottom-1/4 w-2 bg-gradient-to-b from-transparent via-warm-terracotta/40 to-transparent"></div>
          
          {/* Bottom decorative elements */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-10 opacity-25">
            <svg viewBox="0 0 160 40" className="w-full h-full text-vibrant-pink/50">
              <path d="M10 20 Q40 8, 80 20 Q120 32, 150 20 Q155 18, 160 20" fill="none" stroke="currentColor" strokeWidth="2.5"/>
              <circle cx="40" cy="20" r="3" fill="currentColor"/>
              <circle cx="80" cy="20" r="3" fill="currentColor"/>
              <circle cx="120" cy="20" r="3" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="animate-gentle-fade-in">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/25 to-warm-terracotta/25 backdrop-blur-sm border border-off-white/30 rounded-full mb-10">
              <span className="text-off-white/95 text-sm font-sans tracking-widest uppercase font-semibold">
                Architecture Art Déco
              </span>
            </div>
          </div>
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl text-off-white mb-8 animate-gentle-fade-in stagger-1 text-enhanced">
            Architecture
          </h1>
          <p className="font-sans text-xl md:text-2xl text-off-white/95 max-w-4xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2 text-readable">
            Un chef-d'œuvre de l'Art Déco marocain alliant tradition gothique et modernité
          </p>
        </div>
      </section>

      {/* Architectural Features */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <div className="space-y-40">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""} animate-fade-in-up`}>
                <div className="mb-8">
                  <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 leading-tight">{feature.title}</h3>
                  <p className="font-sans text-lg lg:text-xl text-charcoal/75 leading-relaxed mb-8">{feature.description}</p>
                </div>
                <TextToSpeechPlayer 
                  text={feature.audioText}
                  title={`Écouter: ${feature.title}`}
                />
              </div>
              <div className={`${index % 2 === 1 ? "md:order-1" : ""} animate-fade-in-up delay-100`}>
                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Details */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90 py-24 lg:py-40 overflow-hidden">
        {/* Architectural Blueprint Background */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 0L60 20L80 20L70 40L90 40L80 60L100 60L90 80L70 80L60 100L40 100L30 80L10 80L0 60L20 60L10 40L30 40L20 20L40 20Z'/%3E%3Cpath d='M50 10L55 25L70 25L65 40L80 40L75 55L90 55L85 70L70 70L65 85L50 85L45 70L30 70L25 55L40 55L35 40L50 40L45 25L60 25Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Architectural Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Architectural Corner Details */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-transparent via-vibrant-pink/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-transparent via-warm-terracotta/50 to-transparent"></div>
        
        {/* Architectural Corner Accents */}
        <div className="absolute top-16 left-16 w-24 h-24 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-vibrant-pink">
            <path d="M10 10 L90 10 L90 90 L10 90 Z M20 20 L80 20 L80 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="currentColor" opacity="0.3"/>
            <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="currentColor" opacity="0.5"/>
            <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.7"/>
          </svg>
        </div>
        
        <div className="absolute top-16 right-16 w-24 h-24 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-warm-terracotta">
            <path d="M10 10 L90 10 L90 90 L10 90 Z M20 20 L80 20 L80 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="currentColor" opacity="0.3"/>
            <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="currentColor" opacity="0.5"/>
            <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.7"/>
          </svg>
        </div>

        {/* Architectural Side Elements */}
        <div className="absolute left-0 top-1/3 bottom-1/3 w-2 bg-gradient-to-b from-transparent via-vibrant-pink/40 to-transparent"></div>
        <div className="absolute right-0 top-1/3 bottom-1/3 w-2 bg-gradient-to-b from-transparent via-warm-terracotta/40 to-transparent"></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <div className="inline-block px-10 py-5 bg-gradient-to-r from-vibrant-pink/25 to-warm-terracotta/25 backdrop-blur-sm border-2 border-off-white/30 rounded-full mb-10">
              <span className="text-off-white/95 text-sm font-sans tracking-widest uppercase font-semibold">
                Spécifications Techniques
              </span>
            </div>
            <h2 className="font-serif text-6xl lg:text-8xl text-off-white mb-8 animate-fade-in-up">
              Caractéristiques Techniques
            </h2>
            <p className="font-sans text-xl text-off-white/85 max-w-4xl mx-auto animate-fade-in-up delay-100 leading-relaxed">
              Découvrez les dimensions et spécifications architecturales de ce monument emblématique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Hauteur sous plafond - Architectural Measurement */}
            <div className="group relative bg-gradient-to-br from-charcoal/70 to-charcoal/50 backdrop-blur-sm border-2 border-vibrant-pink/40 rounded-3xl p-10 text-center hover:border-vibrant-pink/70 hover:shadow-2xl hover:shadow-vibrant-pink/30 transition-all duration-700 animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-vibrant-pink/40 to-vibrant-pink/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-12 h-12 text-vibrant-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 7h6m-6 4h6m-6 4h6"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v18"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h8"/>
                  </svg>
                </div>
                <div className="font-serif text-6xl lg:text-7xl text-vibrant-pink mb-6 group-hover:scale-110 transition-transform duration-500">33m</div>
                <div className="font-sans text-base tracking-widest uppercase text-off-white/90 font-semibold">Hauteur sous plafond</div>
                <div className="mt-4 text-sm text-off-white/70">Dimension architecturale</div>
              </div>
            </div>

            {/* Date construction première partie - Construction Timeline */}
            <div className="group relative bg-gradient-to-br from-charcoal/70 to-charcoal/50 backdrop-blur-sm border-2 border-warm-terracotta/40 rounded-3xl p-10 text-center hover:border-warm-terracotta/70 hover:shadow-2xl hover:shadow-warm-terracotta/30 transition-all duration-700 animate-fade-in-up delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-terracotta/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-warm-terracotta/40 to-warm-terracotta/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-12 h-12 text-warm-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v18m0-18l4 4m-4-4l-4 4"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h8m-8 4h8"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 9h12M6 13h12"/>
                  </svg>
                </div>
                <div className="font-serif text-6xl lg:text-7xl text-warm-terracotta mb-6 group-hover:scale-110 transition-transform duration-500">1930</div>
                <div className="font-sans text-base tracking-widest uppercase text-off-white/90 font-semibold">Construction première partie</div>
                <div className="mt-4 text-sm text-off-white/70">Début des travaux</div>
              </div>
            </div>

            {/* Date achèvement deuxième partie - Completion Achievement */}
            <div className="group relative bg-gradient-to-br from-charcoal/70 to-charcoal/50 backdrop-blur-sm border-2 border-vibrant-pink/40 rounded-3xl p-10 text-center hover:border-vibrant-pink/70 hover:shadow-2xl hover:shadow-vibrant-pink/30 transition-all duration-700 animate-fade-in-up delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-vibrant-pink/40 to-vibrant-pink/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-12 h-12 text-vibrant-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v18m0-18l4 4m-4-4l-4 4"/>
                  </svg>
                </div>
                <div className="font-serif text-6xl lg:text-7xl text-vibrant-pink mb-6 group-hover:scale-110 transition-transform duration-500">1953</div>
                <div className="font-sans text-base tracking-widest uppercase text-off-white/90 font-semibold">Achèvement deuxième partie</div>
                <div className="mt-4 text-sm text-off-white/70">Finalisation du projet</div>
              </div>
            </div>

            {/* Architecte - Master Architect */}
            <div className="group relative bg-gradient-to-br from-charcoal/70 to-charcoal/50 backdrop-blur-sm border-2 border-warm-terracotta/40 rounded-3xl p-10 text-center hover:border-warm-terracotta/70 hover:shadow-2xl hover:shadow-warm-terracotta/30 transition-all duration-700 animate-fade-in-up delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-terracotta/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-warm-terracotta/40 to-warm-terracotta/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-12 h-12 text-warm-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v18m0-18l4 4m-4-4l-4 4"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h8m-8 4h8"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 9h12M6 13h12"/>
                  </svg>
                </div>
                <div className="font-serif text-4xl lg:text-5xl text-warm-terracotta mb-6 group-hover:scale-110 transition-transform duration-500">Paul Tournon</div>
                <div className="font-sans text-base tracking-widest uppercase text-off-white/90 font-semibold">Architecte</div>
                <div className="mt-4 text-sm text-off-white/70">Maître d'œuvre</div>
              </div>
            </div>
          </div>

          {/* Architectural Decorative Elements */}
          <div className="mt-24 flex justify-center items-center space-x-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-vibrant-pink/60 to-transparent"></div>
            <div className="w-4 h-4 bg-vibrant-pink/40 rounded-full"></div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-warm-terracotta/60 to-transparent"></div>
            <div className="w-4 h-4 bg-warm-terracotta/40 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-vibrant-pink/60 to-transparent"></div>
          </div>
        </div>
      </section>


      {/* Architecture Photo Gallery */}
      <section className="py-24 lg:py-40 bg-off-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border border-charcoal/20 rounded-full mb-8">
              <span className="text-charcoal/80 text-sm font-sans tracking-widest uppercase font-semibold">
                Galerie Visuelle
              </span>
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl text-charcoal mb-8 animate-fade-in-up">
              Galerie Architecturale
            </h2>
            <p className="font-sans text-xl text-charcoal/75 max-w-4xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Explorez les détails architecturaux uniques de l'Ex église Sacré-Cœur à travers notre collection de photographies
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
                className={`group relative h-[400px] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up stagger-${index + 1}`}
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

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-24 lg:py-40 text-center">
        <div className="bg-gradient-to-br from-charcoal/5 to-charcoal/10 rounded-3xl p-12 lg:p-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/15 to-warm-terracotta/15 border border-charcoal/20 rounded-full mb-8">
            <span className="text-charcoal/80 text-sm font-sans tracking-widest uppercase font-semibold">
              Visite Guidée
            </span>
          </div>
          <h2 className="font-serif text-5xl lg:text-7xl text-charcoal mb-8 animate-fade-in-up">
            Visiter l'Ex église Sacré-Cœur
          </h2>
          <p className="font-sans text-xl text-charcoal/75 leading-relaxed mb-12 animate-fade-in-up delay-100 max-w-3xl mx-auto">
            Découvrez l'architecture exceptionnelle de l'Ex église Sacré-Cœur lors d'une visite guidée ou en autonomie
          </p>
          <a
            href="/visiter/individuels"
            className="inline-block px-10 py-5 text-sm font-sans tracking-widest uppercase bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-white hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up delay-200 rounded-xl font-semibold"
          >
            Visiter maintenant
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
