-- Find existing storage buckets
-- Run this in Supabase SQL Editor to see what buckets you have

SELECT 
  name as bucket_name,
  public as is_public,
  file_size_limit,
  allowed_mime_types,
  created_at
FROM storage.buckets
ORDER BY created_at DESC;

