import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    document.body.style.cursor = 'none'

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) setHovering(true)
    }
    const out = () => setHovering(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
      document.body.style.cursor = ''
    }
  }, [visible])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full border-2 border-indigo-400/60 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: pos.x - 10,
          y: pos.y - 10,
          scale: hovering ? 2.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: hovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />
    </>
  )
}
