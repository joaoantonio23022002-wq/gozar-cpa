import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/Logo'

export function HomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Logo className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              <span className="gradient-text">GOZAR</span>
              <span className="text-foreground"> CPA</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">Pro Finance</p>
          </div>
        </div>
        <p className="max-w-2xl text-muted-foreground">
          Plataforma para gerenciar suas operações financeiras. Registre entradas e saídas,
          calcule lucro, organize métodos de pagamento e visualize seu fluxo de caixa.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/dashboard"
          className="panel flex flex-col gap-3 p-6 transition-all hover:border-primary/50 hover:shadow-[var(--glow-green)]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">Dashboard</h3>
            <p className="text-sm text-muted-foreground">Visão geral do desempenho</p>
          </div>
        </Link>

        <Link
          to="/operacoes"
          className="panel flex flex-col gap-3 p-6 transition-all hover:border-primary/50 hover:shadow-[var(--glow-green)]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">Operações</h3>
            <p className="text-sm text-muted-foreground">Registro de entradas e saídas</p>
          </div>
        </Link>

        <Link
          to="/lucro"
          className="panel flex flex-col gap-3 p-6 transition-all hover:border-primary/50 hover:shadow-[var(--glow-green)]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">Lucro</h3>
            <p className="text-sm text-muted-foreground">Cálculo de lucro líquido</p>
          </div>
        </Link>
      </div>
    </div>
  )
}