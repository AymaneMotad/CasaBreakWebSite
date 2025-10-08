import Image from "next/image"
import { Calendar, Users, Mail, Phone, User, Key, UsersRound, Volume2, Sofa, Shield, Sparkles, ParkingCircle, Headphones } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ReserverPage() {
  return (
    <main className="min-h-screen bg-off-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Breadcrumb 
            items={[
              { label: "Réserver", href: "/reserver" }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image src="/site-map-images/reserver sacre coeur/reserver sacre coeur - ferrari /reserver sacre coeur - ferrari 1.jpeg" alt="Réserver" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-off-white mb-4 animate-fade-in-up text-balance">
            Réserver le Sacré-Cœur
          </h1>
          <p className="font-sans text-sm md:text-base text-off-white/90 tracking-wider uppercase animate-fade-in-up stagger-1">
            Un lieu d'exception pour vos événements
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
              Un espace d'exception pour vos événements
            </h2>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-6">
              L'Ex Sacré-Cœur de Casablanca s'impose aujourd'hui comme un lieu emblématique pour les événements professionnels, culturels et institutionnels.
              Grâce à son architecture monumentale, sa localisation centrale et ses espaces modulables, il offre un cadre unique pour accueillir conférences, forums, lancements, expositions ou soirées de prestige.
            </p>
            <p className="font-sans text-base text-charcoal/70 leading-relaxed">
              Notre équipe vous accompagne dans l'organisation de votre événement pour garantir une expérience unique et mémorable.
            </p>
          </div>
          <div className="relative h-[500px] animate-fade-in-up stagger-1">
            <Image
              src="/site-map-images/reserver sacre coeur/reserver sacre coeur - ferrari /reserver sacre coeur - ferrari 2.jpeg"
              alt="Événement privé"
              fill
              className="object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 lg:py-32 bg-off-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal mb-6 tracking-tight">
              Découvrez nos espaces
            </h2>
            <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Une visite immersive du Sacré-Cœur, un lieu d'exception pour vos événements les plus prestigieux
            </p>
          </div>

          {/* Clean Video Container */}
          <div className="max-w-[1200px] mx-auto animate-fade-in-up stagger-1">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-charcoal">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/videos/0B5B748D-86BA-4DB8-97FE-3354C4A257EA_1_106_c.jpeg"
                preload="metadata"
              >
                <source src="/videos/sacre-video.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>

            {/* Video Info */}
            <div className="mt-8 text-center">
              <p className="font-sans text-sm text-charcoal/60 tracking-wider uppercase">
                Durée: 2 min • Visite guidée virtuelle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events - Premium Phototheque */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-20 w-40 h-40">
            <svg viewBox="0 0 128 128" className="w-full h-full text-off-white">
              <path d="M16 16 L112 16 L112 112 L16 112 Z M32 32 L96 32 L96 96 L32 96 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="64" cy="64" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-20 w-40 h-40">
            <svg viewBox="0 0 128 128" className="w-full h-full text-off-white">
              <path d="M16 16 L112 16 L112 112 L16 112 Z M32 32 L96 32 L96 96 L32 96 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="64" cy="64" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-vibrant-pink/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-vibrant-pink"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-vibrant-pink/60"></div>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-off-white mb-6 tracking-tight leading-tight">
              Ils nous ont fait confiance
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-off-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Des marques prestigieuses et institutions de renom ont choisi l'Ex Sacré-Cœur pour leurs événements d'exception
            </p>
            <div className="inline-flex items-center gap-3 mt-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-warm-terracotta/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-warm-terracotta"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-warm-terracotta/60"></div>
            </div>
          </div>

          {/* Premium Photo Grid - Improved Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                title: "Ferrari Launch",
                subtitle: "Luxury Automotive",
                image: "/site-map-images/reserver sacre coeur/reserver sacre coeur - ferrari /reserver sacre coeur - ferrari 1.jpeg",
                span: "md:col-span-2 md:row-span-2",
              },
              {
                title: "Ferrari Showcase",
                subtitle: "Premium Exhibition",
                image: "/site-map-images/reserver sacre coeur/reserver sacre coeur - ferrari /reserver sacre coeur - ferrari 2.jpeg",
                span: "",
              },
              {
                title: "Ferrari Presentation",
                subtitle: "Brand Experience",
                image: "/site-map-images/reserver sacre coeur/reserver sacre coeur - ferrari /reserver sacre coeur - ferrari 3.jpeg",
                span: "",
              },
              {
                title: "Casa Arab Festival",
                subtitle: "Cultural Event",
                image: "/site-map-images/reserver sacre coeur/casa arab festival/WhatsApp Image 2025-10-02 at 11.26.11 AM.jpeg",
                span: "",
              },
              {
                title: "Arab Festival",
                subtitle: "Heritage Celebration",
                image: "/site-map-images/reserver sacre coeur/casa arab festival/WhatsApp Image 2025-10-02 at 11.26.11 AM-2.jpeg",
                span: "",
              },
              {
                title: "Ram Visa Partnership",
                subtitle: "Corporate Event",
                image: "/site-map-images/reserver sacre coeur/coebranding ram visa/WhatsApp Image 2025-10-02 at 12.02.47 PM.jpeg",
                span: "md:col-span-2",
              },
              {
                title: "Ferrari Exhibition",
                subtitle: "Exclusive Launch",
                image: "/site-map-images/reserver sacre coeur/reserver sacre coeur - ferrari /reserver sacre coeur - ferrari 4.jpeg",
                span: "",
              },
              {
                title: "Ram Visa Gala",
                subtitle: "Premium Launch",
                image: "/site-map-images/reserver sacre coeur/coebranding ram visa/WhatsApp Image 2025-10-02 at 12.02.47 PM-2.jpeg",
                span: "",
              },
            ].map((event, index) => (
              <div
                key={event.title}
                className={`group relative ${event.span || ""} h-[320px] rounded-lg overflow-hidden animate-fade-in-up stagger-${index + 1} transition-all duration-500 hover:shadow-2xl hover:shadow-vibrant-pink/20`}
              >
                {/* Image Container */}
                <div className="absolute inset-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                  />
                </div>
                
                {/* Strong Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 group-hover:from-black/98 group-hover:via-black/70 transition-all duration-500"></div>
                
                {/* Accent Border - Always Visible */}
                <div className="absolute inset-0 border-2 border-off-white/10 group-hover:border-vibrant-pink/40 transition-all duration-500 rounded-lg"></div>
                
                {/* Text Content - Always Clearly Visible */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10">
                  <div className="transform transition-all duration-500">
                    {/* Accent Line */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-vibrant-pink via-vibrant-pink to-transparent mb-4 group-hover:w-20 transition-all duration-500"></div>
                    
                    {/* Title - Large, Bold, White */}
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-2 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                      {event.title}
                    </h3>
                    
                    {/* Subtitle - Clean, Visible */}
                    <p className="font-sans text-sm sm:text-base text-white/95 tracking-wide uppercase font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      {event.subtitle}
                    </p>
                    
                    {/* Hover Effect - Additional Info */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2 text-vibrant-pink/90 text-xs uppercase tracking-wider">
                        <span>Voir plus</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="flex justify-center mt-16 lg:mt-20 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-vibrant-pink/40 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-vibrant-pink animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-off-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-warm-terracotta animate-pulse"></div>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-warm-terracotta/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-12 py-20">
        <div className="bg-charcoal/5 p-10 lg:p-16">
          <h2 className="font-serif text-4xl text-charcoal mb-8 text-center animate-fade-in-up">
            Demande de réservation
          </h2>
          <p className="font-sans text-sm text-charcoal/70 text-center mb-12 animate-fade-in-up stagger-1">
            Remplissez ce formulaire et nous vous contacterons dans les 48 heures
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-2">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Nom complet *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-3">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-4">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Téléphone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="tel"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-5">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Type d'événement *
                </label>
                <select
                  required
                  className="w-full px-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="mariage">Mariage & Cérémonie</option>
                  <option value="concert">Concert Privé</option>
                  <option value="photo">Séance Photo</option>
                  <option value="tournage">Tournage</option>
                  <option value="corporate">Événement Corporatif</option>
                  <option value="exposition">Exposition</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up stagger-6">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Date souhaitée *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="date"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-7">
                <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                  Nombre de personnes
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30" />
                  <input
                    type="number"
                    className="w-full pl-12 pr-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm"
                    placeholder="50"
                  />
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up stagger-8">
              <label className="block font-sans text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                Détails de votre projet
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-4 bg-off-white border border-charcoal/10 focus:border-vibrant-pink focus:outline-none transition-colors font-sans text-sm resize-none"
                placeholder="Décrivez votre événement, vos besoins spécifiques, horaires souhaités..."
              />
            </div>

            <div className="text-center animate-fade-in-up stagger-9">
              <p className="font-sans text-xs text-charcoal/60 mb-6 max-w-2xl mx-auto leading-relaxed">
                Réservez le Sacré-Cœur pour votre événement ! Contactez notre équipe pour organiser votre événement au Sacré-Cœur et profitez d'un cadre prestigieux au cœur de Casablanca.
              </p>
              <button
                type="submit"
                className="px-16 py-5 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-sans tracking-[0.15em] uppercase hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
              >
                Réserver maintenant
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Services Included */}
      <section className="bg-charcoal text-off-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center animate-fade-in-up">Services inclus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Key, text: "Accès exclusif aux espaces" },
              { icon: UsersRound, text: "Équipe d'accueil dédiée" },
              { icon: Volume2, text: "Système son et éclairage" },
              { icon: Sofa, text: "Mobilier et décoration de base" },
              { icon: Shield, text: "Sécurité et surveillance" },
              { icon: Sparkles, text: "Nettoyage après événement" },
              { icon: ParkingCircle, text: "Parking privatisé" },
              { icon: Headphones, text: "Assistance technique" },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.text} className={`text-center p-6 bg-off-white/5 rounded-lg hover:bg-off-white/10 transition-colors animate-fade-in-up stagger-${index + 1}`}>
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="font-sans text-sm">{service.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
