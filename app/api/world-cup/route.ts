import { NextResponse } from 'next/server'
import { getWorldCupData } from '@/lib/world-cup/service'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const data = await getWorldCupData()
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
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
