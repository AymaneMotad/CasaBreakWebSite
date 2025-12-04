"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, ChevronDown, Ticket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "./language-selector"
import { useTranslations, useLocale } from 'next-intl'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('navigation')

  // Fallback: Extract locale from pathname if useLocale() is not working
  const getCurrentLocale = () => {
    const segments = pathname.split('/').filter(Boolean)
    const validLocales = ['fr', 'en', 'ar']
    const pathLocale = segments[0]
    
    if (validLocales.includes(pathLocale)) {
      return pathLocale
    }
    
    return locale || 'fr' // Fallback to useLocale() or 'fr'
  }

  const currentLocale = getCurrentLocale()

  const navItems = [
    { label: t("home"), href: `/${currentLocale}` },
    { label: "Can 2025", href: `/${currentLocale}/can-2025` },
    {
      label: t("discover"),
      href: "#",
      image: "/casablanca-cityscape-atlantic-ocean-aerial-view-mo.jpg",
      submenu: [
        { label: t("monuments"), href: `/${currentLocale}/decouvrir/monuments` },
        { label: t("neighborhoods"), href: `/${currentLocale}/decouvrir/quartiers` },
        { label: t("seaBeaches"), href: `/${currentLocale}/decouvrir/mer-plages` },
        { label: t("itineraries"), href: `/${currentLocale}/decouvrir/itineraires` },
      ],
    },
    {
      label: t("activities"),
      href: "#",
      image: "/decouvrer/decouvrer-1.jpg",
      submenu: [
        { label: t("mustSee"), href: `/${currentLocale}/activites/incontournables` },
        { label: t("freeActivities"), href: `/${currentLocale}/activites/gratuites` },
        { label: t("outdoorSea"), href: `/${currentLocale}/activites/plein-air-mer` },
        { label: t("toursExperiences"), href: `/${currentLocale}/activites/tours-experiences` },
        { label: t("familyKids"), href: `/${currentLocale}/activites/famille-enfants` },
      ],
    },
    {
      label: t("foodFun"),
      href: "#",
      image: "/casablanca-cityscape-atlantic-ocean-aerial-view-mo.jpg",
      submenu: [
        { label: t("restaurants"), href: `/${currentLocale}/manger-sortir/restaurants` },
        { label: t("cafesBrunch"), href: `/${currentLocale}/manger-sortir/cafes-brunchs` },
        { label: t("barsNightlife"), href: `/${currentLocale}/manger-sortir/bars-nightlife` },
        { label: t("shoppingMalls"), href: `/${currentLocale}/manger-sortir/centres-commerciaux` },
        { label: t("souksCrafts"), href: `/${currentLocale}/manger-sortir/souks-artisanat` },
      ],
    },
    {
      label: t("events"),
      href: "#",
      image: "/cultural-festival-morocco-traditional-celebration-.jpg",
      submenu: [
        { label: t("concertsShows"), href: `/${currentLocale}/evenements/concerts-spectacles` },
        { label: t("exhibitionsGalleries"), href: `/${currentLocale}/evenements/expositions-galeries` },
        { label: t("festivals"), href: `/${currentLocale}/evenements/festivals` },
        { label: t("sportsEvents"), href: `/${currentLocale}/evenements/evenements-sportifs` },
        { label: t("fairsSalons"), href: `/${currentLocale}/evenements/foires-salons` },
      ],
    },
    {
      label: t("planStay"),
      href: "#",
      image: "/decouvrer/decouvrer-3.jpg",
      submenu: [
        { label: t("accommodation"), href: `/${currentLocale}/planifier/hebergement` },
        { label: t("whereToStay"), href: `/${currentLocale}/planifier/ou-loger` },
        { label: t("gettingAround"), href: `/${currentLocale}/planifier/se-deplacer` },
        { label: t("airportToCity"), href: `/${currentLocale}/planifier/aeroport-centre-ville` },
        { label: t("practicalInfo"), href: `/${currentLocale}/planifier/infos-pratiques` },
      ],
    },
  ]

  const handleDropdownClick = (e: React.MouseEvent, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      e.preventDefault()
    }
  }

  const isActive = (href: string) => {
    if (href === `/${currentLocale}`) return pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`
    return pathname.startsWith(href)
  }

  const isParentActive = (submenu?: { href: string }[]) => {
    return submenu?.some((item) => pathname.startsWith(item.href)) || false
  }

  return (
    <>
      {/* Fixed Language Selector - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <LanguageSelector />
      </div>
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-500">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24 lg:h-28 py-3">
          <Link
            href={`/${currentLocale}`}
            className="transition-all duration-500 hover:scale-105 flex items-center"
          >
            <Image 
              src="/casa break and casa can.svg" 
              alt="Casabreak & Casa Can" 
              width={987} 
              height={881}
              className="h-12 lg:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={(e) => handleDropdownClick(e, !!item.submenu)}
                  className={`
                    text-sm font-sans tracking-wide transition-all duration-500 relative flex items-center gap-2
                    ${isActive(item.href) || isParentActive(item.submenu) ? 'text-blue-600 font-semibold after:w-full' : 'text-charcoal/70 hover:text-charcoal after:w-0'}
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-500 hover:after:w-full after:bg-gradient-to-r after:from-vibrant-pink after:to-warm-terracotta
                  `}
                >
                  {item.submenu ? (
                    <>
                      {item.label}
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    </>
                  ) : item.label === "Can 2025" ? (
                    <Link href={item.href} className="font-bold">
                      <span className="text-[#c1272d]">Can</span> <span className="text-[#006233]">2025</span>
                    </Link>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </button>

                {item.submenu && (
                  <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999] transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white rounded-2xl shadow-2xl border border-charcoal/10 overflow-hidden flex backdrop-blur-sm">
                      {/* Submenu items on the left */}
                      <div className="min-w-[380px] py-10 px-4 flex-shrink-0">
                        {item.submenu.map((subItem, index) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`
                              block px-8 py-5 text-base font-sans transition-all duration-200 rounded-xl mx-2
                              ${isActive(subItem.href) 
                                ? 'text-blue-600 bg-blue-50 font-semibold shadow-sm border-l-4 border-blue-600' 
                                : 'text-charcoal/80 hover:text-charcoal hover:bg-gradient-to-r hover:from-charcoal/5 hover:to-transparent hover:translate-x-2 hover:shadow-sm'}
                            `}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                      {/* Category image on the right */}
                      {item.image && (
                        <div className="w-[420px] min-h-[400px] relative bg-gradient-to-br from-charcoal/5 to-charcoal/10 flex-shrink-0 overflow-hidden group/image">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/image:scale-110"
                            sizes="420px"
                          />
                          {/* Subtle overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                          {/* Decorative border */}
                          <div className="absolute inset-0 border-l-2 border-charcoal/10"></div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a
              href="https://casawe.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm font-sans font-medium tracking-wide uppercase bg-[#006233] text-[#c1272d] border-2 border-[#006233] hover:opacity-90 transition-all duration-300 rounded-lg font-bold"
            >
              <span className="flex items-center gap-3">
                <Ticket className="w-4 h-4" />
                <span>{t("tickets")}</span>
              </span>
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
                      className={`
                        w-full text-left py-6 px-4 text-lg font-sans tracking-wide transition-all duration-300 
                        flex items-center justify-between animate-gentle-fade-in stagger-${index + 1} font-medium touch-manipulation group
                        ${isParentActive(item.submenu) ? 'text-blue-600 bg-blue-50' : 'text-charcoal hover:text-charcoal'}
                      `}
                    >
                      <span className="flex items-center gap-3">
                        <div className={`
                          w-2 h-2 bg-gradient-to-r from-vibrant-pink to-warm-terracotta rounded-full transition-opacity duration-300
                          ${isParentActive(item.submenu) ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}
                        `}></div>
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`
                        block py-6 px-4 text-lg font-sans tracking-wide transition-all duration-300 
                        animate-gentle-fade-in stagger-${index + 1} font-medium touch-manipulation group
                        ${isActive(item.href) ? 'text-blue-600 bg-blue-50' : 'text-charcoal hover:text-charcoal'}
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <div className={`
                          w-2 h-2 bg-gradient-to-r from-vibrant-pink to-warm-terracotta rounded-full transition-opacity duration-300
                          ${isActive(item.href) ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}
                        `}></div>
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
                          className={`
                            block py-3 px-5 text-sm font-sans transition-all duration-200 border-b border-charcoal/10 last:border-b-0
                            ${isActive(subItem.href) ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-charcoal/80 hover:text-charcoal hover:bg-charcoal/10'}
                          `}
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
                  href="https://casawe.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 px-6 text-center text-base font-sans font-medium tracking-wide uppercase bg-[#006233] text-[#c1272d] border-2 border-[#006233] hover:opacity-90 transition-all duration-300 rounded-xl touch-manipulation font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Ticket className="w-5 h-5" />
                    <span>{t("tickets")}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
