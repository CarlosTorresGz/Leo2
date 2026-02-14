"use client"

import { useState, useCallback } from "react"

interface Spark {
  id: number
  x: number
  y: number
  angle: number
  distance: number
}

export function PulseHeart() {
  const [isBeating, setIsBeating] = useState(false)
  const [sparks, setSparks] = useState<Spark[]>([])
  const [clickCount, setClickCount] = useState(0)

  const messages = [
    "Te amo",
    "Eres todo",
    "Mi vida",
    "Te adoro",
    "Por siempre",
    "Mi amor",
    "Solo soy tuyo",
    "Eres luz",
    "Me encantas",
  ]

  const handleClick = useCallback(() => {
    setIsBeating(true)
    setClickCount((prev) => prev + 1)
    setTimeout(() => setIsBeating(false), 600)

    const newSparks: Spark[] = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: 0,
      y: 0,
      angle: (360 / 8) * i + Math.random() * 20 - 10,
      distance: Math.random() * 60 + 40,
    }))
    setSparks(newSparks)
    setTimeout(() => setSparks([]), 800)
  }, [])

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20">
      <p className="mb-8 font-sans text-xs tracking-[0.3em] text-muted-foreground uppercase">
        Toca el corazón
      </p>

      <div className="relative">
        {/* Sparks */}
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className="absolute left-1/2 top-1/2"
            style={{
              animation: "sparkOut 0.8s ease-out forwards",
              transform: `rotate(${spark.angle}deg)`,
            }}
          >
            <svg
              className="h-3 w-3 -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 24 24"
              fill="hsl(350, 60%, 52%)"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}

        {/* Main Heart */}
        <button
          onClick={handleClick}
          className="relative cursor-pointer transition-transform duration-300 focus:outline-none"
          style={{
            transform: isBeating ? "scale(1.2)" : "scale(1)",
            transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
          aria-label="Pulsar corazón"
        >
          <svg
            className="h-28 w-28 drop-shadow-lg md:h-36 md:w-36"
            viewBox="0 0 24 24"
            fill="hsl(350, 60%, 52%)"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>

          {/* Pulse ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              animation: isBeating ? "pulseRing 0.6s ease-out" : "none",
              border: "2px solid hsl(350, 60%, 52%)",
              opacity: 0,
              transform: "scale(1)",
            }}
          />
        </button>
      </div>

      {/* Message */}
      <div className="mt-10 h-8">
        {clickCount > 0 && (
          <p
            className="font-serif text-lg text-primary md:text-xl"
            style={{
              animation: "fadeInUp 0.5s ease-out",
            }}
            key={clickCount}
          >
            {messages[(clickCount - 1) % messages.length]}
          </p>
        )}
      </div>

      <p className="mt-4 font-sans text-xs text-muted-foreground">
        {clickCount > 0 ? `${clickCount} latido${clickCount !== 1 ? "s" : ""} de amor` : ""}
      </p>

      <style jsx>{`
        @keyframes sparkOut {
          0% {
            opacity: 1;
            transform: rotate(var(--angle, 0deg)) translateY(0);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--angle, 0deg)) translateY(-80px);
          }
        }
        @keyframes pulseRing {
          0% {
            opacity: 0.6;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
