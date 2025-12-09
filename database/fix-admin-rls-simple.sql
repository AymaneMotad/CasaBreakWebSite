-- Simple RLS fix for admin access
-- Run this in Supabase SQL Editor

-- Drop ALL existing policies
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'venues' AND schemaname = 'public') LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.venues';
    END LOOP;
END $$;

-- Ensure RLS is enabled
ALTER TABLE venues ENABLE ROW LEVEL SECURITY;

-- Policy: Authenticated users (admins) can do everything
CREATE POLICY "authenticated_full_access" ON venues
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Anonymous users can only read published venues
CREATE POLICY "anon_read_published" ON venues
  FOR SELECT
  TO anon
  USING (is_published = true);

