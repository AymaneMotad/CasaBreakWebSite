"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useParams } from "next/navigation"
import { useTranslations } from 'next-intl'
import { 
  Info, Clock, Phone, Globe, CreditCard, MapPin, 
  Calendar, Sun, Moon, Umbrella, Wifi, Plug, 
  Utensils, ShoppingBag, Heart, AlertCircle, 
  CheckCircle, Lightbulb, Users, Languages
} from "lucide-react"

export default function InfosPratiquesPage() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')
  const tp = useTranslations('planifier.infosPratiques')

  const practicalInfo = [
    {
      icon: Clock,
      title: tp('practicalInfo.openingHours.title'),
      color: "#00a346",
      items: tp.raw('practicalInfo.openingHours.items')
    },
    {
      icon: CreditCard,
      title: tp('practicalInfo.currency.title'),
      color: "#0066b2",
      items: tp.raw('practicalInfo.currency.items')
    },
    {
      icon: Phone,
      title: tp('practicalInfo.telecom.title'),
      color: "#c10000",
      items: tp.raw('practicalInfo.telecom.items')
    },
    {
      icon: Languages,
      title: tp('practicalInfo.languages.title'),
      color: "#00a346",
      items: tp.raw('practicalInfo.languages.items')
    },
    {
      icon: Sun,
      title: tp('practicalInfo.climate.title'),
      color: "#ffd700",
      items: tp.raw('practicalInfo.climate.items')
    },
    {
      icon: Plug,
      title: tp('practicalInfo.electricity.title'),
      color: "#0066b2",
      items: tp.raw('practicalInfo.electricity.items')
    }
  ]

  const culturalTips = [
    {
      icon: Heart,
      title: tp('culturalTips.respect.title'),
      color: "#c10000",
      tips: tp.raw('culturalTips.respect.tips')
    },
    {
      icon: Utensils,
      title: tp('culturalTips.gastronomy.title'),
      color: "#00a346",
      tips: tp.raw('culturalTips.gastronomy.tips')
    },
    {
      icon: ShoppingBag,
      title: tp('culturalTips.bargaining.title'),
      color: "#0066b2",
      tips: tp.raw('culturalTips.bargaining.tips')
    },
    {
      icon: Users,
      title: tp('culturalTips.photography.title'),
      color: "#ffd700",
      tips: tp.raw('culturalTips.photography.tips')
    }
  ]

  const emergencyContacts = [
    { service: tp('emergency.police'), number: "19", icon: AlertCircle, color: "#c10000" },
    { service: tp('emergency.firefighters'), number: "15", icon: AlertCircle, color: "#c10000" },
    { service: tp('emergency.samu'), number: "15", icon: Heart, color: "#c10000" },
    { service: tp('emergency.gendarmerie'), number: "177", icon: AlertCircle, color: "#0066b2" },
    { service: tp('emergency.tourism'), number: "05 22 27 11 77", icon: Info, color: "#00a346" }
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
              <span className="text-sm text-[#0066b2] font-bold">{tp('hero.badge')}</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-4">
              {tp('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tp('hero.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Practical Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-4">
              {tp('practicalInfo.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {tp('practicalInfo.description')}
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

      {/* Cultural Tips */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fef7ed] via-[#f0fdf4] to-[#f0f9ff] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a346]/10 border border-[#00a346]/20 mb-6">
              <Lightbulb className="w-4 h-4 text-[#00a346]" />
              <span className="text-sm text-[#00a346] font-bold">{tp('culturalTips.badge')}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-4">
              {tp('culturalTips.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {tp('culturalTips.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {culturalTips.map((tip, i) => (
              <div 
                key={i}
                className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${tip.color}15` }}
                >
                  <tip.icon className="w-8 h-8" style={{ color: tip.color }} />
                </div>
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">{tip.title}</h3>
                <ul className="space-y-3">
                  {tip.tips.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: tip.color }} />
                      <span>{item}</span>
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
              {tp('emergency.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {tp('emergency.description')}
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

      {/* Additional Resources */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#00a346]/10 via-[#0066b2]/10 to-[#c10000]/10 border-2 border-[#00a346]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00a346]/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#00a346]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3">
                    {tp('resources.title')}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#00a346]" />
                      <span>{tp('resources.tourismOffice')} <a href="https://www.visitmorocco.com" target="_blank" rel="noopener noreferrer" className="text-[#0066b2] hover:underline font-medium">visitmorocco.com</a></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#00a346]" />
                      <span>{tp('resources.embassies')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-[#00a346]" />
                      <span>{tp('resources.insurance')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
