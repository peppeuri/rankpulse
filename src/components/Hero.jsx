import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, ArrowRight, Search } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden hero-grid noise">
      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/12 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-indigo-400 mb-8">
                <Rocket className="w-4 h-4" />
                <span>Trusted by 2,000+ SEO professionals</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
            >
              <span className="text-white block">Track</span>
              <span className="text-white block">Every</span>
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-gradient block">
                Rank.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 leading-relaxed"
            >
              The most powerful rank tracking platform for SEO professionals.
              Monitor keyword positions, analyze competitors, and grow your organic traffic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#cta"
                className="btn-shape inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="btn-shape inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass text-white font-bold text-lg hover:bg-slate-700/50 transition-all"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500"
            >
              {['No credit card required', '14-day free trial', 'Cancel anytime'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-1">
              <div className="rounded-[22px] bg-dark-800/90 p-6">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-3 flex-1 h-8 rounded-lg bg-dark-700/60 flex items-center px-3">
                    <Search className="w-3.5 h-3.5 text-slate-500 mr-2" />
                    <span className="text-xs text-slate-500">rankpulse.app/dashboard</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Keywords', value: '12,847', change: '+12%', up: true },
                    { label: 'Avg. Position', value: '4.2', change: '+0.8', up: true },
                    { label: 'Traffic', value: '89.3K', change: '+23%', up: true },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-dark-700/40">
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">{s.label}</div>
                      <div className="text-xl font-bold text-white">{s.value}</div>
                      <div className="text-xs font-semibold text-green-400 mt-0.5">{s.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="h-44 rounded-xl bg-dark-700/30 p-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end px-4 pb-4">
                    {[40, 55, 45, 65, 50, 70, 60, 80, 75, 85, 78, 92, 70, 88, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.6, delay: 0.8 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 mx-px rounded-t bg-gradient-to-t from-indigo-500 to-cyan-400 opacity-80"
                      />
                    ))}
                  </div>
                  {/* Line overlay */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <motion.path
                      d="M0,80 L20,65 L40,70 L60,50 L80,55 L100,35 L120,40 L140,25 L160,30 L180,20 L200,15 L220,22 L240,18 L260,12 L280,8 L300,5"
                      fill="none"
                      stroke="url(#line-gradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
