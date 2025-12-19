"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { SearchBar } from "@/components/search-bar"
import { Pagination } from "@/components/pagination"
import { usePaginationAndSearch } from "@/hooks/usePaginationAndSearch"
import { createClient } from "@/utils/supabase/client"
import type { Venue } from "@/lib/database.types"
import { Wine } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function BarsNightlifePage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')
  const [venues, setVenues] = useState<Venue[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVenues() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('venues')
          .select('*')
          .eq('place_category', 'bars-nightlife')
          .eq('is_published', true)
          .order('is_featured', { ascending: false })

        if (error) {
          console.error('Supabase error:', error)
          throw new Error(error.message || 'Failed to load venues')
        }
        
        setVenues(data || [])
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to load venues')
      } finally {
        setLoading(false)
      }
    }

    fetchVenues()
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
  } = usePaginationAndSearch<Venue>({
    items: venues,
    itemsPerPage: 7,
    searchFunction: (venue, term) => {
      const jsonData = venue.data_jsonb as any
      const name = (jsonData?.name || venue.name_fr || '').toLowerCase()
      const description = (jsonData?.description || venue.description_fr || venue.short_description_fr || '').toLowerCase()
      const district = (jsonData?.district || (venue as any).district || '').toLowerCase()
      const address = (jsonData?.address || (venue as any).address || '').toLowerCase()
      
      return name.includes(term) || description.includes(term) || district.includes(term) || address.includes(term)
    },
  })

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("barsNightlife"), href: `/${locale}/manger-sortir/bars-nightlife` }
            ]}
          />
        </div>
      </div>

      <div className="pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Bars, Lounges & Nightlife</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez la vie nocturne de Casablanca
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        {/* Search Bar */}
        {!loading && venues.length > 0 && (
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Rechercher un bar..."
          />
        )}

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
              {searchTerm ? `Aucun bar trouvé pour "${searchTerm}".` : 'Aucun bar trouvé.'}
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedItems.map((venue) => {
              const jsonData = venue.data_jsonb as any
              const imageUrl = jsonData?.photo_url || venue.main_image
              const name = jsonData?.name || venue.name_fr
              const description = jsonData?.description || venue.description_fr || venue.short_description_fr
              
              return (
                <article 
                  key={venue.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
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
                    <div className={`w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center ${imageUrl ? 'hidden absolute inset-0' : ''}`}>
                      <Wine className="w-16 h-16 text-gray-400" />
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

                    {/* Read More Button */}
                    <Link
                      href={`/${locale}/manger-sortir/bars-nightlife/${venue.slug}`}
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
