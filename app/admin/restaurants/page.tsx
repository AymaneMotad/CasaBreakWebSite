"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Plus, Edit, Trash2, Image as ImageIcon, Search, Loader2 } from "lucide-react"

interface Restaurant {
  id: string
  slug: string
  name_fr: string
  description_fr: string | null
  main_image: string | null
  data_jsonb: any
  average_rating: number
  is_published: boolean
}

export default function AdminRestaurantsPage() {
  const router = useRouter()
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    fetchRestaurants()
  }, [])

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
      
      // Now try with category filter
      console.log("Test 2: With category filter...")
      const { data, error } = await supabase
        .from("venues")
        .select("*")
        .eq("category", "restaurants")

      if (error) {
        console.error("❌ Supabase error details:", {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
          fullError: error
        })
        alert(`Error loading restaurants:\n\n${error.message}\n\nCode: ${error.code}\n\nCheck browser console (F12) for full details.`)
        return
      }
      
      console.log(`✅ Loaded ${data?.length || 0} restaurants`)
      console.log("Sample restaurant:", data?.[0])
      setRestaurants(data || [])
      
      if (data && data.length === 0) {
        console.warn("⚠️ No restaurants found with category='restaurants'")
        console.log("Checking all venues...")
        const { data: allVenues } = await supabase.from("venues").select("id, name_fr, category").limit(10)
        console.log("All venues sample:", allVenues)
      }
    } catch (error: any) {
      console.error("❌ Exception caught:", error)
      console.error("Error stack:", error.stack)
      alert(`Failed to load restaurants:\n\n${error?.message || "Unknown error"}\n\nCheck browser console (F12) for full details.`)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this restaurant?")) return

    setDeletingId(id)
    try {
      const supabase = createClient()
      const { error } = await supabase.from("venues").delete().eq("id", id)

      if (error) throw error
      fetchRestaurants()
    } catch (error) {
      console.error("Error deleting restaurant:", error)
      alert("Failed to delete restaurant")
    } finally {
      setDeletingId(null)
    }
  }

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name_fr.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <h2 className="text-2xl font-bold text-gray-900">Restaurants</h2>
          <p className="text-gray-600 mt-1">
            Manage all restaurants ({restaurants.length} total)
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
            onClick={() => router.push("/admin/restaurants/new")}
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Restaurant
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
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
                <td colSpan={5} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-gray-500 text-lg">
                      {restaurants.length === 0 
                        ? "No restaurants in database" 
                        : `No restaurants match "${searchTerm}"`}
                    </p>
                    {restaurants.length === 0 && (
                      <div className="text-sm text-gray-400 space-y-2">
                        <p>To add restaurants:</p>
                        <ol className="list-decimal list-inside space-y-1">
                          <li>Run the seed SQL: <code className="bg-gray-100 px-2 py-1 rounded">database/seed-restaurants-json.sql</code></li>
                          <li>Or click "Add Restaurant" to create one manually</li>
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
                        <button
                          onClick={() =>
                            router.push(`/admin/restaurants/${restaurant.id}`)
                          }
                          className="text-teal-600 hover:text-teal-900"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(restaurant.id)}
                          disabled={deletingId === restaurant.id}
                          className="text-red-600 hover:text-red-900 disabled:opacity-50"
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
        Showing {filteredRestaurants.length} of {restaurants.length} restaurants
      </div>
    </div>
  )
}

