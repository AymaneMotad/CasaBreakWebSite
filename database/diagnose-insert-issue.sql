-- Comprehensive diagnostic query to understand the database structure
-- Run this in Supabase SQL Editor

-- 1. Get ALL columns for venues table with their types and defaults
SELECT 
    column_name,
    data_type,
    udt_name,
    is_nullable,
    column_default,
    character_maximum_length
FROM information_schema.columns
WHERE table_name = 'venues' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Get ALL columns for activities table
SELECT 
    column_name,
    data_type,
    udt_name,
    is_nullable,
    column_default,
    character_maximum_length
FROM information_schema.columns
WHERE table_name = 'activities' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- 3. Check for ANY triggers on venues INSERT
SELECT 
    trigger_name,
    event_manipulation,
    action_timing,
    action_statement,
    action_orientation
FROM information_schema.triggers
WHERE event_object_table = 'venues'
  AND event_manipulation = 'INSERT';

-- 4. Check for ANY triggers on activities INSERT
SELECT 
    trigger_name,
    event_manipulation,
    action_timing,
    action_statement,
    action_orientation
FROM information_schema.triggers
WHERE event_object_table = 'activities'
  AND event_manipulation = 'INSERT';

-- 5. Check for RLS policies that might affect inserts
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename IN ('venues', 'activities')
  AND cmd = 'INSERT';

-- 6. Try a MINIMAL test insert to see what the actual error is
-- This will help us identify which field is causing the problem
-- Uncomment to test:
/*
INSERT INTO venues (
    slug,
    category,
    name_fr,
    location_id
) VALUES (
    'test-minimal-' || extract(epoch from now()),
    'restaurants',
    'Test Minimal Insert',
    NULL
) RETURNING id, slug, name_fr, location_id;
*/
