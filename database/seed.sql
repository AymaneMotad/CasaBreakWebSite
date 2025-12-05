-- =====================================================
-- CASABREAK SEED DATA (Minimal Examples)
-- Run this after schema.sql to see the structure in action
-- =====================================================

-- =====================================================
-- 1. LOCATIONS (Reusable across all content)
-- =====================================================

INSERT INTO locations (id, name_fr, name_en, name_ar, address_fr, neighborhood, latitude, longitude) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Centre-ville', 'Downtown', 'وسط المدينة', 'Boulevard Mohammed V', 'Centre-ville', 33.5892, -7.6036),
  ('22222222-2222-2222-2222-222222222222', 'Corniche Aïn Diab', 'Ain Diab Corniche', 'كورنيش عين الذياب', 'Boulevard de la Corniche', 'Aïn Diab', 33.5959, -7.6694),
  ('33333333-3333-3333-3333-333333333333', 'Maarif', 'Maarif', 'المعاريف', 'Quartier Maarif', 'Maarif', 33.5793, -7.6324);

-- =====================================================
-- 2. HÉBERGEMENT (Accommodations)
-- =====================================================

INSERT INTO accommodations (slug, name_fr, name_en, name_ar, description_fr, description_en, type, star_rating, price_range, price_from, location_id, main_image, is_featured, is_published) VALUES
  (
    'hotel-example-luxury',
    'Hôtel Exemple Luxe',
    'Luxury Example Hotel',
    'فندق فاخر مثال',
    'Description de l''hôtel avec ses caractéristiques principales et ce qui le rend unique.',
    'Hotel description with its main features and what makes it unique.',
    'hotel', 5, '$$$$', 2500.00, '22222222-2222-2222-2222-222222222222',
    '/images/accommodations/hotel-1.jpg',
    true, true
  ),
  (
    'riad-example',
    'Riad Exemple',
    'Example Riad',
    'رياض مثال',
    'Un riad traditionnel avec patio intérieur et décoration authentique.',
    'A traditional riad with interior patio and authentic decoration.',
    'riad', 4, '$$', 800.00, '11111111-1111-1111-1111-111111111111',
    '/images/accommodations/riad-1.jpg',
    false, true
  );

-- =====================================================
-- 3. ACTIVITÉS (By Category)
-- =====================================================

-- Incontournables (Must-See)
INSERT INTO activities (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, duration_minutes, price_from, price_range, location_id, main_image, is_featured, is_published) VALUES
  (
    'activite-incontournable-1',
    'incontournables',
    'Visite Mosquée Hassan II',
    'Hassan II Mosque Visit',
    'زيارة مسجد الحسن الثاني',
    'Visite guidée de la plus grande mosquée d''Afrique, chef-d''œuvre architectural.',
    'Guided tour of Africa''s largest mosque, an architectural masterpiece.',
    'Visite guidée de la mosquée emblématique',
    90, 120.00, '$$', '22222222-2222-2222-2222-222222222222',
    '/images/activities/mosque.jpg',
    true, true
  );

-- Plein Air & Mer (Outdoor & Sea)
INSERT INTO activities (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, duration_minutes, price_from, price_range, location_id, main_image, is_featured, is_published) VALUES
  (
    'activite-plein-air-1',
    'plein-air-mer',
    'Cours de Surf',
    'Surf Lessons',
    'دروس ركوب الأمواج',
    'Apprenez à surfer sur les vagues de l''Atlantique avec des instructeurs certifiés.',
    'Learn to surf Atlantic waves with certified instructors.',
    'Surf sur la côte atlantique',
    120, 300.00, '$$', '22222222-2222-2222-2222-222222222222',
    '/images/activities/surf.jpg',
    true, true
  );

-- Famille & Enfants (Family & Kids)
INSERT INTO activities (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, duration_minutes, price_from, price_range, location_id, main_image, is_featured, is_published) VALUES
  (
    'activite-famille-1',
    'famille-enfants',
    'Parc Sindibad',
    'Sindibad Park',
    'متنزه سندباد',
    'Le plus grand parc d''attractions de la ville avec manèges pour tous les âges.',
    'The city''s largest amusement park with rides for all ages.',
    'Parc d''attractions familial',
    240, 150.00, '$$', '22222222-2222-2222-2222-222222222222',
    '/images/activities/sindibad.jpg',
    false, true
  );

-- Shopping
INSERT INTO activities (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, duration_minutes, price_from, price_range, location_id, main_image, is_featured, is_published) VALUES
  (
    'activite-shopping-1',
    'shopping',
    'Morocco Mall',
    'Morocco Mall',
    'موروكو مول',
    'Le plus grand centre commercial d''Afrique avec aquarium géant et fontaine musicale.',
    'Africa''s largest mall with giant aquarium and musical fountain.',
    'Shopping dans le plus grand mall d''Afrique',
    180, 0.00, '$', '22222222-2222-2222-2222-222222222222',
    '/images/activities/morocco-mall.jpg',
    true, true
  );

-- =====================================================
-- 4. MANGER & SORTIR (Venues by Category)
-- =====================================================

-- Restaurants
INSERT INTO venues (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, cuisine_types, price_range, average_price, location_id, main_image, is_featured, is_published, is_halal) VALUES
  (
    'restaurant-exemple-1',
    'restaurants',
    'Restaurant La Sqala',
    'La Sqala Restaurant',
    'مطعم السقالة',
    'Restaurant dans un ancien bastion portugais, cuisine marocaine raffinée.',
    'Restaurant in a former Portuguese bastion, refined Moroccan cuisine.',
    'Cuisine marocaine dans un cadre historique',
    ARRAY['moroccan', 'mediterranean'], '$$$', 350.00, '11111111-1111-1111-1111-111111111111',
    '/images/venues/restaurant-1.jpg',
    true, true, true
  ),
  (
    'restaurant-exemple-2',
    'restaurants',
    'Le Cabestan',
    'Le Cabestan',
    'الكابستان',
    'Restaurant gastronomique avec vue sur l''océan Atlantique.',
    'Gastronomic restaurant with Atlantic Ocean views.',
    'Gastronomie française face à l''océan',
    ARRAY['french', 'seafood'], '$$$$', 600.00, '22222222-2222-2222-2222-222222222222',
    '/images/venues/restaurant-2.jpg',
    true, true, false
  ),
  (
    'restaurant-exemple-3',
    'restaurants',
    'Rick''s Café',
    'Rick''s Café',
    'مقهى ريك',
    'Café-restaurant inspiré du film Casablanca, ambiance rétro.',
    'Café-restaurant inspired by the film Casablanca, retro atmosphere.',
    'Ambiance rétro inspirée du film Casablanca',
    ARRAY['international', 'mediterranean'], '$$$', 400.00, '11111111-1111-1111-1111-111111111111',
    '/images/venues/restaurant-3.jpg',
    false, true, false
  );

-- Bars & Nightlife
INSERT INTO venues (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, cuisine_types, price_range, average_price, location_id, main_image, is_featured, is_published, is_halal) VALUES
  (
    'bar-exemple-1',
    'bars-nightlife',
    'Sky Bar Rooftop',
    'Sky Bar Rooftop',
    'سكاي بار',
    'Bar rooftop avec vue panoramique sur la ville et l''océan.',
    'Rooftop bar with panoramic views of the city and ocean.',
    'Bar rooftop avec vue panoramique',
    ARRAY['cocktails', 'tapas'], '$$$', 250.00, '11111111-1111-1111-1111-111111111111',
    '/images/venues/bar-1.jpg',
    true, true, false
  );

-- Centres Commerciaux (Shopping Malls)
INSERT INTO venues (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, price_range, location_id, main_image, is_featured, is_published, is_halal) VALUES
  (
    'mall-exemple-1',
    'centres-commerciaux',
    'Anfa Place',
    'Anfa Place',
    'أنفا بلايس',
    'Centre commercial moderne avec boutiques de luxe et vue sur l''océan.',
    'Modern shopping center with luxury boutiques and ocean views.',
    'Shopping de luxe face à l''océan',
    '$$$', '22222222-2222-2222-2222-222222222222',
    '/images/venues/mall-1.jpg',
    false, true, true
  );

-- Souks & Artisanat (Markets & Crafts)
INSERT INTO venues (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, price_range, location_id, main_image, is_featured, is_published, is_halal) VALUES
  (
    'souk-exemple-1',
    'souks-artisanat',
    'Souk Habous',
    'Habous Souk',
    'سوق الحبوس',
    'Marché traditionnel avec artisanat, épices et pâtisseries marocaines.',
    'Traditional market with crafts, spices and Moroccan pastries.',
    'Marché traditionnel et artisanat',
    '$', '33333333-3333-3333-3333-333333333333',
    '/images/venues/souk-1.jpg',
    true, true, true
  );

-- =====================================================
-- 5. ÉVÉNEMENTS (Events by Category)
-- =====================================================

-- Concerts & Spectacles
INSERT INTO events (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, start_date, end_date, is_free, price_from, price_to, venue_name_fr, main_image, is_featured, is_published) VALUES
  (
    'concert-exemple-1',
    'concerts-spectacles',
    'Concert Exemple',
    'Example Concert',
    'حفل موسيقي مثال',
    'Description du concert avec les artistes et le programme.',
    'Concert description with artists and program.',
    'Concert live au cœur de la ville',
    '2025-03-15 20:00:00+01', '2025-03-15 23:00:00+01',
    false, 200.00, 500.00, 'Salle Exemple',
    '/images/events/concert-1.jpg',
    true, true
  );

-- Expositions & Galeries
INSERT INTO events (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, start_date, end_date, is_free, venue_name_fr, main_image, is_featured, is_published) VALUES
  (
    'expo-exemple-1',
    'expositions-galeries',
    'Exposition Art Contemporain',
    'Contemporary Art Exhibition',
    'معرض الفن المعاصر',
    'Exposition présentant des œuvres d''artistes contemporains.',
    'Exhibition featuring works by contemporary artists.',
    'Art contemporain marocain',
    '2025-02-01 10:00:00+01', '2025-04-30 18:00:00+01',
    true, 'Villa des Arts',
    '/images/events/expo-1.jpg',
    false, true
  );

-- Festivals
INSERT INTO events (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, start_date, end_date, is_free, price_from, price_to, venue_name_fr, main_image, is_featured, is_published) VALUES
  (
    'festival-exemple-1',
    'festivals',
    'Festival Jazzablanca',
    'Jazzablanca Festival',
    'مهرجان جازابلانكا',
    'Le plus grand festival de jazz d''Afrique avec artistes internationaux.',
    'Africa''s largest jazz festival with international artists.',
    'Festival de jazz international',
    '2025-06-20 19:00:00+01', '2025-06-23 23:00:00+01',
    false, 350.00, 1500.00, 'Anfa Park',
    '/images/events/festival-1.jpg',
    true, true
  );

-- Événements Sportifs
INSERT INTO events (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, start_date, is_free, price_from, price_to, venue_name_fr, main_image, is_featured, is_published) VALUES
  (
    'sport-exemple-1',
    'evenements-sportifs',
    'Match de Football',
    'Football Match',
    'مباراة كرة قدم',
    'Match de championnat au Complexe Mohammed V.',
    'Championship match at Mohammed V Complex.',
    'Football au Complexe Mohammed V',
    '2025-02-20 20:00:00+01',
    false, 100.00, 500.00, 'Complexe Mohammed V',
    '/images/events/football-1.jpg',
    true, true
  );

-- Foires & Salons
INSERT INTO events (slug, category, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, start_date, end_date, is_free, price_from, venue_name_fr, main_image, is_featured, is_published) VALUES
  (
    'salon-exemple-1',
    'foires-salons',
    'Salon de l''Auto',
    'Auto Show',
    'معرض السيارات',
    'Salon automobile présentant les dernières innovations.',
    'Auto show featuring the latest innovations.',
    'Nouveautés automobiles',
    '2025-04-10 10:00:00+01', '2025-04-20 20:00:00+01',
    false, 50.00, 'OFEC',
    '/images/events/salon-1.jpg',
    false, true
  );

-- =====================================================
-- 6. VISITER (Visit Packages)
-- =====================================================

-- Individuels
INSERT INTO visit_packages (slug, type, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, includes_fr, includes_en, duration_minutes, price_per_person, main_image, is_featured, is_published) VALUES
  (
    'visite-individuel-1',
    'individuels',
    'Visite Guidée Complète',
    'Complete Guided Tour',
    'جولة سياحية كاملة',
    'Découvrez Casablanca avec un guide professionnel.',
    'Discover Casablanca with a professional guide.',
    'Visite complète de la ville',
    ARRAY['Guide multilingue', 'Transport', 'Entrées monuments', 'Déjeuner'],
    ARRAY['Multilingual guide', 'Transport', 'Monument entries', 'Lunch'],
    300, 450.00,
    '/images/visits/individual-1.jpg',
    true, true
  );

-- Groupes
INSERT INTO visit_packages (slug, type, name_fr, name_en, name_ar, description_fr, description_en, short_description_fr, includes_fr, includes_en, duration_minutes, min_participants, max_participants, group_price, main_image, is_featured, is_published) VALUES
  (
    'visite-groupe-1',
    'groupes',
    'Visite Groupe Entreprise',
    'Corporate Group Tour',
    'جولة جماعية للشركات',
    'Visite personnalisée pour groupes d''entreprise.',
    'Customized tour for corporate groups.',
    'Visite pour entreprises',
    ARRAY['Guide dédié', 'Programme sur mesure', 'Pause café', 'Transport privé'],
    ARRAY['Dedicated guide', 'Custom program', 'Coffee break', 'Private transport'],
    480, 10, 50, 5000.00,
    '/images/visits/group-1.jpg',
    true, true
  );

-- =====================================================
-- 7. EXAMPLE IMAGES (Multiple per item)
-- =====================================================

-- Hotel images
INSERT INTO images (url, alt_fr, alt_en, entity_type, entity_id, display_order, is_main) VALUES
  ('/images/accommodations/hotel-1-lobby.jpg', 'Lobby de l''hôtel', 'Hotel Lobby', 'accommodation', (SELECT id FROM accommodations WHERE slug = 'hotel-example-luxury'), 1, false),
  ('/images/accommodations/hotel-1-room.jpg', 'Chambre de l''hôtel', 'Hotel Room', 'accommodation', (SELECT id FROM accommodations WHERE slug = 'hotel-example-luxury'), 2, false),
  ('/images/accommodations/hotel-1-pool.jpg', 'Piscine de l''hôtel', 'Hotel Pool', 'accommodation', (SELECT id FROM accommodations WHERE slug = 'hotel-example-luxury'), 3, false);

-- Restaurant images
INSERT INTO images (url, alt_fr, alt_en, entity_type, entity_id, display_order, is_main) VALUES
  ('/images/venues/restaurant-1-interior.jpg', 'Intérieur du restaurant', 'Restaurant Interior', 'venue', (SELECT id FROM venues WHERE slug = 'restaurant-exemple-1'), 1, false),
  ('/images/venues/restaurant-1-food.jpg', 'Plat signature', 'Signature Dish', 'venue', (SELECT id FROM venues WHERE slug = 'restaurant-exemple-1'), 2, false);

-- =====================================================
-- DONE! Your database now has example data
-- =====================================================
