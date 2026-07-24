import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#demo' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tight text-white">
            Rank<span className="text-indigo-400">Pulse</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            Log in
          </a>
          <a href="#cta" className="btn-shape !px-6 !py-2.5 !text-sm">
            <span className="relative z-10 flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-700/50"
          >
            <div className="px-6 py-5 space-y-4">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-400 hover:text-white">
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-700/50 space-y-4">
                <a href="#" className="block text-sm font-medium text-slate-400 hover:text-white">Log in</a>
                <a href="#cta" onClick={() => setOpen(false)} className="block text-center btn-shape !text-sm">
                  Start Free Trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
