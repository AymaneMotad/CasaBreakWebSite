"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onNext: () => void
  onPrev: () => void
  hasNext: boolean
  hasPrev: boolean
  totalItems: number
  itemsPerPage: number
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  totalItems,
  itemsPerPage,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      if (currentPage > 3) {
        pages.push('...')
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (currentPage < totalPages - 2) {
        pages.push('...')
      }

      // Always show last page
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      {/* Results info */}
      <p className="text-sm text-gray-600">
        Affichage de {startItem} à {endItem} sur {totalItems} résultats
      </p>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            hasPrev
              ? 'border-gray-300 hover:bg-gray-50 text-gray-700'
              : 'border-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          aria-label="Page précédente"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => {
            if (page === '...') {
              return (
                <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
                  ...
                </span>
              )
            }

            const pageNum = page as number
            const isActive = pageNum === currentPage

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  isActive
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                }`}
                aria-label={`Page ${pageNum}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {pageNum}
              </button>
            )
          })}
        </div>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            hasNext
              ? 'border-gray-300 hover:bg-gray-50 text-gray-700'
              : 'border-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          aria-label="Page suivante"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

