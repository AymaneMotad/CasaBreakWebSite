-- Check for triggers, computed columns, or defaults that might affect location_id
-- Run this in Supabase SQL Editor

-- 1. Check for triggers on venues table
SELECT 
    trigger_name,
    event_manipulation,
    event_object_table,
    action_statement
FROM information_schema.triggers
WHERE event_object_table = 'venues'
ORDER BY trigger_name;

-- 2. Check for triggers on activities table
SELECT 
    trigger_name,
    event_manipulation,
    event_object_table,
    action_statement
FROM information_schema.triggers
WHERE event_object_table = 'activities'
ORDER BY trigger_name;

-- 3. Check for default values on location_id
SELECT 
    table_name,
    column_name,
    column_default,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE (table_name = 'venues' OR table_name = 'activities')
  AND column_name = 'location_id'
ORDER BY table_name;

-- 4. Check for any generated/computed columns
SELECT 
    table_name,
    column_name,
    is_generated,
    generation_expression
FROM information_schema.columns
WHERE (table_name = 'venues' OR table_name = 'activities')
  AND is_generated = 'ALWAYS'
ORDER BY table_name, column_name;

-- 5. Try a simple test insert to see what happens
-- This will help us understand if the issue is with the data or the database
-- DO NOT RUN THIS IF YOU DON'T WANT TEST DATA
-- INSERT INTO venues (slug, category, name_fr, location_id) 
-- VALUES ('test-insert', 'restaurants', 'Test Restaurant', NULL)
-- RETURNING id, slug, name_fr, location_id;
