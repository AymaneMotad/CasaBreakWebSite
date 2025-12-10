-- Add 'sport-bien-etre' to venue_category enum
-- This script ONLY adds the enum value - it does NOT modify any existing data or structure
-- Safe to run multiple times (idempotent)

-- Step 1: Check if 'sport-bien-etre' already exists in the enum
SELECT 
    CASE 
        WHEN EXISTS (
            SELECT 1 FROM pg_enum 
            WHERE enumlabel = 'sport-bien-etre' 
            AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'venue_category')
        ) THEN 'sport-bien-etre already exists in venue_category enum'
        ELSE 'sport-bien-etre does NOT exist - will be added'
    END as status;

-- Step 2: Add 'sport-bien-etre' to venue_category enum if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'sport-bien-etre' 
        AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'venue_category')
    ) THEN
        ALTER TYPE venue_category ADD VALUE 'sport-bien-etre';
        RAISE NOTICE 'Added sport-bien-etre to venue_category enum';
    ELSE
        RAISE NOTICE 'sport-bien-etre already exists in venue_category enum - no changes made';
    END IF;
END $$;

-- Step 3: Verify the enum value was added
SELECT 
    typname as enum_name,
    array_agg(enumlabel ORDER BY enumsortorder) as enum_values
FROM pg_type t 
JOIN pg_enum e ON t.oid = e.enumtypid  
WHERE typname = 'venue_category'
GROUP BY typname;

-- Note: This script does NOT:
-- - Modify any existing data
-- - Change any table structure
-- - Update any place_category values
-- - Affect any existing venues
-- It ONLY adds the new enum value so you can use it when creating new places
