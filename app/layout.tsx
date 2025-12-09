import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CasaBreak",
  description: "CasaBreak Admin Panel",
}

// Root layout must include html and body tags
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
