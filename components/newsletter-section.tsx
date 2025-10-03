export function NewsletterSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif font-normal text-5xl lg:text-6xl text-charcoal mb-6 animate-fade-in-up">
          Rejoignez-nous
        </h2>
        <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-12 animate-fade-in-up stagger-1">
          Inscrivez-vous à notre newsletter pour recevoir les dernières actualités sur nos événements, expositions et
          activités culturelles au Sacré-Cœur de Casablanca.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-scale-in stagger-2">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 px-6 py-4 bg-off-white border border-charcoal/20 rounded-md font-sans text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal/40 transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-charcoal text-off-white font-sans text-sm tracking-wide uppercase rounded-md hover:bg-charcoal/90 transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  )
}
