import { Link } from 'react-router-dom'
import Container from './Container'

export default function AuthShell({ title, lede, image, imageAlt, quote, quoteBy, children, footer }) {
  return (
    <div className="page">
      <Container className="grid items-stretch gap-8 py-10 lg:grid-cols-2 lg:py-16">
        <aside className="relative hidden min-h-[34rem] overflow-hidden rounded-[2rem] bg-ink text-cream lg:block">
          <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
          <div className="relative flex h-full flex-col justify-between p-8">
            <Link to="/" className="font-display text-2xl">
              Liorwyn Hall
            </Link>
            <figure>
              <blockquote className="font-display text-3xl leading-snug">“{quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-cream/75">{quoteBy}</figcaption>
            </figure>
          </div>
        </aside>
        <div className="rounded-[2rem] border border-line bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine lg:hidden">Liorwyn Hall</p>
          <h1 className="mt-2 font-display text-4xl text-ink">{title}</h1>
          <p className="mt-3 text-ink-soft">{lede}</p>
          <div className="mt-8">{children}</div>
          <div className="mt-6 text-sm text-ink-soft">{footer}</div>
          <p className="mt-6 text-xs leading-relaxed text-mist">
            Demo accounts stay in this browser only. Passwords are not sent to a server.
          </p>
        </div>
      </Container>
    </div>
  )
}
