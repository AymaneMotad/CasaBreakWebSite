"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { ArrowLeft, Upload, CheckCircle, XCircle, Loader2, FileJson } from "lucide-react"

interface RestaurantJson {
  id: string
  name: string
  category: string
  description: string
  address?: string
  district?: string
  phone?: string
  rating?: number
  price_level?: string
  tags?: string[]
  photo_url?: string
}

export default function ImportRestaurantsPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [restaurants, setRestaurants] = useState<RestaurantJson[]>([])
  const [loading, setLoading] = useState(false)
  const [importing, setImporting] = useState(false)
  const [importResults, setImportResults] = useState<{
    success: number
    errors: number
    details: Array<{ name: string; status: 'success' | 'error'; message?: string }>
  } | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    if (!selectedFile.name.endsWith('.json')) {
      alert('Please select a JSON file')
      return
    }

    setFile(selectedFile)
    setRestaurants([])
    setImportResults(null)

    try {
      const text = await selectedFile.text()
      const json = JSON.parse(text)

      // Extract restaurants array (ignore the top-level key)
      let restaurantsArray: RestaurantJson[] = []
      
      // Find the first array value in the JSON object
      const keys = Object.keys(json)
      if (keys.length > 0) {
        const firstKey = keys[0]
        if (Array.isArray(json[firstKey])) {
          restaurantsArray = json[firstKey]
        } else {
          throw new Error('JSON structure invalid: Expected an array of restaurants')
        }
      } else {
        throw new Error('JSON structure invalid: Empty JSON object')
      }

      // Validate structure
      const validated = restaurantsArray.filter((restaurant, index) => {
        if (!restaurant.id || !restaurant.name) {
          console.warn(`Restaurant at index ${index} missing required fields (id or name)`)
          return false
        }
        return true
      })

      if (validated.length === 0) {
        throw new Error('No valid restaurants found in JSON file')
      }

      setRestaurants(validated)
      console.log(`✅ Parsed ${validated.length} restaurants from JSON`)
    } catch (error: any) {
      console.error('Error parsing JSON:', error)
      alert(`Failed to parse JSON file:\n\n${error.message}\n\nPlease check the file format.`)
      setFile(null)
      setRestaurants([])
    }
  }

  const handleImport = async () => {
    if (restaurants.length === 0) {
      alert('No restaurants to import')
      return
    }

    setImporting(true)
    setImportResults(null)

    const supabase = createClient()
    const results = {
      success: 0,
      errors: 0,
      details: [] as Array<{ name: string; status: 'success' | 'error'; message?: string }>
    }

    try {
      for (const restaurant of restaurants) {
        try {
          // Generate slug from id or name
          const slug = restaurant.id || restaurant.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
          
          // Map price_level to price_range (convert € to $)
          const priceRange = restaurant.price_level 
            ? restaurant.price_level.replace(/€/g, '$')
            : null

          // Map category to cuisine_types array
          const cuisineTypes = restaurant.category ? [restaurant.category] : []

          // Create data_jsonb object
          const jsonbData = {
            id: restaurant.id,
            name: restaurant.name,
            category: restaurant.category || 'restaurants',
            description: restaurant.description || '',
            address: restaurant.address || '',
            district: restaurant.district || '',
            phone: restaurant.phone || null,
            rating: restaurant.rating || null,
            price_level: restaurant.price_level || null,
            photo_url: restaurant.photo_url || null,
            website: null,
            tags: restaurant.tags || [],
          }

          // Prepare insert data
          const insertData: any = {
            slug,
            category: 'restaurants',
            name_fr: restaurant.name,
            description_fr: restaurant.description || '',
            short_description_fr: restaurant.description 
              ? restaurant.description.substring(0, 200)
              : '',
            main_image: restaurant.photo_url || null,
            phone: restaurant.phone || null,
            average_rating: restaurant.rating || 0,
            price_range: priceRange,
            cuisine_types: cuisineTypes,
            is_published: true,
            data_jsonb: jsonbData,
          }

          // Insert or update (using upsert with slug as conflict target)
          const { error } = await supabase
            .from('venues')
            .upsert(insertData, {
              onConflict: 'slug'
            })

          if (error) {
            throw error
          }

          results.success++
          results.details.push({
            name: restaurant.name,
            status: 'success'
          })
        } catch (error: any) {
          results.errors++
          results.details.push({
            name: restaurant.name,
            status: 'error',
            message: error.message || 'Unknown error'
          })
          console.error(`Error importing ${restaurant.name}:`, error)
        }
      }

      setImportResults(results)
      
      if (results.errors === 0) {
        alert(`✅ Successfully imported ${results.success} restaurants!`)
        router.push('/admin/restaurants')
      } else {
        alert(`⚠️ Import completed with errors:\n\n✅ Success: ${results.success}\n❌ Errors: ${results.errors}\n\nCheck the details below.`)
      }
    } catch (error: any) {
      console.error('Import error:', error)
      alert(`Failed to import restaurants: ${error.message}`)
    } finally {
      setImporting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Import Restaurants</h1>
          <p className="mt-2 text-gray-600">
            Upload a JSON file to import restaurants. The file should contain an array of restaurant objects.
          </p>
        </div>

        {/* File Upload */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Select JSON File
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 cursor-pointer">
              <FileJson className="w-5 h-5" />
              Choose File
              <input
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
                disabled={importing}
              />
            </label>
            {file && (
              <span className="text-sm text-gray-600">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </span>
            )}
          </div>
        </div>

        {/* Preview */}
        {restaurants.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Preview ({restaurants.length} restaurants)
              </h2>
              <button
                onClick={handleImport}
                disabled={importing}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {importing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Importing...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Import Restaurants
                  </>
                )}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      District
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tags
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {restaurants.map((restaurant, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {restaurant.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 max-w-xs">
                        <div className="line-clamp-2">
                          {restaurant.description || '-'}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 max-w-xs">
                        <div className="line-clamp-2">
                          {restaurant.address || '-'}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {restaurant.district || '-'}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {restaurant.phone || '-'}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {restaurant.tags && restaurant.tags.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {restaurant.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {tag}
                              </span>
                            ))}
                            {restaurant.tags.length > 3 && (
                              <span className="text-xs text-gray-400">
                                +{restaurant.tags.length - 3}
                              </span>
                            )}
                          </div>
                        ) : (
                          '-'
                        )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        {restaurant.photo_url ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-400" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Import Results */}
        {importResults && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Import Results
            </h2>
            <div className="mb-4">
              <div className="flex items-center gap-4">
                <div className="text-green-600">
                  ✅ Success: {importResults.success}
                </div>
                <div className="text-red-600">
                  ❌ Errors: {importResults.errors}
                </div>
              </div>
            </div>
            {importResults.errors > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Error Details:</h3>
                <div className="space-y-1">
                  {importResults.details
                    .filter(d => d.status === 'error')
                    .map((detail, index) => (
                      <div key={index} className="text-sm text-red-600">
                        • {detail.name}: {detail.message}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

