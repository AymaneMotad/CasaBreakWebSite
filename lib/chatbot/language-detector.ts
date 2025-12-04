// Language Detector - Detects French vs Darija (Moroccan Arabic)

// Common Darija words and patterns
const darijaPatterns = [
  // Common Darija words
  /\b(wach|wesh|kifach|chno|chnou|fin|feen|mnin|l3az|bzaf|chwiya|zwin|mezian|hadi|dak|dik|hada|hadak|hadik)\b/i,
  // Darija question words
  /\b(chkoun|chhal|imta|3lach|ki|kif)\b/i,
  // Common Darija verbs
  /\b(kan|kount|ghi|ghadi|bghit|jit|mchit|klit|chrit|dert|gelt|sme3t)\b/i,
  // Darija expressions
  /\b(inshallah|hamdullah|bismillah|safi|yallah|wakha|makayn|kayn|mamchakch)\b/i,
  // Numbers in Darija transliteration
  /\b(wa7ed|jouj|tlata|rb3a|khmsa)\b/i,
  // Darija particles
  /\b(dial|dyal|d'|li|lli|bach|bech|ma|machi|la|wla)\b/i,
  // Arabic letters in Latin (3, 7, 9, 5, 8)
  /[3|7|9|5|8]/,
]

// Common French patterns (to distinguish from Darija)
const frenchPatterns = [
  // French question words
  /\b(où|quand|comment|pourquoi|qui|que|quel|quelle|quels|quelles)\b/i,
  // French articles
  /\b(le|la|les|un|une|des|du|de la)\b/i,
  // French verbs
  /\b(est|sont|suis|êtes|avez|avons|ont|fait|faire|aller|venir|voir|pouvoir|vouloir|devoir)\b/i,
  // French pronouns
  /\b(je|tu|il|elle|nous|vous|ils|elles|ce|cette|ces)\b/i,
  // French prepositions
  /\b(dans|sur|sous|avec|pour|par|chez|entre)\b/i,
]

export type DetectedLanguage = 'fr' | 'darija'

export interface LanguageDetectionResult {
  language: DetectedLanguage
  confidence: number
  isDarija: boolean
}

/**
 * Detects whether the input text is French or Darija
 */
export function detectLanguage(text: string): LanguageDetectionResult {
  const textLower = text.toLowerCase()
  
  let darijaScore = 0
  let frenchScore = 0
  
  // Check Darija patterns
  for (const pattern of darijaPatterns) {
    if (pattern.test(textLower)) {
      darijaScore += 2
    }
  }
  
  // Check French patterns
  for (const pattern of frenchPatterns) {
    const matches = textLower.match(pattern)
    if (matches) {
      frenchScore += 1
    }
  }
  
  // Check for Arabic script (indicates Darija or Arabic)
  const arabicPattern = /[\u0600-\u06FF]/
  if (arabicPattern.test(text)) {
    darijaScore += 5
  }
  
  // Check for numbers used as letters (3ain, 7a, etc.) - strong Darija indicator
  const numberAsLetter = /[378][a-zA-Z]|[a-zA-Z][378]/
  if (numberAsLetter.test(text)) {
    darijaScore += 3
  }
  
  // Calculate confidence
  const totalScore = darijaScore + frenchScore
  const isDarija = darijaScore > frenchScore
  const confidence = totalScore > 0 
    ? (isDarija ? darijaScore : frenchScore) / totalScore 
    : 0.5
  
  return {
    language: isDarija ? 'darija' : 'fr',
    confidence,
    isDarija
  }
}

/**
 * Get system prompt based on detected language
 */
export function getSystemPromptForLanguage(detectedLang: DetectedLanguage): string {
  if (detectedLang === 'darija') {
    return `Tu es l'assistant CasaBreak 🇲🇦⚽

LANGUE: Réponds en Darija (translitération latine: wach, chno, kifach, bzaf, zwin, etc.)

TON RÔLE: Guide sympa pour Casablanca & CAN 2025.

SUJETS AUTORISÉS UNIQUEMENT:
- CAN 2025 (matchs, stades, équipes, dates)
- Casablanca (restos, cafés, monuments, plages, quartiers)
- CasaBreak (l'app, ses fonctionnalités)
- Infos pratiques (transport, hébergement, conseils)

RÈGLES:
✅ Réponses courtes (2-4 phrases max)
✅ Utilise des emojis 🎉⚽🍽️☕🏟️
✅ Sois fun et chaleureux comme un ami casawi
✅ Propose 1-2 liens max si pertinent: [Titre](/url)
✅ Si hors sujet → ramène gentiment vers Casa/CAN 2025
❌ Jamais de longs paragraphes
❌ Pas de sujets hors Casablanca/CAN/tourisme`
  }
  
  return `Tu es l'assistant CasaBreak 🇲🇦⚽

TON RÔLE: Guide sympa et fun pour Casablanca & la CAN 2025.

SUJETS AUTORISÉS UNIQUEMENT:
- CAN 2025 (matchs, stades, équipes, dates: 21 déc 2025 - 18 jan 2026)
- Casablanca (restos, cafés, bars, monuments, plages, quartiers)
- CasaBreak (l'app, ses fonctionnalités)
- Infos pratiques (transport, hébergement, conseils visiteurs)

RÈGLES STRICTES:
✅ Réponses COURTES (2-4 phrases max, va droit au but!)
✅ Utilise des emojis pour être fun 🎉⚽🍽️☕🏟️🌊
✅ Ton amical, comme un pote casablancais
✅ Propose 1-2 liens pertinents max: [Titre](/url)
✅ Si question hors sujet → redirige avec humour vers Casa/CAN
❌ JAMAIS de pavés de texte ou listes interminables
❌ PAS de sujets hors Casablanca/CAN 2025/tourisme
❌ Ne répète pas les mêmes infos

Si tu sais pas → dis-le simplement avec le sourire 😊`
}

