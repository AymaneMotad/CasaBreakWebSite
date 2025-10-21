import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Bodoni_Moda } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css"
import { ToastProvider } from "@/components/toast-notification"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "L'Ex Église Sacré-Cœur - Casablanca",
  description: "Historic Art Deco cathedral in Casablanca - Cultural heritage site and exhibition space",
  generator: "v0.app",
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${bodoniModa.variable} ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <NextIntlClientProvider messages={messages}>
          <ToastProvider>
            <ScrollProgress />
            <Suspense fallback={null}>{children}</Suspense>
            <BackToTop />
            <Analytics />
          </ToastProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
