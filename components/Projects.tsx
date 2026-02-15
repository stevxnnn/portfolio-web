'use client'

import { useState } from 'react'
import { FaExternalLinkAlt, FaTimes, FaChevronRight } from 'react-icons/fa'

interface Project {
  headline: string
  problem: string
  solution: string
  tech: string[]
  link: string
  linkLabel: string
  duneEmbed: string | null
  imageUrl?: string
  embedUrl?: string
  embedPaddingTop?: string
}

const ON_CHAIN_PROJECTS: Project[] = [
  {
    headline: 'Bedrock uniBTC TVL Tracker',
    problem:
      "Needed to track Bedrock's uniBTC Total Value Locked (TVL) across different chains to monitor protocol growth and cross-chain asset distribution.",
    solution:
      "Built a comprehensive Dune Analytics dashboard that aggregates TVL data across multiple chains, providing real-time insights into Bedrock's uniBTC deployment and growth metrics.",
    tech: ['SQL', 'Dune Analytics', 'Data Visualization'],
    link: 'https://dune.com/zardy/bedrock',
    linkLabel: 'Dune Dashboard',
    duneEmbed: '4495847/7513776',
  },
  {
    headline: 'Binance Alpha BR Token Trading Campaign',
    problem:
      'Required real-time tracking and analytics for the Binance Alpha BR token trading campaign to monitor trading volume, user participation, and campaign performance metrics.',
    solution:
      'Developed a Dune Analytics dashboard that tracks key trading statistics including volume, unique traders, transaction counts, and campaign engagement metrics for the BR token trading campaign.',
    tech: ['SQL', 'Dune Analytics', 'Data Visualization'],
    link: 'https://dune.com/test4444/br',
    linkLabel: 'Dune Dashboard',
    duneEmbed: '5301268/8698675',
  },
  {
    headline: 'BR Token Team LP Overview',
    problem:
      "Needed to monitor and track the team's liquidity pool (LP) positions for the BR token to ensure transparency, track LP performance, and analyze liquidity provision metrics.",
    solution:
      "Created a comprehensive Dune Analytics dashboard that provides real-time visibility into the team's LP positions, including LP value, token distribution, and liquidity metrics for the BR token.",
    tech: ['SQL', 'Dune Analytics', 'Data Visualization'],
    link: 'https://dune.com/test4444/br-lp-overview',
    linkLabel: 'Dune Dashboard',
    duneEmbed: null,
    imageUrl: '/br-lp-overview.png',
  },
  {
    headline: 'uniBTC Retention on Ethereum',
    problem:
      "Needed to track the retention of uniBTC on Ethereum to monitor the protocol's growth and user engagement.",
    solution:
      "Developed a comprehensive Dune Analytics dashboard that provides real-time visibility into the retention of uniBTC on Ethereum, including retention rate, user engagement, and protocol growth metrics.",
    tech: ['SQL', 'Dune Analytics', 'Data Visualization'],
    link: 'https://dune.com/test4444/unibtc-retention-data-on-eth',
    linkLabel: 'Dune Dashboard',
    duneEmbed: '5189468/8539698',
  },
  {
    headline: 'uniBTC Flow Dashboard',
    problem:
      "Required to track usage and flow of uniBTC on Ethereum to strengthen the protocol's new integration and user experience.",
    solution:
      "Created a comprehensive Dune Analytics dashboard that provides real-time visibility into the usage and flow of uniBTC on Ethereum, including TVL and names and contracts of third party protocols.",
    tech: ['SQL', 'Dune Analytics', 'Data Visualization'],
    link: 'https://dune.com/test4444/unibtc-flow-on-eth',
    linkLabel: 'Dune Dashboard',
    duneEmbed: '5331283/8737297',
  },
]

const FREETIME_PROJECTS: Project[] = [
  {
    headline: 'Tennis Rotation Visualizer',
    problem:
      'A real-time, animated simulation of a 3-player tennis match built entirely in Python, visualizing scoring logic, ball physics, and player movement.',
    solution:
      'Enforces rotation rules (including "winner stays on") and "cooling off" periods after win streaks, driven by asyncio updates with clean state modeling via dataclasses.',
    tech: ['Python', 'Flet', 'asyncio', 'dataclasses', 'Render'],
    link: 'https://tennis-app-e3ng.onrender.com/',
    linkLabel: 'Live Demo',
    duneEmbed: null,
    embedUrl: 'https://tennis-app-e3ng.onrender.com/',
    embedPaddingTop: '140%',
  },
]

type Tab = 'onchain' | 'freetime'

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('onchain')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects =
    activeTab === 'onchain' ? ON_CHAIN_PROJECTS : FREETIME_PROJECTS

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-gradient-gold">CASE</span>{' '}
          <span className="text-white">STUDIES</span>
        </h2>
        <div className="w-16 h-0.5 bg-accent-gold/50 mx-auto mb-4" />
        <p className="text-slate-400 max-w-xl mx-auto font-sans">
          Real projects solving real problems — on-chain dashboards and freetime
          builds
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-dark-card rounded-xl p-1 border border-dark-border">
          <button
            onClick={() => {
              setActiveTab('onchain')
              setExpandedProject(null)
            }}
            className={`px-6 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 ${activeTab === 'onchain'
              ? 'bg-accent-gold text-dark-bg font-bold shadow-lg shadow-accent-gold/20'
              : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            On-Chain ({ON_CHAIN_PROJECTS.length})
          </button>
          <button
            onClick={() => {
              setActiveTab('freetime')
              setExpandedProject(null)
            }}
            className={`px-6 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 ${activeTab === 'freetime'
              ? 'bg-accent-gold text-dark-bg font-bold shadow-lg shadow-accent-gold/20'
              : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            Freetime ({FREETIME_PROJECTS.length})
          </button>
        </div>
      </div>

      {/* Project cards */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {projects.map((project, index) => {
          const isExpanded = expandedProject === index

          return (
            <div key={`${activeTab}-${index}`} className="gradient-border">
              <div className="bg-dark-card rounded-2xl overflow-hidden">
                {/* Compact card header — always visible */}
                <button
                  onClick={() => toggleProject(index)}
                  className="w-full p-5 md:p-6 flex items-center justify-between text-left group hover:bg-dark-card-hover transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white font-mono group-hover:text-accent-gold transition-colors truncate">
                      {project.headline}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tech.map((tag, ti) => (
                        <span
                          key={ti}
                          className="px-2 py-0.5 bg-accent-gold/10 text-accent-gold/80 rounded text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <FaChevronRight
                    className={`text-slate-500 ml-4 flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''
                      }`}
                  />
                </button>

                {/* Expanded detail panel */}
                <div
                  className={`detail-panel ${isExpanded ? 'open' : ''}`}
                  style={isExpanded ? { padding: '0 1.5rem 1.5rem' } : {}}
                >
                  <div className="border-t border-dark-border pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Left: Problem & Solution */}
                      <div className="space-y-5">
                        <div>
                          <h4 className="text-accent-blue font-mono text-xs uppercase tracking-widest mb-2">
                            The Problem
                          </h4>
                          <p className="text-slate-400 font-sans text-sm leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-accent-gold font-mono text-xs uppercase tracking-widest mb-2">
                            The Solution
                          </h4>
                          <p className="text-slate-400 font-sans text-sm leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold-light transition-colors text-sm font-mono"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          {project.linkLabel}
                        </a>
                      </div>

                      {/* Right: Embed / Preview (lazy loaded) */}
                      <div className="bg-dark-bg-lighter rounded-xl border border-dark-border p-3 min-h-[280px]">
                        {isExpanded && project.embedUrl ? (
                          <div className="w-full overflow-hidden rounded-lg">
                            <div
                              className="relative w-full"
                              style={{
                                paddingTop: project.embedPaddingTop ?? '56.25%',
                              }}
                            >
                              <iframe
                                src={project.embedUrl}
                                className="absolute inset-0 w-full h-full border-0"
                                title={project.headline}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allow="fullscreen"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        ) : isExpanded && project.duneEmbed ? (
                          <div className="w-full overflow-hidden rounded-lg">
                            <div
                              className="relative w-full"
                              style={{ paddingTop: '100%' }}
                            >
                              <iframe
                                src={`https://dune.com/embeds/${project.duneEmbed}?theme=dark`}
                                className="absolute inset-0 w-full h-full border-0"
                                title={project.headline}
                                allow="clipboard-write"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ) : isExpanded && project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.headline}
                            className="w-full h-auto rounded-lg max-h-[500px] object-contain"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full min-h-[280px] text-slate-600 font-mono text-sm">
                            <div className="text-center">
                              <div className="text-2xl mb-2">📊</div>
                              <div>Loading preview...</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
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
