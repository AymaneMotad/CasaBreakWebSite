import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SpinningCathedral } from "@/components/spinning-cathedral"
import { MagazineSection } from "@/components/magazine-section"
import { HeritageSection } from "@/components/heritage-section"
import { PracticalInfoSection } from "@/components/practical-info-section"
import { EventsGridSection } from "@/components/events-grid-section"
import { BookingSection } from "@/components/booking-section"
import { NewsletterSection } from "@/components/newsletter-section"
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
      <EventsGridSection />
      <BookingSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
