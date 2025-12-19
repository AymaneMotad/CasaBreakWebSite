import { useState, useMemo } from 'react'

interface UsePaginationAndSearchOptions<T> {
  items: T[]
  itemsPerPage?: number
  searchFields?: (keyof T)[]
  searchFunction?: (item: T, searchTerm: string) => boolean
}

export function usePaginationAndSearch<T>({
  items,
  itemsPerPage = 7,
  searchFields = [],
  searchFunction,
}: UsePaginationAndSearchOptions<T>) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter items based on search term
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return items
    }

    const term = searchTerm.toLowerCase().trim()

    if (searchFunction) {
      return items.filter(item => searchFunction(item, term))
    }

    // Default search: check if search term appears in any of the specified fields
    return items.filter(item => {
      return searchFields.some(field => {
        const value = item[field]
        if (value === null || value === undefined) return false
        
        // Handle nested objects (like data_jsonb)
        if (typeof value === 'object') {
          const jsonString = JSON.stringify(value).toLowerCase()
          return jsonString.includes(term)
        }
        
        return String(value).toLowerCase().includes(term)
      })
    })
  }, [items, searchTerm, searchFields, searchFunction])

  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage))
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, endIndex)

  // Reset to page 1 when search changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  // Navigation functions
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const nextPage = () => goToPage(currentPage + 1)
  const prevPage = () => goToPage(currentPage - 1)

  return {
    searchTerm,
    setSearchTerm: handleSearchChange,
    currentPage,
    totalPages,
    paginatedItems,
    totalItems: filteredItems.length,
    goToPage,
    nextPage,
    prevPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  }
}

