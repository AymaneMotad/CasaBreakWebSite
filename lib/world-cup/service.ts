import type { MatchStage, MatchStatus, WorldCupData, WorldCupMatch, WorldCupStadium } from './types'

const API_BASE = 'https://worldcup26.ir/get'

interface ApiStadium {
  id: string
  name_en: string
  city_en: string
  country_en: string
  capacity: number
}

interface ApiGame {
  id: string
  home_team_name_en?: string
  away_team_name_en?: string
  home_team_label?: string
  away_team_label?: string
  home_score: string
  away_score: string
  group: string
  matchday: string
  local_date: string
  stadium_id: string
  finished: string
  time_elapsed: string
  type: MatchStage
}

const STAGE_LABELS: Record<MatchStage, string> = {
  group: 'Phase de groupes',
  r32: '16e de finale',
  r16: '8e de finale',
  qf: 'Quarts de finale',
  sf: 'Demi-finales',
  third: 'Match pour la 3e place',
  final: 'Finale',
}

function parseLocalDate(raw: string): { date: string; time: string; datetime: string } {
  const [datePart, timePart = '00:00'] = raw.split(' ')
  const [month, day, year] = datePart.split('/').map(Number)
  const isoDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  return {
    date: isoDate,
    time: timePart,
    datetime: `${isoDate}T${timePart}:00`,
  }
}

function parseScore(value: string): number | null {
  if (!value || value === 'null') return null
  const parsed = Number.parseInt(value, 10)
  return Number.isNaN(parsed) ? null : parsed
}

function resolveStatus(game: ApiGame): { status: MatchStatus; minute: string | null } {
  if (game.finished === 'TRUE') return { status: 'finished', minute: null }
  if (game.time_elapsed && game.time_elapsed !== 'notstarted') {
    return { status: 'live', minute: game.time_elapsed }
  }
  return { status: 'scheduled', minute: null }
}

function normalizeMatch(game: ApiGame, stadiumMap: Map<string, WorldCupStadium>): WorldCupMatch {
  const homeTeam = game.home_team_name_en || game.home_team_label || 'TBD'
  const awayTeam = game.away_team_name_en || game.away_team_label || 'TBD'
  const { date, time, datetime } = parseLocalDate(game.local_date)
  const { status, minute } = resolveStatus(game)

  return {
    id: game.id,
    homeTeam,
    awayTeam,
    homeScore: status !== 'scheduled' ? parseScore(game.home_score) : null,
    awayScore: status !== 'scheduled' ? parseScore(game.away_score) : null,
    group: game.group,
    stage: game.type,
    stageLabel: STAGE_LABELS[game.type] || game.type,
    matchday: Number.parseInt(game.matchday, 10) || 0,
    date,
    time,
    datetime,
    stadium: stadiumMap.get(game.stadium_id) || null,
    status,
    minute,
    involvesMorocco: homeTeam === 'Morocco' || awayTeam === 'Morocco',
  }
}

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}/${path}`, {
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`World Cup API error: ${res.status}`)
  return res.json()
}

export async function getWorldCupData(): Promise<WorldCupData> {
  const [gamesPayload, stadiumsPayload] = await Promise.all([
    fetchJson<{ games: ApiGame[] }>('games'),
    fetchJson<{ stadiums: ApiStadium[] }>('stadiums'),
  ])

  const stadiums: WorldCupStadium[] = (stadiumsPayload.stadiums || []).map((s) => ({
    id: s.id,
    name: s.name_en,
    city: s.city_en,
    country: s.country_en,
    capacity: s.capacity,
  }))

  const stadiumMap = new Map(stadiums.map((s) => [s.id, s]))
  const matches = (gamesPayload.games || [])
    .map((g) => normalizeMatch(g, stadiumMap))
    .sort((a, b) => a.datetime.localeCompare(b.datetime))

  return {
    matches,
    stadiums,
    updatedAt: new Date().toISOString(),
  }
}

export { STAGE_LABELS }
