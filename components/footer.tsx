import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
      </div>
      
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 w-32 h-32 border border-slate-600/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-slate-600/15 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-slate-600/10 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-slate-600/15 rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        {/* Top section with logo and description */}
        <div className="mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            {/* Logo and description */}
            <div className="lg:max-w-md">
              <div className="mb-8">
                <Image 
                  src="/sacre-black.svg" 
                  alt="l'Ex église Sacré-Cœur" 
                  width={595} 
                  height={393}
                  className="h-20 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                Monument historique Art Déco et espace culturel au cœur de Casablanca depuis 1930. 
                Un lieu d'exception où l'histoire rencontre la modernité.
              </p>
            </div>

            {/* Contact information */}
            <div className="lg:max-w-sm">
              <h3 className="text-slate-200 text-xl font-semibold mb-6 tracking-wide">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Adresse</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Angle rue d'Alger et boulevard Rachidi<br />
                      Quartier Gautier, Casablanca 20250
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Téléphone</p>
                    <p className="text-slate-400 text-sm">+212 522 227 745</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Email</p>
                    <p className="text-slate-400 text-sm">contact@casaevents.ma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Accueil */}
          <div>
            <h4 className="text-slate-200 text-lg font-semibold mb-6 tracking-wide">Accueil</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  Accueil
                </a>
              </li>
            </ul>
          </div>

          {/* Découvrir */}
          <div>
            <h4 className="text-slate-200 text-lg font-semibold mb-6 tracking-wide">Découvrir</h4>
            <ul className="space-y-3">
              <li>
                <a href="/decouvrir/histoire" className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  Histoire
                </a>
              </li>
              <li>
                <a href="/decouvrir/architecture" className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Visiter */}
          <div>
            <h4 className="text-slate-200 text-lg font-semibold mb-6 tracking-wide">Visiter</h4>
            <ul className="space-y-3">
              <li>
                <a href="/visiter/individuels" className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  Individuels et familles
                </a>
              </li>
              <li>
                <a href="/visiter/groupes" className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  Groupes
                </a>
              </li>
            </ul>
          </div>

          {/* Événements & Réserver */}
          <div>
            <h4 className="text-slate-200 text-lg font-semibold mb-6 tracking-wide">Événements</h4>
            <ul className="space-y-3">
              <li>
                <a href="/evenements" className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  Nos Événements
                </a>
              </li>
              <li>
                <a href="/reserver" className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  Réserver votre espace
                </a>
              </li>
              <li>
                <a href="https://tickets.sacrecoeur-casa.ma" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  Billetterie
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social media and map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Social Media */}
          <div>
            <h4 className="text-slate-200 text-lg font-semibold mb-6 tracking-wide">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-700/40 hover:bg-blue-500/20 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sacre_coeur_casa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-700/40 hover:bg-pink-500/20 rounded-xl flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-700/40 hover:bg-blue-500/20 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-slate-200 text-lg font-semibold mb-6 tracking-wide">Localisation</h4>
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-slate-600/30 bg-slate-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.123456789!2d-7.620000!3d33.590000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d291010717e5%3A0x1f76295a86bb2f25!2sSacr%C3%A9%20Coeur%20Casablanca!5e0!3m2!1sen!2sma!4v1234567890!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de l'Ex église Sacré-Cœur"
                className="rounded-xl"
              />
            </div>
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/dir//sacr%C3%A9+coeur+casablanca/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xda7d291010717e5:0x1f76295a86bb2f25?sa=X&ved=1t:155782&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:gap-3"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-slate-700/50">
          <div className="text-center">
            <p className="text-slate-400 text-sm font-light">
              © {new Date().getFullYear()} l'Ex église Sacré-Cœur Casablanca. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
