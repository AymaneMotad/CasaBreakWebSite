-- =====================================================
-- SEED ACCOMMODATIONS DATA
-- Run this in Supabase SQL Editor after schema.sql
-- =====================================================

-- Clear existing accommodations (optional, uncomment if needed)
-- DELETE FROM accommodations;

-- Insert accommodations from scraped data
INSERT INTO accommodations (
  slug,
  name_fr,
  name_en,
  description_fr,
  description_en,
  type,
  star_rating,
  price_range,
  phone,
  email,
  website,
  main_image,
  is_featured,
  is_published
) VALUES

-- LE ZENITH HOTEL & SPA
(
  'le-zenith-hotel-spa',
  'LE ZENITH HOTEL & SPA',
  'LE ZENITH HOTEL & SPA',
  'Hôtel confortable offrant un excellent rapport qualité-prix. Situé à Route El Jadida Angle 1077 Lissasfa-Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable hotel offering excellent value for money. Located at Route El Jadida Angle 1077 Lissasfa-Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$',
  '+212 5228-94949',
  'reservation@lezenithhotel.com',
  'http://lezenithhotel.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094252/hero_poi_le-zenith-hotel-spa.jpg',
  false,
  true
),

-- DOMO HOTEL
(
  'domo-hotel',
  'DOMO HOTEL',
  'DOMO HOTEL',
  'Hôtel confortable offrant un excellent rapport qualité-prix. Situé à Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable hotel offering excellent value for money. Located in Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$',
  '+212 5222-00000',
  'info@domohotel.ma',
  'https://domohotel.ma/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240722145732/domo-hotel.jpg',
  false,
  true
),

-- ROYAL MANSOUR CASABLANCA
(
  'royal-mansour-casablanca',
  'ROYAL MANSOUR CASABLANCA',
  'ROYAL MANSOUR CASABLANCA',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à 27 Avenue des Forces Armées Royales, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located at 27 Avenue des Forces Armées Royales, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5202-00100',
  'reservation.casablanca@royalmansour.com',
  'https://www.royalmansour.com/casablanca/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240722145800/royal-mansour-casablanca.jpg',
  true,
  true
),

-- MARRIOTT CASABLANCA HOTEL
(
  'marriott-casablanca-hotel',
  'MARRIOTT CASABLANCA HOTEL',
  'MARRIOTT CASABLANCA HOTEL',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à Avenue Hassan II, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located on Avenue Hassan II, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5224-34300',
  'reservations@marriottcasablanca.com',
  'https://www.marriott.com/casablanca',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094305/hero_poi_marriott-casablanca.jpg',
  true,
  true
),

-- HOTEL ODYSSEE CENTER
(
  'hotel-odyssee-center',
  'HOTEL ODYSSEE CENTER',
  'HOTEL ODYSSEE CENTER',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à Avenue Hassan II, Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located on Avenue Hassan II, Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-43000',
  'info@hotelodyssee.ma',
  'http://www.hotelodyssee.ma/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094320/hero_poi_odyssee-center.jpg',
  false,
  true
),

-- HOTEL SUISSE
(
  'hotel-suisse',
  'HOTEL SUISSE',
  'HOTEL SUISSE',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Boulevard de Paris, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located on Boulevard de Paris, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-21714',
  'contact@hotelsuisse.ma',
  'http://www.hotelsuisse.ma/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094335/hero_poi_hotel-suisse.jpg',
  false,
  true
),

-- CASABLANCA LE LIDO THALASSO & SPA
(
  'casablanca-le-lido-thalasso-spa',
  'CASABLANCA LE LIDO THALASSO & SPA',
  'CASABLANCA LE LIDO THALASSO & SPA',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à Boulevard de la Corniche, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located on Boulevard de la Corniche, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5223-91000',
  'reservation@lelido.ma',
  'http://www.lelido.ma/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094350/hero_poi_le-lido.jpg',
  true,
  true
),

-- LE PALACE D'ANFA
(
  'le-palace-d-anfa',
  'LE PALACE D''ANFA',
  'LE PALACE D''ANFA',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à Boulevard d''Anfa, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located on Boulevard d''Anfa, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5222-95000',
  'info@palacedanfa.ma',
  'http://www.palacedanfa.ma/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094405/hero_poi_palace-anfa.jpg',
  false,
  true
),

-- HOTEL IDOU ANFA & SPA
(
  'hotel-idou-anfa-spa',
  'HOTEL IDOU ANFA & SPA',
  'HOTEL IDOU ANFA & SPA',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à 85 Boulevard d''Anfa, Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located at 85 Boulevard d''Anfa, Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-00000',
  'reservation@idouanfa.ma',
  'http://www.idouanfa.ma/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094420/hero_poi_idou-anfa.jpg',
  false,
  true
),

-- BARCELO ANFA CASABLANCA
(
  'barcelo-anfa-casablanca',
  'BARCELO ANFA CASABLANCA',
  'BARCELO ANFA CASABLANCA',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à Boulevard d''Anfa, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located on Boulevard d''Anfa, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5222-90000',
  'anfa@barcelo.com',
  'https://www.barcelo.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094435/hero_poi_barcelo-anfa.jpg',
  true,
  true
),

-- KENZI SIDI MAAROUF HOTEL
(
  'kenzi-sidi-maarouf-hotel',
  'KENZI SIDI MAAROUF HOTEL',
  'KENZI SIDI MAAROUF HOTEL',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à Sidi Maarouf, Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located in Sidi Maarouf, Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-58500',
  'sidimaarouf@kenzi-hotels.com',
  'https://www.kenzi-hotels.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094450/hero_poi_kenzi-sidi-maarouf.jpg',
  false,
  true
),

-- NOVOTEL CASA CITY CENTER
(
  'novotel-casa-city-center',
  'NOVOTEL CASA CITY CENTER',
  'NOVOTEL CASA CITY CENTER',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à Avenue Hassan II, Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located on Avenue Hassan II, Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-46060',
  'h5698@accor.com',
  'https://www.novotel.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094505/hero_poi_novotel-city-center.jpg',
  false,
  true
),

-- SOFITEL CASABLANCA TOUR BLANCHE
(
  'sofitel-casablanca-tour-blanche',
  'SOFITEL CASABLANCA TOUR BLANCHE',
  'SOFITEL CASABLANCA TOUR BLANCHE',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à Avenue des FAR, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located on Avenue des FAR, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5222-40000',
  'h5865@sofitel.com',
  'https://www.sofitel.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094520/hero_poi_sofitel-tour-blanche.jpg',
  true,
  true
),

-- HOTEL FARAH CASABLANCA
(
  'hotel-farah-casablanca',
  'HOTEL FARAH CASABLANCA',
  'HOTEL FARAH CASABLANCA',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à 100 Avenue des FAR, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located at 100 Avenue des FAR, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5223-11212',
  'casablanca@farahhotels.com',
  'https://www.farahhotels.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094535/hero_poi_farah-casablanca.jpg',
  false,
  true
),

-- HYATT REGENCY CASABLANCA
(
  'hyatt-regency-casablanca',
  'HYATT REGENCY CASABLANCA',
  'HYATT REGENCY CASABLANCA',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à Place des Nations Unies, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located at Place des Nations Unies, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5224-31234',
  'casablanca.regency@hyatt.com',
  'https://www.hyatt.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094550/hero_poi_hyatt-regency.jpg',
  true,
  true
),

-- GRAND MOGADOR CITY CENTER
(
  'grand-mogador-city-center',
  'GRAND MOGADOR CITY CENTER',
  'GRAND MOGADOR CITY CENTER',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à 30 Avenue des FAR, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located at 30 Avenue des FAR, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5222-20200',
  'citycentercasa@mogadorhotels.com',
  'https://www.mogadorhotels.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094605/hero_poi_grand-mogador.jpg',
  false,
  true
),

-- KENZI TOWER HOTEL
(
  'kenzi-tower-hotel',
  'KENZI TOWER HOTEL',
  'KENZI TOWER HOTEL',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à Twin Center, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located at Twin Center, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5222-97800',
  'tower@kenzi-hotels.com',
  'https://www.kenzi-hotels.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094620/hero_poi_kenzi-tower.jpg',
  true,
  true
),

-- MOVENPICK CASABLANCA
(
  'movenpick-casablanca',
  'MOVENPICK CASABLANCA',
  'MOVENPICK CASABLANCA',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à Boulevard de la Corniche, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located on Boulevard de la Corniche, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5222-00000',
  'hotel.casablanca@movenpick.com',
  'https://www.movenpick.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094635/hero_poi_movenpick.jpg',
  false,
  true
),

-- ONOMO CASABLANCA CITY CENTER
(
  'onomo-casablanca-city-center',
  'ONOMO CASABLANCA CITY CENTER',
  'ONOMO CASABLANCA CITY CENTER',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à 8 Rue Abou Farris Al Marini, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located at 8 Rue Abou Farris Al Marini, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-63500',
  'casablanca@onomohotel.com',
  'https://www.onomohotel.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094650/hero_poi_onomo.jpg',
  false,
  true
),

-- FOUR SEASONS HOTEL CASABLANCA
(
  'four-seasons-hotel-casablanca',
  'FOUR SEASONS HOTEL CASABLANCA',
  'FOUR SEASONS HOTEL CASABLANCA',
  'Établissement de luxe 5 étoiles offrant un service exceptionnel et des prestations haut de gamme. Situé à Boulevard de la Corniche, Casablanca, cet hôtel vous garantit un séjour inoubliable avec ses chambres élégantes, ses restaurants raffinés et ses installations de bien-être.',
  'Luxury 5-star establishment offering exceptional service and premium amenities. Located on Boulevard de la Corniche, Casablanca, this hotel guarantees an unforgettable stay with elegant rooms, refined restaurants and wellness facilities.',
  'hotel',
  5,
  '$$$$',
  '+212 5229-40000',
  'reservations.cas@fourseasons.com',
  'https://www.fourseasons.com/casablanca/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094705/hero_poi_four-seasons.jpg',
  true,
  true
),

-- LE CASABLANCA HOTEL
(
  'le-casablanca-hotel',
  'LE CASABLANCA HOTEL',
  'LE CASABLANCA HOTEL',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à Boulevard de la Corniche, Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located on Boulevard de la Corniche, Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-49600',
  'info@lecasablancahotel.com',
  'http://www.lecasablancahotel.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094720/hero_poi_le-casablanca.jpg',
  false,
  true
),

-- IBIS CASABLANCA NEARSHORE
(
  'ibis-casablanca-nearshore',
  'IBIS CASABLANCA NEARSHORE',
  'IBIS CASABLANCA NEARSHORE',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Nearshore Park, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located at Nearshore Park, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-97500',
  'h7607@accor.com',
  'https://www.ibis.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094735/hero_poi_ibis-nearshore.jpg',
  false,
  true
),

-- IBIS CASA SIDI MAAROUF
(
  'ibis-casa-sidi-maarouf',
  'IBIS CASA SIDI MAAROUF',
  'IBIS CASA SIDI MAAROUF',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Sidi Maarouf, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located in Sidi Maarouf, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-25700',
  'h3571@accor.com',
  'https://www.ibis.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094750/hero_poi_ibis-sidi-maarouf.jpg',
  false,
  true
),

-- IBIS CASABLANCA ABDELMOUMEN
(
  'ibis-casablanca-abdelmoumen',
  'IBIS CASABLANCA ABDELMOUMEN',
  'IBIS CASABLANCA ABDELMOUMEN',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Rue Abdelmoumen, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located on Rue Abdelmoumen, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-64000',
  'h7606@accor.com',
  'https://www.ibis.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094805/hero_poi_ibis-abdelmoumen.jpg',
  false,
  true
),

-- IBIS CASA VOYAGEURS
(
  'ibis-casa-voyageurs',
  'IBIS CASA VOYAGEURS',
  'IBIS CASA VOYAGEURS',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Gare Casa Voyageurs, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located at Casa Voyageurs Station, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-00000',
  'h5667@accor.com',
  'https://www.ibis.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094820/hero_poi_ibis-voyageurs.jpg',
  false,
  true
),

-- IBIS CASABLANCA CITY CENTER
(
  'ibis-casablanca-city-center',
  'IBIS CASABLANCA CITY CENTER',
  'IBIS CASABLANCA CITY CENTER',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Avenue des FAR, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located on Avenue des FAR, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-45500',
  'h1135@accor.com',
  'https://www.ibis.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094835/hero_poi_ibis-city-center.jpg',
  false,
  true
),

-- STAYHERE CASABLANCA GAUTHIER
(
  'stayhere-casablanca-gauthier',
  'STAYHERE CASABLANCA GAUTHIER',
  'STAYHERE CASABLANCA GAUTHIER',
  'Résidence confortable offrant un excellent rapport qualité-prix. Situé à Quartier Gauthier, Casablanca, elle dispose d''appartements propres et fonctionnels avec tous les équipements essentiels.',
  'Comfortable residence offering excellent value for money. Located in Gauthier District, Casablanca, it features clean and functional apartments with all essential amenities.',
  'apartment',
  3,
  '$$',
  '+212 6660-00000',
  'gauthier@stayhere.ma',
  'https://stayhere.ma/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094850/hero_poi_stayhere-gauthier.jpg',
  false,
  true
),

-- HOTEL MELLIBER
(
  'hotel-melliber',
  'HOTEL MELLIBER',
  'HOTEL MELLIBER',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located in Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-00000',
  'info@melliber.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094905/hero_poi_melliber.jpg',
  false,
  true
),

-- HOTEL KAAN
(
  'hotel-kaan',
  'HOTEL KAAN',
  'HOTEL KAAN',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located in Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-00000',
  'info@hotelkaan.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094920/hero_poi_kaan.jpg',
  false,
  true
),

-- HOTEL PLAZA
(
  'hotel-plaza',
  'HOTEL PLAZA',
  'HOTEL PLAZA',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Boulevard Mohammed V, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located on Boulevard Mohammed V, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-26926',
  'info@hotelplaza.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094935/hero_poi_plaza.jpg',
  false,
  true
),

-- HOTEL MAJESTIC
(
  'hotel-majestic',
  'HOTEL MAJESTIC',
  'HOTEL MAJESTIC',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Boulevard Mohammed V, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located on Boulevard Mohammed V, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-31350',
  'contact@hotelmajestic.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729094950/hero_poi_majestic.jpg',
  false,
  true
),

-- HOTEL GUYNEMER
(
  'hotel-guynemer',
  'HOTEL GUYNEMER',
  'HOTEL GUYNEMER',
  'Établissement économique offrant un hébergement simple et pratique. Situé à 2 Rue Mohammed Belloul, Casablanca, parfait pour les voyageurs à petit budget recherchant un lieu de repos convenable.',
  'Budget-friendly establishment offering simple and practical accommodation. Located at 2 Rue Mohammed Belloul, Casablanca, perfect for budget travelers looking for a convenient place to rest.',
  'hotel',
  2,
  '$',
  '+212 5222-27764',
  'info@hotelguynemer.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095005/hero_poi_guynemer.jpg',
  false,
  true
),

-- HOTEL TRANSATLANTIQUE
(
  'hotel-transatlantique',
  'HOTEL TRANSATLANTIQUE',
  'HOTEL TRANSATLANTIQUE',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à 79 Rue Colbert, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located at 79 Rue Colbert, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-29451',
  'info@hoteltransatlantique.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095020/hero_poi_transatlantique.jpg',
  false,
  true
),

-- HOTEL VOLUBILIS
(
  'hotel-volubilis',
  'HOTEL VOLUBILIS',
  'HOTEL VOLUBILIS',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Boulevard Mohammed V, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located on Boulevard Mohammed V, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-20241',
  'info@hotelvolubilis.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095035/hero_poi_volubilis.jpg',
  false,
  true
),

-- HOTEL LES AMBASSADEURS
(
  'hotel-les-ambassadeurs',
  'HOTEL LES AMBASSADEURS',
  'HOTEL LES AMBASSADEURS',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located in Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-00000',
  'info@lesambassadeurs.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095050/hero_poi_ambassadeurs.jpg',
  false,
  true
),

-- HOTEL VILLA BLANCA
(
  'hotel-villa-blanca',
  'HOTEL VILLA BLANCA',
  'HOTEL VILLA BLANCA',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à Boulevard de la Corniche, Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located on Boulevard de la Corniche, Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-00000',
  'info@villablanca.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095105/hero_poi_villa-blanca.jpg',
  false,
  true
),

-- JM SUITES HOTEL
(
  'jm-suites-hotel',
  'JM SUITES HOTEL',
  'JM SUITES HOTEL',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located in Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-00000',
  'info@jmsuites.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095120/hero_poi_jm-suites.jpg',
  false,
  true
),

-- LE YACHT SUITES HOTEL
(
  'le-yacht-suites-hotel',
  'LE YACHT SUITES HOTEL',
  'LE YACHT SUITES HOTEL',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à Boulevard de la Corniche, Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located on Boulevard de la Corniche, Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-00000',
  'info@leyacht.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095135/hero_poi_le-yacht.jpg',
  false,
  true
),

-- AVENUE SUITES & APPART HOTEL DELUXE
(
  'avenue-suites-appart-hotel-deluxe',
  'AVENUE SUITES & APPART HOTEL DELUXE',
  'AVENUE SUITES & APPART HOTEL DELUXE',
  'Résidence 4 étoiles alliant confort et qualité de service. Située à Casablanca, elle propose des appartements spacieux et bien équipés, idéaux pour les séjours d''affaires ou de loisirs.',
  '4-star residence combining comfort and quality service. Located in Casablanca, it offers spacious and well-equipped apartments, ideal for business or leisure stays.',
  'apartment',
  4,
  '$$$',
  '+212 5222-00000',
  'info@avenuesuites.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095150/hero_poi_avenue-suites.jpg',
  false,
  true
),

-- HOTEL GAUTHIER
(
  'hotel-gauthier',
  'HOTEL GAUTHIER',
  'HOTEL GAUTHIER',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Quartier Gauthier, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located in Gauthier District, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-00000',
  'info@hotelgauthier.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095205/hero_poi_gauthier.jpg',
  false,
  true
),

-- CLUB VAL D'ANFA HOTEL
(
  'club-val-d-anfa-hotel',
  'CLUB VAL D''ANFA HOTEL',
  'CLUB VAL D''ANFA HOTEL',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Boulevard d''Anfa, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located on Boulevard d''Anfa, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-00000',
  'info@clubvaldanfa.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095220/hero_poi_val-anfa.jpg',
  false,
  true
),

-- HOTEL CENTRAL
(
  'hotel-central',
  'HOTEL CENTRAL',
  'HOTEL CENTRAL',
  'Établissement économique offrant un hébergement simple et pratique. Situé à Centre Ville, Casablanca, parfait pour les voyageurs à petit budget recherchant un lieu de repos convenable.',
  'Budget-friendly establishment offering simple and practical accommodation. Located in City Center, Casablanca, perfect for budget travelers looking for a convenient place to rest.',
  'hotel',
  2,
  '$',
  '+212 5222-00000',
  'info@hotelcentral.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095235/hero_poi_central.jpg',
  false,
  true
),

-- KYRIAD RESIDENCE CENTRE VILLE
(
  'kyriad-residence-centre-ville',
  'KYRIAD RESIDENCE CENTRE VILLE',
  'KYRIAD RESIDENCE CENTRE VILLE',
  'Résidence confortable offrant un excellent rapport qualité-prix. Située au Centre Ville, Casablanca, elle dispose d''appartements propres et fonctionnels avec tous les équipements essentiels.',
  'Comfortable residence offering excellent value for money. Located in City Center, Casablanca, it features clean and functional apartments with all essential amenities.',
  'apartment',
  3,
  '$$',
  '+212 5222-00000',
  'casablanca@kyriad.fr',
  'https://www.kyriad.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095250/hero_poi_kyriad.jpg',
  false,
  true
),

-- IMPERIAL HOTEL
(
  'imperial-hotel',
  'IMPERIAL HOTEL',
  'IMPERIAL HOTEL',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located in Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-00000',
  'info@imperialhotel.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095305/hero_poi_imperial.jpg',
  false,
  true
),

-- MOROCCAN HOUSE HOTEL
(
  'moroccan-house-hotel',
  'MOROCCAN HOUSE HOTEL',
  'MOROCCAN HOUSE HOTEL',
  'Maison d''hôte confortable offrant un excellent rapport qualité-prix. Située à Casablanca, elle dispose de chambres propres et fonctionnelles avec une ambiance authentique marocaine.',
  'Comfortable guesthouse offering excellent value for money. Located in Casablanca, it features clean and functional rooms with an authentic Moroccan atmosphere.',
  'guesthouse',
  3,
  '$$',
  '+212 5222-00000',
  'info@moroccanhouse.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095320/hero_poi_moroccan-house.jpg',
  false,
  true
),

-- SUITE HOTEL CASA DIAMOND
(
  'suite-hotel-casa-diamond',
  'SUITE HOTEL CASA DIAMOND',
  'SUITE HOTEL CASA DIAMOND',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located in Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-00000',
  'info@casadiamond.ma',
  NULL,
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095335/hero_poi_casa-diamond.jpg',
  false,
  true
),

-- PESTANA SEASIDE
(
  'pestana-seaside',
  'PESTANA SEASIDE',
  'PESTANA SEASIDE',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à Boulevard de la Corniche, Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located on Boulevard de la Corniche, Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-00000',
  'casablanca@pestana.com',
  'https://www.pestana.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095350/hero_poi_pestana.jpg',
  false,
  true
),

-- ADAGIO CASABLANCA CITY CENTER
(
  'adagio-casablanca-city-center',
  'ADAGIO CASABLANCA CITY CENTER',
  'ADAGIO CASABLANCA CITY CENTER',
  'Résidence confortable offrant un excellent rapport qualité-prix. Située au Centre Ville, Casablanca, elle dispose d''appartements propres et fonctionnels avec tous les équipements essentiels.',
  'Comfortable residence offering excellent value for money. Located in City Center, Casablanca, it features clean and functional apartments with all essential amenities.',
  'apartment',
  3,
  '$$',
  '+212 5222-00000',
  'h8912@adagio-city.com',
  'https://www.adagio-city.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095405/hero_poi_adagio.jpg',
  false,
  true
),

-- HILTON GARDEN INN CASABLANCA
(
  'hilton-garden-inn-casablanca',
  'HILTON GARDEN INN CASABLANCA',
  'HILTON GARDEN INN CASABLANCA',
  'Hôtel 4 étoiles alliant confort et qualité de service. Situé à Casablanca, il propose des chambres spacieuses et bien équipées, idéales pour les voyages d''affaires ou de loisirs.',
  '4-star hotel combining comfort and quality service. Located in Casablanca, it offers spacious and well-equipped rooms, ideal for business or leisure travel.',
  'hotel',
  4,
  '$$$',
  '+212 5222-00000',
  'casablanca@hilton.com',
  'https://www.hilton.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095420/hero_poi_hilton-garden.jpg',
  false,
  true
),

-- BEST WESTERN HOTEL TOUBKAL
(
  'best-western-hotel-toubkal',
  'BEST WESTERN HOTEL TOUBKAL',
  'BEST WESTERN HOTEL TOUBKAL',
  'Hôtel confortable 3 étoiles offrant un excellent rapport qualité-prix. Situé à Avenue des FAR, Casablanca, il dispose de chambres propres et fonctionnelles avec tous les équipements essentiels.',
  'Comfortable 3-star hotel offering excellent value for money. Located on Avenue des FAR, Casablanca, it features clean and functional rooms with all essential amenities.',
  'hotel',
  3,
  '$$',
  '+212 5222-00000',
  'toubkal@bestwestern.com',
  'https://www.bestwestern.com/',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20220729095435/hero_poi_toubkal.jpg',
  false,
  true
)

ON CONFLICT (slug) DO UPDATE SET
  name_fr = EXCLUDED.name_fr,
  name_en = EXCLUDED.name_en,
  description_fr = EXCLUDED.description_fr,
  description_en = EXCLUDED.description_en,
  type = EXCLUDED.type,
  star_rating = EXCLUDED.star_rating,
  price_range = EXCLUDED.price_range,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  main_image = EXCLUDED.main_image,
  is_featured = EXCLUDED.is_featured,
  is_published = EXCLUDED.is_published,
  updated_at = NOW();

-- Display count of inserted/updated records
SELECT COUNT(*) as total_accommodations FROM accommodations;
