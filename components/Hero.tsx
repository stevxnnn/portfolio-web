'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative grid anchor */}
      <div className="absolute top-20 left-10 md:left-20 w-px h-32 bg-gradient-to-b from-primary/40 to-transparent" />
      <div className="absolute top-[calc(5rem+8rem)] left-10 md:left-20 w-1 h-1 rounded-full bg-primary" />

      <div className="absolute bottom-40 right-10 md:right-20 w-px h-24 bg-gradient-to-t from-primary/30 to-transparent" />
      <div className="absolute bottom-40 right-10 md:right-20 w-1 h-1 rounded-full bg-primary" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-label text-primary mb-6 tracking-[0.2em]">
            ON-CHAIN DATA ANALYST
          </p>
        </motion.div>

        <motion.h1
          className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-on-surface mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          STEVEN
          <br />
          <span className="text-primary">LIEW</span>
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Rigorous enough for the boardroom.<br className="hidden sm:block" />
          Sharp enough for the trenches.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
        >
          <a
            href="https://dune.com/zardy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            View Dune Dashboards
          </a>
          <a
            href="#projects"
            className="btn-ghost text-base"
          >
            See My Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} className="text-on-surface-variant/50" />
      </motion.div>
    </section>
  )
}
