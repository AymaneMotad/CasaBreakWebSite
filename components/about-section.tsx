export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-primary">
              A Cultural Monument
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Ex Sacré Cœur of Casablanca stands as a remarkable testament to 1930s Art Deco architecture.
                Designed by renowned French architect <strong>Paul Tournon</strong>, this building represents a unique
                fusion of European and Moroccan influences.
              </p>
              <p>
                Built between <strong>1930 and 1953</strong> during the French Protectorate, it served Casablanca's
                Catholic community until Morocco's independence in 1956. Though never officially a cathedral (as
                Casablanca is not a bishopric seat), it was deconsecrated and transformed into a vibrant{" "}
                <strong>cultural and exhibition center</strong>.
              </p>
              <p>
                Today, this historic building welcomes visitors with exhibitions, cultural events, and guided tours that
                showcase its exceptional architecture and fascinating history. With its clean lines, colorful stained
                glass, and imposing structure, Ex Sacré Cœur remains one of Casablanca's most photographed and admired
                monuments.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden border-2 border-primary/20">
              <img
                src="/art-deco-cathedral-interior-barrel-vault-archways-.jpg"
                alt="Interior of Ex Sacré Coeur showing barrel-vaulted nave"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
