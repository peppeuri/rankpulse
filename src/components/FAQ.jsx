import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'How often are rankings updated?',
    a: 'Our system checks rankings every 15 minutes for Pro plans and every hour for Starter plans. Enterprise plans can request custom intervals.',
  },
  {
    q: 'Can I track rankings for specific locations?',
    a: 'Yes! You can target rankings down to the city level for over 100,000 locations worldwide. Track how your site performs in different geographic areas.',
  },
  {
    q: 'Do you support all major search engines?',
    a: 'We support Google, Bing, and Yahoo across desktop, mobile, and tablet devices. New search engines are added based on user requests.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your account settings.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-indigo-400 mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-400">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-semibold text-white group-hover:text-indigo-400 transition-colors pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-indigo-400' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-6 pb-6 text-slate-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
