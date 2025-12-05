-- =====================================================
-- CASABREAK DATABASE SCHEMA
-- Supabase PostgreSQL Database
-- =====================================================
-- 
-- Dynamic Content Tables:
-- 1. Accommodations (Hébergement)
-- 2. Activities (Activités)
-- 3. Restaurants & Venues (Manger & Sortir)
-- 4. Events (Événements)
-- 5. Visit Packages (Visiter)
-- 
-- Supporting Tables:
-- - Categories, Locations, Images, Reviews, Bookings
-- =====================================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis"; -- For location/geo features

-- =====================================================
-- ENUMS
-- =====================================================

-- Supported languages
CREATE TYPE language_code AS ENUM ('fr', 'en', 'ar');

-- Price ranges
CREATE TYPE price_range AS ENUM ('$', '$$', '$$$', '$$$$');

-- Accommodation types
CREATE TYPE accommodation_type AS ENUM (
  'hotel',
  'riad',
  'apartment',
  'villa',
  'hostel',
  'guesthouse',
  'resort'
);

-- Activity categories (matching navigation)
CREATE TYPE activity_category AS ENUM (
  'incontournables',      -- Must-see
  'plein-air-mer',        -- Outdoor & Sea
  'famille-enfants',      -- Family & Kids
  'shopping'              -- Shopping
);

-- Restaurant/Venue categories (matching navigation)
CREATE TYPE venue_category AS ENUM (
  'restaurants',          -- Cafés & Restaurants
  'bars-nightlife',       -- Bars & Nightlife
  'centres-commerciaux',  -- Shopping Malls
  'souks-artisanat'       -- Souks & Crafts
);

-- Event categories (matching navigation)
CREATE TYPE event_category AS ENUM (
  'concerts-spectacles',      -- Concerts & Shows
  'expositions-galeries',     -- Exhibitions & Galleries
  'festivals',                -- Festivals
  'evenements-sportifs',      -- Sports Events
  'foires-salons'             -- Fairs & Salons
);

-- Visit package types (matching navigation)
CREATE TYPE visit_type AS ENUM (
  'individuels',    -- Individuals
  'groupes',        -- Groups
  'etudiants',      -- Students
  'seniors',        -- Seniors
  'handicapes'      -- Disabled visitors
);

-- Booking status
CREATE TYPE booking_status AS ENUM (
  'pending',
  'confirmed',
  'cancelled',
  'completed'
);

-- =====================================================
-- LOCATIONS TABLE (Reusable location data)
-- =====================================================

CREATE TABLE locations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_fr VARCHAR(255) NOT NULL,
  name_en VARCHAR(255),
  name_ar VARCHAR(255),
  address_fr TEXT,
  address_en TEXT,
  address_ar TEXT,
  city VARCHAR(100) DEFAULT 'Casablanca',
  neighborhood VARCHAR(100),              -- quartier
  postal_code VARCHAR(20),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  google_maps_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- ACCOMMODATIONS TABLE (Hébergement)
-- =====================================================

CREATE TABLE accommodations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,      -- URL-friendly identifier
  
  -- Multilingual fields
  name_fr VARCHAR(255) NOT NULL,
  name_en VARCHAR(255),
  name_ar VARCHAR(255),
  description_fr TEXT,
  description_en TEXT,
  description_ar TEXT,
  
  -- Type and classification
  type accommodation_type NOT NULL,
  star_rating INTEGER CHECK (star_rating >= 1 AND star_rating <= 5),
  price_range price_range,
  price_from DECIMAL(10, 2),              -- Starting price per night
  currency VARCHAR(3) DEFAULT 'MAD',
  
  -- Location
  location_id UUID REFERENCES locations(id) ON DELETE SET NULL,
  
  -- Contact info
  phone VARCHAR(50),
  email VARCHAR(255),
  website TEXT,
  
  -- Booking
  booking_url TEXT,                        -- External booking link
  accepts_direct_booking BOOLEAN DEFAULT false,
  
  -- Media
  main_image TEXT,                         -- Main image URL
  
  -- Metadata
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  average_rating DECIMAL(2, 1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Accommodation amenities (many-to-many)
CREATE TABLE amenities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_fr VARCHAR(100) NOT NULL,
  name_en VARCHAR(100),
  name_ar VARCHAR(100),
  icon VARCHAR(50),                        -- Icon name/class
  category VARCHAR(50)                     -- e.g., 'room', 'facility', 'service'
);

CREATE TABLE accommodation_amenities (
  accommodation_id UUID REFERENCES accommodations(id) ON DELETE CASCADE,
  amenity_id UUID REFERENCES amenities(id) ON DELETE CASCADE,
  PRIMARY KEY (accommodation_id, amenity_id)
);

-- =====================================================
-- ACTIVITIES TABLE (Activités)
-- =====================================================

CREATE TABLE activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  
  -- Category (matches navigation)
  category activity_category NOT NULL,
  
  -- Multilingual fields
  name_fr VARCHAR(255) NOT NULL,
  name_en VARCHAR(255),
  name_ar VARCHAR(255),
  description_fr TEXT,
  description_en TEXT,
  description_ar TEXT,
  short_description_fr VARCHAR(500),
  short_description_en VARCHAR(500),
  short_description_ar VARCHAR(500),
  
  -- Practical info
  duration_minutes INTEGER,               -- Duration in minutes
  price_from DECIMAL(10, 2),
  price_to DECIMAL(10, 2),
  currency VARCHAR(3) DEFAULT 'MAD',
  price_range price_range,
  
  -- Location
  location_id UUID REFERENCES locations(id) ON DELETE SET NULL,
  
  -- Contact & Booking
  phone VARCHAR(50),
  email VARCHAR(255),
  website TEXT,
  booking_url TEXT,
  
  -- Schedule
  schedule_fr TEXT,                        -- Opening hours description
  schedule_en TEXT,
  schedule_ar TEXT,
  
  -- Media
  main_image TEXT,
  
  -- Metadata
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  average_rating DECIMAL(2, 1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  min_age INTEGER,                         -- Minimum age requirement
  max_group_size INTEGER,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- VENUES TABLE (Manger & Sortir - Restaurants, Bars, etc.)
-- =====================================================

CREATE TABLE venues (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  
  -- Category (matches navigation)
  category venue_category NOT NULL,
  
  -- Multilingual fields
  name_fr VARCHAR(255) NOT NULL,
  name_en VARCHAR(255),
  name_ar VARCHAR(255),
  description_fr TEXT,
  description_en TEXT,
  description_ar TEXT,
  short_description_fr VARCHAR(500),
  short_description_en VARCHAR(500),
  short_description_ar VARCHAR(500),
  
  -- Restaurant-specific
  cuisine_types TEXT[],                    -- Array of cuisine types
  specialties_fr TEXT,
  specialties_en TEXT,
  specialties_ar TEXT,
  
  -- Pricing
  price_range price_range,
  average_price DECIMAL(10, 2),            -- Average meal price
  currency VARCHAR(3) DEFAULT 'MAD',
  
  -- Location
  location_id UUID REFERENCES locations(id) ON DELETE SET NULL,
  
  -- Contact
  phone VARCHAR(50),
  email VARCHAR(255),
  website TEXT,
  instagram TEXT,
  facebook TEXT,
  
  -- Reservation
  reservation_url TEXT,
  accepts_reservations BOOLEAN DEFAULT false,
  
  -- Media
  main_image TEXT,
  
  -- Features
  has_terrace BOOLEAN DEFAULT false,
  has_wifi BOOLEAN DEFAULT false,
  has_parking BOOLEAN DEFAULT false,
  is_halal BOOLEAN DEFAULT false,
  has_vegetarian_options BOOLEAN DEFAULT false,
  has_vegan_options BOOLEAN DEFAULT false,
  has_delivery BOOLEAN DEFAULT false,
  has_takeout BOOLEAN DEFAULT false,
  
  -- Metadata
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  average_rating DECIMAL(2, 1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Venue opening hours
CREATE TABLE venue_hours (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  venue_id UUID REFERENCES venues(id) ON DELETE CASCADE,
  day_of_week INTEGER CHECK (day_of_week >= 0 AND day_of_week <= 6), -- 0=Sunday
  open_time TIME,
  close_time TIME,
  is_closed BOOLEAN DEFAULT false
);

-- =====================================================
-- EVENTS TABLE (Événements)
-- =====================================================

CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  
  -- Category (matches navigation)
  category event_category NOT NULL,
  
  -- Multilingual fields
  name_fr VARCHAR(255) NOT NULL,
  name_en VARCHAR(255),
  name_ar VARCHAR(255),
  description_fr TEXT,
  description_en TEXT,
  description_ar TEXT,
  short_description_fr VARCHAR(500),
  short_description_en VARCHAR(500),
  short_description_ar VARCHAR(500),
  
  -- Event dates
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE,
  is_recurring BOOLEAN DEFAULT false,
  recurrence_rule TEXT,                    -- iCal RRULE format
  
  -- Location
  location_id UUID REFERENCES locations(id) ON DELETE SET NULL,
  venue_name_fr VARCHAR(255),              -- Venue name if not in locations
  venue_name_en VARCHAR(255),
  venue_name_ar VARCHAR(255),
  
  -- Pricing
  is_free BOOLEAN DEFAULT false,
  price_from DECIMAL(10, 2),
  price_to DECIMAL(10, 2),
  currency VARCHAR(3) DEFAULT 'MAD',
  
  -- Contact & Tickets
  organizer_name VARCHAR(255),
  phone VARCHAR(50),
  email VARCHAR(255),
  website TEXT,
  ticket_url TEXT,
  
  -- Media
  main_image TEXT,
  
  -- Metadata
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  capacity INTEGER,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- VISIT PACKAGES TABLE (Visiter - Groups, Individuals, etc.)
-- =====================================================

CREATE TABLE visit_packages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  
  -- Type (matches navigation)
  type visit_type NOT NULL,
  
  -- Multilingual fields
  name_fr VARCHAR(255) NOT NULL,
  name_en VARCHAR(255),
  name_ar VARCHAR(255),
  description_fr TEXT,
  description_en TEXT,
  description_ar TEXT,
  short_description_fr VARCHAR(500),
  short_description_en VARCHAR(500),
  short_description_ar VARCHAR(500),
  
  -- What's included
  includes_fr TEXT[],                      -- Array of included items
  includes_en TEXT[],
  includes_ar TEXT[],
  
  -- Practical info
  duration_minutes INTEGER,
  min_participants INTEGER DEFAULT 1,
  max_participants INTEGER,
  
  -- Pricing
  price_per_person DECIMAL(10, 2),
  group_price DECIMAL(10, 2),              -- Fixed price for groups
  currency VARCHAR(3) DEFAULT 'MAD',
  
  -- Schedule
  available_days INTEGER[],                -- Array of available days (0-6)
  start_times TIME[],                      -- Array of start times
  
  -- Contact & Booking
  phone VARCHAR(50),
  email VARCHAR(255),
  booking_url TEXT,
  
  -- Media
  main_image TEXT,
  
  -- Metadata
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  requires_advance_booking BOOLEAN DEFAULT true,
  advance_booking_days INTEGER DEFAULT 1,  -- Days in advance required
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- IMAGES TABLE (Shared across all content types)
-- =====================================================

CREATE TABLE images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  url TEXT NOT NULL,
  alt_fr VARCHAR(255),
  alt_en VARCHAR(255),
  alt_ar VARCHAR(255),
  caption_fr TEXT,
  caption_en TEXT,
  caption_ar TEXT,
  width INTEGER,
  height INTEGER,
  file_size INTEGER,                       -- In bytes
  mime_type VARCHAR(50),
  
  -- Polymorphic relation
  entity_type VARCHAR(50) NOT NULL,        -- 'accommodation', 'activity', 'venue', 'event', 'visit_package'
  entity_id UUID NOT NULL,
  
  -- Ordering
  display_order INTEGER DEFAULT 0,
  is_main BOOLEAN DEFAULT false,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_images_entity ON images(entity_type, entity_id);

-- =====================================================
-- REVIEWS TABLE (Shared across content types)
-- =====================================================

CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Polymorphic relation
  entity_type VARCHAR(50) NOT NULL,        -- 'accommodation', 'activity', 'venue', 'event', 'visit_package'
  entity_id UUID NOT NULL,
  
  -- Review content
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255),
  content TEXT,
  language language_code DEFAULT 'fr',
  
  -- Reviewer info
  reviewer_name VARCHAR(100) NOT NULL,
  reviewer_email VARCHAR(255),
  
  -- Moderation
  is_approved BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_reviews_entity ON reviews(entity_type, entity_id);

-- =====================================================
-- BOOKINGS TABLE (For visit packages and direct bookings)
-- =====================================================

CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- What's being booked
  entity_type VARCHAR(50) NOT NULL,        -- 'accommodation', 'activity', 'visit_package'
  entity_id UUID NOT NULL,
  
  -- Customer info
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50),
  company_name VARCHAR(255),
  
  -- Booking details
  booking_date DATE NOT NULL,
  start_time TIME,
  end_date DATE,
  number_of_people INTEGER NOT NULL DEFAULT 1,
  
  -- Special requests
  special_requests TEXT,
  language language_code DEFAULT 'fr',
  
  -- Pricing
  total_price DECIMAL(10, 2),
  currency VARCHAR(3) DEFAULT 'MAD',
  
  -- Status
  status booking_status DEFAULT 'pending',
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_bookings_entity ON bookings(entity_type, entity_id);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_status ON bookings(status);

-- =====================================================
-- TAGS TABLE (Flexible tagging system)
-- =====================================================

CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  name_fr VARCHAR(100) NOT NULL,
  name_en VARCHAR(100),
  name_ar VARCHAR(100),
  category VARCHAR(50)                     -- e.g., 'cuisine', 'ambiance', 'feature'
);

-- Junction tables for tags
CREATE TABLE accommodation_tags (
  accommodation_id UUID REFERENCES accommodations(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (accommodation_id, tag_id)
);

CREATE TABLE activity_tags (
  activity_id UUID REFERENCES activities(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (activity_id, tag_id)
);

CREATE TABLE venue_tags (
  venue_id UUID REFERENCES venues(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (venue_id, tag_id)
);

CREATE TABLE event_tags (
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (event_id, tag_id)
);

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE accommodations ENABLE ROW LEVEL SECURITY;
ALTER TABLE amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE accommodation_amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE venues ENABLE ROW LEVEL SECURITY;
ALTER TABLE venue_hours ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE visit_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE images ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE accommodation_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE venue_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_tags ENABLE ROW LEVEL SECURITY;

-- Public read policies (for published content)
CREATE POLICY "Public can view published accommodations"
  ON accommodations FOR SELECT TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view published activities"
  ON activities FOR SELECT TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view published venues"
  ON venues FOR SELECT TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view published events"
  ON events FOR SELECT TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view published visit packages"
  ON visit_packages FOR SELECT TO anon, authenticated
  USING (is_published = true);

-- Public read for supporting tables
CREATE POLICY "Public can view locations"
  ON locations FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view amenities"
  ON amenities FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view tags"
  ON tags FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view images"
  ON images FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view approved reviews"
  ON reviews FOR SELECT TO anon, authenticated
  USING (is_approved = true);

CREATE POLICY "Public can view venue hours"
  ON venue_hours FOR SELECT TO anon, authenticated
  USING (true);

-- Junction tables policies
CREATE POLICY "Public can view accommodation_amenities"
  ON accommodation_amenities FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view accommodation_tags"
  ON accommodation_tags FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view activity_tags"
  ON activity_tags FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view venue_tags"
  ON venue_tags FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view event_tags"
  ON event_tags FOR SELECT TO anon, authenticated
  USING (true);

-- Public can submit reviews (pending approval)
CREATE POLICY "Public can submit reviews"
  ON reviews FOR INSERT TO anon, authenticated
  WITH CHECK (is_approved = false);

-- Public can create bookings
CREATE POLICY "Public can create bookings"
  ON bookings FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers
CREATE TRIGGER update_locations_updated_at
  BEFORE UPDATE ON locations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_accommodations_updated_at
  BEFORE UPDATE ON accommodations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_activities_updated_at
  BEFORE UPDATE ON activities
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_venues_updated_at
  BEFORE UPDATE ON venues
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_visit_packages_updated_at
  BEFORE UPDATE ON visit_packages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON reviews
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update review count and average rating
CREATE OR REPLACE FUNCTION update_entity_rating()
RETURNS TRIGGER AS $$
DECLARE
  avg_rating DECIMAL(2, 1);
  count_reviews INTEGER;
BEGIN
  -- Only process if the review is approved
  IF NEW.is_approved = true THEN
    -- Calculate new average and count
    SELECT AVG(rating)::DECIMAL(2,1), COUNT(*)
    INTO avg_rating, count_reviews
    FROM reviews
    WHERE entity_type = NEW.entity_type
      AND entity_id = NEW.entity_id
      AND is_approved = true;
    
    -- Update the appropriate table
    CASE NEW.entity_type
      WHEN 'accommodation' THEN
        UPDATE accommodations SET average_rating = avg_rating, review_count = count_reviews WHERE id = NEW.entity_id;
      WHEN 'activity' THEN
        UPDATE activities SET average_rating = avg_rating, review_count = count_reviews WHERE id = NEW.entity_id;
      WHEN 'venue' THEN
        UPDATE venues SET average_rating = avg_rating, review_count = count_reviews WHERE id = NEW.entity_id;
    END CASE;
  END IF;
  
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_rating_on_review
  AFTER INSERT OR UPDATE ON reviews
  FOR EACH ROW EXECUTE FUNCTION update_entity_rating();

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

-- Accommodations indexes
CREATE INDEX idx_accommodations_type ON accommodations(type);
CREATE INDEX idx_accommodations_price_range ON accommodations(price_range);
CREATE INDEX idx_accommodations_featured ON accommodations(is_featured) WHERE is_featured = true;
CREATE INDEX idx_accommodations_published ON accommodations(is_published) WHERE is_published = true;

-- Activities indexes
CREATE INDEX idx_activities_category ON activities(category);
CREATE INDEX idx_activities_featured ON activities(is_featured) WHERE is_featured = true;
CREATE INDEX idx_activities_published ON activities(is_published) WHERE is_published = true;

-- Venues indexes
CREATE INDEX idx_venues_category ON venues(category);
CREATE INDEX idx_venues_price_range ON venues(price_range);
CREATE INDEX idx_venues_featured ON venues(is_featured) WHERE is_featured = true;
CREATE INDEX idx_venues_published ON venues(is_published) WHERE is_published = true;

-- Events indexes
CREATE INDEX idx_events_category ON events(category);
CREATE INDEX idx_events_start_date ON events(start_date);
CREATE INDEX idx_events_featured ON events(is_featured) WHERE is_featured = true;
CREATE INDEX idx_events_published ON events(is_published) WHERE is_published = true;
-- Note: For upcoming events, filter in queries with WHERE start_date >= NOW()

-- Visit packages indexes
CREATE INDEX idx_visit_packages_type ON visit_packages(type);
CREATE INDEX idx_visit_packages_featured ON visit_packages(is_featured) WHERE is_featured = true;
CREATE INDEX idx_visit_packages_published ON visit_packages(is_published) WHERE is_published = true;

