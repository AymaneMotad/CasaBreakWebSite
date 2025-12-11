"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Plus, Edit, Trash2, Image as ImageIcon, Search, Loader2, Upload, Eye } from "lucide-react"

interface Restaurant {
  id: string
  slug: string
  name_fr: string
  description_fr: string | null
  main_image: string | null
  category: string
  data_jsonb: any
  average_rating: number
  is_published: boolean
  source?: 'venue' | 'activity' // Track which table it came from
}

export default function AdminRestaurantsPage() {
  const router = useRouter()
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  useEffect(() => {
    fetchRestaurants()
  }, [categoryFilter])

  const fetchRestaurants = async () => {
    try {
      setLoading(true)
      const supabase = createClient()
      
      // First check if user is authenticated
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      if (authError || !user) {
        console.error("❌ User not authenticated:", authError)
        alert("You must be logged in to view restaurants")
        router.push("/admin/login")
        return
      }

      console.log("✅ User authenticated:", user.email, "ID:", user.id)
      console.log("🔍 Fetching restaurants...")
      
      // Try a simple query first - no filters
      console.log("Test 1: Simple select...")
      const { data: testData, error: testError } = await supabase
        .from("venues")
        .select("id, name_fr")
        .limit(1)
      
      if (testError) {
        console.error("❌ Test query failed:", testError)
        alert(`Database error: ${testError.message}\n\nCode: ${testError.code}\n\nCheck browser console (F12) for full details.`)
        return
      }
      
      console.log("✅ Test query successful:", testData)
      
      // Fetch from both venues and activities tables
      console.log("Fetching from venues and activities...")
      
      // Fetch venues
      let query = supabase.from("venues").select("*").eq("is_published", true)
      if (categoryFilter !== "all") {
        query = query.eq("place_category", categoryFilter)
      }
      const { data: venuesData, error: venuesError } = await query
      
      // Fetch activities - map activity.category to place_category
      // Activities can have category values that match place_category: restaurants, bars-nightlife, shopping, hebergement, sport-bien-etre
      let activitiesData: any[] = []
      const validPlaceCategories = ['restaurants', 'bars-nightlife', 'shopping', 'hebergement', 'sport-bien-etre']
      
      let activitiesQuery = supabase
        .from("activities")
        .select("*")
        .eq("is_published", true)
      
      // Filter activities by category if categoryFilter is set
      if (categoryFilter !== "all") {
        activitiesQuery = activitiesQuery.eq("category", categoryFilter)
      } else {
        // If "all", fetch activities that match any valid place_category
        activitiesQuery = activitiesQuery.in("category", validPlaceCategories)
      }
      
      const { data: activities, error: activitiesError } = await activitiesQuery
      
      if (activitiesError) {
        console.warn("⚠️ Error fetching activities:", activitiesError)
      } else {
        // Transform activities to match Restaurant interface
        // Map activity.category to place_category (they should match)
        activitiesData = (activities || [])
          .filter((activity: any) => validPlaceCategories.includes(activity.category))
          .map((activity: any) => ({
            ...activity,
            source: 'activity' as const,
            place_category: activity.category // Map activity.category to place_category
          }))
      }

      if (venuesError) {
        console.error("❌ Supabase error details:", {
          message: venuesError.message,
          code: venuesError.code,
          details: venuesError.details,
          hint: venuesError.hint,
          fullError: venuesError
        })
        alert(`Error loading places:\n\n${venuesError.message}\n\nCode: ${venuesError.code}\n\nCheck browser console (F12) for full details.`)
        return
      }
      
      // Combine venues and activities
      const venuesWithSource = (venuesData || []).map((venue: any) => ({
        ...venue,
        source: 'venue' as const
      }))
      
      const allPlaces = [...venuesWithSource, ...activitiesData]
      
      console.log(`✅ Loaded ${venuesWithSource.length} venues and ${activitiesData.length} activities (${allPlaces.length} total)`)
      setRestaurants(allPlaces)
    } catch (error: any) {
      console.error("❌ Exception caught:", error)
      console.error("Error stack:", error.stack)
      alert(`Failed to load restaurants:\n\n${error?.message || "Unknown error"}\n\nCheck browser console (F12) for full details.`)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (restaurant: Restaurant) => {
    if (!confirm("Are you sure you want to delete this place?")) return

    setDeletingId(restaurant.id)
    try {
      const supabase = createClient()
      const tableName = restaurant.source === 'activity' ? 'activities' : 'venues'
      const { error } = await supabase.from(tableName).delete().eq("id", restaurant.id)

      if (error) throw error
      fetchRestaurants()
    } catch (error) {
      console.error("Error deleting place:", error)
      alert("Failed to delete place")
    } finally {
      setDeletingId(null)
    }
  }

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name_fr.toLowerCase().includes(searchTerm.toLowerCase())
    // For activities, use place_category (which is mapped from category) or fall back to category
    // For venues, use place_category
    const placeCategory = (restaurant as any).place_category || 
                         (restaurant.source === 'activity' ? (restaurant as any).category : null) ||
                         'restaurants'
    const matchesCategory = categoryFilter === "all" || placeCategory === categoryFilter
    return matchesSearch && matchesCategory
  })

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'restaurants': 'Cafés & Restaurants',
      'bars-nightlife': 'Bars & Nightlife',
      'shopping': 'Shopping',
      'hebergement': 'Hébergement',
      'sport-bien-etre': 'Sport & Bien-être'
    }
    return labels[category] || category
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
          <h2 className="text-2xl font-bold text-gray-900">Lieux</h2>
          <p className="text-gray-600 mt-1">
            Manage all places ({restaurants.length} total)
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={fetchRestaurants}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Search className="w-5 h-5" />
            Refresh
          </button>
          <button
            onClick={() => router.push("/admin/restaurants/import")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Upload className="w-5 h-5" />
            Import Places
          </button>
          <button
            onClick={() => router.push("/admin/restaurants/new")}
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Place
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search places..."
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
              fetchRestaurants()
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="restaurants">Cafés & Restaurants</option>
            <option value="bars-nightlife">Bars & Nightlife</option>
            <option value="shopping">Shopping</option>
            <option value="hebergement">Hébergement</option>
            <option value="sport-bien-etre">Sport & Bien-être</option>
          </select>
        </div>
      </div>

      {/* Restaurants Table */}
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
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRestaurants.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-gray-500 text-lg">
                      {restaurants.length === 0 
                        ? "No places in database" 
                        : `No places match "${searchTerm}"`}
                    </p>
                    {restaurants.length === 0 && (
                      <div className="text-sm text-gray-400 space-y-2">
                        <p>To add places:</p>
                        <ol className="list-decimal list-inside space-y-1">
                          <li>Run the seed SQL: <code className="bg-gray-100 px-2 py-1 rounded">database/seed-restaurants-json.sql</code></li>
                          <li>Or click "Add Place" to create one manually</li>
                        </ol>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              filteredRestaurants.map((restaurant) => {
                const imageUrl =
                  restaurant.data_jsonb?.photo_url || restaurant.main_image
                const rating =
                  restaurant.data_jsonb?.rating || restaurant.average_rating

                return (
                  <tr key={restaurant.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={restaurant.name_fr}
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
                        {restaurant.name_fr}
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-md">
                        {restaurant.description_fr || restaurant.data_jsonb?.description || ""}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {getCategoryLabel((restaurant as any).place_category || 'restaurants')}
                        </span>
                        {(restaurant as any).category && (
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-gray-100 text-gray-700">
                            {(restaurant as any).category}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          restaurant.is_published
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {restaurant.is_published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {rating ? `★ ${rating}` : "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        {restaurant.source === 'activity' ? (() => {
                          const placeCategory = (restaurant as any).place_category || (restaurant as any).category || 'sport-bien-etre'
                          // Map place_category to the correct activity page URL
                          const activityPageMap: Record<string, string> = {
                            'sport-bien-etre': `/fr/activites/sport-bien-etre/${restaurant.slug}`,
                            'restaurants': `/fr/manger-sortir/restaurants/${restaurant.slug}`,
                            'bars-nightlife': `/fr/manger-sortir/bars-nightlife/${restaurant.slug}`,
                            'shopping': `/fr/manger-sortir/shopping/${restaurant.slug}`,
                            'hebergement': `/fr/planifier/hebergement/${restaurant.slug}`
                          }
                          const activityUrl = activityPageMap[placeCategory] || `/fr/activites/sport-bien-etre/${restaurant.slug}`
                          
                          return (
                            <a
                              href={activityUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-900"
                              title="View on website"
                            >
                              <Eye className="w-5 h-5" />
                            </a>
                          )
                        })() : (
                          <a
                            href={`/fr/lieux/${restaurant.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-900"
                            title="View on website"
                          >
                            <Eye className="w-5 h-5" />
                          </a>
                        )}
                        <button
                          onClick={() => {
                            // For activities, we'll edit them through the same form
                            // The form will detect the source and handle accordingly
                            router.push(`/admin/restaurants/${restaurant.id}?source=${restaurant.source || 'venue'}`)
                          }}
                          className="text-teal-600 hover:text-teal-900"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(restaurant)}
                          disabled={deletingId === restaurant.id}
                          className="text-red-600 hover:text-red-900 disabled:opacity-50"
                          title="Delete"
                        >
                          {deletingId === restaurant.id ? (
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
        Showing {filteredRestaurants.length} of {restaurants.length} places
      </div>
    </div>
  )
}

