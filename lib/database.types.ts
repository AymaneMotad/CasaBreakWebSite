// =====================================================
// CASABREAK DATABASE TYPES
// Auto-generated TypeScript types matching Supabase schema
// =====================================================

// =====================================================
// ENUMS
// =====================================================

export type LanguageCode = 'fr' | 'en' | 'ar';

export type PriceRange = '$' | '$$' | '$$$' | '$$$$';

export type AccommodationType = 
  | 'hotel'
  | 'riad'
  | 'apartment'
  | 'villa'
  | 'hostel'
  | 'guesthouse'
  | 'resort';

export type ActivityCategory = 
  | 'incontournables'      // Must-see
  | 'plein-air-mer'        // Outdoor & Sea
  | 'famille-enfants'      // Family & Kids
  | 'shopping';            // Shopping

export type VenueCategory = 
  | 'restaurants'          // Cafés & Restaurants
  | 'bars-nightlife'       // Bars & Nightlife
  | 'centres-commerciaux'  // Shopping Malls
  | 'souks-artisanat';     // Souks & Crafts

export type EventCategory = 
  | 'concerts-spectacles'      // Concerts & Shows
  | 'expositions-galeries'     // Exhibitions & Galleries
  | 'festivals'                // Festivals
  | 'evenements-sportifs'      // Sports Events
  | 'foires-salons';           // Fairs & Salons

export type VisitType = 
  | 'individuels'    // Individuals
  | 'groupes'        // Groups
  | 'etudiants'      // Students
  | 'seniors'        // Seniors
  | 'handicapes';    // Disabled visitors

export type BookingStatus = 
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed';

// =====================================================
// BASE TYPES
// =====================================================

export interface Location {
  id: string;
  name_fr: string;
  name_en: string | null;
  name_ar: string | null;
  address_fr: string | null;
  address_en: string | null;
  address_ar: string | null;
  city: string;
  neighborhood: string | null;
  postal_code: string | null;
  latitude: number | null;
  longitude: number | null;
  google_maps_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Amenity {
  id: string;
  name_fr: string;
  name_en: string | null;
  name_ar: string | null;
  icon: string | null;
  category: string | null;
}

export interface Tag {
  id: string;
  slug: string;
  name_fr: string;
  name_en: string | null;
  name_ar: string | null;
  category: string | null;
}

// =====================================================
// ACCOMMODATIONS (Hébergement)
// =====================================================

export interface Accommodation {
  id: string;
  slug: string;
  
  // Multilingual fields
  name_fr: string;
  name_en: string | null;
  name_ar: string | null;
  description_fr: string | null;
  description_en: string | null;
  description_ar: string | null;
  
  // Type and classification
  type: AccommodationType;
  star_rating: number | null;
  price_range: PriceRange | null;
  price_from: number | null;
  currency: string;
  
  // Location
  location_id: string | null;
  location?: Location;
  
  // Contact info
  phone: string | null;
  email: string | null;
  website: string | null;
  
  // Booking
  booking_url: string | null;
  accepts_direct_booking: boolean;
  
  // Media
  main_image: string | null;
  images?: Image[];
  
  // Relations
  amenities?: Amenity[];
  tags?: Tag[];
  reviews?: Review[];
  
  // Metadata
  is_featured: boolean;
  is_published: boolean;
  average_rating: number;
  review_count: number;
  
  created_at: string;
  updated_at: string;
}

export interface AccommodationInsert {
  slug: string;
  name_fr: string;
  name_en?: string | null;
  name_ar?: string | null;
  description_fr?: string | null;
  description_en?: string | null;
  description_ar?: string | null;
  type: AccommodationType;
  star_rating?: number | null;
  price_range?: PriceRange | null;
  price_from?: number | null;
  currency?: string;
  location_id?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  booking_url?: string | null;
  accepts_direct_booking?: boolean;
  main_image?: string | null;
  is_featured?: boolean;
  is_published?: boolean;
}

export type AccommodationUpdate = Partial<AccommodationInsert>;

// =====================================================
// ACTIVITIES (Activités)
// =====================================================

export interface Activity {
  id: string;
  slug: string;
  
  // Category
  category: ActivityCategory;
  
  // Multilingual fields
  name_fr: string;
  name_en: string | null;
  name_ar: string | null;
  description_fr: string | null;
  description_en: string | null;
  description_ar: string | null;
  short_description_fr: string | null;
  short_description_en: string | null;
  short_description_ar: string | null;
  
  // Practical info
  duration_minutes: number | null;
  price_from: number | null;
  price_to: number | null;
  currency: string;
  price_range: PriceRange | null;
  
  // Location
  location_id: string | null;
  location?: Location;
  
  // Contact & Booking
  phone: string | null;
  email: string | null;
  website: string | null;
  booking_url: string | null;
  
  // Schedule
  schedule_fr: string | null;
  schedule_en: string | null;
  schedule_ar: string | null;
  
  // Media
  main_image: string | null;
  images?: Image[];
  
  // Relations
  tags?: Tag[];
  reviews?: Review[];
  
  // Metadata
  is_featured: boolean;
  is_published: boolean;
  average_rating: number;
  review_count: number;
  min_age: number | null;
  max_group_size: number | null;
  
  created_at: string;
  updated_at: string;
}

export interface ActivityInsert {
  slug: string;
  category: ActivityCategory;
  name_fr: string;
  name_en?: string | null;
  name_ar?: string | null;
  description_fr?: string | null;
  description_en?: string | null;
  description_ar?: string | null;
  short_description_fr?: string | null;
  short_description_en?: string | null;
  short_description_ar?: string | null;
  duration_minutes?: number | null;
  price_from?: number | null;
  price_to?: number | null;
  currency?: string;
  price_range?: PriceRange | null;
  location_id?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  booking_url?: string | null;
  schedule_fr?: string | null;
  schedule_en?: string | null;
  schedule_ar?: string | null;
  main_image?: string | null;
  is_featured?: boolean;
  is_published?: boolean;
  min_age?: number | null;
  max_group_size?: number | null;
}

export type ActivityUpdate = Partial<ActivityInsert>;

// =====================================================
// VENUES (Manger & Sortir)
// =====================================================

export interface Venue {
  id: string;
  slug: string;
  
  // Category
  category: VenueCategory;
  
  // Multilingual fields
  name_fr: string;
  name_en: string | null;
  name_ar: string | null;
  description_fr: string | null;
  description_en: string | null;
  description_ar: string | null;
  short_description_fr: string | null;
  short_description_en: string | null;
  short_description_ar: string | null;
  
  // Restaurant-specific
  cuisine_types: string[] | null;
  specialties_fr: string | null;
  specialties_en: string | null;
  specialties_ar: string | null;
  
  // Pricing
  price_range: PriceRange | null;
  average_price: number | null;
  currency: string;
  
  // Location
  location_id: string | null;
  location?: Location;
  
  // Contact
  phone: string | null;
  email: string | null;
  website: string | null;
  instagram: string | null;
  facebook: string | null;
  
  // Reservation
  reservation_url: string | null;
  accepts_reservations: boolean;
  
  // Media
  main_image: string | null;
  images?: Image[];
  
  // Features
  has_terrace: boolean;
  has_wifi: boolean;
  has_parking: boolean;
  is_halal: boolean;
  has_vegetarian_options: boolean;
  has_vegan_options: boolean;
  has_delivery: boolean;
  has_takeout: boolean;
  
  // Relations
  opening_hours?: VenueHours[];
  tags?: Tag[];
  reviews?: Review[];
  
  // Metadata
  is_featured: boolean;
  is_published: boolean;
  average_rating: number;
  review_count: number;
  
  created_at: string;
  updated_at: string;
}

export interface VenueHours {
  id: string;
  venue_id: string;
  day_of_week: number; // 0 = Sunday
  open_time: string | null;
  close_time: string | null;
  is_closed: boolean;
}

export interface VenueInsert {
  slug: string;
  category: VenueCategory;
  name_fr: string;
  name_en?: string | null;
  name_ar?: string | null;
  description_fr?: string | null;
  description_en?: string | null;
  description_ar?: string | null;
  short_description_fr?: string | null;
  short_description_en?: string | null;
  short_description_ar?: string | null;
  cuisine_types?: string[] | null;
  specialties_fr?: string | null;
  specialties_en?: string | null;
  specialties_ar?: string | null;
  price_range?: PriceRange | null;
  average_price?: number | null;
  currency?: string;
  location_id?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  reservation_url?: string | null;
  accepts_reservations?: boolean;
  main_image?: string | null;
  has_terrace?: boolean;
  has_wifi?: boolean;
  has_parking?: boolean;
  is_halal?: boolean;
  has_vegetarian_options?: boolean;
  has_vegan_options?: boolean;
  has_delivery?: boolean;
  has_takeout?: boolean;
  is_featured?: boolean;
  is_published?: boolean;
}

export type VenueUpdate = Partial<VenueInsert>;

// =====================================================
// EVENTS (Événements)
// =====================================================

export interface Event {
  id: string;
  slug: string;
  
  // Category
  category: EventCategory;
  
  // Multilingual fields
  name_fr: string;
  name_en: string | null;
  name_ar: string | null;
  description_fr: string | null;
  description_en: string | null;
  description_ar: string | null;
  short_description_fr: string | null;
  short_description_en: string | null;
  short_description_ar: string | null;
  
  // Event dates
  start_date: string;
  end_date: string | null;
  is_recurring: boolean;
  recurrence_rule: string | null;
  
  // Location
  location_id: string | null;
  location?: Location;
  venue_name_fr: string | null;
  venue_name_en: string | null;
  venue_name_ar: string | null;
  
  // Pricing
  is_free: boolean;
  price_from: number | null;
  price_to: number | null;
  currency: string;
  
  // Contact & Tickets
  organizer_name: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  ticket_url: string | null;
  
  // Media
  main_image: string | null;
  images?: Image[];
  
  // Relations
  tags?: Tag[];
  
  // Metadata
  is_featured: boolean;
  is_published: boolean;
  capacity: number | null;
  
  created_at: string;
  updated_at: string;
}

export interface EventInsert {
  slug: string;
  category: EventCategory;
  name_fr: string;
  name_en?: string | null;
  name_ar?: string | null;
  description_fr?: string | null;
  description_en?: string | null;
  description_ar?: string | null;
  short_description_fr?: string | null;
  short_description_en?: string | null;
  short_description_ar?: string | null;
  start_date: string;
  end_date?: string | null;
  is_recurring?: boolean;
  recurrence_rule?: string | null;
  location_id?: string | null;
  venue_name_fr?: string | null;
  venue_name_en?: string | null;
  venue_name_ar?: string | null;
  is_free?: boolean;
  price_from?: number | null;
  price_to?: number | null;
  currency?: string;
  organizer_name?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  ticket_url?: string | null;
  main_image?: string | null;
  is_featured?: boolean;
  is_published?: boolean;
  capacity?: number | null;
}

export type EventUpdate = Partial<EventInsert>;

// =====================================================
// VISIT PACKAGES (Visiter)
// =====================================================

export interface VisitPackage {
  id: string;
  slug: string;
  
  // Type
  type: VisitType;
  
  // Multilingual fields
  name_fr: string;
  name_en: string | null;
  name_ar: string | null;
  description_fr: string | null;
  description_en: string | null;
  description_ar: string | null;
  short_description_fr: string | null;
  short_description_en: string | null;
  short_description_ar: string | null;
  
  // What's included
  includes_fr: string[] | null;
  includes_en: string[] | null;
  includes_ar: string[] | null;
  
  // Practical info
  duration_minutes: number | null;
  min_participants: number;
  max_participants: number | null;
  
  // Pricing
  price_per_person: number | null;
  group_price: number | null;
  currency: string;
  
  // Schedule
  available_days: number[] | null;
  start_times: string[] | null;
  
  // Contact & Booking
  phone: string | null;
  email: string | null;
  booking_url: string | null;
  
  // Media
  main_image: string | null;
  images?: Image[];
  
  // Metadata
  is_featured: boolean;
  is_published: boolean;
  requires_advance_booking: boolean;
  advance_booking_days: number;
  
  created_at: string;
  updated_at: string;
}

export interface VisitPackageInsert {
  slug: string;
  type: VisitType;
  name_fr: string;
  name_en?: string | null;
  name_ar?: string | null;
  description_fr?: string | null;
  description_en?: string | null;
  description_ar?: string | null;
  short_description_fr?: string | null;
  short_description_en?: string | null;
  short_description_ar?: string | null;
  includes_fr?: string[] | null;
  includes_en?: string[] | null;
  includes_ar?: string[] | null;
  duration_minutes?: number | null;
  min_participants?: number;
  max_participants?: number | null;
  price_per_person?: number | null;
  group_price?: number | null;
  currency?: string;
  available_days?: number[] | null;
  start_times?: string[] | null;
  phone?: string | null;
  email?: string | null;
  booking_url?: string | null;
  main_image?: string | null;
  is_featured?: boolean;
  is_published?: boolean;
  requires_advance_booking?: boolean;
  advance_booking_days?: number;
}

export type VisitPackageUpdate = Partial<VisitPackageInsert>;

// =====================================================
// IMAGES
// =====================================================

export interface Image {
  id: string;
  url: string;
  alt_fr: string | null;
  alt_en: string | null;
  alt_ar: string | null;
  caption_fr: string | null;
  caption_en: string | null;
  caption_ar: string | null;
  width: number | null;
  height: number | null;
  file_size: number | null;
  mime_type: string | null;
  entity_type: string;
  entity_id: string;
  display_order: number;
  is_main: boolean;
  created_at: string;
}

export interface ImageInsert {
  url: string;
  alt_fr?: string | null;
  alt_en?: string | null;
  alt_ar?: string | null;
  caption_fr?: string | null;
  caption_en?: string | null;
  caption_ar?: string | null;
  width?: number | null;
  height?: number | null;
  file_size?: number | null;
  mime_type?: string | null;
  entity_type: string;
  entity_id: string;
  display_order?: number;
  is_main?: boolean;
}

// =====================================================
// REVIEWS
// =====================================================

export interface Review {
  id: string;
  entity_type: string;
  entity_id: string;
  rating: number;
  title: string | null;
  content: string | null;
  language: LanguageCode;
  reviewer_name: string;
  reviewer_email: string | null;
  is_approved: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface ReviewInsert {
  entity_type: string;
  entity_id: string;
  rating: number;
  title?: string | null;
  content?: string | null;
  language?: LanguageCode;
  reviewer_name: string;
  reviewer_email?: string | null;
}

// =====================================================
// BOOKINGS
// =====================================================

export interface Booking {
  id: string;
  entity_type: string;
  entity_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  company_name: string | null;
  booking_date: string;
  start_time: string | null;
  end_date: string | null;
  number_of_people: number;
  special_requests: string | null;
  language: LanguageCode;
  total_price: number | null;
  currency: string;
  status: BookingStatus;
  created_at: string;
  updated_at: string;
}

export interface BookingInsert {
  entity_type: string;
  entity_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string | null;
  company_name?: string | null;
  booking_date: string;
  start_time?: string | null;
  end_date?: string | null;
  number_of_people?: number;
  special_requests?: string | null;
  language?: LanguageCode;
  total_price?: number | null;
  currency?: string;
  status?: BookingStatus;
}

export type BookingUpdate = Partial<BookingInsert>;

// =====================================================
// HELPER TYPES FOR QUERIES
// =====================================================

// Get localized name based on current locale
export type LocalizedField<T> = {
  [K in keyof T as K extends `${infer Base}_fr` | `${infer Base}_en` | `${infer Base}_ar` 
    ? Base 
    : never]: string | null;
};

// Filter types for queries
export interface AccommodationFilters {
  type?: AccommodationType;
  price_range?: PriceRange;
  star_rating?: number;
  is_featured?: boolean;
  neighborhood?: string;
}

export interface ActivityFilters {
  category?: ActivityCategory;
  price_range?: PriceRange;
  is_featured?: boolean;
  min_age_max?: number;
}

export interface VenueFilters {
  category?: VenueCategory;
  price_range?: PriceRange;
  is_featured?: boolean;
  cuisine_types?: string[];
  has_terrace?: boolean;
  is_halal?: boolean;
  has_vegetarian_options?: boolean;
}

export interface EventFilters {
  category?: EventCategory;
  is_free?: boolean;
  is_featured?: boolean;
  start_date_from?: string;
  start_date_to?: string;
}

export interface VisitPackageFilters {
  type?: VisitType;
  is_featured?: boolean;
  min_participants_max?: number;
}

// =====================================================
// DATABASE TYPES EXPORT (for Supabase client)
// =====================================================

export interface Database {
  public: {
    Tables: {
      locations: {
        Row: Location;
        Insert: Omit<Location, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Location, 'id' | 'created_at' | 'updated_at'>>;
      };
      accommodations: {
        Row: Accommodation;
        Insert: AccommodationInsert;
        Update: AccommodationUpdate;
      };
      amenities: {
        Row: Amenity;
        Insert: Omit<Amenity, 'id'>;
        Update: Partial<Omit<Amenity, 'id'>>;
      };
      activities: {
        Row: Activity;
        Insert: ActivityInsert;
        Update: ActivityUpdate;
      };
      venues: {
        Row: Venue;
        Insert: VenueInsert;
        Update: VenueUpdate;
      };
      venue_hours: {
        Row: VenueHours;
        Insert: Omit<VenueHours, 'id'>;
        Update: Partial<Omit<VenueHours, 'id'>>;
      };
      events: {
        Row: Event;
        Insert: EventInsert;
        Update: EventUpdate;
      };
      visit_packages: {
        Row: VisitPackage;
        Insert: VisitPackageInsert;
        Update: VisitPackageUpdate;
      };
      images: {
        Row: Image;
        Insert: ImageInsert;
        Update: Partial<ImageInsert>;
      };
      reviews: {
        Row: Review;
        Insert: ReviewInsert;
        Update: Partial<ReviewInsert>;
      };
      bookings: {
        Row: Booking;
        Insert: BookingInsert;
        Update: BookingUpdate;
      };
      tags: {
        Row: Tag;
        Insert: Omit<Tag, 'id'>;
        Update: Partial<Omit<Tag, 'id'>>;
      };
    };
  };
}

