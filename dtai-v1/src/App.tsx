import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SuccessStories from './components/SuccessStories'
import BuildInPublic from './components/BuildInPublic'
import Collaborators from './components/Collaborators'
import Events from './components/Events'
import Builders from './components/Builders'
import Mission from './components/Mission'
import CollaborateForm from './components/CollaborateForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Success Stories — dark section */}
        <SuccessStories />

        {/* 3. Build in Public — light section */}
        <BuildInPublic />

        {/* 4. Collaborators — dark section */}
        <Collaborators />

        {/* 5. Events — light section */}
        <Events />

        {/* 6. Builders/People — dark section */}
        <Builders />

        {/* 7. Mission — light section */}
        <Mission />

        {/* 8. FAQ — light section */}
        <FAQ />

        {/* 9. Contact/Collaborate — dark section */}
        <CollaborateForm />
      </main>
      <Footer />
    </div>
  )
}
