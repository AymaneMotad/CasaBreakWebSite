'use client'

import { usePathname } from 'next/navigation'
import { getTranslation } from '@/lib/translations'

export function useTranslation() {
  const pathname = usePathname()
  
  // Extract locale from pathname
  const locale = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/ar') ? 'ar' : 'fr'

  const t = (key: string): string => {
    return getTranslation(locale, key)
  }

  return { t, locale }
}
