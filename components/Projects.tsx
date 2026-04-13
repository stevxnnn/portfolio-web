'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight, Eye, X, BarChart2 } from 'lucide-react'
import Image from 'next/image'

interface Project {
  headline: string
  outcome: string
  detail: string
  tech: string[]
  link: string
  linkLabel: string
  embedUrl?: string
  thumbnail?: string
  stats?: { label: string; value: string }[]
}

const ON_CHAIN_PROJECTS: Project[] = [
  {
    headline: 'Bedrock uniBTC TVL Tracker',
    outcome: 'Built a cross-chain TVL dashboard for Bedrock Protocol tracking uniBTC deployment across Ethereum, BNB Chain and beyond — giving the team real-time protocol growth visibility.',
    detail: "Aggregated TVL data across multiple chains using decoded on-chain event logs. Surfaced chain-level breakdown, inflow/outflow trends, and protocol growth metrics that became the team's primary reference during fundraising reviews.",
    tech: ['SQL', 'Dune Analytics', 'Multi-chain', 'Data Visualization'],
    link: 'https://dune.com/zardy/bedrock',
    linkLabel: 'Dune Dashboard',
    embedUrl: 'https://dune.com/embeds/6991738/10910958?theme=dark',
    thumbnail: '/thumb-bedrock-tvl.png',
    stats: [{ label: 'Chains tracked', value: '5+' }, { label: 'Metrics surfaced', value: '20+' }],
  },
  {
    headline: 'Binance Alpha BR Token Campaign',
    outcome: 'Delivered real-time campaign analytics for the Binance Alpha BR token trading campaign — measuring volume, unique traders, and participation rates across the campaign window.',
    detail: 'Developed a live Dune dashboard tracking key trading statistics including cumulative volume, unique wallet counts, transaction frequency and campaign engagement. Helped the team make rapid, data-driven decisions during the live event.',
    tech: ['SQL', 'Dune Analytics', 'DeFi Analytics', 'Campaign Tracking'],
    link: 'https://dune.com/test4444/br',
    linkLabel: 'Dune Dashboard',
    embedUrl: 'https://dune.com/embeds/5301288/8698709?theme=dark',
    thumbnail: '/thumb-binance-alpha.png',
    stats: [{ label: 'Metrics tracked', value: '10+' }],
  },
  {
    headline: 'BR Token Team LP Overview',
    outcome: 'Created a transparency dashboard for BR Token team LP positions — giving the community and team real-time visibility into liquidity health and token distribution.',
    detail: 'Monitors team LP positions including LP value, token distribution, liquidity metrics and pool composition. Designed to support accountability and community trust during the token launch phase.',
    tech: ['SQL', 'Dune Analytics', 'DeFi Analytics', 'LP Monitoring'],
    link: 'https://dune.com/test4444/br-lp-overview',
    linkLabel: 'Dune Dashboard',
    embedUrl: 'https://dune.com/embeds/5576739/9076182?theme=dark',
    thumbnail: '/thumb-br-lp.png',
  },
  {
    headline: 'uniBTC Retention on Ethereum',
    outcome: 'Surfaced user retention patterns for uniBTC on Ethereum — tracking cohort behaviour and protocol stickiness for the Bedrock core team.',
    detail: "Tracks wallet-level retention rates, cohort return intervals, and engagement depth over time. Served as a direct input to Bedrock's growth and user-acquisition strategy reviews.",
    tech: ['SQL', 'Dune Analytics', 'Cohort Analysis', 'Ethereum'],
    link: 'https://dune.com/test4444/unibtc-retention-data-on-eth',
    linkLabel: 'Dune Dashboard',
    embedUrl: 'https://dune.com/embeds/5189468/8539698?theme=dark',
    thumbnail: '/thumb-unibtc-retention.png',
  },
  {
    headline: 'uniBTC Flow Dashboard',
    outcome: 'Mapped the full flow of uniBTC on Ethereum — tracking third-party integrations, contract interactions and TVL attribution to each integration partner.',
    detail: 'Provides real-time visibility into uniBTC usage flows, including TVL by integration, third-party protocol names, and contract-level breakdowns. Used to validate and strengthen new protocol integrations.',
    tech: ['SQL', 'Dune Analytics', 'Protocol Analytics', 'Ethereum'],
    link: 'https://dune.com/test4444/unibtc-flow-on-eth',
    linkLabel: 'Dune Dashboard',
    embedUrl: 'https://dune.com/embeds/5331283/8737297?theme=dark',
    thumbnail: '/thumb-unibtc-flow.png',
  },
]

const OTHER_PROJECTS: Project[] = [
  {
    headline: 'Tennis Rotation Visualizer',
    outcome: 'Built a real-time animated simulation of a 3-player tennis rotation match — complete with ball physics, scoring logic and win-streak rules.',
    detail: 'Enforces rotation rules and cooling-off periods after win streaks. Uses asyncio for real-time updates and clean state modeling via dataclasses. Deployed live on Render.',
    tech: ['Python', 'Flet', 'asyncio', 'dataclasses', 'Render'],
    link: 'https://tennis-app-e3ng.onrender.com/',
    linkLabel: 'Live Demo',
    embedUrl: 'https://tennis-app-e3ng.onrender.com/',
  },
  {
    headline: "Valentine's Day Invitation Card",
    outcome: "Shipped a personalised, interactive digital invitation card for Valentine's Day with animations and surprises.",
    detail: 'Built a personalized web-based dynamic invitation with interactive elements, reveal animations, and mobile-responsive layout. Deployed on Vercel.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://vday14022026.vercel.app/',
    linkLabel: 'Live Demo',
    embedUrl: 'https://vday14022026.vercel.app/',
  },
  {
    headline: 'Superteam Malaysia Website',
    outcome: 'Won a competitive Web3 bounty to design and build the official Superteam Malaysia website — a hub for the Solana ecosystem in Malaysia.',
    detail: 'Designed and developed a landing page featuring members directory, partners showcase, and events calendar, adhering to Superteam global brand guidelines and deployed on Vercel.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    link: 'https://superteamweb.vercel.app/',
    linkLabel: 'Live Demo',
    embedUrl: 'https://superteamweb.vercel.app/',
    stats: [{ label: 'Type', value: 'Bounty win' }],
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
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)

  const projects = activeTab === 'onchain' ? ON_CHAIN_PROJECTS : OTHER_PROJECTS

  const openPreview = useCallback((project: Project, e: React.MouseEvent) => {
    e.stopPropagation()
    setPreviewProject(project)
    setIframeLoaded(false)
    setIframeError(false)
    document.body.style.overflow = 'hidden'
  }, [])

  const closePreview = useCallback(() => {
    setPreviewProject(null)
    setIframeLoaded(false)
    setIframeError(false)
    document.body.style.overflow = ''
  }, [])

  return (
    <>
      <section id="projects" className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            className="text-label text-primary mb-4"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp} custom={0}
          >
            Projects
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <motion.h2
              className="text-headline text-3xl md:text-4xl text-on-surface"
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp} custom={1}
            >
              Selected work
            </motion.h2>

            <motion.div
              className="flex gap-1 rounded-lg p-1"
              style={{ background: '#0e1628', border: '1px solid rgba(0,212,255,0.1)' }}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp} custom={2}
            >
              {(['onchain', 'projects'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setExpandedProject(null) }}
                  className={`px-5 py-2 rounded font-body text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === tab ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  style={activeTab === tab ? { background: 'rgba(0,212,255,0.08)' } : {}}
                >
                  {tab === 'onchain' ? 'On-Chain' : 'Projects'}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const isExpanded = expandedProject === index
              return (
                <motion.div
                  key={`${activeTab}-${index}`}
                  className="data-card group flex flex-col"
                  initial="hidden" whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp} custom={index + 3}
                  onClick={() => setExpandedProject(isExpanded ? null : index)}
                >
                  {project.thumbnail && (
                    <div className="relative w-full h-40 rounded-lg overflow-hidden mb-5 flex-shrink-0" style={{ background: '#080e1c' }}>
                      <Image
                        src={project.thumbnail}
                        alt={`Preview of ${project.headline}`}
                        fill
                        className="object-cover object-top opacity-75 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-300"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                        style={{ background: 'linear-gradient(to top, #0e1628 0%, transparent 100%)' }} />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-headline text-lg text-on-surface group-hover:text-primary transition-colors duration-200">
                      {project.headline}
                    </h3>
                    <a
                      href={project.link} target="_blank" rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors flex-shrink-0 mt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  {project.stats && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.stats.map((s) => (
                        <span key={s.label} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-body font-semibold bg-primary/10 text-primary">
                          {s.value} <span className="font-normal opacity-70">{s.label}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
                    {project.outcome}
                  </p>

                  {isExpanded && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-4">
                      <p className="text-label text-primary mb-1">Details</p>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">{project.detail}</p>
                    </motion.div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => <span key={t} className="tech-chip">{t}</span>)}
                  </div>

                  <div className="flex items-center gap-5 mt-5">
                    <button
                      onClick={(e) => openPreview(project, e)}
                      className="inline-flex items-center gap-2 font-body text-sm text-primary font-medium hover:gap-3 transition-all duration-200 cursor-pointer group/preview"
                    >
                      <Eye size={14} className="group-hover/preview:scale-110 transition-transform" />
                      Preview
                    </button>
                    <a
                      href={project.link} target="_blank" rel="noopener noreferrer"
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

      <AnimatePresence>
        {previewProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 backdrop-blur-md"
              style={{ background: 'rgba(8,14,28,0.92)' }}
              onClick={closePreview}
            />

            <motion.div
              className="relative w-full flex flex-col shadow-2xl"
              style={{
                maxWidth: iframeError ? '42rem' : '80rem',
                height: iframeError ? 'auto' : '88vh',
                maxHeight: '92vh',
                background: '#0e1628',
                border: '1px solid rgba(0,212,255,0.15)',
                borderRadius: '1rem',
                overflow: 'hidden',
              }}
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' as const }}
            >
              {/* Title bar */}
              <div
                className="flex items-center justify-between px-5 py-3 flex-shrink-0"
                style={{ borderBottom: '1px solid rgba(0,212,255,0.1)', background: 'rgba(8,14,28,0.6)' }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <BarChart2 size={14} className="text-primary flex-shrink-0" />
                  <h3 className="font-heading text-sm font-semibold text-on-surface truncate">{previewProject.headline}</h3>
                  <div className="hidden sm:flex gap-1.5 ml-1">
                    {previewProject.tech.slice(0, 2).map((t) => (
                      <span key={t} className="tech-chip !text-[10px] !px-2 !py-0.5">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {iframeError && (
                    <span className="font-mono text-[10px] text-yellow-400/70 tracking-wider uppercase hidden sm:inline">embed blocked</span>
                  )}
                  <a href={previewProject.link} target="_blank" rel="noopener noreferrer"
                    className="p-1.5 rounded text-on-surface-variant hover:text-primary transition-colors cursor-pointer" title="Open in new tab">
                    <ExternalLink size={14} />
                  </a>
                  <button onClick={closePreview}
                    className="p-1.5 rounded text-on-surface-variant hover:text-red-400 transition-colors cursor-pointer" title="Close">
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Body */}
              {!iframeError && previewProject.embedUrl ? (
                <div className="flex-1 relative" style={{ minHeight: 0, background: '#080e1c', colorScheme: 'dark' }}>
                  {!iframeLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none z-10">
                      <div className="w-7 h-7 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                      <span className="font-mono text-xs text-on-surface-variant tracking-wider">Loading dashboard…</span>
                    </div>
                  )}
                  <iframe
                    key={previewProject.embedUrl}
                    src={previewProject.embedUrl}
                    title={`Preview of ${previewProject.headline}`}
                    className="w-full h-full border-none"
                    style={{ 
                      opacity: iframeLoaded ? 1 : 0, 
                      transition: 'opacity 0.4s ease',
                      background: 'transparent'
                    }}
                    onLoad={() => setIframeLoaded(true)}
                    onError={() => setIframeError(true)}
                    allow="clipboard-read; clipboard-write;"
                  />
                </div>
              ) : (
                <div className="overflow-y-auto">
                  {previewProject.thumbnail && (
                    <div className="relative w-full h-48 flex-shrink-0" style={{ background: '#080e1c' }}>
                      <Image src={previewProject.thumbnail} alt={previewProject.headline} fill className="object-cover object-top" />
                      <div className="absolute inset-x-0 bottom-0 h-16"
                        style={{ background: 'linear-gradient(to top, #0e1628 0%, transparent 100%)' }} />
                    </div>
                  )}
                  <div className="p-6">
                    {previewProject.stats && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {previewProject.stats.map((s) => (
                          <span key={s.label} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-body font-semibold bg-primary/10 text-primary">
                            <span className="font-mono">{s.value}</span>
                            <span className="font-normal opacity-70">{s.label}</span>
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">{previewProject.outcome}</p>
                    <div className="rounded-lg p-4 mb-5" style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.08)' }}>
                      <p className="text-label text-primary mb-2">Technical Detail</p>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">{previewProject.detail}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {previewProject.tech.map((t) => <span key={t} className="tech-chip">{t}</span>)}
                    </div>
                    <a href={previewProject.link} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                      <ExternalLink size={15} />
                      Open on Dune
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
