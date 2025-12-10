-- Fix RLS Policies for activities table
-- Run this in Supabase SQL Editor
-- SAFE: This script checks existing state and only adds missing policies

-- Step 1: Check current RLS status
SELECT 
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public' AND tablename = 'activities';

-- Step 2: Check existing policies
SELECT 
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies
WHERE tablename = 'activities' AND schemaname = 'public';

-- Step 3: Enable RLS if not already enabled (safe - won't break if already enabled)
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop existing policies if they exist (to avoid conflicts)
-- Using IF EXISTS so it's safe if policies don't exist
DROP POLICY IF EXISTS "authenticated_full_access" ON activities;
DROP POLICY IF EXISTS "anon_read_published" ON activities;

-- Step 5: Create policies only if they don't exist
-- Authenticated users (admins) have full access
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'activities' 
        AND policyname = 'authenticated_full_access'
    ) THEN
        CREATE POLICY "authenticated_full_access" ON activities
          FOR ALL
          TO authenticated
          USING (true)
          WITH CHECK (true);
    END IF;
END $$;

-- Anonymous users can only read published activities
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'activities' 
        AND policyname = 'anon_read_published'
    ) THEN
        CREATE POLICY "anon_read_published" ON activities
          FOR SELECT
          TO anon
          USING (is_published = true);
    END IF;
END $$;

-- Step 6: Grant permissions (safe - won't break if already granted)
GRANT SELECT, INSERT, UPDATE, DELETE ON activities TO authenticated;
GRANT SELECT ON activities TO anon;

-- Step 7: Verify final state
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
WHERE tablename = 'activities' AND schemaname = 'public'
ORDER BY policyname;
