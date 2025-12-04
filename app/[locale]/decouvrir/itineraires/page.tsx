import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ItinerairesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Casablanca en 1, 2 ou 3 jours</h1>
          <p className="text-gray-600">Contenu à venir...</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

