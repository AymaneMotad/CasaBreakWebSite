"use client"

import type React from "react"
import { useState, useEffect, useMemo, useRef } from "react"
import { Menu, X, ChevronDown, Ticket, ArrowRight, Home, Trophy, MapPin, Activity, UtensilsCrossed, Calendar, Map, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { LanguageSelector } from "./language-selector"
import { useTranslations, useLocale } from 'next-intl'
import { cn } from "@/lib/utils"

// Keeping DropdownGlow exactly as requested
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
  const [searchTerm, setSearchTerm] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const dropdownTimeoutRef = useRef<{ [key: string]: NodeJS.Timeout }>({})
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  
  const pathname = usePathname()
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('navigation')

  const getCurrentLocale = () => {
    const segments = pathname.split('/').filter(Boolean)
    const validLocales = ['fr', 'en', 'ar']
    const pathLocale = segments[0]
    if (validLocales.includes(pathLocale)) return pathLocale
    return locale || 'fr'
  }

  const currentLocale = useMemo(() => getCurrentLocale(), [pathname, locale])
  const lastScrollYRef = useRef(0)
  const tickingRef = useRef(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window === 'undefined' || tickingRef.current) return
      
      tickingRef.current = true
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        
        // Hide navbar when scrolling down past threshold, show when scrolling up
        if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
          setIsVisible(false)
        } else if (currentScrollY < lastScrollYRef.current || currentScrollY <= 80) {
          setIsVisible(true)
        }
        
        lastScrollYRef.current = currentScrollY
        tickingRef.current = false
      })
    }
    
    window.addEventListener('scroll', controlNavbar, { passive: true })
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Cleanup dropdown timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(dropdownTimeoutRef.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout)
      })
    }
  }, [])

  const navItems = useMemo(() => [
    { label: t("home"), href: `/${currentLocale}`, icon: Home },
    { label: "Can 2025", href: `/${currentLocale}/can-2025`, icon: Trophy },
    {
      label: t("discover"),
      href: "#",
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1696259629194-5411989d6675?w=800&q=80",
      submenu: [
        { label: t("monuments"), href: `/${currentLocale}/decouvrir/monuments` },
        { label: t("neighborhoods"), href: `/${currentLocale}/decouvrir/quartiers` },
        { label: t("seaBeaches"), href: `/${currentLocale}/decouvrir/mer-plages` },
      ],
    },
    {
      label: t("activities"),
      href: "#",
      icon: Activity,
      image: "/onglet-activite.jpg",
      submenu: [
        { label: t("mustSee"), href: `/${currentLocale}/activites/incontournables` },
        { label: t("outdoorSea"), href: `/${currentLocale}/activites/plein-air-mer` },
        { label: t("familyKids"), href: `/${currentLocale}/activites/famille-enfants` },
        { label: t("sportWellness"), href: `/${currentLocale}/activites/sport-bien-etre` },
        { label: t("cinema"), href: `/${currentLocale}/activites/cinema` },
      ],
    },
    {
      label: t("foodFun"),
      href: "#",
      icon: UtensilsCrossed,
      image: "/onglet-gastronomie-shoppingg.jpg",
      submenu: [
        { label: t("cafesRestaurants"), href: `/${currentLocale}/manger-sortir/restaurants` },
        { label: t("barsNightlife"), href: `/${currentLocale}/manger-sortir/bars-nightlife` },
        { label: t("shopping"), href: `/${currentLocale}/manger-sortir/shopping` },
      ],
    },
    {
      label: t("events"),
      href: "#",
      icon: Calendar,
      image: "/onglet-evenement.jpg",
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
      icon: Map,
      image: "/planifier votre sejour.jpg",
      submenu: [
        { label: t("accommodation"), href: `/${currentLocale}/planifier/hebergement` },
        { label: t("gettingAround"), href: `/${currentLocale}/planifier/se-deplacer` },
        { label: t("airportToCity"), href: `/${currentLocale}/planifier/aeroport-centre-ville` },
        { label: t("practicalInfo"), href: `/${currentLocale}/planifier/infos-pratiques` },
      ],
    },
  ], [currentLocale, t])

  const isActive = (href: string) => {
    if (href === `/${currentLocale}`) return pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`
    return pathname.startsWith(href)
  }

  const isParentActive = (submenu?: { href: string }[]) => {
    return submenu?.some((item) => pathname.startsWith(item.href)) || false
  }

  const handleDropdownClick = (e: React.MouseEvent, hasSubmenu: boolean) => {
    if (hasSubmenu) e.preventDefault()
  }

  return (
    <>
      <div className="fixed bottom-6 left-6 z-[100] scale-95 origin-bottom-left hover:scale-100 transition-transform duration-300">
        <LanguageSelector />
      </div>
      
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 pt-4",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="max-w-7xl mx-auto rounded-2xl navbar-zellige backdrop-blur-2xl border border-white/20 shadow-lg shadow-black/5">
          <div className="px-4 lg:px-6 h-16 lg:h-20 flex items-center justify-between">
            
            <Link href={`/${currentLocale}`} className="flex-shrink-0 transition-transform hover:scale-105 active:scale-95">
              <Image 
                src="/casa break and casa can.svg" 
                alt="Logo" 
                width={130} 
                height={45}
                className="h-9 lg:h-11 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navItems.map((item) => {
                const dropdownId = item.label
                return (
                  <div 
                    key={item.label} 
                    className="relative group py-2"
                    onMouseEnter={() => {
                      // Clear any pending close timeout
                      if (dropdownTimeoutRef.current[dropdownId]) {
                        clearTimeout(dropdownTimeoutRef.current[dropdownId])
                        delete dropdownTimeoutRef.current[dropdownId]
                      }
                    }}
                    onMouseLeave={() => {
                      // Add small delay before closing to allow clicks to register
                      dropdownTimeoutRef.current[dropdownId] = setTimeout(() => {
                        // Dropdown will close via CSS group-hover
                      }, 150)
                    }}
                  >
                    <button
                      onClick={(e) => handleDropdownClick(e, !!item.submenu)}
                      className={cn(
                        "px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 flex items-center gap-1.5",
                        isActive(item.href) || isParentActive(item.submenu) 
                          ? "text-[#00a346] bg-[#00a346]/10" 
                          : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                      )}
                    >
                      {item.submenu ? (
                        <>
                          {item.label}
                          <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-70" />
                        </>
                      ) : item.label === "Can 2025" ? (
                        <Link href={item.href} className="flex items-center">
                          <span className="text-[#c1272d]">Can</span>&nbsp;<span className="text-[#006233]">2025</span>
                        </Link>
                      ) : (
                        <Link href={item.href}>{item.label}</Link>
                      )}
                    </button>

                    {/* Desktop Dropdown Logic & Design - Optimized for click responsiveness */}
                    {item.submenu && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-[9999]">
                        <div className="relative bg-[#0a0a0a] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden min-w-[600px]">
                          <DropdownGlow />
                          <div className="relative z-10 flex">
                            <div className="min-w-[280px] py-6 px-4 flex-shrink-0">
                              <div className="px-4 pb-3 mb-2 border-b border-white/10">
                                <span className="text-[10px] font-black text-[#00a346] uppercase tracking-[0.2em]">{item.label}</span>
                              </div>
                              {item.submenu.map((subItem) => (
                                <Link 
                                  key={subItem.href} 
                                  href={subItem.href} 
                                  className="group/item block"
                                  onClick={(e) => {
                                    // Immediate navigation, no delay
                                    e.stopPropagation()
                                  }}
                                >
                                  <div className={`px-4 py-3 rounded-xl mx-1 my-0.5 transition-all duration-150 ${isActive(subItem.href) ? 'bg-[#00a346]/20' : 'hover:bg-white/5'}`}>
                                    <div className="flex items-center justify-between">
                                      <span className={`text-sm font-medium ${isActive(subItem.href) ? 'text-white' : 'text-white/70 group-hover/item:text-white'}`}>
                                        {subItem.label}
                                      </span>
                                      <ArrowRight className={`w-4 h-4 transition-all duration-200 ${isActive(subItem.href) ? 'text-[#00a346] opacity-100 translate-x-0' : 'text-white/30 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0'}`} />
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            {item.image && (
                              <div className="w-[320px] relative flex-shrink-0 overflow-hidden">
                                <Image src={item.image} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="320px" />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                  <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-[#00a346] animate-pulse" />
                                    <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Explorer</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-white mb-1">{item.label}</h3>
                                  <p className="text-xs text-white/40 tracking-wide">{item.submenu.length} destinations à découvrir</p>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="h-1 bg-gradient-to-r from-[#00a346] via-[#ffd700] to-[#c10000]" />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex items-center">
                <div className={cn(
                  "flex items-center transition-all duration-500 ease-out overflow-hidden bg-slate-100/80 border border-slate-200/50 rounded-full",
                  showSearch ? "w-48 lg:w-72 px-4 py-2" : "w-0 p-0 border-transparent"
                )}>
                  <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input 
                    ref={searchInputRef}
                    className="bg-transparent border-none focus:ring-0 text-[13px] ml-2 w-full placeholder:text-slate-400"
                    placeholder="Rechercher à Casablanca..."
                    value={searchTerm}
                    onBlur={(e) => {
                      // Don't close if clicking on the search button or if there's text
                      if (!searchTerm && (!searchButtonRef.current?.contains(e.relatedTarget as Node))) {
                        setTimeout(() => {
                          if (!searchInputRef.current?.matches(':focus')) {
                            setShowSearch(false)
                          }
                        }, 200)
                      }
                    }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchTerm.trim()) {
                        router.push(`/${currentLocale}/recherche?q=${encodeURIComponent(searchTerm.trim())}`)
                        setShowSearch(false)
                        setSearchTerm('')
                      }
                      if (e.key === 'Escape') {
                        setShowSearch(false)
                        setSearchTerm('')
                      }
                    }}
                  />
                </div>
                {!showSearch && (
                  <button 
                    ref={searchButtonRef}
                    onClick={() => {
                      setShowSearch(true)
                      // Focus input after a brief delay to ensure it's rendered
                      setTimeout(() => searchInputRef.current?.focus(), 100)
                    }} 
                    className="p-2.5 hover:bg-slate-100 rounded-full transition-all duration-200 text-slate-600 hover:text-slate-900"
                  >
                    <Search className="w-5 h-5 lg:w-4 lg:h-4" />
                  </button>
                )}
              </div>

              <a
                href="https://casawe.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00a346] to-[#c10000] text-white rounded-full text-[13px] font-bold hover:shadow-lg hover:shadow-[#00a346]/20 transition-all duration-300 active:scale-95"
              >
                <Ticket className="w-4 h-4" />
                <span>{t("tickets")}</span>
              </a>

              <button
                className="lg:hidden p-2.5 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Design untouched, just cleaned up spacing */}
      {isOpen && (
        <>
          <div className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-md z-[9998] transition-opacity duration-500" onClick={() => setIsOpen(false)} />
          <div className="lg:hidden fixed inset-0 top-0 pt-24 bg-white z-[9999] overflow-y-auto w-full animate-in slide-in-from-right duration-300">
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
              <div className="absolute top-0 left-0 w-72 h-72 bg-[#00a346]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#c10000]/10 rounded-full blur-[100px]" />
            </div>
            
            <div className="relative z-10 px-6 py-4 pb-32">
              <div className="mb-8 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Que cherchez-vous ?"
                  className="w-full pl-12 pr-4 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-[#00a346]/30 text-base"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchTerm.trim()) {
                      router.push(`/${currentLocale}/recherche?q=${encodeURIComponent(searchTerm.trim())}`)
                      setIsOpen(false)
                      setSearchTerm('')
                    }
                  }}
                />
              </div>

              {navItems.map((item) => (
                <div key={item.label} className="mb-2 w-full">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className={`w-full text-left py-4 px-2 flex items-center justify-between transition-colors ${isParentActive(item.submenu) ? 'text-[#00a346]' : 'text-slate-800'}`}
                      >
                        <span className="flex items-center gap-4 text-lg font-bold">
                          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${isParentActive(item.submenu) ? 'bg-[#00a346]/10' : 'bg-slate-100'}`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          {item.label}
                        </span>
                        <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === item.label ? 'max-h-[600px] mt-2' : 'max-h-0'}`}>
                        <div className="ml-14 grid gap-1 border-l-2 border-slate-100 pl-4">
                          {item.submenu.map((subItem) => (
                            <Link key={subItem.href} href={subItem.href} className={`py-3 text-base ${isActive(subItem.href) ? 'text-[#00a346] font-bold' : 'text-slate-500'}`} onClick={() => setIsOpen(false)}>
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} className={`block py-4 px-2 ${isActive(item.href) ? 'text-[#00a346]' : 'text-slate-800'}`} onClick={() => setIsOpen(false)}>
                      <span className="flex items-center gap-4 text-lg font-bold">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${isActive(item.href) ? 'bg-[#00a346]/10' : 'bg-slate-100'}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        {item.label === "Can 2025" ? <><span className="text-[#c1272d]">Can</span> <span className="text-[#006233]">2025</span></> : item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-10 px-2">
                <a href="https://casawe.ma" className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-[#00a346] to-[#c10000] text-white font-bold rounded-2xl shadow-xl shadow-[#00a346]/20 active:scale-95 transition-transform">
                  <Ticket className="w-6 h-6" />
                  <span className="text-lg">{t("tickets")}</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}