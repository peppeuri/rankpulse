export default function Marquee({ words, reverse = false, bgColor = 'bg-dark-800', textColor = 'text-white', speed = 25, className = '' }) {
  const anim = reverse ? 'animate-marquee-reverse' : 'animate-marquee'
  const repeated = [...words, ...words]

  return (
    <div className={`overflow-hidden ${bgColor} py-5 ${className}`}>
      <div className={`flex whitespace-nowrap ${anim}`} style={{ animationDuration: `${speed}s` }}>
        {repeated.map((word, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase ${textColor} select-none px-4`}>
              {word}
            </span>
            <svg className="w-5 h-5 shrink-0 mx-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
