import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image / gradient */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute inset-0 hero-grid opacity-60" />
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />
      </motion.div>

      {/* Dark gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark-900 to-transparent z-10" />

      <motion.div style={{ y, opacity }} className="relative z-20 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pb-16 pt-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Left — massive text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-indigo-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Trusted by 2,000+ SEO professionals
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,10vw,9rem)] font-black tracking-[-0.04em] leading-[0.85]"
            >
              <span className="block text-white">Track</span>
              <span className="block text-white">Every</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Rank.
              </span>
            </motion.h1>
          </div>

          {/* Right — CTA area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-4 md:pb-4"
          >
            <p className="text-lg md:text-xl text-slate-400 max-w-md leading-relaxed">
              The most powerful rank tracking platform for SEO professionals. Monitor keyword positions, analyze competitors, and grow your organic traffic.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#cta" className="btn-shape">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
                <svg className="shape-overlay" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <ellipse cx="100" cy="30" rx="120" ry="40" fill="#06B6D4" opacity="0.3" />
                </svg>
              </a>
              <a href="#demo" className="btn-outline">
                See How It Works
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 mt-2">
              {['No credit card required', '14-day free trial', 'Cancel anytime'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
