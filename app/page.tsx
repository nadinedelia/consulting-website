import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Expertise from '@/components/Expertise'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navigation />
      <Hero />
      <Services />
      <Expertise />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
