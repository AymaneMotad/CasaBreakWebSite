"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Ticket } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-off-white/98 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link
            href="/"
            className={`text-lg lg:text-xl font-serif font-normal tracking-wide transition-all duration-500 hover:scale-105 text-enhanced ${
              isScrolled ? "text-charcoal hover:text-charcoal/80" : "text-off-white hover:text-off-white/80"
            }`}
          >
            Ex Sacré-Cœur
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={(e) => handleDropdownClick(e, !!item.submenu)}
                  className={`text-sm font-sans tracking-wide transition-all duration-500 relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-500 hover:after:w-full ${
                    isScrolled
                      ? "text-charcoal/70 hover:text-charcoal after:bg-gradient-to-r after:from-vibrant-pink after:to-warm-terracotta"
                      : "text-off-white/80 hover:text-off-white after:bg-gradient-to-r after:from-vibrant-pink after:to-warm-terracotta"
                  }`}
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
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[9999] transform translate-y-3 group-hover:translate-y-0">
                    <div className="w-72 bg-white/98 backdrop-blur-xl shadow-2xl border border-charcoal/10 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/98 to-off-white/95 backdrop-blur-lg"></div>
                      <div className="relative">
                        <div className="px-6 py-3 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border-b border-charcoal/5">
                          <span className="text-xs font-sans tracking-wider uppercase text-charcoal/60 font-medium">
                            {item.label}
                          </span>
                        </div>
                        {item.submenu.map((subItem, index) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-6 py-4 text-sm font-sans tracking-wide text-charcoal/80 hover:text-charcoal/90 hover:bg-gradient-to-r hover:from-charcoal/5 hover:to-charcoal/10 transition-all duration-300 border-b border-charcoal/5 last:border-b-0 font-medium relative z-10 hover:shadow-md group/item"
                            style={{ animationDelay: `${index * 75}ms` }}
                          >
                            <span className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-vibrant-pink to-warm-terracotta rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                              {subItem.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a
              href="https://tickets.sacrecoeur-casa.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-4 text-sm font-sans font-medium tracking-wide uppercase bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white border-2 border-charcoal hover:border-charcoal/80 hover:shadow-xl hover:shadow-vibrant-pink/25 hover:scale-105 transition-all duration-500 overflow-hidden group rounded-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Ticket className="w-4 h-4" />
                <span>Ticket</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-warm-terracotta to-vibrant-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-all ${isScrolled ? "text-charcoal" : "text-off-white"}`}
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
                    <div className="bg-gradient-to-r from-vibrant-pink/5 to-warm-terracotta/5 border-l-4 border-gradient-to-b from-vibrant-pink to-warm-terracotta mx-6 mb-4 animate-gentle-fade-in shadow-lg rounded-r-xl overflow-hidden">
                      <div className="px-4 py-2 bg-gradient-to-r from-vibrant-pink/10 to-warm-terracotta/10 border-b border-charcoal/5">
                        <span className="text-xs font-sans tracking-wider uppercase text-charcoal/60 font-medium">
                          {item.label}
                        </span>
                      </div>
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block py-4 px-6 text-sm font-sans text-charcoal/80 hover:text-charcoal/90 hover:bg-gradient-to-r hover:from-charcoal/5 hover:to-charcoal/10 transition-all duration-300 font-medium border-b border-charcoal/5 last:border-b-0 touch-manipulation group/item"
                          onClick={() => setIsOpen(false)}
                          style={{ animationDelay: `${subIndex * 100}ms` }}
                        >
                          <span className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-vibrant-pink to-warm-terracotta rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            {subItem.label}
                          </span>
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
                  className="block w-full py-5 px-6 text-center text-base font-sans font-medium tracking-wide uppercase bg-gradient-to-r from-vibrant-pink to-warm-terracotta text-off-white border-2 border-charcoal hover:border-charcoal/80 shadow-lg hover:shadow-xl hover:shadow-vibrant-pink/25 hover:scale-105 transition-all duration-500 rounded-xl touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Ticket className="w-5 h-5" />
                    <span>Ticket</span>
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
