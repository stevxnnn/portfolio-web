'use client'

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa'

// Dune Analytics Icon Component
const DuneIcon = ({ className }: { className?: string }) => (
  <img
    src="https://image.coinpedia.org/app_uploads/profile/1662614524274lcltlj6gvk.png"
    alt="Dune Analytics"
    className={className}
    style={{
      width: '24px',
      height: '24px',
      objectFit: 'contain',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      mixBlendMode: 'screen',
    }}
  />
)

export default function Footer() {
  const socialLinks = [
    {
      name: 'Email',
      icon: <FaEnvelope />,
      href: 'mailto:stevenliew929@gmail.com',
      color: 'text-red-400 hover:text-red-300',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/liewsteven',
      color: 'text-blue-400 hover:text-blue-300',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/stevxnnn',
      color: 'text-gray-400 hover:text-gray-300',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      href: 'https://twitter.com/yourusername',
      color: 'text-sky-400 hover:text-sky-300',
    },
    {
      name: 'Dune',
      icon: <DuneIcon className="w-6 h-6" />,
      href: 'https://dune.com/zardy',
      color: 'opacity-80 hover:opacity-100 transition-opacity',
    },
  ]

  return (
    <footer className="bg-dark-bg border-t border-neon-blue/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 font-mono text-sm">
              © {new Date().getFullYear()} On-Chain Data Analyst
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} text-2xl transition-transform transform hover:scale-110`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

