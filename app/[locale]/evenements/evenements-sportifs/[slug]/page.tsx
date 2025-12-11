"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { createClient } from "@/utils/supabase/client"
import type { Event } from "@/lib/database.types"
import { Phone, Mail, Globe, Trophy, ArrowLeft, ExternalLink, MapPin, Calendar, Ticket } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function EventDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const locale = params.locale as string
  const t = useTranslations('navigation')
  
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEvent() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('slug', slug)
          .eq('category', 'evenements-sportifs')
          .eq('is_published', true)
          .single()

        if (error) throw new Error(error.message || 'Événement non trouvé')
        if (!data) throw new Error('Événement non trouvé')
        setEvent(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement')
      } finally {
        setLoading(false)
      }
    }
    if (slug) fetchEvent()
  }, [slug])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  const formatPrice = (isFree: boolean, priceFrom: number | null, priceTo: number | null) => {
    if (isFree) return 'Gratuit'
    if (priceFrom && priceTo) return `${priceFrom} - ${priceTo} MAD`
    if (priceFrom) return `À partir de ${priceFrom} MAD`
    return 'Prix sur demande'
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
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error || !event) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center py-20">
              <p className="text-red-500 mb-4 text-lg">Erreur: {error || 'Événement non trouvé'}</p>
              <Link href={`/${locale}/evenements/evenements-sportifs`} className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour à la liste
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
      <div className="pt-24 pb-6">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[
            { label: t("sportsEvents"), href: `/${locale}/evenements/evenements-sportifs` },
            { label: event.name_fr, href: `/${locale}/evenements/evenements-sportifs/${slug}` }
          ]} />
        </div>
      </div>
      <div className="relative h-96 w-full mb-8">
        {event.main_image ? (
          <img src={event.main_image} alt={event.name_fr} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden') }} />
        ) : null}
        <div className={`w-full h-full bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center ${event.main_image ? 'hidden' : ''}`}>
          <Trophy className="w-24 h-24 text-gray-400" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-20">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.name_fr}</h1>
        </div>
        <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Date</p>
                <p className="text-gray-900 font-medium">{formatDate(event.start_date)}{event.end_date && ` - ${formatDate(event.end_date)}`}</p>
              </div>
            </div>
            {event.venue_name_fr && (
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Lieu</p>
                  <p className="text-gray-900 font-medium">{event.venue_name_fr}</p>
                </div>
              </div>
            )}
            <div className="flex items-start gap-3">
              <Ticket className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Prix</p>
                <p className="text-gray-900 font-medium">{formatPrice(event.is_free, event.price_from, event.price_to)}</p>
              </div>
            </div>
            {event.organizer_name && (
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Organisateur</p>
                  <p className="text-gray-900 font-medium">{event.organizer_name}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {event.description_fr && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">{event.description_fr}</p>
          </div>
        )}
        {(event.phone || event.email || event.website || event.ticket_url) && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informations pratiques</h2>
            <div className="space-y-6">
              {event.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                    <a href={`tel:${event.phone.replace(/\s/g, '')}`} className="text-gray-900 font-medium hover:text-yellow-600 transition-colors">{event.phone}</a>
                  </div>
                </div>
              )}
              {event.email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href={`mailto:${event.email}`} className="text-gray-900 font-medium hover:text-yellow-600 transition-colors">{event.email}</a>
                  </div>
                </div>
              )}
              {event.website && (
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Site web</p>
                    <a href={event.website} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:text-yellow-600 transition-colors inline-flex items-center gap-1">{event.website}<ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
              )}
              {event.ticket_url && (
                <div className="flex items-start gap-3">
                  <Ticket className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Billetterie</p>
                    <a href={event.ticket_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium">Acheter des billets<ExternalLink className="w-4 h-4" /></a>
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
