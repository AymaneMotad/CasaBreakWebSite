import Image from "next/image"
import Link from "next/link"
import { Ticket, Clock, Calendar, Users, CreditCard, Smartphone } from "lucide-react"

export default function TicketPage() {
  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image src="/placeholder.svg?height=900&width=1600" alt="Billets" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-vibrant-pink/40 to-warm-terracotta/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-6xl md:text-8xl text-off-white mb-6 animate-fade-in-up text-balance">
            Billets
          </h1>
          <p className="font-sans text-base md:text-lg text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1">
            Réservez votre visite en ligne
          </p>
        </div>
      </section>

      {/* Ticket Options */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 text-center animate-fade-in-up">
          Choisissez votre billet
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Visite Libre",
              price: "50 MAD",
              duration: "Durée libre",
              features: ["Accès à la cathédrale", "Audioguide inclus", "Accès aux tours", "Valable toute la journée"],
            },
            {
              title: "Visite Guidée",
              price: "80 MAD",
              duration: "1h30",
              features: ["Guide expert", "Groupe limité à 20", "Histoire et architecture", "Accès zones privées"],
              featured: true,
            },
            {
              title: "Étudiant",
              price: "25 MAD",
              duration: "Durée libre",
              features: ["Carte étudiante requise", "Audioguide inclus", "Accès complet", "Documentation"],
            },
            {
              title: "Senior (60+)",
              price: "35 MAD",
              duration: "Durée libre",
              features: ["Visite à votre rythme", "Sièges disponibles", "Boisson offerte", "Assistance"],
            },
          ].map((ticket, index) => (
            <div
              key={ticket.title}
              className={`bg-off-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up stagger-${index + 1} ${
                ticket.featured ? "ring-2 ring-vibrant-pink transform lg:scale-110" : ""
              }`}
            >
              {ticket.featured && (
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-xs font-sans tracking-wider uppercase mb-4">
                  Populaire
                </div>
              )}
              <h3 className="font-serif text-2xl text-charcoal mb-2">{ticket.title}</h3>
              <p className="font-serif text-4xl text-vibrant-pink mb-2">{ticket.price}</p>
              <p className="font-sans text-xs text-charcoal/50 uppercase tracking-wider mb-6">{ticket.duration}</p>
              <ul className="space-y-3 mb-8">
                {ticket.features.map((feature) => (
                  <li key={feature} className="text-sm font-sans text-charcoal/70 flex items-start gap-2">
                    <span className="text-vibrant-pink mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-xs font-sans tracking-wider uppercase hover:shadow-xl transition-all">
                Acheter
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How to Book */}
      <section className="bg-charcoal/5 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 text-center animate-fade-in-up">
            Comment réserver
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Choisissez votre billet",
                description: "Sélectionnez le type de visite qui vous convient et le nombre de billets.",
              },
              {
                step: "2",
                title: "Sélectionnez la date",
                description: "Choisissez votre date et créneau horaire préféré parmi les disponibilités.",
              },
              {
                step: "3",
                title: "Payez en ligne",
                description: "Paiement sécurisé par carte bancaire. Recevez vos billets par email instantanément.",
              },
            ].map((step, index) => (
              <div key={step.step} className={`text-center animate-fade-in-up stagger-${index + 1}`}>
                <div className="w-16 h-16 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white font-serif text-2xl flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-4">{step.title}</h3>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 py-20">
        <div className="bg-gradient-to-br from-vibrant-pink to-warm-terracotta p-10 lg:p-16 text-off-white">
          <h2 className="font-serif text-4xl mb-8 text-center animate-fade-in-up">Réservation rapide</h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-1">
                <label className="block font-sans text-xs uppercase tracking-wider mb-2">Type de billet</label>
                <select className="w-full px-4 py-4 bg-off-white text-charcoal font-sans text-sm focus:outline-none focus:ring-2 focus:ring-off-white">
                  <option>Visite Libre - 50 MAD</option>
                  <option>Visite Guidée - 80 MAD</option>
                  <option>Étudiant - 25 MAD</option>
                  <option>Senior (60+) - 35 MAD</option>
                </select>
              </div>

              <div className="animate-fade-in-up stagger-2">
                <label className="block font-sans text-xs uppercase tracking-wider mb-2">Nombre de billets</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-full pl-12 pr-4 py-4 bg-off-white text-charcoal font-sans text-sm focus:outline-none focus:ring-2 focus:ring-off-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-3">
                <label className="block font-sans text-xs uppercase tracking-wider mb-2">Date de visite</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 bg-off-white text-charcoal font-sans text-sm focus:outline-none focus:ring-2 focus:ring-off-white"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-4">
                <label className="block font-sans text-xs uppercase tracking-wider mb-2">Créneau horaire</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <select className="w-full pl-12 pr-4 py-4 bg-off-white text-charcoal font-sans text-sm focus:outline-none focus:ring-2 focus:ring-off-white">
                    <option>09:00 - 10:30</option>
                    <option>11:00 - 12:30</option>
                    <option>14:00 - 15:30</option>
                    <option>16:00 - 17:30</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-off-white/10 p-6 animate-fade-in-up stagger-5">
              <div className="flex justify-between items-center mb-2">
                <span className="font-sans text-sm">Sous-total</span>
                <span className="font-serif text-xl">50 MAD</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-off-white/20">
                <span className="font-sans text-base uppercase tracking-wider">Total</span>
                <span className="font-serif text-3xl">50 MAD</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-12 py-5 bg-charcoal text-off-white text-sm font-sans tracking-[0.15em] uppercase hover:bg-charcoal/90 transition-all animate-fade-in-up stagger-6"
            >
              Procéder au paiement
            </button>
          </form>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="bg-charcoal text-off-white py-20">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-8 animate-fade-in-up">Moyens de paiement acceptés</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-fade-in-up stagger-1">
            <CreditCard className="h-12 w-12 text-off-white/60" />
            <Smartphone className="h-12 w-12 text-off-white/60" />
            <Ticket className="h-12 w-12 text-off-white/60" />
          </div>
          <p className="font-sans text-sm text-off-white/70 leading-relaxed animate-fade-in-up stagger-2">
            Paiement 100% sécurisé • Cartes bancaires • Mobile money • Billets électroniques
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 py-20">
        <h2 className="font-serif text-4xl text-charcoal mb-12 text-center animate-fade-in-up">Questions fréquentes</h2>
        <div className="space-y-6">
          {[
            {
              q: "Puis-je annuler ou modifier ma réservation ?",
              a: "Oui, vous pouvez annuler ou modifier votre réservation jusqu'à 24h avant la date de visite pour un remboursement complet.",
            },
            {
              q: "Les billets sont-ils nominatifs ?",
              a: "Non, les billets ne sont pas nominatifs. Vous pouvez les transférer à une autre personne si nécessaire.",
            },
            {
              q: "Faut-il imprimer les billets ?",
              a: "Non, vous pouvez présenter vos billets électroniques directement depuis votre smartphone à l'entrée.",
            },
            {
              q: "Y a-t-il des réductions pour les groupes ?",
              a: "Oui, nous proposons des tarifs préférentiels pour les groupes de 10 personnes et plus. Contactez-nous pour un devis.",
            },
          ].map((faq, index) => (
            <div key={faq.q} className={`bg-charcoal/5 p-6 animate-fade-in-up stagger-${index + 1}`}>
              <h3 className="font-serif text-lg text-charcoal mb-3">{faq.q}</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 animate-fade-in-up">Besoin d'aide ?</h2>
          <p className="font-sans text-base mb-10 animate-fade-in-up stagger-1">
            Notre équipe est disponible pour répondre à toutes vos questions
          </p>
          <Link
            href="/reserver"
            className="inline-block px-12 py-4 bg-charcoal text-off-white text-sm font-sans tracking-wider uppercase hover:bg-charcoal/90 transition-colors animate-fade-in-up stagger-2"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </main>
  )
}
