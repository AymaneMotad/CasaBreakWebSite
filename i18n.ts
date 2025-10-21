import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the locale is one of our supported locales
  const supportedLocales = ['fr', 'en', 'ar'];
  const validLocale = supportedLocales.includes(locale) ? locale : 'fr';
  
  return {
    locale: validLocale,
    messages: (await import(`./lib/translations/${validLocale}.json`)).default
  };
});