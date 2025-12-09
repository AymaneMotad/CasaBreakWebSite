-- Verify Storage Bucket Configuration
-- Run this in Supabase SQL Editor

-- Check if bucket exists and is public
SELECT 
  name as bucket_name,
  public as is_public,
  file_size_limit,
  allowed_mime_types
FROM storage.buckets
WHERE name = 'casabreak';

-- Check storage policies for casabreak bucket
SELECT 
  policyname,
  cmd as command,
  qual as using_expression,
  with_check as with_check_expression
FROM pg_policies
WHERE schemaname = 'storage' 
  AND tablename = 'objects'
  AND policyname LIKE '%casabreak%' OR policyname LIKE '%Public%' OR policyname LIKE '%read%';

-- Check if the specific file exists
SELECT 
  name as file_path,
  bucket_id,
  created_at,
  updated_at,
  metadata
FROM storage.objects
WHERE bucket_id = 'casabreak'
  AND name LIKE '%1765298902380-svdpdwqqh5d%'
LIMIT 5;

