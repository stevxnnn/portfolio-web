'use client'

import { useState, useEffect } from 'react'
import {
  FaHome,
  FaUser,
  FaCode,
  FaChartBar,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa'

const NAV_ITEMS = [
  { name: 'Home', href: '#home', icon: FaHome },
  { name: 'About', href: '#about', icon: FaUser },
  { name: 'Skills', href: '#skills', icon: FaCode },
  { name: 'Projects', href: '#projects', icon: FaChartBar },
  { name: 'Contact', href: '#contact', icon: FaEnvelope },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track active section + scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = NAV_ITEMS.map((item) => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* ─── Desktop top bar ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${scrolled
          ? 'bg-dark-bg/90 backdrop-blur-lg border-b border-dark-border shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="font-mono text-sm text-accent-blue font-bold tracking-wider hover:text-accent-blue-light transition-colors"
          >
            SL<span className="text-slate-500">.</span>
          </a>

          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${activeSection === item.href.slice(1)
                  ? 'text-accent-blue'
                  : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-blue rounded-full" />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Mobile bottom nav ─── */}
      <div className="bottom-nav md:hidden">
        <div className="flex items-center justify-around px-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-all duration-200 ${isActive
                  ? 'text-accent-blue'
                  : 'text-slate-500 active:text-slate-300'
                  }`}
              >
                <Icon size={18} />
                <span className="text-[10px] font-mono">{item.name}</span>
                {isActive && (
                  <span className="absolute top-0 w-6 h-0.5 bg-accent-blue rounded-full" />
                )}
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
