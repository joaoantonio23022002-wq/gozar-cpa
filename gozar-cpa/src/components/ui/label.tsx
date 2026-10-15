import React from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={`mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground ${className || ''}`}
      {...props}
    />
  )
}