"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import type { Accommodation, Venue } from "@/lib/database.types"
import { Star, Phone, Mail, Globe, Hotel, ArrowLeft, ExternalLink, MapPin } from "lucide-react"
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
  average_rating?: number
  review_count?: number
  is_featured?: boolean
  phone?: string | null
  email?: string | null
  website?: string | null
  address?: string | null
  district?: string | null
  source: 'accommodations' | 'venues'
}

export default function AccommodationDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const locale = params.locale as string
  const t = useTranslations('navigation')
  
  const [accommodation, setAccommodation] = useState<AccommodationDisplay | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAccommodation() {
      try {
        const supabase = createClient()
        
        // First try accommodations table
        let { data: accData, error: accError } = await supabase
          .from('accommodations')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .maybeSingle()

        if (accData) {
          // Found in accommodations table
          setAccommodation({
            id: accData.id,
            slug: accData.slug,
            name_fr: accData.name_fr,
            description_fr: accData.description_fr,
            main_image: accData.main_image,
            type: accData.type,
            star_rating: accData.star_rating,
            average_rating: accData.average_rating,
            review_count: accData.review_count,
            is_featured: accData.is_featured,
            phone: accData.phone,
            email: accData.email,
            website: accData.website,
            address: (accData as any).address || null,
            district: (accData as any).district || null,
            source: 'accommodations'
          })
          setLoading(false)
          return
        }

        // If not found in accommodations, try venues table
        const { data: venueData, error: venueError } = await supabase
          .from('venues')
          .select('*')
          .eq('slug', slug)
          .eq('place_category', 'hebergement')
          .eq('is_published', true)
          .maybeSingle()

        if (venueError && venueError.code !== 'PGRST116') {
          console.error('Supabase error:', venueError)
          throw new Error(venueError.message || 'Hébergement non trouvé')
        }

        if (venueData) {
          // Found in venues table - transform to display format
          const jsonData = venueData.data_jsonb as any
          // Handle average_rating - prefer jsonData.rating, but handle 0 correctly
          const jsonRating = jsonData?.rating != null ? (typeof jsonData.rating === 'string' ? parseFloat(jsonData.rating) : jsonData.rating) : null
          const venueRating = venueData.average_rating != null ? venueData.average_rating : null
          const averageRating = jsonRating != null ? jsonRating : venueRating
          
          setAccommodation({
            id: venueData.id,
            slug: venueData.slug,
            name_fr: jsonData?.name || venueData.name_fr,
            description_fr: jsonData?.description || venueData.description_fr || venueData.short_description_fr,
            main_image: jsonData?.photo_url || venueData.main_image,
            type: jsonData?.type || null,
            star_rating: jsonData?.star_rating || null,
            average_rating: averageRating,
            review_count: venueData.review_count,
            is_featured: venueData.is_featured,
            phone: jsonData?.phone || (venueData as any).phone || null,
            email: venueData.email,
            website: jsonData?.website || venueData.website,
            address: jsonData?.address || (venueData as any).address || null,
            district: jsonData?.district || (venueData as any).district || null,
            source: 'venues'
          })
          setLoading(false)
          return
        }

        // Not found in either table
        throw new Error('Hébergement non trouvé')
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement')
        setLoading(false)
      }
    }

    if (slug) {
      fetchAccommodation()
    }
  }, [slug])

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

  if (error || !accommodation) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center py-20">
              <p className="text-red-500 mb-4 text-lg">Erreur: {error || 'Hébergement non trouvé'}</p>
              <Link
                href={`/${locale}/planifier/hebergement`}
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
              { label: t("accommodation"), href: `/${locale}/planifier/hebergement` },
              { label: accommodation.name_fr, href: `/${locale}/planifier/hebergement/${slug}` }
            ]}
          />
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 w-full mb-8">
        {accommodation.main_image ? (
          <img
            src={accommodation.main_image}
            alt={accommodation.name_fr}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling?.classList.remove('hidden')
            }}
          />
        ) : null}
        <div className={`w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center ${accommodation.main_image ? 'hidden' : ''}`}>
          <Hotel className="w-24 h-24 text-gray-400" />
        </div>
        
        {/* Featured badge */}
        {accommodation.is_featured && (
          <div className="absolute top-6 left-6 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            Recommandé
          </div>
        )}
        
        {/* Type badge */}
        {accommodation.type && (
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-gray-700">
            {getTypeLabel(accommodation.type)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-20">
        {/* Title and Rating */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {accommodation.name_fr}
          </h1>
          
          {accommodation.star_rating && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(Math.floor(accommodation.star_rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-600">{accommodation.star_rating} étoiles</span>
            </div>
          )}

          {/* Rating display removed */}
        </div>

        {/* Description */}
        {accommodation.description_fr && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {accommodation.description_fr}
            </p>
          </div>
        )}

        {/* Contact Information */}
        {(accommodation.phone || accommodation.email || accommodation.website || accommodation.address || accommodation.district) && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informations pratiques</h2>
            
            <div className="space-y-6">
              {accommodation.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Adresse</p>
                    <p className="text-gray-900 font-medium">
                      {accommodation.address}
                      {accommodation.district && ` • ${accommodation.district}`}
                    </p>
                  </div>
                </div>
              )}

              {accommodation.district && !accommodation.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Quartier</p>
                    <p className="text-gray-900 font-medium">
                      {accommodation.district}
                    </p>
                  </div>
                </div>
              )}

              {accommodation.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                    <a 
                      href={`tel:${accommodation.phone.replace(/\s/g, '')}`}
                      className="text-gray-900 font-medium hover:text-teal-600 transition-colors"
                    >
                      {accommodation.phone}
                    </a>
                  </div>
                </div>
              )}

              {accommodation.email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a 
                      href={`mailto:${accommodation.email}`}
                      className="text-gray-900 font-medium hover:text-teal-600 transition-colors break-all"
                    >
                      {accommodation.email}
                    </a>
                  </div>
                </div>
              )}

              {accommodation.website && (
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Site web</p>
                    <a 
                      href={accommodation.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                    >
                      Visiter le site web
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Additional Info */}
        {accommodation.type && (
          <div>
            <p className="text-sm text-gray-500 mb-1">Type d'hébergement</p>
            <p className="text-gray-900 font-medium">{getTypeLabel(accommodation.type)}</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}

