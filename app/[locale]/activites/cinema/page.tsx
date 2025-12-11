"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'
import { MapPin, Clock, Info, Film } from "lucide-react"

interface Cinema {
  id: string
  title: string
  description: string
  address: string
  hours: string
  image: string
  color: string
}

export default function CinemaPage() {
  const t = useTranslations('navigation')
  const locale = useLocale()

  const cinemas: Cinema[] = [
    {
      id: "lutetia",
      title: "Lutetia",
      description: "Le cinéma Lutetia est une salle mythique du centre-ville de Casablanca qui a su préserver son charme d'antan tout en se modernisant. Récemment rénové, ce ciné-théâtre à l'architecture art déco offre une ambiance nostalgique et conviviale pour apprécier une programmation variée, des classiques du septième art aux films contemporains.",
      address: "19 rue Tata (quartier Gironde), Casablanca",
      hours: "Séances l'après-midi et en soirée (généralement vers 14h30, 17h00 et 19h30)",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/cinema%20lutetia.jpg",
      color: "#00a346"
    },
    {
      id: "pathe",
      title: "Pathé",
      description: "Le Pathé Californie est un multiplexe ultramoderne offrant une expérience cinéma haut de gamme à Casablanca. Situé dans le Californie Mall, il dispose de 8 salles équipées des dernières technologies (IMAX, 4DX, son Dolby Atmos) et propose des sièges grand confort, pour une immersion totale dans une ambiance familiale et moderne.",
      address: "Centre Commercial Californie (Aïn Chock), Casablanca",
      hours: "Ouvert tous les jours, premières séances vers 11h00 et dernières aux alentours de 23h00 (selon la programmation)",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/PATHE.jpeg",
      color: "#0066b2"
    },
    {
      id: "megarama",
      title: "Mégarama",
      description: "Le Mégarama est l'un des plus grands complexes cinématographiques de la ville, idéal pour une sortie en famille ou entre amis. Situé en bord de mer sur la Corniche d'Aïn Diab, ce multiplexe de 14 salles projette les derniers blockbusters et films internationaux. L'ambiance y est animée et conviviale, avec un large choix de séances tout au long de la journée.",
      address: "Boulevard de la Corniche (Aïn Diab), Casablanca",
      hours: "Séances tous les jours à 14h15, 17h00, 19h45, 20h30 et 22h30 (séance additionnelle à 11h00 le week-end et les jours fériés)",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Megarama.png",
      color: "#c10000"
    },
    {
      id: "rif",
      title: "Rif",
      description: "Le cinéma Rif est une salle historique située en plein cœur de Casablanca, connue pour son cachet vintage. Récemment remis à neuf et équipé en numérique, il propose des projections quotidiennes de films en version française dans un cadre authentique. Son ambiance rétro et intime fait revivre l'âge d'or des cinémas de quartier.",
      address: "Avenue des FAR, Casablanca",
      hours: "Tous les jours à 15h00, 17h00 et 19h30",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/cinema%20rif.jpeg",
      color: "#00a346"
    },
    {
      id: "ritz",
      title: "Ritz",
      description: "Le Ritz est un autre cinéma emblématique de Casablanca, qui a rouvert ses portes après une rénovation complète. Transformé en espace culturel polyvalent, ce lieu historique propose non seulement des films à l'affiche, mais accueille aussi des pièces de théâtre, des concerts et des événements artistiques. Son décor d'époque restauré et son équipement moderne en font un endroit unique mêlant patrimoine et divertissement.",
      address: "Rue Mohamed El Qorri, Casablanca",
      hours: "Tous les jours à 15h00, 17h00 et 19h30",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/ritz.png",
      color: "#0066b2"
    },
    {
      id: "eden-club",
      title: "Eden Club",
      description: "Le cinéma-théâtre Eden Club est une salle d'époque nichée au centre de Casablanca, qui plonge les spectateurs dans une atmosphère d'un autre temps. Avec son balcon et son orchestre à l'ancienne, ce petit cinéma de quartier offre une expérience authentique et populaire. On y projette des films actuels dans une ambiance chaleureuse rappelant le Casablanca d'autrefois.",
      address: "217 rue Mustapha El Maâni, Casablanca",
      hours: "Séances à 15h00, 17h00 et 22h00 (tous les jours)",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Eden%20club.jpeg",
      color: "#c10000"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("cinema"), href: `/${locale}/activites/cinema` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Cinémas de Casablanca</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez les salles de cinéma emblématiques de Casablanca, des salles historiques aux multiplexes modernes
          </p>
        </div>
      </section>

      {/* Cinemas Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cinemas.map((cinema) => (
            <article
              key={cinema.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={cinema.image}
                  alt={cinema.title}
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
                <div className="image-fallback hidden w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 items-center justify-center absolute inset-0 z-10">
                  <Film className="w-16 h-16 text-gray-400" />
                </div>
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div 
                    className="px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg"
                    style={{ backgroundColor: cinema.color }}
                  >
                    <Film className="w-3 h-3 inline mr-1" />
                    Cinéma
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {cinema.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {cinema.description}
                </p>

                {/* Address */}
                <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: cinema.color }} />
                  <span>{cinema.address}</span>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: cinema.color }} />
                  <span>{cinema.hours}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
