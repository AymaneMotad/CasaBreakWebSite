"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { ArrowLeft, Save, Upload, X, Loader2 } from "lucide-react"

export default function EditRestaurantPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  const isNew = id === "new"
  const [isActivity, setIsActivity] = useState(false) // Track if editing an activity

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    slug: "",
    name_fr: "",
    description_fr: "",
    short_description_fr: "",
    main_image: "",
    website: "",
    category: "", // JSON category (francais, asiatique, etc.) - from JSON import
    place_category: "restaurants", // venue_category enum - determines which page (restaurants, bars-nightlife, shopping, hebergement)
    price_range: "$$",
    average_rating: 0,
    is_published: true,
    cuisine_types: [] as string[],
    // JSONB fields
    district: "",
    address: "",
    phone: "",
    price_level: "€€",
    tags: [] as string[],
  })

  useEffect(() => {
    if (!isNew) {
      fetchRestaurant()
    }
  }, [id, isNew])

  const fetchRestaurant = async () => {
    try {
      const supabase = createClient()
      
      // Try fetching from venues first
      let { data, error } = await supabase
        .from("venues")
        .select("*")
        .eq("id", id)
        .single()

      // If not found in venues, try activities table
      if (error && error.code === 'PGRST116') {
        setIsActivity(true)
        const activitiesResult = await supabase
          .from("activities")
          .select("*")
          .eq("id", id)
          .single()
        
        if (activitiesResult.error) throw activitiesResult.error
        data = activitiesResult.data
        error = null
      } else if (error) {
        throw error
      }

      if (!data) throw new Error("Place not found")

      // Both activities and venues now have the same structure
      const jsonData = data.data_jsonb || {}
      const imageUrl = data.main_image || jsonData.photo_url || ""
      
      console.log('📥 Loading place data:', {
        id: data.id,
        name: data.name_fr,
        isActivity,
        main_image_column: data.main_image,
        jsonb_photo_url: jsonData.photo_url,
        final_image_url: imageUrl,
        hasImage: !!imageUrl,
      })
      
      // Both use place_category now (after migration)
      const placeCategory = (data as any).place_category || data.category || (isActivity ? "sport-bien-etre" : "restaurants")

      setFormData({
        slug: data.slug || "",
        name_fr: data.name_fr || "",
        description_fr: data.description_fr || "",
        short_description_fr: data.short_description_fr || "",
        main_image: imageUrl,
        website: data.website || jsonData.website || "",
        category: jsonData?.category || (isActivity ? "" : (data.category || "")), // JSON category (francais, asiatique, etc.) - activities don't have this yet
        place_category: placeCategory, // venue_category enum - determines page
        price_range: data.price_range || "$$",
        average_rating: jsonData.rating || data.average_rating || 0,
        is_published: data.is_published ?? true,
        cuisine_types: data.cuisine_types || [],
        district: jsonData.district || (data as any).district || "",
        address: jsonData.address || (data as any).address || "",
        phone: jsonData.phone || (data as any).phone || "",
        price_level: jsonData.price_level || "€€",
        tags: jsonData.tags || [],
      })
      
      console.log('✅ FormData set with image URL:', imageUrl || 'EMPTY')
    } catch (error) {
      console.error("Error fetching restaurant:", error)
      alert("Failed to load restaurant")
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
    if (!validTypes.includes(file.type)) {
      alert('Please select a valid image file (JPEG, PNG, WebP, or GIF)')
      return
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      alert('Image size must be less than 5MB')
      return
    }

    setUploading(true)
    try {
      const supabase = createClient()
      
      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        throw new Error('You must be logged in to upload images')
      }

      // Generate unique filename
      const fileExt = file.name.split(".").pop()?.toLowerCase() || 'jpg'
      const timestamp = Date.now()
      const randomStr = Math.random().toString(36).substring(2, 15)
      const fileName = `restaurants/${timestamp}-${randomStr}.${fileExt}`
      
      console.log('📤 Uploading image:', fileName, 'Size:', (file.size / 1024).toFixed(2), 'KB')

      // Upload to Supabase Storage - using existing "casabreak" bucket
      const bucketName = "casabreak"
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        })

      if (uploadError) {
        console.error('❌ Upload error:', uploadError)
        // Check for specific error types
        if (uploadError.message.includes('Bucket not found')) {
          throw new Error(`Storage bucket "${bucketName}" not found. Please create it in Supabase Dashboard → Storage.`)
        } else if (uploadError.message.includes('new row violates row-level security')) {
          throw new Error('Permission denied. Check storage bucket RLS policies. Run database/setup-storage-bucket.sql')
        } else if (uploadError.message.includes('The resource already exists')) {
          // Try with a different filename
          const newFileName = `restaurants/${timestamp}-${randomStr}-${Date.now()}.${fileExt}`
          const { data: retryData, error: retryError } = await supabase.storage
            .from(bucketName)
            .upload(newFileName, file, { cacheControl: "3600", upsert: false })
          
          if (retryError) throw retryError
          
          const { data: { publicUrl } } = supabase.storage
            .from(bucketName)
            .getPublicUrl(newFileName)
          
          setFormData((prev) => ({ ...prev, main_image: publicUrl }))
          console.log('✅ Image uploaded successfully:', publicUrl)
          return
        }
        throw uploadError
      }

      if (!uploadData) {
        throw new Error('Upload failed - no data returned')
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucketName)
        .getPublicUrl(fileName)

      console.log('✅ Image uploaded successfully!')
      console.log('📁 File path:', fileName)
      console.log('🔗 Public URL:', publicUrl)
      console.log('📦 Bucket:', bucketName)
      
      // Ensure URL is properly formatted
      const imageUrl = publicUrl || `${supabase.storage.from(bucketName).getPublicUrl(fileName).data.publicUrl}`
      
      console.log('💾 Setting image URL:', imageUrl)
      setFormData((prev) => {
        const updated = { ...prev, main_image: imageUrl }
        console.log('✅ FormData updated with image URL:', updated.main_image)
        return updated
      })
      
      // Show success message
      alert(`✅ Image uploaded successfully!\n\nURL: ${imageUrl.substring(0, 80)}...\n\n⚠️ Don't forget to click "Save Restaurant" to persist the image!`)
    } catch (error: any) {
      console.error("❌ Error uploading image:", error)
      const errorMessage = error?.message || 'Unknown error occurred'
      alert(`Failed to upload image:\n\n${errorMessage}\n\nCheck browser console (F12) for details.`)
    } finally {
      setUploading(false)
      // Reset file input
      e.target.value = ''
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const supabase = createClient()
      
      // Verify formData.main_image is set before saving
      console.log('🔍 FormData before save:', {
        main_image: formData.main_image,
        hasMainImage: !!formData.main_image,
        mainImageLength: formData.main_image?.length || 0
      })
      
      if (!formData.main_image) {
        console.warn('⚠️ Warning: No image URL in formData.main_image')
      }
      
      // Ensure photo_url is always set if main_image exists
      const imageUrl = formData.main_image?.trim() || null
      
      // Both activities and venues now have data_jsonb with same structure
      const jsonbData = {
        id: formData.slug,
        name: formData.name_fr,
        category: formData.category || null, // JSON category (francais, asiatique, etc.) - keep as is
        description: formData.description_fr,
        address: formData.address,
        district: formData.district,
        phone: formData.phone,
        rating: formData.average_rating,
        price_level: formData.price_level,
        photo_url: imageUrl, // Always set to same value as main_image
        website: formData.website || null,
        tags: formData.tags,
        subtype: formData.cuisine_types[0] || "fusion",
      }

      // Validate place_category is a valid enum value
      const validPlaceCategories = ['restaurants', 'bars-nightlife', 'shopping', 'hebergement', 'sport-bien-etre']
      const placeCategory = validPlaceCategories.includes(formData.place_category) 
        ? formData.place_category 
        : 'restaurants' // Default to restaurants if invalid

      // Unified structure - both activities and venues now have the same fields
      const updateData: any = {
        slug: formData.slug || formData.name_fr.toLowerCase().replace(/\s+/g, "-"),
        name_fr: formData.name_fr,
        description_fr: formData.description_fr,
        short_description_fr: formData.short_description_fr || formData.description_fr.substring(0, 200),
        main_image: imageUrl,
        website: formData.website || null,
        price_range: formData.price_range,
        average_rating: formData.average_rating,
        is_published: formData.is_published,
        cuisine_types: formData.cuisine_types,
        // For venues: category column is venue_category NOT NULL, so use place_category value
        // For activities: category is activity_category enum, use place_category if it matches
        category: isActivity 
          ? (validPlaceCategories.includes(formData.place_category) ? formData.place_category : 'sport-bien-etre')
          : placeCategory, // venues.category must be a valid venue_category enum
        place_category: placeCategory, // venue_category enum - determines which page
        data_jsonb: jsonbData, // JSON category (asiatique, francais, etc.) stored here
        address: formData.address || null, // Both tables now have address
        district: formData.district || null, // Both tables now have district
        phone: formData.phone || null, // Both tables have phone (also in data_jsonb for consistency)
        location_id: null, // Explicitly set to null to avoid undefined UUID errors
      }

      console.log(`💾 Saving ${isActivity ? 'activity' : 'venue'} with data:`, {
        id: isNew ? 'new' : id,
        name_fr: updateData.name_fr,
        main_image: updateData.main_image,
        isActivity,
        updateData
      })

      const tableName = isActivity ? "activities" : "venues"

      if (isNew) {
        const { data: insertedData, error } = await supabase.from(tableName).insert(updateData).select()
        if (error) {
          console.error('❌ Insert error:', error)
          throw error
        }
        console.log(`✅ ${isActivity ? 'Activity' : 'Place'} created:`, insertedData)
        if (insertedData && insertedData[0]) {
          console.log('📸 Saved image URL:', insertedData[0].main_image)
          console.log('📸 Saved JSONB photo_url:', insertedData[0].data_jsonb?.photo_url)
        }
      } else {
        const { data: updatedData, error } = await supabase.from(tableName).update(updateData).eq("id", id).select()
        if (error) {
          console.error('❌ Update error:', error)
          throw error
        }
        console.log(`✅ ${isActivity ? 'Activity' : 'Place'} updated:`, updatedData)
        if (updatedData && updatedData[0]) {
          console.log('📸 Saved image URL:', updatedData[0].main_image)
          console.log('📸 Saved JSONB photo_url:', updatedData[0].data_jsonb?.photo_url)
        }
      }

      alert(`✅ ${isActivity ? 'Activity' : 'Place'} saved successfully!\n\nImage URL: ${updateData.main_image ? updateData.main_image.substring(0, 60) + '...' : 'None'}`)
      router.push("/admin/restaurants")
      router.refresh()
    } catch (error: any) {
      console.error(`Error saving ${isActivity ? 'activity' : 'place'}:`, error)
      alert(`Failed to save ${isActivity ? 'activity' : 'place'}: ` + (error.message || "Unknown error"))
    } finally {
      setSaving(false)
    }
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
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-2xl font-bold text-gray-900">
          {isNew ? "Create Place" : "Edit Place"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="restaurant-name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name (French) *
                </label>
                <input
                  type="text"
                  value={formData.name_fr}
                  onChange={(e) => setFormData({ ...formData, name_fr: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Place Category (Page Location) *
                  <span className="text-gray-400 text-xs ml-2">(determines which navbar section)</span>
                </label>
                <select
                  value={formData.place_category}
                  onChange={(e) => setFormData({ ...formData, place_category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="restaurants">Cafés & Restaurants</option>
                  <option value="bars-nightlife">Bars & Nightlife</option>
                  <option value="shopping">Shopping</option>
                  <option value="hebergement">Hébergement</option>
                  <option value="sport-bien-etre">Sport & Bien-être</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                  <span className="text-gray-400 text-xs ml-2">(from JSON: francais, asiatique, etc.)</span>
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., francais, asiatique, marocain"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <p className="mt-1 text-xs text-gray-500">
                  JSON category field - used for filtering/displaying within the page. Set automatically from JSON import.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (French) *
                </label>
                <textarea
                  value={formData.description_fr}
                  onChange={(e) => setFormData({ ...formData, description_fr: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Short Description
                </label>
                <textarea
                  value={formData.short_description_fr}
                  onChange={(e) => setFormData({ ...formData, short_description_fr: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Image</h3>
            <div className="space-y-4">
              {/* Always show image URL field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL *
                </label>
                <input
                  type="url"
                  value={formData.main_image}
                  onChange={(e) => {
                    console.log('🖼️ Image URL changed:', e.target.value)
                    setFormData({ ...formData, main_image: e.target.value })
                  }}
                  placeholder="https://yzgvfaxalzubsmmqmswx.supabase.co/storage/v1/object/public/casabreak/..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {formData.main_image && (
                  <p className="mt-1 text-xs text-gray-500 break-all">
                    Current: {formData.main_image}
                  </p>
                )}
              </div>
              
              {/* Show preview if URL exists */}
              {formData.main_image && (
                <div className="space-y-2">
                  <div className="relative inline-block">
                    <img
                      src={formData.main_image}
                      alt="Preview"
                      className="w-64 h-64 object-cover rounded-lg border-2 border-teal-500"
                      onError={(e) => {
                        console.error('❌ Preview image failed to load:', formData.main_image)
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const errorDiv = target.nextElementSibling as HTMLElement
                        if (errorDiv) {
                          errorDiv.style.display = 'block'
                        }
                      }}
                      onLoad={() => {
                        console.log('✅ Preview image loaded:', formData.main_image)
                      }}
                    />
                    <div className="hidden w-64 h-64 bg-red-50 border-2 border-red-300 rounded-lg flex items-center justify-center text-red-600 text-sm">
                      ❌ Image failed to load. Check URL.
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        console.log('🗑️ Clearing image URL')
                        setFormData({ ...formData, main_image: "" })
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
              
              {/* Upload button */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Image to Supabase Storage
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 cursor-pointer">
                    <Upload className="w-5 h-5" />
                    {uploading ? "Uploading..." : "Choose File"}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                  </label>
                  {uploading && <Loader2 className="w-5 h-5 animate-spin text-teal-600" />}
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  After uploading, the URL will be automatically filled above. Then click "Save Restaurant" to persist it.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  District
                </label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Gauthier"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="27 Avenue des Forces Armées Royales, Casablanca"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="+212 5 29 90 05 00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Level
                </label>
                <select
                  value={formData.price_level}
                  onChange={(e) => setFormData({ ...formData, price_level: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="€">€</option>
                  <option value="€€">€€</option>
                  <option value="€€€">€€€</option>
                  <option value="€€€€">€€€€</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Published
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.is_published}
                    onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700">Publish this restaurant</span>
                </label>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        tags: formData.tags.filter((_, i) => i !== idx),
                      })
                    }}
                    className="hover:text-teal-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add tag (press Enter)"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    const input = e.currentTarget
                    const tag = input.value.trim()
                    if (tag && !formData.tags.includes(tag)) {
                      setFormData({
                        ...formData,
                        tags: [...formData.tags, tag],
                      })
                      input.value = ""
                    }
                  }
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Save Place
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

