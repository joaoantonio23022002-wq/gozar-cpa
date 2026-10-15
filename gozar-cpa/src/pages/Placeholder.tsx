import React from 'react'
import { Logo } from '@/components/Logo'

interface PlaceholderProps {
  title: string
  subtitle: string
  icon?: React.ReactNode
}

const defaultIcon = (
  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export function Placeholder({ title, subtitle, icon = defaultIcon }: PlaceholderProps) {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="gradient-text">{title}</span>
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </header>
      <div className="panel flex flex-col items-center justify-center gap-3 p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
          {icon}
        </div>
        <p className="text-lg font-semibold">Em construção</p>
        <p className="max-w-md text-sm text-muted-foreground">
          Este módulo será desenvolvido na próxima iteração. Me diga o que precisa aqui e eu construo.
        </p>
      </div>
    </div>
  )
}