import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif font-normal text-5xl lg:text-6xl text-charcoal mb-6 animate-fade-in-up">
          Tarif pour la visite de l'espace sacré coeur
        </h2>
        <p className="font-sans text-lg text-charcoal/60 mb-16 animate-fade-in-up stagger-1">
          Accédez à l'un des plus beaux monuments de Casablanca
        </p>

        <div className="max-w-md mx-auto bg-cream border border-charcoal/10 rounded-2xl p-10 animate-scale-in stagger-2">
          <div className="mb-8">
            <div className="font-serif text-7xl text-charcoal mb-2">50 MAD</div>
            <p className="font-sans text-sm text-charcoal/60 uppercase tracking-wide">Par personne</p>
          </div>

          <div className="space-y-4 mb-10 text-left">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-terracotta flex-shrink-0" />
              <span className="font-sans text-charcoal/80">Accès à tous les espaces</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-terracotta flex-shrink-0" />
              <span className="font-sans text-charcoal/80">Visite libre ou guidée</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-terracotta flex-shrink-0" />
              <span className="font-sans text-charcoal/80">Documentation historique</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-terracotta flex-shrink-0" />
              <span className="font-sans text-charcoal/80">Photographie autorisée</span>
            </div>
          </div>

          <button className="w-full px-8 py-4 bg-charcoal text-off-white font-sans text-sm tracking-wide uppercase rounded-md hover:bg-charcoal/90 transition-all duration-300 hover:scale-105">
            Acheter un billet
          </button>
        </div>
      </div>
    </section>
  )
}
