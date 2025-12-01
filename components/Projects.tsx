import { FaGithub, FaExternalLinkAlt, FaChartLine, FaDatabase } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'DeFi Protocol Analytics Dashboard',
      description:
        'Comprehensive dashboard analyzing TVL, transaction volumes, and user behavior across major DeFi protocols. Built with real-time data feeds and interactive visualizations.',
      tags: ['Python', 'React', 'D3.js', 'Web3.py'],
      icon: <FaChartLine className="text-4xl text-primary-400" />,
      github: '#',
      demo: '#',
    },
    {
      title: 'NFT Market Analysis Tool',
      description:
        'Advanced analytics platform tracking NFT sales, floor prices, and collection trends. Includes predictive models for market movements and whale activity monitoring.',
      tags: ['Python', 'Pandas', 'Machine Learning', 'Ethereum'],
      icon: <FaDatabase className="text-4xl text-primary-400" />,
      github: '#',
      demo: '#',
    },
    {
      title: 'On-Chain Token Flow Tracker',
      description:
        'Real-time tracking system monitoring token movements between wallets, exchanges, and protocols. Identifies patterns and potential market manipulation.',
      tags: ['TypeScript', 'Node.js', 'GraphQL', 'The Graph'],
      icon: <FaChartLine className="text-4xl text-primary-400" />,
      github: '#',
      demo: '#',
    },
    {
      title: 'Smart Contract Risk Analyzer',
      description:
        'Automated tool for analyzing smart contract security, gas optimization, and code quality. Provides risk scores and recommendations for DeFi protocols.',
      tags: ['Solidity', 'Python', 'Slither', 'Security'],
      icon: <FaDatabase className="text-4xl text-primary-400" />,
      github: '#',
      demo: '#',
    },
  ]

  return (
    <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A selection of my work in on-chain data analysis and blockchain
            analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-matrix-card p-6 rounded-lg border border-primary-500/20 hover:border-primary-500/60 transition-all transform hover:scale-105 group"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 text-gray-200 hover:text-primary-400 transition-colors"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center space-x-2 text-gray-200 hover:text-primary-400 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

