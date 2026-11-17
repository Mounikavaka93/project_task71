import { useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AppRoutes from './AppRoutes'

export default function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col text-ink">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="content" className="flex-1">
        <AppRoutes key={location.pathname} />
      </main>
      <Footer />
    </div>
  )
}
