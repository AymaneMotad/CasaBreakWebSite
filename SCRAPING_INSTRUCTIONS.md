# Scraping Accommodations from visitcasablanca.ma

This guide explains how to scrape accommodation data from https://visitcasablanca.ma/hebergements/?cities%5B%5D=89 and insert it into your Supabase database.

## Overview

The scraping process involves:
1. Extracting accommodation links from the listing page
2. Visiting each detail page to extract full information
3. Transforming the data to match your Supabase schema
4. Inserting into the database via API

## Method 1: Using Browser Console (Recommended)

### Step 1: Extract All Accommodation Links

1. Navigate to: https://visitcasablanca.ma/hebergements/?cities%5B%5D=89
2. Open browser console (F12)
3. Copy and paste the script from `scripts/extract-accommodations.js`
4. Run it - it will extract all links and copy JSON to clipboard
5. Save the JSON to a file (e.g., `accommodations-links.json`)

### Step 2: Extract Details for Each Accommodation

For each accommodation URL:

1. Navigate to the detail page (e.g., https://visitcasablanca.ma/hebergements/le-zenith-hotel-spa/)
2. Open browser console
3. Copy and paste the script from `scripts/scrape-accommodation-detail.js`
4. Run it - it will extract details and copy JSON to clipboard
5. Collect all the JSON objects into an array

### Step 3: Insert into Database

Once you have all the accommodation data:

```bash
# Option A: Use the API route
curl -X POST http://localhost:3000/api/scrape-hebergements \
  -H "Content-Type: application/json" \
  -d @accommodations-data.json

# Option B: Use the Node.js script
node scripts/scrape-hebergements.mjs < accommodations-data.json
```

## Method 2: Automated Script (Future Enhancement)

You can create a Puppeteer script to automate the entire process:

```javascript
import puppeteer from 'puppeteer';

async function scrapeAllAccommodations() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to listing page
  await page.goto('https://visitcasablanca.ma/hebergements/?cities%5B%5D=89');
  
  // Extract all links
  const links = await page.evaluate(() => {
    // Use extractAccommodationLinks() function
  });
  
  // Visit each detail page and extract data
  const accommodations = [];
  for (const link of links) {
    await page.goto(link.url);
    const data = await page.evaluate(() => {
      // Use extractAccommodationDetail() function
    });
    accommodations.push(data);
  }
  
  // Insert into database via API
  await fetch('http://localhost:3000/api/scrape-hebergements', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ accommodations })
  });
  
  await browser.close();
}
```

## Data Structure

Each accommodation object should have:

```json
{
  "name": "LE ZENITH HOTEL & SPA",
  "category": "Hôtel",
  "description": "Description text...",
  "address": "Route El Jadida Angle 1077 Lissasfa-Casablanca",
  "phone": "+212 5228-94949",
  "email": "reservation@lezenithhotel.com",
  "website": "http://lezenithhotel.com/",
  "images": [
    "https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094252/hero_poi_le-zenith-hotel-spa.jpg"
  ],
  "starRating": 4
}
```

## API Endpoint

The API endpoint `/api/scrape-hebergements` accepts:

```json
{
  "accommodations": [
    {
      "name": "...",
      "category": "...",
      "description": "...",
      "address": "...",
      "phone": "...",
      "email": "...",
      "website": "...",
      "images": ["..."],
      "starRating": 4
    }
  ]
}
```

It will:
- Transform data to match Supabase schema
- Insert or update accommodations
- Insert images into the images table
- Return success/error status for each

## Viewing Results

After scraping, visit `/planifier/hebergement` to see all accommodations fetched from the database.

## Notes

- The script handles duplicate accommodations (updates existing ones)
- Images are stored in the `images` table with proper relationships
- All accommodations are set to `is_published: true` by default
- Featured accommodations can be marked manually in Supabase dashboard



