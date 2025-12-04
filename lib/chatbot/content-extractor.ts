// Content Extractor - Extracts website content for chatbot context

import { ContentChunk } from './types'

// Import translation files
import frTranslations from '@/lib/translations/fr.json'
import enTranslations from '@/lib/translations/en.json'
import arTranslations from '@/lib/translations/ar.json'

// Navigation structure with URLs
const navigationStructure = {
  home: { url: '/', title: 'Accueil' },
  can2025: { url: '/can-2025', title: 'CAN 2025 - Coupe d\'Afrique des Nations' },
  discover: {
    monuments: { url: '/decouvrir/monuments', title: 'Monuments & lieux emblématiques' },
    quartiers: { url: '/decouvrir/quartiers', title: 'Quartiers à explorer' },
    merPlages: { url: '/decouvrir/mer-plages', title: 'Mer & plages' },
    itineraires: { url: '/decouvrir/itineraires', title: 'Casablanca en 1, 2 ou 3 jours' },
  },
  activities: {
    incontournables: { url: '/activites/incontournables', title: 'Activités incontournables' },
    pleinAirMer: { url: '/activites/plein-air-mer', title: 'Plein air & mer' },
    toursExperiences: { url: '/activites/tours-experiences', title: 'Tours & expériences' },
    familleEnfants: { url: '/activites/famille-enfants', title: 'En famille / pour enfants' },
    shopping: { url: '/activites/shopping', title: 'Shopping' },
  },
  foodFun: {
    restaurants: { url: '/manger-sortir/restaurants', title: 'Restaurants' },
    cafesBrunchs: { url: '/manger-sortir/cafes-brunchs', title: 'Cafés & brunchs' },
    barsNightlife: { url: '/manger-sortir/bars-nightlife', title: 'Bars, lounges & nightlife' },
    centresCommerciaux: { url: '/manger-sortir/centres-commerciaux', title: 'Centres commerciaux' },
    souksArtisanat: { url: '/manger-sortir/souks-artisanat', title: 'Souks & artisanat' },
  },
  events: {
    main: { url: '/evenements', title: 'Événements' },
    concertsSpectacles: { url: '/evenements/concerts-spectacles', title: 'Concerts & spectacles' },
    expositionsGaleries: { url: '/evenements/expositions-galeries', title: 'Expositions & galeries' },
    festivals: { url: '/evenements/festivals', title: 'Festivals' },
    sportifs: { url: '/evenements/sportifs', title: 'Événements sportifs' },
    foiresSalons: { url: '/evenements/foires-salons', title: 'Foires & salons' },
  },
  plan: {
    hebergement: { url: '/planifier/hebergement', title: 'Hébergement' },
    quartierLoger: { url: '/planifier/quartier-loger', title: 'Dans quel quartier loger ?' },
    seDeplacer: { url: '/planifier/se-deplacer', title: 'Se déplacer' },
    aeroportCentreVille: { url: '/planifier/aeroport-centre-ville', title: 'Aéroport → centre-ville' },
    infosPratiques: { url: '/planifier/infos-pratiques', title: 'Infos pratiques & conseils culturels' },
  },
  visit: {
    individuels: { url: '/visiter/individuels', title: 'Visiteurs individuels' },
    groupes: { url: '/visiter/groupes', title: 'Groupes' },
  },
  reserve: { url: '/reserver', title: 'Réserver' },
}

// CAN 2025 specific content
const can2025Content = {
  title: 'Coupe d\'Afrique des Nations 2025 au Maroc',
  dates: '21 Décembre 2025 - 18 Janvier 2026',
  description: '24 nations. 6 villes. 1 champion. Le football africain arrive au Maroc.',
  cities: [
    { name: 'Casablanca', stadium: 'Stade Mohammed V', capacity: '67 000', matches: 'Demi-finale' },
    { name: 'Rabat', stadium: 'Stade Moulay Abdellah', capacity: '52 000', matches: 'Finale' },
    { name: 'Marrakech', stadium: 'Grand Stade', capacity: '45 000', matches: 'Quarts de finale' },
    { name: 'Tanger', stadium: 'Stade Ibn Batouta', capacity: '45 000', matches: 'Phase de poules' },
    { name: 'Fès', stadium: 'Stade de Fès', capacity: '35 000', matches: 'Phase de poules' },
    { name: 'Agadir', stadium: 'Stade Adrar', capacity: '45 000', matches: 'Phase de poules' },
  ],
  teams: [
    'Maroc', 'Égypte', 'Nigéria', 'Cameroun', 'Sénégal', 'Algérie', 
    'Côte d\'Ivoire', 'Ghana', 'Mali', 'Tunisie', 'Afrique du Sud', 'RD Congo',
    'Burkina Faso', 'Guinée', 'Cap-Vert', 'Zambie', 'Angola', 'Bénin',
    'Mozambique', 'Tanzanie', 'Ouganda', 'Zimbabwe', 'Gabon', 'Soudan'
  ],
  stats: {
    teams: 24,
    cities: 6,
    matches: 52
  }
}

// CasaBreak app content
const casabreakContent = {
  name: 'CasaBreak',
  description: 'Votre guide urbain pour découvrir le meilleur de Casablanca',
  features: [
    'Lieux touristiques et monuments',
    'Parcs et attractions',
    'Street art et culture',
    'Cinémas et divertissements',
    'Shopping et centres commerciaux',
    'Restaurants et cafés',
    'Spas et bien-être',
    'Application géolocalisée',
    'Mode hors ligne disponible'
  ],
  contact: {
    email: 'contact@casaevents.ma',
    address: 'Angle rue d\'Alger et boulevard Rachidi, Quartier Gautier, Casablanca 20250'
  }
}

// Extract content from translations
function extractFromTranslations(translations: any, language: 'fr' | 'en' | 'ar'): ContentChunk[] {
  const chunks: ContentChunk[] = []
  
  // Helper to flatten nested objects
  function flattenObject(obj: any, prefix: string = '', url: string = '/'): void {
    for (const key in obj) {
      const value = obj[key]
      const newPrefix = prefix ? `${prefix}.${key}` : key
      
      if (typeof value === 'string' && value.length > 10) {
        chunks.push({
          id: `${language}-${newPrefix}`,
          content: value,
          url: url,
          title: key,
          section: prefix,
          language,
          keywords: extractKeywords(value)
        })
      } else if (typeof value === 'object' && value !== null) {
        flattenObject(value, newPrefix, url)
      }
    }
  }
  
  flattenObject(translations)
  return chunks
}

// Extract keywords from text
function extractKeywords(text: string): string[] {
  const stopWords = new Set(['le', 'la', 'les', 'de', 'du', 'des', 'un', 'une', 'et', 'ou', 'à', 'en', 'pour', 'avec', 'sur', 'dans', 'par', 'au', 'aux', 'ce', 'cette', 'ces', 'son', 'sa', 'ses', 'notre', 'nos', 'votre', 'vos', 'leur', 'leurs', 'qui', 'que', 'quoi', 'dont', 'où', 'est', 'sont', 'être', 'avoir', 'faire', 'plus', 'très', 'bien', 'tout', 'tous', 'toute', 'toutes'])
  
  return text.toLowerCase()
    .replace(/[^\w\sàâäéèêëïîôùûüç-]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word))
    .slice(0, 10)
}

// Build full content index
export function buildContentIndex(): ContentChunk[] {
  const chunks: ContentChunk[] = []
  
  // Add translation content
  chunks.push(...extractFromTranslations(frTranslations, 'fr'))
  chunks.push(...extractFromTranslations(enTranslations, 'en'))
  chunks.push(...extractFromTranslations(arTranslations, 'ar'))
  
  // Add CAN 2025 specific content
  chunks.push({
    id: 'can2025-main',
    content: `${can2025Content.title}. ${can2025Content.description} Dates: ${can2025Content.dates}. ${can2025Content.stats.teams} équipes, ${can2025Content.stats.cities} villes, ${can2025Content.stats.matches} matchs.`,
    url: '/can-2025',
    title: 'CAN 2025',
    section: 'can2025',
    language: 'fr',
    keywords: ['can', '2025', 'coupe', 'afrique', 'nations', 'maroc', 'football', 'stade']
  })
  
  // Add stadiums
  can2025Content.cities.forEach(city => {
    chunks.push({
      id: `can2025-${city.name.toLowerCase()}`,
      content: `${city.name}: ${city.stadium} avec une capacité de ${city.capacity} places. Matchs prévus: ${city.matches}.`,
      url: '/can-2025',
      title: `Stade ${city.name}`,
      section: 'can2025-stadiums',
      language: 'fr',
      keywords: [city.name.toLowerCase(), city.stadium.toLowerCase(), 'stade', 'can', 'match']
    })
  })
  
  // Add teams
  chunks.push({
    id: 'can2025-teams',
    content: `Équipes qualifiées pour la CAN 2025: ${can2025Content.teams.join(', ')}.`,
    url: '/can-2025',
    title: 'Équipes CAN 2025',
    section: 'can2025-teams',
    language: 'fr',
    keywords: ['équipes', 'qualifiées', 'can', '2025', ...can2025Content.teams.map(t => t.toLowerCase())]
  })
  
  // Add CasaBreak content
  chunks.push({
    id: 'casabreak-main',
    content: `${casabreakContent.name}: ${casabreakContent.description}. Fonctionnalités: ${casabreakContent.features.join(', ')}.`,
    url: '/',
    title: 'CasaBreak',
    section: 'casabreak',
    language: 'fr',
    keywords: ['casabreak', 'application', 'guide', 'casablanca', 'tourisme']
  })
  
  // Add navigation pages
  Object.entries(navigationStructure).forEach(([key, value]) => {
    if ('url' in value && 'title' in value) {
      chunks.push({
        id: `nav-${key}`,
        content: value.title,
        url: value.url,
        title: value.title,
        section: 'navigation',
        language: 'fr',
        keywords: value.title.toLowerCase().split(/\s+/)
      })
    } else {
      Object.entries(value).forEach(([subKey, subValue]: [string, any]) => {
        if (subValue.url && subValue.title) {
          chunks.push({
            id: `nav-${key}-${subKey}`,
            content: subValue.title,
            url: subValue.url,
            title: subValue.title,
            section: `navigation-${key}`,
            language: 'fr',
            keywords: subValue.title.toLowerCase().split(/\s+/)
          })
        }
      })
    }
  })
  
  return chunks
}

// Search content by query
export function searchContent(query: string, chunks: ContentChunk[], limit: number = 5): ContentChunk[] {
  const queryLower = query.toLowerCase()
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2)
  
  // Score each chunk based on relevance
  const scored = chunks.map(chunk => {
    let score = 0
    
    // Check content match
    if (chunk.content.toLowerCase().includes(queryLower)) {
      score += 10
    }
    
    // Check keyword matches
    queryWords.forEach(word => {
      if (chunk.keywords.some(kw => kw.includes(word) || word.includes(kw))) {
        score += 3
      }
      if (chunk.content.toLowerCase().includes(word)) {
        score += 2
      }
      if (chunk.title.toLowerCase().includes(word)) {
        score += 4
      }
    })
    
    // Boost CAN 2025 content for related queries
    if (queryLower.includes('can') || queryLower.includes('coupe') || queryLower.includes('football') || queryLower.includes('match') || queryLower.includes('stade')) {
      if (chunk.section.includes('can2025')) {
        score += 5
      }
    }
    
    return { chunk, score }
  })
  
  // Sort by score and return top results
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.chunk)
}

// Get relevant links for a query
export function getRelevantLinks(query: string, locale: string = 'fr'): { title: string; url: string; description?: string }[] {
  const queryLower = query.toLowerCase()
  const links: { title: string; url: string; description?: string }[] = []
  
  // CAN 2025 related
  if (queryLower.includes('can') || queryLower.includes('coupe') || queryLower.includes('football') || queryLower.includes('match') || queryLower.includes('stade') || queryLower.includes('2025')) {
    links.push({ title: 'CAN 2025', url: `/${locale}/can-2025`, description: 'Tout sur la Coupe d\'Afrique des Nations 2025' })
  }
  
  // Restaurant/food related
  if (queryLower.includes('restaurant') || queryLower.includes('manger') || queryLower.includes('cuisine') || queryLower.includes('dîner') || queryLower.includes('déjeuner')) {
    links.push({ title: 'Restaurants', url: `/${locale}/manger-sortir/restaurants`, description: 'Les meilleurs restaurants de Casablanca' })
  }
  
  // Café related
  if (queryLower.includes('café') || queryLower.includes('coffee') || queryLower.includes('brunch') || queryLower.includes('petit-déjeuner')) {
    links.push({ title: 'Cafés & Brunchs', url: `/${locale}/manger-sortir/cafes-brunchs`, description: 'Cafés et brunchs à Casablanca' })
  }
  
  // Nightlife
  if (queryLower.includes('bar') || queryLower.includes('nightlife') || queryLower.includes('sortir') || queryLower.includes('soirée') || queryLower.includes('nuit')) {
    links.push({ title: 'Bars & Nightlife', url: `/${locale}/manger-sortir/bars-nightlife`, description: 'Vie nocturne à Casablanca' })
  }
  
  // Shopping
  if (queryLower.includes('shopping') || queryLower.includes('acheter') || queryLower.includes('centre commercial') || queryLower.includes('mall')) {
    links.push({ title: 'Shopping', url: `/${locale}/activites/shopping`, description: 'Shopping à Casablanca' })
    links.push({ title: 'Centres Commerciaux', url: `/${locale}/manger-sortir/centres-commerciaux`, description: 'Malls et centres commerciaux' })
  }
  
  // Monuments/visit
  if (queryLower.includes('monument') || queryLower.includes('visiter') || queryLower.includes('mosquée') || queryLower.includes('hassan') || queryLower.includes('découvrir')) {
    links.push({ title: 'Monuments', url: `/${locale}/decouvrir/monuments`, description: 'Monuments et lieux emblématiques' })
  }
  
  // Beach
  if (queryLower.includes('plage') || queryLower.includes('mer') || queryLower.includes('beach') || queryLower.includes('ain diab') || queryLower.includes('corniche')) {
    links.push({ title: 'Mer & Plages', url: `/${locale}/decouvrir/mer-plages`, description: 'Plages de Casablanca' })
  }
  
  // Events
  if (queryLower.includes('événement') || queryLower.includes('event') || queryLower.includes('concert') || queryLower.includes('festival') || queryLower.includes('exposition')) {
    links.push({ title: 'Événements', url: `/${locale}/evenements`, description: 'Événements à Casablanca' })
  }
  
  // Transport
  if (queryLower.includes('transport') || queryLower.includes('taxi') || queryLower.includes('tram') || queryLower.includes('aéroport') || queryLower.includes('déplacer')) {
    links.push({ title: 'Se déplacer', url: `/${locale}/planifier/se-deplacer`, description: 'Transports à Casablanca' })
  }
  
  // Accommodation
  if (queryLower.includes('hôtel') || queryLower.includes('hotel') || queryLower.includes('hébergement') || queryLower.includes('dormir') || queryLower.includes('loger')) {
    links.push({ title: 'Hébergement', url: `/${locale}/planifier/hebergement`, description: 'Où dormir à Casablanca' })
  }
  
  // Neighborhoods
  if (queryLower.includes('quartier') || queryLower.includes('maarif') || queryLower.includes('gauthier') || queryLower.includes('anfa')) {
    links.push({ title: 'Quartiers', url: `/${locale}/decouvrir/quartiers`, description: 'Quartiers à explorer' })
  }
  
  // Itineraries
  if (queryLower.includes('itinéraire') || queryLower.includes('jour') || queryLower.includes('visite') || queryLower.includes('programme')) {
    links.push({ title: 'Itinéraires', url: `/${locale}/decouvrir/itineraires`, description: 'Casablanca en 1, 2 ou 3 jours' })
  }
  
  // Family
  if (queryLower.includes('enfant') || queryLower.includes('famille') || queryLower.includes('kid') || queryLower.includes('family')) {
    links.push({ title: 'En famille', url: `/${locale}/activites/famille-enfants`, description: 'Activités pour les familles' })
  }
  
  return links.slice(0, 3) // Return max 3 relevant links
}

// Build context string for LLM
export function buildContextForLLM(query: string, locale: string = 'fr'): string {
  const chunks = buildContentIndex()
  const relevantChunks = searchContent(query, chunks, 8)
  
  let context = `Informations pertinentes sur CasaBreak et Casablanca:\n\n`
  
  // Add CAN 2025 info always for context
  context += `=== CAN 2025 ===\n`
  context += `La Coupe d'Afrique des Nations 2025 se déroule au Maroc du 21 décembre 2025 au 18 janvier 2026.\n`
  context += `24 équipes, 6 villes hôtes, 52 matchs.\n`
  context += `Villes: Casablanca (Stade Mohammed V - Demi-finale), Rabat (Finale), Marrakech, Tanger, Fès, Agadir.\n\n`
  
  // Add CasaBreak info
  context += `=== CasaBreak ===\n`
  context += `CasaBreak est votre guide urbain pour découvrir Casablanca: lieux touristiques, restaurants, cafés, événements, shopping, et plus.\n`
  context += `Application disponible en mode hors ligne avec géolocalisation.\n\n`
  
  // Add relevant chunks
  if (relevantChunks.length > 0) {
    context += `=== Informations pertinentes ===\n`
    relevantChunks.forEach(chunk => {
      context += `- ${chunk.title}: ${chunk.content}\n`
    })
  }
  
  // Add available pages
  context += `\n=== Pages disponibles sur le site ===\n`
  context += `- /can-2025: CAN 2025\n`
  context += `- /decouvrir/monuments: Monuments\n`
  context += `- /decouvrir/quartiers: Quartiers\n`
  context += `- /decouvrir/mer-plages: Mer & Plages\n`
  context += `- /decouvrir/itineraires: Itinéraires\n`
  context += `- /activites/incontournables: Activités incontournables\n`
  context += `- /manger-sortir/restaurants: Restaurants\n`
  context += `- /manger-sortir/cafes-brunchs: Cafés & Brunchs\n`
  context += `- /manger-sortir/bars-nightlife: Bars & Nightlife\n`
  context += `- /evenements: Événements\n`
  context += `- /planifier/hebergement: Hébergement\n`
  context += `- /planifier/se-deplacer: Se déplacer\n`
  
  return context
}

