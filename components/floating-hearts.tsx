"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  opacity: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 16 + 8,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 12,
      opacity: Math.random() * 0.15 + 0.05,
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <svg
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
            animation: `floatHeart ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
          }}
          viewBox="0 0 24 24"
          fill="hsl(350, 60%, 52%)"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}

      <style jsx>{`
        @keyframes floatHeart {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-30px) rotate(5deg) scale(1.05);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg) scale(0.95);
          }
          75% {
            transform: translateY(-40px) rotate(2deg) scale(1.02);
          }
        }
      `}</style>
    </div>
  )
}
