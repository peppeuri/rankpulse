import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, BarChart3, TrendingUp, Bell, Globe, Shield, Zap,
  ChevronDown, ArrowRight, Check, Search, LineChart, Target,
  Rocket, Users, Star, Award, Clock, Database, Lock, Settings
} from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#demo' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Pricing', href: '#pricing' },
]

const FEATURES = [
  {
    icon: BarChart3,
    title: 'Real-Time Rank Tracking',
    description: 'Track your rankings across Google, Bing, and Yahoo every 15 minutes. Never miss a ranking change again.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    description: 'Get notified the moment your rankings change via Slack, email, or webhook. Stay ahead of the competition.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Globe,
    title: 'Multi-Location Tracking',
    description: 'Track rankings for any location on Earth. Target specific cities, states, or countries with precision.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: LineChart,
    title: 'Advanced Analytics',
    description: 'Deep insights into your SEO performance with historical data, trend analysis, and competitor benchmarking.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share dashboards, assign tasks, and collaborate with your team. Perfect for agencies managing multiple clients.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'API & Integrations',
    description: 'Connect RankPulse with your existing tools. Full REST API, webhooks, and integrations with popular platforms.',
    color: 'from-emerald-500 to-green-500',
  },
]

const STEPS = [
  { step: '01', title: 'Add Your Website', description: 'Enter your domain and target keywords in seconds.' },
  { step: '02', title: 'Configure Tracking', description: 'Set locations, devices, and search engines to monitor.' },
  { step: '03', title: 'Monitor & Grow', description: 'Watch your rankings update in real-time and optimize your strategy.' },
]

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

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              RankPulse
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Log in</a>
            <a href="#cta" className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 transition-opacity">
              Start Free Trial
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-700/50"
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block text-sm text-slate-400 hover:text-white">
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-700/50 space-y-3">
                <a href="#" className="block text-sm text-slate-400 hover:text-white">Log in</a>
                <a href="#cta" className="block text-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
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

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-indigo-400 mb-8">
            <Rocket className="w-4 h-4" />
            <span>Trusted by 2,000+ SEO professionals</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Track Your</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-gradient">
              Rankings in Real-Time
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            The most powerful rank tracking platform for SEO professionals.
            Monitor keyword positions, analyze competitors, and grow your organic traffic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#cta" className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2 animate-pulse-glow">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#demo" className="px-8 py-3.5 rounded-lg glass text-white font-medium hover:bg-slate-700/50 transition-colors">
              See How It Works
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-1 max-w-4xl mx-auto">
            <div className="rounded-xl bg-dark-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 flex-1 h-8 rounded-lg bg-dark-700 flex items-center px-3">
                  <Search className="w-4 h-4 text-slate-500 mr-2" />
                  <span className="text-sm text-slate-500">rankpulse.app/dashboard</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[
                  { label: 'Keywords Tracked', value: '12,847', change: '+12%' },
                  { label: 'Avg. Position', value: '4.2', change: '+0.8' },
                  { label: 'Organic Traffic', value: '89.3K', change: '+23%' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-lg bg-dark-700/50">
                    <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-green-400">{stat.change}</div>
                  </div>
                ))}
              </div>
              <div className="h-48 rounded-lg bg-dark-700/50 p-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end px-4 pb-4">
                  {[40, 55, 45, 65, 50, 70, 60, 80, 75, 85, 78, 92].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.6, delay: i * 0.05 }}
                      className="flex-1 mx-0.5 rounded-t bg-gradient-to-t from-indigo-500 to-cyan-400 opacity-80"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProblemSolution() {
  const problems = [
    { text: 'Manual rank checking is slow and inaccurate', icon: Clock },
    { text: 'You miss sudden ranking drops until it\'s too late', icon: Bell },
    { text: 'No visibility into competitor movements', icon: Eye },
    { text: 'Scattered data across multiple tools', icon: Database },
  ]

  const solutions = [
    { text: 'Automated tracking every 15 minutes', icon: Zap },
    { text: 'Instant alerts via Slack, email, or webhook', icon: Bell },
    { text: 'Full competitor tracking and benchmarking', icon: Target },
    { text: 'Unified dashboard with all your data', icon: BarChart3 },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why SEO Teams Choose RankPulse
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Stop wasting hours on manual rank checks. Let automation do the heavy lifting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Without RankPulse</h3>
            </div>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-400">
                  <p.icon className="w-5 h-5 text-red-400/70 shrink-0" />
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border-indigo-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">With RankPulse</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <s.icon className="w-5 h-5 text-green-400 shrink-0" />
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to Dominate SEO
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Powerful features designed for serious SEO professionals and agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-card rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InteractiveDemo() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="demo" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Up and Running in Minutes
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Getting started with RankPulse is simple. Here's how it works.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeStep === i
                    ? 'glass border-indigo-500/40'
                    : 'hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-2xl font-bold ${activeStep === i ? 'text-indigo-400' : 'text-slate-600'}`}>
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="glass rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                {activeStep === 0 && (
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Add Your Domain</h3>
                    <div className="glass rounded-lg p-4 max-w-sm mx-auto">
                      <div className="flex items-center gap-2 bg-dark-800 rounded-lg px-4 py-3">
                        <Search className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-400">yoursite.com</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeStep === 1 && (
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                      <Settings className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Configure Tracking</h3>
                    <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                      {['Desktop', 'Mobile', 'Google', 'Bing'].map((opt) => (
                        <div key={opt} className="glass rounded-lg px-4 py-2 text-sm text-white text-center">
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Watch Results</h3>
                    <div className="flex items-end justify-center gap-1 h-24">
                      {[30, 45, 35, 60, 50, 75, 65, 85, 80, 95].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.4, delay: i * 0.08 }}
                          className="w-6 rounded-t bg-gradient-to-t from-indigo-500 to-cyan-400"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  const logos = ['Shopify', 'HubSpot', 'Semrush', 'Ahrefs', 'Moz']

  return (
    <section className="py-16 px-4 border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-slate-500 mb-8">TRUSTED BY LEADING TEAMS</p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {logos.map((name) => (
            <div key={name} className="text-xl font-bold text-slate-700 hover:text-slate-500 transition-colors">
              {name}
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { stars: 5, text: 'RankPulse transformed how we track rankings. The real-time data is incredible.', author: 'Sarah K., SEO Director' },
            { stars: 5, text: 'Best rank tracker I\'ve used. The alert system alone saves us hours every week.', author: 'Mike R., Agency Owner' },
            { stars: 5, text: 'Finally a tool that does everything we need without the bloat. Highly recommend.', author: 'Lisa T., Marketing Lead' },
          ].map((review, i) => (
            <div key={i} className="glass rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-slate-300 mb-4">"{review.text}"</p>
              <p className="text-xs text-slate-500">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-white">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-5 pb-5 text-sm text-slate-400">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTABanner() {
  return (
    <section id="cta" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2Mmgxem0tMS0xdi0ySDI1djJoMTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Tracking Rankings Today
            </h2>
            <p className="text-lg text-indigo-100 max-w-xl mx-auto mb-8">
              Join 2,000+ SEO professionals who trust RankPulse to monitor their search rankings. Start your free trial now.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="px-8 py-3.5 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="px-8 py-3.5 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
                Book a Demo
              </a>
            </div>
            <p className="mt-6 text-sm text-indigo-200">14-day free trial · No credit card required · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">RankPulse</span>
            </div>
            <p className="text-sm text-slate-400">
              Real-time rank tracking for modern SEO teams.
            </p>
          </div>
          {[
            { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'API Docs'] },
            { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
            { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} RankPulse. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-200">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <InteractiveDemo />
      <SocialProof />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  )
}
