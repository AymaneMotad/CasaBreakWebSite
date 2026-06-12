"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { getTeamDisplayName, getTeamFlagUrl } from "@/lib/world-cup/countries"
import type { MatchStage, WorldCupData, WorldCupMatch } from "@/lib/world-cup/types"
import { cn } from "@/lib/utils"

type FilterKey = "all" | "today" | "morocco" | "group" | "knockout"

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Tous les matchs" },
  { key: "today", label: "Aujourd'hui" },
  { key: "morocco", label: "Maroc" },
  { key: "group", label: "Phase de groupes" },
  { key: "knockout", label: "Phase finale" },
]

const STAGE_SHORT: Record<MatchStage, string> = {
  group: "",
  r32: "1/16",
  r16: "1/8",
  qf: "1/4",
  sf: "1/2",
  third: "3e place",
  final: "Finale",
}

function formatDateHeader(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })
}

function isToday(isoDate: string): boolean {
  const today = new Date()
  const d = new Date(`${isoDate}T12:00:00`)
  return (
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate()
  )
}

function TeamFlag({ team }: { team: string }) {
  const url = getTeamFlagUrl(team)
  if (!url) {
    return <span className="w-[22px] h-[16px] rounded-[2px] bg-gray-200 shrink-0" aria-hidden />
  }
  return (
    <Image
      src={url}
      alt=""
      width={22}
      height={16}
      className="rounded-[2px] border border-black/10 object-cover shrink-0"
      unoptimized
    />
  )
}

function TeamLine({
  name,
  score,
  match,
  isLoser,
}: {
  name: string
  score: number | null
  match: WorldCupMatch
  isLoser: boolean
}) {
  const isMorocco = name === "Morocco"
  const isPlaceholder = !getTeamFlagUrl(name)
  const showScore = match.status !== "scheduled"

  return (
    <div className="flex items-center gap-2 min-w-0">
      <TeamFlag team={name} />
      <span
        className={cn(
          "text-sm truncate",
          isLoser ? "text-gray-500" : "text-gray-900 font-medium",
          isMorocco && "font-semibold text-[#007a35]",
          isPlaceholder && "text-gray-400 font-normal italic"
        )}
      >
        {getTeamDisplayName(name)}
      </span>
      {showScore && (
        <span
          className={cn(
            "ml-auto pl-2 text-sm tabular-nums",
            isLoser ? "text-gray-400" : "font-semibold text-gray-900",
            match.status === "live" && "text-red-600 font-semibold"
          )}
        >
          {score ?? 0}
        </span>
      )}
    </div>
  )
}

function MatchRow({ match }: { match: WorldCupMatch }) {
  const live = match.status === "live"
  const finished = match.status === "finished"
  const homeWon = finished && (match.homeScore ?? 0) > (match.awayScore ?? 0)
  const awayWon = finished && (match.awayScore ?? 0) > (match.homeScore ?? 0)
  const stageTag = match.stage === "group" ? `Gr. ${match.group}` : STAGE_SHORT[match.stage]

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-3 sm:px-4 py-2.5",
        match.involvesMorocco && "bg-[#00a346]/[0.05]"
      )}
    >
      <div className="w-[3.25rem] shrink-0 text-center">
        {live ? (
          <span className="block text-xs font-semibold text-red-600 tabular-nums leading-tight">
            {match.minute}&apos;
          </span>
        ) : finished ? (
          <span className="block text-[11px] font-medium text-gray-400 uppercase leading-tight">
            Terminé
          </span>
        ) : (
          <span className="block text-sm text-gray-700 tabular-nums leading-tight">
            {match.time}
          </span>
        )}
        {stageTag && (
          <span className="block text-[10px] text-gray-400 mt-0.5 leading-tight">{stageTag}</span>
        )}
      </div>

      <div className="w-px self-stretch bg-gray-100 shrink-0" />

      <div className="flex-1 min-w-0 space-y-1.5">
        <TeamLine name={match.homeTeam} score={match.homeScore} match={match} isLoser={awayWon} />
        <TeamLine name={match.awayTeam} score={match.awayScore} match={match} isLoser={homeWon} />
      </div>

      <div className="hidden md:block w-48 shrink-0 text-right text-xs text-gray-400 leading-snug">
        {match.stadium && (
          <>
            <span className="block truncate">{match.stadium.name}</span>
            <span className="block truncate">{match.stadium.city}</span>
          </>
        )}
      </div>
    </div>
  )
}

function SkeletonList() {
  return (
    <div className="space-y-6 animate-pulse" aria-hidden>
      {[3, 4].map((rows, i) => (
        <div key={i}>
          <div className="h-4 w-44 bg-gray-200 rounded mb-3" />
          <div className="rounded-lg border border-gray-200 divide-y divide-gray-100 bg-white">
            {Array.from({ length: rows }).map((_, j) => (
              <div key={j} className="px-4 py-3 space-y-2">
                <div className="h-3.5 w-2/5 bg-gray-100 rounded" />
                <div className="h-3.5 w-1/3 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function MatchSchedule({
  data,
  error,
}: {
  data: WorldCupData | null
  error: boolean
}) {
  const [filter, setFilter] = useState<FilterKey>("all")

  const liveCount = useMemo(
    () => data?.matches.filter((m) => m.status === "live").length ?? 0,
    [data]
  )

  const filteredMatches = useMemo(() => {
    if (!data) return []
    return data.matches.filter((m) => {
      if (filter === "today") return isToday(m.date)
      if (filter === "morocco") return m.involvesMorocco
      if (filter === "group") return m.stage === "group"
      if (filter === "knockout") return m.stage !== "group"
      return true
    })
  }, [data, filter])

  const groupedByDate = useMemo(() => {
    const groups = new Map<string, WorldCupMatch[]>()
    for (const match of filteredMatches) {
      const existing = groups.get(match.date) || []
      existing.push(match)
      groups.set(match.date, existing)
    }
    return Array.from(groups.entries())
  }, [filteredMatches])

  if (!data && !error) {
    return <SkeletonList />
  }

  if (!data) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white px-6 py-12 text-center">
        <p className="text-gray-700 font-medium">Le calendrier est momentanément indisponible.</p>
        <p className="text-gray-500 text-sm mt-1">
          Nouvelle tentative automatique dans quelques instants.
        </p>
      </div>
    )
  }

  const updatedTime = new Date(data.updatedAt).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div>
      <div className="flex gap-5 overflow-x-auto border-b border-gray-200 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={cn(
              "shrink-0 pb-2.5 pt-1 text-sm border-b-2 -mb-px transition-colors whitespace-nowrap",
              filter === f.key
                ? "border-[#00a346] text-gray-900 font-semibold"
                : "border-transparent text-gray-500 hover:text-gray-800"
            )}
          >
            {f.label}
            {f.key === "today" && liveCount > 0 && (
              <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-red-500 align-middle" />
            )}
          </button>
        ))}
      </div>

      {groupedByDate.length === 0 ? (
        <p className="py-16 text-center text-gray-500 text-sm">
          {filter === "today"
            ? "Pas de match au programme aujourd'hui."
            : "Aucun match ne correspond à ce filtre."}
        </p>
      ) : (
        <div className="mt-4 max-h-[70vh] overflow-y-auto rounded-lg border border-gray-200 bg-white">
          {groupedByDate.map(([date, matches]) => (
            <section key={date}>
              <h3 className="sticky top-0 z-10 flex items-baseline gap-2 text-sm font-semibold text-gray-900 px-3 sm:px-4 py-2.5 bg-gray-50/95 backdrop-blur-sm border-y border-gray-100 first:border-t-0">
                <span className="capitalize">{formatDateHeader(date)}</span>
                {isToday(date) && (
                  <span className="text-xs font-medium text-[#007a35]">aujourd&apos;hui</span>
                )}
                <span className="ml-auto text-xs font-normal text-gray-400">
                  {matches.length} match{matches.length > 1 ? "s" : ""}
                </span>
              </h3>
              <div className="divide-y divide-gray-100">
                {matches.map((match) => (
                  <MatchRow key={match.id} match={match} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <p className="mt-8 text-xs text-gray-400">
        Heures locales des stades. Scores actualisés automatiquement — dernière mise à jour à{" "}
        {updatedTime}.
      </p>
    </div>
  )
}
