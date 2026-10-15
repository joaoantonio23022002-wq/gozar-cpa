import React, { useState, useEffect, ReactNode } from 'react'

interface TabsContextValue {
  value: string
  onValueChange: (v: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (v: string) => void
  className?: string
  children: ReactNode
}

export function Tabs({ defaultValue = '', value, onValueChange, className, children }: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const current = value ?? internalValue

  return (
    <TabsContext.Provider value={{ value: current, onValueChange: onValueChange ?? setInternalValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className || ''}`}>
      {children}
    </div>
  )
}

export function TabsTrigger({ value, children, className }: { value: string; children: ReactNode; className?: string }) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('TabsTrigger must be used within Tabs')
  const active = ctx.value === value

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${active ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'} ${className || ''}`}
      data-state={active ? 'active' : 'inactive'}
      onClick={() => ctx.onValueChange(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children, className }: { value: string; children: ReactNode; className?: string }) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('TabsContent must be used within Tabs')
  if (ctx.value !== value) return null

  return <div className={className}>{children}</div>
}