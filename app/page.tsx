import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import FlashCard from '@/components/FlashCard'

export default function Home() {
  const totalCards = 4

  return (
    <main className="min-h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navigation />
      <Hero />
      <FlashCard id="about" cardNumber={1} totalCards={totalCards}>
        <About />
      </FlashCard>
      <FlashCard id="skills" cardNumber={2} totalCards={totalCards}>
        <Skills />
      </FlashCard>
      <FlashCard id="projects" cardNumber={3} totalCards={totalCards}>
        <Projects />
      </FlashCard>
      <FlashCard id="contact" cardNumber={4} totalCards={totalCards}>
        <Contact />
      </FlashCard>
    </main>
  )
}
