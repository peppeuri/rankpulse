import { motion } from 'framer-motion'
import { Globe, Settings, TrendingUp, ArrowRight } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    title: 'Add Your Website',
    description: 'Enter your domain and target keywords in seconds. Our crawler handles the rest.',
    icon: Globe,
    color: 'from-indigo-500 to-blue-500',
    accentText: 'text-indigo-400',
    bgColor: 'bg-indigo-950/60',
    borderColor: 'border-indigo-500/20',
    stats: { label: 'Domains', value: '12,847' },
  },
  {
    step: '02',
    title: 'Configure Tracking',
    description: 'Set locations, devices, and search engines. Customize update frequency.',
    icon: Settings,
    color: 'from-violet-500 to-purple-500',
    accentText: 'text-violet-400',
    bgColor: 'bg-violet-950/60',
    borderColor: 'border-violet-500/20',
    stats: { label: 'Locations', value: '100K+' },
  },
  {
    step: '03',
    title: 'Monitor & Grow',
    description: 'Watch your rankings update in real-time. Optimize strategy with data.',
    icon: TrendingUp,
    color: 'from-emerald-500 to-green-500',
    accentText: 'text-emerald-400',
    bgColor: 'bg-emerald-950/60',
    borderColor: 'border-emerald-500/20',
    stats: { label: 'Avg. Position', value: '4.2' },
  },
]

export default function InteractiveDemo() {
  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-indigo-400 mb-4">
            How it Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-white leading-[1.05]">
            Up and Running<br />in Minutes.
          </h2>
        </motion.div>

        {/* Horizontal scroll cards (units.gr swiper style) */}
        <div className="swiper-row -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="swiper-card"
            >
              <div className={`relative rounded-3xl overflow-hidden ${step.bgColor} border ${step.borderColor} h-full`}>
                {/* Top: icon area */}
                <div className="relative h-56 flex items-center justify-center overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`} />
                  <div className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${step.color} opacity-20 blur-3xl`} />
                  <step.icon className={`relative w-16 h-16 ${step.accentText}`} />
                  <div className="absolute top-4 right-4 text-6xl font-black text-white/5">{step.step}</div>
                </div>

                {/* Bottom: text + stat */}
                <div className="p-8">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className={`text-sm font-bold uppercase tracking-widest ${step.accentText}`}>{step.step}</span>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{step.stats.label}</div>
                      <div className="text-2xl font-black text-white">{step.stats.value}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{step.description}</p>
                  <a href="#cta" className="inline-flex items-center gap-2 text-sm font-semibold text-white group">
                    Get started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
