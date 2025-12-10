-- Fix RLS policies for events table
-- Run this in Supabase SQL Editor
-- This allows authenticated users (admins) full access and anonymous users to read published events

-- Drop ALL existing policies on events table
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'events' AND schemaname = 'public') LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.events';
    END LOOP;
END $$;

-- Ensure RLS is enabled
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Policy 1: Authenticated users (admins) can do EVERYTHING
CREATE POLICY "authenticated_full_access" ON events
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy 2: Anonymous users can only read published events
CREATE POLICY "anon_read_published" ON events
  FOR SELECT
  TO anon
  USING (is_published = true);

-- Grant necessary permissions
GRANT SELECT, INSERT, UPDATE, DELETE ON events TO authenticated;
GRANT SELECT ON events TO anon;
