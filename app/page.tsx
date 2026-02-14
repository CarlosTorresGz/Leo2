import { FloatingHearts } from "@/components/floating-hearts"
import { LoveLetter } from "@/components/love-letter"
import { PulseHeart } from "@/components/pulse-heart"
import { RevealMessage } from "@/components/reveal-message"
import { AbstractDivider } from "@/components/abstract-divider"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingHearts />

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="mb-8 flex justify-center" aria-hidden="true">
            <svg
              className="h-8 w-8 text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ animation: "gentlePulse 2s ease-in-out infinite" }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h1 className="font-serif text-5xl font-light tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
            Para mi niña
          </h1>
          <p className="mt-6 font-sans text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Una cartita escrita con mucho cariño
          </p>
          <div className="mx-auto mt-12 h-px w-24 bg-border" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="font-sans text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Desliza
          </span>
          <svg
            className="h-4 w-4 text-muted-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ animation: "bounceDown 2s ease-in-out infinite" }}
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      <AbstractDivider />

      {/* Poetic carousel */}
      <LoveLetter />

      <AbstractDivider />

      {/* Interactive heart */}
      <PulseHeart />

      <AbstractDivider />

      {/* Hidden message reveal */}
      <RevealMessage />

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center px-6 py-20">
        <svg
          className="h-5 w-5 text-primary"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <p className="mt-4 mb-6 font-sans text-xs tracking-[0.2em] text-muted-foreground">
          {"Hecho con amor y sueñito\u2022 14 feb 2026"}
        </p>
      </footer>

    </main>
  )
}
