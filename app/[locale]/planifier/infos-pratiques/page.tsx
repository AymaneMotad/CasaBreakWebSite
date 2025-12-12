"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useParams } from "next/navigation"
import { useTranslations } from 'next-intl'
import { 
  Info, Clock, Phone, CreditCard, MapPin, 
  Calendar, Sun, Moon, Umbrella, Wifi, Plug, 
  Utensils, ShoppingBag, Heart, AlertCircle, 
  CheckCircle, Lightbulb, Users, Languages,
  Pill, CalendarClock, ExternalLink
} from "lucide-react"
import { CHPMap } from "@/components/chp-map"

export default function InfosPratiquesPage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')

  const practicalInfo = [
    {
      icon: Clock,
      title: "Horaires d'ouverture",
      color: "#00a346",
      items: [
        "Commerces : 9h-20h (fermés le dimanche)",
        "Restaurants : 12h-15h et 19h-23h",
        "Banques : 8h30-16h30 (lun-ven)",
        "Administrations : 8h-16h (lun-ven)"
      ]
    },
    {
      icon: CreditCard,
      title: "Monnaie & Paiements",
      color: "#0066b2",
      items: [
        "Monnaie : Dirham marocain (MAD)",
        "Cartes bancaires acceptées dans la plupart des commerces",
        "Distributeurs disponibles partout en ville"
      ]
    },
    {
      icon: Phone,
      title: "Télécommunications",
      color: "#c10000",
      items: [
        "Indicatif : +212",
        "WiFi gratuit dans la plupart des cafés et hôtels",
        "Cartes SIM prépayées disponibles (Maroc Telecom, Orange, Inwi)",
        "Couverture 4G/5G excellente en ville"
      ]
    },
    {
      icon: Languages,
      title: "Langues",
      color: "#00a346",
      items: [
        "Arabe (officiel) et Amazigh (officiel), et Darija (dialecte local)",
        "Français très répandu",
        "Anglais dans les zones touristiques",
        "Espagnol parfois compris"
      ]
    },
    {
      icon: Sun,
      title: "Climat",
      color: "#ffd700",
      items: [
        "Méditerranéen : été chaud (25-30°C), hiver doux (15-20°C)",
        "Vent côtier fréquent (Alizé)"
      ]
    },
    {
      icon: Plug,
      title: "Électricité",
      color: "#0066b2",
      items: [
        "220V / 50Hz",
        "Prises de type C et E (européennes)"
      ]
    }
  ]

const emergencyContacts = [
    { service: "Police", number: "19", icon: AlertCircle, color: "#c10000" },
    { service: "Pompiers", number: "15", icon: AlertCircle, color: "#c10000" },
    { service: "SAMU", number: "15", icon: Heart, color: "#c10000" },
    { service: "Gendarmerie", number: "177", icon: AlertCircle, color: "#0066b2" },
    { service: "Tourisme", number: "05 22 27 11 77", icon: Info, color: "#00a346" }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: t("practicalInfo"), href: `/${locale}/planifier/infos-pratiques` }
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
              <Info className="w-4 h-4 text-[#0066b2]" />
              <span className="text-sm text-[#0066b2] font-bold">Guide pratique</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-4">
              Infos pratiques
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir pour profiter pleinement de votre séjour à Casablanca
            </p>
          </div>
        </div>
      </div>

      {/* Practical Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-4">
              Informations pratiques
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les essentiels pour organiser votre séjour
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalInfo.map((info, i) => (
              <div 
                key={i}
                className="group p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <info.icon className="w-7 h-7" style={{ color: info.color }} />
                </div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-4">{info.title}</h3>
                <ul className="space-y-2">
                  {info.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: info.color }} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Emergency Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-4">
              Numéros utile
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En cas d'urgence, composez ces numéros
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {emergencyContacts.map((contact, i) => (
              <div 
                key={i}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all text-center"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${contact.color}15` }}
                >
                  <contact.icon className="w-6 h-6" style={{ color: contact.color }} />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{contact.service}</h3>
                <p className="text-2xl font-black" style={{ color: contact.color }}>
                  {contact.number}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-4">
              Liens utiles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Accès rapide aux services essentiels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Pharmacie de garde */}
            <a
              href="https://saydalia.ma/fr/pharmacies-de-garde/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#00a346] hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#00a346]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Pill className="w-8 h-8 text-[#00a346]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-black text-[#1a1a1a]">Pharmacie de garde</h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#00a346] transition-colors" />
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Trouvez les pharmacies de garde ouvertes 24/7 à Casablanca
                  </p>
                  <p className="text-sm text-[#00a346] font-semibold group-hover:underline">
                    Consulter les pharmacies de garde →
                  </p>
                </div>
              </div>
            </a>

            {/* Horaires de prière */}
            <a
              href="https://priere.ma/horaire-priere-casablanca"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#0066b2] hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0066b2]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CalendarClock className="w-8 h-8 text-[#0066b2]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-black text-[#1a1a1a]">Horaires de prière</h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#0066b2] transition-colors" />
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Consultez les horaires de prière à Casablanca
                  </p>
                  <p className="text-sm text-[#0066b2] font-semibold group-hover:underline">
                    Voir les horaires de prière →
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CHP Map */}
      <CHPMap />

      <Footer />
    </main>
  )
}
