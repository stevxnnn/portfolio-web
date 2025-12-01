import {
  FaPython,
  FaEthereum,
  FaDatabase,
  FaChartLine,
  FaJs,
  FaGitAlt,
} from 'react-icons/fa'
import { SiSolidity, SiPostgresql, SiMongodb, SiDocker } from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95 },
        { name: 'JavaScript/TypeScript', icon: <FaJs />, level: 85 },
        { name: 'SQL', icon: <FaDatabase />, level: 90 },
      ],
    },
    {
      title: 'Blockchain & Web3',
      skills: [
        { name: 'L1/L2 chains', icon: <FaEthereum />, level: 90 },
        { name: 'Smart Contracts', icon: <SiSolidity />, level: 85 },
        { name: 'DeFi Protocols', icon: <FaChartLine />, level: 85 },
        { name: 'On-Chain Analytics', icon: <FaDatabase />, level: 95 },
      ],
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Data Analysis', icon: <FaChartLine />, level: 95 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 90 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'Data Visualization', icon: <FaChartLine />, level: 90 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Docker', icon: <SiDocker />, level: 80 },
        { name: 'APIs & Web3 Libraries', icon: <FaDatabase />, level: 90 },
      ],
    },
  ]

  return (
    <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Technical skills and tools I use to analyze blockchain data and
            deliver insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-matrix-card p-6 rounded-lg border border-primary-500/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 text-gray-200">
                        <span className="text-primary-400">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-black rounded-full h-2.5 border border-primary-500/20">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

