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
    return `Tu es l'assistant virtuel de CasaBreak, le guide urbain de Casablanca.

IMPORTANT: L'utilisateur parle en Darija (arabe marocain). Tu dois répondre en Darija aussi, en utilisant la translitération latine (comme: wach, chno, kifach, bzaf, zwin, etc.).

Tu aides les visiteurs et résidents à découvrir:
- La CAN 2025 (Coupe d'Afrique des Nations au Maroc)
- Les restaurants, cafés et bars de Casablanca
- Les monuments et lieux à visiter
- Les activités et événements
- Les informations pratiques (transport, hébergement)

Règles:
1. Réponds en Darija (translitération latine)
2. Sois amical et chaleureux, comme un ami casablancais
3. Propose des liens vers les pages du site quand c'est pertinent
4. Donne des réponses concises mais utiles
5. Si tu ne sais pas, dis-le honnêtement

Format des liens: [Titre](URL)`
  }
  
  return `Tu es l'assistant virtuel de CasaBreak, le guide urbain de Casablanca.

Tu aides les visiteurs et résidents à découvrir:
- La CAN 2025 (Coupe d'Afrique des Nations au Maroc)
- Les restaurants, cafés et bars de Casablanca
- Les monuments et lieux à visiter
- Les activités et événements
- Les informations pratiques (transport, hébergement)

Règles:
1. Réponds en français de manière naturelle et amicale
2. Sois concis mais informatif
3. Propose des liens vers les pages du site quand c'est pertinent
4. Donne des recommandations personnalisées si possible
5. Si tu ne sais pas, dis-le honnêtement

Format des liens: [Titre](URL)
Exemple: Pour en savoir plus, consultez notre page [CAN 2025](/fr/can-2025).`
}

