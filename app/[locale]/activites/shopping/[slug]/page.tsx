"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import type { Activity } from "@/lib/database.types"
import { Phone, Mail, Globe, ShoppingBag, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function ShoppingDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const locale = params.locale as string
  const t = useTranslations('navigation')
  
  const [activity, setActivity] = useState<Activity | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchActivity() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('activities')
          .select('*')
          .eq('slug', slug)
          .eq('category', 'shopping')
          .eq('is_published', true)
          .single()

        if (error) {
          console.error('Supabase error:', error)
          throw new Error(error.message || 'Activité non trouvée')
        }
        
        if (!data) {
          throw new Error('Activité non trouvée')
        }
        
        setActivity(data)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchActivity()
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

  if (error || !activity) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center py-20">
              <p className="text-red-500 mb-4 text-lg">Erreur: {error || 'Activité non trouvée'}</p>
              <Link
                href={`/${locale}/activites/shopping`}
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
              { label: t("activities"), href: `/${locale}/activites/shopping` },
              { label: t("shopping"), href: `/${locale}/activites/shopping` },
              { label: activity.name_fr, href: `/${locale}/activites/shopping/${slug}` }
            ]}
          />
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 w-full mb-8">
        {activity.main_image ? (
          <img
            src={activity.main_image}
            alt={activity.name_fr}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling?.classList.remove('hidden')
            }}
          />
        ) : null}
        <div className={`w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center ${activity.main_image ? 'hidden' : ''}`}>
          <ShoppingBag className="w-24 h-24 text-gray-400" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-20">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {activity.name_fr}
          </h1>
        </div>

        {/* Description */}
        {(activity.description_fr || activity.short_description_fr) && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {activity.description_fr || activity.short_description_fr}
            </p>
          </div>
        )}

        {/* Contact Information */}
        {(activity.phone || activity.email || activity.website) && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informations de contact</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {activity.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                    <a 
                      href={`tel:${activity.phone.replace(/\s/g, '')}`}
                      className="text-gray-900 font-medium hover:text-teal-600 transition-colors"
                    >
                      {activity.phone}
                    </a>
                  </div>
                </div>
              )}

              {activity.email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a 
                      href={`mailto:${activity.email}`}
                      className="text-gray-900 font-medium hover:text-teal-600 transition-colors break-all"
                    >
                      {activity.email}
                    </a>
                  </div>
                </div>
              )}

              {activity.website && (
                <div className="flex items-start gap-3 md:col-span-2">
                  <Globe className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Site web</p>
                    <a 
                      href={activity.website}
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

