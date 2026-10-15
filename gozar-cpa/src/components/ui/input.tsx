import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-input bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all ${className || ''}`}
      {...props}
    />
  )
}