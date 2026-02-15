'use client'

import { useEffect, useState, useCallback } from 'react'
import { FaArrowDown } from 'react-icons/fa'


const LINES = [
  { prefix: '$', text: 'whoami', delay: 600 },
  { prefix: '>', text: 'Steven Liew — On-Chain Data Analyst', delay: 1200 },
  { prefix: '$', text: 'cat mission.txt', delay: 800 },
  { prefix: '>', text: 'Rigorous enough for the boardroom.', delay: 900 },
  { prefix: '>', text: 'Sharp enough for the trenches.', delay: 700 },
  { prefix: '$', text: 'echo $ALPHA_STATUS', delay: 600 },
  { prefix: '>', text: '🟢  ACTIVE', delay: 400 },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isTyping, setIsTyping] = useState(true)


  // Typing animation
  useEffect(() => {
    if (visibleLines >= LINES.length) {
      setIsTyping(false)
      return
    }

    const line = LINES[visibleLines]
    if (currentChar < line.text.length) {
      const speed = line.prefix === '$' ? 45 : 25
      const timer = setTimeout(() => setCurrentChar((c) => c + 1), speed)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setVisibleLines((l) => l + 1)
        setCurrentChar(0)
      }, line.delay)
      return () => clearTimeout(timer)
    }
  }, [visibleLines, currentChar])



  const renderLine = useCallback(
    (index: number) => {
      const line = LINES[index]
      const isCurrentLine = index === visibleLines
      const text = isCurrentLine ? line.text.slice(0, currentChar) : line.text
      const isCommand = line.prefix === '$'

      return (
        <div
          key={index}
          className={`flex items-start gap-3 ${index < visibleLines
            ? 'opacity-100'
            : isCurrentLine
              ? 'opacity-100'
              : 'opacity-0'
            } transition-opacity duration-300`}
        >
          <span
            className={`flex-shrink-0 font-mono text-sm ${isCommand ? 'text-accent-gold' : 'text-slate-500'
              }`}
          >
            {line.prefix}
          </span>
          <span
            className={`font-mono text-sm md:text-base ${isCommand
              ? 'text-slate-200'
              : index === 6
                ? 'text-accent-emerald font-bold'
                : 'text-slate-400'
              }`}
          >
            {text}
            {isCurrentLine && isTyping && (
              <span className="inline-block w-2 h-4 ml-0.5 bg-accent-gold animate-typing-cursor align-middle" />
            )}
          </span>
        </div>
      )
    },
    [visibleLines, currentChar, isTyping]
  )

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-gold/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/[0.04] blur-[100px] pointer-events-none" />



      {/* Terminal */}
      <div className="w-full max-w-2xl mx-auto px-6 relative z-10">
        <div className="gradient-border">
          <div className="bg-dark-card rounded-2xl p-6 md:p-10">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-dark-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-slate-500 font-mono">
                analyst@portfolio ~ %
              </span>
            </div>

            {/* Terminal lines */}
            <div className="space-y-3 min-h-[200px]">
              {LINES.map((_, index) => {
                if (index <= visibleLines) return renderLine(index)
                return null
              })}
            </div>
          </div>
        </div>

        {/* CTAs below terminal */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 transition-all duration-700 ${!isTyping ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent-gold hover:bg-accent-gold-light text-dark-bg rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-accent-gold/20 hover:shadow-xl hover:shadow-accent-gold/30 font-mono text-sm"
          >
            VIEW MY WORK
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent-gold/40 text-accent-gold hover:bg-accent-gold/10 rounded-xl font-semibold transition-all hover:scale-105 font-mono text-sm"
          >
            LET'S TALK DATA
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${!isTyping ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <a
          href="#about"
          className="text-accent-gold/60 hover:text-accent-gold animate-float"
        >
          <FaArrowDown size={20} />
        </a>
      </div>
    </section>
  )
}
