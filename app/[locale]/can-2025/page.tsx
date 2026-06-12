import { redirect } from 'next/navigation'

// CAN 2025 page disabled — redirects to World Cup 2026
export default function Can2025Redirect({
  params,
}: {
  params: { locale: string }
}) {
  redirect(`/${params.locale}/world-cup-2026`)
}
