-- Fix Migration: Migrate existing category values to place_category
-- Run this AFTER migrate-places-categories.sql if category column contains venue_category enum values
-- This will properly migrate existing data based on their current category values

-- Step 1: Check what values exist in category column
SELECT 
    category,
    COUNT(*) as count
FROM venues
GROUP BY category
ORDER BY count DESC;

-- Step 2: Migrate category values to place_category
-- Only update if place_category is NULL or if category is a valid venue_category enum value
UPDATE venues
SET place_category = CASE
    -- If category is a valid venue_category enum value, use it
    -- Note: centres-commerciaux and souks-artisanat exist in enum but are not used
    WHEN category IN ('restaurants', 'bars-nightlife', 'shopping', 'hebergement', 'sport-bien-etre') 
    THEN category::venue_category
    -- Otherwise, default to restaurants
    ELSE 'restaurants'::venue_category
END
WHERE place_category IS NULL 
   OR (category IN ('restaurants', 'bars-nightlife', 'shopping', 'hebergement', 'sport-bien-etre') 
       AND place_category = 'restaurants');

-- Step 3: Verify the migration
-- Show count by place_category (should now show proper distribution)
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
