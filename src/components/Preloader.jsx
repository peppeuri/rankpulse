import { useState, useEffect } from 'react'
import logo from '../assets/rankpulse-logo.jpg'

export default function Preloader({ onComplete }) {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 2200)
    const t2 = setTimeout(() => onComplete(), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onComplete])

  return (
    <div
      className="preloader"
      style={{
        opacity: hide ? 0 : 1,
        transform: hide ? 'scale(0.9)' : 'scale(1)',
        transition: 'opacity 0.6s cubic-bezier(0.76,0,0.24,1), transform 0.6s cubic-bezier(0.76,0,0.24,1)',
        pointerEvents: hide ? 'none' : 'auto',
      }}
    >
      <div className="preloader-logo">
        <img src={logo} alt="RankPulse" className="h-14 w-auto object-contain" />
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  )
}
