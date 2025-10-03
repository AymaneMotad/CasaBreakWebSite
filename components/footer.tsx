export function Footer() {
  return (
    <footer className="bg-off-white text-charcoal py-16 lg:py-20 border-t border-charcoal/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl font-normal mb-4">Ex Sacré-Cœur</h3>
          <p className="font-sans text-sm text-charcoal/60 max-w-md mx-auto">
            Monument historique et espace culturel au cœur de Casablanca
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
            </svg>
          </a>
        </div>

        <div className="text-center">
          <p className="font-sans text-xs text-charcoal/50 tracking-wide">
            © {new Date().getFullYear()} Ex Sacré-Cœur Casablanca. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
