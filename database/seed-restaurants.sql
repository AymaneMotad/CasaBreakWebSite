-- =====================================================
-- RESTAURANTS & CAFÉS SEED DATA
-- Source: https://visitcasablanca.ma/pois/?cities%5B%5D=89&thematiques%5B%5D=83
-- Run this in Supabase SQL Editor
-- =====================================================

-- Clear existing restaurants (optional - comment out if you want to keep existing)
-- DELETE FROM venues WHERE category = 'restaurants';

INSERT INTO venues (
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
-- Costa Coffee locations
(
  'costa-coffee-anfaplace-mall',
  'restaurants',
  'Costa Coffee-Anfaplace Mall',
  'Costa Coffee-Anfaplace Mall',
  'Costa Coffee au Anfa Place à Casablanca est un café moderne où vous pouvez déguster une large sélection de cafés, boissons chaudes et froides, ainsi que des pâtisseries dans un cadre contemporain.',
  'Costa Coffee au Anfa Place à Casablanca est un café moderne où vous pouvez déguster une large sélection de cafés.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/costa-coffee-anfaplace.jpg',
  false,
  true
),
(
  'costa-coffee-marina-mall',
  'restaurants',
  'Costa Coffee-Marina Mall',
  'Costa Coffee-Marina Mall',
  'Costa Coffee au Marina Mall à Casablanca est un café moderne où vous pouvez déguster une large sélection de cafés, boissons chaudes et froides, ainsi que des pâtisseries.',
  'Costa Coffee au Marina Mall à Casablanca est un café moderne.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/costa-coffee-marina.jpg',
  false,
  true
),
(
  'costa-coffee-casa-voyageurs',
  'restaurants',
  'Costa Coffee-Casa Voyageurs',
  'Costa Coffee-Casa Voyageurs',
  'Costa Coffee à la gare Casa Voyageurs à Casablanca est un café moderne où vous pouvez déguster une large sélection de cafés, boissons chaudes et froides.',
  'Costa Coffee à la gare Casa Voyageurs.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/costa-coffee-voyageurs.jpg',
  false,
  true
),
-- Café de France
(
  'cafe-de-france',
  'restaurants',
  'Café de France',
  'Café de France',
  'Le Café de France à Casablanca est un établissement emblématique offrant des cafés de qualité, des pâtisseries exquises et des repas légers dans un cadre historique et chaleureux.',
  'Le Café de France à Casablanca est un établissement emblématique offrant des cafés de qualité.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/cafe-de-france.jpg',
  true,
  true
),
-- Bondi Coffee Kitchen
(
  'bondi-coffee-kitchen',
  'restaurants',
  'Bondi Coffee Kitchen',
  'Bondi Coffee Kitchen',
  'Bondi Coffee Kitchen à Casablanca est un café-restaurant moderne inspiré par Bondi Beach, offrant des cafés de qualité et des plats sains dans une ambiance décontractée.',
  'Bondi Coffee Kitchen est un café-restaurant moderne inspiré par Bondi Beach.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/bondi-coffee.jpg',
  true,
  true
),
-- Belati Coffee
(
  'belati-coffee',
  'restaurants',
  'Belati Coffee',
  'Belati Coffee',
  'Belati Coffee à Casablanca est un café élégant offrant une variété de cafés et boissons dans un cadre moderne et accueillant.',
  'Belati Coffee à Casablanca est un café élégant offrant une variété de cafés.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/belati-coffee.jpg',
  false,
  true
),
-- Dunkin Donuts locations
(
  'dunkin-donuts-rte-el-jadida',
  'restaurants',
  'Dunkin Donuts - Rte d''El Jadida',
  'Dunkin Donuts - El Jadida Road',
  'Dunkin'' Donuts à Casablanca est célèbre pour ses donuts artisanaux et son café fraîchement préparé. Avec une atmosphère chaleureuse et un service rapide.',
  'Dunkin'' Donuts à Casablanca est célèbre pour ses donuts artisanaux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/dunkin-donuts.jpg',
  false,
  true
),
(
  'dunkin-donuts-michel-ange',
  'restaurants',
  'Dunkin Donuts-Michel Ange',
  'Dunkin Donuts-Michel Ange',
  'Dunkin'' Donuts à Casablanca est célèbre pour ses donuts artisanaux et son café fraîchement préparé. Avec une atmosphère chaleureuse et un service rapide.',
  'Dunkin'' Donuts à Casablanca est célèbre pour ses donuts artisanaux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/dunkin-donuts.jpg',
  false,
  true
),
(
  'dunkin-donuts-ghandi',
  'restaurants',
  'Dunkin Donuts-Ghandi',
  'Dunkin Donuts-Ghandi',
  'Dunkin'' Donuts à Casablanca est célèbre pour ses donuts artisanaux et son café fraîchement préparé. Avec une atmosphère chaleureuse et un service rapide.',
  'Dunkin'' Donuts à Casablanca est célèbre pour ses donuts artisanaux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/dunkin-donuts.jpg',
  false,
  true
),
(
  'dunkin-donuts-area-mall',
  'restaurants',
  'Dunkin Donuts-Area Mall',
  'Dunkin Donuts-Area Mall',
  'Dunkin'' Donuts à Casablanca est célèbre pour ses donuts artisanaux et son café fraîchement préparé. Avec une atmosphère chaleureuse et un service rapide.',
  'Dunkin'' Donuts à Casablanca est célèbre pour ses donuts artisanaux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/dunkin-donuts.jpg',
  false,
  true
),
-- Dream Donuts & Coffee
(
  'dream-donuts-coffee',
  'restaurants',
  'Dream Donuts & Coffee',
  'Dream Donuts & Coffee',
  'Dream Donuts & Coffee, situé en plein centre-ville, est un café gourmand réputé pour ses donuts artisanaux aux saveurs variées et son café de qualité.',
  'Dream Donuts & Coffee est un café gourmand réputé pour ses donuts artisanaux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/dream-donuts.jpg',
  false,
  true
),
-- Bex Coffee
(
  'bex-coffee',
  'restaurants',
  'Bex',
  'Bex',
  'Bex Coffee est un café branché à Casablanca, situé au croisement du boulevard d''Anfa et de la rue Michel Ange. Un lieu tendance pour les amateurs de café.',
  'Bex Coffee est un café branché à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/bex-coffee.jpg',
  true,
  true
),
-- Room 21
(
  'room-21',
  'restaurants',
  'Room 21',
  'Room 21',
  'Room 21 est un café moderne et convivial, situé en plein cœur de la ville. Ses murs en briques apparentes créent une ambiance chaleureuse et industrielle.',
  'Room 21 est un café moderne et convivial.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/room-21.jpg',
  true,
  true
),
-- Gapi Villa
(
  'gapi-villa',
  'restaurants',
  'Gapi Villa',
  'Gapi Villa',
  'Gapi Villa à Casablanca est un café-restaurant élégant offrant des plats raffinés pour les petits-déjeuners, déjeuners et dîners, dans un cadre sophistiqué.',
  'Gapi Villa est un café-restaurant élégant.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/gapi-villa.jpg',
  true,
  true
),
-- Les Soeurettes
(
  'les-soeurettes',
  'restaurants',
  'Les Soeurettes',
  'Les Soeurettes',
  'Les Soeurettes à Casablanca est un café-restaurant chaleureux offrant des plats faits maison pour les petits-déjeuners, déjeuners et dîners, dans un cadre convivial.',
  'Les Soeurettes est un café-restaurant chaleureux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/les-soeurettes.jpg',
  true,
  true
),
-- Boca Chica
(
  'boca-chica',
  'restaurants',
  'Boca Chica',
  'Boca Chica',
  'Boca Chica à Casablanca est un café-restaurant élégant offrant une gamme de plats raffinés pour les petits-déjeuners, déjeuners et dîners.',
  'Boca Chica est un café-restaurant élégant.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/boca-chica.jpg',
  false,
  true
),
-- Le Gatsby
(
  'le-gatsby',
  'restaurants',
  'Le Gatsby',
  'Le Gatsby',
  'Le Gatsby à Casablanca est un café-restaurant élégant offrant une gamme de plats raffinés pour les petits-déjeuners, déjeuners et dîners, dans un cadre inspiré des années folles.',
  'Le Gatsby est un café-restaurant élégant inspiré des années folles.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/le-gatsby.jpg',
  true,
  true
),
-- Le Duo
(
  'le-duo-cafe-restaurant',
  'restaurants',
  'Le Duo café et restaurant',
  'Le Duo café et restaurant',
  'Le Duo à Casablanca est un café-restaurant moderne offrant une variété de plats allant des petits-déjeuners aux dîners raffinés, dans un cadre contemporain.',
  'Le Duo est un café-restaurant moderne.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/le-duo.jpg',
  false,
  true
),
-- Papers Club
(
  'papers-club',
  'restaurants',
  'Papers Club',
  'Papers Club',
  'Papers Club à Casablanca, situé en face du stade Mohammed V, est un café culturel offrant un programme varié incluant des événements artistiques et des concerts.',
  'Papers Club est un café culturel situé en face du stade Mohammed V.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/papers-club.jpg',
  true,
  true
),
-- Le Blitz
(
  'le-blitz',
  'restaurants',
  'Le Blitz',
  'Le Blitz',
  'Le Blitz à Casablanca offre une expérience caféinée créative avec des cafés de spécialité, des plats innovants, et un décor moderne et branché.',
  'Le Blitz offre une expérience caféinée créative.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/le-blitz.jpg',
  true,
  true
),
-- Amistad
(
  'amistad',
  'restaurants',
  'Amistad',
  'Amistad',
  'Amistad à Casablanca est un café chaleureux offrant une sélection de cafés, thés, pâtisseries et snacks, dans un cadre moderne et accueillant.',
  'Amistad est un café chaleureux offrant une sélection de cafés et pâtisseries.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/amistad.jpg',
  false,
  true
),
-- Starbucks
(
  'starbucks-casablanca',
  'restaurants',
  'Starbucks',
  'Starbucks',
  'Starbucks Casablanca propose une large gamme de boissons à base de café, pâtisseries, et snacks, dans un cadre moderne et confortable.',
  'Starbucks Casablanca propose une large gamme de boissons à base de café.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/starbucks.jpg',
  false,
  true
),
-- EspressoLab
(
  'espressolab',
  'restaurants',
  'EspressoLab',
  'EspressoLab',
  'EspressoLab à Casablanca est un café spécialisé dans l''art de l''espresso, offrant une gamme variée de cafés de qualité et de boissons chaudes.',
  'EspressoLab est un café spécialisé dans l''art de l''espresso.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/espressolab.jpg',
  false,
  true
),
-- Arabica locations
(
  'arabica-twin-center',
  'restaurants',
  'Arabica-Twin Center',
  'Arabica-Twin Center',
  'Arabica à Casablanca est un café élégant offrant une variété de cafés de haute qualité et de pâtisseries fraîches, dans un cadre minimaliste japonais.',
  'Arabica est un café élégant offrant une variété de cafés de haute qualité.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/arabica.jpg',
  true,
  true
),
(
  'arabica-bd-anfa',
  'restaurants',
  'Arabica-Bd d''Anfa',
  'Arabica-Bd d''Anfa',
  'Arabica à Casablanca est un café élégant offrant une variété de cafés de haute qualité et de pâtisseries fraîches, dans un cadre minimaliste japonais.',
  'Arabica est un café élégant offrant une variété de cafés de haute qualité.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/arabica.jpg',
  false,
  true
),
-- Villa Bianca
(
  'villa-bianca',
  'restaurants',
  'Villa Bianca',
  'Villa Bianca',
  'Le Café Bianca à l''hôtel Villa Blanca à Casablanca offre des petits-déjeuners copieux, des déjeuners italiens, des cafés gourmands, et une ambiance élégante.',
  'Le Café Bianca à l''hôtel Villa Blanca offre des petits-déjeuners copieux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/villa-bianca.jpg',
  true,
  true
),
-- Paul locations
(
  'paul-route-el-jadida',
  'restaurants',
  'Paul-Route d''El Jadida',
  'Paul-El Jadida Road',
  'Paul à Casablanca offre une cuisine variée dans un cadre élégant et chaleureux, avec des pâtisseries fraîches, plats de brasserie et une ambiance française authentique.',
  'Paul à Casablanca offre une cuisine variée dans un cadre élégant.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/paul.jpg',
  false,
  true
),
(
  'paul-anfaplace',
  'restaurants',
  'Paul-AnfaPlace',
  'Paul-AnfaPlace',
  'Paul à Casablanca offre une cuisine variée dans un cadre élégant et chaleureux, avec des pâtisseries fraîches, plats de brasserie et une ambiance française authentique.',
  'Paul à Casablanca offre une cuisine variée dans un cadre élégant.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/paul.jpg',
  false,
  true
),
(
  'paul-aeria-mall',
  'restaurants',
  'Paul-Aeria Mall',
  'Paul-Aeria Mall',
  'Paul à Casablanca offre une cuisine variée dans un cadre élégant et chaleureux, avec des pâtisseries fraîches, plats de brasserie et une ambiance française authentique.',
  'Paul à Casablanca offre une cuisine variée dans un cadre élégant.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/paul.jpg',
  false,
  true
),
-- Cézanne
(
  'cezanne',
  'restaurants',
  'Cézanne',
  'Cézanne',
  'Cézanne à Casablanca propose une cuisine raffinée dans un cadre élégant, offrant des plats de qualité allant des classiques français aux créations contemporaines.',
  'Cézanne propose une cuisine raffinée dans un cadre élégant.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/cezanne.jpg',
  true,
  true
),
-- Demoiselle
(
  'demoiselle',
  'restaurants',
  'Demoiselle',
  'Demoiselle',
  'Demoiselle à Casablanca est un café-restaurant sophistiqué et chaleureux, proposant une cuisine variée allant des plats marocains aux internationaux.',
  'Demoiselle est un café-restaurant sophistiqué et chaleureux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/demoiselle.jpg',
  false,
  true
),
-- Venezia Ice
(
  'venezia-ice',
  'restaurants',
  'Venezia Ice',
  'Venezia Ice',
  'Venezia Ice à Casablanca propose des glaces artisanales, sorbets et desserts glacés dans un cadre moderne et accueillant.',
  'Venezia Ice propose des glaces artisanales et sorbets.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/venezia-ice.jpg',
  false,
  true
),
-- Le Vendome
(
  'le-vendome',
  'restaurants',
  'Le Vendome',
  'Le Vendome',
  'Le Vendôme à Casablanca offre un brunch quotidien dans un cadre lumineux et élégant, avec des omelettes, pancakes, pains frais et bien plus.',
  'Le Vendôme offre un brunch quotidien dans un cadre lumineux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/le-vendome.jpg',
  true,
  true
),
-- Marina Juice
(
  'marina-juice',
  'restaurants',
  'Marina Juice',
  'Marina Juice',
  'Marina Juice à Casablanca offre une sélection de jus de fruits frais, smoothies et snacks légers dans un cadre moderne et décontracté.',
  'Marina Juice offre une sélection de jus de fruits frais et smoothies.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/marina-juice.jpg',
  false,
  true
),
-- Le Marly
(
  'le-marly',
  'restaurants',
  'Le Marly',
  'Le Marly',
  'Le Marly à Casablanca propose une sélection variée de cafés, thés, et autres boissons, avec des petits-déjeuners, déjeuners légers, et pâtisseries.',
  'Le Marly propose une sélection variée de cafés et thés.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/le-marly.jpg',
  false,
  true
),
-- Amande et Miel
(
  'amande-et-miel',
  'restaurants',
  'Amande et miel',
  'Amande et miel',
  'Amande et Miel à Casablanca est un café élégant spécialisé dans les pâtisseries à base d''amandes et de miel, offrant une expérience gourmande unique.',
  'Amande et Miel est un café élégant spécialisé dans les pâtisseries.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/amande-miel.jpg',
  false,
  true
),
-- Dip'n'Dip locations
(
  'dipndip-morocco-mall',
  'restaurants',
  'dipndip Morocco Mall',
  'dipndip Morocco Mall',
  'Dip''n''Dip à Casablanca est un café dédié aux créations chocolatées, offrant fondues, crêpes et gaufres dans un cadre moderne et gourmand.',
  'Dip''n''Dip est un café dédié aux créations chocolatées.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/dipndip.jpg',
  false,
  true
),
(
  'dipndip-urban-square',
  'restaurants',
  'dipndip-Urban Square',
  'dipndip-Urban Square',
  'Dip''n''Dip à Casablanca est un café dédié aux créations chocolatées, offrant fondues, crêpes et gaufres dans un cadre moderne et gourmand.',
  'Dip''n''Dip est un café dédié aux créations chocolatées.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/dipndip.jpg',
  false,
  true
),
-- Sforza Visconti
(
  'sforza-visconti',
  'restaurants',
  'Sforza Visconti',
  'Sforza Visconti',
  'Sforza Visconti à Casablanca propose une cuisine italienne contemporaine dans un cadre élégant, offrant une expérience gastronomique raffinée.',
  'Sforza Visconti propose une cuisine italienne contemporaine.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/sforza-visconti.jpg',
  true,
  true
),
-- Milk + Honey
(
  'milk-honey',
  'restaurants',
  'Milk + Honey',
  'Milk + Honey',
  'Milk + Honey à Casablanca offre une sélection de boissons artisanales et de pâtisseries maison dans un cadre élégant et accueillant.',
  'Milk + Honey offre une sélection de boissons artisanales.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/milk-honey.jpg',
  false,
  true
),
-- Le Balthazar
(
  'le-balthazar',
  'restaurants',
  'Le Balthazar',
  'Le Balthazar',
  'Le Balthazar à Casablanca propose une cuisine française moderne avec des touches internationales dans un cadre élégant et confortable.',
  'Le Balthazar propose une cuisine française moderne.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/le-balthazar.jpg',
  true,
  true
),
-- Dupond locations
(
  'dupond-bd-ghandi',
  'restaurants',
  'Dupond-Bd de Ghandi angle Bd Ibnou Sina',
  'Dupond-Bd de Ghandi',
  'Le Café Dupond à Casablanca propose une expérience gourmande avec ses gaufres, crêpes, pancakes, et glaces artisanales, dans un cadre chaleureux.',
  'Le Café Dupond propose une expérience gourmande avec ses gaufres et crêpes.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/dupond.jpg',
  false,
  true
),
(
  'dupond-marina-mall',
  'restaurants',
  'Dupond-Marina Mall',
  'Dupond-Marina Mall',
  'Le Café Dupond à Casablanca propose une expérience gourmande avec ses gaufres, crêpes, pancakes, et glaces artisanales, dans un cadre chaleureux.',
  'Le Café Dupond propose une expérience gourmande avec ses gaufres et crêpes.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/dupond.jpg',
  false,
  true
),
(
  'dupond-morocco-mall',
  'restaurants',
  'Dupond-Morocco Mall',
  'Dupond-Morocco Mall',
  'Le Café Dupond à Casablanca propose une expérience gourmande avec ses gaufres, crêpes, pancakes, et glaces artisanales, dans un cadre chaleureux.',
  'Le Café Dupond propose une expérience gourmande avec ses gaufres et crêpes.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250709102231/dupond.jpg',
  false,
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
SELECT COUNT(*) as total_restaurants FROM venues WHERE category = 'restaurants';

