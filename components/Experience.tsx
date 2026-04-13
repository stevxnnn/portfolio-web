'use client'

import { motion } from 'framer-motion'
import { Briefcase, ExternalLink } from 'lucide-react'

interface Role {
  title: string
  company: string
  companyUrl?: string
  type: string
  period: string
  location: string
  bullets: string[]
  tech?: string[]
}

const EXPERIENCE: Role[] = [
  {
    title: 'Data Analyst (Marketing & Product)',
    company: 'Bedrock',
    companyUrl: 'https://bedrock.technology',
    type: 'Full-time',
    period: 'Feb 2024 – Dec 2025',
    location: 'Petaling Jaya, Malaysia',
    bullets: [
      'SQL & BI Dashboards: Built custom SQL queries on Dune Analytics to visualize product health metrics like TVL, volume, and user retention for executive decision-making.',
      'Python Automation: Developed Python scripts using blockchain APIs to automate tracking of whale wallet activity and cross-chain user flows.',
      'Market Intelligence: Conducted deep-dive analysis on competitor protocols and multi-chain ecosystems to identify high-value partnership opportunities.',
      'Retention & Lifecycle Analytics: Analyzed user cohort behavior and "stickiness" metrics to identify drop-off points in the product funnel, leading to targeted re-engagement strategies.',
      'Growth Analytics: Correlated on-chain transaction data with social sentiment (X/Discord) to optimize marketing spend and increase platform traffic.',
    ],
    tech: ['SQL', 'Dune Analytics', 'Python', 'Blockchain APIs', 'Data Visualization'],
  },
  {
    title: 'Data Analyst / Operations Specialist',
    company: 'ZorixChange',
    type: 'Full-time',
    period: 'Apr 2023 – 2024',
    location: 'Malaysia',
    bullets: [
      'Quantitative Vetting: Spearheaded a token listing framework using on-chain forensics to audit project liquidity and technical health.',
      'Predictive Analysis: Leveraged user traffic and on-chain metrics to identify undervalued assets, securing early listings that drove volume.',
      'Data-Driven Ops: Directed design and operations teams by aligning visual campaigns with data-backed user engagement metrics.',
      'Strategic Reporting: Automated weekly reports on SEO performance and market volatility to guide senior management decisions.',
    ],
    tech: ['SQL', 'On-chain Forensics', 'Python', 'SEO Analysis', 'DeFi Protocols'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export default function Experience() {
  return (
    <section id="experience" className="section-spacing">
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
          Experience
        </motion.p>

        <motion.h2
          className="text-headline text-3xl md:text-4xl text-on-surface mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={1}
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent ml-[5px] hidden sm:block" />

          <div className="space-y-10 sm:pl-10">
            {EXPERIENCE.map((role, i) => (
              <motion.div
                key={i}
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                custom={i + 2}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.85rem] top-1.5 w-3 h-3 rounded-full border-2 border-primary bg-surface hidden sm:block" />

                {/* Card */}
                <div className="data-card group hover:cursor-default">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-primary opacity-70" />
                        <h3 className="text-headline text-lg text-on-surface group-hover:text-primary transition-colors duration-200">
                          {role.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {role.companyUrl ? (
                          <a
                            href={role.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                          >
                            {role.company}
                            <ExternalLink size={11} />
                          </a>
                        ) : (
                          <span className="font-body text-sm font-semibold text-primary">{role.company}</span>
                        )}
                        <span className="font-body text-xs text-on-surface-variant">·</span>
                        <span className="font-body text-xs text-on-surface-variant">{role.type}</span>
                        <span className="font-body text-xs text-on-surface-variant">·</span>
                        <span className="font-body text-xs text-on-surface-variant">{role.location}</span>
                      </div>
                    </div>
                    <span className="font-body text-xs text-on-surface-variant tabular-nums whitespace-nowrap shrink-0 bg-surface-container px-3 py-1.5 rounded">
                      {role.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        <span className="font-body text-sm text-on-surface-variant leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  {role.tech && (
                    <div className="flex flex-wrap gap-2">
                      {role.tech.map((t) => (
                        <span key={t} className="tech-chip">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
