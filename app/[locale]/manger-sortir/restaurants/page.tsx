"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import { Utensils, ChevronDown, ChevronUp } from "lucide-react"
import { useTranslations } from 'next-intl'

interface RestaurantData {
  id: string
  name: string
  category: string
  subtype: string
  description: string
  address: string
  district: string
  rating: number
  price_level: string
  photo_url: string | null
  website: string | null
  tags: string[]
}

interface RestaurantWithJsonb {
  id: string
  slug: string
  name_fr: string
  description_fr: string | null
  short_description_fr: string | null
  main_image: string | null
  data_jsonb: RestaurantData | null
  average_rating: number
  price_range: string | null
  cuisine_types: string[] | null
  website: string | null
}

export default function RestaurantsPage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')
  const [restaurants, setRestaurants] = useState<RestaurantWithJsonb[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const supabase = createClient()
        // Fetch ALL restaurants (both old ones without JSONB and new ones with JSONB)
        const { data, error } = await supabase
          .from('venues')
          .select('id, slug, name_fr, description_fr, short_description_fr, main_image, data_jsonb, average_rating, price_range, cuisine_types, website')
          .eq('category', 'restaurants')
          .eq('is_published', true)
          .order('average_rating', { ascending: false })

        if (error) {
          console.error('Supabase error:', error)
          throw new Error(error.message || 'Failed to load restaurants')
        }
        
        console.log('Restaurants loaded:', data)
        
        // Sort restaurants: ones with images first, then by rating
        const sortedRestaurants = (data || []).sort((a, b) => {
          // Check if restaurant has an image
          const aHasImage = !!(a.data_jsonb?.photo_url || a.main_image)
          const bHasImage = !!(b.data_jsonb?.photo_url || b.main_image)
          
          // If one has image and other doesn't, prioritize the one with image
          if (aHasImage && !bHasImage) return -1
          if (!aHasImage && bHasImage) return 1
          
          // If both have images or both don't, sort by rating (descending)
          const aRating = a.data_jsonb?.rating || a.average_rating || 0
          const bRating = b.data_jsonb?.rating || b.average_rating || 0
          return bRating - aRating
        })
        
        // Log first restaurant to debug
        if (sortedRestaurants && sortedRestaurants.length > 0) {
          console.log('First restaurant data:', {
            id: sortedRestaurants[0].id,
            name_fr: sortedRestaurants[0].name_fr,
            main_image: sortedRestaurants[0].main_image,
            hasImage: !!(sortedRestaurants[0].data_jsonb?.photo_url || sortedRestaurants[0].main_image),
            data_jsonb: sortedRestaurants[0].data_jsonb,
            description_fr: sortedRestaurants[0].description_fr
          })
        }
        
        setRestaurants(sortedRestaurants as RestaurantWithJsonb[])
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to load restaurants')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [])

  const toggleExpand = (id: string) => {
    console.log('Toggling expand for:', id)
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
        console.log('Collapsing:', id)
      } else {
        newSet.add(id)
        console.log('Expanding:', id)
      }
      console.log('Expanded cards:', Array.from(newSet))
      return newSet
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("foodFun"), href: `/${locale}/manger-sortir/restaurants` },
              { label: t("restaurants"), href: `/${locale}/manger-sortir/restaurants` }
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <div className="pb-12 bg-gradient-to-b from-gray-50 to-white">
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
            {restaurants.map((restaurant) => {
              const jsonData = restaurant.data_jsonb
              const isExpanded = expandedCards.has(restaurant.id)
              
              // Check if this is a new restaurant (with JSONB) or old one (without JSONB)
              const isNewRestaurant = !!jsonData
              
              // For images: prioritize JSONB photo_url, then main_image column
              // If jsonData.photo_url is null/empty but main_image exists, use main_image
              const imageUrl = (jsonData?.photo_url && jsonData.photo_url.trim() !== '') 
                ? jsonData.photo_url 
                : (restaurant.main_image && restaurant.main_image.trim() !== '') 
                  ? restaurant.main_image 
                  : null
              
              // For name: use JSONB name if available, otherwise use name_fr
              const name = jsonData?.name || restaurant.name_fr
              
              // Debug logging for Chez Thang specifically
              if (restaurant.slug === 'chez_thang' || restaurant.name_fr?.toLowerCase().includes('chez thang')) {
                console.log('🔍 Chez Thang image debug:', {
                  id: restaurant.id,
                  slug: restaurant.slug,
                  name,
                  hasJsonData: !!jsonData,
                  jsonPhotoUrl: jsonData?.photo_url,
                  jsonPhotoUrlType: typeof jsonData?.photo_url,
                  jsonPhotoUrlEmpty: !jsonData?.photo_url || jsonData.photo_url.trim() === '',
                  mainImage: restaurant.main_image,
                  mainImageType: typeof restaurant.main_image,
                  mainImageLength: restaurant.main_image?.length,
                  mainImageEmpty: !restaurant.main_image || restaurant.main_image.trim() === '',
                  finalImageUrl: imageUrl,
                  finalImageUrlType: typeof imageUrl,
                  fullRestaurant: restaurant
                })
              }
              
              // Debug logging for first restaurant
              if (restaurants.indexOf(restaurant) === 0) {
                console.log('🔍 First restaurant image debug:', {
                  name,
                  hasJsonData: !!jsonData,
                  jsonPhotoUrl: jsonData?.photo_url,
                  mainImage: restaurant.main_image,
                  finalImageUrl: imageUrl
                })
              }
              
              // For description: JSONB description first, then description_fr, then short_description_fr
              const description = (jsonData?.description || restaurant.description_fr || restaurant.short_description_fr || '').trim()
              
              // For price level: JSONB price_level or convert price_range enum
              const priceLevel = jsonData?.price_level || (restaurant.price_range ? restaurant.price_range.replace(/\$/g, '€') : null)
              
              // For district: only from JSONB (old restaurants don't have this)
              const district = jsonData?.district || null
              
              // For tags: only from JSONB (old restaurants don't have this)
              const tags = jsonData?.tags || []
              
              // For website: JSONB website or restaurant.website
              const website = jsonData?.website || restaurant.website || null
              
              // For rating: JSONB rating or average_rating
              const rating = jsonData?.rating || restaurant.average_rating || null
              
              // Description truncation
              const shortDescription = description.length > 80 ? description.substring(0, 80) + '...' : description
              const fullDescription = description
              const showExpandButton = description.length > 80

              return (
                <article 
                  key={restaurant.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    {imageUrl ? (
                      <>
                        <img
                          key={`img-${restaurant.id}-${imageUrl}`}
                          src={imageUrl}
                          alt={name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          style={{ minHeight: '256px', display: 'block' }}
                          onError={(e) => {
                            const target = e.currentTarget
                            const errorEvent = e.nativeEvent as any
                            console.error('❌ Image ERROR for:', name)
                            console.error('❌ Failed URL:', imageUrl)
                            console.error('❌ Error event:', errorEvent)
                            console.error('❌ Error details:', {
                              slug: restaurant.slug,
                              mainImage: restaurant.main_image,
                              jsonbPhotoUrl: jsonData?.photo_url,
                              imageUrl: imageUrl,
                              urlLength: imageUrl?.length,
                              urlStartsWith: imageUrl?.substring(0, 50)
                            })
                            
                            // Try to fetch the image to see what the actual error is
                            fetch(imageUrl, { method: 'HEAD', mode: 'no-cors' })
                              .then(() => console.log('✅ URL is accessible (CORS might be blocking)'))
                              .catch((fetchError) => {
                                console.error('❌ Fetch test failed:', fetchError)
                                console.error('💡 Possible issues:')
                                console.error('   1. Bucket is not set to Public in Supabase Dashboard')
                                console.error('   2. File does not exist at that path')
                                console.error('   3. Storage RLS policies are blocking access')
                                console.error('   4. CORS configuration issue')
                              })
                            
                            target.style.display = 'none'
                            const fallback = target.parentElement?.querySelector('.image-fallback') as HTMLElement
                            if (fallback) {
                              fallback.classList.remove('hidden')
                              fallback.classList.add('flex')
                            }
                          }}
                          onLoad={(e) => {
                            console.log('✅ Image LOADED for:', name)
                            console.log('✅ Image URL:', imageUrl)
                            const target = e.currentTarget
                            target.style.opacity = '1'
                            target.style.display = 'block'
                          }}
                        />
                        <div className="image-fallback hidden w-full h-full bg-gradient-to-br from-orange-100 to-red-100 items-center justify-center absolute inset-0 z-10">
                          <div className="text-center">
                            <Utensils className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-500">Image non disponible</p>
                            <p className="text-xs text-gray-400 mt-1 break-all px-2">{imageUrl?.substring(0, 50)}...</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                        <div className="text-center">
                          <Utensils className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                          <p className="text-xs text-gray-500">Pas d'image</p>
                          <p className="text-xs text-gray-400 mt-1">JSONB: {jsonData?.photo_url ? '✓' : '✗'}</p>
                          <p className="text-xs text-gray-400">main_image: {restaurant.main_image ? '✓' : '✗'}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Rating Badge */}
                    {rating && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold text-sm">{rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {name}
                    </h2>
                    
                    {/* District & Price Level */}
                    {(district || priceLevel) && (
                      <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                        {district && (
                          <span className="flex items-center gap-1">
                            📍 {district}
                          </span>
                        )}
                        {priceLevel && (
                          <span className="text-teal-600 font-medium">
                            {priceLevel}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* Cuisine Type (for old restaurants without JSONB) */}
                    {!isNewRestaurant && restaurant.cuisine_types && restaurant.cuisine_types.length > 0 && (
                      <div className="mb-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {restaurant.cuisine_types[0]}
                        </span>
                      </div>
                    )}
                    
                    {/* Description */}
                    {description && (
                      <div className="mb-4 flex-grow">
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                          {isExpanded ? fullDescription : shortDescription}
                        </p>
                      </div>
                    )}

                    {/* Tags */}
                    {tags && tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(0, 3).map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag.replace(/_/g, ' ')}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More / Read Less Button */}
                    {description && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          console.log('Button clicked for:', restaurant.id, 'Current expanded:', isExpanded)
                          toggleExpand(restaurant.id)
                        }}
                        className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors mt-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1 -ml-2"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? (
                          <>
                            Lire moins
                            <ChevronUp className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Lire la suite
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    )}

                    {/* Website Link */}
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-xs text-gray-500 hover:text-teal-600 transition-colors"
                      >
                        Visiter le site web →
                      </a>
                    )}
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
