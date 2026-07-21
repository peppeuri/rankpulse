import { useState, useCallback } from 'react'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { InfiniteMarquee } from './components/Marquee'
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

        <InfiniteMarquee words={MARQUEE_1} speed={35} className="border-y border-slate-800/40" />

        <FeatureBlocks />

        <InfiniteMarquee words={MARQUEE_2} speed={40} reverse className="border-y border-slate-800/40" />

        <InteractiveDemo />
        <SocialProof />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  )
}
