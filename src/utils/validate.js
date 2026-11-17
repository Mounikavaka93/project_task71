export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
}

export function isPhone(value) {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 15
}

export function passwordError(value) {
  if (!value) return 'Enter a password.'
  if (value.length < 8) return 'Use at least 8 characters.'
  if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) {
    return 'Include at least one letter and one number.'
  }
  return ''
}

export function focusFirstError(errors) {
  const key = Object.keys(errors).find((name) => errors[name])
  if (!key) return
  const node = document.getElementById(key)
  node?.focus()
}
