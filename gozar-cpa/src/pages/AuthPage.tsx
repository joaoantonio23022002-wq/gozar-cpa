import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { Logo } from '@/components/Logo'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast'
import { z } from 'zod'

const authSchema = z.object({
  email: z.string().trim().email({ message: 'Email inválido' }).max(255),
  password: z.string().min(6, { message: 'Senha deve ter ao menos 6 caracteres' }).max(72),
})

export function AuthPage() {
  const navigate = useNavigate()
  const { user, loading } = useAuth()
  const toast = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!loading && user) {
      navigate('/', { replace: true })
    }
  }, [user, loading, navigate])

  async function handleSubmit(mode: 'login' | 'signup') {
    const result = authSchema.safeParse({ email, password })
    if (!result.success) {
      toast.error(result.error.errors[0].message)
      return
    }

    setSubmitting(true)
    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email: result.data.email,
          password: result.data.password,
          options: { emailRedirectTo: `${window.location.origin}/` },
        })
        if (error) throw error
        toast.success('Conta criada! Você já está logado.')
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: result.data.email,
          password: result.data.password,
        })
        if (error) throw error
        toast.success('Bem-vindo de volta!')
      }
      navigate('/', { replace: true })
    } catch (err: any) {
      const msg = err.message || ''
      if (msg.includes('Invalid login')) {
        toast.error('Email ou senha incorretos')
      } else if (msg.includes('already registered')) {
        toast.error('Este email já está registrado')
      } else {
        toast.error(msg || 'Erro ao autenticar')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(/auth-bg.png)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-background/40"
      />

      <div className="panel w-full max-w-md p-6 md:p-8">
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--glow-green)]">
            <Logo className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              <span className="gradient-text">GOZAR CPA</span>
            </h1>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Pro Finance
            </p>
          </div>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Entrar</TabsTrigger>
            <TabsTrigger value="signup">C_vel</TabsTrigger>
          </TabsList>

          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="voce@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
          </div>

          <TabsContent value="login" className="mt-4">
            <Button
              onClick={() => handleSubmit('login')}
              disabled={submitting}
              className="w-full bg-primary text-primary-foreground shadow-[var(--glow-green)] hover:bg-primary/90"
            >
              {submitting ? (
                <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <Logo className="mr-2 h-4 w-4" />
              )}
              Entrar
            </Button>
          </TabsContent>

          <TabsContent value="signup" className="mt-4">
            <Button
              onClick={() => handleSubmit('signup')}
              disabled={submitting}
              className="w-full bg-accent text-accent-foreground shadow-[var(--glow-cyan)] hover:bg-accent/90"
            >
              {submitting ? (
                <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <Logo className="mr-2 h-4 w-4" />
              )}
              Criar conta
            </Button>
          </TabsContent>
        </Tabs>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Suas operações ficam salvas com segurança na sua conta.
        </p>
      </div>
    </div>
  )
}