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
              { label: "Découvrir", href: "/decouvrir/histoire" },
              { label: "Histoire", href: "/decouvrir/histoire" }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/site-map-images/histoire-optimized/1A1_H1-19_136p.jpg"
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
            {/* 1923 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border border-vibrant-pink/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">Le début d'un projet symbolique</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1923</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">Le début d'un projet symbolique</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  La construction de l'église du Sacré-Cœur est lancée sous le protectorat français, à l'initiative de la communauté catholique de Casablanca.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  L'objectif : ériger un lieu de culte majeur au cœur d'une ville en plein essor, reflet du développement urbain de la métropole.
                </p>
              </div>
              <div className="relative h-[500px] animate-gentle-fade-in stagger-1">
                <Image 
                  src="/site-map-images/histoire-optimized/1A1_H1-2563_8W.jpg" 
                  alt="Plans architecturaux 1923" 
                  fill 
                  className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                />
              </div>
            </div>

            {/* 1930 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] animate-gentle-fade-in">
                <Image
                  src="/site-map-images/histoire-optimized/1A1_H1-4-156P341.jpg"
                  alt="Construction du Sacré-Cœur"
                  fill
                  className="object-cover grayscale rounded-2xl shadow-2xl hover-scale-subtle transition-smooth"
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-warm-terracotta/10 to-charcoal/10 border border-warm-terracotta/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">L'achèvement d'un chef-d'œuvre</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">1930</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">L'achèvement d'un chef-d'œuvre architectural</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  Inauguration officielle de l'église du Sacré-Cœur. L'architecte Paul Tournon signe une œuvre avant-gardiste, mariant art gothique et art déco – un style unique en Afrique du Nord.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Ses voûtes élancées, vitraux géométriques et façades épurées illustrent la modernité de Casablanca des années 1930.
                </p>
              </div>
            </div>

            {/* 1956 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border border-vibrant-pink/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">L'indépendance : un tournant</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1956</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">L'indépendance du Maroc : un tournant</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  Après l'indépendance, la fréquentation de l'église diminue.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  L'édifice perd progressivement sa fonction religieuse et devient un symbole patrimonial et culturel.
                </p>
              </div>
              <div className="relative h-[500px] animate-gentle-fade-in stagger-1">
                <Image
                  src="/site-map-images/histoire-optimized/1A1_H1-52_93p057.jpg"
                  alt="Indépendance du Maroc 1956"
                  fill
                  className="object-cover grayscale rounded-2xl shadow-2xl hover-scale-subtle transition-smooth"
                />
              </div>
            </div>

            {/* 1976 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] animate-gentle-fade-in">
                <Image 
                  src="/site-map-images/histoire-optimized/1A2_H1-4083_-037.jpg" 
                  alt="Espace culturel 1976" 
                  fill 
                  className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-warm-terracotta/10 to-vibrant-pink/10 border border-warm-terracotta/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">Changement d'usage</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">1976</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">Déconsécration et changement d'usage</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  L'église est officiellement désacralisée.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Elle devient un espace culturel et d'exposition, accueillant concerts, salons, projections et manifestations artistiques.
                </p>
              </div>
            </div>

            {/* 1990-2000 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border border-vibrant-pink/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">Reconnaissance patrimoniale</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1990-2000</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">Reconnaissance patrimoniale</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  Classée parmi les monuments emblématiques du patrimoine architectural casablancais.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Sa structure en béton armé et son style néo-gothique revisité attirent architectes, chercheurs et visiteurs du monde entier.
                </p>
              </div>
              <div className="relative h-[500px] animate-gentle-fade-in stagger-1">
                <Image 
                  src="/site-map-images/histoire-optimized/1A2_H1-4084_185P-038.jpg" 
                  alt="Patrimoine architectural" 
                  fill 
                  className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                />
              </div>
            </div>

            {/* 2010 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] animate-gentle-fade-in">
                <Image 
                  src="/site-map-images/histoire-optimized/1B3_H1-3314-222.jpg" 
                  alt="Réhabilitation 2010" 
                  fill 
                  className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-warm-terracotta/10 to-charcoal/10 border border-warm-terracotta/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">Début de la réhabilitation</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">2010</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">Début de la réhabilitation</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  Des travaux de restauration et de sécurisation sont entrepris pour préserver l'édifice, fragilisé par le temps.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  La volonté de lui redonner vie se précise : faire du Sacré-Cœur un centre de créativité et de dialogue culturel.
                </p>
              </div>
            </div>

            {/* Aujourd'hui */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border border-vibrant-pink/20 rounded-full mb-8">
                  <span className="text-charcoal/80 text-sm font-sans tracking-wider uppercase">Renaissance d'un joyau</span>
                </div>
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">Aujourd'hui</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">Renaissance d'un joyau patrimonial</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  Le site renaît comme centre culturel, artistique et touristique.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  Il devient un lieu de rencontre entre mémoire et modernité, où se croisent patrimoine, art, innovation et citoyenneté.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  La cathédrale s'inscrit désormais dans une démarche de valorisation durable du patrimoine de Casablanca.
                </p>
              </div>
              <div className="relative h-[500px] animate-gentle-fade-in stagger-1">
                <Image 
                  src="/site-map-images/histoire-optimized/2a1_H1-1014_147P471.jpg" 
                  alt="Le Sacré-Cœur aujourd'hui" 
                  fill 
                  className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Un joyau ressuscité */}
      <section className="py-20 lg:py-32 bg-off-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 animate-fade-in-up text-center">
            Un joyau ressuscité au cœur de Casablanca
          </h2>
          <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-6 animate-fade-in-up delay-100 text-readable">
            Au centre de Casablanca, l'ancienne Église du Sacré-Cœur, symbole emblématique de l'architecture de la ville, renaît aujourd'hui sous un nouveau jour.
            Restée close durant plusieurs décennies, elle retrouve vie grâce à une réhabilitation exemplaire qui a su préserver son authenticité tout en lui insufflant une nouvelle dynamique.
            Ce projet a permis de redéfinir la vocation du monument, en respectant son héritage tout en l'ouvrant à un avenir culturel et urbain.
          </p>
        </div>
      </section>

      {/* Des origines marquées */}
      <section className="py-20 lg:py-32 bg-charcoal/5">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 animate-fade-in-up text-center">
            Des origines marquées par la modernité
          </h2>
          <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-6 animate-fade-in-up delay-100 text-readable">
            Conçue dans les années 1930 par l'architecte français Paul Tournon, l'église incarne dès son origine une architecture avant-gardiste.
            Ses clochers rappelant les minarets, ses vitraux colorés enchâssés dans des résilles de béton aux motifs arabo-andalous, et sa structure en béton armé illustrent la fusion réussie entre modernité occidentale et références locales.
            Achevée en 1953, elle devient un repère architectural et spirituel de la Casablanca cosmopolite, où se croisent cultures et influences multiples.
          </p>
        </div>
      </section>

      {/* De la désacralisation */}
      <section className="py-20 lg:py-32 bg-off-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8 animate-fade-in-up text-center">
            De la désacralisation à la renaissance
          </h2>
          <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-6 animate-fade-in-up delay-100 text-readable">
            Rendue à la commune dans les années 1970, l'église perd progressivement sa fonction religieuse et connaît diverses réutilisations, notamment dans l'enseignement supérieur ou comme lieu d'exposition ponctuel.
            Fermée à la fin des années 1980 à cause de dégradations structurelles, elle est classée monument historique en 2003, avant de devenir l'objet d'un projet ambitieux de sauvegarde et de reconversion.
            L'objectif : préserver la mémoire du lieu tout en lui insufflant une nouvelle vie culturelle.
          </p>
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
            Un repère culturel retrouvé
          </h2>
          <p className="font-sans text-base lg:text-lg text-off-white/70 leading-relaxed mb-12 animate-fade-in-up delay-100">
            Aujourd'hui, l'Ex Sacré-Cœur s'impose comme un symbole de la renaissance patrimoniale de Casablanca.
            À la fois lieu de mémoire et d'innovation, il incarne un dialogue entre passé et avenir, entre spiritualité, art et modernité.
            De monument silencieux, il est devenu un phare culturel vivant au cœur de la métropole.
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
