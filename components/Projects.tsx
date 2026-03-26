'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight, Eye, X, Maximize2 } from 'lucide-react'

interface Project {
  headline: string
  problem: string
  solution: string
  tech: string[]
  link: string
  linkLabel: string
  embedUrl: string
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
    embedUrl: 'https://dune.com/embeds/zardy/bedrock',
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
    embedUrl: 'https://dune.com/embeds/test4444/br',
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
    embedUrl: 'https://dune.com/embeds/test4444/br-lp-overview',
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
    embedUrl: 'https://dune.com/embeds/test4444/unibtc-retention-data-on-eth',
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
    embedUrl: 'https://dune.com/embeds/test4444/unibtc-flow-on-eth',
  },
]

const OTHER_PROJECTS: Project[] = [
  {
    headline: 'Tennis Rotation Visualizer',
    problem:
      'A real-time, animated simulation of a 3-player tennis match built entirely in Python, visualizing scoring logic, ball physics, and player movement.',
    solution:
      'Enforces rotation rules (including "winner stays on") and "cooling off" periods after win streaks, driven by asyncio updates with clean state modeling via dataclasses.',
    tech: ['Python', 'Flet', 'asyncio', 'dataclasses', 'Render'],
    link: 'https://tennis-app-e3ng.onrender.com/',
    linkLabel: 'Live Demo',
    embedUrl: 'https://tennis-app-e3ng.onrender.com/',
  },
  {
    headline: "Valentine's Day Invitation Card",
    problem: 'Wanted to create a fun, interactive digital invitation card for Valentine\'s Day.',
    solution: 'Built a personalized web-based dynamic invitation with interactive elements and animations.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://vday14022026.vercel.app/',
    linkLabel: 'Live Demo',
    embedUrl: 'https://vday14022026.vercel.app/',
  },
  {
    headline: 'Superteam Malaysia Website Bounty',
    problem: 'Superteam Malaysia needed an official, modernized Web3 hub to represent their community ecosystem.',
    solution: 'Designed and developed a landing page featuring sections for members, partners, and events, adhering to Superteam global brand guidelines.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    link: 'https://superteamweb.vercel.app/',
    linkLabel: 'Live Demo',
    embedUrl: 'https://superteamweb.vercel.app/',
  },
]

type Tab = 'onchain' | 'projects'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('onchain')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [previewProject, setPreviewProject] = useState<Project | null>(null)

  const projects = activeTab === 'onchain' ? ON_CHAIN_PROJECTS : OTHER_PROJECTS

  const openPreview = useCallback((project: Project, e: React.MouseEvent) => {
    e.stopPropagation()
    setPreviewProject(project)
    document.body.style.overflow = 'hidden'
  }, [])

  const closePreview = useCallback(() => {
    setPreviewProject(null)
    document.body.style.overflow = ''
  }, [])

  return (
    <>
      <section id="projects" className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            className="text-label text-primary mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
          >
            Projects
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <motion.h2
              className="text-headline text-3xl md:text-4xl text-on-surface"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={1}
            >
              Selected work
            </motion.h2>

            {/* Tabs */}
            <motion.div
              className="flex gap-1 bg-surface-container rounded-lg p-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <button
                onClick={() => { setActiveTab('onchain'); setExpandedProject(null) }}
                className={`px-5 py-2 rounded font-body text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === 'onchain'
                    ? 'bg-surface-container-high text-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                On-Chain
              </button>
              <button
                onClick={() => { setActiveTab('projects'); setExpandedProject(null) }}
                className={`px-5 py-2 rounded font-body text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === 'projects'
                    ? 'bg-surface-container-high text-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Projects
              </button>
            </motion.div>
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const isExpanded = expandedProject === index
              return (
                <motion.div
                  key={`${activeTab}-${index}`}
                  className="data-card group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index + 3}
                  onClick={() => setExpandedProject(isExpanded ? null : index)}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-headline text-lg text-on-surface group-hover:text-primary transition-colors duration-200">
                      {project.headline}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors flex-shrink-0 mt-1"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Open ${project.headline}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-5 line-clamp-2">
                    {project.problem}
                  </p>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-5 space-y-3"
                    >
                      <div>
                        <p className="text-label text-primary mb-1">Solution</p>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-chip">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="flex items-center gap-5 mt-5">
                    <button
                      onClick={(e) => openPreview(project, e)}
                      className="inline-flex items-center gap-2 font-body text-sm text-primary font-medium hover:gap-3 transition-all duration-200 cursor-pointer group/preview"
                    >
                      <Eye size={14} className="group-hover/preview:scale-110 transition-transform" />
                      Preview
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm text-on-surface-variant font-medium hover:text-primary hover:gap-3 transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.linkLabel} <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Preview modal — iframe loads lazily on demand */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-surface/90 backdrop-blur-md"
              onClick={closePreview}
            />

            {/* Modal */}
            <motion.div
              className="relative w-full max-w-6xl h-[85vh] bg-surface-container rounded-xl border border-outline-variant/10 overflow-hidden flex flex-col shadow-2xl"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' as const }}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-outline-variant/10 bg-surface-container-low flex-shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <Eye size={14} className="text-primary flex-shrink-0" />
                  <h3 className="font-heading text-sm font-semibold text-on-surface truncate">
                    {previewProject.headline}
                  </h3>
                  <div className="hidden sm:flex gap-1.5 ml-2">
                    {previewProject.tech.slice(0, 2).map((t) => (
                      <span key={t} className="tech-chip !text-[10px] !px-2 !py-0.5">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={previewProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200 cursor-pointer"
                    title="Open in new tab"
                  >
                    <Maximize2 size={14} />
                  </a>
                  <button
                    onClick={closePreview}
                    className="p-1.5 rounded text-on-surface-variant hover:text-red-400 hover:bg-surface-container-high transition-all duration-200 cursor-pointer"
                    title="Close preview"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Iframe container — lazy loaded only when modal opens */}
              <div className="flex-1 relative bg-surface-container-lowest">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    <span className="text-xs text-on-surface-variant font-body">Loading preview…</span>
                  </div>
                </div>
                <iframe
                  src={previewProject.embedUrl}
                  title={`Preview of ${previewProject.headline}`}
                  className="absolute inset-0 w-full h-full border-none"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  allow="clipboard-read; clipboard-write"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
