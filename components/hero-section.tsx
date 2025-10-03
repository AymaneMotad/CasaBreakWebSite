export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/sacre-coeur-cathedral-casablanca-white-art-deco-bu.jpg"
          alt="Ex Sacré Coeur Cathedral"
          className="w-full h-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h1 className="font-serif font-normal text-6xl md:text-7xl lg:text-8xl text-off-white mb-6 leading-[0.95] tracking-tight animate-fade-in-up">
          A taste of Casablanca
        </h1>
        <p className="font-sans text-base md:text-lg text-off-white/80 max-w-xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
          Découvrez l'Ex Sacré-Cœur, joyau architectural Art Déco au cœur de Casablanca
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-fade-in stagger-2">
        <div className="w-px h-20 bg-off-white/30" />
      </div>
    </section>
  )
}
