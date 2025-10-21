import { Locale } from '../i18n'
import fr from './fr.json'
import en from './en.json'
import ar from './ar.json'

export const translations = {
  fr,
  en,
  ar,
} as const

export type TranslationKey = keyof typeof fr

export function getTranslation(locale: Locale, key: string): string {
  const translation = translations[locale]
  if (!translation) {
    console.warn(`Translation not found for locale: ${locale}`)
    return key
  }

  const keys = key.split('.')
  let value: any = translation
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
  }
  
  return typeof value === 'string' ? value : key
}
