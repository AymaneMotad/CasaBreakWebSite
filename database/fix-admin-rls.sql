-- Fix RLS policies for admin access to venues table
-- Run this in Supabase SQL Editor

-- Drop ALL existing policies on venues table
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'venues' AND schemaname = 'public') LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.venues';
    END LOOP;
END $$;

-- Enable RLS
ALTER TABLE venues ENABLE ROW LEVEL SECURITY;

-- Policy 1: Authenticated users (admins) can do EVERYTHING
CREATE POLICY "authenticated_full_access" ON venues
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy 2: Anonymous users can only read published venues
CREATE POLICY "anon_read_published" ON venues
  FOR SELECT
  TO anon
  USING (is_published = true);

    -- Note: If you want to restrict admin access to specific users only,
    -- you can modify the policies to check admin_users table:
    -- USING (
    --   EXISTS (
    --     SELECT 1 FROM admin_users
    --     WHERE admin_users.id = auth.uid()
    --   )
    -- )

