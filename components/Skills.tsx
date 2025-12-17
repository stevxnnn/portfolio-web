'use client'

import {
  FaPython,
  FaEthereum,
  FaDatabase,
  FaChartLine,
  FaJs,
  FaCodeBranch,
} from 'react-icons/fa'
import { IconType } from 'react-icons'

// Dune Analytics Icon Component
const DuneIcon = ({ className }: { className?: string }) => (
  <img
    src="https://image.coinpedia.org/app_uploads/profile/1662614524274lcltlj6gvk.png"
    alt="Dune Analytics"
    className={className}
    style={{
      width: '20px',
      height: '20px',
      objectFit: 'contain',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      mixBlendMode: 'screen',
    }}
  />
)

interface Tool {
  name: string
  iconComponent: IconType | React.ComponentType<{ className?: string }>
  link: string
  isCustom?: boolean
}

interface TechStack {
  title: string
  subtitle: string
  iconColor: string
  borderColor: string
  hoverColor: string
  iconComponent: IconType
  iconClassName: string
  tools: Tool[]
}

export default function Skills() {
  const techStacks: TechStack[] = [
    {
      title: 'THE EXTRACTOR',
      subtitle: 'Data Sources & APIs',
      iconColor: 'text-neon-blue',
      borderColor: 'border-neon-blue',
      hoverColor: 'hover:text-neon-blue',
      iconComponent: FaDatabase,
      iconClassName: 'text-3xl text-neon-blue',
      tools: [
        { name: 'The Graph', iconComponent: FaCodeBranch, link: '#' },
        { name: 'Dune Analytics', iconComponent: DuneIcon, link: 'https://dune.com/zardy', isCustom: true },
        { name: 'SQL', iconComponent: FaDatabase, link: '#' },
        { name: 'Flipside', iconComponent: FaChartLine, link: '#' },
        { name: 'Blockscout API', iconComponent: FaEthereum, link: '#' },
      ],
    },
    {
      title: 'THE PROCESSOR',
      subtitle: 'Data Processing & Analysis',
      iconColor: 'text-neon-cyan',
      borderColor: 'border-neon-cyan',
      hoverColor: 'hover:text-neon-cyan',
      iconComponent: FaPython,
      iconClassName: 'text-3xl text-neon-cyan',
      tools: [
        { name: 'Python', iconComponent: FaPython, link: '#' },
        { name: 'Pandas/Polars', iconComponent: FaPython, link: '#' },
        { name: 'Node.js', iconComponent: FaJs, link: '#' },
        { name: 'TypeScript', iconComponent: FaJs, link: '#' },
        { name: 'SQL', iconComponent: FaDatabase, link: '#' },
      ],
    },
    {
      title: 'THE VISUALIZER',
      subtitle: 'Dashboards & Visualization',
      iconColor: 'text-neon-green',
      borderColor: 'border-neon-green',
      hoverColor: 'hover:text-neon-green',
      iconComponent: FaChartLine,
      iconClassName: 'text-3xl text-neon-green',
      tools: [
        { name: 'React', iconComponent: FaJs, link: '#' },
        { name: 'Looker Studio', iconComponent: FaChartLine, link: '#' },
        { name: 'Tableau', iconComponent: FaChartLine, link: '#' },
        { name: 'Custom Dashboards', iconComponent: FaChartLine, link: '#' },
        { name: 'Real-time Charts', iconComponent: FaChartLine, link: '#' },
      ],
    },
  ]

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
          <span className="text-neon-blue">TECH</span>{' '}
          <span className="text-white">STACKS</span>
        </h2>
        <div className="w-24 h-1 bg-neon-blue mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
          Tools I use to extract, process, and visualize on-chain data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techStacks.map((stack, index) => {
          let borderClass = 'border-neon-blue/20 hover:border-neon-blue/40'
          let hoverClass = 'hover:text-neon-blue'
          let iconColorClass = 'text-neon-blue'
          
          if (stack.borderColor === 'border-neon-cyan') {
            borderClass = 'border-neon-cyan/20 hover:border-neon-cyan/40'
            hoverClass = 'hover:text-neon-cyan'
            iconColorClass = 'text-neon-cyan'
          } else if (stack.borderColor === 'border-neon-green') {
            borderClass = 'border-neon-green/20 hover:border-neon-green/40'
            hoverClass = 'hover:text-neon-green'
            iconColorClass = 'text-neon-green'
          }
          
          const IconComponent = stack.iconComponent
          
          return (
          <div
            key={index}
            className={`bg-dark-card p-6 rounded-lg border ${borderClass} transition-all`}
          >
            <div className="mb-4">
              <IconComponent className={stack.iconClassName} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">
              {stack.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6 font-sans uppercase tracking-wide">
              {stack.subtitle}
            </p>
            <div className="space-y-3">
              {stack.tools.map((tool, toolIndex) => {
                const ToolIcon = tool.iconComponent
                return (
                  <a
                    key={toolIndex}
                    href={tool.link}
                    target={tool.link !== '#' ? '_blank' : undefined}
                    rel={tool.link !== '#' ? 'noopener noreferrer' : undefined}
                    className={`flex items-center space-x-3 text-gray-300 ${hoverClass} transition-colors group`}
                  >
                    <span className={`${iconColorClass} group-hover:scale-110 transition-transform`}>
                      {tool.isCustom ? (
                        <ToolIcon className="w-5 h-5" />
                      ) : (
                        <ToolIcon />
                      )}
                    </span>
                    <span className="font-sans">{tool.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}
