"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MatchSchedule } from "@/components/world-cup/match-schedule"
import { useLocale } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { ArrowRight, Calendar, Globe2, Trophy, Users } from "lucide-react"
import { getTeamDisplayName, getTeamFlagUrl } from "@/lib/world-cup/countries"
import type { WorldCupData, WorldCupMatch } from "@/lib/world-cup/types"

const POLL_INTERVAL_MS = 60_000

function useWorldCup() {
  const [data, setData] = useState<WorldCupData | null>(null)
  const [failed, setFailed] = useState(false)

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/world-cup")
      if (!res.ok) throw new Error(`status ${res.status}`)
      setData(await res.json())
      setFailed(false)
    } catch {
      setFailed(true)
    }
  }, [])

  useEffect(() => {
    load()
    const id = setInterval(load, POLL_INTERVAL_MS)
    return () => clearInterval(id)
  }, [load])

  return { data, error: failed && !data }
}

function Flag({ team, width = 26 }: { team: string; width?: number }) {
  const url = getTeamFlagUrl(team)
  if (!url) {
    return (
      <span
        className="inline-block rounded-[2px] bg-gray-200"
        style={{ width, height: Math.round(width * 0.72) }}
        aria-hidden
      />
    )
  }
  return (
    <Image
      src={url}
      alt=""
      width={width}
      height={Math.round(width * 0.72)}
      className="rounded-[2px] border border-black/10 object-cover"
      unoptimized
    />
  )
}

function moroccoStatusText(match: WorldCupMatch): string {
  if (match.status === "live") return `${match.minute}'`
  if (match.status === "finished") return `${match.homeScore ?? 0} – ${match.awayScore ?? 0}`
  const date = new Date(`${match.date}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  })
  return `${date}, ${match.time}`
}

function MoroccoFixtures({ matches }: { matches: WorldCupMatch[] }) {
  if (!matches.length) return null

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10">
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">
          Le parcours des Lions de l&apos;Atlas
        </h2>
        <span className="text-sm text-gray-500">Groupe C</span>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white divide-y divide-gray-100">
        {matches.map((match) => {
          const live = match.status === "live"

          return (
            <div key={match.id} className="flex items-center gap-3 px-4 py-3">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Flag team={match.homeTeam} />
                <span className="text-sm font-medium text-gray-900 truncate">
                  {getTeamDisplayName(match.homeTeam)}
                </span>
                <span className="text-xs text-gray-400 px-1">vs</span>
                <Flag team={match.awayTeam} />
                <span className="text-sm font-medium text-gray-900 truncate">
                  {getTeamDisplayName(match.awayTeam)}
                </span>
              </div>

              <div className="hidden sm:block text-xs text-gray-400 truncate max-w-[200px]">
                {match.stadium && `${match.stadium.name}, ${match.stadium.city}`}
              </div>

              <div
                className={
                  live
                    ? "text-sm font-semibold text-red-600 tabular-nums shrink-0"
                    : "text-sm text-gray-600 tabular-nums shrink-0"
                }
              >
                {moroccoStatusText(match)}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function WorldCup2026Page() {
  const locale = useLocale()
  const { data, error } = useWorldCup()

  const moroccoMatches = data?.matches.filter((m) => m.involvesMorocco) ?? []
  const liveCount = data?.matches.filter((m) => m.status === "live").length ?? 0

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden pt-28 pb-14 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fef7ed] via-[#fdf4e8] to-[#fef9f0]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#00a346]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0066b2]/8 rounded-full blur-[120px]" />

        {/* Subtle pitch grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 80px),
                              repeating-linear-gradient(90deg, #000 0px, transparent 1px, transparent 80px)`,
          }}
        />

        {/* Giant outlined 2026 watermark */}
        <div
          aria-hidden
          className="hidden lg:block absolute -right-10 bottom-[-3rem] font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "22rem",
            color: "transparent",
            WebkitTextStroke: "2px rgba(0, 163, 70, 0.13)",
          }}
        >
          26
        </div>

        {/* Floating zellige shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-15"
              style={{
                left: `${55 + (i * 7) % 42}%`,
                top: `${8 + (i * 13) % 78}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            >
              {i % 2 === 0 ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z"
                    fill={["#00a346", "#c10000", "#0066b2"][i % 3]}
                  />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 0L20 10L10 20L0 10Z"
                    fill={["#0066b2", "#00a346", "#c10000"][i % 3]}
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-[#0066b2]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#c10000]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200 backdrop-blur-sm shadow-sm mb-6">
              {liveCount > 0 ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                    {liveCount} match{liveCount > 1 ? "s" : ""} en direct
                  </span>
                </>
              ) : (
                <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                  Coupe du Monde FIFA 2026™
                </span>
              )}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-[0.95] tracking-tight mb-6">
              Coupe du Monde
              <br />
              <span className="text-[#00a346]">2026</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-6 leading-relaxed">
              Du 11 juin au 19 juillet 2026, le plus grand Mondial de l&apos;histoire.
              Programme complet et scores en direct, mis à jour automatiquement.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 mb-10">
              {[
                { team: "United States", label: "États-Unis" },
                { team: "Mexico", label: "Mexique" },
                { team: "Canada", label: "Canada" },
              ].map((host) => (
                <span
                  key={host.team}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200 backdrop-blur-sm text-sm font-semibold text-gray-700"
                >
                  <Flag team={host.team} width={20} />
                  {host.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mb-12">
              {[
                { icon: Trophy, value: "104", label: "matchs", color: "#b8860b" },
                { icon: Users, value: "48", label: "équipes", color: "#00a346" },
                { icon: Globe2, value: "16", label: "stades", color: "#0066b2" },
                { icon: Calendar, value: "39", label: "jours", color: "#c10000" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900 tabular-nums">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#programme"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00a346] text-white font-bold rounded-2xl hover:bg-[#008c3c] hover:shadow-lg hover:shadow-[#00a346]/25 transition-all"
            >
              Voir le programme
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <MoroccoFixtures matches={moroccoMatches} />

      <section id="programme" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 scroll-mt-28">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
          Calendrier complet
        </h2>
        <MatchSchedule data={data} error={error} />
      </section>

      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
            Suivre le Mondial depuis Casablanca
          </h2>
          <p className="text-sm text-gray-600 mb-5 max-w-xl">
            Pas de billet pour l&apos;Amérique ? Les matchs du Maroc se vivent aussi très bien
            dans les cafés, fan zones et devant les grands écrans de la ville.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <Link
              href={`/${locale}/manger-sortir/restaurants`}
              className="text-[#007a35] hover:underline underline-offset-4"
            >
              Cafés et restaurants
            </Link>
            <Link
              href={`/${locale}/planifier/hebergement`}
              className="text-[#007a35] hover:underline underline-offset-4"
            >
              Hébergement
            </Link>
            <Link
              href={`/${locale}/planifier/infos-pratiques`}
              className="text-[#007a35] hover:underline underline-offset-4"
            >
              Infos pratiques
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
