import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofTicker from './components/ProofTicker'
import Builds from './components/Builds'
import Room from './components/Room'
import Nights from './components/Nights'
import Spaces from './components/Spaces'
import People from './components/People'
import Why from './components/Why'
import FAQ from './components/FAQ'
import Join from './components/Join'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <ProofTicker />
        <Builds />
        <Room />
        <Nights />
        <Spaces />
        <People />
        <Why />
        <FAQ />
        <Join />
      </main>
      <Footer />
    </>
  )
}
