export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#1c6b62" />
      <circle cx="20" cy="20" r="10" fill="none" stroke="#f4efe6" strokeWidth="1.7" />
      <path d="M20 8.5v23M11.5 20h17" stroke="#e0a84a" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2.3" fill="#f4efe6" />
    </svg>
  )
}
