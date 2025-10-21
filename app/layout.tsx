// This file is intentionally minimal for locale-specific routing
// The main layout is handled in app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
