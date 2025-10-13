import Image from "next/image"
import Link from "next/link"
import { Accessibility, Eye, Ear, Heart, MapPin, Phone } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function HandicapesPage() {
  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb items={[
            { label: "Visiter", href: "/visiter/individuels" },
            { label: "Visiteurs à mobilité réduite", href: "/visiter/handicapes" }
          ]} />
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/accessible-cathedral-entrance-with-wheelchair-ramp.jpg" alt="Accessibilité" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-off-white mb-4 animate-fade-in-up text-balance">
            Accessibilité
          </h1>
          <p className="font-sans text-sm md:text-base text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1">
            Un patrimoine accessible à tous
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] animate-fade-in-up">
            <Image
              src="/wheelchair-accessible-cathedral-interior-with-ramp.jpg"
              alt="Intérieur accessible"
              fill
              className="object-cover shadow-2xl"
            />
          </div>
          <div className="animate-fade-in-up stagger-1">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">Accessibilité pour tous</h2>
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white mb-8 shadow-lg">
              <p className="font-serif text-4xl mb-1">Gratuit</p>
              <p className="font-sans text-xs tracking-wider uppercase">Entrée gratuite</p>
            </div>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-6">
              L'entrée est gratuite pour les visiteurs à mobilité réduite.
              Le parcours de visite a été conçu pour être accessible à tous, afin que chacun puisse profiter pleinement de la découverte du monument.
            </p>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed">
              L'Ex église Sacré-Cœur de Casablanca s'engage à offrir une expérience de visite complète et enrichissante à tous les visiteurs, quelles que soient leurs capacités.
              Nous proposons des dispositifs adaptés pour les personnes à mobilité réduite, malvoyantes, malentendantes et avec déficience cognitive.
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="bg-charcoal/5 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 text-center animate-fade-in-up">
            Nos équipements adaptés
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Accessibility,
                title: "Mobilité réduite",
                features: [
                  "Rampes d'accès à tous les niveaux",
                  "Ascenseurs spacieux",
                  "Fauteuils roulants disponibles gratuitement",
                  "Toilettes PMR à chaque étage",
                  "Places de parking réservées",
                  "Parcours sans obstacles",
                ],
              },
              {
                icon: Eye,
                title: "Déficience visuelle",
                features: [
                  "Visites tactiles guidées",
                  "Maquettes en relief",
                  "Audioguides descriptifs détaillés",
                  "Chiens guides acceptés",
                  "Bandes podotactiles",
                  "Signalétique en braille",
                ],
              },
              {
                icon: Ear,
                title: "Déficience auditive",
                features: [
                  "Visites en langue des signes (LSF/LSM)",
                  "Boucles magnétiques",
                  "Supports visuels et écrits",
                  "Vidéos sous-titrées",
                  "Guides formés à la communication",
                  "Application mobile avec transcriptions",
                ],
              },
              {
                icon: Heart,
                title: "Déficience cognitive",
                features: [
                  "Visites adaptées FALC*",
                  "Parcours simplifié",
                  "Supports visuels clairs",
                  "Rythme personnalisé",
                  "Espaces de repos calmes",
                  "Accompagnateurs formés",
                ],
              },
              {
                icon: MapPin,
                title: "Orientation",
                features: [
                  "Plans simplifiés disponibles",
                  "Signalétique claire et visible",
                  "Points d'information réguliers",
                  "Application mobile avec GPS",
                  "Personnel disponible partout",
                  "Zones de repos identifiées",
                ],
              },
              {
                icon: Phone,
                title: "Assistance",
                features: [
                  "Service d'accompagnement gratuit",
                  "Réservation prioritaire",
                  "Contact dédié avant visite",
                  "Personnel formé et attentif",
                  "Aide à la mobilité",
                  "Support personnalisé",
                ],
              },
            ].map((category, index) => (
              <div
                key={category.title}
                className={`bg-off-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
              >
                <category.icon className="h-10 w-10 text-vibrant-pink mb-4" />
                <h3 className="font-serif text-xl text-charcoal mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.features.map((feature) => (
                    <li key={feature} className="text-sm font-sans text-charcoal/70 flex items-start gap-2">
                      <span className="text-vibrant-pink mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs font-sans text-charcoal/50 text-center mt-8">*FALC : Facile À Lire et à Comprendre</p>
        </div>
      </section>

      {/* Specialized Tours */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 text-center animate-fade-in-up">
          Visites spécialisées
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-charcoal/5 p-10 animate-fade-in-up">
            <h3 className="font-serif text-2xl text-charcoal mb-4">Visite Tactile</h3>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-6">
              Pour les personnes aveugles ou malvoyantes. Découverte par le toucher des éléments architecturaux,
              sculptures et maquettes. Durée : 1 heure.
            </p>
            <ul className="space-y-2 mb-6 font-sans text-sm text-charcoal/70">
              <li className="flex items-start gap-2">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Maquettes en relief de l'Ex Église Sacré-Cœur</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Exploration tactile des sculptures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Descriptions audio détaillées</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Guide spécialisé</span>
              </li>
            </ul>
            <p className="font-serif text-2xl text-vibrant-pink mb-4">Gratuit</p>
            <Link
              href="/reserver"
              className="block text-center px-8 py-4 bg-charcoal text-off-white text-xs font-sans tracking-wider uppercase hover:bg-charcoal/90 transition-colors"
            >
              Réserver
            </Link>
          </div>

          <div className="bg-charcoal/5 p-10 animate-fade-in-up stagger-1">
            <h3 className="font-serif text-2xl text-charcoal mb-4">Visite LSF</h3>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-6">
              Visite guidée en Langue des Signes Française et Marocaine. Découverte complète de l'histoire et de
              l'architecture. Durée : 1h.
            </p>
            <ul className="space-y-2 mb-6 font-sans text-sm text-charcoal/70">
              <li className="flex items-start gap-2">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Guide sourd ou interprète certifié</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Supports visuels adaptés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Vidéos sous-titrées</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vibrant-pink mt-1">•</span>
                <span>Groupe limité à 15 personnes</span>
              </li>
            </ul>
            <p className="font-serif text-2xl text-vibrant-pink mb-4">Gratuit</p>
            <Link
              href="/reserver"
              className="block text-center px-8 py-4 bg-charcoal text-off-white text-xs font-sans tracking-wider uppercase hover:bg-charcoal/90 transition-colors"
            >
              Réserver
            </Link>
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="bg-charcoal text-off-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center animate-fade-in-up">
            Préparez votre visite
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h3 className="font-serif text-2xl mb-6">Avant votre visite</h3>
              <div className="space-y-4 font-sans text-sm text-off-white/80 leading-relaxed">
                <p>
                  <strong className="text-off-white">Réservation recommandée :</strong> Contactez-nous 48h à l'avance
                  pour organiser votre visite et préparer les équipements nécessaires.
                </p>
                <p>
                  <strong className="text-off-white">Documents :</strong> Carte d'invalidité ou certificat médical pour
                  bénéficier de la gratuité.
                </p>
                <p>
                  <strong className="text-off-white">Accompagnateurs :</strong> Entrée gratuite pour un accompagnateur
                  par visiteur à mobilité réduite.
                </p>
                <p>
                  <strong className="text-off-white">Matériel personnel :</strong> Vous pouvez apporter votre propre
                  fauteuil roulant, déambulateur ou canne.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up stagger-1">
              <h3 className="font-serif text-2xl mb-6">Contact accessibilité</h3>
              <div className="space-y-4 font-sans text-sm text-off-white/80">
                <p>
                  <strong className="text-off-white">Téléphone :</strong>
                  <br />
                  +212 522 27 45 78
                </p>
                <p>
                  <strong className="text-off-white">Email :</strong>
                  <br />
                  accessibilite@sacrecoeur-casa.ma
                </p>
                <p>
                  <strong className="text-off-white">Horaires :</strong>
                  <br />
                  Lundi - Vendredi : 9h - 17h
                </p>
              </div>
              <Link
                href="/reserver"
                className="block mt-8 text-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-sans tracking-wider uppercase hover:shadow-2xl transition-all rounded-lg"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-[1000px] mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-charcoal mb-8 animate-fade-in-up">Certifications et labels</h2>
        <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-8 animate-fade-in-up stagger-1">
          L'Ex église Sacré-Cœur de Casablanca est labellisé "Tourisme & Handicap" pour les quatre types de déficiences (motrice,
          visuelle, auditive, cognitive). Nous sommes régulièrement audités pour maintenir nos standards d'accessibilité.
        </p>
      </section>
      <Footer />
    </main>
  )
}
