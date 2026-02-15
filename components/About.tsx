'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { label: 'Data Points Analyzed', value: '1TB', suffix: '+', icon: '📊' },
  { label: 'Dashboards Built', value: '50', suffix: '+', icon: '📈' },
  { label: 'Protocols Tracked', value: '100', suffix: '+', icon: '🔗' },
  { label: 'On-Chain Queries', value: '10K', suffix: '+', icon: '💾' },
]

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          // Parse numeric part
          const numericStr = value.replace(/[^0-9]/g, '')
          const target = parseInt(numericStr, 10)
          const letterSuffix = value.replace(/[0-9]/g, '') // e.g., 'K', 'TB'
          const duration = 1500
          const steps = 40
          const stepTime = duration / steps

          let step = 0
          const interval = setInterval(() => {
            step++
            const progress = step / steps
            // ease-out curve
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(target * eased)

            if (step >= steps) {
              setDisplay(`${value}`)
              clearInterval(interval)
            } else {
              setDisplay(`${current}${letterSuffix}`)
            }
          }, stepTime)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-accent-gold font-mono">
      {display}
      <span className="text-accent-gold-light">{suffix}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-container">
      {/* Section header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-gradient-gold">DATA</span>{' '}
          <span className="text-white">PHILOSOPHY</span>
        </h2>
        <div className="w-16 h-0.5 bg-accent-gold/50 mx-auto" />
      </div>

      {/* Philosophy card */}
      <div className="gradient-border tilt-card max-w-3xl mx-auto mb-14">
        <div className="bg-dark-card rounded-2xl p-8 md:p-12">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 font-sans">
            The obvious data is already{' '}
            <span className="text-red-400 font-semibold">priced in</span>.
          </p>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 font-sans">
            I look closer at the{' '}
            <span className="text-accent-blue font-medium">transaction gaps</span>,
            the{' '}
            <span className="text-accent-blue font-medium">flow anomalies</span>,
            and the{' '}
            <span className="text-accent-blue font-medium">
              hidden correlations
            </span>{' '}
            where{' '}
            <span className="text-accent-gold font-bold">real alpha</span> lives.
          </p>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
            Combining rigorous data science with deep crypto-native understanding,
            I transform blockchain noise into{' '}
            <span className="text-accent-emerald font-bold">
              high-signal intelligence
            </span>
            . Every insight I deliver is designed to{' '}
            <span className="text-accent-gold font-semibold border-b border-accent-gold/30 pb-0.5">
              unlock value
            </span>
            .
          </p>
        </div>
      </div>

      {/* Animated stat counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="gradient-border group"
          >
            <div className="bg-dark-card rounded-2xl p-6 text-center transition-all duration-300 group-hover:bg-dark-card-hover">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech stack overview */}
      <div className="gradient-border mt-14">
        <div className="bg-dark-card rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 font-mono">
            <span className="text-accent-gold">THE</span> STACK
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-accent-blue font-mono mb-2 text-xs uppercase tracking-widest">
                The Extractor
              </h4>
              <p className="text-slate-400 font-sans text-sm">
                The Graph, SQL, Dune Analytics, Flipside, Blockscout APIs
              </p>
            </div>
            <div>
              <h4 className="text-accent-gold font-mono mb-2 text-xs uppercase tracking-widest">
                The Processor
              </h4>
              <p className="text-slate-400 font-sans text-sm">
                Python, Node.js, TypeScript, Web3 Libraries
              </p>
            </div>
            <div>
              <h4 className="text-accent-emerald font-mono mb-2 text-xs uppercase tracking-widest">
                The Visualizer
              </h4>
              <p className="text-slate-400 font-sans text-sm">
                React, Tableau, Dune Dashboards, Real-time Charts, Looker Studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
