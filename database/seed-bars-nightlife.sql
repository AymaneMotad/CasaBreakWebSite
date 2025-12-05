-- =====================================================
-- BARS & NIGHTLIFE SEED DATA
-- Source: https://visitcasablanca.ma/pois/?cities%5B%5D=89&experiences%5B%5D=21
-- Run this in Supabase SQL Editor
-- =====================================================

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
-- Porta Lisboa
(
  'porta-lisboa',
  'bars-nightlife',
  'Porta Lisboa',
  'Porta Lisboa',
  'Porta Lisboa est une brasserie portugaise offrant une cuisine traditionnelle, incluant grillades et fruits de mer, dans un cadre convivial et authentique.',
  'Porta Lisboa est une brasserie portugaise offrant une cuisine traditionnelle.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250715081323/Porta-Lisboa-1.jpg',
  true,
  true
),
-- La Bodeguita Bouskoura
(
  'la-bodeguita-bouskoura',
  'bars-nightlife',
  'La Bodeguita Bouskoura',
  'La Bodeguita Bouskoura',
  'La Bodeguita à Bouskoura propose une cuisine sud-américaine dans une ambiance jazzy, surtout les mardis soirs. Un lieu incontournable pour les amateurs de musique live.',
  'La Bodeguita propose une cuisine sud-américaine dans une ambiance jazzy.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250715075622/La-bodeguita-Bouskoura-1.jpg',
  true,
  true
),
-- Chez Rhapsody
(
  'chez-rhapsody',
  'bars-nightlife',
  'Chez Rhapsody',
  'Chez Rhapsody',
  'Chez Rhapsody Social Club à Casablanca est un lieu moderne axé sur la musique live, les cocktails, et les dîners. Une expérience unique dans un cadre élégant.',
  'Chez Rhapsody est un lieu moderne axé sur la musique live et les cocktails.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240829102505/Chez-rapsody.jpg',
  true,
  true
),
-- Ruby
(
  'ruby-supper-club',
  'bars-nightlife',
  'Ruby',
  'Ruby',
  'Le Ruby Supper Club à Casablanca allie musique, danse et gastronomie japonaise raffinée, créant une expérience mémorable dans un cadre luxueux.',
  'Le Ruby Supper Club allie musique, danse et gastronomie japonaise.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250715081756/Ruby-1.jpg',
  true,
  true
),
-- L'Apéro Marokii
(
  'lapero-marokii',
  'bars-nightlife',
  'L''apéro marokii',
  'L''apéro marokii',
  'L''Apéro Marrokii est un bar-restaurant moderne avec une ambiance festive et des options variées de boissons et de plats. C''est le lieu idéal pour vos soirées.',
  'L''Apéro Marrokii est un bar-restaurant moderne avec une ambiance festive.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240829101654/Lapero-marrokii.jpg',
  false,
  true
),
-- Le 4 Lounge Bar
(
  'le-4-lounge-bar',
  'bars-nightlife',
  'Le 4 Lounge Bar',
  'Le 4 Lounge Bar',
  'Le 4 Lounge Bar à Casablanca séduit par son design moderne et son ambiance animée par un DJ. Les cocktails signature et la musique créent une atmosphère unique.',
  'Le 4 Lounge Bar séduit par son design moderne et son ambiance DJ.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240829101101/Le-4-Lounge-Bar.jpg',
  true,
  true
),
-- La Bodega
(
  'la-bodega',
  'bars-nightlife',
  'La Bodega',
  'La Bodega',
  'La Bodega de Casablanca est un lieu populaire qui propose une cuisine latino-méditerranéenne et espagnole dans une ambiance chaleureuse.',
  'La Bodega propose une cuisine latino-méditerranéenne et espagnole.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250715091708/La-bodega-1.jpg',
  false,
  true
),
-- Leopard
(
  'leopard',
  'bars-nightlife',
  'Leopard',
  'Leopard',
  'Le Leopard à Casablanca sert des plats méditerranéens et espagnols, incluant entrecôtes, filets de bœuf, et saumon avec des sauces raffinées.',
  'Le Leopard sert des plats méditerranéens et espagnols.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250715092023/Leopard-1.jpg',
  false,
  true
),
-- Villa Briganti
(
  'villa-briganti',
  'bars-nightlife',
  'Villa Briganti',
  'Villa Briganti',
  'Briganti est une trattoria italienne moderne à Casablanca, offrant une cuisine authentique et des événements animés. Situé au 76 Boulevard d''Anfa.',
  'Briganti est une trattoria italienne moderne à Casablanca.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250715084223/Villa-Briganti-1.jpg',
  true,
  true
),
-- Brassaria
(
  'brassaria',
  'bars-nightlife',
  'Brassaria',
  'Brassaria',
  'Brassaria, situé à Maarif, propose une cuisine française raffinée dans une ambiance élégante et décontractée.',
  'Brassaria propose une cuisine française raffinée à Maarif.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240829094335/Brassaria.jpg',
  false,
  true
),
-- Annabel's
(
  'annabels',
  'bars-nightlife',
  'Annabel''s',
  'Annabel''s',
  'Situé au cœur de Casablanca, ce restaurant élégant offre une expérience culinaire sur trois niveaux. Vous y dégusterez des plats raffinés dans un cadre luxueux.',
  'Annabel''s offre une expérience culinaire sur trois niveaux.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250714144532/Annabels.jpg',
  true,
  true
),
-- Los Bandidos
(
  'los-bandidos',
  'bars-nightlife',
  'Los Bandidos',
  'Los Bandidos',
  'Los Bandidos, restaurant latino-américain vibrant, offre une expérience culinaire authentique avec des spécialités telles que tacos, ceviche, et grillades.',
  'Los Bandidos offre une expérience culinaire latino-américaine authentique.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240828162955/Los-Bandidos.jpg',
  false,
  true
),
-- L'Artiste
(
  'lartiste',
  'bars-nightlife',
  'L''artiste',
  'L''artiste',
  'L''Artiste à Gauthier, Casablanca, allie ambiance inspirée du film à des performances artistiques. Profitez de deux bars lounge pour tapas et cocktails.',
  'L''Artiste allie ambiance cinématographique et performances artistiques.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240828162619/Lartiste.jpg',
  true,
  true
),
-- La Table Espagnole
(
  'la-table-espagnole',
  'bars-nightlife',
  'La Table Espagnole',
  'La Table Espagnole',
  'La Table Espagnole propose une cuisine espagnole authentique, avec une gamme complète de spécialités hispaniques, des jambons espagnols aux poissons grillés.',
  'La Table Espagnole propose une cuisine espagnole authentique.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20250714144902/La-Table-Espagnole-1.jpg',
  false,
  true
),
-- Azour by Onomo
(
  'azour-by-onomo',
  'bars-nightlife',
  'Azour by Onomo',
  'Azour by Onomo',
  'Azour by Onomo est un lieu incontournable pour les amateurs de cuisine locale et d''expériences uniques dans une ambiance moderne.',
  'Azour by Onomo est incontournable pour les amateurs de cuisine locale.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240828161704/Azour-by-Onomo.jpg',
  false,
  true
),
-- Le Royce
(
  'le-royce',
  'bars-nightlife',
  'Le Royce',
  'Le Royce',
  'Le Royce est un restaurant lounge où se mêlent plats diversifiés, cocktails raffinés et musique live pour des soirées mémorables.',
  'Le Royce est un restaurant lounge avec cocktails et musique live.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240828161332/Le-Royce.jpg',
  true,
  true
),
-- Le Backstage
(
  'le-backstage',
  'bars-nightlife',
  'Le Backstage',
  'Le Backstage',
  'Le BackStage à Casablanca est un restaurant-bar qui met en lumière le talent marocain à travers une scène musicale éclectique et une cuisine raffinée.',
  'Le BackStage met en lumière le talent marocain avec musique live.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240828161032/Le-Backstage.jpg',
  true,
  true
),
-- Yellow
(
  'yellow-club',
  'bars-nightlife',
  'Yellow',
  'Yellow',
  'Le Yellow Club à Ain Diab propose une ambiance vibrante avec des cocktails et des vins variés. Un lieu incontournable de la corniche.',
  'Le Yellow Club à Ain Diab propose une ambiance vibrante avec cocktails.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240828160714/Yellow.jpg',
  false,
  true
),
-- Manhattan Club
(
  'manhattan-club',
  'bars-nightlife',
  'Manhattan Club',
  'Manhattan Club',
  'Le Manhattan à Casablanca est un club emblématique de la corniche d''Ain Diab, offrant une ambiance orientale vivante avec des soirées mémorables.',
  'Le Manhattan est un club emblématique de la corniche d''Ain Diab.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240828160345/Manhattan-Club.jpg',
  true,
  true
),
-- Irish Pub
(
  'irish-pub',
  'bars-nightlife',
  'Irish Pub',
  'Irish Pub',
  'The Irish Pub à Casablanca est un bar convivial au style irlandais, proposant une large sélection de bières et une ambiance chaleureuse.',
  'The Irish Pub est un bar convivial au style irlandais.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240828154550/Irish-Pub.jpg',
  false,
  true
),
-- Tiki Tapas
(
  'tiki-tapas',
  'bars-nightlife',
  'Tiki Tapas',
  'Tiki Tapas',
  'Tiki Tapas est un restaurant espagnol situé à Casablanca, réputé pour sa cuisine inspirée des traditions culinaires espagnoles, en particulier les tapas.',
  'Tiki Tapas est réputé pour sa cuisine espagnole et ses tapas.',
  'https://crtasablanca.s3.eu-west-1.amazonaws.com/content/uploads/20240828153919/Tiki-Tapas.jpg',
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
SELECT COUNT(*) as total_bars FROM venues WHERE category = 'bars-nightlife';
