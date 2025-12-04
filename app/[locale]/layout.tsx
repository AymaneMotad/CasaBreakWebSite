import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css"
import { ToastProvider } from "@/components/toast-notification"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CasaBreak - Votre Guide Urbain de Casablanca",
  description: "Découvrez Casablanca avec CasaBreak - Application mobile pour trouver restaurants, cafés, attractions, événements et lieux emblématiques",
  generator: "v0.app",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CasaBreak",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "CasaBreak",
    title: "CasaBreak - Votre Guide Urbain de Casablanca",
    description: "Découvrez Casablanca avec CasaBreak - Application mobile pour trouver restaurants, cafés, attractions, événements et lieux emblématiques",
  },
}

export const viewport: Viewport = {
  themeColor: "#d4af37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const locales = ['fr', 'en', 'ar'];

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CasaBreak" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#d4af37" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={`font-sans ${inter.variable} ${poppins.variable} ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <NextIntlClientProvider messages={messages}>
          <ToastProvider>
            <ScrollProgress />
            <Suspense fallback={null}>{children}</Suspense>
            <BackToTop />
            <PWAInstallPrompt />
            <Analytics />
          </ToastProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
