-- Create admin user for CasaBreak Events
-- Run this in Supabase SQL Editor after setting up auth

-- First, create the user via Supabase Auth Dashboard or use this SQL:
-- Note: You need to create the user via Supabase Auth UI first, then run this to set metadata

-- After creating user via Auth Dashboard, update their metadata:
-- UPDATE auth.users 
-- SET raw_user_meta_data = jsonb_build_object('role', 'admin', 'name', 'CasaBreak Admin')
-- WHERE email = 'casaBreakEvents@casabreak.ma';

-- Or create user programmatically (requires service role):
-- This will be done via the setup script

-- Create admin_users table to track admin users
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Policy: Only admins can read admin_users
CREATE POLICY "Admins can read admin_users" ON admin_users
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
    )
  );

-- Policy: Service role can manage admin_users
CREATE POLICY "Service role can manage admin_users" ON admin_users
  FOR ALL
  USING (auth.role() = 'service_role');

