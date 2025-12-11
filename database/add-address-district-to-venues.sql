-- Add address and district columns to venues table
-- This matches the structure we added to activities table
-- SAFE: Uses IF NOT EXISTS, columns are nullable

-- Ensure data_jsonb column exists (should already exist, but check to be safe)
ALTER TABLE venues 
ADD COLUMN IF NOT EXISTS data_jsonb JSONB DEFAULT '{}'::jsonb;

-- Create index for data_jsonb if it doesn't exist
CREATE INDEX IF NOT EXISTS idx_venues_data_jsonb ON venues USING GIN (data_jsonb);

-- Add address column (if it doesn't exist)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'venues' AND column_name = 'address'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE venues ADD COLUMN address TEXT;
        RAISE NOTICE 'Added address column to venues table';
    ELSE
        RAISE NOTICE 'address column already exists in venues table - no changes made';
    END IF;
END $$;

-- Add district column (if it doesn't exist)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'venues' AND column_name = 'district'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE venues ADD COLUMN district VARCHAR(255);
        RAISE NOTICE 'Added district column to venues table';
    ELSE
        RAISE NOTICE 'district column already exists in venues table - no changes made';
    END IF;
END $$;

-- Migrate existing data from data_jsonb to direct columns (if they exist in data_jsonb)
UPDATE venues
SET 
    address = COALESCE(address, (data_jsonb->>'address')::TEXT),
    district = COALESCE(district, (data_jsonb->>'district')::TEXT)
WHERE data_jsonb IS NOT NULL 
  AND (
    (data_jsonb->>'address') IS NOT NULL OR 
    (data_jsonb->>'district') IS NOT NULL
  )
  AND (address IS NULL OR district IS NULL);

-- Verify the columns were added
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'venues' 
  AND column_name IN ('address', 'district')
  AND table_schema = 'public'
ORDER BY column_name;
