import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { categories, contact } from '../data/site'
import Logo from './Logo'

function SocialIcon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    className: 'h-4 w-4',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'linkedin') {
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }

  if (name === 'instagram') {
    return (
      <svg {...common}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <path d="M17.5 6.5h.01" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

const social = [
  { label: 'Liorwyn Hall on LinkedIn', href: 'https://www.linkedin.com', name: 'linkedin' },
  { label: 'Liorwyn Hall on Instagram', href: 'https://www.instagram.com', name: 'instagram' },
  { label: 'Liorwyn Hall on YouTube', href: 'https://www.youtube.com', name: 'youtube' },
]

export default function Footer() {
  const { user } = useAuth()

  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-2xl">Liorwyn Hall</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
            A Cambridge hall for design, software, data, writing, and science. Small cohorts, working faculty.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="text-cream/80 transition hover:text-cream" to="/">Home</Link></li>
            <li><Link className="text-cream/80 transition hover:text-cream" to="/about">About</Link></li>
            <li><Link className="text-cream/80 transition hover:text-cream" to="/courses">Courses</Link></li>
            <li><Link className="text-cream/80 transition hover:text-cream" to="/contact">Contact</Link></li>
            {user ? null : (
              <li><Link className="text-cream/80 transition hover:text-cream" to="/login">Log in</Link></li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Courses</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  className="text-cream/80 transition hover:text-cream"
                  to={`/courses?category=${encodeURIComponent(category.name)}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Visit</h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
              <span>{contact.address.join(', ')}</span>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 transition hover:text-cream" href={`tel:${contact.phoneHref}`}>
                <Phone className="h-4 w-4 text-amber" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 transition hover:text-cream" href={`mailto:${contact.email}`}>
                <Mail className="h-4 w-4 text-amber" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:-translate-y-0.5 hover:border-amber hover:text-amber"
              >
                <SocialIcon name={item.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Liorwyn Hall. A study in careful learning.</p>
          <p>Cambridge, Massachusetts</p>
        </div>
      </div>
    </footer>
  )
}
