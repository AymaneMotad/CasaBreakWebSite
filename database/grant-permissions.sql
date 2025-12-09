-- Grant permissions to authenticated role for venues table
-- Run this in Supabase SQL Editor

-- Grant SELECT, INSERT, UPDATE, DELETE permissions to authenticated role
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE venues TO authenticated;

-- Also grant usage on the sequence (if using serial IDs)
-- GRANT USAGE ON SEQUENCE venues_id_seq TO authenticated;

-- Verify permissions (optional - just to check)
SELECT 
    grantee, 
    privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name = 'venues' 
AND grantee = 'authenticated';

