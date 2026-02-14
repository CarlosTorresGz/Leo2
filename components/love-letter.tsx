"use client"

import { useState } from "react"

const poems = [
  {
    title: "I",
    text: "En este día quiero recordarte lo mucho que significas para mí.",
  },
  {
    title: "II",
    text: "Sin ti no sería quien soy ahora, me has enseñado a vivir y a mejorar constantemente.",
  },
  {
    title: "III",
    text: "Eres la niña más linda que hay, la luz de mi mundo lo sé. Y seguiré obsesionado con tu imagen más que antes.",
  },
  {
    title: "IV",
    text: "Ahora que nos permitió estar juntos le pido a Dios que nos deje vivir para siempre así.",
  },
  {
    title: "V",
    text: "Pero sabes, te extraño un huevo cuando no estás, ya no estés tan lejos porfis...",
  },
  {
    title: "VI",
    text: "Gracias por tanto mi amor, de verdad. Ando feliz pues ya pronto llego allá.",
  }
]

export function LoveLetter() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % poems.length)
      setIsTransitioning(false)
    }, 400)
  }

  const goToPrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + poems.length) % poems.length)
      setIsTransitioning(false)
    }, 400)
  }

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-20">
      <div
        className="relative max-w-xl text-center"
        style={{
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? "translateY(12px)" : "translateY(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <span className="mb-4 block font-serif text-sm tracking-[0.3em] text-muted-foreground uppercase">
          {poems[currentIndex].title}
        </span>
        <p className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl lg:text-4xl text-balance">
          {`${poems[currentIndex].text}`}
        </p>
      </div>

      <div className="mt-12 flex items-center gap-6">
        <button
          onClick={goToPrev}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-primary hover:bg-primary"
          aria-label="Anterior"
        >
          <svg
            className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex gap-2">
          {poems.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (isTransitioning || i === currentIndex) return
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(i)
                  setIsTransitioning(false)
                }, 400)
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Ir a verso ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-primary hover:bg-primary"
          aria-label="Siguiente"
        >
          <svg
            className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
