"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import type { Venue } from "@/lib/database.types"
import { Phone, Mail, Globe, Utensils, ArrowLeft, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function RestaurantDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const locale = params.locale as string
  const t = useTranslations('navigation')
  
  const [restaurant, setRestaurant] = useState<Venue | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('venues')
          .select('*')
          .eq('slug', slug)
          .eq('place_category', 'restaurants')
          .eq('is_published', true)
          .single()

        if (error) {
          console.error('Supabase error:', error)
          throw new Error(error.message || 'Restaurant non trouvé')
        }
        
        if (!data) {
          throw new Error('Restaurant non trouvé')
        }
        
        setRestaurant(data)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchRestaurant()
    }
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-2xl mb-6" />
              <div className="bg-gray-200 h-8 rounded w-3/4 mb-4" />
              <div className="bg-gray-200 h-4 rounded w-full mb-2" />
              <div className="bg-gray-200 h-4 rounded w-5/6" />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error || !restaurant) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center py-20">
              <p className="text-red-500 mb-4 text-lg">Erreur: {error || 'Restaurant non trouvé'}</p>
              <Link
                href={`/${locale}/manger-sortir/restaurants`}
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à la liste
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-6">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("restaurants"), href: `/${locale}/manger-sortir/restaurants` },
              { label: (restaurant.data_jsonb as any)?.name || restaurant.name_fr, href: `/${locale}/manger-sortir/restaurants/${slug}` }
            ]}
          />
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 w-full mb-8">
        {(() => {
          const jsonData = restaurant.data_jsonb as any
          const imageUrl = jsonData?.photo_url || restaurant.main_image
          const name = jsonData?.name || restaurant.name_fr
          return imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling?.classList.remove('hidden')
              }}
            />
          ) : null
        })()}
        <div className={`w-full h-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center ${(restaurant.data_jsonb as any)?.photo_url || restaurant.main_image ? 'hidden' : ''}`}>
          <Utensils className="w-24 h-24 text-gray-400" />
        </div>
      </div>

      {/* Content */}
      {(() => {
        const jsonData = restaurant.data_jsonb as any
        const name = jsonData?.name || restaurant.name_fr
        const description = jsonData?.description || restaurant.description_fr || restaurant.short_description_fr
        const tags = jsonData?.tags || []
        
        return (
          <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-20">
            {/* Title */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {name}
              </h1>
            </div>

            {/* Description */}
            {description && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {description}
                </p>
              </div>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: string, idx: number) => (
                    <span 
                      key={idx}
                      className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Cuisine Types */}
            {restaurant.cuisine_types && restaurant.cuisine_types.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Type de cuisine</h2>
                <div className="flex flex-wrap gap-2">
                  {restaurant.cuisine_types.map((cuisine) => (
                    <span 
                      key={cuisine}
                      className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {cuisine}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {(restaurant.is_halal || restaurant.has_terrace || restaurant.has_vegetarian_options || restaurant.has_vegan_options) && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Caractéristiques</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {restaurant.is_halal && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">✓</span>
                      <span>Halal</span>
                    </div>
                  )}
                  {restaurant.has_terrace && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">✓</span>
                      <span>Terrasse</span>
                    </div>
                  )}
                  {restaurant.has_vegetarian_options && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">✓</span>
                      <span>Options végétariennes</span>
                    </div>
                  )}
                  {restaurant.has_vegan_options && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">✓</span>
                      <span>Options véganes</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Contact Information */}
            {(() => {
              const phone = jsonData?.phone || (restaurant as any).phone || null
              const address = jsonData?.address || null
              
              if (!phone && !address) {
                return null
              }
              
              return (
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informations pratiques</h2>
                  
                  <div className="space-y-6">
                    {address && (
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Adresse</p>
                          <p className="text-gray-900 font-medium">
                            {address}
                          </p>
                        </div>
                      </div>
                    )}

                    {phone && (
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                          <a 
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="text-gray-900 font-medium hover:text-teal-600 transition-colors"
                          >
                            {phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })()}
          </div>
        )
      })()}

      <Footer />
    </main>
  )
}

