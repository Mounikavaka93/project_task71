import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { firstName } from '../utils/format'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/contact', label: 'Contact' },
]

function linkClass(isActive) {
  return `text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine ${
    isActive ? 'text-pine' : 'text-ink-soft hover:text-ink'
  }`
}

export default function Navbar() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <div className="h-1 bg-gradient-to-r from-pine via-amber to-pine" />
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex items-center gap-2.5 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine">
          <Logo />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-tight text-ink">Liorwyn</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-mist">Hall</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => linkClass(isActive)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pine text-sm text-cream">
                  {user.name.slice(0, 1).toUpperCase()}
                </span>
                {firstName(user.name)}
              </span>
              <button type="button" className="btn btn-outline px-4 py-2" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline px-4 py-2">
                Log in
              </Link>
              <Link to="/signup" className="btn btn-primary px-4 py-2">
                Sign up
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-cream lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-3 py-3 text-base font-semibold ${isActive ? 'bg-paper text-pine' : 'text-ink'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
              {user ? (
                <>
                  <p className="px-3 text-sm text-ink-soft">Signed in as {user.name}</p>
                  <button type="button" className="btn btn-outline w-full" onClick={logout}>
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline w-full">
                    Log in
                  </Link>
                  <Link to="/signup" className="btn btn-primary w-full">
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
