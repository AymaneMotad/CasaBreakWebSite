-- =====================================================
-- CREATE EVENTS TABLE AND ENUM (if not exists)
-- Run this in Supabase SQL Editor
-- =====================================================

-- First, create the event_category enum if it doesn't exist
-- Using only the categories from the navbar dropdown
DO $$ 
BEGIN
    -- Check if enum exists, if not create it
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'event_category') THEN
        CREATE TYPE event_category AS ENUM (
            'concerts-spectacles',      -- Concerts & Shows
            'expositions-galeries',     -- Exhibitions & Galleries
            'festivals',                -- Festivals
            'evenements-sportifs',      -- Sports Events
            'foires-salons'             -- Fairs & Salons
        );
    END IF;
END $$;

-- Create events table if it doesn't exist
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  
  -- Category (matches navigation dropdown)
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

-- Create index on category for faster queries
CREATE INDEX IF NOT EXISTS idx_events_category ON events(category);
CREATE INDEX IF NOT EXISTS idx_events_slug ON events(slug);
CREATE INDEX IF NOT EXISTS idx_events_start_date ON events(start_date);
CREATE INDEX IF NOT EXISTS idx_events_published ON events(is_published) WHERE is_published = true;

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at if it doesn't exist
DROP TRIGGER IF EXISTS update_events_updated_at ON events;
CREATE TRIGGER update_events_updated_at
    BEFORE UPDATE ON events
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions (adjust as needed for your RLS policies)
-- ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Optional: Create a policy for public read access (adjust based on your needs)
-- CREATE POLICY "Events are viewable by everyone" ON events
--     FOR SELECT USING (is_published = true);
