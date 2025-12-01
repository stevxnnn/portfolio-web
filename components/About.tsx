import { FaCode, FaChartBar, FaNetworkWired, FaLightbulb } from 'react-icons/fa'

export default function About() {
  const features = [
    {
      icon: <FaCode className="text-4xl text-primary-400" />,
      title: 'Data Analysis',
      description:
        'Expert in analyzing on-chain metrics, transaction patterns, and smart contract interactions',
    },
    {
      icon: <FaChartBar className="text-4xl text-primary-400" />,
      title: 'Visualization',
      description:
        'Creating compelling dashboards and visualizations to communicate complex blockchain data',
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary-400" />,
      title: 'Insights',
      description:
        'Transforming raw blockchain data into actionable insights for decision-making',
    },
    {
      icon: <FaNetworkWired className="text-4xl text-primary-400" />,
      title: 'Multi-Chain',
      description:
        'Experience across Ethereum, Bitcoin, and other major blockchain networks',
    },
  ]

  return (
    <div className="w-full">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            I specialize in extracting meaningful insights from blockchain data,
            helping organizations understand on-chain behavior, tokenomics, and
            network dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-matrix-card p-6 rounded-lg hover:bg-primary-500/5 transition-all transform hover:scale-105 border border-primary-500/20 hover:border-primary-500/40"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500/10 to-primary-600/10 p-8 rounded-lg border border-primary-500/30">
          <p className="text-lg text-gray-100 text-center">
            With a deep understanding of blockchain technology and data science,
            I bridge the gap between complex on-chain data and business
            intelligence, enabling data-driven decisions in the Web3 space.
          </p>
      </div>
    </div>
  )
}

