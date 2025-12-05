-- Fix RLS Policies - Run this in Supabase SQL Editor
-- This ensures anonymous users can read published content

-- First, make sure RLS is enabled
ALTER TABLE accommodations ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE venues ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE visit_packages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can view published accommodations" ON accommodations;
DROP POLICY IF EXISTS "Public can view published activities" ON activities;
DROP POLICY IF EXISTS "Public can view published venues" ON venues;
DROP POLICY IF EXISTS "Public can view published events" ON events;
DROP POLICY IF EXISTS "Public can view published visit packages" ON visit_packages;

-- Recreate policies with explicit role assignment
CREATE POLICY "Public can view published accommodations"
  ON accommodations FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view published activities"
  ON activities FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view published venues"
  ON venues FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view published events"
  ON events FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view published visit packages"
  ON visit_packages FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Also ensure supporting tables are accessible
CREATE POLICY IF NOT EXISTS "Public can view locations"
  ON locations FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY IF NOT EXISTS "Public can view images"
  ON images FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY IF NOT EXISTS "Public can view approved reviews"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (is_approved = true);
