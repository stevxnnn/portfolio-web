'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navigation() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        isSideMenuOpen &&
        !target.closest('.side-menu') &&
        !target.closest('.menu-button')
      ) {
        setIsSideMenuOpen(false)
      }
    }

    if (isSideMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isSideMenuOpen])

  return (
    <>
      {/* Menu Button - Top Right */}
      <button
        onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        className="fixed top-6 right-6 z-50 menu-button p-3 bg-dark-card border border-neon-blue/40 rounded-lg text-neon-blue hover:text-neon-cyan hover:border-neon-blue/60 transition-all duration-300 shadow-lg hover:shadow-xl shadow-neon-blue/20"
        aria-label="Toggle menu"
      >
        {isSideMenuOpen ? (
          <FaTimes size={24} />
        ) : (
          <FaBars size={24} />
        )}
      </button>

      {/* Side Menu Overlay */}
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsSideMenuOpen(false)}
        />
      )}

      {/* Side Menu */}
      <nav
        className={`side-menu fixed top-0 right-0 h-full w-80 bg-dark-card border-l-2 border-neon-blue/40 z-50 transform transition-transform duration-300 ease-in-out ${
          isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-2xl`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Close button inside menu */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsSideMenuOpen(false)}
              className="text-neon-blue hover:text-neon-cyan transition-colors"
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsSideMenuOpen(false)}
                className="text-2xl font-semibold text-gray-200 hover:text-neon-blue transition-all duration-300 transform hover:translate-x-2 hover:scale-105 border-b border-neon-blue/20 pb-4 font-mono"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

