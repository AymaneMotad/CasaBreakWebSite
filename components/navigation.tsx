"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, ChevronDown, Ticket, ArrowRight, Sparkles, Compass } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "./language-selector"
import { useTranslations, useLocale } from 'next-intl'

// Simplified background glow (static, no animation)
function DropdownGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#00a346]/15 rounded-full blur-[60px]" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#c10000]/15 rounded-full blur-[60px]" />
    </div>
  )
}

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
        { label: t("outdoorSea"), href: `/${currentLocale}/activites/plein-air-mer` },
        { label: t("familyKids"), href: `/${currentLocale}/activites/famille-enfants` },
        { label: t("sportWellness"), href: `/${currentLocale}/activites/shopping` },
      ],
    },
    {
      label: t("foodFun"),
      href: "#",
      image: "/casablanca-cityscape-atlantic-ocean-aerial-view-mo.jpg",
      submenu: [
        { label: t("cafesRestaurants"), href: `/${currentLocale}/manger-sortir/restaurants` },
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
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28 py-3">
          <Link
            href={`/${currentLocale}`}
            className="flex items-center"
          >
            <Image 
              src="/casa break and casa can.svg" 
              alt="Casabreak & Casa Can" 
              width={987} 
              height={881}
              className="h-10 sm:h-12 lg:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={(e) => handleDropdownClick(e, !!item.submenu)}
                  className={`
                    text-sm font-sans tracking-wide transition-colors duration-200 relative flex items-center gap-1.5
                    ${isActive(item.href) || isParentActive(item.submenu) ? 'text-[#00a346] font-semibold' : 'text-gray-700 hover:text-gray-900'}
                  `}
                >
                  {item.submenu ? (
                    <>
                      {item.label}
                      <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
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
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                    {/* CAN 2025 Style Dropdown */}
                    <div className="relative bg-[#0a0a0a] rounded-2xl shadow-2xl border border-white/10 overflow-hidden min-w-[600px]">
                      {/* Subtle background glow */}
                      <DropdownGlow />
                      
                      <div className="relative z-10 flex">
                        {/* Submenu items */}
                        <div className="min-w-[280px] py-5 px-3 flex-shrink-0">
                          {/* Category header */}
                          <div className="px-4 pb-3 mb-2 border-b border-white/10">
                            <span className="text-xs font-bold text-[#00a346] uppercase tracking-wider">{item.label}</span>
                          </div>
                          
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="group/item block"
                            >
                              <div className={`
                                px-4 py-3 rounded-xl mx-1 my-0.5 transition-colors duration-150
                                ${isActive(subItem.href) 
                                  ? 'bg-[#00a346]/20' 
                                  : 'hover:bg-white/5'}
                              `}>
                                {/* Active indicator */}
                                <div className="flex items-center justify-between">
                                  <span className={`
                                    text-sm font-medium
                                    ${isActive(subItem.href) ? 'text-white' : 'text-white/70 group-hover/item:text-white'}
                                  `}>
                                    {subItem.label}
                                  </span>
                                  <ArrowRight className={`
                                    w-4 h-4 transition-opacity duration-150
                                    ${isActive(subItem.href) 
                                      ? 'text-[#00a346] opacity-100' 
                                      : 'text-white/30 opacity-0 group-hover/item:opacity-100'}
                                  `} />
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        {/* Image section */}
                        {item.image && (
                          <div className="w-[320px] relative flex-shrink-0 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.label}
                              fill
                              className="object-cover"
                              sizes="320px"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                            
                            {/* Bottom label */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-[#00a346]" />
                                <span className="text-[10px] text-white/60 uppercase tracking-widest">Explorer</span>
                              </div>
                              <h3 className="text-lg font-bold text-white">{item.label}</h3>
                              <p className="text-xs text-white/50">{item.submenu.length} destinations</p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Bottom accent */}
                      <div className="h-0.5 bg-gradient-to-r from-[#00a346] via-[#ffd700] to-[#c10000]" />
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a
              href="https://casawe.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-[#00a346] to-[#c10000] text-white rounded-lg font-bold"
            >
              <span className="flex items-center gap-2">
                <Ticket className="w-4 h-4" />
                <span>{t("tickets")}</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 sm:top-24 bottom-0 bg-[#0a0a0a] z-[999] overflow-y-auto">
            {/* Subtle background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-48 h-48 bg-[#00a346]/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-[#c10000]/10 rounded-full blur-[80px]" />
            </div>
            
            <div className="relative z-10 px-4 sm:px-6 py-6 pb-32">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/10 last:border-b-0">
                  {item.submenu ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={`
                        w-full text-left py-4 px-3 text-base font-medium
                        flex items-center justify-between
                        ${isParentActive(item.submenu) ? 'text-white' : 'text-white/80'}
                      `}
                    >
                      <span className="flex items-center gap-3">
                        <div className={`
                          w-9 h-9 rounded-lg flex items-center justify-center
                          ${isParentActive(item.submenu) ? 'bg-[#00a346]/30' : 'bg-white/10'}
                        `}>
                          <Sparkles className={`w-4 h-4 ${isParentActive(item.submenu) ? 'text-[#00a346]' : 'text-white/60'}`} />
                        </div>
                        {item.label}
                      </span>
                      <ChevronDown className={`h-5 w-5 text-white/40 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`
                        block py-4 px-3 text-base font-medium
                        ${isActive(item.href) ? 'text-white' : 'text-white/80'}
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <div className={`
                          w-9 h-9 rounded-lg flex items-center justify-center
                          ${isActive(item.href) ? 'bg-[#00a346]/30' : 'bg-white/10'}
                        `}>
                          {item.label === "Can 2025" ? (
                            <span className="text-sm">🏆</span>
                          ) : (
                            <Compass className={`w-4 h-4 ${isActive(item.href) ? 'text-[#00a346]' : 'text-white/60'}`} />
                          )}
                        </div>
                        {item.label === "Can 2025" ? (
                          <span className="font-bold">
                            <span className="text-[#c1272d]">Can</span> <span className="text-[#006233]">2025</span>
                          </span>
                        ) : item.label}
                      </span>
                    </Link>
                  )}
                  
                  {/* Mobile Submenu */}
                  {item.submenu && openDropdown === item.label && (
                    <div className="mx-2 mb-3 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`
                            flex items-center justify-between py-3 px-4 text-sm border-b border-white/5 last:border-b-0
                            ${isActive(subItem.href) ? 'text-white bg-[#00a346]/10' : 'text-white/70'}
                          `}
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{subItem.label}</span>
                          {isActive(subItem.href) && <div className="w-1.5 h-1.5 rounded-full bg-[#00a346]" />}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Ticket Button */}
              <div className="mt-8 px-2">
                <a
                  href="https://casawe.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#00a346] to-[#c10000] text-white font-bold rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  <Ticket className="w-5 h-5" />
                  <span>{t("tickets")}</span>
                </a>
              </div>
              
              {/* Accent line */}
              <div className="mt-8 h-0.5 bg-gradient-to-r from-[#00a346] via-[#ffd700] to-[#c10000] rounded-full opacity-50" />
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
