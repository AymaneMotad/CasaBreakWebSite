export type MatchStage =
  | 'group'
  | 'r32'
  | 'r16'
  | 'qf'
  | 'sf'
  | 'third'
  | 'final'

export type MatchStatus = 'scheduled' | 'live' | 'finished'

export interface WorldCupStadium {
  id: string
  name: string
  city: string
  country: string
  capacity: number
}

export interface WorldCupMatch {
  id: string
  homeTeam: string
  awayTeam: string
  homeScore: number | null
  awayScore: number | null
  group: string
  stage: MatchStage
  stageLabel: string
  matchday: number
  date: string
  time: string
  datetime: string
  stadium: WorldCupStadium | null
  status: MatchStatus
  minute: string | null
  involvesMorocco: boolean
}

export interface WorldCupData {
  matches: WorldCupMatch[]
  stadiums: WorldCupStadium[]
  updatedAt: string
}
