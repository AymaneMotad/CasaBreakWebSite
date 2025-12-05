# Scraping Guide for CasaBreak Website

This guide documents the complete process of scraping accommodation data from [visitcasablanca.ma](https://visitcasablanca.ma) and inserting it into Supabase.

## Table of Contents

1. [Understanding Supabase Schema](#understanding-supabase-schema)
2. [Scraping Process](#scraping-process)
3. [Data Mapping](#data-mapping)
4. [Image URL Handling](#image-url-handling)
5. [Creating SQL Seed Files](#creating-sql-seed-files)
6. [Running in Supabase](#running-in-supabase)

---

## Understanding Supabase Schema

### Database Structure

The accommodations are stored in the `accommodations` table with the following structure:

```sql
CREATE TABLE accommodations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  
  -- Multilingual fields
  name_fr VARCHAR(255) NOT NULL,
  name_en VARCHAR(255),
  name_ar VARCHAR(255),
  description_fr TEXT,
  description_en TEXT,
  description_ar TEXT,
  
  -- Type and classification
  type accommodation_type NOT NULL,  -- 'hotel', 'apartment', 'guesthouse', etc.
  star_rating INTEGER CHECK (star_rating >= 1 AND star_rating <= 5),
  price_range price_range,  -- '$', '$$', '$$$', '$$$$'
  
  -- Contact info
  phone VARCHAR(50),
  email VARCHAR(255),
  website TEXT,
  
  -- Media
  main_image TEXT,  -- S3 URL
  
  -- Metadata
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Key Fields to Extract

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `slug` | string | ✅ | URL-friendly identifier (e.g., "domo-hotel") |
| `name_fr` | string | ✅ | French name |
| `name_en` | string | ❌ | English name (can be same as FR) |
| `description_fr` | text | ❌ | French description |
| `description_en` | text | ❌ | English description |
| `type` | enum | ✅ | hotel, apartment, guesthouse, etc. |
| `star_rating` | integer | ❌ | 1-5 stars |
| `price_range` | enum | ❌ | $, $$, $$$, $$$$ |
| `phone` | string | ❌ | Contact phone |
| `email` | string | ❌ | Contact email |
| `website` | string | ❌ | Hotel website URL |
| `main_image` | string | ❌ | S3 image URL |
| `is_featured` | boolean | ❌ | Featured hotels (default: false) |
| `is_published` | boolean | ❌ | Published status (default: true) |

---

## Scraping Process

### Source Website

**URL**: `https://visitcasablanca.ma/hebergements/?cities%5B%5D=89`

This is the official tourism website for Casablanca accommodations.

### What to Scrape

1. **Hotel Listings Page**: Extract all accommodation cards
2. **Individual Hotel Pages**: Get detailed information
3. **Image URLs**: Capture current S3 image paths from network requests

### Scraping Strategy

#### Method 1: Browser Network Inspection (Recommended for Images)

1. Open browser DevTools (F12)
2. Navigate to: `https://visitcasablanca.ma/hebergements/?cities%5B%5D=89`
3. Go to **Network** tab
4. Filter by **Images** or **XHR**
5. Look for requests to `crtasablanca.s3.eu-west-1.amazonaws.com`
6. Extract image URLs from network requests

**Example Network Request:**
```
https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/DOMO-HOTEL.jpg
```

#### Method 2: HTML Parsing

1. Parse the listings page HTML
2. Extract hotel cards with:
   - Name (French)
   - Slug (from URL or generate from name)
   - Type (from category badge)
   - Star rating (if visible)
   - Image URL (from `<img>` src attribute)

#### Method 3: API Endpoints (if available)

Check if the website has API endpoints:
- Look for XHR/Fetch requests in Network tab
- Check for JSON responses
- Extract structured data directly

---

## Data Mapping

### Mapping Scraped Data to Database Schema

```javascript
// Example mapping function
function mapScrapedToDatabase(scrapedData) {
  return {
    slug: generateSlug(scrapedData.name),  // "DOMO HOTEL" → "domo-hotel"
    name_fr: scrapedData.name,
    name_en: scrapedData.name,  // Can be same as FR if no EN available
    description_fr: scrapedData.description,
    description_en: translateToEnglish(scrapedData.description),  // Optional
    type: mapType(scrapedData.category),  // "Hôtel" → "hotel"
    star_rating: extractStarRating(scrapedData.badge),
    price_range: extractPriceRange(scrapedData.price),
    phone: scrapedData.phone,
    email: scrapedData.email,
    website: scrapedData.website,
    main_image: scrapedData.imageUrl,  // Current S3 URL
    is_featured: scrapedData.isFeatured || false,
    is_published: true
  };
}
```

### Type Mapping

| Scraped Category | Database Type |
|------------------|---------------|
| "Hôtel" | `hotel` |
| "Résidence Hôtelière" | `apartment` |
| "Résidence Touristique" | `apartment` |
| "Maison d'hôtes" | `guesthouse` |
| "Auberge" | `hostel` |
| "Gîte" | `guesthouse` |

### Slug Generation

```javascript
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')  // Replace non-alphanumeric with dash
    .replace(/^-+|-+$/g, '');     // Remove leading/trailing dashes
}

// Examples:
// "DOMO HOTEL" → "domo-hotel"
// "LE PALACE D'ANFA" → "le-palace-d-anfa"
// "CASABLANCA LE LIDO THALASSO & SPA" → "casablanca-le-lido-thalasso-spa"
```

---

## Image URL Handling

### The Problem

**Old URLs (from 2022 scraping):**
```
https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094252/hero_poi_le-zenith-hotel-spa.jpg
```

**Current URLs (2024/2025):**
```
https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250711085636/LE-ZENITH-HOTEL-SPA-2.jpg
```

### Why URLs Change

1. **S3 bucket reorganization**: Files are reorganized with new timestamps
2. **File re-uploads**: Images are re-uploaded with new names
3. **Path structure changes**: Directory structure may change

### Solution: Always Scrape Current URLs

**Method 1: Network Requests (Most Reliable)**

1. Open browser DevTools → Network tab
2. Navigate to listings page
3. Filter by `crtasablanca.s3.eu-west-1.amazonaws.com`
4. Extract image URLs from successful requests (status 200)
5. Match images to hotels by:
   - Filename patterns (e.g., "DOMO-HOTEL.jpg" → "domo-hotel")
   - Order in network requests (matches page order)
   - Image dimensions/alt text

**Method 2: HTML Parsing**

```javascript
// Extract from img src attributes
const images = document.querySelectorAll('.hotel-card img');
images.forEach(img => {
  const src = img.src;
  const alt = img.alt;  // May contain hotel name
  // Match to hotel by alt text or position
});
```

**Method 3: API Response**

If the website uses an API, check the JSON response for image URLs.

### Image URL Pattern

Current S3 URLs follow this pattern:
```
https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/YYYYMMDDHHMMSS/FILENAME.jpg
```

Where:
- `YYYYMMDDHHMMSS` = Upload timestamp (e.g., 20250711085636)
- `FILENAME` = Hotel name in uppercase with dashes (e.g., DOMO-HOTEL.jpg)

---

## Creating SQL Seed Files

### Step 1: Collect Scraped Data

Create a JSON file with all scraped accommodations:

```json
[
  {
    "slug": "domo-hotel",
    "name_fr": "DOMO HOTEL",
    "name_en": "DOMO HOTEL",
    "description_fr": "Hôtel confortable...",
    "description_en": "Comfortable hotel...",
    "type": "hotel",
    "star_rating": 3,
    "price_range": "$",
    "phone": "+212 5222-00000",
    "email": "info@domohotel.ma",
    "website": "https://domohotel.ma/",
    "main_image": "https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/DOMO-HOTEL.jpg",
    "is_featured": false,
    "is_published": true
  }
]
```

### Step 2: Generate SQL INSERT Statements

**Template:**

```sql
INSERT INTO accommodations (
  slug,
  name_fr,
  name_en,
  description_fr,
  description_en,
  type,
  star_rating,
  price_range,
  phone,
  email,
  website,
  main_image,
  is_featured,
  is_published
) VALUES
(
  'slug-value',
  'French Name',
  'English Name',
  'French description...',
  'English description...',
  'hotel',
  3,
  '$',
  '+212 5222-00000',
  'email@example.com',
  'https://website.com',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/.../IMAGE.jpg',
  false,
  true
),
-- More hotels...
```

### Step 3: Handle Special Characters

**Single Quotes in Names:**

```sql
-- Wrong: 'LE PALACE D'ANFA'
-- Right: 'LE PALACE D''ANFA'  (double the quote)

-- In SQL, escape single quotes by doubling them:
'LE PALACE D''ANFA'
```

**NULL Values:**

```sql
-- If website is null:
website = NULL  -- Not 'NULL' as string
```

### Step 4: Add ON CONFLICT Clause

To handle duplicates (upsert):

```sql
INSERT INTO accommodations (...) VALUES (...)
ON CONFLICT (slug) DO UPDATE SET
  name_fr = EXCLUDED.name_fr,
  name_en = EXCLUDED.name_en,
  description_fr = EXCLUDED.description_fr,
  description_en = EXCLUDED.description_en,
  type = EXCLUDED.type,
  star_rating = EXCLUDED.star_rating,
  price_range = EXCLUDED.price_range,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  main_image = EXCLUDED.main_image,
  is_featured = EXCLUDED.is_featured,
  is_published = EXCLUDED.is_published,
  updated_at = NOW();
```

### Step 5: Create Update Script for Images

If you need to update images separately:

```sql
UPDATE accommodations SET main_image = CASE slug
  WHEN 'domo-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/.../DOMO-HOTEL.jpg'
  WHEN 'royal-mansour-casablanca' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/.../ROYAL-MANSOUR.jpg'
  -- etc...
  ELSE main_image
END
WHERE slug IN ('domo-hotel', 'royal-mansour-casablanca', ...);
```

---

## Running in Supabase

### Step 1: Access SQL Editor

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click **SQL Editor** in the left sidebar
4. Click **New Query**

### Step 2: Run Schema First (if needed)

If the table doesn't exist, run `schema.sql` first:

```sql
-- Copy contents of database/schema.sql
-- Run it to create tables
```

### Step 3: Run Seed File

1. Copy the entire contents of your `.sql` seed file
2. Paste into SQL Editor
3. Click **Run** (or press Cmd/Ctrl + Enter)
4. Check for errors in the output

### Step 4: Verify Data

```sql
-- Count total accommodations
SELECT COUNT(*) FROM accommodations;

-- Check featured hotels
SELECT name_fr, type, star_rating, is_featured 
FROM accommodations 
WHERE is_featured = true;

-- Verify images are set
SELECT slug, name_fr, main_image 
FROM accommodations 
WHERE main_image IS NOT NULL;
```

### Step 5: Test in Application

1. Navigate to `/fr/planifier/hebergement` in your app
2. Verify accommodations are displayed
3. Check that images load correctly
4. Verify all fields are populated

---

## Common Issues & Solutions

### Issue 1: Images Not Loading

**Problem**: Images show placeholder or broken

**Solution**:
- Verify image URLs are current (check network requests)
- Ensure URLs are publicly accessible
- Check Next.js image config allows the domain:
  ```js
  // next.config.mjs
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'crtasablanca.s3.eu-west-1.amazonaws.com',
      pathname: '/**',
    }],
  }
  ```

### Issue 2: SQL Syntax Errors

**Problem**: Single quotes in names break SQL

**Solution**: Double all single quotes:
```sql
-- 'LE PALACE D'ANFA' → 'LE PALACE D''ANFA'
```

### Issue 3: Duplicate Slugs

**Problem**: `ERROR: duplicate key value violates unique constraint`

**Solution**: Use `ON CONFLICT` clause for upsert:
```sql
ON CONFLICT (slug) DO UPDATE SET ...
```

### Issue 4: Type Mismatch

**Problem**: Invalid accommodation type

**Solution**: Check enum values:
```sql
-- Valid types: 'hotel', 'riad', 'apartment', 'villa', 'hostel', 'guesthouse', 'resort'
```

### Issue 5: RLS (Row Level Security) Blocking

**Problem**: Can't insert/update data

**Solution**: 
- Use Service Role Key for scripts (bypasses RLS)
- Or run SQL directly in Supabase Dashboard (bypasses RLS)
- Or update RLS policies to allow inserts

---

## Best Practices

1. **Always scrape current image URLs** - Don't reuse old URLs
2. **Validate data before inserting** - Check for required fields
3. **Use transactions** - Wrap inserts in BEGIN/COMMIT for rollback
4. **Test with small batches** - Insert 5-10 records first
5. **Keep backups** - Export existing data before bulk updates
6. **Document changes** - Note what was updated and when
7. **Handle errors gracefully** - Use ON CONFLICT for upserts

---

## Example Complete Workflow

1. **Scrape** data from visitcasablanca.ma
2. **Extract** image URLs from network requests
3. **Map** scraped data to database schema
4. **Generate** SQL INSERT statements
5. **Test** SQL in Supabase (small batch)
6. **Run** full seed file
7. **Verify** data in database
8. **Test** in application
9. **Update** images if needed (separate UPDATE script)

---

## Files Created

- `database/seed-accommodations.sql` - Initial insert script
- `database/update-images.sql` - Image URL update script
- `database/accommodations.json` - Scraped data in JSON format

---

## Scraping Other Content Types

### Restaurants & Cafés

**Source URL**: `https://visitcasablanca.ma/pois/?cities%5B%5D=89&thematiques%5B%5D=83`

**Database Table**: `venues`  
**Category**: `restaurants`

**Fields to Extract**:
- Name (French)
- Description
- Cuisine types (array)
- Price range
- Phone, email, website
- Image URL (from network requests)
- Features: is_halal, has_terrace, has_vegetarian_options, etc.

**SQL Template**:
```sql
INSERT INTO venues (
  slug,
  category,
  name_fr,
  description_fr,
  cuisine_types,
  price_range,
  phone,
  email,
  website,
  main_image,
  is_featured,
  is_published
) VALUES (...);
```

### Bars & Nightlife

**Source URL**: `https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=21`

**Database Table**: `venues`  
**Category**: `bars-nightlife`

Same structure as restaurants, but category = 'bars-nightlife'

### Shopping

**Source URL**: `https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=20`

**Database Table**: `activities`  
**Category**: `shopping`

**Fields to Extract**:
- Name (French)
- Description
- Duration (if applicable)
- Price range
- Phone, email, website
- Image URL
- Schedule (opening hours)

**SQL Template**:
```sql
INSERT INTO activities (
  slug,
  category,
  name_fr,
  description_fr,
  price_range,
  phone,
  email,
  website,
  main_image,
  is_featured,
  is_published
) VALUES (...);
```

### Sport & Bien-être

**Source URL**: `https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=48`

**Database Table**: `activities`  
**Category**: `sport-bien-etre` (may need to add to enum)

**Note**: You may need to update the `activity_category` enum to include 'sport-bien-etre':

```sql
ALTER TYPE activity_category ADD VALUE IF NOT EXISTS 'sport-bien-etre';
```

Same structure as shopping activities.

---

## References

- [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql)
- [Source Website - Accommodations](https://visitcasablanca.ma/hebergements/?cities%5B%5D=89)
- [Source Website - Restaurants](https://visitcasablanca.ma/pois/?cities%5B%5D=89&thematiques%5B%5D=83)
- [Source Website - Bars](https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=21)
- [Source Website - Shopping](https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=20)
- [Source Website - Sport](https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=48)
- [S3 Image Bucket](https://crtasablanca.s3.eu-west-1.amazonaws.com)

---

**Last Updated**: December 2024
**Maintained By**: CasaBreak Development Team

