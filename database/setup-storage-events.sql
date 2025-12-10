-- Setup Storage Bucket Policies for Events Images
-- Run this in Supabase SQL Editor
-- This adds events folder to the existing storage policies

-- Drop existing policies that only allow restaurants
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete images" ON storage.objects;

-- Policy: Allow authenticated users to upload images (both restaurants and events)
CREATE POLICY "Authenticated users can upload images" ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'casabreak' AND
    (
      (storage.foldername(name))[1] = 'restaurants' OR
      (storage.foldername(name))[1] = 'events'
    )
  );

-- Policy: Allow authenticated users to update their uploaded images
CREATE POLICY "Authenticated users can update images" ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'casabreak' AND
    (
      (storage.foldername(name))[1] = 'restaurants' OR
      (storage.foldername(name))[1] = 'events'
    )
  );

-- Policy: Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete images" ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'casabreak' AND
    (
      (storage.foldername(name))[1] = 'restaurants' OR
      (storage.foldername(name))[1] = 'events'
    )
  );

-- Policy: Allow public to read images (drop first if exists, then create)
DROP POLICY IF EXISTS "Public can read images" ON storage.objects;
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
