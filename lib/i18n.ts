export type Locale = 'fr' | 'en' | 'ar'

export const defaultLocale: Locale = 'fr'

export const locales: Locale[] = ['fr', 'en', 'ar']

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/')
  const locale = segments[1] as Locale
  
  if (locales.includes(locale)) {
    return locale
  }
  
  return defaultLocale
}

export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/')
  const locale = segments[1] as Locale
  
  if (locales.includes(locale)) {
    return '/' + segments.slice(2).join('/')
  }
  
  return pathname
}
