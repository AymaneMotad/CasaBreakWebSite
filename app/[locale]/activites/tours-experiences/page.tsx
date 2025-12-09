"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useLocale } from 'next-intl'
import { Compass, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ToursExperiencesPage() {
  const locale = useLocale()

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: "Activités", href: `/${locale}/activites/tours-experiences` },
              { label: "Tours & Expériences", href: `/${locale}/activites/tours-experiences` }
            ]} 
          />
        </div>
      </div>

      {/* Coming Soon Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-blue-50/40 to-rose-50/50" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00a346]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0066b2]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200/50 mb-6 shadow-sm animate-fade-in-up">
            <Compass className="w-4 h-4 text-[#00a346]" />
            <span className="text-sm text-gray-700 font-medium">Bientôt disponible</span>
          </div>
          
          {/* Icon */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#00a346]/20 to-[#0066b2]/20">
              <Clock className="w-12 h-12 text-[#00a346]" />
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-gradient-can">Tours & Expériences</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Nous préparons une collection exclusive de tours guidés et d'expériences uniques à Casablanca. 
            Revenez bientôt pour découvrir les meilleures aventures de la ville !
          </p>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href={`/${locale}/activites/sport-bien-etre`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#006633] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-[#00a346]/30 transition-all"
            >
              <span>Découvrir Sport & Bien-être</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl hover:shadow-xl border-2 border-gray-200 transition-all"
            >
              <span>Retour à l'accueil</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </main>
  )
}
