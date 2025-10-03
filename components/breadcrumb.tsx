"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
      <Link
        href="/"
        className="flex items-center text-charcoal/60 hover:text-charcoal transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        Accueil
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-charcoal/40" />
          {index === items.length - 1 ? (
            <span className="text-charcoal font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-charcoal/60 hover:text-charcoal transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
