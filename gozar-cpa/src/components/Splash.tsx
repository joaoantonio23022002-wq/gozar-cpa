import React, { useEffect, useState } from 'react'
import { Logo } from '@/components/Logo'

export function Splash({ credits = '@01_bugadinho66' }: { credits?: string }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 5000)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background animate-in fade-in">
      <div className="absolute inset-0">
        <img
          src="/auth-bg.png"
          alt="Bugado CPA"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="pointer-events-none absolute inset-0 bg-background/40" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex flex-col items-center gap-2">
        <div className="h-1 w-48 overflow-hidden rounded-full bg-background/40">
          <div className="h-full w-full origin-left animate-[loadbar_5s_linear_forwards] bg-primary shadow-[var(--glow-green)]" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">Carregando...</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/60">
          Créditos: <span className="text-primary">{credits}</span>
        </p>
      </div>
      <style>{`
        @keyframes loadbar { from { transform: scaleX(0) } to { transform: scaleX(1) } }
      `}</style>
    </div>
  )
}