# Migration Script Explanation: Unify Activities Structure

## What This Script Does

This migration script adds missing columns to the `activities` table to match the `venues` table structure, allowing both tables to use the same unified format.

## Current Situation

**Activities table currently has:**
- `category` (activity_category enum) - e.g., 'sport-bien-etre', 'shopping'
- `phone` (VARCHAR) - directly in table
- `address` - may or may not exist
- `district` - may or may not exist
- NO `place_category` column
- NO `cuisine_types` column  
- NO `data_jsonb` column

**Venues table has:**
- `place_category` (venue_category enum) - determines which page
- `category` (VARCHAR) - JSON category (francais, asiatique, etc.)
- `cuisine_types` (TEXT[])
- `data_jsonb` (JSONB) - stores phone, address, district, etc.
- `address` (TEXT)
- `district` (VARCHAR)

## What The Migration Does (Step by Step)

### Step 1: Check Current Structure
- Shows what columns currently exist in activities table
- **SAFE**: Read-only, doesn't change anything

### Step 2: Add Missing Columns
- Adds `place_category` (venue_category enum) - **NEW COLUMN**
- Adds `cuisine_types` (TEXT[]) - **NEW COLUMN**
- Adds `data_jsonb` (JSONB) - **NEW COLUMN** (defaults to empty JSON `{}`)
- Adds `address` (TEXT) - **NEW COLUMN** (only if doesn't exist)
- Adds `district` (VARCHAR) - **NEW COLUMN** (only if doesn't exist)
- **SAFE**: Uses `IF NOT EXISTS` - won't fail if columns already exist
- **SAFE**: All new columns are nullable - won't break existing data

### Step 3: Migrate Existing Data
- Maps existing `category` enum values to new `place_category` column
  - `sport-bien-etre` → `place_category = 'sport-bien-etre'`
  - `shopping` → `place_category = 'shopping'`
  - `restaurants` → `place_category = 'restaurants'` (if exists)
  - `bars-nightlife` → `place_category = 'bars-nightlife'` (if exists)
  - `hebergement` → `place_category = 'hebergement'` (if exists)
  - Other activity_category values → defaults to `'sport-bien-etre'`
- **SAFE**: Only updates rows where `place_category IS NULL` - won't overwrite existing data
- Copies existing `phone`, `address`, `district` values to `data_jsonb` for consistency
- **SAFE**: Uses `COALESCE` - preserves existing `data_jsonb` data if it exists

### Step 4: Create Indexes
- Creates indexes for better query performance
- **SAFE**: Uses `IF NOT EXISTS` - won't fail if indexes already exist

### Step 5: Verification
- Shows counts and sample data to verify migration worked
- **SAFE**: Read-only queries

## Safety Features

✅ **No Data Loss**: All existing data is preserved
✅ **Non-Destructive**: Only adds columns, doesn't remove or modify existing ones
✅ **Idempotent**: Can be run multiple times safely (uses IF NOT EXISTS)
✅ **Backward Compatible**: Existing code will continue to work
✅ **Conditional Updates**: Only updates NULL values, won't overwrite existing data

## What Won't Break

- ✅ Existing activities data - all preserved
- ✅ Existing queries - will continue to work
- ✅ Frontend pages - will continue to work
- ✅ Admin dashboard - will continue to work
- ✅ Other tables - not affected at all

## After Migration

**Activities table will have:**
- ✅ `place_category` (venue_category enum) - determines which page
- ✅ `category` (activity_category enum) - kept as-is for backward compatibility
- ✅ `cuisine_types` (TEXT[]) - for filtering
- ✅ `data_jsonb` (JSONB) - unified data storage
- ✅ `address` (TEXT) - direct column
- ✅ `district` (VARCHAR) - direct column
- ✅ `phone` (VARCHAR) - kept as-is (also in data_jsonb for consistency)

**Result:**
- Activities and Venues now have the same structure
- You can edit activities with phone, district, address, etc.
- Insert/update works the same for both tables
- All existing data is preserved

## Important Notes

1. **Activities table keeps its existing `category` enum column** - this is fine, it's like a legacy field. The new `place_category` is what determines which page.

2. **JSON categories** (francais, asiatique, etc.) are stored in `data_jsonb.category` for activities, not a separate column (since activities already has a `category` enum column).

3. **Phone, address, district** exist in both:
   - Direct columns (for easy access)
   - `data_jsonb` (for consistency with venues)

This dual storage ensures backward compatibility while enabling the unified format.
