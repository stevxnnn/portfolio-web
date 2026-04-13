'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null)

  // Cursor glow tracking
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
        cursorRef.current.style.opacity = '1'
      }
    }
    const leave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <>
      {/* Cursor glow — follows pointer site-wide */}
      <div ref={cursorRef} className="cursor-glow" style={{ opacity: 0 }} />

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dot grid background */}
        <div className="hero-dot-grid" />

        {/* Hero radial glow bloom */}
        <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Decorative corner lines */}
        <div className="absolute top-24 left-8 md:left-16 w-px h-28 bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="absolute top-[calc(6rem+7rem)] left-8 md:left-16 w-2 h-2 rounded-full bg-primary/70 shadow-cyan-glow" />
        <div className="absolute bottom-36 right-8 md:right-16 w-px h-20 bg-gradient-to-t from-primary/30 to-transparent" />
        <div className="absolute bottom-36 right-8 md:right-16 w-1.5 h-1.5 rounded-full bg-primary/50" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* ── Left: text ── */}
            <div className="flex-1 text-center lg:text-left">

              {/* Eyebrow label */}
              <motion.p
                className="text-label text-primary mb-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                On-Chain Data Analyst
              </motion.p>

              {/* H1 name — massive */}
              <motion.h1
                className="text-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-on-surface mb-6 leading-none"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08 }}
              >
                STEVEN
                <br />
                <span className="text-primary" style={{ textShadow: '0 0 40px rgba(0,212,255,0.35)' }}>
                  LIEW
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="font-body text-lg md:text-xl text-on-surface-variant max-w-lg mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
              >
                Turning raw blockchain data into decisions that move capital.
              </motion.p>

              {/* Open to roles */}
              <motion.p
                className="font-mono text-xs text-primary/70 mb-12 tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32 }}
              >
                // Open to full-time · on-chain analytics · data engineering · Web3
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42 }}
              >
                <a
                  href="https://dune.com/zardy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  View Dune Dashboards
                </a>
                <a
                  href="/steven-liew-cv.pdf"
                  download
                  className="btn-ghost text-sm flex items-center gap-2"
                >
                  <Download size={15} />
                  Download CV
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  See work <ChevronRight size={14} />
                </a>
              </motion.div>
            </div>

            {/* ── Right: profile photo ── */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                {/* Outer glow ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />
                {/* Second glow layer */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
                {/* Photo */}
                <div className="relative w-full h-full rounded-full overflow-hidden border border-primary/25"
                  style={{ boxShadow: '0 0 50px rgba(0,212,255,0.15), 0 0 100px rgba(0,212,255,0.07)' }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Steven Liew — On-Chain Data Analyst"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full px-4 py-1.5 whitespace-nowrap"
                  style={{
                    background: 'rgba(14,22,40,0.95)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    boxShadow: '0 0 20px rgba(34,197,94,0.12)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse-slow" />
                  <span className="font-mono text-[11px] text-tertiary tracking-wider">OPEN TO WORK</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} className="text-on-surface-variant/40" />
        </motion.div>
      </section>
    </>
  )
}
