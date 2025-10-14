import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal/90 text-off-white py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/30 to-transparent"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-20 mb-20">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Image 
              src="/sacre-black.svg" 
              alt="l'Ex église Sacré-Cœur" 
              width={595} 
              height={393}
              className="h-24 w-auto mb-8"
              style={{ 
                filter: 'brightness(0) invert(1)',
                WebkitFilter: 'brightness(0) invert(1)'
              }}
            />
            <p className="font-sans text-base text-off-white/80 leading-relaxed mb-8">
              Monument historique Art Déco et espace culturel au cœur de Casablanca depuis 1930.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div>
                <h5 className="font-sans text-sm uppercase tracking-wider text-blue-400 mb-3">Adresse</h5>
                <p className="font-sans text-base text-off-white/90 leading-relaxed">
                  Angle rue d'Alger et boulevard Rachidi<br />
                  Quartier Gautier, Casablanca 20250
                </p>
              </div>
              <div>
                <h5 className="font-sans text-sm uppercase tracking-wider text-blue-400 mb-3">Contact</h5>
                <p className="font-sans text-base text-off-white/90 mb-2">Tél : +212 522 227 745</p>
                <p className="font-sans text-base text-off-white/90">contact@casaevents.ma</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h5 className="font-sans text-sm uppercase tracking-wider text-blue-400 mb-4">Suivez-nous</h5>
              <div className="flex gap-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-off-white/70 hover:text-blue-400 transition-colors p-2 hover:bg-off-white/5 rounded-lg"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/sacre_coeur_casa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-off-white/70 hover:text-vibrant-pink transition-colors p-2 hover:bg-off-white/5 rounded-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-off-white/70 hover:text-blue-400 transition-colors p-2 hover:bg-off-white/5 rounded-lg"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Accueil */}
          <div>
            <h4 className="font-sans text-base uppercase tracking-wider mb-8 text-blue-400">Accueil</h4>
            <ul className="space-y-4 font-sans text-base">
              <li>
                <a href="/" className="text-off-white/80 hover:text-off-white transition-colors">
                  Accueil
                </a>
              </li>
            </ul>
          </div>

          {/* Découvrir */}
          <div>
            <h4 className="font-sans text-base uppercase tracking-wider mb-8 text-blue-400">Découvrir</h4>
            <ul className="space-y-4 font-sans text-base">
              <li>
                <a href="/decouvrir/histoire" className="text-off-white/80 hover:text-off-white transition-colors">
                  Histoire
                </a>
              </li>
              <li>
                <a href="/decouvrir/architecture" className="text-off-white/80 hover:text-off-white transition-colors">
                  Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Visiter */}
          <div>
            <h4 className="font-sans text-base uppercase tracking-wider mb-8 text-blue-400">Visiter</h4>
            <ul className="space-y-4 font-sans text-base">
              <li>
                <a href="/visiter/individuels" className="text-off-white/80 hover:text-off-white transition-colors">
                  Individuels et familles
                </a>
              </li>
              <li>
                <a href="/visiter/groupes" className="text-off-white/80 hover:text-off-white transition-colors">
                  Groupes
                </a>
              </li>
            </ul>
          </div>

          {/* Événements */}
          <div>
            <h4 className="font-sans text-base uppercase tracking-wider mb-8 text-blue-400">Événements</h4>
            <ul className="space-y-4 font-sans text-base">
              <li>
                <a href="/evenements" className="text-off-white/80 hover:text-off-white transition-colors">
                  Nos Événements
                </a>
              </li>
            </ul>
          </div>

          {/* Réserver */}
          <div>
            <h4 className="font-sans text-base uppercase tracking-wider mb-8 text-blue-400">Réserver</h4>
            <ul className="space-y-4 font-sans text-base">
              <li>
                <a href="/reserver" className="text-off-white/80 hover:text-off-white transition-colors">
                  Réserver votre espace
                </a>
              </li>
              <li>
                <a href="https://tickets.sacrecoeur-casa.ma" target="_blank" rel="noopener noreferrer" className="text-off-white/80 hover:text-off-white transition-colors">
                  Billetterie
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-off-white/20">
          <div className="text-center">
            <p className="font-sans text-sm text-off-white/60 tracking-wide">
              © {new Date().getFullYear()} l'Ex église Sacré-Cœur Casablanca. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
