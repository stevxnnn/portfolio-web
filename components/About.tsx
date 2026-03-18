'use client'

export default function About() {
  const STATS = [
    { label: 'Data Points Analyzer', value: '1TB+' },
    { label: 'Dashboards Built', value: '50+' },
    { label: 'Protocols Tracked', value: '100+' },
    { label: 'On-Chain Queries', value: '10K+' },
  ]

  return (
    <div className="p-4 h-full flex flex-col font-sans text-base w-full lg:text-lg">
      <div className="mb-6">
        <h2 className="font-display text-xl mb-3 border-b-2 border-win-black pb-2 text-win-blue drop-shadow-sm">ABOUT.HLP</h2>
        <p className="mb-4 leading-relaxed">
          For me, analytics is less about making pretty charts and more about uncovering where the <span className="font-bold text-win-blue">real alpha</span> lives.
        </p>
        <p className="mb-4 leading-relaxed">
          I specialize in transforming raw blockchain data into tactical intelligence. Whether it's tracking smart money flows or identifying protocol anomalies, my work is built for operators who need <span className="font-bold text-[#EF4444]">high-signal insights</span> in real-time. This is on-chain sleuthing.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {STATS.map((stat, i) => (
          <div key={i} className="win-border p-4 bg-win-gray flex flex-col items-center justify-center text-center">
            <span className="font-display text-lg lg:text-xl text-win-blue mb-2 drop-shadow-sm tabular-nums whitespace-nowrap">{stat.value}</span>
            <span className="text-sm lg:text-base font-bold">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="win-border-sunken bg-white p-4 mb-2 flex-grow border-[#808080]">
        <h3 className="font-bold text-lg border-b border-win-shadow mb-3 text-win-black pb-1">DATABASE DRIVERS / STACK</h3>
        <ul className="text-base lg:text-lg space-y-3 list-disc pl-6 py-2">
          <li><strong>Extractor.dll</strong> The Graph, SQL, Dune Analytics, Flipside, Blockscout APIs</li>
          <li><strong>Processing.exe</strong> Python, Node.js, TypeScript, Web3 Libraries</li>
          <li><strong>Visualizer.ocx</strong> React, Tableau, Dune Dashboards, Looker Studio</li>
        </ul>
      </div>
    </div>
  )
}
