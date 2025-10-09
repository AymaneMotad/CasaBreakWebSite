"use client"

import type React from "react"
import { useEffect } from "react"

export function SpinningCathedral() {
  useEffect(() => {
    // Ensure animations are applied if not already
    const outerRing = document.getElementById('outer-ring');
    const innerRing = document.getElementById('inner-ring');
    if (outerRing && !outerRing.style.animation) {
      outerRing.style.animation = 'spinSlow 20s linear infinite';
    }
    if (innerRing && !innerRing.style.animation) {
      innerRing.style.animation = 'spinReverse 15s linear infinite';
    }
  }, []);
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-charcoal/5 to-off-white relative overflow-hidden">
      {/* Moroccan Artistic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top decorative border */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-vibrant-pink/30 to-transparent"></div>
        
        {/* Side decorative lines */}
        <div className="absolute left-0 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-blue-500/18 to-transparent"></div>
        <div className="absolute right-0 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-warm-terracotta/20 to-transparent"></div>
        
        {/* Bottom decorative elements */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-6 opacity-15">
          <svg viewBox="0 0 128 24" className="w-full h-full text-vibrant-pink/30">
            <path d="M8 12 Q32 4, 56 12 Q80 20, 104 12 Q112 8, 120 12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="32" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="64" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="96" cy="12" r="1.5" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* 3D Spinning Cathedral Building */}
          <div className="relative mb-12">
            <div className="w-80 h-96 lg:w-96 lg:h-[28rem] mx-auto relative" style={{ perspective: '1000px' }}>
              {/* 3D Cathedral Building */}
              <div 
                className="w-full h-full relative"
                style={{
                  transformStyle: 'preserve-3d',
                  animation: 'rotate3D 8s linear infinite'
                }}
              >
                {/* Front Face - Cathedral Facade */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal/80 shadow-2xl"
                  style={{
                    transform: 'translateZ(60px)',
                    borderRadius: '8px'
                  }}
                >
                  {/* Twin Towers with Distinctive Cathedral Lines */}
                  <div className="absolute top-0 left-1/4 w-1/4 h-2/3 bg-gradient-to-b from-charcoal to-charcoal/90 shadow-lg rounded-t-lg">
                    {/* Tower Spire - More Prominent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-charcoal"></div>
                    {/* Tower Windows - Gothic Arches */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-5 h-8 bg-gradient-to-b from-charcoal/50 to-charcoal/30 rounded-t-full border border-charcoal/60"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-5 h-8 bg-gradient-to-b from-charcoal/50 to-charcoal/30 rounded-t-full border border-charcoal/60"></div>
                    <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-5 h-8 bg-gradient-to-b from-charcoal/50 to-charcoal/30 rounded-t-full border border-charcoal/60"></div>
                    {/* Tower Base - Cathedral Foundation */}
                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-b from-charcoal/95 to-charcoal/80 border-t-2 border-charcoal/60"></div>
                  </div>
                  
                  <div className="absolute top-0 right-1/4 w-1/4 h-2/3 bg-gradient-to-b from-charcoal to-charcoal/90 shadow-lg rounded-t-lg">
                    {/* Tower Spire - More Prominent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-charcoal"></div>
                    {/* Tower Windows - Gothic Arches */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-5 h-8 bg-gradient-to-b from-charcoal/50 to-charcoal/30 rounded-t-full border border-charcoal/60"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-5 h-8 bg-gradient-to-b from-charcoal/50 to-charcoal/30 rounded-t-full border border-charcoal/60"></div>
                    <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-5 h-8 bg-gradient-to-b from-charcoal/50 to-charcoal/30 rounded-t-full border border-charcoal/60"></div>
                    {/* Tower Base - Cathedral Foundation */}
                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-b from-charcoal/95 to-charcoal/80 border-t-2 border-charcoal/60"></div>
                  </div>
                  
                  {/* Central Nave - More Cathedral-like */}
                  <div className="absolute top-2/3 left-1/4 right-1/4 h-1/3 bg-gradient-to-b from-charcoal/95 to-charcoal/80 shadow-lg rounded-lg">
                    {/* Gothic Arch Windows on Sides */}
                    <div className="absolute top-1/6 left-1/6 w-3 h-6 bg-gradient-to-b from-charcoal/60 to-charcoal/40 rounded-t-full border border-charcoal/70"></div>
                    <div className="absolute top-1/6 right-1/6 w-3 h-6 bg-gradient-to-b from-charcoal/60 to-charcoal/40 rounded-t-full border border-charcoal/70"></div>
                    
                    {/* Rose Window - More Prominent */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-vibrant-pink/70 to-warm-terracotta/70 rounded-full border-4 border-charcoal/90 shadow-2xl">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-vibrant-pink/50 to-warm-terracotta/50 rounded-full border-2 border-charcoal/80"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-charcoal/70 rounded-full"></div>
                      {/* Rose Window Petals */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-vibrant-pink/60 rounded-full"></div>
                    </div>
                    
                    {/* Gothic Portal - More Cathedral-like */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-18 bg-gradient-to-b from-charcoal/95 to-charcoal/75 rounded-t-lg shadow-xl border-2 border-charcoal/80">
                      {/* Door Arch - More Prominent */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-b from-charcoal/70 to-charcoal/50 rounded-t-full border-2 border-charcoal/80"></div>
                      {/* Door with Cathedral Details */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-charcoal to-charcoal/90 rounded-t-lg border-2 border-charcoal/70">
                        {/* Door Panels */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-8 border border-charcoal/60 rounded"></div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-4 border border-charcoal/60 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cathedral Roof Line - More Distinctive */}
                  <div className="absolute top-2/3 left-1/4 right-1/4 h-2 bg-gradient-to-r from-charcoal/80 to-charcoal/60 border-b-2 border-charcoal/70"></div>
                </div>

                {/* Back Face */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal/60 shadow-xl"
                  style={{
                    transform: 'translateZ(-60px) rotateY(180deg)',
                    borderRadius: '8px'
                  }}
                >
                  {/* Back Towers */}
                  <div className="absolute top-0 left-1/4 w-1/4 h-2/3 bg-gradient-to-b from-charcoal/90 to-charcoal/70 shadow-lg rounded-t-lg"></div>
                  <div className="absolute top-0 right-1/4 w-1/4 h-2/3 bg-gradient-to-b from-charcoal/90 to-charcoal/70 shadow-lg rounded-t-lg"></div>
                  {/* Back Main Building */}
                  <div className="absolute top-2/3 left-1/4 right-1/4 h-1/3 bg-gradient-to-b from-charcoal/85 to-charcoal/65 shadow-lg rounded-lg"></div>
                </div>

                {/* Left Side */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-charcoal/85 to-charcoal/65 shadow-lg"
                  style={{
                    transform: 'rotateY(-90deg) translateZ(60px)',
                    borderRadius: '8px'
                  }}
                >
                  {/* Side Tower with Cathedral Details */}
                  <div className="absolute top-0 left-1/3 w-1/3 h-2/3 bg-gradient-to-b from-charcoal/90 to-charcoal/70 shadow-lg rounded-t-lg">
                    {/* Tower Spire */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-charcoal/90"></div>
                    {/* Side Tower Windows */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-charcoal/50 to-charcoal/30 rounded-t-full border border-charcoal/60"></div>
                    <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-charcoal/50 to-charcoal/30 rounded-t-full border border-charcoal/60"></div>
                  </div>
                  
                  {/* Side Main Building with Cathedral Lines */}
                  <div className="absolute top-2/3 left-1/4 right-1/4 h-1/3 bg-gradient-to-b from-charcoal/85 to-charcoal/65 shadow-lg rounded-lg">
                    {/* Side Windows */}
                    <div className="absolute top-1/4 left-1/3 w-2 h-5 bg-gradient-to-b from-charcoal/60 to-charcoal/40 rounded-t-full border border-charcoal/70"></div>
                    <div className="absolute top-1/4 right-1/3 w-2 h-5 bg-gradient-to-b from-charcoal/60 to-charcoal/40 rounded-t-full border border-charcoal/70"></div>
                    {/* Flying Buttress */}
                    <div className="absolute top-1/2 left-0 w-2 h-8 bg-gradient-to-b from-charcoal/80 to-charcoal/60 border-r border-charcoal/70"></div>
                    <div className="absolute top-1/2 right-0 w-2 h-8 bg-gradient-to-b from-charcoal/80 to-charcoal/60 border-l border-charcoal/70"></div>
                  </div>
                </div>

                {/* Right Side */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-charcoal/85 to-charcoal/65 shadow-lg"
                  style={{
                    transform: 'rotateY(90deg) translateZ(60px)',
                    borderRadius: '8px'
                  }}
                >
                  {/* Side Tower with Cathedral Details */}
                  <div className="absolute top-0 right-1/3 w-1/3 h-2/3 bg-gradient-to-b from-charcoal/90 to-charcoal/70 shadow-lg rounded-t-lg">
                    {/* Tower Spire */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-charcoal/90"></div>
                    {/* Side Tower Windows */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-charcoal/50 to-charcoal/30 rounded-t-full border border-charcoal/60"></div>
                    <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-charcoal/50 to-charcoal/30 rounded-t-full border border-charcoal/60"></div>
                  </div>
                  
                  {/* Side Main Building with Cathedral Lines */}
                  <div className="absolute top-2/3 left-1/4 right-1/4 h-1/3 bg-gradient-to-b from-charcoal/85 to-charcoal/65 shadow-lg rounded-lg">
                    {/* Side Windows */}
                    <div className="absolute top-1/4 left-1/3 w-2 h-5 bg-gradient-to-b from-charcoal/60 to-charcoal/40 rounded-t-full border border-charcoal/70"></div>
                    <div className="absolute top-1/4 right-1/3 w-2 h-5 bg-gradient-to-b from-charcoal/60 to-charcoal/40 rounded-t-full border border-charcoal/70"></div>
                    {/* Flying Buttress */}
                    <div className="absolute top-1/2 left-0 w-2 h-8 bg-gradient-to-b from-charcoal/80 to-charcoal/60 border-r border-charcoal/70"></div>
                    <div className="absolute top-1/2 right-0 w-2 h-8 bg-gradient-to-b from-charcoal/80 to-charcoal/60 border-l border-charcoal/70"></div>
                  </div>
                </div>

                {/* Top Face */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal/70 shadow-xl"
                  style={{
                    transform: 'rotateX(90deg) translateZ(60px)',
                    borderRadius: '8px'
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-vibrant-pink/30 to-warm-terracotta/30 rounded-lg shadow-lg"></div>
                  </div>
                </div>

                {/* Bottom Face */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/50 shadow-lg"
                  style={{
                    transform: 'rotateX(-90deg) translateZ(60px)',
                    borderRadius: '8px'
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-warm-terracotta/20 to-vibrant-pink/20 rounded-lg shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Introductory Text */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6 animate-gentle-fade-in">
              Un Monument au Cœur de Casablanca
            </h2>
            <p className="font-sans text-lg text-charcoal/70 leading-relaxed animate-gentle-fade-in stagger-1">
              Découvrez l'histoire fascinante de l'Ex église Sacré-Cœur, un joyau architectural Art Déco 
              qui continue d'inspirer et de rassembler les Casablancais et les visiteurs du monde entier.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
