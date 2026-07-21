import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Settings, TrendingUp, ArrowRight } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    title: 'Add Your Website',
    description: 'Enter your domain and target keywords in seconds.',
    icon: Globe,
    color: 'from-indigo-500 to-cyan-500',
    accentText: 'text-indigo-400',
  },
  {
    step: '02',
    title: 'Configure Tracking',
    description: 'Set locations, devices, and search engines to monitor.',
    icon: Settings,
    color: 'from-violet-500 to-purple-500',
    accentText: 'text-violet-400',
  },
  {
    step: '03',
    title: 'Monitor & Grow',
    description: 'Watch your rankings update in real-time and optimize your strategy.',
    icon: TrendingUp,
    color: 'from-emerald-500 to-green-500',
    accentText: 'text-emerald-400',
  },
]

export default function InteractiveDemo() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-indigo-400 mb-4">
            How it Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Up and Running in Minutes
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Getting started with RankPulse is simple.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Steps list */}
          <div className="space-y-3">
            {STEPS.map((step, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-400 ${
                  activeStep === i
                    ? 'glass border-indigo-500/30'
                    : 'hover:bg-slate-800/30 border border-transparent'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`text-3xl font-black ${activeStep === i ? step.accentText : 'text-slate-700'} transition-colors`}>
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Preview panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-8 min-h-[420px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center w-full"
                >
                  {activeStep === 0 && (
                    <div className="space-y-6">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${STEPS[0].color} flex items-center justify-center`}>
                        <Globe className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Add Your Domain</h3>
                      <div className="glass rounded-xl p-4 max-w-sm mx-auto">
                        <div className="flex items-center gap-2 bg-dark-800 rounded-lg px-4 py-3">
                          <Globe className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-400 text-sm">yoursite.com</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className="space-y-6">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${STEPS[1].color} flex items-center justify-center`}>
                        <Settings className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Configure Tracking</h3>
                      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                        {['Desktop', 'Mobile', 'Google', 'Bing'].map((opt) => (
                          <motion.div
                            key={opt}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="glass rounded-xl px-4 py-3 text-sm text-white text-center"
                          >
                            {opt}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div className="space-y-6">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${STEPS[2].color} flex items-center justify-center`}>
                        <TrendingUp className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Watch Results</h3>
                      <div className="flex items-end justify-center gap-1.5 h-28">
                        {[30, 45, 35, 60, 50, 75, 65, 85, 80, 95].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                            className="w-7 rounded-t bg-gradient-to-t from-indigo-500 to-cyan-400"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
