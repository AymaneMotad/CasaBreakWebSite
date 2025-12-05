"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { createClient } from "@/utils/supabase/client"
import type { Venue } from "@/lib/database.types"
import { MapPin, Phone, Globe, Star } from "lucide-react"

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Venue[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('venues')
          .select('*')
          .eq('category', 'restaurants')
          .eq('is_published', true)
          .order('is_featured', { ascending: false })

        if (error) {
          console.error('Supabase error:', error)
          throw new Error(error.message || 'Failed to load restaurants')
        }
        
        console.log('Restaurants loaded:', data)
        setRestaurants(data || [])
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to load restaurants')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Restaurants</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez les meilleurs restaurants de Casablanca
          </p>
        </div>
      </div>

      {/* Content */}
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
            <p className="text-gray-500">Vérifiez que la base de données est configurée.</p>
          </div>
        ) : restaurants.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun restaurant trouvé.</p>
            <p className="text-gray-400 mt-2">Lancez le seed.sql pour ajouter des exemples.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <article 
                key={restaurant.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  {restaurant.main_image ? (
                    <Image
                      src={restaurant.main_image}
                      alt={restaurant.name_fr}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                      <span className="text-6xl">🍽️</span>
                    </div>
                  )}
                  
                  {/* Featured badge */}
                  {restaurant.is_featured && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Recommandé
                    </div>
                  )}
                  
                  {/* Price range */}
                  {restaurant.price_range && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {restaurant.price_range}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {restaurant.name_fr}
                  </h2>
                  
                  {restaurant.short_description_fr && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {restaurant.short_description_fr}
                    </p>
                  )}

                  {/* Cuisine types */}
                  {restaurant.cuisine_types && restaurant.cuisine_types.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {restaurant.cuisine_types.map((cuisine) => (
                        <span 
                          key={cuisine}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {cuisine}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Rating */}
                  {restaurant.average_rating > 0 && (
                    <div className="flex items-center gap-1 text-amber-500 mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium">{restaurant.average_rating}</span>
                      <span className="text-gray-400 text-sm">({restaurant.review_count} avis)</span>
                    </div>
                  )}

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    {restaurant.is_halal && (
                      <span className="flex items-center gap-1">✓ Halal</span>
                    )}
                    {restaurant.has_terrace && (
                      <span className="flex items-center gap-1">✓ Terrasse</span>
                    )}
                    {restaurant.has_vegetarian_options && (
                      <span className="flex items-center gap-1">✓ Végétarien</span>
                    )}
                  </div>
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
