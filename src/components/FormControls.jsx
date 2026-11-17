import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const fieldClass = (error) =>
  `w-full rounded-2xl border bg-white px-4 py-3 text-ink outline-none transition placeholder:text-mist focus:ring-4 ${
    error
      ? 'border-clay focus:border-clay focus:ring-clay/20'
      : 'border-line focus:border-pine focus:ring-pine/15'
  }`

export function TextField({ id, label, type = 'text', value, onChange, error, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClass(error)}
        {...rest}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-clay">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function TextArea({ id, label, value, onChange, error, hint, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={`${fieldClass(error)} min-h-36 resize-y`}
        {...rest}
      />
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-mist">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-clay">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function PasswordField({ id, label, value, onChange, error, autoComplete }) {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${fieldClass(error)} pr-12`}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-mist transition hover:bg-paper hover:text-ink"
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
        >
          {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-clay">
          {error}
        </p>
      ) : null}
    </div>
  )
}
