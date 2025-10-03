export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale opacity-60"
        >
          <source src="http://casaevents.ma/wp-content/uploads/2025/10/WhatsApp-Video-2025-10-02-at-11.13.41.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <img
            src="/sacre-coeur-cathedral-casablanca-white-art-deco-bu.jpg"
            alt="Ex Sacré Coeur Cathedral"
            className="w-full h-full object-cover grayscale opacity-60"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <div className="animate-gentle-fade-in">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-vibrant-pink/20 to-warm-terracotta/20 backdrop-blur-sm border border-off-white/20 rounded-full mb-8">
            <span className="text-off-white/90 text-sm font-sans tracking-wider uppercase">
              Patrimoine Culturel • Depuis 1930
            </span>
          </div>
        </div>
        
        <h1 className="font-serif font-normal text-6xl md:text-7xl lg:text-8xl text-off-white mb-6 leading-[0.95] tracking-tight animate-gentle-fade-in stagger-1 text-enhanced">
          A taste of Casablanca
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-off-white/80 max-w-2xl mx-auto leading-relaxed animate-gentle-fade-in stagger-2 text-readable mb-8">
          Découvrez l'Ex Sacré-Cœur, joyau architectural Art Déco au cœur de Casablanca. 
          Un monument historique transformé en centre culturel vibrant.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-gentle-fade-in stagger-3">
          <a
            href="/visiter/individuels"
            className="px-8 py-4 bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white text-sm font-sans tracking-wider uppercase hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md"
          >
            Découvrir
          </a>
          <a
            href="/decouvrir/histoire"
            className="px-8 py-4 bg-transparent border-2 border-off-white/30 text-off-white text-sm font-sans tracking-wider uppercase hover:bg-off-white/10 hover:border-off-white/50 transition-all duration-300 rounded-md"
          >
            Notre Histoire
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-gentle-fade-in stagger-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-off-white/30 to-transparent animate-gentle-pulse" />
          <div className="w-2 h-2 bg-off-white/60 rounded-full animate-gentle-pulse" />
        </div>
      </div>
    </section>
  )
}
