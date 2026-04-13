'use client'

import { motion } from 'framer-motion'
import { Zap, ArrowRight, Github, Sparkles } from 'lucide-react'

const CURRENTLY_BUILDING = [
  {
    label: 'Latest project',
    title: 'Cross-chain DeFi Intelligence Suite',
    description: 'Building a unified analytics layer that aggregates protocol-level signals across Ethereum, Arbitrum and Base — turning raw event logs into structured alpha.',
    status: 'In progress',
  },
  {
    label: 'Learning',
    title: 'ZK Proofs & Data Availability Layers',
    description: 'Going deeper into zkEVM data structures and how DA layers like EigenDA and Celestia change the on-chain analytics landscape.',
    status: 'Ongoing',
  },
]

const AVAILABLE_FOR = [
  { label: 'Full-time', highlight: true },
  { label: 'Contract', highlight: false },
  { label: 'Freelance', highlight: false },
  { label: 'Advisory', highlight: false },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="section-spacing bg-surface-container-low/50-low/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-label text-primary mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          Currently
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.h2
            className="text-headline text-3xl md:text-4xl text-on-surface"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={1}
          >
            What I&apos;m building now
          </motion.h2>

          {/* Available for */}
          <motion.div
            className="flex flex-wrap items-center gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <span className="font-body text-xs text-on-surface-variant uppercase tracking-wider">Available for:</span>
            {AVAILABLE_FOR.map((item) => (
              <span
                key={item.label}
                className={`font-body text-xs font-semibold px-3 py-1.5 rounded-full ${
                  item.highlight
                    ? 'bg-primary text-on-primary'
                    : 'border border-outline-variant/30 text-on-surface-variant'
                }`}
              >
                {item.label}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {CURRENTLY_BUILDING.map((item, i) => (
            <motion.div
              key={i}
              className="data-card group hover:cursor-default"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 3}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-label text-primary mb-0.5">{item.label}</p>
                  <h3 className="text-headline text-lg text-on-surface group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-body font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {item.status}
                </span>
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-surface-container px-6 py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
        >
          <div className="flex items-center gap-3 flex-1">
            <Sparkles size={16} className="text-primary flex-shrink-0" />
            <span className="font-body text-sm text-on-surface-variant">
              Follow my open-source work and contribution activity on GitHub
            </span>
          </div>
          <a
            href="https://github.com/stevxnnn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:gap-3 transition-all duration-200 whitespace-nowrap"
          >
            <Github size={14} />
            GitHub Profile
            <ArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
