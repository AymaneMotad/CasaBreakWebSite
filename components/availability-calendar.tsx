"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Event {
  date: string // Format: "YYYY-MM-DD"
  title: string
  type: "private" | "public"
}

export function AvailabilityCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  // Mock events - in production, this would come from an API
  const events: Event[] = [
    { date: "2025-10-15", title: "Soirée Inauguration", type: "public" },
    { date: "2025-10-20", title: "Casablanca Smart City", type: "public" },
  ]

  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ]
  
  const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    return { daysInMonth, startingDayOfWeek: startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1 }
  }

  const getEventForDate = (date: Date) => {
    const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    return events.find(event => event.date === dateString)
  }

  const isPastDate = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate)
  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="aspect-square" />)
  }

  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    const event = getEventForDate(date)
    const isPast = isPastDate(date)
    const isToday = new Date().toDateString() === date.toDateString()

    calendarDays.push(
        <div
          key={day}
          className={`
            relative group
            aspect-square p-1 rounded border transition-all duration-300
            ${isPast ? 'bg-gray-100 text-gray-400 border-gray-200' : 
              event ? 
                event.type === 'private' ? 'bg-gradient-to-br from-charcoal/10 to-charcoal/5 border-charcoal/30 text-charcoal' :
                'bg-gradient-to-br from-vibrant-pink/10 to-warm-terracotta/10 border-vibrant-pink/30 text-charcoal'
              : 'bg-gradient-to-br from-blue-500/5 to-blue-600/5 border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg cursor-pointer text-charcoal'
            }
            ${isToday ? 'ring-1 ring-blue-500' : ''}
          `}
        >
        <div className="flex flex-col h-full">
          <span className={`text-xs font-sans ${isToday ? 'font-bold' : ''}`}>{day}</span>
          {event && !isPast && (
            <div className="mt-0.5 flex-1">
              <div className={`
                text-[8px] font-sans leading-tight
                ${event.type === 'private' ? 'text-charcoal/70' : 'text-vibrant-pink'}
              `}>
                {event.title}
              </div>
            </div>
          )}
          {!event && !isPast && (
            <div className="mt-auto">
              <div className="text-[7px] text-blue-600 font-sans uppercase tracking-wider">Disponible</div>
            </div>
          )}
        </div>

        {/* Tooltip */}
        {!isPast && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-charcoal text-white text-xs font-sans rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10 pointer-events-none">
            {event ? (
              <div>
                <p className="font-semibold">{event.title}</p>
                <p className="text-xs opacity-75">
                  {event.type === 'private' ? 'Événement privé' : 'Événement public'}
                </p>
              </div>
            ) : (
              <p>Cliquez pour réserver cette date</p>
            )}
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-charcoal"></div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={previousMonth}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Mois précédent"
        >
          <ChevronLeft className="w-4 h-4 text-charcoal" />
        </button>
        
        <h3 className="font-serif text-lg lg:text-xl text-charcoal">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        
        <button
          onClick={nextMonth}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Mois suivant"
        >
          <ChevronRight className="w-4 h-4 text-charcoal" />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-xs font-sans text-charcoal/60 uppercase tracking-wider">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-[10px] font-sans text-charcoal/60 uppercase tracking-wider mb-3">Légende</p>
        <div className="grid sm:grid-cols-3 gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30" />
            <span className="text-[10px] font-sans text-charcoal/70">Disponible</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-gradient-to-br from-vibrant-pink/20 to-warm-terracotta/20 border border-vibrant-pink/30" />
            <span className="text-[10px] font-sans text-charcoal/70">Événement Public</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-gradient-to-br from-charcoal/20 to-charcoal/10 border border-charcoal/30" />
            <span className="text-[10px] font-sans text-charcoal/70">Réservé</span>
          </div>
        </div>
        <p className="text-[9px] font-sans text-charcoal/50 italic mt-2">
          * Cliquez sur une date disponible pour faire une demande de réservation
        </p>
      </div>
    </div>
  )
}

