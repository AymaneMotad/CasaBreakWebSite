"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import type { Activity } from "@/lib/database.types"
import { Star, Clock, MapPin, Sparkles, ArrowRight, Building, Church, Museum, ShoppingBag, TreePine, Map } from "lucide-react"
import { useTranslations, useLocale } from 'next-intl'

export default function IncontournablesPage() {
  const t = useTranslations('incontournables')
  const locale = useLocale()
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const featuredActivities = [
    {
      id: "hassan2",
      title: t("activities.hassan2.title"),
      description: t("activities.hassan2.description"),
      icon: Building,
      color: "#00a346"
    },
    {
      id: "sacrecoeur",
      title: t("activities.sacrecoeur.title"),
      description: t("activities.sacrecoeur.description"),
      icon: Church,
      color: "#0066b2"
    },
    {
      id: "judaisme",
      title: t("activities.judaisme.title"),
      description: t("activities.judaisme.description"),
      icon: Museum,
      color: "#c10000"
    },
    {
      id: "medina",
      title: t("activities.medina.title"),
      description: t("activities.medina.description"),
      icon: MapPin,
      color: "#00a346"
    },
    {
      id: "marche",
      title: t("activities.marche.title"),
      description: t("activities.marche.description"),
      icon: ShoppingBag,
      color: "#0066b2"
    },
    {
      id: "villa",
      title: t("activities.villa.title"),
      description: t("activities.villa.description"),
      icon: Museum,
      color: "#c10000"
    },
    {
      id: "parc",
      title: t("activities.parc.title"),
      description: t("activities.parc.description"),
      icon: TreePine,
      color: "#00a346"
    },
    {
      id: "place",
      title: t("activities.place.title"),
      description: t("activities.place.description"),
      icon: Map,
      color: "#0066b2"
    },
  ]

  useEffect(() => {
    async function fetchActivities() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('activities')
          .select('*')
          .eq('category', 'incontournables')
          .eq('is_published', true)
          .order('is_featured', { ascending: false })

        if (error) {
          console.error('Supabase error:', error)
          throw new Error(error.message || 'Failed to load activities')
        }
        
        setActivities(data || [])
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to load activities')
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: "Activités", href: `/${locale}/activites/incontournables` },
              { label: "Activités Incontournables", href: `/${locale}/activites/incontournables` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-blue-50/40 to-rose-50/50" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00a346]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0066b2]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200/50 mb-6 shadow-sm animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm text-gray-700 font-medium">Expériences Uniques</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient-can">{t("hero.title")}</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Activities Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featuredActivities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <div
                  key={activity.id}
                  className="group animate-fade-in-up bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${activity.color}15` }}
                  >
                    <IconComponent 
                      className="w-6 h-6" 
                      style={{ color: activity.color }}
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#00a346] transition-colors">
                    {activity.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {activity.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Database Activities Section */}
      {activities.length > 0 && (
        <section className="py-12 relative overflow-hidden bg-white/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Autres Activités</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity) => (
                <article 
                  key={activity.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    {activity.main_image ? (
                      <Image
                        src={activity.main_image}
                        alt={activity.name_fr}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                        <span className="text-6xl">🎯</span>
                      </div>
                    )}
                    
                    {activity.is_featured && (
                      <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ⭐ Recommandé
                      </div>
                    )}
                    
                    {activity.price_range && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                        {activity.price_range}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {activity.name_fr}
                    </h2>
                    
                    {activity.short_description_fr && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {activity.short_description_fr}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      {activity.duration_minutes && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{Math.floor(activity.duration_minutes / 60)}h {activity.duration_minutes % 60}min</span>
                        </div>
                      )}
                      {activity.price_from && (
                        <div className="flex items-center gap-1">
                          <span>À partir de {activity.price_from} {activity.currency || 'MAD'}</span>
                        </div>
                      )}
                    </div>

                    {activity.average_rating > 0 && (
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-medium">{activity.average_rating}</span>
                        <span className="text-gray-400 text-sm">({activity.review_count} avis)</span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {loading && activities.length === 0 && (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-2xl mb-4" />
                <div className="bg-gray-200 h-6 rounded w-3/4 mb-2" />
                <div className="bg-gray-200 h-4 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      )}

      {error && activities.length === 0 && (
        <div className="text-center py-20">
          <p className="text-red-500 mb-4">Erreur: {error}</p>
        </div>
      )}

      <Footer />
    </main>
  )
}
