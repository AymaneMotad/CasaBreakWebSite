"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import type { Venue } from "@/lib/database.types"
import { Phone, Mail, Globe, MapPin, ArrowLeft, ExternalLink, Building2 } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function VenueDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const locale = params.locale as string
  const t = useTranslations('navigation')
  
  const [venue, setVenue] = useState<Venue | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVenue() {
      try {
        const supabase = createClient()
        
        // Decode URL-encoded slug first
        const decodedSlug = decodeURIComponent(slug)
        
        // Try exact slug first (same pattern as working restaurant page)
        let { data, error } = await supabase
          .from('venues')
          .select('*')
          .eq('slug', decodedSlug)
          .eq('is_published', true)
          .maybeSingle()

        // If not found, try sanitized version (spaces to hyphens)
        if (!data && decodedSlug !== slug) {
          const sanitizedSlug = decodedSlug.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "")
          if (sanitizedSlug && sanitizedSlug !== decodedSlug) {
            const result = await supabase
              .from('venues')
              .select('*')
              .eq('slug', sanitizedSlug)
              .eq('is_published', true)
              .maybeSingle()
            
            if (result.data) {
              data = result.data
              error = null
            }
          }
        }

        if (error && error.code !== 'PGRST116') {
          console.error('Supabase error:', error)
          throw new Error(error.message || 'Lieu non trouvé')
        }
        
        if (!data) {
          throw new Error('Lieu non trouvé')
        }
        
        setVenue(data)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchVenue()
    }
  }, [slug])

  // Get back link and label based on place_category
  const getBackLink = () => {
    if (!venue) return { href: `/${locale}/manger-sortir/restaurants`, label: t("restaurants") }
    
    const placeCategory = (venue as any).place_category || 'restaurants'
    const categoryMap: Record<string, { href: string, label: string }> = {
      'restaurants': { href: `/${locale}/manger-sortir/restaurants`, label: t("restaurants") },
      'bars-nightlife': { href: `/${locale}/manger-sortir/bars-nightlife`, label: t("barsNightlife") },
      'shopping': { href: `/${locale}/manger-sortir/shopping`, label: t("shopping") },
      'hebergement': { href: `/${locale}/planifier/hebergement`, label: t("accommodation") },
      'sport-bien-etre': { href: `/${locale}/activites/sport-bien-etre`, label: t("sportWellness") },
    }
    
    return categoryMap[placeCategory] || { href: `/${locale}/manger-sortir/restaurants`, label: t("restaurants") }
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

  if (error || !venue) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center py-20">
              <p className="text-red-500 mb-4 text-lg">Erreur: {error || 'Lieu non trouvé'}</p>
              <Link
                href={getBackLink().href}
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

  const jsonData = venue.data_jsonb as any
  const name = jsonData?.name || venue.name_fr
  const description = jsonData?.description || venue.description_fr || venue.short_description_fr
  const tags = jsonData?.tags || []
  const phone = jsonData?.phone || (venue as any).phone || null
  const email = venue.email || null
  const address = jsonData?.address || venue.address || null
  const district = jsonData?.district || venue.district || null
  const website = venue.website || jsonData?.website || null
  const placeCategory = (venue as any).place_category || 'restaurants'

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-6">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: getBackLink().label, href: getBackLink().href },
              { label: name, href: `/${locale}/lieux/${slug}` }
            ]}
          />
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 w-full mb-8">
        {(() => {
          const imageUrl = jsonData?.photo_url || venue.main_image
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
        <div className={`w-full h-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center ${jsonData?.photo_url || venue.main_image ? 'hidden' : ''}`}>
          <Building2 className="w-24 h-24 text-gray-400" />
        </div>
      </div>

      {/* Content */}
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

        {/* Cuisine Types (if applicable) */}
        {venue.cuisine_types && venue.cuisine_types.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Type de cuisine</h2>
            <div className="flex flex-wrap gap-2">
              {venue.cuisine_types.map((cuisine) => (
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

        {/* Contact Information */}
        {(phone || email || address || district || website) && (
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
                      {district && ` • ${district}`}
                    </p>
                  </div>
                </div>
              )}

              {district && !address && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Quartier</p>
                    <p className="text-gray-900 font-medium">
                      {district}
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

              {email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a 
                      href={`mailto:${email}`}
                      className="text-gray-900 font-medium hover:text-teal-600 transition-colors break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              )}

              {website && (
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Site web</p>
                    <a 
                      href={website}
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
      </div>

      <Footer />
    </main>
  )
}
