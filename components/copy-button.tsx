"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CopyButtonProps {
  text: string
  label?: string
}

export function CopyButton({ text, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-sans text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all duration-200"
      aria-label={`Copy ${label || text}`}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span>Copié!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copier</span>
        </>
      )}
    </button>
  )
}

