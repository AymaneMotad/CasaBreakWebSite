-- =====================================================
-- VERIFY EVENTS TABLE STRUCTURE
-- Run this to check if everything matches the navbar categories
-- =====================================================

-- 1. Check event_category enum values
SELECT 
    typname as enum_name,
    array_agg(enumlabel ORDER BY enumsortorder) as enum_values
FROM pg_type t 
JOIN pg_enum e ON t.oid = e.enumtypid  
WHERE typname = 'event_category'
GROUP BY typname;

-- 2. Check events table columns
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'events'
ORDER BY ordinal_position;

-- 3. Check if all required columns exist
SELECT 
    CASE 
        WHEN EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'events' AND column_name = 'category') 
        THEN '✓ category column exists'
        ELSE '✗ category column missing'
    END as category_check,
    CASE 
        WHEN EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'events' AND column_name = 'slug') 
        THEN '✓ slug column exists'
        ELSE '✗ slug column missing'
    END as slug_check,
    CASE 
        WHEN EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'events' AND column_name = 'name_fr') 
        THEN '✓ name_fr column exists'
        ELSE '✗ name_fr column missing'
    END as name_fr_check,
    CASE 
        WHEN EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'events' AND column_name = 'start_date') 
        THEN '✓ start_date column exists'
        ELSE '✗ start_date column missing'
    END as start_date_check,
    CASE 
        WHEN EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'events' AND column_name = 'is_published') 
        THEN '✓ is_published column exists'
        ELSE '✗ is_published column missing'
    END as is_published_check;
