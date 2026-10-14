import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Builds from './components/Builds'
import Room from './components/Room'
import Nights from './components/Nights'
import People from './components/People'
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
        <Builds />
        <Room />
        <Nights />
        <People />
        <FAQ />
        <Join />
      </main>
      <Footer />
    </>
  )
}
