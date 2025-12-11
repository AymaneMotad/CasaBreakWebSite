"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useParams } from "next/navigation"
import { useTranslations } from 'next-intl'
import { 
  Bus, Train, Car, Taxi, MapPin, Clock, 
  CreditCard, Route, 
  CheckCircle, ArrowRight, Download, 
  Phone, Globe
} from "lucide-react"

export default function SeDeplacerPage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')

  const transportOptions = [
    {
      icon: Train,
      title: "Tramway (Casatramway)",
      color: "#00a346",
      description: "Réseau moderne et efficace pour se déplacer dans Casablanca",
      features: [
        "2 lignes en service couvrant la ville",
        "151 stations au total",
        "Fréquence : toutes les 8 minutes",
        "Ticket unique : 6 dirhams",
        "Valable sur tout le réseau",
        "Accessible aux personnes à mobilité réduite"
      ],
      contact: {
        phone: "+212 522 99 83 83",
        website: "www.casatramway.ma",
        hours: "Lun-Sam : 8h-20h"
      },
      app: {
        name: "Casatramway Mobile",
        features: [
          "Planification de trajets",
          "Horaires en temps réel",
          "Information sur le trafic",
          "E-boutique (en cours)"
        ]
      }
    },
    {
      icon: Bus,
      title: "Bus (Casabus)",
      color: "#0066b2",
      description: "Réseau de bus public desservant la métropole de Casablanca",
      features: [
        "60 lignes couvrant 970 km",
        "1 833 stations",
        "700 bus modernes",
        "Dessert Casablanca, Mohammedia et 16 communes",
        "Accessible aux personnes à mobilité réduite",
        "Flotte moderne et confortable"
      ],
      pricing: [
        "5 dirhams : trajets urbains",
        "6 dirhams : trajets < 30 km",
        "8 dirhams : trajets > 30 km"
      ],
      contact: {
        phone: "+212 520 55 20 55",
        website: "www.casabus.ma",
        hours: "7j/7 : 7h-21h"
      },
      stats: {
        passengers: "70 millions (2021)",
        fleet: "610 bus",
        distance: "+34 millions de km"
      }
    },
    {
      icon: Taxi,
      title: "Taxis",
      color: "#c10000",
      description: "Taxis pour tous vos déplacements",
      types: [
        {
          name: "Grands Taxis",
          color: "#991b1b",
          details: [
            "Trajets fixes entre villes",
            "Partagés avec d'autres passagers",
            "Idéal pour les déplacements interurbains",
            "Prix négociable"
          ]
        }
      ]
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
              { label: t("gettingAround"), href: `/${locale}/planifier/se-deplacer` }
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066b2]/10 border border-[#0066b2]/20 mb-6">
              <Route className="w-4 h-4 text-[#0066b2]" />
              <span className="text-sm text-[#0066b2] font-bold">Transport</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-4">
              Se déplacer à <span className="bg-gradient-to-r from-[#00a346] to-[#0066b2] bg-clip-text text-transparent">Casablanca</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tous les moyens de transport pour explorer la ville facilement
            </p>
          </div>
        </div>
      </div>

      {/* Transport Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            {transportOptions.map((option, i) => {
              const IconComponent = option.icon;
              if (!IconComponent) return null;
              return (
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
                      {IconComponent && <IconComponent className="w-10 h-10" style={{ color: option.color }} />}
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
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-black text-[#1a1a1a] mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" style={{ color: option.color }} />
                        Caractéristiques
                      </h3>
                      <ul className="space-y-3">
                        {option.features?.map((feature, j) => (
                          <li key={j} className="flex items-start gap-3 text-gray-700">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: option.color }} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Pricing */}
                      {option.pricing && (
                        <div className="mt-6">
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

                      {/* Stats */}
                      {option.stats && (
                        <div className="mt-6 p-4 rounded-xl bg-gray-50">
                          <h4 className="text-sm font-bold text-gray-500 mb-2">Statistiques 2021</h4>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-black" style={{ color: option.color }}>
                                {option.stats.passengers.split(' ')[0]}
                              </div>
                              <div className="text-xs text-gray-600">Passagers</div>
                            </div>
                            <div>
                              <div className="text-2xl font-black" style={{ color: option.color }}>
                                {option.stats.fleet.split(' ')[0]}
                              </div>
                              <div className="text-xs text-gray-600">Bus</div>
                            </div>
                            <div>
                              <div className="text-2xl font-black" style={{ color: option.color }}>
                                {option.stats.distance.split(' ')[0]}
                              </div>
                              <div className="text-xs text-gray-600">Km parcourus</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Contact & App */}
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
                            <div className="flex items-center gap-3">
                              <Clock className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-700">{option.contact.hours}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Mobile App */}
                      {option.app && (
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00a346]/10 to-[#0066b2]/10 border-2 border-[#00a346]/20">
                          <div className="flex items-center gap-3 mb-4">
                            <Phone className="w-6 h-6 text-[#00a346]" />
                            <h3 className="text-lg font-black text-[#1a1a1a]">{option.app.name}</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Application mobile gratuite disponible sur iOS et Android
                          </p>
                          <ul className="space-y-2 mb-4">
                            {option.app.features.map((feature, j) => (
                              <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-[#00a346]" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <a
                            href={`https://${option.contact?.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00a346] text-white rounded-xl hover:bg-[#008a3a] transition-colors text-sm font-bold"
                          >
                            <Download className="w-4 h-4" />
                            Télécharger l'app
                          </a>
                        </div>
                      )}

                      {/* Types (for Taxis) */}
                      {option.types && (
                        <div className="space-y-4">
                          {option.types.map((type, j) => (
                            <div key={j} className="p-4 rounded-xl border-2" style={{ borderColor: `${type.color}30` }}>
                              <h4 className="font-black text-lg mb-3" style={{ color: type.color }}>
                                {type.name}
                              </h4>
                              <ul className="space-y-2">
                                {type.details.map((detail, k) => (
                                  <li key={k} className="flex items-start gap-2 text-sm text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: type.color }} />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Options (for VTC) */}
                      {option.options && (
                        <div className="space-y-4">
                          {option.options.map((opt, j) => (
                            <div key={j} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                              <h4 className="font-black text-lg mb-2 text-[#1a1a1a]">{opt.name}</h4>
                              <p className="text-xs text-gray-500 mb-3">{opt.type}</p>
                              <ul className="space-y-2">
                                {opt.details.map((detail, k) => (
                                  <li key={k} className="flex items-start gap-2 text-sm text-gray-700">
                                    <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: option.color }} />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network Map CTA */}
      <section className="py-16 bg-gradient-to-br from-[#00a346]/10 via-[#0066b2]/10 to-[#c10000]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
              <MapPin className="w-4 h-4 text-[#0066b2]" />
              <span className="text-sm text-[#0066b2] font-bold">Carte du réseau</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-4">
              Plan interactif du réseau
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Visualisez les tracés des lignes de tramway et busway pour planifier vos trajets facilement
            </p>
            <a
              href="https://www.casatramway.ma/se-deplacer/plan-interactif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00a346] to-[#0066b2] text-white rounded-2xl hover:shadow-xl transition-all font-bold"
            >
              <MapPin className="w-5 h-5" />
              Voir la carte interactive
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
