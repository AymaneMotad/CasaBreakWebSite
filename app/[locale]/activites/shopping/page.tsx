"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import type { Activity } from "@/lib/database.types"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function ShoppingPage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchActivities() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('activities')
          .select('*')
          .eq('category', 'shopping')
          .eq('is_published', true)
          .order('is_featured', { ascending: false })

        if (error) {
          console.error('Supabase error:', error)
          throw new Error(error.message || 'Failed to load shopping activities')
        }
        
        setActivities(data || [])
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to load shopping activities')
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("activities"), href: `/${locale}/activites/shopping` },
              { label: t("shopping"), href: `/${locale}/activites/shopping` }
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <div className="pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Shopping</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez les meilleures boutiques et centres commerciaux de Casablanca
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-2xl mb-4" />
                <div className="bg-gray-200 h-6 rounded w-3/4 mb-2" />
                <div className="bg-gray-200 h-4 rounded w-full" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-500 mb-4">Erreur: {error}</p>
            <p className="text-gray-500">Vérifiez que la base de données est configurée.</p>
          </div>
        ) : activities.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucune activité shopping trouvée.</p>
            <p className="text-gray-400 mt-2">Utilisez le script de scraping pour ajouter des activités.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <article 
                key={activity.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  {activity.main_image ? (
                    <img
                      src={activity.main_image}
                      alt={activity.name_fr}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center ${activity.main_image ? 'hidden absolute inset-0' : ''}`}>
                    <ShoppingBag className="w-16 h-16 text-gray-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {activity.name_fr}
                  </h2>
                  
                  {(activity.description_fr || activity.short_description_fr) && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {activity.description_fr || activity.short_description_fr}
                    </p>
                  )}

                  {/* Read More Button */}
                  <Link
                    href={`/${locale}/activites/shopping/${activity.slug}`}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
                  >
                    Lire la suite
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
