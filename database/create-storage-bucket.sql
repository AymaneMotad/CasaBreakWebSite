-- Create Storage Bucket for Restaurant Images
-- Run this in Supabase SQL Editor

-- First, check what buckets exist
SELECT 
  name as bucket_name,
  public as is_public,
  file_size_limit,
  allowed_mime_types,
  created_at
FROM storage.buckets
ORDER BY created_at DESC;

-- Create the casabreak bucket if it doesn't exist
-- Note: You can also create this via Supabase Dashboard → Storage → New Bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'casabreak',
  'casabreak',
  true,  -- Public bucket
  52428800,  -- 50MB file size limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 52428800,
  allowed_mime_types = ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

-- Verify bucket was created
SELECT 
  name as bucket_name,
  public as is_public,
  file_size_limit,
  allowed_mime_types
FROM storage.buckets
WHERE name = 'casabreak';

