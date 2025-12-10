"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { ArrowLeft, Save, Upload, X, Loader2 } from "lucide-react"

export default function EditEventPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  const isNew = id === "new"

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    slug: "",
    name_fr: "",
    description_fr: "",
    short_description_fr: "",
    main_image: "",
    category: "concerts-spectacles",
    start_date: "",
    end_date: "",
    venue_name_fr: "",
    is_free: false,
    price_from: "",
    price_to: "",
    organizer_name: "",
    phone: "",
    email: "",
    website: "",
    ticket_url: "",
    is_published: true,
  })

  useEffect(() => {
    if (!isNew) {
      fetchEvent()
    }
  }, [id, isNew])

  const fetchEvent = async () => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single()

      if (error) throw error

      const startDate = data.start_date ? new Date(data.start_date).toISOString().slice(0, 16) : ""
      const endDate = data.end_date ? new Date(data.end_date).toISOString().slice(0, 16) : ""

      setFormData({
        slug: data.slug || "",
        name_fr: data.name_fr || "",
        description_fr: data.description_fr || "",
        short_description_fr: data.short_description_fr || "",
        main_image: data.main_image || "",
        category: data.category || "concerts-spectacles",
        start_date: startDate,
        end_date: endDate,
        venue_name_fr: data.venue_name_fr || "",
        is_free: data.is_free || false,
        price_from: data.price_from?.toString() || "",
        price_to: data.price_to?.toString() || "",
        organizer_name: data.organizer_name || "",
        phone: data.phone || "",
        email: data.email || "",
        website: data.website || "",
        ticket_url: data.ticket_url || "",
        is_published: data.is_published ?? true,
      })
    } catch (error) {
      console.error("Error fetching event:", error)
      alert("Failed to load event")
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
      const fileName = `events/${timestamp}-${randomStr}.${fileExt}`
      
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
          throw new Error('Permission denied. Check storage bucket RLS policies. Run database/setup-storage-events.sql')
        } else if (uploadError.message.includes('The resource already exists')) {
          // Try with a different filename
          const newFileName = `events/${timestamp}-${randomStr}-${Date.now()}.${fileExt}`
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
      alert(`✅ Image uploaded successfully!\n\nURL: ${imageUrl.substring(0, 80)}...\n\n⚠️ Don't forget to click "Save Event" to persist the image!`)
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
      
      // Auto-generate slug if not provided
      const slug = formData.slug || formData.name_fr.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, '')
      
      const updateData: any = {
        slug: slug,
        name_fr: formData.name_fr,
        description_fr: formData.description_fr || null,
        short_description_fr: formData.short_description_fr || formData.description_fr?.substring(0, 200) || null,
        main_image: formData.main_image || null,
        category: formData.category,
        start_date: formData.start_date || null,
        end_date: formData.end_date || null,
        venue_name_fr: formData.venue_name_fr || null,
        is_free: formData.is_free,
        price_from: formData.price_from ? parseFloat(formData.price_from) : null,
        price_to: formData.price_to ? parseFloat(formData.price_to) : null,
        organizer_name: formData.organizer_name || null,
        phone: formData.phone || null,
        email: formData.email || null,
        website: formData.website || null,
        ticket_url: formData.ticket_url || null,
        is_published: formData.is_published,
      }

      if (isNew) {
        const { data: insertedData, error } = await supabase.from("events").insert(updateData).select()
        if (error) {
          console.error('Insert error:', error)
          throw error
        }
        console.log('✅ Event created:', insertedData)
      } else {
        const { data: updatedData, error } = await supabase.from("events").update(updateData).eq("id", id).select()
        if (error) {
          console.error('Update error:', error)
          throw error
        }
        console.log('✅ Event updated:', updatedData)
      }

      alert(`✅ Event saved successfully!`)
      router.push("/admin/events")
      router.refresh()
    } catch (error: any) {
      console.error("Error saving event:", error)
      alert("Failed to save event: " + (error.message || "Unknown error"))
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
          {isNew ? "Create Event" : "Edit Event"}
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
                  Slug
                  <span className="text-gray-400 text-xs ml-2">(auto-generated if empty)</span>
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="event-name"
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
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="concerts-spectacles">Concerts & Spectacles</option>
                  <option value="expositions-galeries">Expositions & Galeries</option>
                  <option value="festivals">Festivals</option>
                  <option value="evenements-sportifs">Événements Sportifs</option>
                  <option value="foires-salons">Foires & Salons</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (French)
                </label>
                <textarea
                  value={formData.description_fr}
                  onChange={(e) => setFormData({ ...formData, description_fr: e.target.value })}
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.main_image}
                  onChange={(e) => setFormData({ ...formData, main_image: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              
              {formData.main_image && (
                <div className="space-y-2">
                  <div className="relative inline-block">
                    <img
                      src={formData.main_image}
                      alt="Preview"
                      className="w-64 h-64 object-cover rounded-lg border-2 border-teal-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, main_image: "" })}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
              
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
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={formData.start_date}
                  onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={formData.end_date}
                  onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Venue Name
                </label>
                <input
                  type="text"
                  value={formData.venue_name_fr}
                  onChange={(e) => setFormData({ ...formData, venue_name_fr: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organizer Name
                </label>
                <input
                  type="text"
                  value={formData.organizer_name}
                  onChange={(e) => setFormData({ ...formData, organizer_name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.is_free}
                    onChange={(e) => setFormData({ ...formData, is_free: e.target.checked })}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700">Free Event</span>
                </label>
              </div>

              {!formData.is_free && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price From (MAD)
                    </label>
                    <input
                      type="number"
                      value={formData.price_from}
                      onChange={(e) => setFormData({ ...formData, price_from: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price To (MAD)
                    </label>
                    <input
                      type="number"
                      value={formData.price_to}
                      onChange={(e) => setFormData({ ...formData, price_to: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
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
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ticket URL
                </label>
                <input
                  type="url"
                  value={formData.ticket_url}
                  onChange={(e) => setFormData({ ...formData, ticket_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Published */}
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.is_published}
                onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="text-sm text-gray-700">Publish this event</span>
            </label>
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
                Save Event
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
