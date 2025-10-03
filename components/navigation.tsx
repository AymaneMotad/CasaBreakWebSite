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
            className={`text-sm lg:text-base font-sans tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 text-enhanced ${
              isScrolled ? "text-charcoal hover:text-charcoal/80" : "text-off-white hover:text-off-white/80"
            }`}
          >
            Sacré-Cœur
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={(e) => handleDropdownClick(e, !!item.submenu)}
                  className={`text-xs font-sans tracking-wider uppercase transition-all duration-300 relative flex items-center gap-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled
                      ? "text-charcoal/60 hover:text-charcoal after:bg-charcoal"
                      : "text-off-white/70 hover:text-off-white after:bg-off-white"
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
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
                    <div className="w-64 bg-off-white shadow-xl border border-charcoal/10 overflow-hidden">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-6 py-4 text-xs font-sans tracking-wide text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 transition-all duration-200 border-b border-charcoal/5 last:border-b-0"
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
              className="relative px-6 py-3 text-xs font-sans font-semibold tracking-[0.15em] uppercase bg-gradient-to-br from-charcoal to-charcoal/90 text-off-white border-2 border-charcoal/30 hover:border-charcoal/50 hover:shadow-xl hover:shadow-charcoal/20 hover:scale-105 transition-all duration-300 overflow-hidden group"
              style={{
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                borderRadius: '4px'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Ticket className="w-3 h-3" />
                Ticket
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-warm-terracotta to-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }} />
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
          <div className="lg:hidden pb-6 border-t border-charcoal/10 bg-off-white animate-fade-in">
            {navItems.map((item, index) => (
              <div key={item.label}>
                {item.submenu ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={`w-full text-left py-4 text-sm font-sans tracking-wide uppercase text-charcoal/60 hover:text-charcoal transition-colors flex items-center justify-between animate-fade-in-up stagger-${index + 1}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-4 text-sm font-sans tracking-wide uppercase text-charcoal/60 hover:text-charcoal transition-colors animate-fade-in-up stagger-${index + 1}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.submenu && openDropdown === item.label && (
                  <div className="pl-4 space-y-2 pb-2 animate-fade-in">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block py-2 text-xs font-sans text-charcoal/50 hover:text-charcoal transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://tickets.sacrecoeur-casa.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-6 py-4 text-center text-xs font-sans font-semibold tracking-[0.15em] uppercase bg-gradient-to-r from-charcoal to-charcoal/90 text-off-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-center gap-2">
                <Ticket className="w-3 h-3" />
                Ticket
              </div>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
