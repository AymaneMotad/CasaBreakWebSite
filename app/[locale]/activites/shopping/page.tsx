"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import type { Activity, Venue } from "@/lib/database.types"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

// Unified interface for displaying both activities and venues
interface ShoppingDisplay {
  id: string
  slug: string
  name_fr: string
  description_fr?: string | null
  short_description_fr?: string | null
  main_image?: string | null
  data_jsonb?: any
  is_featured?: boolean
  source: 'activity' | 'venue'
}

export default function ShoppingPage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')
  const [items, setItems] = useState<ShoppingDisplay[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const supabase = createClient()
        
        // Fetch from both activities and venues tables
        const [activitiesResult, venuesResult] = await Promise.all([
          supabase
            .from('activities')
            .select('*')
            .eq('category', 'shopping')
            .eq('is_published', true)
            .order('is_featured', { ascending: false }),
          supabase
            .from('venues')
            .select('*')
            .eq('place_category', 'shopping')
            .eq('is_published', true)
            .order('is_featured', { ascending: false })
        ])

        if (activitiesResult.error) {
          console.error('Activities fetch error:', activitiesResult.error)
        }
        if (venuesResult.error) {
          console.error('Venues fetch error:', venuesResult.error)
        }

        // Combine and transform data
        const combinedItems: ShoppingDisplay[] = [
          ...(activitiesResult.data || []).map((activity: Activity) => ({
            id: activity.id,
            slug: activity.slug,
            name_fr: activity.name_fr,
            description_fr: activity.description_fr,
            short_description_fr: activity.short_description_fr,
            main_image: activity.main_image,
            data_jsonb: activity.data_jsonb,
            is_featured: activity.is_featured,
            source: 'activity' as const
          })),
          ...(venuesResult.data || []).map((venue: Venue) => ({
            id: venue.id,
            slug: venue.slug,
            name_fr: venue.name_fr,
            description_fr: venue.description_fr,
            short_description_fr: venue.short_description_fr,
            main_image: venue.main_image,
            data_jsonb: venue.data_jsonb,
            is_featured: venue.is_featured,
            source: 'venue' as const
          }))
        ]

        setItems(combinedItems)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to load shopping venues')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
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
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun lieu de shopping trouvé.</p>
            <p className="text-gray-400 mt-2">Créez des lieux depuis le dashboard.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => {
              const imageUrl = item.main_image || item.data_jsonb?.photo_url
              const name = item.data_jsonb?.name || item.name_fr
              const description = item.description_fr || item.short_description_fr || item.data_jsonb?.description || ''
              // Activities link to activity detail page, venues link to generic venue detail page
              const detailUrl = item.source === 'activity' 
                ? `/${locale}/activites/shopping/${item.slug}`
                : `/${locale}/lieux/${item.slug}` // Generic venue detail page
              
              return (
                <article 
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center ${imageUrl ? 'hidden absolute inset-0' : ''}`}>
                      <ShoppingBag className="w-16 h-16 text-gray-400" />
                    </div>
                    {item.is_featured && (
                      <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Recommandé
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {name}
                    </h2>
                    
                    {description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {description}
                      </p>
                    )}

                    {/* Read More Button */}
                    <Link
                      href={detailUrl}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
                    >
                      Lire la suite
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
