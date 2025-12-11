-- Check for triggers, functions, or computed columns that might be setting UUID fields
-- Run this in Supabase SQL Editor

-- 1. Check ALL triggers on venues table (all events)
SELECT 
    trigger_name,
    event_manipulation,
    action_timing,
    action_statement
FROM information_schema.triggers
WHERE event_object_table = 'venues'
ORDER BY trigger_name;

-- 2. Check ALL triggers on activities table
SELECT 
    trigger_name,
    event_manipulation,
    action_timing,
    action_statement
FROM information_schema.triggers
WHERE event_object_table = 'activities'
ORDER BY trigger_name;

-- 3. Check for functions that might be called by triggers
SELECT 
    routine_name,
    routine_type,
    routine_definition
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND (routine_definition LIKE '%location_id%' OR routine_definition LIKE '%uuid%')
ORDER BY routine_name;

-- 4. Check for any computed/generated columns
SELECT 
    table_name,
    column_name,
    is_generated,
    generation_expression
FROM information_schema.columns
WHERE table_schema = 'public'
  AND (table_name = 'venues' OR table_name = 'activities')
  AND is_generated = 'ALWAYS'
ORDER BY table_name, column_name;

-- 5. Check for any default values that might reference other columns
SELECT 
    table_name,
    column_name,
    column_default
FROM information_schema.columns
WHERE table_schema = 'public'
  AND (table_name = 'venues' OR table_name = 'activities')
  AND column_default IS NOT NULL
  AND (column_default LIKE '%location%' OR column_default LIKE '%uuid%')
ORDER BY table_name, column_name;
