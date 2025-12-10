"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useLocale } from 'next-intl'
import { Heart, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function FamilleEnfantsPage() {
  const locale = useLocale()

  const activities = [
    {
      name: "Sindibad Parc Zoologique Ain Sebaâ",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/zoo%20ain%20sbaa.jpg",
      description: "Vivez une immersion moderne et unique au Parc Zoologique Ain Sebaâ, portée par une passion pour la conservation et l'éducation.",
      link: "https://www.parcsindibad.ma/acces-au-parc"
    },
    {
      name: "Amuzeum",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/amuzeem.jpg",
      description: "Avec un espace de près de 2000 m2 répartis sur 3 niveaux, l'Amuzeum invite les enfants de 18 mois à 12 ans à voyager dans le temps, dans les concepts et dans les savoirs pour qu'ils s'amusent en apprenant et apprennent en s'amusant. Ici à l'Amuzeum, les enfants ont le droit de toucher, de tester par eux-mêmes, d'essayer et de réessayer, de survoler, de creuser, de rebondir d'un sujet à un autre, d'explorer, de satisfaire leur curiosité, de rêver, de créer, de débattre, de philosopher… Bref, de jouer, de grandir à leur rythme et de s'épanouir en toute liberté."
    },
    {
      name: "Game World",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/game%20word.png",
      description: "Grand centre de loisirs, intérieur, combinant jeux, activités variées pour enfants, parcours, trampolines, etc. Game World - Bon plan quand on cherche un lieu couvert, sécurisé et complet — idéal avec des enfants."
    },
    {
      name: "Adventureland (Morocco Mall)",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/adventure%20land.jpg",
      description: "Aire de jeux + attractions + arcade + patinoire — très adapté aux enfants de 2 à 12 ans. Combine amusement, jeu et détente pour toute la famille."
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
              { label: "Activités", href: `/${locale}/activites/famille-enfants` },
              { label: "Famille & Enfants", href: `/${locale}/activites/famille-enfants` }
            ]} 
          />
        </div>
      </div>

      {/* Hero */}
      <div className="pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200/50 mb-6 shadow-sm">
            <Heart className="w-4 h-4 text-[#00a346]" />
            <span className="text-sm text-gray-700 font-medium">ACTIVITE EN FAMILLE ET ENFANT</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Famille & Enfants</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez les meilleures activités adaptées aux familles et aux enfants à Casablanca
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="space-y-16">
          {activities.map((activity, index) => {
            const isEven = index % 2 === 0
            return (
              <article 
                key={index}
                className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="relative w-full lg:w-1/2 h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 items-center justify-center absolute inset-0">
                    <Heart className="w-16 h-16 text-gray-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {activity.name}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>

                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      En savoir plus
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <Footer />
    </main>
  )
}
