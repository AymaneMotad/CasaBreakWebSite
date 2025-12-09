-- Setup Storage Bucket and Policies for casabreak bucket
-- Run this in Supabase SQL Editor

-- Note: Using existing "casabreak" bucket
-- Make sure the bucket exists and is set to Public in Supabase Dashboard

-- Drop existing policies if they exist
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

-- Policy: Allow public to read images (if bucket is public)
CREATE POLICY "Public can read images" ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'casabreak');

