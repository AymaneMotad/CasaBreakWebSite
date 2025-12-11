-- =====================================================
-- COMPREHENSIVE INSPECTION QUERY FOR LIEUX (PLACES)
-- Run this in Supabase SQL Editor to understand the structure
-- =====================================================

-- 1. Check all columns in venues table (with data types and nullability)
SELECT 
    column_name,
    data_type,
    udt_name as type_name,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'venues' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Check all columns in activities table (with data types and nullability)
SELECT 
    column_name,
    data_type,
    udt_name as type_name,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'activities' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- 3. Check for UUID columns specifically (these are the problematic ones)
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
  AND (table_name = 'venues' OR table_name = 'activities')
  AND data_type = 'uuid'
ORDER BY table_name, column_name;

-- 4. Get a sample of existing venues to see what data looks like
SELECT 
    id,
    slug,
    category,
    place_category,
    name_fr,
    location_id,
    address,
    district,
    phone,
    main_image,
    is_published,
    created_at
FROM venues
ORDER BY created_at DESC
LIMIT 5;

-- 5. Get a sample of existing activities to see what data looks like
SELECT 
    id,
    slug,
    category,
    place_category,
    name_fr,
    location_id,
    address,
    district,
    phone,
    main_image,
    is_published,
    created_at
FROM activities
ORDER BY created_at DESC
LIMIT 5;

-- 6. Check what place_category values are being used
SELECT 
    'venues' as table_name,
    place_category,
    COUNT(*) as count
FROM venues
GROUP BY place_category
UNION ALL
SELECT 
    'activities' as table_name,
    place_category,
    COUNT(*) as count
FROM activities
GROUP BY place_category
ORDER BY table_name, place_category;

-- 7. Check for any records with problematic location_id values
SELECT * FROM (
    SELECT 
        'venues' as table_name,
        id,
        name_fr,
        location_id,
        CASE 
            WHEN location_id IS NULL THEN 'NULL'
            ELSE 'VALID UUID'
        END as location_id_status
    FROM venues
    LIMIT 10
) venues_sample
UNION ALL
SELECT * FROM (
    SELECT 
        'activities' as table_name,
        id,
        name_fr,
        location_id,
        CASE 
            WHEN location_id IS NULL THEN 'NULL'
            ELSE 'VALID UUID'
        END as location_id_status
    FROM activities
    LIMIT 10
) activities_sample;

-- 8. Check if data_jsonb column exists and see sample data
SELECT 
    id,
    name_fr,
    data_jsonb,
    jsonb_typeof(data_jsonb) as jsonb_type
FROM venues
WHERE data_jsonb IS NOT NULL
LIMIT 3;

-- 9. Check constraints on location_id
SELECT
    tc.table_name,
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name,
    tc.constraint_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
    AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND (tc.table_name = 'venues' OR tc.table_name = 'activities')
    AND kcu.column_name = 'location_id';
