-- Verification Script: Check Places/Categories Setup
-- Run this to verify everything is configured correctly
-- This script is READ-ONLY - it doesn't modify anything

-- Step 1: Check venue_category enum values
-- Should show: restaurants, bars-nightlife, shopping, hebergement, sport-bien-etre
-- (centres-commerciaux and souks-artisanat may exist but are not used)
SELECT 
    typname as enum_name,
    array_agg(enumlabel ORDER BY enumsortorder) as enum_values
FROM pg_type t 
JOIN pg_enum e ON t.oid = e.enumtypid  
WHERE typname = 'venue_category'
GROUP BY typname;

-- Step 2: Check if place_category column exists
SELECT 
    column_name,
    data_type,
    udt_name as enum_type
FROM information_schema.columns
WHERE table_name = 'venues' 
  AND column_name = 'place_category';

-- Step 3: Check if index exists
SELECT 
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename = 'venues' 
  AND indexname = 'idx_venues_place_category';

-- Step 4: Show current data distribution by place_category
-- This shows how many venues are in each category
SELECT 
    place_category,
    COUNT(*) as count
FROM venues
GROUP BY place_category
ORDER BY count DESC;

-- Step 5: Show sample of category vs place_category
-- This helps verify the migration worked correctly
SELECT 
    category as json_category,
    place_category,
    COUNT(*) as count
FROM venues
GROUP BY category, place_category
ORDER BY place_category, count DESC
LIMIT 20;

-- Step 6: Check for any venues with NULL place_category (should be 0 after migration)
SELECT 
    COUNT(*) as venues_with_null_place_category
FROM venues
WHERE place_category IS NULL;

-- Step 7: Verify sport-bien-etre enum value exists
SELECT 
    CASE 
        WHEN EXISTS (
            SELECT 1 FROM pg_enum 
            WHERE enumlabel = 'sport-bien-etre' 
            AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'venue_category')
        ) THEN '✓ sport-bien-etre exists in enum'
        ELSE '✗ sport-bien-etre MISSING from enum - run add-sport-bien-etre-enum.sql'
    END as sport_bien_etre_status;

-- Summary: Expected Results
-- ✓ venue_category enum should include: restaurants, bars-nightlife, shopping, hebergement, sport-bien-etre
-- ✓ place_category column should exist with type venue_category
-- ✓ idx_venues_place_category index should exist
-- ✓ All venues should have a place_category set (NULL count should be 0)
-- ✓ sport-bien-etre should exist in the enum
