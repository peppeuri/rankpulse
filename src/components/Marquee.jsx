import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Marquee({ words, direction = 'left', className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? ['0%', '-30%'] : ['-30%', '0%']
  )

  const repeated = [...words, ...words, ...words]

  return (
    <div ref={ref} className={`overflow-hidden py-6 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap gap-8"
        style={{ x }}
      >
        {repeated.map((word, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-slate-800/60 select-none">
              {word}
            </span>
            <span className="w-3 h-3 rounded-full bg-indigo-500/40 shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function InfiniteMarquee({ words, speed = 30, reverse = false, className = '' }) {
  const anim = reverse ? 'animate-marquee-reverse' : 'animate-marquee'
  const repeated = [...words, ...words]

  return (
    <div className={`overflow-hidden py-4 ${className}`} style={{ '--speed': `${speed}s` }}>
      <div className={`flex whitespace-nowrap gap-8 ${anim}`} style={{ animationDuration: `${speed}s` }}>
        {repeated.map((word, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase text-slate-700/50 select-none">
              {word}
            </span>
            <span className="w-2 h-2 rounded-full bg-indigo-500/30 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
