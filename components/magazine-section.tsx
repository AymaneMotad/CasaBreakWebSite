import { useTranslations } from 'next-intl'

export function MagazineSection() {
  const t = useTranslations('home.magazine')
  
  return (
    <section className="py-24 lg:py-32 bg-off-white relative overflow-hidden">
      {/* Subtle Moroccan decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative border */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#00a346]/50 to-transparent"></div>
        
        {/* Corner geometric accents */}
        <div className="absolute top-12 left-12 w-12 h-12 opacity-25">
          <svg viewBox="0 0 48 48" className="w-full h-full text-[#00a346]/50">
            <path d="M6 6 L42 6 L42 42 L6 42 Z M12 12 L36 12 L36 36 L12 36 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M18 18 L30 18 L30 30 L18 30 Z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>
        
        <div className="absolute top-12 right-12 w-12 h-12 opacity-25">
          <svg viewBox="0 0 48 48" className="w-full h-full text-[#c10000]/50">
            <path d="M6 6 L42 6 L42 42 L6 42 Z M12 12 L36 12 L36 36 L12 36 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M18 18 L30 18 L30 30 L18 30 Z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Side decorative lines */}
        <div className="absolute left-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-[#00a346]/25 to-transparent"></div>
        <div className="absolute right-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-[#c10000]/30 to-transparent"></div>
        
        {/* Bottom decorative pattern */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 opacity-20">
          <svg viewBox="0 0 128 32" className="w-full h-full text-[#00a346]/50">
            <path d="M8 16 Q32 4, 56 16 Q80 28, 104 16 Q112 12, 120 16" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="32" cy="16" r="2" fill="currentColor"/>
            <circle cx="64" cy="16" r="2" fill="currentColor"/>
            <circle cx="96" cy="16" r="2" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* First Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div className="animate-gentle-fade-in flex justify-center">
            <img
              src="/decouvrer/decouvrer-1.jpg"
              alt="Découvrir Casablanca avec CasaBreak"
              className="w-full h-[500px] object-cover rounded-xl hover-scale shadow-xl"
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
              src="/decouvrer/decouvrer-3.jpg"
              alt="Restaurants et cafés à Casablanca"
              className="w-full h-[500px] object-cover rounded-xl hover-scale shadow-xl"
            />
          </div>
        </div>

        {/* Third Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-slide-in-left stagger-2">
            <img
              src="/decouvrer/decouvrer-4.jpg"
              alt="Attractions et activités à Casablanca"
              className="w-full h-[500px] object-cover rounded-xl hover-scale shadow-xl"
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
