-- Migrate Venues to Places with Categories
-- Run this in Supabase SQL Editor
-- This keeps existing data intact and adds support for place categories

-- Step 1: Check current venue_category enum values
SELECT 
    typname as enum_name,
    array_agg(enumlabel ORDER BY enumsortorder) as enum_values
FROM pg_type t 
JOIN pg_enum e ON t.oid = e.enumtypid  
WHERE typname = 'venue_category'
GROUP BY typname;

-- Step 2: Add 'shopping', 'hebergement', and 'sport-bien-etre' to venue_category enum if they don't exist
-- Note: PostgreSQL doesn't support IF NOT EXISTS for enum values, so we check first
DO $$ 
BEGIN
    -- Add 'shopping' if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'shopping' 
        AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'venue_category')
    ) THEN
        ALTER TYPE venue_category ADD VALUE 'shopping';
    END IF;
    
    -- Add 'hebergement' if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'hebergement' 
        AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'venue_category')
    ) THEN
        ALTER TYPE venue_category ADD VALUE 'hebergement';
    END IF;
    
    -- Add 'sport-bien-etre' if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'sport-bien-etre' 
        AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'venue_category')
    ) THEN
        ALTER TYPE venue_category ADD VALUE 'sport-bien-etre';
    END IF;
END $$;

-- Step 3: Verify all categories exist
-- Expected: restaurants, bars-nightlife, shopping, hebergement, sport-bien-etre
-- Note: centres-commerciaux and souks-artisanat exist in enum but are not used
SELECT 
    typname as enum_name,
    array_agg(enumlabel ORDER BY enumsortorder) as enum_values
FROM pg_type t 
JOIN pg_enum e ON t.oid = e.enumtypid  
WHERE typname = 'venue_category'
GROUP BY typname;

-- Step 4: Add place_category column (venue_category enum - determines which page)
-- This determines WHERE the place appears (restaurants, bars-nightlife, shopping, hebergement)
ALTER TABLE venues 
ADD COLUMN IF NOT EXISTS place_category venue_category;

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_venues_place_category ON venues(place_category);

-- Step 5: Set place_category for existing venues
-- Check if category column contains venue_category enum values or JSON categories
-- If category contains valid venue_category enum values, migrate them to place_category
-- Otherwise, default to 'restaurants'
UPDATE venues
SET place_category = CASE
    -- If category is a valid venue_category enum value, use it
    -- Note: centres-commerciaux and souks-artisanat exist in enum but are not used
    WHEN category IN ('restaurants', 'bars-nightlife', 'shopping', 'hebergement', 'sport-bien-etre') 
    THEN category::venue_category
    -- Otherwise, default to restaurants (for JSON categories like 'francais', 'asiatique', etc.)
    ELSE 'restaurants'::venue_category
END
WHERE place_category IS NULL;

-- Step 6: Verify the migration
-- Show count by place_category (should show restaurants for existing data)
SELECT 
    place_category,
    COUNT(*) as count
FROM venues
GROUP BY place_category
ORDER BY count DESC;

-- Show sample of category (JSON category) vs place_category
SELECT 
    category as json_category,
    place_category,
    COUNT(*) as count
FROM venues
GROUP BY category, place_category
ORDER BY place_category, count DESC
LIMIT 20;
