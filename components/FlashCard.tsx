'use client'

import { useEffect, useRef, useState } from 'react'

interface FlashCardProps {
  children: React.ReactNode
  id: string
  cardNumber?: number
  totalCards?: number
  className?: string
}

export default function FlashCard({
  children,
  id,
  cardNumber,
  totalCards,
  className = '',
}: FlashCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      id={id}
      ref={cardRef}
      className={`min-h-screen flex items-center justify-center px-4 snap-start snap-always ${className}`}
    >
      <div
        className={`w-full max-w-6xl transition-all duration-1000 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-32 scale-95'
        }`}
      >
        <div className="bg-dark-card border-2 border-neon-blue/40 rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_0_50px_rgba(0,240,255,0.1)] transform hover:scale-[1.01] transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
          {/* Card number indicator */}
          {cardNumber && totalCards && (
            <div className="absolute top-4 right-4 text-neon-blue/60 text-sm font-mono">
              {String(cardNumber).padStart(2, '0')} / {String(totalCards).padStart(2, '0')}
            </div>
          )}
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neon-blue/0 via-neon-blue/20 to-neon-blue/0 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
          {children}
        </div>
      </div>
    </div>
  )
}
