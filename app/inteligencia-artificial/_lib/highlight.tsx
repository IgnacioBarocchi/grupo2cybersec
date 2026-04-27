import type { ReactNode } from 'react'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function renderHighlightedBody(body: string, terms?: string[]): ReactNode {
  if (!terms?.length) return body

  const pattern = terms
    .filter(Boolean)
    .map((t) => escapeRegExp(t))
    .join('|')

  if (!pattern) return body

  const re = new RegExp(`(${pattern})`, 'gi')
  const parts = body.split(re)

  return parts.map((part, i) => {
    const hit = terms.some((t) => t.toLowerCase() === part.toLowerCase())
    if (hit) {
      return (
        <span key={`h-${i}`} className="ia-highlight">
          {part}
        </span>
      )
    }
    return part
  })
}
