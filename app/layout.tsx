import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Bodoni_Moda } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
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
  title: "L'espace sacré coeur - Casablanca",
  description: "Historic Art Deco cathedral in Casablanca - Cultural heritage site and exhibition space",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${bodoniModa.variable}`}>
        <ToastProvider>
          <ScrollProgress />
          <Suspense fallback={null}>{children}</Suspense>
          <BackToTop />
          <Analytics />
        </ToastProvider>
      </body>
    </html>
  )
}
