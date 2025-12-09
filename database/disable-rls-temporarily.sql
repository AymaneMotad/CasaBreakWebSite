-- TEMPORARY: Disable RLS to test if that's the issue
-- Run this ONLY for testing, then re-enable with proper policies

-- Disable RLS temporarily
ALTER TABLE venues DISABLE ROW LEVEL SECURITY;

-- After testing, re-enable with:
-- ALTER TABLE venues ENABLE ROW LEVEL SECURITY;
-- Then run fix-admin-rls.sql

