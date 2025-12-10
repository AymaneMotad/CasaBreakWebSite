"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useParams } from "next/navigation"
import { useTranslations } from 'next-intl'
import { 
  Plane, Bus, Car, Train, MapPin, Clock, 
  CreditCard, Users, Luggage, ArrowRight, 
  CheckCircle, Phone, Globe, Navigation as NavIcon,
  Wifi, Coffee, ShoppingBag
} from "lucide-react"

export default function AeroportCentreVillePage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')

  const transportOptions = [
    {
      icon: Train,
      title: "Train (ONCF)",
      color: "#00a346",
      description: "Le moyen le plus économique et pratique pour rejoindre le centre-ville",
      details: [
        "Gare à l'aéroport Mohammed V",
        "Liaison directe vers Casa-Port (centre-ville)",
        "Durée : environ 30 minutes",
        "Départs fréquents toutes les heures",
        "Confortable et ponctuel"
      ],
      pricing: [
        "2ème classe : 60 dirhams",
        "1ère classe : 80 dirhams"
      ],
      contact: {
        phone: "+212 537 77 47 47",
        website: "www.oncf-voyages.ma"
      },
      tip: "Le train est recommandé pour éviter les embouteillages"
    },
    {
      icon: Bus,
      title: "Navette Aéroport",
      color: "#0066b2",
      description: "Service de navette directe vers le centre-ville",
      details: [
        "Départs réguliers depuis l'aéroport",
        "Arrêts principaux : Casa-Port, Place Mohammed V",
        "Durée : 45-60 minutes (selon le trafic)",
        "Confortable avec espace bagages"
      ],
      pricing: [
        "Tarif unique : ~20-30 dirhams"
      ],
      contact: {
        phone: "+212 522 99 83 83",
        website: "www.casatramway.ma"
      },
      tip: "Vérifiez les horaires à l'avance"
    },
    {
      icon: Car,
      title: "Taxis",
      color: "#c10000",
      description: "Transport privé pour plus de confort et flexibilité",
      types: [
        {
          name: "Grands Taxis",
          details: [
            "Taxis collectifs depuis l'aéroport",
            "Partagé avec d'autres passagers"
          ],
          price: null
        }
      ]
    },
    {
      icon: Car,
      title: "Location de Voiture",
      color: "#ffd700",
      description: "Agences de location disponibles à l'aéroport",
      details: [
        "Plusieurs agences internationales (Hertz, Avis, Europcar, etc.)",
        "Guichets dans le hall des arrivées",
        "Réservation en ligne recommandée",
        "Permis de conduire international requis",
        "Assurance complète recommandée"
      ],
      pricing: [
        "Varie selon le type de véhicule et la durée"
      ],
      tip: "Réservez à l'avance pour de meilleurs tarifs"
    }
  ]

  const airportInfo = {
    name: "Aéroport International Mohammed V",
    distance: "30 km au sud de Casablanca",
    code: "CMN",
    facilities: [
      { name: "WiFi gratuit", icon: Wifi },
      { name: "Restaurants & cafés", icon: Coffee },
      { name: "Boutiques duty-free", icon: ShoppingBag },
      { name: "Guichets de change", icon: CreditCard },
      { name: "Location de voitures", icon: Car },
      { name: "Parking longue durée", icon: Car }
    ]
  }

  const tips = [
    {
      icon: Clock,
      title: "Temps de trajet",
      content: "Prévoyez 30-60 minutes selon le moyen de transport et le trafic"
    },
    {
      icon: CreditCard,
      title: "Paiement",
      content: "Dirhams marocains (MAD). Change disponible à l'aéroport"
    },
    {
      icon: Luggage,
      title: "Bagages",
      content: "Tous les moyens de transport acceptent les bagages standards"
    },
    {
      icon: MapPin,
      title: "Destination",
      content: "Centre-ville : Place Mohammed V, Casa-Port, Corniche"
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
              { label: t("planStay"), href: `/${locale}/planifier` },
              { label: t("airportToCity"), href: `/${locale}/planifier/aeroport-centre-ville` }
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
              <Plane className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm text-[#00a346] font-bold">Transfert aéroport</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-4">
              Aéroport → <span className="bg-gradient-to-r from-[#00a346] to-[#0066b2] bg-clip-text text-transparent">Centre-ville</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tous les moyens de transport pour rejoindre le centre de Casablanca depuis l'aéroport Mohammed V
            </p>
          </div>
        </div>
      </div>

      {/* Airport Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#00a346]/10 via-[#0066b2]/10 to-[#c10000]/10 border-2 border-[#00a346]/20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#00a346]/20 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-8 h-8 text-[#00a346]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-[#1a1a1a] mb-2">{airportInfo.name}</h2>
                  <p className="text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {airportInfo.distance} • Code : {airportInfo.code}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    {airportInfo.facilities.map((facility, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <facility.icon className="w-4 h-4 text-[#00a346]" />
                        <span className="text-sm">{facility.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            {transportOptions.map((option, i) => (
              <div 
                key={i}
                className="group rounded-3xl bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Header */}
                <div 
                  className="p-8 bg-gradient-to-br"
                  style={{ 
                    background: `linear-gradient(135deg, ${option.color}15 0%, ${option.color}08 100%)` 
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0"
                      style={{ backgroundColor: `${option.color}25` }}
                    >
                      <option.icon className="w-10 h-10" style={{ color: option.color }} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-black text-[#1a1a1a] mb-2">{option.title}</h2>
                      <p className="text-gray-600 text-lg">{option.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Details */}
                    <div>
                      <h3 className="text-xl font-black text-[#1a1a1a] mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" style={{ color: option.color }} />
                        Informations
                      </h3>
                      <ul className="space-y-3 mb-6">
                        {option.details?.map((detail, j) => (
                          <li key={j} className="flex items-start gap-3 text-gray-700">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: option.color }} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Pricing */}
                      {option.pricing && (
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                          <h4 className="text-lg font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
                            <CreditCard className="w-5 h-5" style={{ color: option.color }} />
                            Tarifs
                          </h4>
                          <ul className="space-y-2">
                            {option.pricing.map((price, j) => (
                              <li key={j} className="text-gray-700 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" style={{ color: option.color }} />
                                <span>{price}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Types (for Taxis) */}
                      {option.types && (
                        <div className="space-y-4">
                          {option.types.map((type, j) => (
                            <div key={j} className="p-4 rounded-xl border-2 border-gray-200">
                              <h4 className="font-black text-lg mb-2 text-[#1a1a1a]">{type.name}</h4>
                              <ul className="space-y-2 mb-3">
                                {type.details.map((detail, k) => (
                                  <li key={k} className="flex items-start gap-2 text-sm text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: option.color }} />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                              {type.price && (
                                <div className="text-lg font-bold" style={{ color: option.color }}>
                                  {type.price}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Contact & Tip */}
                    <div className="space-y-6">
                      {/* Contact Info */}
                      {option.contact && (
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                          <h3 className="text-lg font-black text-[#1a1a1a] mb-4 flex items-center gap-2">
                            <Phone className="w-5 h-5" style={{ color: option.color }} />
                            Contact
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-gray-500" />
                              <a 
                                href={`tel:${option.contact.phone.replace(/\s/g, '')}`}
                                className="text-gray-700 hover:text-[#0066b2] font-medium"
                              >
                                {option.contact.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-3">
                              <Globe className="w-4 h-4 text-gray-500" />
                              <a 
                                href={`https://${option.contact.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0066b2] hover:underline font-medium"
                              >
                                {option.contact.website}
                              </a>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tip */}
                      {option.tip && (
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/10 border-2 border-[#ffd700]/30">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#ffd700]/30 flex items-center justify-center flex-shrink-0">
                              <NavIcon className="w-4 h-4 text-[#b8860b]" />
                            </div>
                            <div>
                              <h4 className="font-black text-[#1a1a1a] mb-2">Conseil pratique</h4>
                              <p className="text-gray-700 text-sm">{option.tip}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-4">
              Conseils pratiques
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quelques informations utiles pour votre transfert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00a346]/15 flex items-center justify-center mb-4">
                  <tip.icon className="w-6 h-6 text-[#00a346]" />
                </div>
                <h3 className="text-lg font-black text-[#1a1a1a] mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="py-16 bg-gradient-to-br from-[#00a346]/10 via-[#0066b2]/10 to-[#c10000]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
              <MapPin className="w-4 h-4 text-[#0066b2]" />
              <span className="text-sm text-[#0066b2] font-bold">Itinéraire</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-4">
              Planifiez votre itinéraire
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Utilisez Google Maps ou Waze pour calculer le temps de trajet en temps réel selon le trafic
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.google.com/maps/dir/Aéroport+Mohammed+V,+Casablanca/Casablanca,+Morocco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a1a1a] rounded-2xl hover:shadow-xl transition-all font-bold border-2 border-gray-200"
              >
                <MapPin className="w-5 h-5" />
                Ouvrir dans Google Maps
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
