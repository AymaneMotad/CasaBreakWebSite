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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/site-map-images/architecture-optimized/cethedrale image.jpeg"
          alt="Architecture de l'Ex église Sacré-Cœur"
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
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""} animate-fade-in-up`}>
                <h3 className="font-serif text-3xl lg:text-5xl text-charcoal mb-6">{feature.title}</h3>
                <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed">{feature.description}</p>
                <TextToSpeechPlayer 
                  text={feature.audioText}
                  title={`Écouter: ${feature.title}`}
                />
              </div>
              <div className={`${index % 2 === 1 ? "md:order-1" : ""} animate-fade-in-up delay-100`}>
                <div className="relative h-[400px] lg:h-[500px]">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Details */}
      <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90 py-20 lg:py-32 overflow-hidden">
        {/* Gothic Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 0L50 20L70 20L55 35L60 55L40 45L20 55L25 35L10 20L30 20Z'/%3E%3Cpath d='M40 10L45 25L60 25L50 35L55 50L40 40L25 50L30 35L20 25L35 25Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Gothic Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-vibrant-pink/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-warm-terracotta/40 to-transparent"></div>
        
        {/* Gothic Corner Accents */}
        <div className="absolute top-12 left-12 w-20 h-20 opacity-15">
          <svg viewBox="0 0 80 80" className="w-full h-full text-vibrant-pink">
            <path d="M10 10 L70 10 L70 70 L10 70 Z M20 20 L60 20 L60 60 L20 60 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M30 30 L50 30 L50 50 L30 50 Z" fill="currentColor" opacity="0.4"/>
            <path d="M35 35 L45 35 L45 45 L35 45 Z" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>
        
        <div className="absolute top-12 right-12 w-20 h-20 opacity-15">
          <svg viewBox="0 0 80 80" className="w-full h-full text-warm-terracotta">
            <path d="M10 10 L70 10 L70 70 L10 70 Z M20 20 L60 20 L60 60 L20 60 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M30 30 L50 30 L50 50 L30 50 Z" fill="currentColor" opacity="0.4"/>
            <path d="M35 35 L45 35 L45 45 L35 45 Z" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-vibrant-pink/20 to-warm-terracotta/20 backdrop-blur-sm border border-off-white/20 rounded-full mb-8">
              <span className="text-off-white/90 text-sm font-sans tracking-wider uppercase">
                Spécifications Techniques
              </span>
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl text-off-white mb-6 animate-fade-in-up">
              Caractéristiques Techniques
            </h2>
            <p className="font-sans text-lg text-off-white/80 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Découvrez les dimensions et spécifications architecturales de ce monument emblématique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Hauteur sous plafond - Ruler/Measurement Icon */}
            <div className="group relative bg-gradient-to-br from-charcoal/60 to-charcoal/40 backdrop-blur-sm border-2 border-vibrant-pink/30 rounded-2xl p-8 text-center hover:border-vibrant-pink/60 hover:shadow-2xl hover:shadow-vibrant-pink/20 transition-all duration-500 animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-vibrant-pink/30 to-vibrant-pink/15 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-vibrant-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m-6 4h6m-6 4h6"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18"/>
                  </svg>
                </div>
                <div className="font-serif text-5xl lg:text-6xl text-vibrant-pink mb-4 group-hover:scale-110 transition-transform duration-300">33m</div>
                <div className="font-sans text-sm tracking-wider uppercase text-off-white/80">Hauteur sous plafond</div>
              </div>
            </div>

            {/* Date construction première partie - Construction/Hammer Icon */}
            <div className="group relative bg-gradient-to-br from-charcoal/60 to-charcoal/40 backdrop-blur-sm border-2 border-warm-terracotta/30 rounded-2xl p-8 text-center hover:border-warm-terracotta/60 hover:shadow-2xl hover:shadow-warm-terracotta/20 transition-all duration-500 animate-fade-in-up delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-terracotta/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-warm-terracotta/30 to-warm-terracotta/15 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-warm-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m0-18l4 4m-4-4l-4 4"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8m-8 4h8"/>
                  </svg>
                </div>
                <div className="font-serif text-5xl lg:text-6xl text-warm-terracotta mb-4 group-hover:scale-110 transition-transform duration-300">1930</div>
                <div className="font-sans text-sm tracking-wider uppercase text-off-white/80">Construction première partie</div>
              </div>
            </div>

            {/* Date achèvement deuxième partie - Checkmark/Completion Icon */}
            <div className="group relative bg-gradient-to-br from-charcoal/60 to-charcoal/40 backdrop-blur-sm border-2 border-vibrant-pink/30 rounded-2xl p-8 text-center hover:border-vibrant-pink/60 hover:shadow-2xl hover:shadow-vibrant-pink/20 transition-all duration-500 animate-fade-in-up delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-vibrant-pink/30 to-vibrant-pink/15 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-vibrant-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="font-serif text-5xl lg:text-6xl text-vibrant-pink mb-4 group-hover:scale-110 transition-transform duration-300">1953</div>
                <div className="font-sans text-sm tracking-wider uppercase text-off-white/80">Achèvement deuxième partie</div>
              </div>
            </div>

            {/* Architecte - Blueprint/Drawing Icon */}
            <div className="group relative bg-gradient-to-br from-charcoal/60 to-charcoal/40 backdrop-blur-sm border-2 border-warm-terracotta/30 rounded-2xl p-8 text-center hover:border-warm-terracotta/60 hover:shadow-2xl hover:shadow-warm-terracotta/20 transition-all duration-500 animate-fade-in-up delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-terracotta/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-warm-terracotta/30 to-warm-terracotta/15 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-warm-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m0-18l4 4m-4-4l-4 4"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8m-8 4h8"/>
                  </svg>
                </div>
                <div className="font-serif text-3xl lg:text-4xl text-warm-terracotta mb-4 group-hover:scale-110 transition-transform duration-300">Paul Tournon</div>
                <div className="font-sans text-sm tracking-wider uppercase text-off-white/80">Architecte</div>
              </div>
            </div>
          </div>

          {/* Gothic decorative line */}
          <div className="mt-20 flex justify-center">
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-12 bg-charcoal/5">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <p className="font-sans text-sm text-charcoal/60 leading-relaxed text-center">
            Source : A+E Magazine, publié le 20 février 2025. Rénovation et reconversion de l'Ex église Sacré-Cœur de Casablanca
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
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 py-20 lg:py-32 text-center">
        <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 animate-fade-in-up">
          Visiter l'Ex église Sacré-Cœur
        </h2>
        <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed mb-12 animate-fade-in-up delay-100">
          Découvrez l'architecture exceptionnelle de l'Ex église Sacré-Cœur lors d'une visite guidée ou en autonomie
        </p>
        <a
          href="/visiter/individuels"
          className="inline-block px-8 py-4 text-xs font-sans tracking-wider uppercase bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200 rounded-lg"
        >
          Visiter maintenant
        </a>
      </section>

      <Footer />
    </main>
  )
}
