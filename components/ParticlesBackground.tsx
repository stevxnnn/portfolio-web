'use client'

import { useMemo } from 'react'

export default function ParticlesBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
    }))
  }, [])

  const lines = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20 particle-grid"></div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-neon-blue opacity-30 particle-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `particleFloat ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            '--particle-x': `${particle.x}px`,
            '--particle-y': `${particle.y}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* Connecting lines effect */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {lines.map((line) => (
          <line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            opacity={0.2}
          />
        ))}
      </svg>
    </div>
  )
}
