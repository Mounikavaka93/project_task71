export default function Container({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`mx-auto w-full max-w-6xl px-5 ${className}`}>{children}</Tag>
}
