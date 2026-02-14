export function AbstractDivider() {
  return (
    <div className="flex items-center justify-center py-8" aria-hidden="true">
      <svg
        className="h-12 w-64 text-border"
        viewBox="0 0 256 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M0 24 C40 24, 50 8, 80 8 S120 24, 128 24 S136 8, 176 8 S216 24, 256 24" />
        <circle cx="128" cy="24" r="2" fill="hsl(350, 60%, 52%)" stroke="none" />
      </svg>
    </div>
  )
}
