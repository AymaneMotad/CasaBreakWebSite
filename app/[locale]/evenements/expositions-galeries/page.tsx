"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import { Palette, ChevronRight, Calendar, MapPin } from "lucide-react"
import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface EventData {
  id: string
  slug: string
  name_fr: string
  description_fr: string | null
  short_description_fr: string | null
  main_image: string | null
  start_date: string
  end_date: string | null
  venue_name_fr: string | null
  is_free: boolean
  price_from: number | null
  price_to: number | null
  organizer_name: string | null
  website: string | null
  ticket_url: string | null
}

export default function ExpositionsGaleriesPage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')
  const [events, setEvents] = useState<EventData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    async function fetchEvents() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('events')
          .select('id, slug, name_fr, description_fr, short_description_fr, main_image, start_date, end_date, venue_name_fr, is_free, price_from, price_to, organizer_name, website, ticket_url')
          .eq('category', 'expositions-galeries')
          .eq('is_published', true)
          .order('start_date', { ascending: true })

        if (error) {
          console.error('Supabase error:', error)
          throw new Error(error.message || 'Failed to load events')
        }
        
        setEvents(data || [])
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to load events')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric'
    })
  }

  const formatPrice = (isFree: boolean, priceFrom: number | null, priceTo: number | null) => {
    if (isFree) return 'Gratuit'
    if (priceFrom && priceTo) return `${priceFrom} - ${priceTo} MAD`
    if (priceFrom) return `À partir de ${priceFrom} MAD`
    return 'Prix sur demande'
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("events"), href: `/${locale}/evenements` },
              { label: t("exhibitionsGalleries"), href: `/${locale}/evenements/expositions-galeries` }
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <div className="pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Expositions & Galeries</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez les expositions et galeries d'art à Casablanca
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
        ) : events.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun événement trouvé.</p>
            <p className="text-gray-400 mt-2">Créez des événements depuis le dashboard.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
              const description = event.description_fr || event.short_description_fr || ''
              const shortDescription = description.length > 100 ? description.substring(0, 100) + '...' : description

              return (
                <article 
                  key={event.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    {event.main_image ? (
                      <img
                        src={event.main_image}
                        alt={event.name_fr}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.parentElement?.querySelector('.image-fallback') as HTMLElement
                          if (fallback) {
                            fallback.classList.remove('hidden')
                            fallback.classList.add('flex')
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                        <Palette className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                    <div className="image-fallback hidden w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 items-center justify-center absolute inset-0 z-10">
                      <Palette className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {event.name_fr}
                    </h2>
                    
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{formatDate(event.start_date)}</span>
                    </div>

                    {/* Venue */}
                    {event.venue_name_fr && (
                      <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span>{event.venue_name_fr}</span>
                      </div>
                    )}

                    {/* Price */}
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {formatPrice(event.is_free, event.price_from, event.price_to)}
                      </span>
                    </div>
                    
                    {/* Description */}
                    {description && (
                      <div className="mb-4 flex-grow">
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                          {shortDescription}
                        </p>
                      </div>
                    )}

                    {/* Organizer */}
                    {event.organizer_name && (
                      <div className="mb-4 text-sm text-gray-500">
                        <span className="font-medium">Organisé par:</span> {event.organizer_name}
                      </div>
                    )}

                    {/* View Details Link */}
                    <div className="mt-auto">
                      <Link
                        href={`/${locale}/evenements/expositions-galeries/${event.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                      >
                        Voir les détails
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>

                    {/* Links */}
                    {(event.website || event.ticket_url) && (
                      <div className="mt-3 flex gap-2">
                        {event.ticket_url && (
                          <a
                            href={event.ticket_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            Billetterie →
                          </a>
                        )}
                        {event.website && (
                          <a
                            href={event.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
                          >
                            Site web →
                          </a>
                        )}
                      </div>
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
