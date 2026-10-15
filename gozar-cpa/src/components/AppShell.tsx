import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Logo } from '@/components/Logo'

const navLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/operacoes', label: 'Operações' },
  { href: '/lucro', label: 'Lucro' },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="font-extrabold tracking-tight">
              <span className="gradient-text">GOZAR</span>
              <span className="text-foreground"> CPA</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-muted-foreground sm:inline">
              {user?.email}
            </span>
            <button
              onClick={() => signOut()}
              className="btn-ghost text-sm"
            >
              Sair
            </button>
            <button
              className="md:hidden p-2 text-muted-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="border-t border-border bg-background/95 px-4 py-3 md:hidden animate-slide-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-6">
        {children}
      </main>

      <footer className="border-t border-border py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} GOZAR CPA. Todos os direitos reservados.</span>
          <span>Créditos: @01_bugadinho66</span>
        </div>
      </footer>
    </div>
  )
}