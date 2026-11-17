export default function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-display text-3xl leading-tight text-ink md:text-4xl">{title}</h2>
      {text ? <p className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">{text}</p> : null}
    </div>
  )
}
