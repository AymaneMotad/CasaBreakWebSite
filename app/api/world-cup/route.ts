import { NextResponse } from 'next/server'
import { getWorldCupData } from '@/lib/world-cup/service'

export const revalidate = 300

export async function GET() {
  try {
    const data = await getWorldCupData()
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('[world-cup]', error)
    return NextResponse.json(
      { error: 'Unable to load World Cup data' },
      { status: 502 }
    )
  }
}
