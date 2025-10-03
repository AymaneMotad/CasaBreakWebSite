"use client"

import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

interface BackToHomeProps {
  variant?: "light" | "dark"
  className?: string
}

export function BackToHome({ variant = "light", className = "" }: BackToHomeProps) {
  const isLight = variant === "light"
  
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans tracking-wide uppercase transition-all duration-300 hover:scale-105 ${
        isLight
          ? "bg-off-white/20 text-off-white hover:bg-off-white/30 backdrop-blur-sm border border-off-white/30"
          : "bg-charcoal/20 text-charcoal hover:bg-charcoal/30 backdrop-blur-sm border border-charcoal/30"
      } ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      <Home className="w-4 h-4" />
      <span>Retour à l'accueil</span>
    </Link>
  )
}
