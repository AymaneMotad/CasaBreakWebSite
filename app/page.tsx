import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MagazineSection } from "@/components/magazine-section"
import { PracticalInfoSection } from "@/components/practical-info-section"
import { HeritageSection } from "@/components/heritage-section"
import { BookingSection } from "@/components/booking-section"
import { PricingSection } from "@/components/pricing-section"
import { EventsGridSection } from "@/components/events-grid-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MagazineSection />
      <PracticalInfoSection />
      <HeritageSection />
      <BookingSection />
      <PricingSection />
      <EventsGridSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
