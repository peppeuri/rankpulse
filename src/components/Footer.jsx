import { BarChart3 } from 'lucide-react'

const LINKS = [
  { title: 'Product', items: ['Features', 'Pricing', 'Changelog', 'API Docs'] },
  { title: 'Company', items: ['About', 'Blog', 'Careers', 'Contact'] },
  { title: 'Legal', items: ['Privacy', 'Terms', 'Security'] },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Rank</span>
                <span className="text-white">Pulse</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Real-time rank tracking for modern SEO teams. Monitor, analyze, and grow your organic traffic.
            </p>
          </div>

          {/* Link columns */}
          {LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} RankPulse. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Twitter', 'GitHub', 'LinkedIn'].map((s) => (
              <a key={s} href="#" className="hover:text-indigo-400 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
