import { useState, useCallback } from 'react'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import FeatureBlocks from './components/FeatureBlocks'
import InteractiveDemo from './components/InteractiveDemo'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

const MARQUEE_1 = ['Rank Tracking', 'SEO Analytics', 'Real-Time Alerts', 'Keyword Monitoring', 'Competitor Analysis', 'SERP Intelligence']
const MARQUEE_2 = ['Google Rankings', 'Bing Tracking', 'Multi-Location', 'Mobile First', 'API Access', 'Team Collaboration']

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const onComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Preloader onComplete={onComplete} />
      {loaded && <CustomCursor />}

      <div className={`min-h-screen bg-dark-900 text-slate-200 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />

        <Marquee
          words={MARQUEE_1}
          bgColor="bg-indigo-950/60"
          textColor="text-indigo-400/40"
          speed={30}
          className="border-y border-indigo-500/10"
        />

        <FeatureBlocks />

        <Marquee
          words={MARQUEE_2}
          reverse
          bgColor="bg-cyan-950/40"
          textColor="text-cyan-400/30"
          speed={35}
          className="border-y border-cyan-500/10"
        />

        <InteractiveDemo />
        <SocialProof />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  )
}
