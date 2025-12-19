"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { SearchBar } from "@/components/search-bar"
import { Pagination } from "@/components/pagination"
import { usePaginationAndSearch } from "@/hooks/usePaginationAndSearch"
import { createClient } from "@/utils/supabase/client"
import { Search, Utensils, Wine, ShoppingBag, Hotel, Dumbbell, Calendar } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

interface SearchResult {
  id: string
  slug: string
  name_fr: string
  description_fr?: string | null
  short_description_fr?: string | null
  main_image?: string | null
  data_jsonb?: any
  place_category?: string
  category?: string
  source: 'venue' | 'activity' | 'event' | 'accommodation'
  type?: string
}

export default function SearchPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')
  const [allResults, setAllResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const initialQuery = searchParams.get('q') || ''

  useEffect(() => {
    async function fetchAllData() {
      try {
        setLoading(true)
        const supabase = createClient()
        
        // Fetch from all tables
        const [venuesResult, activitiesResult, eventsResult, accommodationsResult] = await Promise.all([
          supabase.from('venues').select('*').eq('is_published', true),
          supabase.from('activities').select('*').eq('is_published', true),
          supabase.from('events').select('*').eq('is_published', true),
          supabase.from('accommodations').select('*').eq('is_published', true),
        ])

        const results: SearchResult[] = []

        // Transform venues
        if (venuesResult.data) {
          venuesResult.data.forEach((venue: any) => {
            results.push({
              id: venue.id,
              slug: venue.slug,
              name_fr: venue.name_fr,
              description_fr: venue.description_fr,
              short_description_fr: venue.short_description_fr,
              main_image: venue.main_image,
              data_jsonb: venue.data_jsonb,
              place_category: venue.place_category,
              source: 'venue',
            })
          })
        }

        // Transform activities
        if (activitiesResult.data) {
          activitiesResult.data.forEach((activity: any) => {
            results.push({
              id: activity.id,
              slug: activity.slug,
              name_fr: activity.name_fr,
              description_fr: activity.description_fr,
              short_description_fr: activity.short_description_fr,
              main_image: activity.main_image,
              data_jsonb: activity.data_jsonb,
              category: activity.category,
              source: 'activity',
            })
          })
        }

        // Transform events
        if (eventsResult.data) {
          eventsResult.data.forEach((event: any) => {
            results.push({
              id: event.id,
              slug: event.slug,
              name_fr: event.name_fr,
              description_fr: event.description_fr,
              short_description_fr: event.short_description_fr,
              main_image: event.main_image,
              category: event.category,
              source: 'event',
            })
          })
        }

        // Transform accommodations
        if (accommodationsResult.data) {
          accommodationsResult.data.forEach((acc: any) => {
            results.push({
              id: acc.id,
              slug: acc.slug,
              name_fr: acc.name_fr,
              description_fr: acc.description_fr,
              main_image: acc.main_image,
              type: acc.type,
              source: 'accommodation',
            })
          })
        }

        setAllResults(results)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to load search results')
      } finally {
        setLoading(false)
      }
    }

    fetchAllData()
  }, [])

  // Pagination and search
  const {
    searchTerm,
    setSearchTerm,
    currentPage,
    totalPages,
    paginatedItems,
    totalItems,
    goToPage,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
  } = usePaginationAndSearch<SearchResult>({
    items: allResults,
    itemsPerPage: 7,
    searchFunction: (item, term) => {
      const jsonData = item.data_jsonb as any
      const name = (jsonData?.name || item.name_fr || '').toLowerCase()
      const description = (jsonData?.description || item.description_fr || item.short_description_fr || '').toLowerCase()
      const district = (jsonData?.district || '').toLowerCase()
      const address = (jsonData?.address || '').toLowerCase()
      
      return name.includes(term) || description.includes(term) || district.includes(term) || address.includes(term)
    },
  })

  // Set initial search term from URL
  useEffect(() => {
    if (initialQuery) {
      setSearchTerm(initialQuery)
    }
  }, [initialQuery, setSearchTerm])

  const getDetailUrl = (item: SearchResult) => {
    if (item.source === 'venue') {
      const placeCategory = item.place_category || 'restaurants'
      const categoryMap: Record<string, string> = {
        'restaurants': `/manger-sortir/restaurants`,
        'bars-nightlife': `/manger-sortir/bars-nightlife`,
        'shopping': `/manger-sortir/shopping`,
        'hebergement': `/planifier/hebergement`,
        'sport-bien-etre': `/activites/sport-bien-etre`,
      }
      return `/${locale}${categoryMap[placeCategory] || '/lieux'}/${item.slug}`
    } else if (item.source === 'activity') {
      const category = item.category || 'sport-bien-etre'
      return `/${locale}/activites/${category}/${item.slug}`
    } else if (item.source === 'event') {
      const category = item.category || 'concerts-spectacles'
      return `/${locale}/evenements/${category}/${item.slug}`
    } else if (item.source === 'accommodation') {
      return `/${locale}/planifier/hebergement/${item.slug}`
    }
    return '#'
  }

  const getIcon = (item: SearchResult) => {
    if (item.source === 'venue') {
      const placeCategory = item.place_category || 'restaurants'
      if (placeCategory === 'restaurants') return Utensils
      if (placeCategory === 'bars-nightlife') return Wine
      if (placeCategory === 'shopping') return ShoppingBag
      if (placeCategory === 'hebergement') return Hotel
      if (placeCategory === 'sport-bien-etre') return Dumbbell
    } else if (item.source === 'activity') {
      return Dumbbell
    } else if (item.source === 'event') {
      return Calendar
    } else if (item.source === 'accommodation') {
      return Hotel
    }
    return Search
  }

  const getGradient = (item: SearchResult) => {
    if (item.source === 'venue') {
      const placeCategory = item.place_category || 'restaurants'
      if (placeCategory === 'restaurants') return 'from-orange-100 to-red-100'
      if (placeCategory === 'bars-nightlife') return 'from-purple-100 to-pink-100'
      if (placeCategory === 'shopping') return 'from-pink-100 to-purple-100'
      if (placeCategory === 'hebergement') return 'from-blue-100 to-teal-100'
      if (placeCategory === 'sport-bien-etre') return 'from-green-100 to-blue-100'
    } else if (item.source === 'activity') {
      return 'from-green-100 to-blue-100'
    } else if (item.source === 'event') {
      return 'from-purple-100 to-pink-100'
    } else if (item.source === 'accommodation') {
      return 'from-blue-100 to-teal-100'
    }
    return 'from-gray-100 to-gray-200'
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: 'Recherche', href: `/${locale}/recherche` }
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <div className="pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Recherche</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            {searchTerm ? `Résultats pour "${searchTerm}"` : 'Recherchez des lieux, activités et événements'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        {/* Search Bar */}
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Rechercher des lieux, activités, événements..."
        />

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
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
        ) : totalItems === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              {searchTerm ? `Aucun résultat trouvé pour "${searchTerm}".` : 'Entrez un terme de recherche pour commencer.'}
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedItems.map((item) => {
                const jsonData = item.data_jsonb as any
                const imageUrl = jsonData?.photo_url || item.main_image
                const name = jsonData?.name || item.name_fr
                const description = jsonData?.description || item.description_fr || item.short_description_fr
                const Icon = getIcon(item)
                const gradient = getGradient(item)
                const detailUrl = getDetailUrl(item)

                return (
                  <article 
                    key={`${item.source}-${item.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${gradient}`}>
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
                      <div className={`w-full h-full flex items-center justify-center ${imageUrl ? 'hidden absolute inset-0' : ''}`}>
                        <Icon className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {name}
                      </h2>
                      
                      {description && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {description}
                        </p>
                      )}

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

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
              onNext={nextPage}
              onPrev={prevPage}
              hasNext={hasNextPage}
              hasPrev={hasPrevPage}
              totalItems={totalItems}
              itemsPerPage={7}
            />
          </>
        )}
      </div>

      <Footer />
    </main>
  )
}

