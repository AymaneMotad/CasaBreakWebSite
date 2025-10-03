import Image from "next/image"
import Link from "next/link"
import { GraduationCap, BookOpen, Camera, Palette, Users, Euro } from "lucide-react"

export default function EtudiantsPage() {
  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/students-sketching-cathedral-architecture-with-not.jpg" alt="Étudiants visitant" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-off-white mb-4 animate-fade-in-up text-balance">
            Visites Étudiantes
          </h1>
          <p className="font-sans text-sm md:text-base text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1">
            Apprendre et découvrir autrement
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] animate-fade-in-up">
            <Image
              src="/architecture-students-studying-cathedral-details.jpg"
              alt="Étudiants en architecture"
              fill
              className="object-cover shadow-2xl"
            />
          </div>
          <div className="animate-fade-in-up stagger-1">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
              Un lieu d'apprentissage unique
            </h2>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-6">
              Le Sacré-Cœur de Casablanca est un terrain d'étude exceptionnel pour les étudiants en architecture,
              histoire de l'art, patrimoine et photographie. Nous proposons des programmes éducatifs adaptés aux cursus
              universitaires et aux écoles d'art.
            </p>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-8">
              Bénéficiez de tarifs préférentiels et d'un accès privilégié pour vos projets académiques.
            </p>
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white">
              <p className="font-serif text-3xl mb-1">25 MAD</p>
              <p className="font-sans text-xs tracking-wider uppercase">Tarif étudiant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section className="bg-charcoal/5 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 text-center animate-fade-in-up">
            Programmes éducatifs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Architecture & Urbanisme",
                description: "Étude des styles néo-gothique et Art Déco, analyse structurelle, relevés architecturaux.",
                duration: "2-3 heures",
              },
              {
                icon: Palette,
                title: "Histoire de l'Art",
                description: "Vitraux, sculptures, fresques. Contexte artistique du début du XXe siècle.",
                duration: "2 heures",
              },
              {
                icon: BookOpen,
                title: "Patrimoine & Conservation",
                description:
                  "Techniques de restauration, préservation du patrimoine, gestion des monuments historiques.",
                duration: "2-3 heures",
              },
              {
                icon: Camera,
                title: "Photographie d'Architecture",
                description: "Techniques de prise de vue, jeux de lumière, composition architecturale.",
                duration: "3 heures",
              },
              {
                icon: Users,
                title: "Sociologie & Anthropologie",
                description: "Rôle social et culturel, diversité religieuse, patrimoine vivant.",
                duration: "2 heures",
              },
              {
                icon: BookOpen,
                title: "Histoire Coloniale",
                description: "Contexte historique, architecture coloniale, Casablanca au XXe siècle.",
                duration: "2 heures",
              },
            ].map((program, index) => (
              <div
                key={program.title}
                className={`bg-off-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
              >
                <program.icon className="h-10 w-10 text-vibrant-pink mb-4" />
                <h3 className="font-serif text-xl text-charcoal mb-3">{program.title}</h3>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">{program.description}</p>
                <p className="font-sans text-xs text-charcoal/50 uppercase tracking-wider">{program.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl text-charcoal mb-8">Avantages étudiants</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-vibrant-pink/10 flex items-center justify-center">
                  <Euro className="h-6 w-6 text-vibrant-pink" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal mb-2">Tarif préférentiel</h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                    25 MAD au lieu de 50 MAD sur présentation de la carte étudiante valide.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-vibrant-pink/10 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-vibrant-pink" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal mb-2">Autorisation photo</h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                    Droit de photographier et filmer pour vos projets académiques (usage non commercial).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-vibrant-pink/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-vibrant-pink" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal mb-2">Documentation</h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                    Accès aux archives, plans historiques et documentation technique pour vos recherches.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-vibrant-pink/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-vibrant-pink" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal mb-2">Visites de groupe</h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                    Tarifs spéciaux pour les classes et groupes universitaires avec guide spécialisé.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up stagger-1">
            <div className="relative h-[300px]">
              <Image
                src="/student-taking-notes-in-cathedral.jpg"
                alt="Étudiant prenant des notes"
                fill
                className="object-cover shadow-xl"
              />
            </div>
            <div className="relative h-[300px] mt-12">
              <Image src="/architecture-student-measuring-cathedral-details.jpg" alt="Étudiant mesurant" fill className="object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-off-white py-20">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 animate-fade-in-up">Organisez votre visite étudiante</h2>
          <p className="font-sans text-base text-off-white/80 leading-relaxed mb-10 animate-fade-in-up stagger-1">
            Contactez notre service éducatif pour organiser une visite adaptée à votre programme d'études.
          </p>
          <Link
            href="/reserver"
            className="inline-block px-12 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-sm font-sans tracking-wider uppercase hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up stagger-2"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
    </main>
  )
}
