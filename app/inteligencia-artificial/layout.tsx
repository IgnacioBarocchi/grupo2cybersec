import type { Metadata } from 'next'
import './ia-scoped-vars.css'

export const metadata: Metadata = {
  title: 'Inteligencia Artificial — Presentación',
  description: 'Fundamentos, evolución y realidad argentina',
}

export default function InteligenciaArtificialLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div data-ia-presentation className="dark min-h-dvh font-sans antialiased">
      {children}
    </div>
  )
}
