'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['about', 'experience', 'skills', 'projects', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(sections[i])
            return
          }
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'glass-nav-solid shadow-lg' : 'glass-nav'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className="font-heading text-lg font-bold text-primary tracking-wider hover:opacity-80 transition-opacity"
            style={{ textShadow: '0 0 20px rgba(0,212,255,0.3)' }}
          >
            SL<span className="text-on-surface-variant">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary rounded-full" />
                )}
              </a>
            ))}

            <a
              href="/steven-liew-cv.pdf"
              download
              className="btn-ghost text-xs !px-4 !py-2 flex items-center gap-1.5"
            >
              <Download size={12} />
              Resume
            </a>

            <a
              href="https://dune.com/zardy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs !px-4 !py-2"
            >
              Dune Profile
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: 'rgba(8,14,28,0.97)' }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading text-2xl font-semibold text-on-surface hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/steven-liew-cv.pdf"
            download
            className="btn-ghost mt-2 flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Download size={14} />
            Download Resume
          </a>
          <a
            href="https://dune.com/zardy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dune Profile
          </a>
        </div>
      )}
    </>
  )
}
