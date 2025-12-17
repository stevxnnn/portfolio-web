export default function About() {
  const stats = [
    { label: 'Data Points Analyzed', value: '1TB+', icon: '📊' },
    { label: 'Dashboards Built', value: '50+', icon: '📈' },
    { label: 'Protocols Tracked', value: '100+', icon: '🔗' },
    { label: 'On-Chain Queries', value: '10K+', icon: '💾' },
  ]

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
          <span className="text-neon-blue">MY DATA</span>{' '}
          <span className="text-white">PHILOSOPHY</span>
        </h2>
        <div className="w-24 h-1 bg-neon-blue mx-auto mb-6"></div>
      </div>

      {/* Data Philosophy */}
      <div className="mb-16 bg-dark-card p-8 md:p-12 rounded-lg border border-neon-blue/20">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 font-sans">
        The obvious data is already <span className="text-red-500 font-semibold">priced in</span>.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 font-sans">
        I look closer at the <span className="text-cyan-400 font-medium">transaction gaps</span>, the <span className="text-cyan-400 font-medium">flow anomalies</span>, and the <span className="text-cyan-400 font-medium">hidden correlations</span> where <span className="text-yellow-400 font-bold drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]">real alpha</span> lives.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans">
        Combining rigorous data science with deep crypto-native understanding, I transform blockchain noise into <span className="text-emerald-400 font-bold tracking-wide">high-signal intelligence</span>. Every insight I deliver is designed to <span className="text-yellow-400 font-semibold border-b border-yellow-400/30 pb-0.5">unlock value</span>.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-dark-card p-6 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all transform hover:scale-105 text-center"
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-2 font-mono">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 font-sans uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Overview */}
      <div className="bg-dark-card p-8 rounded-lg border border-neon-green/20">
        <h3 className="text-2xl font-bold text-white mb-6 font-mono">
          <span className="text-neon-green">THE STACK</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-neon-blue font-mono mb-3 text-sm uppercase tracking-wide">
              The Extractor
            </h4>
            <p className="text-gray-300 font-sans">
              The Graph, SQL, Dune Analytics, Flipside, Blockscout APIs
            </p>
          </div>
          <div>
            <h4 className="text-neon-cyan font-mono mb-3 text-sm uppercase tracking-wide">
              The Processor
            </h4>
            <p className="text-gray-300 font-sans">
              Python, Node.js, TypeScript, Web3 Libraries
            </p>
          </div>
          <div>
            <h4 className="text-neon-green font-mono mb-3 text-sm uppercase tracking-wide">
              The Visualizer
            </h4>
            <p className="text-gray-300 font-sans">
              React, Tableau, Dune Dashboards, Real-time Charts, Looker Studio
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
