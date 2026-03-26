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
      { name: 'The Graph', icon: Globe },
      { name: 'Dune Analytics', icon: Search },
      { name: 'SQL', icon: Database },
      { name: 'Flipside', icon: Server },
      { name: 'Blockscout API', icon: Cpu },
    ],
  },
  {
    category: 'Data Processing & Analysis',
    label: 'PROCESSING',
    skills: [
      { name: 'Python', icon: Code },
      { name: 'Pandas / Polars', icon: Braces },
      { name: 'Node.js', icon: Terminal },
      { name: 'TypeScript', icon: FileCode },
      { name: 'SQL Engines', icon: Database },
    ],
  },
  {
    category: 'Dashboards & Visualization',
    label: 'VISUALIZATION',
    skills: [
      { name: 'React', icon: Layout },
      { name: 'Looker Studio', icon: PieChart },
      { name: 'Tableau', icon: BarChart3 },
      { name: 'Dune Dashboards', icon: LineChart },
      { name: 'Real-time Charts', icon: Activity },
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
    <section id="skills" className="section-spacing bg-surface-container-low/50">
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
              className="bg-surface-container rounded-lg p-6 hover:bg-surface-container-high transition-colors duration-300"
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
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                        <Icon size={16} className="text-on-surface-variant group-hover:text-primary transition-colors duration-200" />
                      </div>
                      <span className="font-body text-on-surface text-sm">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status bar */}
        <motion.div
          className="mt-8 bg-surface-container rounded-lg px-6 py-4 flex justify-between items-center"
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
