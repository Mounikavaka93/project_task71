import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import CourseDetails from './pages/CourseDetails'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'

export default function AppRoutes() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
