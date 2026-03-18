'use client'

import { useState } from 'react'

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
  {
    headline: 'Valentine\'s Day Invitation Card',
    problem: 'Wanted to create a fun, interactive digital invitation card for Valentine\'s Day.',
    solution: 'Built a personalized web-based dynamic invitation with interactive elements and animations.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://github.com/stevxnnn/vday',
    linkLabel: 'Source Code',
    duneEmbed: null,
  },
  {
    headline: 'Superteam Malaysia Website Bounty',
    problem: 'Superteam Malaysia needed an official, modernized Web3 hub to represent their community ecosystem.',
    solution: 'Designed and developed a landing page featuring sections for members, partners, and events, adhering to Superteam global brand guidelines.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    link: 'https://superteamweb.vercel.app/',
    linkLabel: 'Live Demo',
    duneEmbed: null,
  },
]

type Tab = 'onchain' | 'freetime'

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('onchain')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects = activeTab === 'onchain' ? ON_CHAIN_PROJECTS : FREETIME_PROJECTS

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <div className="p-3 h-full flex flex-col font-sans w-full text-base lg:text-lg">
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => {
            setActiveTab('onchain')
            setExpandedProject(null)
          }}
          className={`win-button px-6 py-2 flex-1 font-bold text-base ${
            activeTab === 'onchain' 
              ? 'bg-[#d4d0c8] shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#ffffff] !border-l-[black] !border-t-[black] !border-r-win-highlight !border-b-win-highlight' 
              : ''
          }`}
        >
          ON-CHAIN
        </button>
        <button
          onClick={() => {
            setActiveTab('freetime')
            setExpandedProject(null)
          }}
          className={`win-button px-6 py-2 flex-1 font-bold text-base ${
            activeTab === 'freetime' 
              ? 'bg-[#d4d0c8] shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#ffffff] !border-l-[black] !border-t-[black] !border-r-win-highlight !border-b-win-highlight' 
              : ''
          }`}
        >
          FREETIME
        </button>
      </div>

      <div className="win-border-sunken bg-white flex-grow overflow-auto border-[#808080] select-text p-2">
        <div className="min-w-full md:min-w-[700px] pb-4">
          {/* Header Row */}
          <div className="flex bg-win-gray win-border-sunken border-b-0 border-l-0 border-r-0 !border-t-[#ffffff] font-bold text-base">
            <div className="w-full md:w-5/12 p-2 md:border-r md:border-win-shadow">Filename</div>
            <div className="hidden md:block md:w-3/12 p-2 border-r border-win-shadow">Project Type</div>
            <div className="hidden md:block md:w-4/12 p-2">Tech Stack</div>
          </div>
          
          {/* List Items */}
          <div className="bg-white">
            {projects.map((project, index) => {
              const isExpanded = expandedProject === index
              return (
                <div key={index} className="border-b border-dotted border-gray-300">
                  <div 
                    className={`flex cursor-pointer hover:bg-win-blue hover:text-white ${isExpanded ? 'bg-win-blue text-white' : ''}`}
                    onClick={() => toggleProject(index)}
                  >
                    <div className="w-full md:w-5/12 p-2 truncate flex items-center gap-3 select-none">
                      <span className="text-[#c0c0c0] font-mono text-sm w-4 flex-shrink-0">[{isExpanded ? '-' : '+'}]</span>
                      <span className="truncate">{project.headline}</span>
                    </div>
                    <div className="hidden md:flex md:w-3/12 p-2 truncate text-sm items-center">{project.tech.includes('Dune Analytics') ? 'Dune Dashboard.exe' : 'Web Application.exe'}</div>
                    <div className="hidden md:flex md:w-4/12 p-2 truncate text-sm items-center">{project.tech.join(', ')}</div>
                  </div>
                  
                  {isExpanded && (
                    <div className="p-5 bg-[#ffffe1] text-win-black m-3 border border-black shadow-[2px_2px_0_rgba(0,0,0,0.5)] cursor-text select-text" onClick={(e) => e.stopPropagation()}>
                      <h4 className="font-bold underline mb-3 tracking-wider text-lg">PROJECT_DETAILS.TXT</h4>
                      <div className="mb-3">
                        <strong className="text-win-blue text-base">Problem:</strong>
                        <p className="mt-2 leading-relaxed text-sm md:text-base">{project.problem}</p>
                      </div>
                      <div className="mb-4">
                        <strong className="text-win-teal text-base">Solution:</strong>
                        <p className="mt-2 leading-relaxed text-sm md:text-base">{project.solution}</p>
                      </div>
                      <div className="mt-5 pt-3 border-t border-dashed border-[#808080]">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline flex items-center gap-2 hover:bg-blue-100 p-2 border border-transparent hover:border-blue-300 w-fit font-bold text-base">
                          » Exec {project.linkLabel}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
