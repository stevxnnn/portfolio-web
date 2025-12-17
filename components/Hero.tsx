'use client'

import { useEffect, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import ParticlesBackground from './ParticlesBackground'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [gasPrice, setGasPrice] = useState<string>('--')
  const [ethPrice, setEthPrice] = useState<string>('--')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Fetch live Ethereum gas price
  useEffect(() => {
    const fetchGasPrice = async () => {
      try {
        const response = await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken')
        const data = await response.json()
        if (data.status === '1') {
          const gwei = (parseInt(data.result.SafeGasPrice) / 10).toFixed(1)
          setGasPrice(gwei)
        }
      } catch (error) {
        console.error('Failed to fetch gas price:', error)
      }
    }

    fetchGasPrice()
    const interval = setInterval(fetchGasPrice, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  // Fetch ETH price
  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
        const data = await response.json()
        if (data.ethereum) {
          setEthPrice(`$${data.ethereum.usd.toLocaleString()}`)
        }
      } catch (error) {
        console.error('Failed to fetch ETH price:', error)
      }
    }

    fetchEthPrice()
    const interval = setInterval(fetchEthPrice, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg snap-start snap-always"
    >
      {/* Particle Network Background */}
      <ParticlesBackground />

      {/* Live Data Ticker */}
      <div className="absolute top-6 left-6 right-6 flex justify-center gap-8 z-20">
        <div className="bg-dark-card/80 backdrop-blur-sm border border-neon-blue/30 rounded-lg px-4 py-2 font-mono text-sm">
          <span className="text-gray-400">ETH:</span>
          <span className="text-neon-blue ml-2">{ethPrice}</span>
        </div>
        <div className="bg-dark-card/80 backdrop-blur-sm border border-neon-green/30 rounded-lg px-4 py-2 font-mono text-sm">
          <span className="text-gray-400">Gas:</span>
          <span className="text-neon-green ml-2">{gasPrice} gwei</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-green bg-clip-text text-transparent">
              On-Chain Data
            </span>
            <br />
            <span className="text-white">Analyst</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-sans">
          Rigorous enough for the boardroom. Sharp enough for the trenches。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-neon-blue hover:bg-neon-cyan text-dark-bg rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-neon-blue/50 hover:shadow-xl hover:shadow-neon-blue/70 font-mono"
            >
              VIEW WORK
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10 rounded-lg font-semibold transition-all transform hover:scale-105 font-mono"
            >
              LET'S TALK DATA
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-neon-blue hover:text-neon-cyan">
            <FaArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
