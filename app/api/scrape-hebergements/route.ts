import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Transform scraped data to match Supabase schema
function transformAccommodation(scrapedData: any) {
  const {
    name,
    category = 'Hôtel',
    description,
    address,
    phone,
    email,
    website,
    images = [],
    starRating
  } = scrapedData;

  function getAccommodationType(cat: string) {
    const types: Record<string, string> = {
      'hôtel': 'hotel',
      'hotel': 'hotel',
      'auberge': 'hostel',
      'résidence hôtelière': 'apartment',
      'résidence touristique': 'apartment',
      'maison d\'hôte': 'guesthouse',
      'riad': 'riad',
      'villa': 'villa',
    };
    
    const lowerCat = (cat || '').toLowerCase();
    for (const [key, value] of Object.entries(types)) {
      if (lowerCat.includes(key)) {
        return value;
      }
    }
    return 'hotel';
  }

  function getPriceRange(rating: number | null) {
    if (!rating) return '$';
    if (rating >= 5) return '$$$$';
    if (rating >= 4) return '$$$';
    if (rating >= 3) return '$$';
    return '$';
  }

  function slugify(text: string) {
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }

  return {
    slug: slugify(name),
    name_fr: name,
    name_en: name,
    name_ar: name,
    description_fr: description || null,
    description_en: description || null,
    description_ar: description || null,
    type: getAccommodationType(category),
    star_rating: starRating || null,
    price_range: getPriceRange(starRating),
    phone: phone || null,
    email: email || null,
    website: website || null,
    main_image: images[0] || null,
    is_featured: false,
    is_published: true,
    accepts_direct_booking: !!website,
    currency: 'MAD'
  };
}

export async function POST(request: NextRequest) {
  try {
    const { accommodations } = await request.json();

    if (!Array.isArray(accommodations)) {
      return NextResponse.json(
        { error: 'accommodations must be an array' },
        { status: 400 }
      );
    }

    const results = [];
    let successCount = 0;
    let errorCount = 0;

    for (const scraped of accommodations) {
      try {
        const accommodationData = transformAccommodation(scraped);
        
        // Check if exists
        const { data: existing } = await supabase
          .from('accommodations')
          .select('id')
          .eq('slug', accommodationData.slug)
          .single();

        let accommodation;

        if (existing) {
          // Update
          const { data: updated, error: updateError } = await supabase
            .from('accommodations')
            .update(accommodationData)
            .eq('slug', accommodationData.slug)
            .select()
            .single();

          if (updateError) throw updateError;
          accommodation = updated;
        } else {
          // Insert
          const { data: inserted, error: insertError } = await supabase
            .from('accommodations')
            .insert(accommodationData)
            .select()
            .single();

          if (insertError) throw insertError;
          accommodation = inserted;
        }

        // Insert images
        if (scraped.images?.length > 0 && accommodation) {
          // Delete existing images
          await supabase
            .from('images')
            .delete()
            .eq('entity_type', 'accommodation')
            .eq('entity_id', accommodation.id);

          // Insert new images
          const imageInserts = scraped.images.map((url: string, index: number) => ({
            url,
            entity_type: 'accommodation',
            entity_id: accommodation.id,
            display_order: index,
            is_main: index === 0
          }));

          await supabase.from('images').insert(imageInserts);
        }

        successCount++;
        results.push({ success: true, name: accommodationData.name_fr });
      } catch (error: any) {
        errorCount++;
        results.push({ 
          success: false, 
          name: scraped.name, 
          error: error.message 
        });
      }
    }

    return NextResponse.json({
      success: true,
      processed: accommodations.length,
      successful: successCount,
      errors: errorCount,
      results
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

