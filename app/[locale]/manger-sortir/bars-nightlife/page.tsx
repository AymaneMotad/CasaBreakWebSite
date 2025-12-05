"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { createClient } from "@/utils/supabase/client"
import type { Venue } from "@/lib/database.types"
import { Star } from "lucide-react"

export default function BarsNightlifePage() {
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
          .eq('category', 'bars-nightlife')
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

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Bars, Lounges & Nightlife</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez la vie nocturne de Casablanca
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
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
          </div>
        ) : venues.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun bar trouvé.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <article 
                key={venue.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  {venue.main_image ? (
                    <Image
                      src={venue.main_image}
                      alt={venue.name_fr}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <span className="text-6xl">🍸</span>
                    </div>
                  )}
                  
                  {venue.is_featured && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Recommandé
                    </div>
                  )}
                  
                  {venue.price_range && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {venue.price_range}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {venue.name_fr}
                  </h2>
                  
                  {venue.short_description_fr && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {venue.short_description_fr}
                    </p>
                  )}

                  {venue.cuisine_types && venue.cuisine_types.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {venue.cuisine_types.map((cuisine) => (
                        <span 
                          key={cuisine}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {cuisine}
                        </span>
                      ))}
                    </div>
                  )}

                  {venue.average_rating > 0 && (
                    <div className="flex items-center gap-1 text-amber-500 mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium">{venue.average_rating}</span>
                      <span className="text-gray-400 text-sm">({venue.review_count} avis)</span>
                    </div>
                  )}
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
