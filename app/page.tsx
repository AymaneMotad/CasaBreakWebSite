import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SpinningCathedral } from "@/components/spinning-cathedral"
import { MagazineSection } from "@/components/magazine-section"
import { HeritageSection } from "@/components/heritage-section"
import { PracticalInfoSection } from "@/components/practical-info-section"
import { AvailabilityCalendar } from "@/components/availability-calendar"
import { BookingSection } from "@/components/booking-section"
// import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SpinningCathedral />
      <MagazineSection />
      <HeritageSection />
      <PracticalInfoSection />
      
      {/* Availability Calendar Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-off-white to-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 tracking-tight">
              Nos disponibilités
            </h2>
            <p className="font-sans text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Consultez notre calendrier pour voir les dates disponibles et réserver votre visite ou événement
            </p>
          </div>
          
          <div className="animate-fade-in-up stagger-1">
            <AvailabilityCalendar />
          </div>
        </div>
      </section>
      
      <BookingSection />
      {/* <NewsletterSection /> */}
      <Footer />
    </main>
  )
}
