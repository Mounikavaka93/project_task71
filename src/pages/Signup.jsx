import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import AuthShell from '../components/AuthShell'
import { PasswordField, TextField } from '../components/FormControls'
import { useAuth } from '../context/AuthContext'
import { usePageTitle } from '../hooks/usePageTitle'
import { focusFirstError, isEmail, passwordError } from '../utils/validate'

const empty = { name: '', email: '', password: '', confirm: '', agree: false }

export default function Signup() {
  usePageTitle('Sign up')
  const { user, signup } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')

  if (user) {
    return <Navigate to={location.state?.from || '/'} replace />
  }

  const onChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setFormError('')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (values.name.trim().length < 2) nextErrors.name = 'Enter your name.'
    if (!isEmail(values.email)) nextErrors.email = 'Enter a valid email address.'
    const passwordIssue = passwordError(values.password)
    if (passwordIssue) nextErrors.password = passwordIssue
    if (!values.confirm) nextErrors.confirm = 'Confirm your password.'
    else if (values.confirm !== values.password) nextErrors.confirm = 'Passwords do not match.'
    if (!values.agree) nextErrors.agree = 'Please agree to the student code before creating an account.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      focusFirstError(nextErrors)
      return
    }

    const result = signup({ name: values.name, email: values.email, password: values.password })
    if (!result.ok) {
      setFormError(result.message)
      return
    }
    navigate(location.state?.from || '/', { replace: true })
  }

  return (
    <AuthShell
      title="Create your seat"
      lede="Open an account to enroll. It lives in this browser, ready for the winter term."
      image="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80"
      imageAlt="A quiet library reading room with long wooden tables"
      quote="I wanted a syllabus, a room, and a date the work was due."
      quoteBy="Priya Nandakumar, Interface Systems"
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" state={location.state} className="font-semibold text-pine hover:text-pine-deep">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {formError ? (
          <p role="alert" className="rounded-2xl bg-clay/10 px-4 py-3 text-sm text-clay">
            {formError}
          </p>
        ) : null}
        <TextField id="name" label="Full name" value={values.name} onChange={onChange} error={errors.name} autoComplete="name" />
        <TextField id="email" label="Email" type="email" value={values.email} onChange={onChange} error={errors.email} autoComplete="email" />
        <PasswordField
          id="password"
          label="Password"
          value={values.password}
          onChange={onChange}
          error={errors.password}
          autoComplete="new-password"
        />
        <PasswordField
          id="confirm"
          label="Confirm password"
          value={values.confirm}
          onChange={onChange}
          error={errors.confirm}
          autoComplete="new-password"
        />
        <div>
          <label htmlFor="agree" className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={values.agree}
              onChange={onChange}
              aria-invalid={Boolean(errors.agree)}
              aria-describedby={errors.agree ? 'agree-error' : undefined}
              className="mt-1 h-4 w-4 accent-pine"
            />
            <span>I agree to Liorwyn Hall’s student code of conduct.</span>
          </label>
          {errors.agree ? (
            <p id="agree-error" role="alert" className="mt-1.5 text-sm text-clay">
              {errors.agree}
            </p>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Create account
        </button>
      </form>
    </AuthShell>
  )
}
