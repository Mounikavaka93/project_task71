export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] text-ink md:text-6xl">{title}</h1>
        {text ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{text}</p> : null}
      </div>
    </section>
  )
}
