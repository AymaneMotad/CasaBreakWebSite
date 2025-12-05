# CasaBreak Database Schema

This document describes the Supabase PostgreSQL database schema for the CasaBreak website.

## Overview

The database is designed to support dynamic content for the CasaBreak tourism website for Casablanca. It supports multilingual content (French, English, Arabic) and includes proper indexing, Row Level Security (RLS), and triggers for automatic updates.

## Content Types

### Static Content (Not in Database)
These sections use hardcoded content in the codebase:
- **Home page**
- **CAN 2025**
- **Découvrir Casablanca** (Monuments, Quartiers, Mer & Plages, Itinéraires)
- **Planifier votre séjour** (Se déplacer, Aéroport → Centre-ville, Infos pratiques)

### Dynamic Content (Database-driven)
These sections pull content from Supabase:

| Section | Table | Category Enum |
|---------|-------|---------------|
| Hébergement | `accommodations` | `accommodation_type` |
| Activités → Incontournables | `activities` | `incontournables` |
| Activités → Plein air & Mer | `activities` | `plein-air-mer` |
| Activités → Famille & Enfants | `activities` | `famille-enfants` |
| Activités → Shopping | `activities` | `shopping` |
| Manger & Sortir → Restaurants | `venues` | `restaurants` |
| Manger & Sortir → Bars & Nightlife | `venues` | `bars-nightlife` |
| Manger & Sortir → Centres Commerciaux | `venues` | `centres-commerciaux` |
| Manger & Sortir → Souks & Artisanat | `venues` | `souks-artisanat` |
| Événements → Concerts & Spectacles | `events` | `concerts-spectacles` |
| Événements → Expositions & Galeries | `events` | `expositions-galeries` |
| Événements → Festivals | `events` | `festivals` |
| Événements → Événements Sportifs | `events` | `evenements-sportifs` |
| Événements → Foires & Salons | `events` | `foires-salons` |
| Visiter → Individuels | `visit_packages` | `individuels` |
| Visiter → Groupes | `visit_packages` | `groupes` |

## Database Diagram

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   locations     │     │    amenities    │     │      tags       │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ id              │     │ id              │     │ id              │
│ name_fr/en/ar   │     │ name_fr/en/ar   │     │ slug            │
│ address_fr/en/ar│     │ icon            │     │ name_fr/en/ar   │
│ city            │     │ category        │     │ category        │
│ neighborhood    │     └─────────────────┘     └─────────────────┘
│ lat/lng         │            │                        │
└────────┬────────┘            │                        │
         │                     │                        │
         │    ┌────────────────┴────────────────┐      │
         │    │                                 │      │
         ▼    ▼                                 ▼      ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ accommodations  │     │   activities    │     │     venues      │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ id, slug        │     │ id, slug        │     │ id, slug        │
│ name_fr/en/ar   │     │ category        │     │ category        │
│ description_*   │     │ name_fr/en/ar   │     │ name_fr/en/ar   │
│ type            │     │ description_*   │     │ description_*   │
│ star_rating     │     │ duration        │     │ cuisine_types   │
│ price_range     │     │ price_from/to   │     │ price_range     │
│ location_id ────┼─────│ location_id ────┼─────│ location_id ────┼───►
│ main_image      │     │ main_image      │     │ main_image      │
│ is_featured     │     │ is_featured     │     │ is_featured     │
│ average_rating  │     │ average_rating  │     │ average_rating  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                      │                       │
         │                      │                       │
         ▼                      ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│     events      │     │ visit_packages  │     │   venue_hours   │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ id, slug        │     │ id, slug        │     │ venue_id        │
│ category        │     │ type            │     │ day_of_week     │
│ name_fr/en/ar   │     │ name_fr/en/ar   │     │ open_time       │
│ description_*   │     │ description_*   │     │ close_time      │
│ start_date      │     │ includes_*      │     │ is_closed       │
│ end_date        │     │ duration        │     └─────────────────┘
│ is_free         │     │ price_per_person│
│ price_from/to   │     │ group_price     │
│ location_id     │     │ available_days  │
│ main_image      │     │ start_times     │
└─────────────────┘     └─────────────────┘

         ┌──────────────────────────────────────────┐
         │         Shared/Polymorphic Tables        │
         ├──────────────────────────────────────────┤
         │                                          │
         │  ┌─────────────┐     ┌─────────────┐    │
         │  │   images    │     │   reviews   │    │
         │  ├─────────────┤     ├─────────────┤    │
         │  │ entity_type │     │ entity_type │    │
         │  │ entity_id   │     │ entity_id   │    │
         │  │ url         │     │ rating      │    │
         │  │ alt_fr/en/ar│     │ title       │    │
         │  │ display_order│    │ content     │    │
         │  └─────────────┘     │ reviewer_name│   │
         │                      │ is_approved │    │
         │  ┌─────────────┐     └─────────────┘    │
         │  │  bookings   │                        │
         │  ├─────────────┤                        │
         │  │ entity_type │                        │
         │  │ entity_id   │                        │
         │  │ customer_*  │                        │
         │  │ booking_date│                        │
         │  │ status      │                        │
         │  └─────────────┘                        │
         └──────────────────────────────────────────┘
```

## Setup Instructions

### 1. Run the Schema SQL

Go to your Supabase Dashboard → SQL Editor → New Query

Copy and paste the contents of `schema.sql` and run it.

### 2. Configure Environment Variables

Make sure your `.env.local` has the correct values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://yzgvfaxalzubsmmqmswx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Seed Sample Data (Optional)

Run `seed.sql` to populate the database with sample data for testing.

## Multilingual Support

All content tables support three languages:
- **French (fr)** - Primary language (required)
- **English (en)** - Optional
- **Arabic (ar)** - Optional

Field naming convention:
```
name_fr, name_en, name_ar
description_fr, description_en, description_ar
```

## API Usage Examples

### Fetch Accommodations

```typescript
import { createClient } from '@/utils/supabase/client'

const supabase = createClient()

// Get all published hotels
const { data: hotels } = await supabase
  .from('accommodations')
  .select(`
    *,
    location:locations(*),
    amenities:accommodation_amenities(
      amenity:amenities(*)
    ),
    images(*)
  `)
  .eq('type', 'hotel')
  .eq('is_published', true)
  .order('is_featured', { ascending: false })

// Get featured accommodations
const { data: featured } = await supabase
  .from('accommodations')
  .select('*')
  .eq('is_featured', true)
  .eq('is_published', true)
  .limit(6)
```

### Fetch Activities by Category

```typescript
// Get "Incontournables" activities
const { data: mustSee } = await supabase
  .from('activities')
  .select(`
    *,
    location:locations(*),
    images(*)
  `)
  .eq('category', 'incontournables')
  .eq('is_published', true)
  .order('is_featured', { ascending: false })
```

### Fetch Venues (Restaurants, Bars, etc.)

```typescript
// Get restaurants
const { data: restaurants } = await supabase
  .from('venues')
  .select(`
    *,
    location:locations(*),
    opening_hours:venue_hours(*),
    images(*)
  `)
  .eq('category', 'restaurants')
  .eq('is_published', true)
  .order('average_rating', { ascending: false })

// Get halal restaurants with terrace
const { data: halalWithTerrace } = await supabase
  .from('venues')
  .select('*')
  .eq('category', 'restaurants')
  .eq('is_halal', true)
  .eq('has_terrace', true)
  .eq('is_published', true)
```

### Fetch Upcoming Events

```typescript
// Get upcoming events
const { data: upcoming } = await supabase
  .from('events')
  .select(`
    *,
    location:locations(*)
  `)
  .gte('start_date', new Date().toISOString())
  .eq('is_published', true)
  .order('start_date', { ascending: true })
  .limit(10)

// Get events by category
const { data: concerts } = await supabase
  .from('events')
  .select('*')
  .eq('category', 'concerts-spectacles')
  .eq('is_published', true)
```

### Fetch Visit Packages

```typescript
// Get group visit packages
const { data: groupVisits } = await supabase
  .from('visit_packages')
  .select('*')
  .eq('type', 'groupes')
  .eq('is_published', true)
```

### Submit a Review

```typescript
const { error } = await supabase
  .from('reviews')
  .insert({
    entity_type: 'venue',
    entity_id: venueId,
    rating: 5,
    title: 'Excellent restaurant!',
    content: 'Great food and service...',
    reviewer_name: 'John Doe',
    reviewer_email: 'john@example.com',
    language: 'en'
  })
```

### Create a Booking

```typescript
const { error } = await supabase
  .from('bookings')
  .insert({
    entity_type: 'visit_package',
    entity_id: packageId,
    customer_name: 'John Doe',
    customer_email: 'john@example.com',
    customer_phone: '+212600000000',
    booking_date: '2025-02-15',
    number_of_people: 4,
    special_requests: 'Vegetarian meals please',
    language: 'en'
  })
```

## Row Level Security (RLS)

All tables have RLS enabled with the following policies:

| Action | Policy |
|--------|--------|
| SELECT (content) | Public can view published content |
| SELECT (reviews) | Public can view approved reviews |
| INSERT (reviews) | Anyone can submit reviews (pending approval) |
| INSERT (bookings) | Anyone can create bookings |
| UPDATE/DELETE | Requires authenticated admin (service role) |

## Triggers & Functions

### Auto-update timestamps
All tables with `updated_at` columns automatically update the timestamp on changes.

### Auto-calculate ratings
When a review is approved, the system automatically:
1. Calculates the new average rating
2. Updates the review count
3. Updates the entity's `average_rating` and `review_count` fields

## Indexes

Performance indexes are created for:
- Category filters (type, category)
- Price range filters
- Featured content queries
- Published content queries
- Event date queries
- Polymorphic relations (entity_type + entity_id)

## TypeScript Types

Import types from `@/lib/database.types.ts`:

```typescript
import type { 
  Accommodation, 
  Activity, 
  Venue, 
  Event, 
  VisitPackage,
  Database 
} from '@/lib/database.types'
```

