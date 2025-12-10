-- Unify Activities Table Structure with Venues
-- This adds missing columns to activities table to match venues structure
-- SAFE: Preserves all existing data

-- Step 1: Check current activities table structure
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'activities' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- Step 2: Add missing columns to activities table
-- NOTE: activities table already has 'category' column (activity_category enum)
-- We'll add 'place_category' (venue_category enum) and keep both for now

-- Add place_category column (venue_category enum - determines which page)
ALTER TABLE activities 
ADD COLUMN IF NOT EXISTS place_category venue_category;

-- Add cuisine_types column (array of strings)
ALTER TABLE activities 
ADD COLUMN IF NOT EXISTS cuisine_types TEXT[];

-- Add data_jsonb column (JSONB for flexible data storage)
ALTER TABLE activities 
ADD COLUMN IF NOT EXISTS data_jsonb JSONB DEFAULT '{}'::jsonb;

-- Add address column (if it doesn't exist - check first)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'activities' AND column_name = 'address'
    ) THEN
        ALTER TABLE activities ADD COLUMN address TEXT;
    END IF;
END $$;

-- Add district column (if it doesn't exist - check first)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'activities' AND column_name = 'district'
    ) THEN
        ALTER TABLE activities ADD COLUMN district VARCHAR(255);
    END IF;
END $$;

-- Step 3: Migrate existing data
-- Map existing category (activity_category enum) to place_category (venue_category enum)
-- Only update if place_category is NULL to avoid overwriting
-- This maps ALL valid place_category values: restaurants, bars-nightlife, shopping, hebergement, sport-bien-etre
UPDATE activities
SET place_category = CASE
    -- Map activity_category values to venue_category values where they match
    -- Cast to text first, then to venue_category enum
    WHEN category::text = 'sport-bien-etre' THEN 'sport-bien-etre'::venue_category
    WHEN category::text = 'shopping' THEN 'shopping'::venue_category
    -- If activity has a category that matches venue_category enum, use it (cast via text)
    WHEN category::text = 'restaurants' THEN 'restaurants'::venue_category
    WHEN category::text = 'bars-nightlife' THEN 'bars-nightlife'::venue_category
    WHEN category::text = 'hebergement' THEN 'hebergement'::venue_category
    -- For other activity_category values (incontournables, plein-air-mer, famille-enfants), 
    -- default to sport-bien-etre (most common for activities)
    ELSE 'sport-bien-etre'::venue_category
END
WHERE place_category IS NULL;

-- Migrate existing phone, address, district to data_jsonb if they exist
-- Only update if data_jsonb is empty/null to preserve any existing data
UPDATE activities
SET data_jsonb = COALESCE(data_jsonb, '{}'::jsonb) || jsonb_build_object(
  'phone', COALESCE(phone, (data_jsonb->>'phone')),
  'address', COALESCE(address, (data_jsonb->>'address')),
  'district', COALESCE(district, (data_jsonb->>'district')),
  'photo_url', COALESCE(main_image, (data_jsonb->>'photo_url')),
  'name', COALESCE(name_fr, (data_jsonb->>'name')),
  'description', COALESCE(description_fr, (data_jsonb->>'description')),
  'rating', COALESCE(average_rating::text, (data_jsonb->>'rating'))
)::jsonb
WHERE data_jsonb IS NULL OR data_jsonb = '{}'::jsonb OR jsonb_typeof(data_jsonb) = 'null';

-- Step 4: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_activities_place_category ON activities(place_category);
-- Note: activities already has index on category column (activity_category enum)
CREATE INDEX IF NOT EXISTS idx_activities_data_jsonb ON activities USING GIN(data_jsonb);

-- Step 5: Verify the migration
SELECT 
    COUNT(*) as total_activities,
    COUNT(place_category) as with_place_category,
    COUNT(category) as with_category,
    COUNT(data_jsonb) as with_data_jsonb
FROM activities;

-- Show distribution by place_category (should show all 5 categories)
SELECT 
    place_category,
    COUNT(*) as count
FROM activities
GROUP BY place_category
ORDER BY count DESC;

-- Show sample of migrated data
SELECT 
    id,
    name_fr,
    category as activity_category_enum,
    place_category,
    phone,
    address,
    district,
    data_jsonb->>'phone' as jsonb_phone,
    data_jsonb->>'address' as jsonb_address,
    data_jsonb->>'district' as jsonb_district
FROM activities
ORDER BY place_category, name_fr
LIMIT 10;
