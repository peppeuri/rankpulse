const LINKS = [
  { title: 'Product', items: ['Features', 'Pricing', 'Changelog', 'API Docs'] },
  { title: 'Company', items: ['About', 'Blog', 'Careers', 'Contact'] },
  { title: 'Legal', items: ['Privacy', 'Terms', 'Security'] },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60">
      {/* Giant SVG logo (units.gr style) */}
      <div className="w-full overflow-hidden py-12 md:py-20 flex items-center justify-center">
        <svg viewBox="0 0 900 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-5xl px-6">
          <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="110" fontWeight="900" letterSpacing="-4" fill="white" opacity="0.06">
            RankPulse
          </text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 md:pb-20">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="text-2xl font-black tracking-tight text-white block mb-5">
              Rank<span className="text-indigo-400">Pulse</span>
            </span>
            <p className="text-slate-400 leading-relaxed max-w-xs text-lg">
              Real-time rank tracking for modern SEO teams.
            </p>
          </div>

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
