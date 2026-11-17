import { createContext, useContext, useState } from 'react'

const USERS_KEY = 'liorwyn-users'
const SESSION_KEY = 'liorwyn-session'

const AuthContext = createContext(null)

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const session = readJson(SESSION_KEY, null)
    if (!session?.email) return null
    return {
      name: session.name,
      email: session.email,
      enrollments: Array.isArray(session.enrollments) ? session.enrollments : [],
    }
  })

  const signup = ({ name, email, password }) => {
    const users = readJson(USERS_KEY, [])
    const exists = users.some((entry) => entry.email.toLowerCase() === email.toLowerCase())
    if (exists) {
      return { ok: false, message: 'An account with this email already exists. Try signing in.' }
    }

    const record = { name: name.trim(), email: email.trim(), password, enrollments: [] }
    writeJson(USERS_KEY, [...users, record])
    const session = { name: record.name, email: record.email, enrollments: [] }
    writeJson(SESSION_KEY, session)
    setUser(session)
    return { ok: true }
  }

  const login = ({ email, password }) => {
    const users = readJson(USERS_KEY, [])
    const found = users.find((entry) => entry.email.toLowerCase() === email.trim().toLowerCase())
    if (!found || found.password !== password) {
      return { ok: false, message: 'That email and password do not match our records.' }
    }

    const session = {
      name: found.name,
      email: found.email,
      enrollments: Array.isArray(found.enrollments) ? found.enrollments : [],
    }
    writeJson(SESSION_KEY, session)
    setUser(session)
    return { ok: true }
  }

  const logout = () => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  const enroll = (courseId) => {
    if (!user || user.enrollments.includes(courseId)) return

    const enrollments = [...user.enrollments, courseId]
    const session = { name: user.name, email: user.email, enrollments }
    writeJson(SESSION_KEY, session)

    const users = readJson(USERS_KEY, []).map((entry) =>
      entry.email.toLowerCase() === user.email.toLowerCase() ? { ...entry, enrollments } : entry,
    )
    writeJson(USERS_KEY, users)
    setUser(session)
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, enroll }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
