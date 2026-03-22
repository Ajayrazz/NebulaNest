import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ProjectsSection from './components/ProjectsSection'
import MacbookShowcase from './components/MacbookShowcase'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-0">
        <Hero />
        <About />
        <CompetitiveProgramming />
        <MacbookShowcase />
        <ProjectsSection />
        <Timeline />
        <Contact />
      </div>
      <Footer />
    </main>
  )
} 