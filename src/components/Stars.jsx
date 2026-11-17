import { Star } from 'lucide-react'

export default function Stars({ value, reviews }) {
  const filled = Math.round(value)

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-flex" aria-label={`${value.toFixed(1)} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${index < filled ? 'fill-amber text-amber' : 'fill-transparent text-sand'}`}
            aria-hidden="true"
          />
        ))}
      </span>
      <span className="text-sm font-medium text-ink-soft">
        {value.toFixed(1)}
        {typeof reviews === 'number' ? <span className="text-mist"> ({reviews})</span> : null}
      </span>
    </span>
  )
}
