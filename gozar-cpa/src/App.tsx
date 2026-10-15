import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { ToastProvider } from '@/components/ui/toast'
import { Splash } from '@/components/Splash'
import { AppShell } from '@/components/AppShell'

const AuthPage = lazy(() => import('@/pages/AuthPage'))
const HomePage = lazy(() => import('@/pages/HomePage'))
const Placeholder = lazy(() => import('@/pages/Placeholder'))

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  return <>{children}</>
}

function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/auth" element={<Suspense fallback={<Splash />}><AuthPage /></Suspense>} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Splash>
                <AppShell>
                  <HomePage />
                </AppShell>
              </Splash>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AppShell>
                <Suspense fallback={<div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />}>
                  <Placeholder title="Dashboard" subtitle="Visão geral do desempenho" />
                </Suspense>
              </AppShell>
            </ProtectedRoute>
          }
        />

        <Route
          path="/operacoes"
          element={
            <ProtectedRoute>
              <AppShell>
                <Suspense fallback={<div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />}>
                  <Placeholder title="Operações" subtitle="Registro de entradas e saídas" />
                </Suspense>
              </AppShell>
            </ProtectedRoute>
          }
        />

        <Route
          path="/lucro"
          element={
            <ProtectedRoute>
              <AppShell>
                <Suspense fallback={<div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />}>
                  <Placeholder title="Lucro" subtitle="Cálculo de lucro líquido" />
                </Suspense>
              </AppShell>
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center bg-background">
              <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">404</h1>
                <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
                <a href="/" className="text-primary underline hover:text-primary/90">
                  Return to Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </ToastProvider>
  )
}

export default App