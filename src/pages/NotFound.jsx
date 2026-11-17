import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <div className="page">
      <Container className="py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">404</p>
        <h1 className="mt-3 font-display text-5xl text-ink">That page is not on the map.</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          The address may have changed. The catalog and the studio are both still open.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            Back home
          </Link>
          <Link to="/courses" className="btn btn-outline">
            Browse courses
          </Link>
        </div>
      </Container>
    </div>
  )
}
