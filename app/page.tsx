'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import CurrentlyBuilding from '@/components/CurrentlyBuilding'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface dark:bg-surface text-on-surface dark:text-on-surface bg-white text-slate-900 grid-overlay transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CurrentlyBuilding />
      <Contact />
      <Footer />
    </main>
  )
}
