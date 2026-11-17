import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} · Liorwyn Hall`
      : 'Liorwyn Hall — Careful study, in good company'
  }, [title])
}
