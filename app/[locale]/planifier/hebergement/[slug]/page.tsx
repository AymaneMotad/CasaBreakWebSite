"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import type { Accommodation } from "@/lib/database.types"
import { Star, Phone, Mail, Globe, Hotel, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function AccommodationDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const locale = params.locale as string
  const t = useTranslations('navigation')
  
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAccommodation() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('accommodations')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .single()

        if (error) {
          console.error('Supabase error:', error)
          throw new Error(error.message || 'Hébergement non trouvé')
        }
        
        if (!data) {
          throw new Error('Hébergement non trouvé')
        }
        
        setAccommodation(data)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement')
      } finally {
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
              { label: t("planStay"), href: `/${locale}/planifier/hebergement` },
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
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-gray-700">
          {getTypeLabel(accommodation.type)}
        </div>
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
                {[...Array(accommodation.star_rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-600">{accommodation.star_rating} étoiles</span>
            </div>
          )}

          {accommodation.average_rating > 0 && (
            <div className="flex items-center gap-2 text-amber-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-medium text-lg">{accommodation.average_rating}</span>
              {accommodation.review_count > 0 && (
                <span className="text-gray-400">({accommodation.review_count} avis)</span>
              )}
            </div>
          )}
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
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informations de contact</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
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
              <div className="flex items-start gap-3 md:col-span-2">
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

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6">
          {accommodation.type && (
            <div>
              <p className="text-sm text-gray-500 mb-1">Type d'hébergement</p>
              <p className="text-gray-900 font-medium">{getTypeLabel(accommodation.type)}</p>
            </div>
          )}

          {accommodation.star_rating && (
            <div>
              <p className="text-sm text-gray-500 mb-1">Classification</p>
              <p className="text-gray-900 font-medium">{accommodation.star_rating} étoiles</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}

