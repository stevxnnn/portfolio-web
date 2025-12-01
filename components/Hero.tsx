'use client'

import { useEffect, useState } from 'react'
import { FaArrowDown, FaChartLine, FaDatabase, FaEthereum } from 'react-icons/fa'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black snap-start snap-always"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4">
              <FaEthereum className="text-primary-400 text-4xl animate-bounce" />
              <FaChartLine className="text-primary-400 text-4xl animate-bounce delay-200" />
              <FaDatabase className="text-primary-400 text-4xl animate-bounce delay-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
              On-Chain Data Analyst
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Transforming blockchain data into actionable insights through
            advanced analytics and visualization
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-300 hover:text-primary-400">
            <FaArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

