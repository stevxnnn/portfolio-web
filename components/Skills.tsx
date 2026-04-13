'use client'

import { motion } from 'framer-motion'
import {
  Database, Globe, Search, Server, Cpu,
  Code, Braces, FileCode, Terminal,
  BarChart3, Layout, PieChart, LineChart, Activity,
} from 'lucide-react'

interface Skill {
  name: string
  icon: React.ElementType
  context: string
}

interface SkillGroup {
  category: string
  label: string
  skills: Skill[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Data Sources & APIs',
    label: 'EXTRACTION',
    skills: [
      { name: 'Dune Analytics', icon: Search, context: 'Primary tool' },
      { name: 'SQL', icon: Database, context: '3+ yrs' },
      { name: 'The Graph', icon: Globe, context: 'Subgraphs' },
      { name: 'Flipside', icon: Server, context: 'Cross-chain' },
      { name: 'Blockscout API', icon: Cpu, context: 'EVM chains' },
    ],
  },
  {
    category: 'Data Processing & Analysis',
    label: 'PROCESSING',
    skills: [
      { name: 'Python', icon: Code, context: '3+ yrs' },
      { name: 'Pandas / Polars', icon: Braces, context: 'Data wrangling' },
      { name: 'TypeScript', icon: FileCode, context: '2+ yrs' },
      { name: 'Node.js', icon: Terminal, context: 'Backend scripts' },
      { name: 'SQL Engines', icon: Database, context: 'Advanced queries' },
    ],
  },
  {
    category: 'Dashboards & Visualization',
    label: 'VISUALIZATION',
    skills: [
      { name: 'Dune Dashboards', icon: LineChart, context: 'Primary output' },
      { name: 'React', icon: Layout, context: '2+ yrs' },
      { name: 'Looker Studio', icon: PieChart, context: 'BI reporting' },
      { name: 'Tableau', icon: BarChart3, context: 'Enterprise BI' },
      { name: 'Real-time Charts', icon: Activity, context: 'Live data' },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="section-spacing" style={{ background: 'rgba(8,14,28,0.5)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-label text-primary mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          Skills
        </motion.p>

        <motion.h2
          className="text-headline text-3xl md:text-4xl text-on-surface mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={1}
        >
          Full-stack data pipeline
        </motion.h2>

        <motion.p
          className="font-body text-on-surface-variant text-base md:text-lg mb-12 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={2}
        >
          From raw on-chain events to production dashboards — every layer of the analytics stack.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              className="rounded-xl p-6 transition-all duration-300 cursor-default"
              style={{ background: '#0e1628', border: '1px solid rgba(0,212,255,0.1)', borderTop: '2px solid rgba(0,212,255,0.2)' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={gIdx + 3}
            >
              <p className="text-label text-primary mb-2">{group.label}</p>
              <h3 className="text-headline text-lg text-on-surface mb-6">{group.category}</h3>

              <div className="space-y-4">
                {group.skills.map((skill, sIdx) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between gap-3 group cursor-default"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200" style={{ background: 'rgba(0,212,255,0.06)' }}>
                          <Icon size={16} className="text-on-surface-variant group-hover:text-primary transition-colors duration-200" />
                        </div>
                        <span className="font-body text-on-surface text-sm">{skill.name}</span>
                      </div>
                      <span className="font-mono text-[10px] text-primary/50 whitespace-nowrap shrink-0 uppercase tracking-wider">
                        {skill.context}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status bar */}
        <motion.div
          className="mt-8 rounded-xl px-6 py-4 flex justify-between items-center"
          style={{ background: '#0e1628', border: '1px solid rgba(0,212,255,0.1)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={7}
        >
          <span className="font-body text-sm text-on-surface-variant">
            3 pipeline stages — 15 tools loaded
          </span>
          <span className="font-body text-sm text-primary font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            System running optimally
          </span>
        </motion.div>
      </div>
    </section>
  )
}
