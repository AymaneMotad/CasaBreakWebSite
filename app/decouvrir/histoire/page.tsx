import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { TextToSpeechPlayer } from "@/components/text-to-speech-player"
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
           
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1923</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">Le début d'un projet symbolique</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  La construction de l'église du Sacré-Cœur est lancée sous le protectorat français, à l'initiative de la communauté catholique de Casablanca. Elle témoigne de la volonté de cette communauté d'affirmer sa présence dans une ville en pleine mutation. L'objectif est d'ériger un lieu de culte majeur au cœur d'une cité en plein essor, reflet du développement urbain rapide et du dynamisme de la métropole. Ce projet s'inscrit ainsi dans le contexte de l'expansion de Casablanca, où la modernité et la foi se rejoignent pour donner naissance à un monument emblématique de son époque.
                </p>
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="relative h-[500px]">
                  <Image 
                    src="/site-map-images/histoire-optimized/1A1_H1-2563_8W.jpg" 
                    alt="Plans architecturaux 1923" 
                    fill 
                    className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">Photo issue du Fonds Flandrin, collection privée de la Fondation Banque Populaire</p>
                <TextToSpeechPlayer 
                  text="La construction de l'église du Sacré-Cœur est lancée sous le protectorat français, à l'initiative de la communauté catholique de Casablanca. Elle témoigne de la volonté de cette communauté d'affirmer sa présence dans une ville en pleine mutation. L'objectif est d'ériger un lieu de culte majeur au cœur d'une cité en plein essor, reflet du développement urbain rapide et du dynamisme de la métropole. Ce projet s'inscrit ainsi dans le contexte de l'expansion de Casablanca, où la modernité et la foi se rejoignent pour donner naissance à un monument emblématique de son époque."
                  title="Écouter l'histoire de 1923"
                />
              </div>
            </div>

            {/* 1930 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
                <div className="relative h-[500px]">
                  <Image
                    src="/site-map-images/histoire-optimized/1A1_H1-4-156P341.jpg"
                    alt="Construction du Sacré-Cœur"
                    fill
                    className="object-cover grayscale rounded-2xl shadow-2xl hover-scale-subtle transition-smooth"
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">Photo issue du Fonds Flandrin, collection privée de la Fondation Banque Populaire</p>
                <TextToSpeechPlayer 
                  text="L'inauguration officielle de l'église du Sacré-Cœur marque une étape majeure dans l'histoire architecturale et culturelle de Casablanca. Conçue par l'architecte Paul Tournon, l'édifice se distingue par son caractère avant-gardiste, fruit d'un savant mariage entre l'art gothique et l'art déco, un style alors inédit en Afrique du Nord. Par ses voûtes élancées, ses vitraux aux motifs géométriques et ses façades épurées, l'église incarne la modernité et l'élégance caractéristiques de la Casablanca des années 1930. Ce chef-d'œuvre architectural témoigne du raffinement esthétique de son époque et de la volonté de faire du Sacré-Cœur un symbole fort de la ville, à la croisée entre tradition religieuse et innovation urbaine."
                  title="Écouter l'histoire de 1930"
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
             
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">1930</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">L'achèvement d'un chef-d'œuvre architectural</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  L'inauguration officielle de l'église du Sacré-Cœur marque une étape majeure dans l'histoire architecturale et culturelle de Casablanca. Conçue par l'architecte Paul Tournon, l'édifice se distingue par son caractère avant-gardiste, fruit d'un savant mariage entre l'art gothique et l'art déco, un style alors inédit en Afrique du Nord.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Par ses voûtes élancées, ses vitraux aux motifs géométriques et ses façades épurées, l'église incarne la modernité et l'élégance caractéristiques de la Casablanca des années 1930. Ce chef-d'œuvre architectural témoigne du raffinement esthétique de son époque et de la volonté de faire du Sacré-Cœur un symbole fort de la ville, à la croisée entre tradition religieuse et innovation urbaine.
                </p>
              </div>
            </div>

            {/* 1956 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
             
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1956</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">L'indépendance du Maroc : un tournant</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  Après l'indépendance du Maroc, la fréquentation de l'église du Sacré-Cœur connaît une baisse progressive. Peu à peu, l'édifice perd sa fonction religieuse initiale, conséquence directe des transformations sociales et démographiques de la ville.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Cependant, loin de tomber dans l'oubli, l'église acquiert un nouveau statut : celui de symbole patrimonial et culturel de Casablanca. Son architecture remarquable et sa place au cœur de la cité en font un lieu chargé d'histoire, témoin du passé colonial mais aussi de l'évolution urbaine et artistique du Maroc moderne.
                </p>
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="relative h-[500px]">
                  <Image
                    src="/site-map-images/histoire-optimized/1A1_H1-52_93p057.jpg"
                    alt="Indépendance du Maroc 1956"
                    fill
                    className="object-cover grayscale rounded-2xl shadow-2xl hover-scale-subtle transition-smooth"
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">Photo issue du Fonds Flandrin, collection privée de la Fondation Banque Populaire</p>
                <TextToSpeechPlayer 
                  text="Après l'indépendance du Maroc, la fréquentation de l'église du Sacré-Cœur connaît une baisse progressive. Peu à peu, l'édifice perd sa fonction religieuse initiale, conséquence directe des transformations sociales et démographiques de la ville. Cependant, loin de tomber dans l'oubli, l'église acquiert un nouveau statut : celui de symbole patrimonial et culturel de Casablanca. Son architecture remarquable et sa place au cœur de la cité en font un lieu chargé d'histoire, témoin du passé colonial mais aussi de l'évolution urbaine et artistique du Maroc moderne."
                  title="Écouter l'histoire de 1956"
                />
              </div>
            </div>

            {/* 1976 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
                <div className="relative h-[500px]">
                  <Image 
                    src="/site-map-images/histoire-optimized/1A2_H1-4083_-037.jpg" 
                    alt="Espace culturel 1976" 
                    fill 
                    className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">Photo issue du Fonds Flandrin, collection privée de la Fondation Banque Populaire</p>
                <TextToSpeechPlayer 
                  text="L'église du Sacré-Cœur est officiellement désacralisée, marquant la fin de son usage religieux. Ce changement lui offre une nouvelle vie en tant qu'espace culturel et d'exposition, ouvert à la création et au dialogue artistique. Dès lors, le monument accueille divers événements tels que des concerts, des salons, des projections et de nombreuses manifestations culturelles. Ce renouveau transforme l'édifice en un lieu vivant et inclusif, où patrimoine et modernité se rencontrent, faisant du Sacré-Cœur un symbole de la vitalité culturelle de Casablanca."
                  title="Écouter l'histoire de 1976"
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
               
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">1976</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">Déconsécration et changement d'usage</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  L'église du Sacré-Cœur est officiellement désacralisée, marquant la fin de son usage religieux. Ce changement lui offre une nouvelle vie en tant qu'espace culturel et d'exposition, ouvert à la création et au dialogue artistique.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Dès lors, le monument accueille divers événements tels que des concerts, des salons, des projections et de nombreuses manifestations culturelles. Ce renouveau transforme l'édifice en un lieu vivant et inclusif, où patrimoine et modernité se rencontrent, faisant du Sacré-Cœur un symbole de la vitalité culturelle de Casablanca.
                </p>
              </div>
            </div>

            {/* 1990-2000 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
              
                <span className="font-serif text-7xl lg:text-9xl text-vibrant-pink block mb-6">1990-2000</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">Reconnaissance patrimoniale</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  Classée parmi les monuments emblématiques du patrimoine architectural de Casablanca, l'église du Sacré-Cœur occupe une place particulière dans l'histoire de la ville. Par sa structure audacieuse en béton armé et son style néo-gothique revisité, elle témoigne du génie architectural et de l'esprit novateur de son époque.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Son allure unique attire aujourd'hui architectes, chercheurs et visiteurs du monde entier, fascinés par l'harmonie entre tradition et modernité qu'incarne l'édifice. Véritable repère urbain et culturel, le Sacré-Cœur demeure un symbole fort du patrimoine casablancais et de la richesse de son héritage artistique.
                </p>
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="relative h-[500px]">
                  <Image 
                    src="/site-map-images/histoire-optimized/1A2_H1-4084_185P-038.jpg" 
                    alt="Patrimoine architectural" 
                    fill 
                    className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">Photo issue du Fonds Flandrin, collection privée de la Fondation Banque Populaire</p>
                <TextToSpeechPlayer 
                  text="Classée parmi les monuments emblématiques du patrimoine architectural de Casablanca, l'église du Sacré-Cœur occupe une place particulière dans l'histoire de la ville. Par sa structure audacieuse en béton armé et son style néo-gothique revisité, elle témoigne du génie architectural et de l'esprit novateur de son époque. Son allure unique attire aujourd'hui architectes, chercheurs et visiteurs du monde entier, fascinés par l'harmonie entre tradition et modernité qu'incarne l'édifice. Véritable repère urbain et culturel, le Sacré-Cœur demeure un symbole fort du patrimoine casablancais et de la richesse de son héritage artistique."
                  title="Écouter l'histoire de 1990-2000"
                />
              </div>
            </div>

            {/* 2010 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
                <div className="relative h-[500px]">
                  <Image 
                    src="/site-map-images/histoire-optimized/1B3_H1-3314-222.jpg" 
                    alt="Réhabilitation 2010" 
                    fill 
                    className="object-cover rounded-2xl shadow-2xl hover-scale-subtle transition-smooth" 
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-3 font-sans italic">Photo issue du Fonds Flandrin, collection privée de la Fondation Banque Populaire</p>
                <TextToSpeechPlayer 
                  text="Des travaux de restauration et de sécurisation sont entrepris afin de préserver l'église du Sacré-Cœur, fragilisée par le temps et les années d'exposition aux éléments. Ces interventions visent à sauvegarder la solidité de l'édifice tout en respectant son architecture d'origine, symbole fort du patrimoine casablancais. Parallèlement, une volonté claire émerge : celle de redonner vie à ce monument historique en le transformant en un véritable centre de créativité et de dialogue culturel. L'objectif est d'en faire un lieu ouvert à tous, où se rencontrent les arts, les idées et les générations, perpétuant ainsi l'esprit vivant et inspirant du Sacré-Cœur."
                  title="Écouter l'histoire de 2010"
                />
              </div>
              <div className="animate-gentle-fade-in stagger-1">
               
                <span className="font-serif text-7xl lg:text-9xl text-warm-terracotta block mb-6">2010</span>
                <h3 className="font-serif text-4xl lg:text-6xl text-charcoal mb-8">Début de la réhabilitation</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  Des travaux de restauration et de sécurisation sont entrepris afin de préserver l'église du Sacré-Cœur, fragilisée par le temps et les années d'exposition aux éléments. Ces interventions visent à sauvegarder la solidité de l'édifice tout en respectant son architecture d'origine, symbole fort du patrimoine casablancais.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  Parallèlement, une volonté claire émerge : celle de redonner vie à ce monument historique en le transformant en un véritable centre de créativité et de dialogue culturel. L'objectif est d'en faire un lieu ouvert à tous, où se rencontrent les arts, les idées et les générations, perpétuant ainsi l'esprit vivant et inspirant du Sacré-Cœur.
                </p>
              </div>
            </div>

            {/* Aujourd'hui */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-gentle-fade-in">
               
                <span className="font-serif text-6xl lg:text-7xl text-vibrant-pink block mb-6">Aujourd'hui</span>
                <h3 className="font-serif text-3xl lg:text-5xl text-charcoal mb-8">Renaissance d'un joyau patrimonial</h3>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable mb-4">
                  Le site du Sacré-Cœur renaît aujourd'hui comme un véritable centre culturel, artistique et touristique, symbole de la vitalité et du renouveau de Casablanca. Ce lieu emblématique se transforme en un espace de rencontre entre mémoire et modernité, où se croisent le patrimoine, l'art, l'innovation et la citoyenneté.
                </p>
                <p className="font-sans text-lg text-charcoal/70 leading-relaxed text-readable">
                  En accueillant expositions, événements culturels et initiatives créatives, la cathédrale s'inscrit désormais dans une démarche de valorisation durable du patrimoine casablancais. Elle incarne la volonté de préserver l'histoire tout en la réinventant, offrant à la ville un espace vivant, inspirant et ouvert sur le monde.
                </p>
              </div>
              <div className="animate-gentle-fade-in stagger-1">
                <div className="relative h-[600px]">
                  <Image 
                    src="/site-map-images/architecture-optimized/Eglise-du-Sacre-Coeur-2-1-461x1024.jpeg" 
                    alt="Le Sacré-Cœur aujourd'hui" 
                    fill 
                    className="object-contain rounded-2xl hover-scale-subtle transition-smooth" 
                  />
                </div>
                <TextToSpeechPlayer 
                  text="Le site du Sacré-Cœur renaît aujourd'hui comme un véritable centre culturel, artistique et touristique, symbole de la vitalité et du renouveau de Casablanca. Ce lieu emblématique se transforme en un espace de rencontre entre mémoire et modernité, où se croisent le patrimoine, l'art, l'innovation et la citoyenneté. En accueillant expositions, événements culturels et initiatives créatives, la cathédrale s'inscrit désormais dans une démarche de valorisation durable du patrimoine casablancais. Elle incarne la volonté de préserver l'histoire tout en la réinventant, offrant à la ville un espace vivant, inspirant et ouvert sur le monde."
                  title="Écouter l'histoire d'aujourd'hui"
                />
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
          <a
            href="/decouvrir/architecture"
            className="inline-block px-8 py-4 text-xs font-sans tracking-wider uppercase bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up rounded-lg"
          >
            Découvrir l'Architecture
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
