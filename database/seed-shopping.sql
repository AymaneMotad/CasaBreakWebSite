-- =====================================================
-- SHOPPING SEED DATA
-- Source: https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=20
-- Run this in Supabase SQL Editor
-- =====================================================

INSERT INTO activities (
  slug,
  category,
  name_fr,
  name_en,
  description_fr,
  short_description_fr,
  main_image,
  is_featured,
  is_published
) VALUES
-- Galerie Ben Omar
(
  'galerie-ben-omar',
  'shopping',
  'Galerie Ben Omar',
  'Ben Omar Gallery',
  'La Galerie Ben Omar, ou Centre Benomar, est un centre commercial emblématique situé sur la Rue Abou Abdellah Naffi à Casablanca. Un lieu de shopping traditionnel.',
  'La Galerie Ben Omar est un centre commercial emblématique à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415151729/Galerie-Ben-Omar.jpg',
  false,
  true
),
-- Centre commercial El Manjra
(
  'centre-commercial-el-manjra',
  'shopping',
  'Centre commercial El Manjra',
  'El Manjra Shopping Center',
  'Le Centre Commercial El Manjra, situé sur le boulevard El Fida Prolongé à Casablanca, est spécialisé dans les bijouteries. Un lieu incontournable pour les amateurs de bijoux.',
  'Le Centre Commercial El Manjra est spécialisé dans les bijouteries.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415150844/Centre-commercial-El-Manjra.jpg',
  false,
  true
),
-- Al Fida Mall
(
  'al-fida-mall',
  'shopping',
  'Al Fida Mall',
  'Al Fida Mall',
  'Al Fida Mall, situé au cœur du quartier Al Fida à Casablanca, est un centre commercial animé offrant une variété de boutiques et de services.',
  'Al Fida Mall est un centre commercial animé au cœur du quartier Al Fida.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415144311/Al-Fida-Mall.jpg',
  false,
  true
),
-- Ghandi Mall
(
  'ghandi-mall',
  'shopping',
  'Ghandi Mall',
  'Ghandi Mall',
  'Le Ghandi Mall, situé sur le boulevard Ghandi à Casablanca, offre une expérience de shopping agréable avec ses boutiques variées et son ambiance moderne.',
  'Le Ghandi Mall offre une expérience de shopping agréable.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415151853/Ghandi-Mall.jpg',
  true,
  true
),
-- Centre Allal Ben Abd Ellah
(
  'centre-allal-ben-abd-ellah',
  'shopping',
  'Centre Allal Ben Abd Ellah',
  'Allal Ben Abd Ellah Center',
  'Centre Allal Ben Abdellah est un centre commercial vibrant à Casablanca, offrant une variété de boutiques et services dans une ambiance dynamique.',
  'Centre Allal Ben Abdellah est un centre commercial vibrant à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415151451/centre-commercial.jpg',
  false,
  true
),
-- Centre commercial Panorama
(
  'centre-commercial-panorama',
  'shopping',
  'Centre commercial Panorama',
  'Panorama Shopping Center',
  'Le Centre Commercial Panorama à Casablanca offre une expérience de shopping moderne avec une diversité de biens et de services.',
  'Le Centre Commercial Panorama offre une expérience de shopping moderne.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415151011/centre-commercial-Panorama.jpg',
  false,
  true
),
-- Centre commercial Al Amirat
(
  'centre-commercial-al-amirat',
  'shopping',
  'Centre commercial Al Amirat',
  'Al Amirat Shopping Center',
  'Kisariat Al Amirat est un centre commercial à Casablanca offrant une expérience de shopping moderne et diversifiée, idéalement situé dans un quartier accessible.',
  'Kisariat Al Amirat est un centre commercial moderne et diversifié.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415150703/centre-commercial-Al-Amirat.jpg',
  false,
  true
),
-- El Haffari
(
  'el-haffari',
  'shopping',
  'El Haffari',
  'El Haffari',
  'Qisariyyat Al-Haffari est un marché aux puces incontournable à Casablanca, où l''on peut découvrir une grande variété de produits dans une ambiance authentique.',
  'Al-Haffari est un marché aux puces incontournable à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415151615/El-Haffari.jpg',
  true,
  true
),
-- Al Anfal
(
  'al-anfal',
  'shopping',
  'Al Anfal',
  'Al Anfal',
  'Le Centre commercial Anfal est un lieu de shopping incontournable à Casablanca, où modernité et commodité se rencontrent dans un cadre agréable.',
  'Le Centre commercial Anfal est un lieu de shopping incontournable.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415143457/Al-Anfal.jpg',
  false,
  true
),
-- Bab Marrakech
(
  'bab-marrakech',
  'shopping',
  'Bab Marrakech',
  'Bab Marrakech',
  'Bab Marrakech est un lieu de shopping incontournable à Casablanca, où tradition et modernité se rencontrent dans un cadre authentique.',
  'Bab Marrakech allie tradition et modernité dans un cadre authentique.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240807114050/les-dedales-pres-des-remparts-scaled.jpg',
  true,
  true
),
-- Boulevard Massira Khadra
(
  'boulevard-massira-khadra',
  'shopping',
  'Boulevard Massira Khadra',
  'Massira Khadra Boulevard',
  'Le boulevard Massira Khadra à Casablanca est un lieu emblématique pour le shopping, offrant une vaste sélection de boutiques et de marques.',
  'Le boulevard Massira Khadra est un lieu emblématique pour le shopping.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415152212/Photo-Boulevard-Al-Massira-Al-Khadra.jpg',
  true,
  true
),
-- Twin Center
(
  'twin-center',
  'shopping',
  'Twin Center',
  'Twin Center',
  'Le Twin Center, composé de deux tours jumelles de 115 mètres à Casablanca, abrite un centre commercial, des bureaux et un hôtel de luxe.',
  'Le Twin Center abrite un centre commercial et des bureaux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240812091535/TWIIN-scaled.jpg',
  true,
  true
),
-- O'village
(
  'ovillage',
  'shopping',
  'O''village',
  'O''village',
  'O''village est un centre commercial unique à Casablanca, offrant une expérience de shopping dans un cadre moderne et innovant.',
  'O''village est un centre commercial unique à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240907105420/ovillage-top-image-2048x1024-1.jpg',
  false,
  true
),
-- Aeria Mall
(
  'aeria-mall',
  'shopping',
  'Aeria Mall',
  'Aeria Mall',
  'Aeria Mall est un nouveau centre commercial de 25 000 m² à Casablanca, offrant une variété de marques internationales et locales.',
  'Aeria Mall est un nouveau centre commercial de 25 000 m².',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250415152707/Photo-de-Aeria-mall.jpg',
  true,
  true
),
-- Morocco Mall
(
  'morocco-mall',
  'shopping',
  'Morocco Mall',
  'Morocco Mall',
  'Morocco Mall est le plus grand centre commercial d''Afrique, situé à Casablanca. Il propose plus de 600 boutiques, un aquarium géant et de nombreux restaurants.',
  'Morocco Mall est le plus grand centre commercial d''Afrique.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220728133423/hero_poi_morocco-mall.jpg',
  true,
  true
),
-- Anfa Place
(
  'anfa-place',
  'shopping',
  'Anfa Place',
  'Anfa Place',
  'Anfa Place est un centre commercial haut de gamme à Casablanca, offrant une sélection de boutiques de luxe et de restaurants raffinés.',
  'Anfa Place est un centre commercial haut de gamme.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220728133439/hero_poi_anfa-place.jpg',
  true,
  true
),
-- Marina Shopping Center
(
  'marina-shopping-center',
  'shopping',
  'Marina Shopping Center',
  'Marina Shopping Center',
  'Marina Shopping Center est situé dans le quartier de la Marina de Casablanca, offrant une expérience de shopping moderne avec vue sur la mer.',
  'Marina Shopping Center offre une expérience de shopping avec vue sur la mer.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220728133436/hero_poi_marina-casablanca.jpg',
  true,
  true
),
-- Triangle d'Or
(
  'triangle-dor',
  'shopping',
  'Triangle d''Or',
  'Golden Triangle',
  'Le Triangle d''Or à Casablanca est un quartier commerçant prestigieux réputé pour ses boutiques de luxe et ses enseignes internationales.',
  'Le Triangle d''Or est un quartier commerçant prestigieux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220728133413/hero_poi_triangle-or.jpg',
  true,
  true
),
-- Quartier Habous
(
  'quartier-habous',
  'shopping',
  'Quartier Habous',
  'Habous District',
  'Le quartier Habous est un souk traditionnel à Casablanca où vous trouverez artisanat marocain, épices, bijoux et produits locaux dans une ambiance authentique.',
  'Le quartier Habous est un souk traditionnel avec artisanat marocain.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220728133431/hero_poi_echoppes-habous.jpg',
  true,
  true
),
-- Ancienne Médina
(
  'ancienne-medina',
  'shopping',
  'Ancienne Médina',
  'Old Medina',
  'L''ancienne médina de Casablanca est un lieu authentique où vous découvrirez des ruelles pittoresques, des souks et des échoppes traditionnelles.',
  'L''ancienne médina est un lieu authentique avec des souks traditionnels.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240911105201/Anciene_medina-scaled.jpg',
  true,
  true
)
ON CONFLICT (slug) DO UPDATE SET
  name_fr = EXCLUDED.name_fr,
  name_en = EXCLUDED.name_en,
  description_fr = EXCLUDED.description_fr,
  short_description_fr = EXCLUDED.short_description_fr,
  main_image = EXCLUDED.main_image,
  is_featured = EXCLUDED.is_featured,
  is_published = EXCLUDED.is_published;

-- Verify insertion
SELECT COUNT(*) as total_shopping FROM activities WHERE category = 'shopping';
