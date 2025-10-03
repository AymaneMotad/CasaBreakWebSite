"use client"

import type React from "react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Contact</p>
            <h2 className="font-serif font-light text-5xl lg:text-6xl text-charcoal mb-8 leading-tight">
              Planifiez votre visite
            </h2>
            <p className="font-sans text-lg leading-relaxed text-charcoal/70">
              Pour organiser une visite guidée ou obtenir plus d'informations sur les événements à venir, n'hésitez pas
              à nous contacter.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                placeholder="Nom complet"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-charcoal/20 py-4 font-sans text-base text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-terracotta transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Adresse email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-charcoal/20 py-4 font-sans text-base text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-terracotta transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-charcoal/20 py-4 font-sans text-base text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-terracotta transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-block bg-forest text-off-white font-sans text-sm tracking-widest uppercase px-12 py-4 hover:bg-forest-light transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
