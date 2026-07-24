import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BarChart3, Bell, Globe, LineChart, ArrowRight } from 'lucide-react'

const BLOCKS = [
  {
    tag: 'Real-Time Tracking',
    title: 'Monitor Every Keyword Across Every Search Engine.',
    description: 'Track your rankings across Google, Bing, and Yahoo every 15 minutes. Get granular data for any location, device, or language.',
    icon: BarChart3,
    bgClass: 'bg-indigo-500',
    darkBg: 'bg-indigo-950/40',
    accentText: 'text-indigo-400',
    accentBorder: 'border-indigo-500/20',
    iconBg: 'bg-indigo-500/20',
    visualIcon: BarChart3,
    reverse: false,
  },
  {
    tag: 'Instant Alerts',
    title: 'Know When Rankings Change Before Anyone Else.',
    description: 'Get notified the moment your rankings change via Slack, email, or webhook. Stay ahead of the competition with real-time intelligence.',
    icon: Bell,
    bgClass: 'bg-rose-500',
    darkBg: 'bg-rose-950/40',
    accentText: 'text-rose-400',
    accentBorder: 'border-rose-500/20',
    iconBg: 'bg-rose-500/20',
    visualIcon: Bell,
    reverse: true,
  },
  {
    tag: 'Multi-Location',
    title: 'Track Rankings for Any Location on Earth.',
    description: 'Target specific cities, states, or countries with precision. See how your site performs across different geographic areas.',
    icon: Globe,
    bgClass: 'bg-blue-500',
    darkBg: 'bg-blue-950/40',
    accentText: 'text-blue-400',
    accentBorder: 'border-blue-500/20',
    iconBg: 'bg-blue-500/20',
    visualIcon: Globe,
    reverse: false,
  },
  {
    tag: 'Advanced Analytics',
    title: 'Deep Insights Into Your SEO Performance.',
    description: 'Historical data, trend analysis, and competitor benchmarking — all in one powerful dashboard.',
    icon: LineChart,
    bgClass: 'bg-violet-500',
    darkBg: 'bg-violet-950/40',
    accentText: 'text-violet-400',
    accentBorder: 'border-violet-500/20',
    iconBg: 'bg-violet-500/20',
    visualIcon: LineChart,
    reverse: true,
  },
]

function FeatureBlock({ block }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  const VisualPanel = (
    <motion.div style={{ y: imgY }} className="relative">
      <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${block.darkBg} border ${block.accentBorder}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-48 h-48 rounded-full ${block.iconBg} blur-3xl`} />
          <block.visualIcon className={`absolute w-20 h-20 ${block.accentText} opacity-25`} />
          <div className={`absolute w-32 h-32 rounded-2xl border-2 ${block.accentBorder} rotate-12 opacity-30`} />
          <div className={`absolute w-20 h-20 rounded-full border ${block.accentBorder} -rotate-6 opacity-20`} />
        </div>
        <div className="absolute inset-0 hero-grid opacity-30" />
      </div>
    </motion.div>
  )

  const TextPanel = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={`inline-block text-sm font-bold uppercase tracking-widest ${block.accentText} mb-4`}>
        {block.tag}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-[-0.03em] text-white leading-[1.05] mb-6">
        {block.title}
      </h2>
      <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
        {block.description}
      </p>
      <a href="#cta" className="inline-flex items-center gap-2 font-semibold text-white group">
        Learn more
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  )

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      {block.reverse ? (
        <>{TextPanel}{VisualPanel}</>
      ) : (
        <>{VisualPanel}{TextPanel}</>
      )}
    </div>
  )
}

export default function FeatureBlocks() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-24 md:space-y-32">
        {BLOCKS.map((block, i) => (
          <FeatureBlock key={i} block={block} />
        ))}
      </div>
    </section>
  )
}
