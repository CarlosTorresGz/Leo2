"use client"

import { useState } from "react"

export function RevealMessage() {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-20">
      {!isRevealed ? (
        <div className="text-center">
          <p className="mb-8 font-serif text-lg text-muted-foreground md:text-xl">
            Tengo algo que decirte...
          </p>
          <button
            onClick={() => setIsRevealed(true)}
            className="group relative overflow-hidden rounded-full border border-primary px-8 py-3 font-sans text-sm tracking-[0.2em] text-primary uppercase transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
          >
            <span className="relative z-10">Descubrir</span>
          </button>
        </div>
      ) : (
        <div
          className="max-w-lg text-center"
          style={{
            animation: "revealFade 1.5s ease-out",
          }}
        >
          <svg
            className="mx-auto mb-6 h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hsl(350, 60%, 52%)"
            strokeWidth="1.5"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl text-balance">
            Eres una preciosa coqueta, me ganas solo con la mirada. Ahí estaré para ti mi reina.
          </p>
          <p className="mt-6 font-serif text-lg text-primary italic">
            Si te caes te levanto, y si no, me acuesto contigo.
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-border" />
          <p className="mt-8 font-sans text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Con todo mi amor
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes revealFade {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  )
}
