const TEAM_ISO: Record<string, string> = {
  'Mexico': 'mx',
  'South Africa': 'za',
  'South Korea': 'kr',
  'Czech Republic': 'cz',
  'Canada': 'ca',
  'Bosnia and Herzegovina': 'ba',
  'United States': 'us',
  'Paraguay': 'py',
  'Haiti': 'ht',
  'Scotland': 'gb-sct',
  'Australia': 'au',
  'Turkey': 'tr',
  'Brazil': 'br',
  'Morocco': 'ma',
  'Qatar': 'qa',
  'Switzerland': 'ch',
  'Germany': 'de',
  'Curaçao': 'cw',
  'Netherlands': 'nl',
  'Japan': 'jp',
  'Ivory Coast': 'ci',
  'Ecuador': 'ec',
  'France': 'fr',
  'Senegal': 'sn',
  'Iran': 'ir',
  'Argentina': 'ar',
  'Algeria': 'dz',
  'Austria': 'at',
  'Jordan': 'jo',
  'England': 'gb-eng',
  'Croatia': 'hr',
  'Ghana': 'gh',
  'Panama': 'pa',
  'Uzbekistan': 'uz',
  'Colombia': 'co',
  'Spain': 'es',
  'Cape Verde': 'cv',
  'Saudi Arabia': 'sa',
  'Uruguay': 'uy',
  'Belgium': 'be',
  'Egypt': 'eg',
  'Portugal': 'pt',
  'New Zealand': 'nz',
  'Tunisia': 'tn',
  'Norway': 'no',
  'Costa Rica': 'cr',
  'Poland': 'pl',
  'Denmark': 'dk',
  'Serbia': 'rs',
  'Cameroon': 'cm',
  'Chile': 'cl',
  'Peru': 'pe',
  'Wales': 'gb-wls',
  'Ukraine': 'ua',
  'Italy': 'it',
  'Sweden': 'se',
  'Romania': 'ro',
  'Iraq': 'iq',
  'Bolivia': 'bo',
  'Nigeria': 'ng',
  'Venezuela': 've',
  'Democratic Republic of the Congo': 'cd',
}

const TEAM_FR: Record<string, string> = {
  'Algeria': 'Algérie',
  'Argentina': 'Argentine',
  'Australia': 'Australie',
  'Austria': 'Autriche',
  'Belgium': 'Belgique',
  'Bosnia and Herzegovina': 'Bosnie-Herzégovine',
  'Brazil': 'Brésil',
  'Cape Verde': 'Cap-Vert',
  'Colombia': 'Colombie',
  'Croatia': 'Croatie',
  'Czech Republic': 'Tchéquie',
  'Democratic Republic of the Congo': 'RD Congo',
  'Ecuador': 'Équateur',
  'Egypt': 'Égypte',
  'England': 'Angleterre',
  'Germany': 'Allemagne',
  'Haiti': 'Haïti',
  'Iraq': 'Irak',
  'Ivory Coast': "Côte d'Ivoire",
  'Japan': 'Japon',
  'Jordan': 'Jordanie',
  'Mexico': 'Mexique',
  'Morocco': 'Maroc',
  'Netherlands': 'Pays-Bas',
  'New Zealand': 'Nouvelle-Zélande',
  'Norway': 'Norvège',
  'Saudi Arabia': 'Arabie saoudite',
  'Scotland': 'Écosse',
  'Senegal': 'Sénégal',
  'South Africa': 'Afrique du Sud',
  'South Korea': 'Corée du Sud',
  'Spain': 'Espagne',
  'Sweden': 'Suède',
  'Switzerland': 'Suisse',
  'Tunisia': 'Tunisie',
  'Turkey': 'Turquie',
  'United States': 'États-Unis',
  'Uzbekistan': 'Ouzbékistan',
}

// Knockout placeholders from the API, e.g. "Winner Group A" or "Winner Match 73"
const PLACEHOLDER_PATTERNS: [RegExp, (m: RegExpMatchArray) => string][] = [
  [/^Winner Group (\w+)$/, (m) => `1er groupe ${m[1]}`],
  [/^Runner-up Group (\w+)$/, (m) => `2e groupe ${m[1]}`],
  [/^3rd Group (.+)$/, (m) => `3e groupe ${m[1]}`],
  [/^Winner Match (\d+)$/, (m) => `Vainqueur match ${m[1]}`],
  [/^Loser Match (\d+)$/, (m) => `Perdant match ${m[1]}`],
]

export function getTeamDisplayName(teamName: string): string {
  const fr = TEAM_FR[teamName]
  if (fr) return fr
  for (const [pattern, format] of PLACEHOLDER_PATTERNS) {
    const m = teamName.match(pattern)
    if (m) return format(m)
  }
  return teamName
}

export function getTeamFlagUrl(teamName: string): string {
  const code = TEAM_ISO[teamName]
  if (!code) return ''
  return `https://flagcdn.com/w40/${code}.png`
}

export function isMoroccoTeam(name: string): boolean {
  return name === 'Morocco'
}
