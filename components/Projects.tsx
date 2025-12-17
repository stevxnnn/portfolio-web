import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      headline: 'Bedrock uniBTC TVL Tracker',
      problem: 'Needed to track Bedrock\'s uniBTC Total Value Locked (TVL) across different chains to monitor protocol growth and cross-chain asset distribution.',
      solution: 'Built a comprehensive Dune Analytics dashboard that aggregates TVL data across multiple chains, providing real-time insights into Bedrock\'s uniBTC deployment and growth metrics.',
      tech: ['SQL', 'Dune Analytics', 'Data Visualization'],
      github: 'https://dune.com/zardy/bedrock',
      duneEmbed: '4495847/7513776',
    },
    {
      headline: 'Binance Alpha BR Token Trading Campaign Tracker',
      problem: 'Required real-time tracking and analytics for the Binance Alpha BR token trading campaign to monitor trading volume, user participation, and campaign performance metrics.',
      solution: 'Developed a Dune Analytics dashboard that tracks key trading statistics including volume, unique traders, transaction counts, and campaign engagement metrics for the BR token trading campaign.',
      tech: ['SQL', 'Dune Analytics', 'Data Visualization'],
      github: 'https://dune.com/test4444/br',
      duneEmbed: '5301268/8698675',
    },
    {
      headline: 'BR Token Team LP Overview Tracker',
      problem: 'Needed to monitor and track the team\'s liquidity pool (LP) positions for the BR token to ensure transparency, track LP performance, and analyze liquidity provision metrics.',
      solution: 'Created a comprehensive Dune Analytics dashboard that provides real-time visibility into the team\'s LP positions, including LP value, token distribution, and liquidity metrics for the BR token.',
      tech: ['SQL', 'Dune Analytics', 'Data Visualization'],
      github: 'https://dune.com/test4444/br-lp-overview',
      duneEmbed: null,
      imageUrl: '/br-lp-overview.png',
    },
    {
      headline: 'uniBTC retention tracker on Ethereum',
      problem: 'Needed to track the retention of uniBTC on Ethereum to monitor the protocol\'s growth and user engagement.',
      solution: 'Developed a comprehensive Dune Analytics dashboard that provides real-time visibility into the retention of uniBTC on Ethereum, including retention rate, user engagement, and protocol growth metrics.',
      tech: ['SQL', 'Dune Analytics', 'Data Visualization'],
      github: 'https://dune.com/test4444/unibtc-retention-data-on-eth',
      duneEmbed: '5189468/8539698',
    },
    {
      headline: 'uniBTC flow dashboard',
      problem: 'Required to track usage and flow of uniBTC on Ethereum to strengthen the protocol\'s new integration and user experience.',
      solution: 'Created a comprehensive Dune Analytics dashboard that provides real-time visibility into the usage and flow of uniBTC on Ethereum, including TVL and names and contracts of thrid party protocols.',
      tech: ['SQL', 'Dune Analytics', 'Data Visualization'],
      github: 'https://dune.com/test4444/unibtc-flow-on-eth',
      duneEmbed: '5331283/8737297',
    },
  ]

  const freetimeProjects = [
    {
      headline: 'Tennis Rotation Visualizer',
      problem: 'A real-time, animated simulation of a 3-player tennis match built entirely in Python, visualizing scoring logic, ball physics, and player movement.',
      solution: 'Enforces rotation rules (including "winner stays on") and "cooling off" periods after win streaks, driven by asyncio updates with clean state modeling via dataclasses.',
      tech: ['Python', 'Flet', 'asyncio', 'dataclasses', 'Railway'],
      github: 'https://tennis-app.up.railway.app/',
      linkLabel: 'Website',
      embedUrl: 'https://tennis-app.up.railway.app/',
      embedPaddingTop: '140%',
    },
  ]

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
          <span className="text-neon-green">CASE</span>{' '}
          <span className="text-white">STUDIES</span>
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
          Real projects solving real problems—on-chain dashboards and freetime builds
        </p>
      </div>

      <div className="space-y-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
          <span className="text-neon-green">On-chain</span>{' '}
          <span className="text-white">Dashboards</span>
        </h3>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-dark-card p-8 rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-all"
          >
            {/* Headline */}
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">
              <span className="text-neon-green">{project.headline}</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Problem & Solution */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-neon-blue font-mono mb-2 text-sm uppercase tracking-wide">
                    The Problem
                  </h4>
                  <p className="text-gray-300 font-sans leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-neon-cyan font-mono mb-2 text-sm uppercase tracking-wide">
                    The Solution
                  </h4>
                  <p className="text-gray-300 font-sans leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-neon-green font-mono mb-3 text-sm uppercase tracking-wide">
                    The Tech
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-neon-green/10 text-neon-green rounded border border-neon-green/30 text-sm font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors font-sans"
                  >
                    <FaExternalLinkAlt />
                    <span>{(project as any).linkLabel ?? 'Dune Dashboard'}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Dune Embed, Image, or Screenshot Placeholder */}
              <div className="bg-dark-bg rounded-lg border border-neon-green/20 p-4">
                {(project as any).embedUrl ? (
                  <div className="w-full overflow-hidden rounded">
                    <div
                      className="relative w-full"
                      style={{ paddingTop: (project as any).embedPaddingTop ?? '56.25%' }}
                    >
                      <iframe
                        src={(project as any).embedUrl}
                        className="absolute inset-0 w-full h-full border-0"
                        title={project.headline}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allow="fullscreen"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : project.duneEmbed ? (
                  <div className="w-full overflow-hidden rounded">
                    <div
                      className="relative w-full"
                      style={{ paddingTop: (project as any).embedPaddingTop ?? '100%' }}
                    >
                      <iframe
                        src={`https://dune.com/embeds/${project.duneEmbed}?theme=dark`}
                        className="absolute inset-0 w-full h-full border-0"
                        title={project.headline}
                        allow="clipboard-write"
                      />
                    </div>
                  </div>
                ) : project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.headline}
                    className="w-full h-auto rounded border-0 max-h-[600px] object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `
                          <div class="text-center text-gray-500 font-mono text-sm">
                            <div class="mb-2">📊</div>
                            <div>Image not found</div>
                            <div class="text-xs mt-2 text-gray-600">
                              Please add the image to /public/br-lp-overview.png
                            </div>
                          </div>
                        `
                      }
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center min-h-[220px] text-center text-gray-500 font-mono text-sm">
                    <div>
                      <div className="mb-2">📊</div>
                      <div>Dashboard Preview</div>
                      <div className="text-xs mt-2 text-gray-600">
                        Add Dune embed ID to display live chart
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <h3 className="text-2xl md:text-3xl font-bold text-white font-mono pt-6">
          <span className="text-neon-green">Freetime</span>{' '}
          <span className="text-white">Projects</span>
        </h3>
        {freetimeProjects.map((project, index) => (
          <div
            key={`freetime-${index}`}
            className="bg-dark-card p-8 rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-all"
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">
              <span className="text-neon-green">{project.headline}</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-neon-blue font-mono mb-2 text-sm uppercase tracking-wide">
                    The Problem
                  </h4>
                  <p className="text-gray-300 font-sans leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-neon-cyan font-mono mb-2 text-sm uppercase tracking-wide">
                    The Solution
                  </h4>
                  <p className="text-gray-300 font-sans leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-neon-green font-mono mb-3 text-sm uppercase tracking-wide">
                    The Tech
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-neon-green/10 text-neon-green rounded border border-neon-green/30 text-sm font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors font-sans"
                  >
                    <FaExternalLinkAlt />
                    <span>{(project as any).linkLabel ?? 'Live Demo'}</span>
                  </a>
                </div>
              </div>

              <div className="bg-dark-bg rounded-lg border border-neon-green/20 p-4">
                {(project as any).embedUrl ? (
                  <div className="w-full overflow-hidden rounded">
                    <div
                      className="relative w-full"
                      style={{ paddingTop: (project as any).embedPaddingTop ?? '56.25%' }}
                    >
                      <iframe
                        src={(project as any).embedUrl}
                        className="absolute inset-0 w-full h-full border-0"
                        title={project.headline}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allow="fullscreen"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center min-h-[220px] text-center text-gray-500 font-mono text-sm">
                    <div>
                      <div className="mb-2">📊</div>
                      <div>Preview</div>
                      <div className="text-xs mt-2 text-gray-600">
                        Add an embed URL to display a live demo
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
