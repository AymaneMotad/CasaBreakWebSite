export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 lg:py-32 bg-forest text-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-off-white/60 mb-6">Architecture</p>
            <h2 className="font-serif font-light text-5xl lg:text-7xl text-off-white mb-8 leading-tight">
              Chef-d'œuvre architectural
            </h2>
            <p className="font-sans text-lg leading-relaxed text-off-white/80">
              Paul Tournon fusionne la grandeur européenne avec l'élégance marocaine dans cette cathédrale de 75 mètres
              de longueur, avec des tours jumelles s'élevant à 33 mètres.
            </p>
          </div>
          <div className="relative aspect-[4/3]">
            <img
              src="/sacre-coeur-cathedral-casablanca-interior-stained-.jpg"
              alt="Intérieur de la cathédrale"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-serif text-6xl text-off-white/20 mb-4">01</div>
            <h3 className="font-sans text-xl font-medium text-off-white mb-4 tracking-wide uppercase">Néo-Gothique</h3>
            <p className="font-sans leading-relaxed text-off-white/70">
              Traditions cathédrales européennes avec contreforts et nef élancée
            </p>
          </div>
          <div>
            <div className="font-serif text-6xl text-off-white/20 mb-4">02</div>
            <h3 className="font-sans text-xl font-medium text-off-white mb-4 tracking-wide uppercase">Art Déco</h3>
            <p className="font-sans leading-relaxed text-off-white/70">
              Formes géométriques et esthétique moderne des années 1930
            </p>
          </div>
          <div>
            <div className="font-serif text-6xl text-off-white/20 mb-4">03</div>
            <h3 className="font-sans text-xl font-medium text-off-white mb-4 tracking-wide uppercase">Marocain</h3>
            <p className="font-sans leading-relaxed text-off-white/70">
              Tours inspirées des minarets et détails arabo-andalous
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
