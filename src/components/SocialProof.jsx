import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    text: 'RankPulse transformed how we track rankings. The real-time data is incredible and the alerts alone save us hours every week.',
    author: 'Sarah K.',
    role: 'SEO Director at TechFlow',
    rating: 5,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-950/40',
    borderColor: 'border-indigo-500/20',
  },
  {
    text: 'Best rank tracker I\'ve used. The interface is beautiful and incredibly fast. The multi-location tracking is a game changer.',
    author: 'Mike R.',
    role: 'Agency Owner at GrowthLab',
    rating: 5,
    color: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-cyan-950/40',
    borderColor: 'border-cyan-500/20',
  },
  {
    text: 'Finally a tool that does everything we need without the bloat. The competitor analysis is incredibly detailed.',
    author: 'Lisa T.',
    role: 'Marketing Lead at NovaMedia',
    rating: 5,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-950/40',
    borderColor: 'border-violet-500/20',
  },
]

export default function SocialProof() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
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
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-white leading-[1.05]">
            Loved by<br />SEO Teams.
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
              className={`rounded-3xl p-8 ${review.bgColor} border ${review.borderColor} glass-card group`}
            >
              <Quote className="w-8 h-8 mb-4 text-slate-600" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                &ldquo;{review.text}&rdquo;
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
          <p className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-8">
            Trusted by leading teams
          </p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
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
