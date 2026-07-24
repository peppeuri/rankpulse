import { useState, useEffect } from 'react'

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
        <svg viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="48" fontFamily="system-ui, sans-serif" fontSize="52" fontWeight="900" letterSpacing="-2" fill="white">
            Rank
          </text>
          <text x="130" y="48" fontFamily="system-ui, sans-serif" fontSize="52" fontWeight="900" letterSpacing="-2" fill="#6366F1">
            Pulse
          </text>
          <circle cx="370" cy="30" r="8" fill="#6366F1" opacity="0.8">
            <animate attributeName="r" values="6;10;6" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  )
}
