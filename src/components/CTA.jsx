import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-600"
        >
          {/* Animated shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-shape" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-shape" style={{ animationDelay: '-4s' }} />
          </div>

          <div className="absolute inset-0 hero-grid opacity-20" />

          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm text-white/80 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start your free trial today</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-[-0.03em] text-white mb-6 leading-[1.0]">
              Start Tracking<br />Rankings Today.
            </h2>
            <p className="text-lg md:text-xl text-indigo-100/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Join 2,000+ SEO professionals who trust RankPulse to monitor their search rankings.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-600 font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl shadow-black/10">
                Start Free Trial
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors">
                Book a Demo
              </a>
            </div>

            <p className="mt-8 text-sm text-indigo-200/60">
              14-day free trial · No credit card required · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
