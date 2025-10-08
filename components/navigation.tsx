"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, ChevronDown, Ticket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navItems = [
    { label: "Accueil", href: "/" },
    {
      label: "Découvrir",
      href: "#",
      submenu: [
        { label: "Histoire", href: "/decouvrir/histoire" },
        { label: "Architecture", href: "/decouvrir/architecture" },
      ],
    },
    {
      label: "Visiter",
      href: "#",
      submenu: [
        { label: "Individuels et familles", href: "/visiter/individuels" },
        { label: "Groupes", href: "/visiter/groupes" },
        { label: "Étudiants", href: "/visiter/etudiants" },
        { label: "Seniors", href: "/visiter/seniors" },
        { label: "Handicapés", href: "/visiter/handicapes" },
      ],
    },
    { label: "Événements", href: "/evenements" },
    { label: "Réserver Sacré Cœur", href: "/reserver" },
  ]

  const handleDropdownClick = (e: React.MouseEvent, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      e.preventDefault()
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 shadow-sm transition-all duration-500">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24 lg:h-28 py-3">
          <Link
            href="/"
            className="transition-all duration-500 hover:scale-105 flex items-center"
          >
            <Image 
              src="/sacre-logo.png" 
              alt="Casablanca Sacré-Cœur" 
              width={600} 
              height={180}
              className="h-full w-auto max-h-20 lg:max-h-24"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={(e) => handleDropdownClick(e, !!item.submenu)}
                  className="text-sm font-sans tracking-wide transition-all duration-500 relative flex items-center gap-2 text-charcoal/70 hover:text-charcoal after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-500 hover:after:w-full after:bg-gradient-to-r after:from-vibrant-pink after:to-warm-terracotta"
                >
                  {item.submenu ? (
                    <>
                      {item.label}
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    </>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </button>

                {item.submenu && (
                  <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999] transform translate-y-2 group-hover:translate-y-0">
                    <div className="min-w-[240px] bg-white rounded-lg shadow-lg border border-charcoal/10 overflow-hidden py-2">
                      {item.submenu.map((subItem, index) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-5 py-3 text-sm font-sans text-charcoal/80 hover:text-charcoal hover:bg-charcoal/5 transition-all duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a
              href="https://tickets.sacrecoeur-casa.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-4 text-sm font-sans font-medium tracking-wide uppercase bg-gradient-to-r from-blue-500 to-blue-700 text-white border-2 border-blue-600 hover:border-blue-800 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-500 overflow-hidden group rounded-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Ticket className="w-4 h-4" />
                <span>Billetterie</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 transition-all text-charcoal"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-8 border-t border-charcoal/10 bg-white/98 backdrop-blur-xl shadow-2xl animate-gentle-fade-in">
            <div className="px-6 sm:px-8">
              {navItems.map((item, index) => (
                <div key={item.label} className="border-b border-charcoal/5 last:border-b-0">
                  {item.submenu ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={`w-full text-left py-6 px-4 text-lg font-sans tracking-wide text-charcoal hover:text-charcoal transition-all duration-300 flex items-center justify-between animate-gentle-fade-in stagger-${index + 1} font-medium touch-manipulation group`}
                    >
                      <span className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-vibrant-pink to-warm-terracotta rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-6 px-4 text-lg font-sans tracking-wide text-charcoal hover:text-charcoal transition-all duration-300 animate-gentle-fade-in stagger-${index + 1} font-medium touch-manipulation group`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-vibrant-pink to-warm-terracotta rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {item.label}
                      </span>
                    </Link>
                  )}
                  {item.submenu && openDropdown === item.label && (
                    <div className="bg-charcoal/5 mx-4 mb-4 rounded-lg overflow-hidden">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block py-3 px-5 text-sm font-sans text-charcoal/80 hover:text-charcoal hover:bg-charcoal/10 transition-all duration-200 border-b border-charcoal/10 last:border-b-0"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Ticket Button */}
              <div className="mt-8 px-4">
                <a
                  href="https://tickets.sacrecoeur-casa.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 px-6 text-center text-base font-sans font-medium tracking-wide uppercase bg-gradient-to-r from-blue-500 to-blue-700 text-white border-2 border-blue-600 hover:border-blue-800 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-500 rounded-xl touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Ticket className="w-5 h-5" />
                    <span>Billetterie</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
