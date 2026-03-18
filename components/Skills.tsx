'use client'

import { useState } from 'react'

interface Tool {
  name: string
  status: string
}

interface TechBox {
  category: string
  sysName: string
  tools: Tool[]
}

const STACKS: TechBox[] = [
  {
    category: 'Data Sources & APIs',
    sysName: 'EXTRACTOR.SYS',
    tools: [
      { name: 'The Graph', status: 'OK' },
      { name: 'Dune Analytics', status: 'OK' },
      { name: 'SQL', status: 'OK' },
      { name: 'Flipside', status: 'OK' },
      { name: 'Blockscout API', status: 'OK' },
    ],
  },
  {
    category: 'Data Processing & Analysis',
    sysName: 'PROCESSOR.DLL',
    tools: [
      { name: 'Python', status: 'OK' },
      { name: 'Pandas / Polars', status: 'OK' },
      { name: 'Node.js', status: 'OK' },
      { name: 'TypeScript', status: 'OK' },
      { name: 'SQL Engines', status: 'OK' },
    ],
  },
  {
    category: 'Dashboards & Visualization',
    sysName: 'VISUALIZER.OCX',
    tools: [
      { name: 'React', status: 'OK' },
      { name: 'Looker Studio', status: 'OK' },
      { name: 'Tableau', status: 'OK' },
      { name: 'Dune Dashboards', status: 'OK' },
      { name: 'Real-time Charts', status: 'OK' },
    ],
  },
]

export default function Skills() {
  const [expanded, setExpanded] = useState<number | null>(0)

  const toggle = (index: number) => {
    setExpanded(expanded === index ? null : index)
  }

  return (
    <div className="p-4 h-full flex flex-col font-sans w-full bg-win-gray text-base lg:text-lg min-h-[500px]">
      <div className="flex gap-2 items-center mb-3 px-2">
        <img src="/icons/computer_explorer-4.png" className="w-6 h-6" alt="Computer" />
        <span className="font-bold text-lg">Device Manager</span>
      </div>

      <div className="win-border-sunken bg-white flex-grow border-[#808080] overflow-auto p-4 select-none">
        <ul className="pl-2 relative">
          {/* Main Root */}
          <li className="flex items-center gap-2 mb-2">
            <span className="w-4 text-center font-mono leading-none text-lg">-</span>
            <img src="/icons/computer_explorer-4.png" className="w-6 h-6" alt="PC" />
            <span className="font-bold">STEVEN-PC</span>
          </li>
          
          {/* Children nodes */}
          <ul className="pl-6 border-l border-dotted border-[#808080] ml-2 pb-3 relative">
             {STACKS.map((stack, idx) => {
                const isOpen = expanded === idx
                return (
                  <li key={idx} className="relative mt-3">
                    <div className="absolute w-4 border-b border-dotted border-[#808080] top-3 -left-4"></div>
                    <div className="flex flex-col">
                      <div 
                        className={`flex items-center gap-2 cursor-pointer w-fit pr-3 py-1 ${isOpen ? 'bg-win-blue text-white' : 'hover:bg-win-blue hover:text-white'}`}
                        onClick={() => toggle(idx)}
                      >
                        <span className="w-4 h-4 text-center bg-white border border-[#808080] leading-[14px] text-xs flex items-center justify-center font-mono text-black mr-1">
                          {isOpen ? '-' : '+'}
                        </span>
                        <img src="/icons/directory_closed-4.png" className="w-6 h-6" alt="Dir" />
                        <span className="leading-none">{stack.category} ({stack.sysName})</span>
                      </div>
                      
                      {isOpen && (
                        <ul className="pl-8 border-l border-dotted border-[#808080] ml-2 mt-2 pb-2 relative">
                          {stack.tools.map((tool, tIdx) => (
                            <li key={tIdx} className="relative flex items-center gap-2 mt-3">
                              {/* Horizontal line to item */}
                              <div className="absolute w-5 border-b border-dotted border-[#808080] top-3 -left-[18px]"></div>
                              <img src="/icons/gear-0.png" className="w-5 h-5" alt="Gear" />
                              <span className="leading-none">{tool.name}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                )
             })}
          </ul>
        </ul>
      </div>
      
      <div className="mt-4 win-border-sunken bg-win-gray p-3 text-sm lg:text-base flex justify-between items-center text-win-black font-bold">
        <span>3 device class(es) found.</span>
        <span className="text-[#10B981]">System running optimally.</span>
      </div>
    </div>
  )
}
