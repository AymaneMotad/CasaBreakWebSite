# Scraping Setup Complete ✅

All pages have been created with the same structure as accommodations. Here's what's been done:

## ✅ Completed Pages

### 1. Restaurants & Cafés
- ✅ **Listing Page**: `/manger-sortir/restaurants/page.tsx`
  - Shows title, description, "Lire la suite" button
  - Breadcrumbs included
  - Matches accommodation structure
  
- ✅ **Detail Page**: `/manger-sortir/restaurants/[slug]/page.tsx`
  - Full details with contact info
  - Breadcrumbs included

**Source URL**: `https://visitcasablanca.ma/pois/?cities%5B%5D=89&thematiques%5B%5D=83`  
**Database Table**: `venues`  
**Category**: `restaurants`

---

### 2. Bars & Nightlife
- ✅ **Listing Page**: `/manger-sortir/bars-nightlife/page.tsx`
  - Shows title, description, "Lire la suite" button
  - Breadcrumbs included
  
- ✅ **Detail Page**: `/manger-sortir/bars-nightlife/[slug]/page.tsx`
  - Full details with contact info
  - Breadcrumbs included

**Source URL**: `https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=21`  
**Database Table**: `venues`  
**Category**: `bars-nightlife`

---

### 3. Shopping
- ✅ **Listing Page**: `/activites/shopping/page.tsx`
  - Shows title, description, "Lire la suite" button
  - Breadcrumbs included
  
- ✅ **Detail Page**: `/activites/shopping/[slug]/page.tsx`
  - Full details with contact info
  - Breadcrumbs included

**Source URL**: `https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=20`  
**Database Table**: `activities`  
**Category**: `shopping`

---

### 4. Sport & Bien-être
- ✅ **Listing Page**: `/activites/sport-bien-etre/page.tsx`
  - Shows title, description, "Lire la suite" button
  - Breadcrumbs included
  
- ✅ **Detail Page**: `/activites/sport-bien-etre/[slug]/page.tsx`
  - Full details with contact info
  - Breadcrumbs included

**Source URL**: `https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=48`  
**Database Table**: `activities`  
**Category**: `sport-bien-etre` (may need enum update)

---

## 📋 Next Steps: Scraping Data

### Step 1: Update Database Schema (if needed)

If you need the `sport-bien-etre` category, run:
```sql
-- Run in Supabase SQL Editor
ALTER TYPE activity_category ADD VALUE IF NOT EXISTS 'sport-bien-etre';
```

### Step 2: Scrape Data from URLs

For each URL, follow the same process as accommodations:

1. **Navigate to the URL** in browser
2. **Open DevTools → Network tab**
3. **Filter by images** or check XHR requests
4. **Extract**:
   - Names (French)
   - Descriptions
   - Image URLs (from network requests - current S3 URLs)
   - Contact info (phone, email, website)
   - Other relevant fields

### Step 3: Create SQL Seed Files

Create seed files similar to `seed-accommodations.sql`:

- `database/seed-restaurants.sql` - For venues with category 'restaurants'
- `database/seed-bars-nightlife.sql` - For venues with category 'bars-nightlife'
- `database/seed-shopping.sql` - For activities with category 'shopping'
- `database/seed-sport-bien-etre.sql` - For activities with category 'sport-bien-etre'

### Step 4: Run SQL Files in Supabase

1. Go to Supabase Dashboard → SQL Editor
2. Copy and paste each SQL file
3. Run to insert data

---

## 📁 Files Created

### Pages
- `app/[locale]/manger-sortir/restaurants/page.tsx` ✅
- `app/[locale]/manger-sortir/restaurants/[slug]/page.tsx` ✅
- `app/[locale]/manger-sortir/bars-nightlife/page.tsx` ✅
- `app/[locale]/manger-sortir/bars-nightlife/[slug]/page.tsx` ✅
- `app/[locale]/activites/shopping/page.tsx` ✅
- `app/[locale]/activites/shopping/[slug]/page.tsx` ✅
- `app/[locale]/activites/sport-bien-etre/page.tsx` ✅
- `app/[locale]/activites/sport-bien-etre/[slug]/page.tsx` ✅

### Database
- `database/add-sport-bien-etre-category.sql` ✅

### Documentation
- `SCRAPING_GUIDE.md` (updated with new categories) ✅

---

## 🎨 Design Consistency

All pages now follow the same structure:

**Listing Pages**:
- Breadcrumbs
- Hero section with title
- Grid of cards showing:
  - Image (with fallback icon)
  - Title
  - Description (truncated to 3 lines)
  - "Lire la suite" button

**Detail Pages**:
- Breadcrumbs
- Hero image
- Full title
- Complete description
- Contact information section
- Back button

---

## 🔄 Data Structure

### Venues (Restaurants & Bars)
```typescript
{
  slug: string
  category: 'restaurants' | 'bars-nightlife'
  name_fr: string
  description_fr: string
  cuisine_types?: string[]
  price_range?: '$' | '$$' | '$$$' | '$$$$'
  phone?: string
  email?: string
  website?: string
  main_image?: string
  is_featured: boolean
  is_published: boolean
}
```

### Activities (Shopping & Sport)
```typescript
{
  slug: string
  category: 'shopping' | 'sport-bien-etre'
  name_fr: string
  description_fr: string
  price_range?: '$' | '$$' | '$$$' | '$$$$'
  phone?: string
  email?: string
  website?: string
  main_image?: string
  is_featured: boolean
  is_published: boolean
}
```

---

## 📝 Notes

1. **Image URLs**: Always scrape current URLs from network requests (2024/2025 dates)
2. **Slugs**: Generate from names (lowercase, replace spaces with dashes)
3. **Categories**: Match exactly with database enum values
4. **Breadcrumbs**: Use translation keys from `navigation` namespace

---

**Status**: ✅ All pages created and ready for data  
**Next**: Scrape data and create SQL seed files

