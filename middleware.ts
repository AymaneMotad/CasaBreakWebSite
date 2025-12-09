import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'en', 'ar'],
  defaultLocale: 'fr',
  localePrefix: 'always',
  localeDetection: true
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(fr|en|ar)/:path*',
    
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    // Exclude admin routes from locale routing
    '/((?!api|_next|_vercel|admin|.*\\..*).*)'
  ]
};