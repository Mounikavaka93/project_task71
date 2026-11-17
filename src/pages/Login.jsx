import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import AuthShell from '../components/AuthShell'
import { PasswordField, TextField } from '../components/FormControls'
import { useAuth } from '../context/AuthContext'
import { usePageTitle } from '../hooks/usePageTitle'
import { focusFirstError, isEmail } from '../utils/validate'

export default function Login() {
  usePageTitle('Log in')
  const { user, login } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')

  if (user) {
    return <Navigate to={location.state?.from || '/'} replace />
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setFormError('')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!isEmail(values.email)) nextErrors.email = 'Enter the email on your account.'
    if (!values.password) nextErrors.password = 'Enter your password.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      focusFirstError(nextErrors)
      return
    }

    const result = login(values)
    if (!result.ok) {
      setFormError(result.message)
      return
    }
    navigate(location.state?.from || '/', { replace: true })
  }

  return (
    <AuthShell
      title="Welcome back"
      lede="Sign in to enroll and keep your courses on this device."
      image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Students walking together between classes"
      quote="The work got better when someone expected it every week."
      quoteBy="Owen Hart, Data Stories"
      footer={
        <>
          New to Liorwyn Hall?{' '}
          <Link to="/signup" state={location.state} className="font-semibold text-pine hover:text-pine-deep">
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {location.state?.notice ? (
          <p className="rounded-2xl bg-pine/10 px-4 py-3 text-sm text-pine-deep">{location.state.notice}</p>
        ) : null}
        {formError ? (
          <p role="alert" className="rounded-2xl bg-clay/10 px-4 py-3 text-sm text-clay">
            {formError}
          </p>
        ) : null}
        <TextField
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
          autoComplete="username"
        />
        <PasswordField
          id="password"
          label="Password"
          value={values.password}
          onChange={onChange}
          error={errors.password}
          autoComplete="current-password"
        />
        <button type="submit" className="btn btn-primary w-full">
          Log in
        </button>
      </form>
    </AuthShell>
  )
}
