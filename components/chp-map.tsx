"use client"

import { useState } from "react"
import { MapPin, Phone, Building, X } from "lucide-react"

interface CHP {
  id: string
  name: string
  address: string
  prefecture: string
  phone: string | null
  latitude: number
  longitude: number
  description: string
  services: string[]
}

const chpData: CHP[] = [
  {
    id: "chp_al_hassani",
    name: "CHP Al Hassani",
    address: "Quartier Al Hassani, Boulevard Al Qods, près de l'arrondissement Hay Hassani, Casablanca",
    prefecture: "Préfecture Hay Hassani",
    phone: null,
    latitude: 33.5671,
    longitude: -7.5352,
    description: "Regroupe l'hôpital Hay Hassani, centre d'hémodialyse Lissasfa et consultations Sidi El Khadir.",
    services: ["consultations_generales", "urgences", "maternite", "pediatrie"]
  },
  {
    id: "chp_mohammed_sekkat",
    name: "CHP Ain Chock – Hôpital Mohammed Sekkat",
    address: "Rue 300, Quartier Moulay Abdellah – Ain Chock, Casablanca",
    prefecture: "Préfecture Ain Chock",
    phone: "+212 522 87 11 36",
    latitude: 33.5452,
    longitude: -7.5621,
    description: "Centre hospitalier de référence pour Ain Chock, médical et chirurgical.",
    services: ["consultations_generales", "urgences", "chirurgie", "imagerie"]
  },
  {
    id: "chp_mohammed_baouafi",
    name: "CHP Al Fida – Mers Sultan (Mohammed Baouafi)",
    address: "Avenue 2 Mars, quartier Al Fida – Mers Sultan, Casablanca",
    prefecture: "Préfecture Al Fida – Mers Sultan",
    phone: "+212 522 87 70 07",
    latitude: 33.5768,
    longitude: -7.5889,
    description: "Centre préfectoral couvrant un large bassin de population.",
    services: ["consultations_generales", "urgences", "maternite"]
  },
  {
    id: "chp_ben_msik",
    name: "CHP Ben M'sik",
    address: "Proximité Boulevard Al Qods / Avenue des FAR, Ben M'sik, Casablanca",
    prefecture: "Préfecture Ben M'sik",
    phone: null,
    latitude: 33.5235,
    longitude: -7.6311,
    description: "Établissement de proximité pour urgences simples et consultations.",
    services: ["consultations_generales", "urgences"]
  },
  {
    id: "chp_sidi_othmane",
    name: "CHP Sidi Othmane",
    address: "Quartier Sidi Othmane, proche Bd Moulay Slimane, Casablanca",
    prefecture: "Préfecture Sidi Bernoussi / Sidi Othmane",
    phone: null,
    latitude: 33.5670,
    longitude: -7.5725,
    description: "Centre public de soins généraux et spécialisés de base.",
    services: ["consultations_generales", "urgences"]
  },
  {
    id: "chp_anfa",
    name: "CHP Anfa",
    address: "Quartier Anfa, proximité Boulevard d'Anfa / Rue Ain Harrouda, Casablanca",
    prefecture: "Préfecture Anfa",
    phone: null,
    latitude: 33.5965,
    longitude: -7.6270,
    description: "Couvre les quartiers Anfa, Racine, Bourgogne.",
    services: ["consultations_generales", "urgences"]
  },
  {
    id: "chp_casablanca_anfa",
    name: "CHP CasaAnfa (Centre)",
    address: "Proche centre-ville, secteur Avenue Hassan II / Bd Rachidi, Casablanca",
    prefecture: "Préfecture CasablancaAnfa",
    phone: null,
    latitude: 33.5900,
    longitude: -7.6110,
    description: "Point d'accès public pour la population centrale.",
    services: ["consultations_generales", "urgences"]
  },
  {
    id: "chp_mediouna",
    name: "CHP Médiouna",
    address: "Centre urbain de Médiouna, proche Route de Médiouna, Province de Médiouna",
    prefecture: "Province de Médiouna (rattachée à CasablancaSettat)",
    phone: null,
    latitude: 33.5560,
    longitude: -7.4890,
    description: "Dessert la périphérie sud-est de Casablanca.",
    services: ["consultations_generales", "urgences"]
  }
]

const colors = ["#00a346", "#c10000", "#ffd700", "#0066b2"]

export function CHPMap() {
  const [selectedCHP, setSelectedCHP] = useState<CHP | null>(null)
  const [hoveredCHP, setHoveredCHP] = useState<string | null>(null)

  // Create Google Maps embed URL with correct coordinates
  const createMapUrl = (selectedCHP?: CHP) => {
    if (selectedCHP) {
      // Use coordinates directly in the URL - this format works without API key
      return `https://maps.google.com/maps?q=${selectedCHP.latitude},${selectedCHP.longitude}&hl=en&z=15&output=embed`
    }
    // Default map showing all of Casablanca (center coordinates)
    return `https://maps.google.com/maps?q=33.5731,-7.5898&hl=en&z=12&output=embed`
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a346]/10 border border-[#00a346]/20 mb-6">
            <Building className="w-4 h-4 text-[#00a346]" />
            <span className="text-sm text-[#00a346] font-bold">Centres Hospitaliers Préfectoraux</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-4">
            Carte interactive des CHP
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Localisez les centres hospitaliers préfectoraux de Casablanca
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* CHP List */}
          <div className="lg:col-span-1 space-y-3 max-h-[600px] overflow-y-auto pr-2">
            {chpData.map((chp, index) => {
              const color = colors[index % colors.length]
              const isSelected = selectedCHP?.id === chp.id
              const isHovered = hoveredCHP === chp.id

              return (
                <div
                  key={chp.id}
                  onClick={() => setSelectedCHP(isSelected ? null : chp)}
                  onMouseEnter={() => setHoveredCHP(chp.id)}
                  onMouseLeave={() => setHoveredCHP(null)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-gray-300 shadow-xl bg-white'
                      : isHovered
                      ? 'border-gray-200 shadow-lg bg-gray-50'
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <MapPin className="w-5 h-5" style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-[#1a1a1a] mb-1 text-sm lg:text-base">
                        {chp.name}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">{chp.prefecture}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{chp.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl bg-gray-100">
              <iframe
                key={selectedCHP?.id || 'default'}
                src={createMapUrl(selectedCHP || undefined)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Map Legend */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200">
                <p className="text-xs font-bold text-gray-700 mb-2">Centres Hospitaliers</p>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                      <span className="text-xs text-gray-600">{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected CHP Info Card */}
            {selectedCHP && (
              <div className="mt-6 p-6 rounded-3xl bg-white border-2 border-gray-200 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${colors[chpData.findIndex(c => c.id === selectedCHP.id) % colors.length]}15` }}
                    >
                      <Building className="w-7 h-7" style={{ color: colors[chpData.findIndex(c => c.id === selectedCHP.id) % colors.length] }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-[#1a1a1a] mb-2">
                        {selectedCHP.name}
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#00a346]" />
                          <span className="text-sm">{selectedCHP.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-[#0066b2]" />
                          <span className="text-sm">{selectedCHP.prefecture}</span>
                        </div>
                        {selectedCHP.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#c10000]" />
                            <a href={`tel:${selectedCHP.phone}`} className="text-sm hover:underline">
                              {selectedCHP.phone}
                            </a>
                          </div>
                        )}
                        <p className="text-sm mt-3 pt-3 border-t border-gray-200">
                          {selectedCHP.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCHP(null)}
                    className="ml-4 p-2 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedCHP.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00a346] to-[#0066b2] text-white font-bold hover:shadow-lg transition-all"
                >
                  <MapPin className="w-5 h-5" />
                  Voir sur Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

