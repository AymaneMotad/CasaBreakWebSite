-- Fix Chez Thang image: sync data_jsonb.photo_url with main_image
-- Run this in Supabase SQL Editor

UPDATE venues
SET data_jsonb = jsonb_set(
  COALESCE(data_jsonb, '{}'::jsonb),
  '{photo_url}',
  to_jsonb(main_image)
)
WHERE slug = 'chez_thang'
  AND main_image IS NOT NULL
  AND main_image != '';

-- Verify the update
SELECT 
  id,
  slug,
  name_fr,
  main_image,
  data_jsonb->>'photo_url' as jsonb_photo_url,
  CASE 
    WHEN main_image = data_jsonb->>'photo_url' THEN '✅ Synced'
    ELSE '❌ Mismatch'
  END as status
FROM venues
WHERE slug = 'chez_thang';

