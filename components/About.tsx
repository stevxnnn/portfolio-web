'use client'

import { motion } from 'framer-motion'
import { Database, Code, BarChart3, Zap, GraduationCap } from 'lucide-react'

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

const EDUCATION = [
  {
    degree: 'B.Sc. (Hons) in Computer Science (Specialism in Data Analytics)',
    institution: 'Asia Pacific University (APU), Petaling Jaya, Malaysia',
    period: '2018 – 2021',
    grade: 'Second Class Honours, First Division',
    note: 'Data Mining · Statistical Analysis · Database Management · Machine Learning | SAS Joint Certificate in Computer Science and Data Analytics',
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
              <span className="text-red-400 font-semibold">high-signal insights</span>{' '}
              in real-time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  className="relative rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center text-center group transition-all duration-300 overflow-hidden"
                  style={{
                    background: '#0e1628',
                    border: '1px solid rgba(0,212,255,0.1)',
                    borderTop: '2px solid rgba(0,212,255,0.25)',
                  }}
                  whileHover={{ borderTopColor: 'rgba(0,212,255,0.7)', translateY: -2 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 3}
                >
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <Icon size={14} className="text-primary/50 mb-3 relative z-10" />
                  <span className="stat-num text-3xl sm:text-4xl tabular-nums relative z-10">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-on-surface-variant mt-2 leading-tight relative z-10">
                    {stat.label}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="rounded-xl p-6 md:p-8 mb-6"
          style={{ background: '#0e1628', border: '1px solid rgba(0,212,255,0.1)', borderTop: '2px solid rgba(0,212,255,0.18)' }}
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

        {/* Education */}
        <motion.div
          className="rounded-xl p-6 md:p-8"
          style={{ background: '#0e1628', border: '1px solid rgba(0,212,255,0.1)', borderTop: '2px solid rgba(0,212,255,0.18)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={6}
        >
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap size={16} className="text-primary opacity-70" />
            <h3 className="text-headline text-lg text-on-surface">Education</h3>
          </div>
          {EDUCATION.map((edu, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <p className="font-body font-semibold text-on-surface text-sm">{edu.degree}</p>
                <p className="font-body text-sm text-primary">{edu.institution}</p>
                {'grade' in edu && edu.grade && (
                  <p className="font-body text-xs font-medium text-on-surface mt-0.5">{edu.grade}</p>
                )}
                {edu.note && <p className="font-body text-xs text-on-surface-variant mt-0.5">{edu.note}</p>}
              </div>
              <span className="font-body text-xs text-on-surface-variant tabular-nums bg-surface-container px-3 py-1.5 rounded whitespace-nowrap">
                {edu.period}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
