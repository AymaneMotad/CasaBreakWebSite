import Image from "next/image"
import Link from "next/link"
import { Calendar, Phone } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function GroupesPage() {
  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb items={[
            { label: "Visiter", href: "/visiter/individuels" },
            { label: "Groupes", href: "/visiter/groupes" }
          ]} />
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/large-group-tour-inside-cathedral-with-guide.jpg" alt="Visite de groupe" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-off-white mb-4 animate-fade-in-up text-balance">
            Visites de Groupe
          </h1>
          <p className="font-sans text-sm md:text-base text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1">
            Découvrez ensemble le patrimoine
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
              Découvrez l'Ex Église Sacré-Cœur en groupe
            </h2>
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white mb-8 shadow-lg">
              <p className="font-serif text-4xl mb-1">35 MAD</p>
              <p className="font-sans text-xs tracking-wider uppercase">Par personne (plus de 10 personnes)</p>
            </div>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-6">
              Vous souhaitez découvrir l'Ex Église Sacré-Cœur entre amis ou en petit groupe (plus de 10 personnes) ? 
              Profitez d'une visite libre ou accompagnée, selon vos envies, pour explorer l'histoire, l'architecture et la symbolique de ce monument emblématique de Casablanca.
            </p>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed">
              Choisissez le parcours qui vous correspond le mieux, prenez le temps d'admirer les vitraux, les volumes et la lumière, et laissez-vous porter par la magie du lieu.
            </p>
          </div>
          <div className="relative h-[500px] animate-fade-in-up stagger-1">
            <Image src="/tour-guide-explaining-cathedral-architecture-to-gr.jpg" alt="Guide avec groupe" fill className="object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl text-charcoal mb-8">Informations pratiques</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-3">Réservation</h3>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                  Les visites de groupe doivent être réservées au moins 2 semaines à l'avance. Contactez-nous par
                  téléphone ou via notre formulaire en ligne pour organiser votre visite.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-3">Horaires disponibles</h3>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                  Mardi - Dimanche : 9h00 - 18h00
                  <br />
                  Créneaux : 9h, 11h, 14h, 16h
                  <br />
                  Fermé le lundi
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-3">Langues disponibles</h3>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                  Français, Arabe, Anglais, Espagnol
                  <br />
                  Autres langues sur demande
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-3">Services additionnels</h3>
                <ul className="space-y-2 font-sans text-sm text-charcoal/70">
                  <li>• Audioguides multilingues</li>
                  <li>• Espace de restauration privatisable</li>
                  <li>• Boutique de souvenirs</li>
                  <li>• Parking pour autocars</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-8 animate-fade-in-up stagger-1">
            <div className="bg-charcoal/5 p-8">
              <h3 className="font-serif text-2xl text-charcoal mb-6">Contactez-nous</h3>
              <div className="space-y-4 font-sans text-sm text-charcoal/70">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-vibrant-pink mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Téléphone</p>
                    <p>+212 522 27 45 78</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-vibrant-pink mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <p>groupes@sacrecoeur-casa.ma</p>
                  </div>
                </div>
              </div>
              <Link
                href="/reserver"
                className="block mt-8 text-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-sans tracking-wider uppercase hover:shadow-xl transition-all rounded-lg"
              >
                Demander un devis
              </Link>
            </div>
            <div className="relative h-[300px]">
              <Image src="/happy-group-photo-in-front-of-cathedral.jpg" alt="Groupe satisfait" fill className="object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
