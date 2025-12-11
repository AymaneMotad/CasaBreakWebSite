"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import type { Accommodation, Venue } from "@/lib/database.types"
import { Star, Hotel } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

interface AccommodationDisplay {
  id: string
  slug: string
  name_fr: string
  description_fr: string | null
  main_image: string | null
  type?: string
  star_rating?: number | null
  source: 'accommodations' | 'venues'
}

export default function HebergementPage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')
  const [accommodations, setAccommodations] = useState<AccommodationDisplay[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAccommodations() {
      try {
        const supabase = createClient()
        
        // Fetch both accommodations table AND venues with category='hebergement'
        const [accommodationsResult, venuesResult] = await Promise.all([
          supabase
            .from('accommodations')
            .select('*')
            .eq('is_published', true)
            .order('is_featured', { ascending: false })
            .order('star_rating', { ascending: false, nullsLast: true }),
          supabase
            .from('venues')
            .select('*')
            .eq('place_category', 'hebergement')
            .eq('is_published', true)
            .order('is_featured', { ascending: false })
        ])

        if (accommodationsResult.error) {
          console.error('Supabase error (accommodations):', accommodationsResult.error)
          throw new Error(accommodationsResult.error.message || 'Failed to load accommodations')
        }
        
        if (venuesResult.error) {
          console.error('Supabase error (venues):', venuesResult.error)
          // Don't throw, just log - venues might not exist yet
        }
        
        // Transform accommodations to display format
        const accommodationsDisplay: AccommodationDisplay[] = (accommodationsResult.data || []).map(acc => ({
          id: acc.id,
          slug: acc.slug,
          name_fr: acc.name_fr,
          description_fr: acc.description_fr,
          main_image: acc.main_image,
          type: acc.type,
          star_rating: acc.star_rating,
          source: 'accommodations'
        }))
        
        // Transform venues to display format
        const venuesDisplay: AccommodationDisplay[] = (venuesResult.data || []).map(venue => {
          const jsonData = venue.data_jsonb as any
          return {
            id: venue.id,
            slug: venue.slug,
            name_fr: jsonData?.name || venue.name_fr,
            description_fr: jsonData?.description || venue.description_fr || venue.short_description_fr,
            main_image: jsonData?.photo_url || venue.main_image,
            source: 'venues'
          }
        })
        
        // Combine both
        const allAccommodations = [...accommodationsDisplay, ...venuesDisplay]
        
        setAccommodations(allAccommodations)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to load accommodations')
      } finally {
        setLoading(false)
      }
    }

    fetchAccommodations()
  }, [])

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'hotel': 'Hôtel',
      'apartment': 'Résidence',
      'guesthouse': 'Maison d\'hôte',
      'hostel': 'Auberge',
      'riad': 'Riad',
      'villa': 'Villa'
    }
    return labels[type] || type
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("accommodation"), href: `/${locale}/planifier/hebergement` }
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <div className="pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Hébergement</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez les meilleurs hôtels et hébergements de Casablanca
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
        ) : accommodations.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun hébergement trouvé.</p>
            <p className="text-gray-400 mt-2">Utilisez le script de scraping pour ajouter des hébergements.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
              <article 
                key={accommodation.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  {accommodation.main_image ? (
                    <img
                      src={accommodation.main_image}
                      alt={accommodation.name_fr}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center ${accommodation.main_image ? 'hidden absolute inset-0' : ''}`}>
                    <Hotel className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  {/* Type badge */}
                  {accommodation.type && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {getTypeLabel(accommodation.type)}
                    </div>
                  )}
                  
                  {/* Star rating */}
                  {accommodation.star_rating && (
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      {accommodation.star_rating}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {accommodation.name_fr}
                  </h2>
                  
                  {accommodation.description_fr && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {accommodation.description_fr}
                    </p>
                  )}

                  {/* Read More Button */}
                  <Link
                    href={accommodation.source === 'accommodations' 
                      ? `/${locale}/planifier/hebergement/${accommodation.slug}`
                      : `/${locale}/manger-sortir/restaurants/${accommodation.slug}`
                    }
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
