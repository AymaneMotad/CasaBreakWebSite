-- =====================================================
-- SPORT & BIEN-ÊTRE SEED DATA
-- Source: https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=48
-- Run this in Supabase SQL Editor
-- =====================================================

-- First add the category if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumtypid = (SELECT oid FROM pg_type WHERE typname = 'activity_category') 
        AND enumlabel = 'sport-bien-etre'
    ) THEN
        ALTER TYPE activity_category ADD VALUE 'sport-bien-etre';
    END IF;
END
$$;

-- Wait for the enum to be available
COMMIT;

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
-- City Club Casablanca
(
  'city-club-casablanca',
  'sport-bien-etre',
  'City Club Casablanca',
  'City Club Casablanca',
  'City Club offre une expérience de fitness complète dans un cadre urbain élégant, avec des installations spacieuses et des équipements de pointe.',
  'City Club offre une expérience de fitness complète.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250423212633/maxresdefault.jpg',
  true,
  true
),
-- Sindibad Karting
(
  'sindibad-karting',
  'sport-bien-etre',
  'Sindibad Karting',
  'Sindibad Karting',
  'Sindibad Karting est un karting dernière génération. Idéal pour les amateurs de vitesse et de sensations fortes, pour les test-drives et les compétitions.',
  'Sindibad Karting est un karting dernière génération.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240911112828/KARTING_SINDIBAD-scaled.jpg',
  true,
  true
),
-- S Antalya Spa
(
  's-antalya-spa',
  'sport-bien-etre',
  'S Antalya',
  'S Antalya',
  'S Antalya à Casablanca est un spa de luxe offrant une expérience sensorielle unique avec massages, soins du visage, gommages et hammam traditionnel.',
  'S Antalya est un spa de luxe offrant une expérience sensorielle unique.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250715095048/S-Antalya-Casablanca-S-Antalya.jpg',
  true,
  true
),
-- Unique Fitness-Californie
(
  'unique-fitness-californie',
  'sport-bien-etre',
  'Unique Fitness-Californie',
  'Unique Fitness-Californie',
  'Unique Fitness à Casablanca offre des installations modernes et un équipement de pointe, avec des cours collectifs tels que yoga, pilates et spinning.',
  'Unique Fitness offre des installations modernes et un équipement de pointe.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240819083808/cali_sport.jpg',
  false,
  true
),
-- Passage Fitness Morocco Mall
(
  'passage-fitness-morocco-mall',
  'sport-bien-etre',
  'Passage Fitness Morocco Mall',
  'Passage Fitness Morocco Mall',
  'Passage Fitness offre une atmosphère accueillante avec des équipements de pointe et une variété d''options de fitness, comme le spinning, le yoga et la musculation.',
  'Passage Fitness offre une atmosphère accueillante avec des équipements de pointe.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240816101459/Passage-Fitness-Morocco-Mall.jpg',
  true,
  true
),
-- Passage Fitness 5 étoiles
(
  'passage-fitness-5-etoiles',
  'sport-bien-etre',
  'Passage Fitness 5 étoiles',
  'Passage Fitness 5 Stars',
  'Passage Fitness offre une atmosphère accueillante avec des équipements de pointe et une variété d''options de fitness haut de gamme.',
  'Passage Fitness 5 étoiles offre des équipements haut de gamme.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240816101153/5stars.jpg',
  false,
  true
),
-- Passage Fitness Anfa Place
(
  'passage-fitness-anfa-place',
  'sport-bien-etre',
  'Passage Fitness – Anfa Place',
  'Passage Fitness – Anfa Place',
  'Passage Fitness à Anfa Place offre une atmosphère accueillante avec des équipements de pointe dans un cadre luxueux.',
  'Passage Fitness à Anfa Place offre des équipements de pointe.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240816101120/Passage-Fitness-Anfa-Place.jpg',
  false,
  true
),
-- Passage Fitness Centre
(
  'passage-fitness-centre',
  'sport-bien-etre',
  'Passage Fitness – Centre',
  'Passage Fitness – Centre',
  'Passage Fitness Centre offre une atmosphère accueillante avec des équipements de pointe au cœur de la ville.',
  'Passage Fitness Centre offre des équipements de pointe au centre-ville.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240816100958/2023-03-24.jpg',
  false,
  true
),
-- Passage Fitness Marina
(
  'passage-fitness-marina',
  'sport-bien-etre',
  'Passage Fitness Marina',
  'Passage Fitness Marina',
  'Passage Fitness Marina offre une atmosphère accueillante avec vue sur la mer et des équipements de pointe.',
  'Passage Fitness Marina offre des équipements de pointe avec vue sur la mer.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240816100720/marina.jpg',
  false,
  true
),
-- Toup'ti Gym
(
  'toupti-gym',
  'sport-bien-etre',
  'Toup''ti Gym',
  'Toup''ti Gym',
  'Toup''Ti Gym est un centre dédié aux enfants et familles, proposant des cours ludiques et éducatifs tels que la gymnastique, la danse et les activités motrices.',
  'Toup''Ti Gym est un centre dédié aux enfants et familles.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508134518/Toupti-Gym.jpg',
  true,
  true
),
-- Campus Sport
(
  'campus-sport',
  'sport-bien-etre',
  'Campus Sport',
  'Campus Sport',
  'Campus Sport, situé près des campus universitaires, est parfait pour les étudiants et jeunes professionnels avec ses tarifs avantageux et ses équipements modernes.',
  'Campus Sport est parfait pour les étudiants avec des tarifs avantageux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508104211/Campus-Sport-1.jpg',
  false,
  true
),
-- Top Forme
(
  'top-forme',
  'sport-bien-etre',
  'Top Forme',
  'Top Forme',
  'Top Forme est le centre de fitness idéal pour l''excellence, offrant des équipements haut de gamme et une gamme étendue de cours collectifs.',
  'Top Forme est le centre de fitness idéal pour l''excellence.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508134623/Top-Forme-1.jpg',
  true,
  true
),
-- Sport Plazza
(
  'sport-plazza',
  'sport-bien-etre',
  'Sport Plazza',
  'Sport Plazza',
  'Sport Plazza offre une approche holistique du bien-être avec une variété d''activités alliant musculation, yoga et cours collectifs dans des installations modernes.',
  'Sport Plazza offre une approche holistique du bien-être.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508104634/Sport-Plazza.jpg',
  true,
  true
),
-- Gym Factory
(
  'gym-factory',
  'sport-bien-etre',
  'Gym Factory',
  'Gym Factory',
  'Gym Factory est une salle de sport moderne à Casablanca offrant des équipements de qualité et une ambiance motivante pour vos entraînements.',
  'Gym Factory est une salle de sport moderne à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508104841/Gym-Factory.jpg',
  false,
  true
),
-- Flow Cycle
(
  'flow-cycle',
  'sport-bien-etre',
  'Flow Cycle',
  'Flow Cycle',
  'Flow Cycle est un studio de spinning haut de gamme à Casablanca, offrant des cours de cycling dans une ambiance immersive.',
  'Flow Cycle est un studio de spinning haut de gamme.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508105436/Flow-Cycle.jpg',
  false,
  true
),
-- Eko Bootcamp
(
  'eko-bootcamp',
  'sport-bien-etre',
  'Eko Bootcamp',
  'Eko Bootcamp',
  'Eko Bootcamp propose des entraînements intensifs en plein air à Casablanca, idéal pour ceux qui recherchent un challenge sportif.',
  'Eko Bootcamp propose des entraînements intensifs en plein air.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508105112/Eko-Bootcamp.jpg',
  false,
  true
),
-- Casa Crossfit Anfa
(
  'casa-crossfit-anfa',
  'sport-bien-etre',
  'Casa Crossfit Anfa',
  'Casa Crossfit Anfa',
  'Casa Crossfit Anfa est une box de CrossFit à Casablanca offrant des entraînements fonctionnels variés et intenses.',
  'Casa Crossfit Anfa est une box de CrossFit à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508105255/Casa-Crossfit-Anfa.jpg',
  false,
  true
),
-- Pilates by Monica
(
  'pilates-by-monica',
  'sport-bien-etre',
  'Pilates by Monica',
  'Pilates by Monica',
  'Pilates by Monica est un studio de pilates à Casablanca proposant des cours personnalisés pour tous les niveaux.',
  'Pilates by Monica est un studio de pilates à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508105802/Pilates-by-Monica.jpg',
  false,
  true
),
-- Spa Four Seasons
(
  'spa-four-seasons',
  'sport-bien-etre',
  'Le Spa At Four Seasons',
  'Le Spa At Four Seasons',
  'Le Spa du Four Seasons à Casablanca offre une expérience de bien-être luxueuse avec des soins exclusifs et un cadre somptueux.',
  'Le Spa du Four Seasons offre une expérience de bien-être luxueuse.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508112202/Le-Spa-At-Four-Seasons.jpg',
  true,
  true
),
-- Balm Spa
(
  'balm-spa',
  'sport-bien-etre',
  'Balm Spa Casablanca',
  'Balm Spa Casablanca',
  'Balm Spa à Casablanca propose des soins relaxants et des massages dans une ambiance zen et apaisante.',
  'Balm Spa propose des soins relaxants et des massages.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508110337/Balm-Spa-Casablanca.jpg',
  false,
  true
),
-- Casa Surfhouse
(
  'casa-surfhouse',
  'sport-bien-etre',
  'Casa Surfhouse',
  'Casa Surfhouse',
  'Casa Surfhouse est une école de surf à Casablanca proposant des cours pour tous les niveaux et la location de matériel.',
  'Casa Surfhouse est une école de surf à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508112843/Casa-Surfhouse.jpg',
  true,
  true
),
-- Padel House
(
  'padel-house',
  'sport-bien-etre',
  'Padel House',
  'Padel House',
  'Padel House est un complexe de padel à Casablanca offrant des terrains de qualité et une ambiance conviviale.',
  'Padel House est un complexe de padel à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250508113131/Padel-House-1.jpg',
  true,
  true
),
-- Aéroclub de Tit Mellil
(
  'aeroclub-tit-mellil',
  'sport-bien-etre',
  'Aéroclub de Tit Mellil',
  'Tit Mellil Aeroclub',
  'L''Aéroclub de Tit Mellil propose des baptêmes de l''air et des formations de pilotage dans les environs de Casablanca.',
  'L''Aéroclub de Tit Mellil propose des baptêmes de l''air.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220728133441/hero_poi_aeroclub-de-tit-mellil.jpg',
  true,
  true
),
-- Tamaris Bowling
(
  'tamaris-bowling',
  'sport-bien-etre',
  'Tamaris Bowling',
  'Tamaris Bowling',
  'Tamaris Bowling est un complexe de loisirs à Casablanca offrant bowling, billard et jeux d''arcade dans une ambiance familiale.',
  'Tamaris Bowling offre bowling, billard et jeux d''arcade.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220728133414/hero_poi_tamaris-bowling.jpg',
  true,
  true
)
ON CONFLICT (slug) DO UPDATE SET
  category = EXCLUDED.category,
  name_fr = EXCLUDED.name_fr,
  name_en = EXCLUDED.name_en,
  description_fr = EXCLUDED.description_fr,
  short_description_fr = EXCLUDED.short_description_fr,
  main_image = EXCLUDED.main_image,
  is_featured = EXCLUDED.is_featured,
  is_published = EXCLUDED.is_published;

-- Verify insertion
SELECT COUNT(*) as total_sport FROM activities WHERE category = 'sport-bien-etre';
