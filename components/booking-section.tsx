import { Calendar, Clock, MapPin } from "lucide-react"
import { useTranslations } from 'next-intl'

export function BookingSection() {
  const t = useTranslations('home.booking')
  
  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Moroccan Artistic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative border */}
        <div className="absolute top-0 left-1/6 right-1/6 h-1 bg-gradient-to-r from-transparent via-blue-500/35 to-transparent"></div>
        <div className="absolute top-3 left-1/5 right-1/5 h-px bg-gradient-to-r from-transparent via-warm-terracotta/35 to-transparent"></div>
        
        {/* Corner geometric patterns */}
        <div className="absolute top-16 left-20 w-12 h-12 opacity-22">
          <svg viewBox="0 0 48 48" className="w-full h-full text-vibrant-pink/45">
            <path d="M6 6 L42 6 L42 42 L6 42 Z M12 12 L36 12 L36 36 L12 36 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M18 18 L30 18 L30 30 L18 30 Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="absolute top-16 right-20 w-12 h-12 opacity-22">
          <svg viewBox="0 0 48 48" className="w-full h-full text-warm-terracotta/45">
            <path d="M6 6 L42 6 L42 42 L6 42 Z M12 12 L36 12 L36 36 L12 36 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M18 18 L30 18 L30 30 L18 30 Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        
        {/* Side decorative lines */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/28 to-transparent"></div>
        <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-warm-terracotta/28 to-transparent"></div>
        
        {/* Center decorative pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-14 opacity-16">
          <svg viewBox="0 0 112 56" className="w-full h-full text-blue-500/30">
            <path d="M8 28 Q28 14, 48 28 Q68 42, 88 28 Q96 24, 104 28" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="28" cy="28" r="2" fill="currentColor"/>
            <circle cx="56" cy="28" r="2" fill="currentColor"/>
            <circle cx="84" cy="28" r="2" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-8 opacity-14">
          <svg viewBox="0 0 128 32" className="w-full h-full text-warm-terracotta/35">
            <path d="M8 16 Q32 4, 56 16 Q80 28, 104 16 Q112 12, 120 16" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="32" cy="16" r="1.5" fill="currentColor"/>
            <circle cx="64" cy="16" r="1.5" fill="currentColor"/>
            <circle cx="96" cy="16" r="1.5" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif font-normal text-5xl lg:text-6xl text-charcoal mb-8 leading-tight">
              {t("title")}
            </h2>
            <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-8">
            {t("description")}
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-terracotta mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-sans font-medium text-charcoal mb-1">{t("features.calendar.title")}</h3>
                  <p className="font-sans text-sm text-charcoal/60">{t("features.calendar.description")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-terracotta mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-sans font-medium text-charcoal mb-1">{t("features.instant.title")}</h3>
                  <p className="font-sans text-sm text-charcoal/60">{t("features.instant.description")}</p>
                </div>
              </div>
            </div>

            <a
              href="https://casawe.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#c10000] text-white font-sans text-sm tracking-wide uppercase rounded-md hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg font-bold"
            >
              {t("bookNow")}
            </a>
          </div>

            <div className="animate-gentle-scale stagger-1 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/casawee.png"
                  alt="Plateforme de réservation CasaBreak"
                  className="w-[400px] h-[600px] lg:w-[450px] lg:h-[650px] object-cover rounded-[3rem] shadow-2xl hover-scale-subtle transition-smooth"
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
