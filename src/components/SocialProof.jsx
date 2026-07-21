import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    text: 'RankPulse transformed how we track rankings. The real-time data is incredible and the alerts alone save us hours every week.',
    author: 'Sarah K.',
    role: 'SEO Director at TechFlow',
    rating: 5,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    text: 'Best rank tracker I\'ve used. The alert system alone saves us hours every week. The interface is beautiful and incredibly fast.',
    author: 'Mike R.',
    role: 'Agency Owner at GrowthLab',
    rating: 5,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    text: 'Finally a tool that does everything we need without the bloat. The multi-location tracking is a game changer for our clients.',
    author: 'Lisa T.',
    role: 'Marketing Lead at NovaMedia',
    rating: 5,
    color: 'from-violet-500 to-purple-500',
  },
]

export default function SocialProof() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
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
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Loved by SEO Teams
          </h2>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glass-card rounded-2xl p-8 group"
            >
              <Quote className={`w-8 h-8 mb-4 opacity-30 bg-gradient-to-r ${review.color} bg-clip-text`} style={{ color: 'transparent' }} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {review.author[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{review.author}</p>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-600 mb-8">
            Trusted by leading teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {['Shopify', 'HubSpot', 'Semrush', 'Ahrefs', 'Moz', 'Buffer'].map((name) => (
              <div key={name} className="text-xl font-bold text-slate-700/60 hover:text-slate-500 transition-colors cursor-default">
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
