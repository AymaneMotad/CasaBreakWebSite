import { useTranslations } from 'next-intl'

export function NewsletterSection() {
  const t = useTranslations('home.newsletter')
  
  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Moroccan Artistic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative border */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-vibrant-pink/40 to-transparent"></div>
        <div className="absolute top-3 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-warm-terracotta/30 to-transparent"></div>
        
        {/* Corner geometric patterns */}
        <div className="absolute top-16 left-16 w-8 h-8 opacity-20">
          <svg viewBox="0 0 32 32" className="w-full h-full text-vibrant-pink/40">
            <path d="M4 4 L28 4 L28 28 L4 28 Z M8 8 L24 8 L24 24 L8 24 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 12 L20 12 L20 20 L12 20 Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="absolute top-16 right-16 w-8 h-8 opacity-20">
          <svg viewBox="0 0 32 32" className="w-full h-full text-warm-terracotta/40">
            <path d="M4 4 L28 4 L28 28 L4 28 Z M8 8 L24 8 L24 24 L8 24 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 12 L20 12 L20 20 L12 20 Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        
        {/* Side decorative lines */}
        <div className="absolute left-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-vibrant-pink/25 to-transparent"></div>
        <div className="absolute right-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        
        {/* Center decorative pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-10 opacity-12">
          <svg viewBox="0 0 80 40" className="w-full h-full text-vibrant-pink/30">
            <path d="M8 20 Q20 10, 32 20 Q44 30, 56 20 Q64 16, 72 20" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="20" cy="20" r="1.5" fill="currentColor"/>
            <circle cx="40" cy="20" r="1.5" fill="currentColor"/>
            <circle cx="60" cy="20" r="1.5" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-24 h-6 opacity-10">
          <svg viewBox="0 0 96 24" className="w-full h-full text-warm-terracotta/30">
            <path d="M8 12 Q24 4, 40 12 Q56 20, 72 12 Q80 8, 88 12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="24" cy="12" r="1" fill="currentColor"/>
            <circle cx="48" cy="12" r="1" fill="currentColor"/>
            <circle cx="72" cy="12" r="1" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="font-serif font-normal text-5xl lg:text-6xl text-charcoal mb-6 animate-fade-in-up">
          {t("title")}
        </h2>
        <p className="font-sans text-lg text-charcoal/70 leading-relaxed mb-12 animate-fade-in-up stagger-1">
          {t("description")}
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-scale-in stagger-2">
          <input
            type="email"
            placeholder={t("placeholder")}
            className="flex-1 px-6 py-4 bg-off-white border border-charcoal/20 rounded-md font-sans text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal/40 transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-sans text-sm tracking-wide uppercase rounded-md hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap border-2 border-blue-600"
          >
            {t("subscribe")}
          </button>
        </form>
      </div>
    </section>
  )
}
