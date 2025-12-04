import { useTranslations } from 'next-intl'

export function MagazineSection() {
  const t = useTranslations('home.magazine')
  
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* First Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div className="animate-gentle-fade-in flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Casablanca_Hassan_II_Mosque.jpg"
              alt="Découvrir Casablanca avec CasaBreak"
              className="w-full h-[500px] object-cover rounded-xl hover-scale shadow-xl"
              unoptimized
              onError={(e) => {
                e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Casablanca_Hassan_II_Mosque.jpg/800px-Casablanca_Hassan_II_Mosque.jpg"
              }}
            />
          </div>
          <div className="animate-gentle-fade-in stagger-1">
            <h2 className="font-serif font-normal text-4xl lg:text-5xl text-charcoal mb-6 leading-tight text-enhanced">
              {t("title1")}
            </h2>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed mb-4 text-readable">
              {t("description1")}
            </p>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed text-readable">
              {t("description1b")}
            </p>
          </div>
        </div>

        {/* Second Block - Text Left, Image Right (Offset) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 lg:pl-20">
          <div className="order-2 lg:order-1 animate-slide-in-left stagger-1">
            <h2 className="font-serif font-normal text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              {t("title2")}
            </h2>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed mb-4">
              {t("description2")}
            </p>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed">
              {t("description2b")}
            </p>
          </div>
          <div className="order-1 lg:order-2 animate-slide-in-right stagger-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Rick%27s_Cafe_Casablanca.jpg"
              alt="Restaurants et cafés à Casablanca - Rick's Café"
              className="w-full h-[500px] object-cover rounded-xl hover-scale shadow-xl"
              unoptimized
              onError={(e) => {
                e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Rick%27s_Cafe_Casablanca.jpg/800px-Rick%27s_Cafe_Casablanca.jpg"
              }}
            />
          </div>
        </div>

        {/* Third Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-slide-in-left stagger-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Casablanca_Twin_Center.jpg"
              alt="Attractions et activités à Casablanca - Twin Center"
              className="w-full h-[500px] object-cover rounded-xl hover-scale shadow-xl"
              unoptimized
              onError={(e) => {
                e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Casablanca_Twin_Center.jpg/800px-Casablanca_Twin_Center.jpg"
              }}
            />
          </div>
          <div className="animate-slide-in-right stagger-2">
            <h2 className="font-serif font-normal text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              {t("title3")}
            </h2>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed mb-4">
              {t("description3")}
            </p>
            <p className="font-sans text-base lg:text-lg text-charcoal/70 leading-relaxed">
              {t("description3b")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
