'use client'

import { useEffect, useRef } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null)

  // Cursor follower glow (desktop)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal-section').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" />

      <Navigation />
      <Hero />

      <div className="reveal-section">
        <About />
      </div>

      <div className="reveal-section">
        <Skills />
      </div>

      <div className="reveal-section">
        <Projects />
      </div>

      <div className="reveal-section">
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
