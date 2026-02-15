'use client'

import { useState } from 'react'
import {
  FaPython,
  FaEthereum,
  FaDatabase,
  FaChartLine,
  FaJs,
  FaCodeBranch,
  FaChevronDown,
} from 'react-icons/fa'
import { IconType } from 'react-icons'

interface Tool {
  name: string
  iconComponent: IconType
}

interface TechStack {
  title: string
  subtitle: string
  accentClass: string
  glowClass: string
  iconComponent: IconType
  tools: Tool[]
}

const STACKS: TechStack[] = [
  {
    title: 'THE EXTRACTOR',
    subtitle: 'Data Sources & APIs',
    accentClass: 'text-accent-blue',
    glowClass: 'from-accent-blue/20',
    iconComponent: FaDatabase,
    tools: [
      { name: 'The Graph', iconComponent: FaCodeBranch },
      { name: 'Dune Analytics', iconComponent: FaChartLine },
      { name: 'SQL', iconComponent: FaDatabase },
      { name: 'Flipside', iconComponent: FaChartLine },
      { name: 'Blockscout API', iconComponent: FaEthereum },
    ],
  },
  {
    title: 'THE PROCESSOR',
    subtitle: 'Data Processing & Analysis',
    accentClass: 'text-accent-gold',
    glowClass: 'from-accent-gold/20',
    iconComponent: FaPython,
    tools: [
      { name: 'Python', iconComponent: FaPython },
      { name: 'Pandas / Polars', iconComponent: FaPython },
      { name: 'Node.js', iconComponent: FaJs },
      { name: 'TypeScript', iconComponent: FaJs },
      { name: 'SQL', iconComponent: FaDatabase },
    ],
  },
  {
    title: 'THE VISUALIZER',
    subtitle: 'Dashboards & Visualization',
    accentClass: 'text-accent-emerald',
    glowClass: 'from-accent-emerald/20',
    iconComponent: FaChartLine,
    tools: [
      { name: 'React', iconComponent: FaJs },
      { name: 'Looker Studio', iconComponent: FaChartLine },
      { name: 'Tableau', iconComponent: FaChartLine },
      { name: 'Custom Dashboards', iconComponent: FaChartLine },
      { name: 'Real-time Charts', iconComponent: FaChartLine },
    ],
  },
]

export default function Skills() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggle = (index: number) => {
    setExpanded(expanded === index ? null : index)
  }

  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-gradient-gold">TECH</span>{' '}
          <span className="text-white">STACKS</span>
        </h2>
        <div className="w-16 h-0.5 bg-accent-gold/50 mx-auto mb-4" />
        <p className="text-slate-400 max-w-xl mx-auto font-sans">
          Tools I use to extract, process, and visualize on-chain data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {STACKS.map((stack, index) => {
          const Icon = stack.iconComponent
          const isOpen = expanded === index

          return (
            <div
              key={index}
              className="gradient-border group cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="bg-dark-card rounded-2xl p-6 transition-all duration-300 group-hover:bg-dark-card-hover relative overflow-hidden">
                {/* Ambient glow on hover */}
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${stack.glowClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`text-2xl ${stack.accentClass}`} />
                    <FaChevronDown
                      className={`text-sm text-slate-500 transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono mb-1">
                    {stack.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">
                    {stack.subtitle}
                  </p>

                  {/* Tools — always visible on desktop, accordion on mobile */}
                  <div
                    className={`space-y-2.5 overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 md:max-h-[300px] md:opacity-100'
                      }`}
                  >
                    {stack.tools.map((tool, ti) => {
                      const ToolIcon = tool.iconComponent
                      return (
                        <div
                          key={ti}
                          className="flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors"
                        >
                          <ToolIcon className={`text-sm ${stack.accentClass} opacity-60`} />
                          <span className="text-sm font-sans">{tool.name}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Mobile tap hint */}
                  <div
                    className={`text-xs text-slate-600 font-mono mt-3 text-center md:hidden transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                  >
                    tap to expand
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
