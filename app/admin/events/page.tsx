"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Plus, Edit, Trash2, Image as ImageIcon, Search, Loader2, Eye, Calendar } from "lucide-react"

interface Event {
  id: string
  slug: string
  name_fr: string
  description_fr: string | null
  main_image: string | null
  category: string
  start_date: string
  is_published: boolean
}

export default function AdminEventsPage() {
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const supabase = createClient()
      
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      if (authError || !user) {
        alert("You must be logged in to view events")
        router.push("/admin/login")
        return
      }

      let query = supabase.from("events").select("*")
      
      if (categoryFilter !== "all") {
        query = query.eq("category", categoryFilter)
      }

      const { data, error } = await query.order("start_date", { ascending: false })

      if (error) {
        console.error("Error loading events:", error)
        alert(`Error loading events: ${error.message}`)
        return
      }
      
      setEvents(data || [])
    } catch (error: any) {
      console.error("Exception caught:", error)
      alert(`Failed to load events: ${error?.message || "Unknown error"}`)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return

    setDeletingId(id)
    try {
      const supabase = createClient()
      const { error } = await supabase.from("events").delete().eq("id", id)

      if (error) throw error
      fetchEvents()
    } catch (error) {
      console.error("Error deleting event:", error)
      alert("Failed to delete event")
    } finally {
      setDeletingId(null)
    }
  }

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name_fr.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'concerts-spectacles': 'Concerts & Spectacles',
      'expositions-galeries': 'Expositions & Galeries',
      'festivals': 'Festivals',
      'evenements-sportifs': 'Événements Sportifs',
      'foires-salons': 'Foires & Salons'
    }
    return labels[category] || category
  }

  const getCategoryUrl = (category: string, slug: string) => {
    const urls: Record<string, string> = {
      'concerts-spectacles': `/fr/evenements/concerts-spectacles/${slug}`,
      'expositions-galeries': `/fr/evenements/expositions-galeries/${slug}`,
      'festivals': `/fr/evenements/festivals/${slug}`,
      'evenements-sportifs': `/fr/evenements/evenements-sportifs/${slug}`,
      'foires-salons': `/fr/evenements/foires-salons/${slug}`
    }
    return urls[category] || `/fr/evenements/${slug}`
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Events</h2>
          <p className="text-gray-600 mt-1">
            Manage all events ({events.length} total)
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={fetchEvents}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Search className="w-5 h-5" />
            Refresh
          </button>
          <button
            onClick={() => router.push("/admin/events/new")}
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Event
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <select
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value)
              fetchEvents()
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="concerts-spectacles">Concerts & Spectacles</option>
            <option value="expositions-galeries">Expositions & Galeries</option>
            <option value="festivals">Festivals</option>
            <option value="evenements-sportifs">Événements Sportifs</option>
            <option value="foires-salons">Foires & Salons</option>
          </select>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEvents.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-gray-500 text-lg">
                      {events.length === 0 
                        ? "No events in database" 
                        : `No events match "${searchTerm}"`}
                    </p>
                    {events.length === 0 && (
                      <button
                        onClick={() => router.push("/admin/events/new")}
                        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                      >
                        Create First Event
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              filteredEvents.map((event) => {
                const eventDate = new Date(event.start_date)
                return (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {event.main_image ? (
                        <img
                          src={event.main_image}
                          alt={event.name_fr}
                          className="w-16 h-16 object-cover rounded"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {event.name_fr}
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-md">
                        {event.description_fr || ""}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {getCategoryLabel(event.category)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {eventDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          event.is_published
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {event.is_published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={getCategoryUrl(event.category, event.slug)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-900"
                          title="View on website"
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                        <button
                          onClick={() =>
                            router.push(`/admin/events/${event.id}`)
                          }
                          className="text-teal-600 hover:text-teal-900"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(event.id)}
                          disabled={deletingId === event.id}
                          className="text-red-600 hover:text-red-900 disabled:opacity-50"
                          title="Delete"
                        >
                          {deletingId === event.id ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <Trash2 className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Showing {filteredEvents.length} of {events.length} events
      </div>
    </div>
  )
}
