-- =====================================================
-- UPDATE ACCOMMODATION IMAGES
-- Run this in Supabase SQL Editor to fix image URLs
-- =====================================================

UPDATE accommodations SET main_image = CASE slug
  WHEN 'le-zenith-hotel-spa' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250711085636/LE-ZENITH-HOTEL-SPA-2.jpg'
  WHEN 'domo-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/DOMO-HOTEL.jpg'
  WHEN 'royal-mansour-casablanca' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102518/ROYAL-MANSOUR-CASABLANCA.jpg'
  WHEN 'marriott-casablanca-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709103112/MARIOTT-CASABLANCA-HOTEL-scaled.jpg'
  WHEN 'hotel-odyssee-center' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709103407/HOTEL-ODYSSEE-CENTER.jpg'
  WHEN 'hotel-suisse' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250711090203/HOTEL-SUISSE-02.jpg'
  WHEN 'casablanca-le-lido-thalasso-spa' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250711090500/CASABLANCA-LE-LIDO-THALASSO-SPA.jpg'
  WHEN 'le-palace-d-anfa' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250711091417/LE-PALACE-DANFA-1.jpg'
  WHEN 'hotel-idou-anfa-spa' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709103758/HOTEL-IDOU-ANFA-SPA.jpg'
  WHEN 'barcelo-anfa-casablanca' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250711143354/BARCELO-ANFA-CASABLANCA-02.jpg'
  WHEN 'kenzi-sidi-maarouf-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709104447/KENZI-SIDI-MAAROUF-HOTEL.jpg'
  WHEN 'novotel-casa-city-center' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250711143614/NOVOTEL-CASA-CITY-CENTER-1.jpg'
  WHEN 'sofitel-casablanca-tour-blanche' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250714141509/CASABLANCA-SOFITEL-TOUR-BLANCHE.jpg'
  WHEN 'hotel-farah-casablanca' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250623105506/H-FRAH.jpg'
  WHEN 'hyatt-regency-casablanca' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250623104801/HYATT-REGENCY-CASABLANCA.jpg'
  WHEN 'grand-mogador-city-center' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250711093212/GRAND-MOGADOR-CITY-CENTER-2.jpg'
  WHEN 'kenzi-tower-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250710091509/2024-10-07.webp'
  WHEN 'movenpick-casablanca' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250623103400/MOVENPICK-CASABLANCA-1920.jpg'
  WHEN 'onomo-casablanca-city-center' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250623102907/ONOMO-CASABLANCA-CITY-CENTER-1920.jpg'
  WHEN 'four-seasons-hotel-casablanca' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250623102200/FOUR-SEASONS-HOTEL-CASABLANCA-1920.jpg'
  WHEN 'le-casablanca-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250623101301/LE-CASABLANCA-HOTEL-1920.jpg'
  WHEN 'ibis-casablanca-nearshore' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250711091859/ibis-Casablanca-Nearshore.jpg'
  WHEN 'ibis-casa-sidi-maarouf' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250711092454/ibis-Casa-Sidi-Maarouf-2.jpg'
  WHEN 'ibis-casablanca-abdelmoumen' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709104822/a0g3_ho_00_p_1024x768.webp'
  WHEN 'ibis-casa-voyageurs' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709105239/Hotel-Ibis-Casa-Voyageurs.jpg'
  WHEN 'ibis-casablanca-city-center' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240816091558/Capture-decran-2024-08-16-101441.jpg'
  WHEN 'stayhere-casablanca-gauthier' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240816090100/Untitled-1_0000_stayhere_A-27_0007_stayhere_D_001_220705_%C2%A9HARDLIGHT-1.jpg'
  WHEN 'hotel-melliber' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502144856/Hotel-Melliber.jpg'
  WHEN 'hotel-kaan' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145000/Hotel-Kaan.jpg'
  WHEN 'hotel-plaza' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145213/Hotel-Plaza.jpg'
  WHEN 'hotel-majestic' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145254/Hotel-Majestic.jpg'
  WHEN 'hotel-guynemer' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145409/Hotel-Guynemer.jpg'
  WHEN 'hotel-transatlantique' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145455/Hotel-transatlantique.jpg'
  WHEN 'hotel-volubilis' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145545/Hotel-Volubilis.jpg'
  WHEN 'hotel-les-ambassadeurs' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145630/Hotel-les-ambassadeurs.jpg'
  WHEN 'hotel-villa-blanca' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145720/Hotel-Villa-Blanca.jpg'
  WHEN 'jm-suites-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145813/Jm-Suites-Hotel.jpg'
  WHEN 'le-yacht-suites-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145902/Le-Yacht-Suites-Hotel.jpg'
  WHEN 'avenue-suites-appart-hotel-deluxe' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502145949/Avenue-Suites-Appert-Hotel-Deluxe.jpg'
  WHEN 'hotel-gauthier' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502150327/Hotel-Gauthier.jpg'
  WHEN 'club-val-d-anfa-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502150445/Club-Val-danfa-Hotel.jpg'
  WHEN 'hotel-central' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502150536/Hotel-Central.jpg'
  WHEN 'kyriad-residence-centre-ville' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502150649/Kyriad-Residence-Centre-Ville.jpg'
  WHEN 'imperial-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240812105353/imperial-scaled.jpg'
  WHEN 'moroccan-house-hotel' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502150734/Moroccan-House-Hotel.jpg'
  WHEN 'suite-hotel-casa-diamond' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502150837/Suite-Hotel-Casa-Diamond.jpg'
  WHEN 'pestana-seaside' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250502150931/Pestana-Seaside.jpg'
  WHEN 'adagio-casablanca-city-center' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250703151350/ADAGIO-CASABLANCA-CITY-CENTER.jpg'
  WHEN 'hilton-garden-inn-casablanca' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220728133356/hero_hotel_hilton-garden-inn-casablanca.jpg'
  WHEN 'best-western-hotel-toubkal' THEN 'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220728133401/hero_hotel_best-western-toubkal.jpg'
  ELSE main_image
END
WHERE slug IN (
  'le-zenith-hotel-spa', 'domo-hotel', 'royal-mansour-casablanca', 'marriott-casablanca-hotel',
  'hotel-odyssee-center', 'hotel-suisse', 'casablanca-le-lido-thalasso-spa', 'le-palace-d-anfa',
  'hotel-idou-anfa-spa', 'barcelo-anfa-casablanca', 'kenzi-sidi-maarouf-hotel', 'novotel-casa-city-center',
  'sofitel-casablanca-tour-blanche', 'hotel-farah-casablanca', 'hyatt-regency-casablanca', 'grand-mogador-city-center',
  'kenzi-tower-hotel', 'movenpick-casablanca', 'onomo-casablanca-city-center', 'four-seasons-hotel-casablanca',
  'le-casablanca-hotel', 'ibis-casablanca-nearshore', 'ibis-casa-sidi-maarouf', 'ibis-casablanca-abdelmoumen',
  'ibis-casa-voyageurs', 'ibis-casablanca-city-center', 'stayhere-casablanca-gauthier', 'hotel-melliber',
  'hotel-kaan', 'hotel-plaza', 'hotel-majestic', 'hotel-guynemer', 'hotel-transatlantique', 'hotel-volubilis',
  'hotel-les-ambassadeurs', 'hotel-villa-blanca', 'jm-suites-hotel', 'le-yacht-suites-hotel',
  'avenue-suites-appart-hotel-deluxe', 'hotel-gauthier', 'club-val-d-anfa-hotel', 'hotel-central',
  'kyriad-residence-centre-ville', 'imperial-hotel', 'moroccan-house-hotel', 'suite-hotel-casa-diamond',
  'pestana-seaside', 'adagio-casablanca-city-center', 'hilton-garden-inn-casablanca', 'best-western-hotel-toubkal'
);

-- Show updated count
SELECT COUNT(*) as updated_count FROM accommodations WHERE main_image LIKE '%2025%' OR main_image LIKE '%2024%';

