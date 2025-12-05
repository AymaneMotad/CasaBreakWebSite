-- =====================================================
-- ADD SPORT & BIEN-ÊTRE CATEGORY
-- Run this if you need to add the sport-bien-etre category
-- =====================================================

-- Add new category to activity_category enum
ALTER TYPE activity_category ADD VALUE IF NOT EXISTS 'sport-bien-etre';

-- Verify the update
SELECT enumlabel 
FROM pg_enum 
WHERE enumtypid = 'activity_category'::regtype 
ORDER BY enumsortorder;

