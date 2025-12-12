"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useLocale } from 'next-intl'
import { Heart, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"

export default function FamilleEnfantsPage() {
  const locale = useLocale()

  const activities = [
    {
      name: "Parc Sindibad",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/WhatsApp%20Image%202025-12-11%20at%2012.04.31.jpeg",
      description: "Situé face à l'océan Atlantique à Casablanca, le Parc Sindibad est une destination unique qui allie les sensations fortes d'un parc d'attractions, la magie d'un parc de loisirs et le charme d'un zoo. Que vous soyez en quête d'adrénaline pure, d'une sortie familiale relaxante ou d'une rencontre fascinante avec la faune sauvage, Sindibad offre une expérience inoubliable pour tous les âges. Préparez-vous à plonger dans un univers d'aventure inspiré des contes des Mille et Une Nuits.",
      address: "Bd de l'Océan Atlantique, Casablanca 20052",
      link: "https://www.parcsindibad.ma/acces-au-parc"
    },
    {
      name: "Parc Zoologique Ain Sebaâ",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/zoo%20ain%20sbaa.jpg",
      description: "Vivez une immersion moderne et unique au Parc Zoologique Ain Sebaâ, portée par une passion pour la conservation et l'éducation.",
      address: "130 All. des Mimosas, Casablanca 20250"
    },
    {
      name: "Amuzeum",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/amuzeem.jpg",
      description: "Avec un espace de près de 2000 m2 répartis sur 3 niveaux, l'Amuzeum invite les enfants de 18 mois à 12 ans à voyager dans le temps, dans les concepts et dans les savoirs pour qu'ils s'amusent en apprenant et apprennent en s'amusant. Ici à l'Amuzeum, les enfants ont le droit de toucher, de tester par eux-mêmes, d'essayer et de réessayer, de survoler, de creuser, de rebondir d'un sujet à un autre, d'explorer, de satisfaire leur curiosité, de rêver, de créer, de débattre, de philosopher… Bref, de jouer, de grandir à leur rythme et de s'épanouir en toute liberté.",
      address: "Route d'azemmour en face du Mercato, 2007",
      link: "https://amuzeum.ma/"
    },
    {
      name: "Dream World",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/dreammm.jpeg",
      description: "Plonge dans l'univers immersif de Dream World : un espace où la réalité virtuelle te transporte dans des mondes extraordinaires, où le cinéma 6D t'offre des sensations inédites, où les défis sportifs et les jeux vidéo iconiques prennent vie, et où un espace entièrement pensé pour les plus petits garantit amusement et émerveillement pour toute la famille.",
      address: "285 Bd Brahim Roudani, Casablanca 20250",
      link: "https://www.dreamworld.ma/"
    },
    {
      name: "Fun Art Place",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Fun%20Art%20Place.png",
      description: "Découvre Fun Art Place à AnfaPlace : un espace créatif et ludique où l'art, le jeu et l'imagination se rencontrent. Entre ateliers interactifs, activités manuelles, zones de dessin et d'expression libre, chaque enfant peut explorer son univers, créer, s'amuser et laisser parler sa créativité en toute liberté. Parfait pour éveiller la curiosité et vivre des moments joyeux en famille.",
      address: "local RU 7, Anfaplace Mall, 1 Boulevard de la Corniche, Casablanca 2000",
      link: "https://funplace.ma/"
    },
    {
      name: "Game World",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/game%20word.png",
      description: "Grand centre de loisirs, intérieur, combinant jeux, activités variées pour enfants, parcours, trampolines, etc. Game World - Bon plan quand on cherche un lieu couvert, sécurisé et complet — idéal avec des enfants.",
      address: "PLAGE MME CHOUAL, KM9 sidi abderrahmane, Casablanca 20000",
      link: "https://www.gameworld.ma/"
    },
    {
      name: "Adventureland (Morocco Mall)",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/adventure%20land.jpg",
      description: "Aire de jeux + attractions + arcade + patinoire — très adapté aux enfants de 2 à 12 ans. Combine amusement, jeu et détente pour toute la famille.",
      address: "1 Bd de l'Océan, Casablanca 20180",
      link: "https://www.moroccomall.ma/cinema-divertissement/adventureland"
    },
    {
      name: "Aquadream",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/aquadream.jpeg",
      description: "Un parc aquatique moderne offrant une expérience rafraîchissante et amusante pour toute la famille. Avec ses toboggans, piscines et attractions aquatiques, Aquadream garantit des moments de détente et de plaisir inoubliables.",
      address: "1 Bd de l'Océan, Casablanca 20180",
      link: "https://www.moroccomall.ma/cinema-divertissement/aquadream"
    },
    {
      name: "Cocoon 9D",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Cocoon%209D.jpeg",
      description: "Une expérience cinématographique révolutionnaire avec la technologie 9D. Plonge dans des aventures immersives où tous tes sens sont sollicités pour une expérience de divertissement unique et captivante.",
      address: "20000 Boulevard de la Corniche, Casablanca",
      link: "https://activityz.ma/"
    },
    {
      name: "Jungle Park",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/jungle%20park.jpeg",
      description: "Un parc d'aventures en plein air où les enfants peuvent explorer, grimper, sauter et s'amuser dans un environnement sécurisé inspiré de la jungle. Parfait pour développer la motricité et l'esprit d'aventure.",
      address: "Bouskoura،, Route principale n°3011،, Casablanca",
      link: "https://web.facebook.com/Jungle.Park.official/?locale=fr_FR&_rdc=1&_rdr"
    },
    {
      name: "La Ferme Pédagogique",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/La%20ferme%20pedagogique.png",
      description: "Une ferme éducative où les enfants découvrent les animaux de la ferme, apprennent les valeurs de la nature et participent à des activités pédagogiques interactives. Une expérience enrichissante qui éveille la curiosité et le respect de l'environnement.",
      address: "Km 18 Route d'Azemmour, 20220",
      link: "https://lafermepedagogique.ma/"
    },
    {
      name: "Quartier Libre",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff2/quartierlibre.jpeg",
      description: "Quartier Libre est un centre de loisirs pour enfants situé à Casablanca. C'est un espace ludique et pédagogique où les enfants peuvent jouer, apprendre et s'amuser dans des environnements inspirés de la vie réelle (boutiques, supermarché, hôpital, etc.) à leur échelle.",
      address: "1 Rue Ahmed Amine, Quartier Bourgogne, Casablanca 20250, Maroc",
      link: "https://www.quartierlibre.ma/"
    },
    {
      name: "Tamaris Aquaparc & Bowling",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff/Tamaris%20Aquaparc%20&%20Bowling.jpeg",
      description: "Un complexe de loisirs complet combinant parc aquatique et bowling. Parfait pour une journée en famille avec des activités variées qui plaisent à tous les âges : glissades aquatiques, jeux de bowling et bien plus encore.",
      address: "Route d'Azemmour Km 15, Casablanca 20000",
      link: "https://tamaris-aquaparc.com/"
    },
    {
      name: "Yasmine Fun Park (Tachfine)",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff2/Yasmine%20Fun%20Park%20(Tachfine).jpeg",
      description: "Yasmine Fun Park est un parc d'attractions avec Garderie & Salles d'anniversaires pour les enfants de 2 à 14 ans, au 1er étage du nouveau Mall Tachfine Center, dans le quartier Belvédère, à Casablanca Votre Park vous offre un large choix d'activités, entre jeux, garderie, ateliers et spectacles, sur une surface de 1200 m² couverte et entièrement sécurisée, entièrement dédiée à l'amusement de vos enfants. Nombreuses sont nos attractions qui émerveilleront vos famille et vos amis en les plongeant dans l'univers de la forêt magique.",
      address: "Bd Ibn Tachfine, Casablanca 20250",
      link: "https://yasminefunpark.com/tachefine-center/"
    },
    {
      name: "Kidsville",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff2/Kidsville.jpeg",
      description: "C'est un centre de loisirs pour enfants reposant sur un concept de mini-ville ludique où les enfants peuvent jouer, apprendre, et s'amuser dans des décors à leur échelle (supermarché, hôpital, restaurant, salon de coiffure, poste de police, etc.)",
      address: "Oulad Malik, Bouskoura 27182",
      link: "https://kidzville.ma/"
    },
    {
      name: "Peekaboo",
      image: "https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/public_stuff2/Peekaboo.jpeg",
      description: "Un espace de jeu et d'éveil pour les tout-petits et les enfants, offrant des activités adaptées à chaque âge dans un environnement sécurisé et stimulant.",
      address: "nr10 groupe G, Rue 130, Casablanca"
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
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

                  {activity.address && (
                    <div className="flex items-start gap-2 pt-2">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 font-medium">
                        {activity.address}
                      </p>
                    </div>
                  )}

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
