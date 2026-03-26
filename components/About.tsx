'use client'

import { motion } from 'framer-motion'
import { Database, Code, BarChart3, Zap } from 'lucide-react'

const STATS = [
  { label: 'Data Points Analyzed', value: '1TB+', icon: Database },
  { label: 'Dashboards Built', value: '50+', icon: BarChart3 },
  { label: 'Protocols Tracked', value: '100+', icon: Zap },
  { label: 'On-Chain Queries', value: '10K+', icon: Code },
]

const STACK = [
  {
    category: 'Extraction',
    items: ['The Graph', 'SQL', 'Dune Analytics', 'Flipside', 'Blockscout APIs'],
  },
  {
    category: 'Processing',
    items: ['Python', 'Node.js', 'TypeScript', 'Web3 Libraries'],
  },
  {
    category: 'Visualization',
    items: ['React', 'Tableau', 'Dune Dashboards', 'Looker Studio'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="text-label text-primary mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          About
        </motion.p>

        <motion.h2
          className="text-headline text-3xl md:text-4xl text-on-surface mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={1}
        >
          Turning raw data into
          <span className="text-primary"> tactical intelligence</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={2}
        >
          <div className="space-y-5">
            <p className="font-body text-on-surface-variant leading-relaxed text-base md:text-lg">
              For me, analytics is less about making pretty charts and more about uncovering where the{' '}
              <span className="text-primary font-semibold">real alpha</span> lives.
            </p>
            <p className="font-body text-on-surface-variant leading-relaxed text-base md:text-lg">
              I specialize in transforming raw blockchain data into tactical intelligence. Whether it&apos;s tracking 
              smart money flows or identifying protocol anomalies, my work is built for operators who need{' '}
              <span className="text-red-400 font-semibold">high-signal insights</span> in real-time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  className="bg-surface-container-low rounded-lg p-5 flex flex-col items-center justify-center text-center group hover:bg-surface-container-high transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 3}
                >
                  <Icon size={18} className="text-primary mb-2 opacity-60" />
                  <span className="text-2xl md:text-3xl font-heading font-bold text-primary tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs text-on-surface-variant mt-1 font-body">
                    {stat.label}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="bg-surface-container-low rounded-lg p-6 md:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={5}
        >
          <h3 className="text-headline text-lg text-on-surface mb-6">Tech Stack</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {STACK.map((group, idx) => (
              <div key={idx}>
                <p className="text-label text-primary mb-3">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
