-- Make casabreak bucket public and set up policies
-- Run this in Supabase SQL Editor

-- Step 1: Make the bucket public
UPDATE storage.buckets
SET public = true
WHERE name = 'casabreak';

-- Step 2: Verify it's now public
SELECT 
  name as bucket_name,
  public as is_public,
  file_size_limit
FROM storage.buckets
WHERE name = 'casabreak';

-- Step 3: Set up storage policies (drop existing ones first)
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete images" ON storage.objects;
DROP POLICY IF EXISTS "Public can read images" ON storage.objects;

-- Policy: Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images" ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'casabreak' AND
    (storage.foldername(name))[1] = 'restaurants'
  );

-- Policy: Allow authenticated users to update their uploaded images
CREATE POLICY "Authenticated users can update images" ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'casabreak' AND
    (storage.foldername(name))[1] = 'restaurants'
  );

-- Policy: Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete images" ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'casabreak' AND
    (storage.foldername(name))[1] = 'restaurants'
  );

-- Policy: Allow public to read images (CRITICAL for images to show on website)
CREATE POLICY "Public can read images" ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'casabreak');

-- Verify policies were created
SELECT 
  policyname,
  cmd as command
FROM pg_policies
WHERE schemaname = 'storage' 
  AND tablename = 'objects'
  AND policyname LIKE '%images%' OR policyname LIKE '%Public%'
ORDER BY policyname;

