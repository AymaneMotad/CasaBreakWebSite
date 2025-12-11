"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useTranslations, useLocale } from 'next-intl'
import { MapPin, Clock, Info, Star, ExternalLink } from "lucide-react"

interface Attraction {
  id: string
  title: string
  description: string
  address: string
  hours: string
  price: string
  notes?: string[]
  highlights?: string[]
  image: string
  color: string
}

export default function IncontournablesPage() {
  const t = useTranslations('navigation')
  const locale = useLocale()

  const attractions: Attraction[] = [
    {
      id: "hassan2",
      title: "Mosquée Hassan II",
      description: "Chef-d'œuvre posé sur l'océan, c'est le monument iconique de Casablanca.",
      address: "Boulevard de la Corniche, Casablanca",
      hours: "Tous les jours (sauf vendredi midi), visites guidées en matinée et début d'après-midi",
      price: "Visite payante",
      notes: ["Chaussures à retirer", "Tenue décente requise"],
      highlights: ["Le minaret le plus haut du monde", "La vue sur la mer depuis l'intérieur"],
      image: "https://images.unsplash.com/photo-1696259629194-5411989d6675?w=800&q=80",
      color: "#00a346"
    },
    {
      id: "sacrecoeur",
      title: "Espace Sacré-Cœur",
      description: "Ancienne église blanche aux allures néo-gothiques devenue lieu d'art et culture.",
      address: "Parc de la Ligue arabe, angle rue d'Alger et bd Rachidi",
      hours: "Mardi à dimanche, 9h – 18h (fermé lundi)",
      price: "50 DH, Gratuit pour les résidents au Maroc",
      notes: ["Calme", "Insolite", "En plein centre-ville"],
      image: "https://aemagazine.ma/wp-content/uploads/Eglise-du-Sacre-Coeur-4-scaled.jpg",
      color: "#0066b2"
    },
    {
      id: "villa-arts",
      title: "Villa des Arts",
      description: "Musée d'art moderne dans une villa Art Déco avec jardin.",
      address: "30, bd Brahim Roudani, Casablanca",
      hours: "Mardi à dimanche, 9h – 19h (fermé lundi)",
      price: "Gratuit",
      notes: ["Espace calme + café", "Belles expos toute l'année"],
      highlights: ["Expo photo, peinture, sculpture marocaine contemporaine"],
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
      color: "#c10000"
    },
    {
      id: "medina",
      title: "Ancienne Médina",
      description: "Quartier historique avec ruelles, artisans, souks, ambiance populaire.",
      address: "Entrée principale : Bab Marrakech (proche La Sqala)",
      hours: "Accessible tous les jours (préférable en journée)",
      price: "Accès libre",
      notes: ["Idéal pour souvenirs, photos, street food"],
      highlights: ["La Sqala", "Artisans", "Ruelles authentiques"],
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/ancienne%20medina.jpeg",
      color: "#00a346"
    },
    {
      id: "marche-central",
      title: "Marché Central",
      description: "Marché couvert traditionnel en plein centre avec poisson, épices, street food.",
      address: "Bd Mohammed V (arrêt tram \"Marché Central\")",
      hours: "Lundi–vendredi 8h–16h30 / Week-end jusqu'à 17h–18h",
      price: "Gratuit – repas poisson à petit prix sur place",
      notes: ["Y aller en matinée pour plus d'animation"],
      highlights: ["Griller son poisson directement sur place"],
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      color: "#0066b2"
    },
    {
      id: "place-mohammed-v",
      title: "Place Mohammed V",
      description: "Grande place historique avec fontaines et bâtiments Art déco.",
      address: "Centre-ville, près du parc de la Ligue arabe",
      hours: "24h/24 – animations en soirée",
      price: "Gratuit",
      notes: ["Idéale pour flâner, prendre des photos"],
      highlights: ["Fontaine musicale le soir", "Pigeons", "Architecture"],
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
      color: "#c10000"
    },
    {
      id: "habous",
      title: "Quartier Habous",
      description: "Nouvelle médina élégante avec artisanat, librairies et mosquées.",
      address: "Quartier Mers Sultan, près du Palais Royal",
      hours: "Boutiques ouvertes du lundi au samedi, fermées le dimanche",
      price: "Accès libre",
      notes: ["Pâtisserie Bennis", "Marché aux olives", "Souk artisanal"],
      highlights: ["Mahkama du Pacha", "Shopping typique"],
      image: "https://www.casablancacity.ma/couvertures/article/VHJxttdLS5Apk1JoMXG8q9LO05rEv6MPf2NynFhl.jpeg",
      color: "#00a346"
    },
    {
      id: "corniche",
      title: "Corniche & Aïn Diab",
      description: "Promenade en bord de mer, plages, cafés, sunset & vie nocturne.",
      address: "Boulevard de la Corniche, Aïn Diab",
      hours: "24h/24",
      price: "Accès libre, activités payantes (plages privées, clubs…)",
      notes: ["Balade à vélo : Locations disponibles avec AlloBike ou loueurs locaux (à côté d'AnfaPlace ou Morocco Mall)"],
      highlights: ["Coucher de soleil", "Ambiance nocturne"],
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/ain%20diab%20plage%201.jpeg",
      color: "#0066b2"
    },
    {
      id: "morocco-mall",
      title: "Morocco Mall",
      description: "Plus grand centre commercial d'Afrique avec shopping, aquarium, loisirs.",
      address: "Angle bd de la Corniche et bd de l'Océan, Aïn Diab",
      hours: "Tous les jours – boutiques 10h–21h, restaus jusqu'à 22h",
      price: "Entrée gratuite, attractions à petit prix",
      notes: ["Aquarium géant", "Fontaine musicale", "Adventureland", "Patinoire"],
      highlights: ["L'ascenseur dans l'aquarium", "Show nocturne"],
      image: "https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220728133423/hero_poi_morocco-mall.jpg",
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
              { label: "Activités", href: `/${locale}/activites` },
              { label: "Incontournables", href: `/${locale}/activites/incontournables` }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Activités Incontournables</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez les lieux emblématiques et les expériences essentielles de Casablanca
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <article
              key={attraction.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={attraction.image}
                  alt={attraction.title}
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
                  <MapPin className="w-16 h-16 text-gray-400" />
                </div>
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div 
                    className="px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg"
                    style={{ backgroundColor: attraction.color }}
                  >
                    <Star className="w-3 h-3 inline mr-1" />
                    Incontournable
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {attraction.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {attraction.description}
                </p>

                {/* Address */}
                <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: attraction.color }} />
                  <span>{attraction.address}</span>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: attraction.color }} />
                  <span>{attraction.hours}</span>
                </div>

                {/* Notes */}
                {attraction.notes && attraction.notes.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-start gap-2 text-sm">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: attraction.color }} />
                      <div className="flex flex-wrap gap-2">
                        {attraction.notes.map((note, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {attraction.highlights && attraction.highlights.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 mb-2">À ne pas rater :</p>
                    <ul className="space-y-1">
                      {attraction.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
