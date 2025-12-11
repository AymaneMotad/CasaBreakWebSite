"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'
import { Trees, Sparkles, MapPin, Clock, Ruler, Wrench, Navigation as NavIcon, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Complete parks data with all information provided
const parksData = [
  {
    id: 'ligue_arabe',
    name: 'Parc de la Ligue Arabe',
    district: 'Centre-ville',
    description: 'Plus grand parc urbain rénové, allées de palmiers, skate-park, parcours sportif, jeux enfants.',
    surface: '30 ha',
    equipment: 'Jeux, sport, PMR, cafés',
    coordinates: { lat: 33.5900, lng: -7.6155 },
    hours: '6h-21h',
    image: 'https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Parc%20de%20la%20ligue%20arabe%20.jpg',
    address: 'Entre Rue Rachidi, Boulevard Moulay Youssef, Rue d\'Alger et Avenue Hassan II, Casablanca 20000',
    featured: false
  },
  {
    id: 'hermitage',
    name: 'Parc de l\'Hermitage',
    district: 'Bourgogne',
    description: 'Parc centenaire réaménagé : jardins du monde, grande pièce d\'eau, chemin pédagogique.',
    surface: '15 ha',
    equipment: 'Jeux, pédestre, PMR',
    coordinates: { lat: 33.5910, lng: -7.6300 },
    hours: '7h-20h',
    image: 'https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Parc%20de%20l\'hermitage%20.jpg',
    address: 'Boulevard Modibo Keita, quartier Hermitage, Casablanca 20250',
    featured: false
  },
  {
    id: 'isesco',
    name: 'Parc ISESCO (ex Jardin Yasmina)',
    district: 'Centre-ville',
    description: 'Espace vert central avec jeux et promenades familiales.',
    surface: '8 ha',
    equipment: 'Jeux enfants, bancs',
    coordinates: { lat: 33.5950, lng: -7.6200 },
    hours: '8h-19h',
    image: 'https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Parc%20Isesco.jpg',
    address: '19 Rue de Rome, Parc Murdoch – ISESCO, Casablanca 20250',
    featured: false
  },
  {
    id: 'anfa_park',
    name: 'Anfa Park',
    district: 'Casa-Anfa',
    description: 'Grand parc paysager du nouveau quartier Anfa, espaces sportifs et jeux.',
    surface: '20 ha',
    equipment: 'Sport, jeux, vélos',
    coordinates: { lat: 33.5800, lng: -7.6700 },
    hours: '7h-20h',
    image: null, // No image provided
    address: 'Boulevard Sidi Abderrahmane, Casa-Anfa, Casablanca',
    featured: false
  },
  {
    id: 'mohammed_v',
    name: 'Parc Jardin Mohammed V',
    district: 'Centre-ville',
    description: 'Jardin historique emblématique, havre de paix urbain.',
    surface: '5 ha',
    equipment: 'Bancs, fontaines',
    coordinates: { lat: 33.5880, lng: -7.6100 },
    hours: '24h',
    image: 'https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Parc-Jardin-Mohammed-V-scaled.jpg',
    address: 'Secteur Avenue des FAR / Boulevard Rachidi, à proximité de la Place Mohammed V, Casablanca',
    featured: false
  },
  {
    id: 'casa_nearshore',
    name: 'Parc Casa Nearshore',
    district: 'Sidi Maârouf',
    description: 'Jardin moderne de 5 ha avec jeux et promenades.',
    surface: '5 ha',
    equipment: 'Jeux, pédestre',
    coordinates: { lat: 33.5400, lng: -7.5500 },
    hours: '8h-19h',
    image: 'https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Parc%20Casanearshore.jpg',
    address: 'Parc public au sein du parc d\'activités Casa Nearshore, Sidi Maârouf, Casablanca',
    featured: false
  },
  {
    id: 'sbata',
    name: 'Parc Sbata',
    district: 'Sbata',
    description: 'Grand espace vert périphérique pour familles et sports.',
    surface: '12 ha',
    equipment: 'Jeux, terrains sport',
    coordinates: { lat: 33.5200, lng: -7.5800 },
    hours: '7h-20h',
    image: null, // No image provided
    address: 'Quartier Sbata, près de l\'avenue principale de Sbata, Casablanca',
    featured: false
  },
  {
    id: 'chaouia',
    name: 'Parc Chaouia',
    district: 'Gauthier',
    description: 'Petit parc de quartier avec jeux et aires de détente.',
    surface: '3 ha',
    equipment: 'Jeux enfants, bancs',
    coordinates: { lat: 33.5920, lng: -7.6350 },
    hours: '8h-19h',
    image: 'https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Parc%20Chaouia.jpeg',
    address: 'Secteur Gauthier, Casablanca',
    featured: false
  },
  {
    id: 'oulfa',
    name: 'Lac de Oulfa',
    district: 'Oulfa',
    description: 'Étendue d\'eau aménagée pour promenade et observation nature.',
    surface: '4 ha',
    equipment: 'Pédestre, bancs',
    coordinates: { lat: 33.5700, lng: -7.5900 },
    hours: '7h-20h',
    image: 'https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Par%20etang%20oulfa%20.jpg',
    address: 'Parc de l\'Étang El Oulfa, quartier El Oulfa / Firdaous, Arrondissement Hay Hassani, Casablanca',
    featured: false
  },
  {
    id: 'sidi_abderrahmane',
    name: 'Parc archéologique Sidi Abderrahmane',
    district: 'Anfa / bord de mer',
    description: 'Site historique avec vestiges archéologiques, grottes et parcours nature en bord d\'océan. Patrimoine naturel + culturel.',
    surface: '25 ha',
    equipment: 'Pédestre, archéologie, vue mer',
    coordinates: { lat: 33.5850, lng: -7.6800 },
    hours: 'Lever/coucher soleil',
    image: 'https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Parc%20archeologique%20sidi%20abderahmane%20.jpeg',
    address: 'Site de Sidi Abderrahmane, Corniche d\'Aïn Diab, Boulevard Sidi Abderrahmane, Casablanca',
    featured: false
  },
  {
    id: 'bouskoura',
    name: 'Forêt de Bouskoura',
    district: 'Bouskoura (périphérie)',
    description: 'Grande forêt pour jogging, VTT, pique-niques.',
    surface: '1000+ ha',
    equipment: 'Pistes VTT, pédestre',
    coordinates: { lat: 33.4500, lng: -7.6500 },
    hours: 'Lever/coucher soleil',
    image: null, // No image provided
    address: 'Forêt de Bouskoura-Meriam, Route de Bouskoura, au sud de Casablanca',
    featured: false
  },
  {
    id: 'zoo',
    name: 'Zoo de Ain Sebaa',
    district: 'Ain Sebaa',
    description: 'Parc zoologique récemment rénové. Plus de 300 animaux représentant 45 espèces différentes, répartis en trois zones thématiques inspirées de l\'Afrique, de l\'Asie et de l\'Amérique.',
    surface: '13 ha',
    equipment: 'Visites guidées, aires de jeux, restauration',
    coordinates: { lat: 33.5500, lng: -7.6000 },
    hours: 'Ouvert tous les jours',
    image: 'https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/zoo%20ain%20sebaa.jpeg',
    address: 'Ain Sebaa, Casablanca',
    featured: true
  }
]

function ParkCard({ park, isExpanded, onToggle }: { park: typeof parksData[0], isExpanded: boolean, onToggle: () => void }) {
  const mapUrl = `https://www.google.com/maps?q=${park.coordinates.lat},${park.coordinates.lng}`
  
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        {park.image ? (
          <img
            src={park.image}
            alt={park.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 via-blue-100 to-rose-100 flex items-center justify-center">
            <Trees className="w-16 h-16 text-gray-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-bold text-gray-900 rounded-full mb-2">
            {park.district}
          </span>
          <h3 className="text-xl font-bold text-white drop-shadow-lg">
            {park.name}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {park.description}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-start gap-2">
            <Ruler className="w-4 h-4 text-[#00a346] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-gray-500">Surface</p>
              <p className="text-sm font-bold text-gray-900">{park.surface}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#0066b2] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-gray-500">Horaires</p>
              <p className="text-sm font-bold text-gray-900">{park.hours}</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-start gap-2 mb-2">
            <Wrench className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 mb-1">Équipements</p>
              <p className="text-sm text-gray-700">{park.equipment}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onToggle}
          className="w-full text-left text-sm font-semibold text-[#00a346] hover:text-[#008030] transition-colors flex items-center justify-between mb-3"
        >
          <span>{isExpanded ? 'Masquer les détails' : 'Voir tous les détails'}</span>
          <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
        </button>

        {isExpanded && (
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#00a346] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-500 mb-1">Adresse</p>
                <p className="text-sm text-gray-700 leading-relaxed">{park.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <NavIcon className="w-4 h-4 text-[#0066b2] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-500 mb-1">Coordonnées GPS</p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0066b2] hover:underline flex items-center gap-1"
                >
                  {park.coordinates.lat}, {park.coordinates.lng}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

function FeaturedPark({ park }: { park: typeof parksData[0] }) {
  const mapUrl = `https://www.google.com/maps?q=${park.coordinates.lat},${park.coordinates.lng}`
  
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
          {park.image ? (
            <img
              src={park.image}
              alt={park.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-emerald-100 via-blue-100 to-rose-100 flex items-center justify-center">
              <Trees className="w-24 h-24 text-gray-400" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Badge */}
          <div className="absolute top-6 left-6">
            <div className="px-4 py-2 bg-[#00a346] text-white rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
              <Sparkles className="w-4 h-4" />
              À découvrir
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold mb-3">
              {park.district}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 group-hover:text-[#00a346] transition-colors">
              {park.name}
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {park.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Ruler className="w-5 h-5 text-[#00a346]" />
                <p className="text-xs font-semibold text-gray-500">Surface</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{park.surface}</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-[#0066b2]" />
                <p className="text-xs font-semibold text-gray-500">Horaires</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{park.hours}</p>
            </div>
          </div>

          {/* Equipment */}
          <div className="bg-emerald-50 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-2">
              <Wrench className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Équipements</p>
                <p className="text-sm text-gray-700">{park.equipment}</p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00a346] mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Adresse</p>
                <p className="text-sm text-gray-600 leading-relaxed">{park.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <NavIcon className="w-5 h-5 text-[#0066b2] mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Coordonnées GPS</p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0066b2] hover:underline flex items-center gap-2 font-medium"
                >
                  {park.coordinates.lat}, {park.coordinates.lng}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function PleinAirMerPage() {
  const t = useTranslations('pleinAirMer')
  const locale = useLocale()
  const [expandedParks, setExpandedParks] = useState<Set<string>>(new Set())

  const togglePark = (parkId: string) => {
    setExpandedParks(prev => {
      const next = new Set(prev)
      if (next.has(parkId)) {
        next.delete(parkId)
      } else {
        next.add(parkId)
      }
      return next
    })
  }

  const featuredPark = parksData.find(p => p.featured)
  const regularParks = parksData.filter(p => !p.featured)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("breadcrumb.activities"), href: `/${locale}/activites/incontournables` },
              { label: t("breadcrumb.pleinAirMer"), href: `/${locale}/activites/plein-air-mer` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-blue-50/40 to-rose-50/50" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00a346]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0066b2]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200/50 mb-6 shadow-sm">
              <Trees className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm text-gray-700 font-medium">{t("hero.badge")}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient-can">{t("hero.title")}</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Parks Section */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Featured Park */}
          {featuredPark && (
            <div className="mb-16">
              <FeaturedPark park={featuredPark} />
            </div>
          )}

          {/* Parks Grid */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Parcs & Jardins de Casablanca
              </h2>
              <p className="text-gray-600 text-lg">
                {regularParks.length} espaces verts à découvrir
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularParks.map((park) => (
                <ParkCard
                  key={park.id}
                  park={park}
                  isExpanded={expandedParks.has(park.id)}
                  onToggle={() => togglePark(park.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00a346]/10 via-[#0066b2]/10 to-[#c10000]/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00a346]/15 via-[#0066b2]/15 to-[#c10000]/15 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#0066b2]" />
              <span className="text-sm text-gray-700 font-medium">{t("cta.badge")}</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              {t("cta.title")}
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00a346] via-[#0066b2] to-[#00a346] bg-[length:200%_100%] text-white font-semibold rounded-2xl hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-[#00a346]/25 hover:shadow-[#00a346]/40 hover:scale-105 group"
            >
              <span>{t("cta.button")}</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
