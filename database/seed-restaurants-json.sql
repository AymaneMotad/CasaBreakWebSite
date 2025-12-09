-- Seed restaurants from jsonformatter.json
-- Run this in Supabase SQL Editor

-- First, add JSONB column if it doesn't exist
ALTER TABLE venues 
ADD COLUMN IF NOT EXISTS data_jsonb JSONB DEFAULT NULL;

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_venues_data_jsonb ON venues USING GIN (data_jsonb);

-- Insert Asian restaurants from jsonformatter.json
-- Using ON CONFLICT to update if restaurant already exists

INSERT INTO venues (
  slug,
  category,
  name_fr,
  description_fr,
  short_description_fr,
  cuisine_types,
  price_range,
  average_rating,
  main_image,
  website,
  is_published,
  data_jsonb
) VALUES
-- Iloli Japanese Restaurant & Lounge
(
  'iloli',
  'restaurants',
  'Iloli Japanese Restaurant & Lounge',
  'Restaurant japonais gastronomique avec sushi bar et cuisine créative dans un cadre chic.',
  'Restaurant japonais gastronomique avec sushi bar et cuisine créative dans un cadre chic.',
  ARRAY['japonais'],
  '$$$$',
  4.5,
  'https://media-cdn.tripadvisor.com/media/photo-s/iloli-restaurant.jpg',
  NULL,
  true,
  '{"id":"iloli","name":"Iloli Japanese Restaurant & Lounge","category":"asiatique","subtype":"japonais","description":"Restaurant japonais gastronomique avec sushi bar et cuisine créative dans un cadre chic.","address":"Rue Najib Mahfoud, Quartier Gauthier, Casablanca","district":"Gauthier","rating":4.5,"price_level":"€€€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/iloli-restaurant.jpg","website":null,"tags":["sushi","haut_de_gamme","omakase"]}'::jsonb
),
-- Lily's
(
  'lilys',
  'restaurants',
  'Lily''s',
  'Cuisine asiatique fusion à forte inspiration thaï sur la corniche, grande terrasse vue océan.',
  'Cuisine asiatique fusion à forte inspiration thaï sur la corniche, grande terrasse vue océan.',
  ARRAY['fusion_thai'],
  '$$$',
  4.2,
  'https://media-cdn.tripadvisor.com/media/photo-s/lilys-corniche.jpg',
  NULL,
  true,
  '{"id":"lilys","name":"Lily''s","category":"asiatique","subtype":"fusion_thai","description":"Cuisine asiatique fusion à forte inspiration thaï sur la corniche, grande terrasse vue océan.","address":"Corniche d''Aïn Diab, Casablanca","district":"Ain Diab","rating":4.2,"price_level":"€€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/lilys-corniche.jpg","website":null,"tags":["vue_mer","terrasse","branché"]}'::jsonb
),
-- Chez Thang
(
  'chez_thang',
  'restaurants',
  'Chez Thang',
  'Restaurant asiatique convivial proposant soupes, salades, nems, makis et autres classiques.',
  'Restaurant asiatique convivial proposant soupes, salades, nems, makis et autres classiques.',
  ARRAY['chinois_viet_japonais'],
  '$$',
  4.3,
  'https://www.chezthang.ma/images/restaurant-chez-thang.jpg',
  'https://www.chezthang.ma',
  true,
  '{"id":"chez_thang","name":"Chez Thang","category":"asiatique","subtype":"chinois_viet_japonais","description":"Restaurant asiatique convivial proposant soupes, salades, nems, makis et autres classiques.","address":"Quartier Maârif, Casablanca","district":"Maarif","rating":4.3,"price_level":"€€","photo_url":"https://www.chezthang.ma/images/restaurant-chez-thang.jpg","website":"https://www.chezthang.ma","tags":["familial","qualite_prix"]}'::jsonb
),
-- Golden China
(
  'golden_china',
  'restaurants',
  'Golden China',
  'Cuisine chinoise traditionnelle avec canard laqué, raviolis et plats sautés.',
  'Cuisine chinoise traditionnelle avec canard laqué, raviolis et plats sautés.',
  ARRAY['chinois'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/golden-china.jpg',
  NULL,
  true,
  '{"id":"golden_china","name":"Golden China","category":"asiatique","subtype":"chinois","description":"Cuisine chinoise traditionnelle avec canard laqué, raviolis et plats sautés.","address":"Proche Boulevard d''Anfa, Casablanca","district":"Centre","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/golden-china.jpg","website":null,"tags":["chinois_classique"]}'::jsonb
),
-- Chee Is Thai
(
  'chee_is_thai',
  'restaurants',
  'Chee Is Thai',
  'Restaurant thaï moderne proposant currys, pad thaï et soupes parfumées.',
  'Restaurant thaï moderne proposant currys, pad thaï et soupes parfumées.',
  ARRAY['thai'],
  '$$',
  4.2,
  'https://media-cdn.tripadvisor.com/media/photo-s/chee-is-thai.jpg',
  NULL,
  true,
  '{"id":"chee_is_thai","name":"Chee Is Thai","category":"asiatique","subtype":"thai","description":"Restaurant thaï moderne proposant currys, pad thaï et soupes parfumées.","address":"Secteur Gauthier / Centre-ville, Casablanca","district":"Gauthier","rating":4.2,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/chee-is-thai.jpg","website":null,"tags":["thai_authentique"]}'::jsonb
),
-- Yawatcha Thai Experience
(
  'yawatcha_thai',
  'restaurants',
  'Yawatcha Thai Experience',
  'Cuisine thaïe et asiatique contemporaine dans un décor soigné.',
  'Cuisine thaïe et asiatique contemporaine dans un décor soigné.',
  ARRAY['thai'],
  '$$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/yawatcha-thai.jpg',
  NULL,
  true,
  '{"id":"yawatcha_thai","name":"Yawatcha Thai Experience","category":"asiatique","subtype":"thai","description":"Cuisine thaïe et asiatique contemporaine dans un décor soigné.","address":"Aïn Diab / Corniche, Casablanca","district":"Ain Diab","rating":4,"price_level":"€€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/yawatcha-thai.jpg","website":null,"tags":["thai_modern","diner"]}'::jsonb
),
-- Pitaya Thai Street Food
(
  'pitaya_thai',
  'restaurants',
  'Pitaya Thai Street Food',
  'Concept de street‑food thaï avec bols woks, pad thaï et currys à composer.',
  'Concept de street‑food thaï avec bols woks, pad thaï et currys à composer.',
  ARRAY['thai_streetfood'],
  '$$',
  4.0,
  'https://pitaya-thaistreetfood.com/wp-content/uploads/restaurant-casablanca.jpg',
  'https://pitaya-thaistreetfood.com/restaurants/casablanca',
  true,
  '{"id":"pitaya_thai","name":"Pitaya Thai Street Food","category":"asiatique","subtype":"thai_streetfood","description":"Concept de street‑food thaï avec bols woks, pad thaï et currys à composer.","address":"Plusieurs adresses à Casablanca (malls et artères commerciales)","district":"Multi","rating":4,"price_level":"€€","photo_url":"https://pitaya-thaistreetfood.com/wp-content/uploads/restaurant-casablanca.jpg","website":"https://pitaya-thaistreetfood.com/restaurants/casablanca","tags":["rapide","a_emporter"]}'::jsonb
),
-- Thai Garden Casablanca
(
  'thai_garden',
  'restaurants',
  'Thai Garden Casablanca',
  'Restaurant thaï avec ambiance jardin, spécialités currys et salades épicées.',
  'Restaurant thaï avec ambiance jardin, spécialités currys et salades épicées.',
  ARRAY['thai'],
  '$$$',
  4.2,
  'https://media-cdn.tripadvisor.com/media/photo-s/thai-garden.jpg',
  NULL,
  true,
  '{"id":"thai_garden","name":"Thai Garden Casablanca","category":"asiatique","subtype":"thai","description":"Restaurant thaï avec ambiance jardin, spécialités currys et salades épicées.","address":"Zone Californie / Ain Diab, Casablanca","district":"Californie","rating":4.2,"price_level":"€€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/thai-garden.jpg","website":null,"tags":["jardin","romantique"]}'::jsonb
),
-- Bao Chinese & Asian Food
(
  'bao_chinese',
  'restaurants',
  'Bao Chinese & Asian Food',
  'Street‑food asiatique proposant baos, nouilles et plats rapides à emporter.',
  'Street‑food asiatique proposant baos, nouilles et plats rapides à emporter.',
  ARRAY['streetfood_chinois'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/bao-asian-food.jpg',
  NULL,
  true,
  '{"id":"bao_chinese","name":"Bao Chinese & Asian Food","category":"asiatique","subtype":"streetfood_chinois","description":"Street‑food asiatique proposant baos, nouilles et plats rapides à emporter.","address":"Quartier Maârif / Centre, Casablanca","district":"Maarif","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/bao-asian-food.jpg","website":null,"tags":["bao","a_emporter"]}'::jsonb
),
-- Wok to Walk Casablanca
(
  'wok_to_walk',
  'restaurants',
  'Wok to Walk Casablanca',
  'Chaîne internationale de woks à composer, service rapide.',
  'Chaîne internationale de woks à composer, service rapide.',
  ARRAY['wok_streetfood'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/wok-to-walk.jpg',
  NULL,
  true,
  '{"id":"wok_to_walk","name":"Wok to Walk Casablanca","category":"asiatique","subtype":"wok_streetfood","description":"Chaîne internationale de woks à composer, service rapide.","address":"Centre-ville / centres commerciaux","district":"Centre","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/wok-to-walk.jpg","website":null,"tags":["rapide","personnalisable"]}'::jsonb
),
-- Koi – Sushi & Asian Food
(
  'koi_sushi',
  'restaurants',
  'Koi – Sushi & Asian Food',
  'Restaurant japonais moderne avec sushi et quelques plats pan‑asiatiques.',
  'Restaurant japonais moderne avec sushi et quelques plats pan‑asiatiques.',
  ARRAY['japonais_fusion'],
  '$$$',
  4.3,
  'https://media-cdn.tripadvisor.com/media/photo-s/koi-sushi.jpg',
  NULL,
  true,
  '{"id":"koi_sushi","name":"Koi – Sushi & Asian Food","category":"asiatique","subtype":"japonais_fusion","description":"Restaurant japonais moderne avec sushi et quelques plats pan‑asiatiques.","address":"Quartier Gauthier, Casablanca","district":"Gauthier","rating":4.3,"price_level":"€€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/koi-sushi.jpg","website":null,"tags":["sushi_bar","fusion"]}'::jsonb
),
-- Nori Sushi
(
  'nori_sushi',
  'restaurants',
  'Nori Sushi',
  'Sushi bar contemporain axé sur makis et rolls, sur place et à emporter.',
  'Sushi bar contemporain axé sur makis et rolls, sur place et à emporter.',
  ARRAY['japonais'],
  '$$',
  4.2,
  'https://media-cdn.tripadvisor.com/media/photo-s/nori-sushi.jpg',
  NULL,
  true,
  '{"id":"nori_sushi","name":"Nori Sushi","category":"asiatique","subtype":"japonais","description":"Sushi bar contemporain axé sur makis et rolls, sur place et à emporter.","address":"Quartier Maârif, Casablanca","district":"Maarif","rating":4.2,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/nori-sushi.jpg","website":null,"tags":["sushi","livraison"]}'::jsonb
),
-- Tokyo Sushi Casablanca
(
  'tokyo_sushi',
  'restaurants',
  'Tokyo Sushi Casablanca',
  'Sushi et plats japonais populaires dans une ambiance simple.',
  'Sushi et plats japonais populaires dans une ambiance simple.',
  ARRAY['japonais'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/tokyo-sushi.jpg',
  NULL,
  true,
  '{"id":"tokyo_sushi","name":"Tokyo Sushi Casablanca","category":"asiatique","subtype":"japonais","description":"Sushi et plats japonais populaires dans une ambiance simple.","address":"Quartier Bourgogne, Casablanca","district":"Bourgogne","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/tokyo-sushi.jpg","website":null,"tags":["sushi_classique"]}'::jsonb
),
-- Wasabi Sushi
(
  'wasabi_sushi',
  'restaurants',
  'Wasabi Sushi',
  'Sushi, makis et quelques plats chauds, très orienté livraison et take‑away.',
  'Sushi, makis et quelques plats chauds, très orienté livraison et take‑away.',
  ARRAY['japonais'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/wasabi-sushi.jpg',
  NULL,
  true,
  '{"id":"wasabi_sushi","name":"Wasabi Sushi","category":"asiatique","subtype":"japonais","description":"Sushi, makis et quelques plats chauds, très orienté livraison et take‑away.","address":"Quartier Racine, Casablanca","district":"Racine","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/wasabi-sushi.jpg","website":null,"tags":["livraison","takeaway"]}'::jsonb
),
-- Miyamoto Sushi
(
  'miyamoto_sushi',
  'restaurants',
  'Miyamoto Sushi',
  'Petit restaurant convivial proposant sushi, sashimi et plats japonais.',
  'Petit restaurant convivial proposant sushi, sashimi et plats japonais.',
  ARRAY['japonais'],
  '$$',
  4.1,
  'https://media-cdn.tripadvisor.com/media/photo-s/miyamoto-sushi.jpg',
  NULL,
  true,
  '{"id":"miyamoto_sushi","name":"Miyamoto Sushi","category":"asiatique","subtype":"japonais","description":"Petit restaurant convivial proposant sushi, sashimi et plats japonais.","address":"Centre-ville, Casablanca","district":"Centre","rating":4.1,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/miyamoto-sushi.jpg","website":null,"tags":["convivial","japonais"]}'::jsonb
),
-- Le Nouveau Dragon
(
  'nouveau_dragon',
  'restaurants',
  'Le Nouveau Dragon',
  'Institution chinoise de Casablanca, carte très fournie et ambiance traditionnelle.',
  'Institution chinoise de Casablanca, carte très fournie et ambiance traditionnelle.',
  ARRAY['chinois'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/nouveau-dragon.jpg',
  NULL,
  true,
  '{"id":"nouveau_dragon","name":"Le Nouveau Dragon","category":"asiatique","subtype":"chinois","description":"Institution chinoise de Casablanca, carte très fournie et ambiance traditionnelle.","address":"Boulevard d''Anfa, Casablanca","district":"Centre","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/nouveau-dragon.jpg","website":null,"tags":["classique","chinois"]}'::jsonb
),
-- Dragon d'Or
(
  'dragon_dor',
  'restaurants',
  'Dragon d''Or',
  'Restaurant chinois traditionnel avec large choix de spécialités.',
  'Restaurant chinois traditionnel avec large choix de spécialités.',
  ARRAY['chinois'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/dragon-dor.jpg',
  NULL,
  true,
  '{"id":"dragon_dor","name":"Dragon d''Or","category":"asiatique","subtype":"chinois","description":"Restaurant chinois traditionnel avec large choix de spécialités.","address":"Centre élargi, Casablanca","district":"Centre","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/dragon-dor.jpg","website":null,"tags":["chinois","familial"]}'::jsonb
),
-- La Muraille de Chine
(
  'muraille_chine',
  'restaurants',
  'La Muraille de Chine',
  'Cuisine chinoise familiale avec portions généreuses.',
  'Cuisine chinoise familiale avec portions généreuses.',
  ARRAY['chinois'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/muraille-de-chine.jpg',
  NULL,
  true,
  '{"id":"muraille_chine","name":"La Muraille de Chine","category":"asiatique","subtype":"chinois","description":"Cuisine chinoise familiale avec portions généreuses.","address":"Quartier central, Casablanca","district":"Centre","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/muraille-de-chine.jpg","website":null,"tags":["familial","chinois"]}'::jsonb
),
-- SushiBox Casablanca
(
  'sushibox',
  'restaurants',
  'SushiBox Casablanca',
  'Boîtes sushi à composer, concept moderne orienté livraison.',
  'Boîtes sushi à composer, concept moderne orienté livraison.',
  ARRAY['japonais'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/sushibox.jpg',
  NULL,
  true,
  '{"id":"sushibox","name":"SushiBox Casablanca","category":"asiatique","subtype":"japonais","description":"Boîtes sushi à composer, concept moderne orienté livraison.","address":"Centres commerciaux et quartiers résidentiels","district":"Multi","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/sushibox.jpg","website":null,"tags":["livraison","boites_sushi"]}'::jsonb
),
-- Sushiclub
(
  'sushiclub',
  'restaurants',
  'Sushiclub',
  'Sushi bar et cuisine japonaise dans une ambiance lounge.',
  'Sushi bar et cuisine japonaise dans une ambiance lounge.',
  ARRAY['japonais'],
  '$$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/sushiclub.jpg',
  NULL,
  true,
  '{"id":"sushiclub","name":"Sushiclub","category":"asiatique","subtype":"japonais","description":"Sushi bar et cuisine japonaise dans une ambiance lounge.","address":"Quartier Maârif / Racine, Casablanca","district":"Maarif","rating":4,"price_level":"€€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/sushiclub.jpg","website":null,"tags":["lounge","sushi"]}'::jsonb
),
-- Saïgon Express
(
  'saigon_express',
  'restaurants',
  'Saïgon Express',
  'Cuisine vietnamienne avec pho, bo bun et nems dans un cadre simple.',
  'Cuisine vietnamienne avec pho, bo bun et nems dans un cadre simple.',
  ARRAY['vietnamien'],
  '$$',
  4.1,
  'https://media-cdn.tripadvisor.com/media/photo-s/saigon-express.jpg',
  NULL,
  true,
  '{"id":"saigon_express","name":"Saïgon Express","category":"asiatique","subtype":"vietnamien","description":"Cuisine vietnamienne avec pho, bo bun et nems dans un cadre simple.","address":"Centre-ville, Casablanca","district":"Centre","rating":4.1,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/saigon-express.jpg","website":null,"tags":["vietnamien","pho"]}'::jsonb
),
-- Pho Viet Casablanca
(
  'pho_viet',
  'restaurants',
  'Pho Viet Casablanca',
  'Spécialisé dans les soupes pho et plats viet traditionnels.',
  'Spécialisé dans les soupes pho et plats viet traditionnels.',
  ARRAY['vietnamien'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/pho-viet.jpg',
  NULL,
  true,
  '{"id":"pho_viet","name":"Pho Viet Casablanca","category":"asiatique","subtype":"vietnamien","description":"Spécialisé dans les soupes pho et plats viet traditionnels.","address":"Quartier Maârif, Casablanca","district":"Maarif","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/pho-viet.jpg","website":null,"tags":["pho","viet"]}'::jsonb
),
-- Korean BBQ Casa
(
  'korean_bbq',
  'restaurants',
  'Korean BBQ Casa',
  'Restaurant coréen proposant barbecue coréen, bibimbap et autres spécialités.',
  'Restaurant coréen proposant barbecue coréen, bibimbap et autres spécialités.',
  ARRAY['coreen'],
  '$$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/korean-bbq.jpg',
  NULL,
  true,
  '{"id":"korean_bbq","name":"Korean BBQ Casa","category":"asiatique","subtype":"coreen","description":"Restaurant coréen proposant barbecue coréen, bibimbap et autres spécialités.","address":"Zone centre élargi, Casablanca","district":"Centre","rating":4,"price_level":"€€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/korean-bbq.jpg","website":null,"tags":["coreen","bbq"]}'::jsonb
),
-- Asia Garden Fusion
(
  'asia_garden_fusion',
  'restaurants',
  'Asia Garden Fusion',
  'Cuisine fusion asiatique (chinois, thaï, japonais) dans un cadre contemporain.',
  'Cuisine fusion asiatique (chinois, thaï, japonais) dans un cadre contemporain.',
  ARRAY['fusion'],
  '$$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/asia-garden-fusion.jpg',
  NULL,
  true,
  '{"id":"asia_garden_fusion","name":"Asia Garden Fusion","category":"asiatique","subtype":"fusion","description":"Cuisine fusion asiatique (chinois, thaï, japonais) dans un cadre contemporain.","address":"Aïn Diab / Corniche, Casablanca","district":"Ain Diab","rating":4,"price_level":"€€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/asia-garden-fusion.jpg","website":null,"tags":["fusion","diner"]}'::jsonb
),
-- Sushi & Wok House
(
  'sushi_wok_house',
  'restaurants',
  'Sushi & Wok House',
  'Combo sushi et plats au wok, orienté vente à emporter et livraison.',
  'Combo sushi et plats au wok, orienté vente à emporter et livraison.',
  ARRAY['japonais_wok'],
  '$$',
  4.0,
  'https://media-cdn.tripadvisor.com/media/photo-s/sushi-wok-house.jpg',
  NULL,
  true,
  '{"id":"sushi_wok_house","name":"Sushi & Wok House","category":"asiatique","subtype":"japonais_wok","description":"Combo sushi et plats au wok, orienté vente à emporter et livraison.","address":"Quartiers résidentiels (Bourgogne / Californie), Casablanca","district":"Multi","rating":4,"price_level":"€€","photo_url":"https://media-cdn.tripadvisor.com/media/photo-s/sushi-wok-house.jpg","website":null,"tags":["sushi","wok","livraison"]}'::jsonb
)
ON CONFLICT (slug) 
DO UPDATE SET
  name_fr = EXCLUDED.name_fr,
  description_fr = EXCLUDED.description_fr,
  short_description_fr = EXCLUDED.short_description_fr,
  cuisine_types = EXCLUDED.cuisine_types,
  price_range = EXCLUDED.price_range,
  average_rating = EXCLUDED.average_rating,
  main_image = EXCLUDED.main_image,
  website = EXCLUDED.website,
  is_published = EXCLUDED.is_published,
  data_jsonb = EXCLUDED.data_jsonb,
  updated_at = NOW();

-- Verify the insert
SELECT COUNT(*) as total_restaurants FROM venues WHERE category = 'restaurants' AND data_jsonb IS NOT NULL;

