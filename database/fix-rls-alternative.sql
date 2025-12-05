-- Alternative Fix - Grant explicit permissions
-- Run this if the regular fix doesn't work

-- Grant SELECT permission to anon role
GRANT SELECT ON venues TO anon;
GRANT SELECT ON accommodations TO anon;
GRANT SELECT ON activities TO anon;
GRANT SELECT ON events TO anon;
GRANT SELECT ON visit_packages TO anon;
GRANT SELECT ON locations TO anon;
GRANT SELECT ON images TO anon;
GRANT SELECT ON reviews TO anon;

-- Ensure RLS is enabled
ALTER TABLE venues ENABLE ROW LEVEL SECURITY;
ALTER TABLE accommodations ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE visit_packages ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policies
DROP POLICY IF EXISTS "Public can view published venues" ON venues;
DROP POLICY IF EXISTS "Public can view published accommodations" ON accommodations;
DROP POLICY IF EXISTS "Public can view published activities" ON activities;
DROP POLICY IF EXISTS "Public can view published events" ON events;
DROP POLICY IF EXISTS "Public can view published visit packages" ON visit_packages;

CREATE POLICY "Public can view published venues"
  ON venues FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view published accommodations"
  ON accommodations FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view published activities"
  ON activities FOR SELECT
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

