"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useParams } from "next/navigation"
import { useTranslations } from 'next-intl'
import { 
  MapPin, Hotel, Coffee, ShoppingBag, Waves, 
  Building, Heart, Star, Users, Clock, 
  DollarSign, Car, Train, Plane, 
  CheckCircle, ArrowRight, Camera, Utensils
} from "lucide-react"

export default function OuLogerPage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')

  const neighborhoods = [
    {
      name: "Centre-ville (Place Mohammed V)",
      color: "#00a346",
      icon: Building,
      description: "Le cœur historique et économique de Casablanca",
      highlights: [
        "Proximité des monuments historiques",
        "Accès facile aux transports en commun",
        "Nombreux restaurants et cafés",
        "Vie nocturne animée"
      ],
      pros: [
        "Central et bien desservi",
        "Nombreux commerces et services",
        "Accès facile à tous les quartiers",
        "Atmosphère authentique"
      ],
      cons: [
        "Peut être bruyant",
        "Prix d'hébergement plus élevés",
        "Trafic dense en heures de pointe"
      ],
      priceRange: "Moyen à élevé",
      bestFor: "Première visite, business, vie culturelle",
      transport: "Tramway, bus, taxis - excellent accès",
      attractions: [
        "Place Mohammed V",
        "Marché Central",
        "Cathédrale Sacré-Cœur",
        "Parc de la Ligue Arabe"
      ]
    },
    {
      name: "Corniche (Aïn Diab)",
      color: "#0066b2",
      icon: Waves,
      description: "Quartier balnéaire moderne le long de l'océan Atlantique",
      highlights: [
        "Vue sur l'océan",
        "Plages et promenades",
        "Restaurants de poisson",
        "Ambiance détendue"
      ],
      pros: [
        "Cadre magnifique face à la mer",
        "Nombreux hôtels de luxe",
        "Plages accessibles",
        "Quartier moderne et sécurisé"
      ],
      cons: [
        "Éloigné du centre historique",
        "Prix d'hébergement élevés",
        "Moins de transports en commun"
      ],
      priceRange: "Élevé",
      bestFor: "Séjour détente, familles, romantique",
      transport: "Taxis, VTC - accès limité en transport public",
      attractions: [
        "Plage d'Aïn Diab",
        "Corniche",
        "Mosquée Hassan II (proximité)",
        "Restaurants de poisson"
      ]
    },
    {
      name: "Maârif",
      color: "#c10000",
      icon: ShoppingBag,
      description: "Quartier commerçant et résidentiel populaire",
      highlights: [
        "Grands centres commerciaux",
        "Rue commerçante animée",
        "Restaurants variés",
        "Vie locale authentique"
      ],
      pros: [
        "Excellent pour le shopping",
        "Prix d'hébergement raisonnables",
        "Bien desservi par les transports",
        "Quartier vivant et authentique"
      ],
      cons: [
        "Peut être animé le soir",
        "Trafic dense",
        "Moins touristique"
      ],
      priceRange: "Moyen",
      bestFor: "Shopping, budget moyen, expérience locale",
      transport: "Tramway, bus, taxis - bon accès",
      attractions: [
        "Centre commercial Maârif",
        "Rue commerçante",
        "Marchés locaux",
        "Cafés traditionnels"
      ]
    },
    {
      name: "Anfa",
      color: "#ffd700",
      icon: Star,
      description: "Quartier résidentiel chic et moderne",
      highlights: [
        "Quartier résidentiel haut de gamme",
        "Villas et résidences modernes",
        "Calme et sécurisé",
        "Proximité de la Corniche"
      ],
      pros: [
        "Quartier calme et sécurisé",
        "Proximité de la mer",
        "Infrastructure moderne",
        "Bien entretenu"
      ],
      cons: [
        "Éloigné du centre-ville",
        "Prix d'hébergement élevés",
        "Moins de transports en commun",
        "Moins d'animation"
      ],
      priceRange: "Élevé",
      bestFor: "Familles, séjour longue durée, calme",
      transport: "Taxis, VTC - accès limité",
      attractions: [
        "Quartier résidentiel",
        "Proximité Corniche",
        "Parcs et espaces verts"
      ]
    },
    {
      name: "Hay Hassani",
      color: "#00a346",
      icon: Users,
      description: "Quartier résidentiel moderne et bien équipé",
      highlights: [
        "Quartier résidentiel moderne",
        "Bien équipé en commerces",
        "Proximité de l'aéroport",
        "Prix abordables"
      ],
      pros: [
        "Prix d'hébergement abordables",
        "Proximité de l'aéroport",
        "Quartier moderne",
        "Bien équipé"
      ],
      cons: [
        "Éloigné du centre-ville",
        "Moins touristique",
        "Trajets plus longs vers les attractions"
      ],
      priceRange: "Abordable",
      bestFor: "Budget serré, transit aéroport, séjour longue durée",
      transport: "Bus, taxis - accès modéré",
      attractions: [
        "Commerces locaux",
        "Parcs de quartier"
      ]
    },
    {
      name: "Oasis / 2 Mars",
      color: "#0066b2",
      icon: Heart,
      description: "Quartier central animé avec une vie locale authentique",
      highlights: [
        "Vie locale authentique",
        "Marchés traditionnels",
        "Restaurants populaires",
        "Prix abordables"
      ],
      pros: [
        "Prix très abordables",
        "Expérience locale authentique",
        "Marchés et commerces locaux",
        "Bien desservi"
      ],
      cons: [
        "Moins touristique",
        "Peut être bruyant",
        "Infrastructure moins moderne"
      ],
      priceRange: "Très abordable",
      bestFor: "Budget serré, expérience authentique, voyageurs indépendants",
      transport: "Tramway, bus, taxis - bon accès",
      attractions: [
        "Marchés locaux",
        "Vie de quartier",
        "Restaurants populaires"
      ]
    }
  ]

  const comparisonFactors = [
    {
      icon: DollarSign,
      title: "Budget",
      description: "Prix d'hébergement moyen par nuit"
    },
    {
      icon: Car,
      title: "Transport",
      description: "Facilité d'accès aux transports en commun"
    },
    {
      icon: Camera,
      title: "Attractions",
      description: "Proximité des sites touristiques"
    },
    {
      icon: Utensils,
      title: "Gastronomie",
      description: "Nombre et variété de restaurants"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("whereToStay"), href: `/${locale}/planifier/ou-loger` }
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <div className="pb-16 bg-gradient-to-b from-gray-50 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4] via-[#f0f9ff] to-[#fef7ed] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00a346]/10 via-[#0066b2]/10 to-[#c10000]/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a346]/10 border border-[#00a346]/20 mb-6">
              <MapPin className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm text-[#00a346] font-bold">Guide quartiers</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-4">
              Dans quel <span className="bg-gradient-to-r from-[#00a346] to-[#0066b2] bg-clip-text text-transparent">quartier loger</span> ?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guide complet des meilleurs quartiers de Casablanca pour votre séjour
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Factors */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {comparisonFactors.map((factor, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00a346]/15 flex items-center justify-center mx-auto mb-4">
                  <factor.icon className="w-6 h-6 text-[#00a346]" />
                </div>
                <h3 className="font-black text-[#1a1a1a] mb-2">{factor.title}</h3>
                <p className="text-sm text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            {neighborhoods.map((neighborhood, i) => (
              <div 
                key={i}
                className="group rounded-3xl bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Header */}
                <div 
                  className="p-8 bg-gradient-to-br"
                  style={{ 
                    background: `linear-gradient(135deg, ${neighborhood.color}15 0%, ${neighborhood.color}08 100%)` 
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0"
                      style={{ backgroundColor: `${neighborhood.color}25` }}
                    >
                      <neighborhood.icon className="w-10 h-10" style={{ color: neighborhood.color }} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-black text-[#1a1a1a] mb-2">{neighborhood.name}</h2>
                      <p className="text-gray-600 text-lg">{neighborhood.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Highlights */}
                      <div>
                        <h3 className="text-xl font-black text-[#1a1a1a] mb-4 flex items-center gap-2">
                          <Star className="w-5 h-5" style={{ color: neighborhood.color }} />
                          Points forts
                        </h3>
                        <ul className="space-y-2">
                          {neighborhood.highlights.map((highlight, j) => (
                            <li key={j} className="flex items-start gap-3 text-gray-700">
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: neighborhood.color }} />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pros & Cons */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                          <h4 className="font-black text-green-700 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Avantages
                          </h4>
                          <ul className="space-y-1.5">
                            {neighborhood.pros.map((pro, j) => (
                              <li key={j} className="text-sm text-green-700 flex items-start gap-2">
                                <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                          <h4 className="font-black text-orange-700 mb-3 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Points à noter
                          </h4>
                          <ul className="space-y-1.5">
                            {neighborhood.cons.map((con, j) => (
                              <li key={j} className="text-sm text-orange-700 flex items-start gap-2">
                                <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Quick Info */}
                      <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                        <h3 className="text-lg font-black text-[#1a1a1a] mb-4">Informations pratiques</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <DollarSign className="w-5 h-5 text-gray-500" />
                            <div>
                              <div className="text-xs text-gray-500">Prix</div>
                              <div className="font-bold text-[#1a1a1a]">{neighborhood.priceRange}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-gray-500 mt-0.5" />
                            <div>
                              <div className="text-xs text-gray-500">Idéal pour</div>
                              <div className="font-medium text-[#1a1a1a] text-sm">{neighborhood.bestFor}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Car className="w-5 h-5 text-gray-500 mt-0.5" />
                            <div>
                              <div className="text-xs text-gray-500">Transport</div>
                              <div className="font-medium text-[#1a1a1a] text-sm">{neighborhood.transport}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Attractions */}
                      <div>
                        <h3 className="text-xl font-black text-[#1a1a1a] mb-4 flex items-center gap-2">
                          <Camera className="w-5 h-5" style={{ color: neighborhood.color }} />
                          À voir dans le quartier
                        </h3>
                        <ul className="space-y-2">
                          {neighborhood.attractions.map((attraction, j) => (
                            <li key={j} className="flex items-center gap-3 text-gray-700">
                              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: neighborhood.color }} />
                              <span>{attraction}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation CTA */}
      <section className="py-16 bg-gradient-to-br from-[#00a346]/10 via-[#0066b2]/10 to-[#c10000]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
              <Heart className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm text-[#00a346] font-bold">Recommandation</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-4">
              Besoin d'aide pour choisir ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Pour une première visite, le centre-ville ou Maârif offrent le meilleur compromis entre accessibilité, prix et expérience. Pour un séjour détente, la Corniche est idéale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`/${locale}/planifier/hebergement`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#0066b2] text-white rounded-2xl hover:shadow-xl transition-all font-bold"
              >
                <Hotel className="w-5 h-5" />
                Voir les hébergements
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
