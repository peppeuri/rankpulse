import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BarChart3, Bell, Globe, LineChart, Users, Zap, ArrowRight } from 'lucide-react'

const BLOCKS = [
  {
    tag: 'Real-Time Tracking',
    title: 'Monitor Every Keyword Across Every Search Engine.',
    description: 'Track your rankings across Google, Bing, and Yahoo every 15 minutes. Get granular data for any location, device, or language.',
    icon: BarChart3,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/5',
    borderColor: 'border-indigo-500/20',
    accentText: 'text-indigo-400',
  },
  {
    tag: 'Instant Alerts',
    title: 'Know When Rankings Change Before Anyone Else.',
    description: 'Get notified the moment your rankings change via Slack, email, or webhook. Stay ahead of the competition with real-time intelligence.',
    icon: Bell,
    color: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-cyan-500/5',
    borderColor: 'border-cyan-500/20',
    accentText: 'text-cyan-400',
    reverse: true,
  },
  {
    tag: 'Multi-Location',
    title: 'Track Rankings for Any Location on Earth.',
    description: 'Target specific cities, states, or countries with precision. See how your site performs across different geographic areas.',
    icon: Globe,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/5',
    borderColor: 'border-violet-500/20',
    accentText: 'text-violet-400',
  },
  {
    tag: 'Advanced Analytics',
    title: 'Deep Insights Into Your SEO Performance.',
    description: 'Historical data, trend analysis, and competitor benchmarking — all in one powerful dashboard.',
    icon: LineChart,
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-500/5',
    borderColor: 'border-rose-500/20',
    accentText: 'text-rose-400',
    reverse: true,
  },
]

function FeatureBlock({ block, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <div ref={ref} className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${block.reverse ? '' : ''}`}>
      {/* Image / Visual panel */}
      <motion.div
        className={`relative ${block.reverse ? 'lg:order-2' : ''}`}
        style={{ y: imgY }}
      >
        <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${block.bgColor} border ${block.borderColor}`}>
          {/* Abstract visual inside the panel */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${block.color} opacity-20 blur-3xl`} />
            <div className={`absolute w-24 h-24 rounded-2xl bg-gradient-to-br ${block.color} opacity-15 rotate-12`} />
            <block.icon className={`absolute w-16 h-16 ${block.accentText} opacity-30`} />
          </div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 hero-grid opacity-40" />
        </div>
      </motion.div>

      {/* Text panel */}
      <div className={block.reverse ? 'lg:order-1' : ''}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={`inline-block text-sm font-bold uppercase tracking-widest ${block.accentText} mb-4`}>
            {block.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1] mb-6">
            {block.title}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
            {block.description}
          </p>
          <a href="#cta" className="btn-shape inline-flex items-center gap-2 text-white font-semibold group">
            Learn more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default function FeatureBlocks() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        {BLOCKS.map((block, i) => (
          <FeatureBlock key={i} block={block} index={i} />
        ))}
      </div>
    </section>
  )
}
