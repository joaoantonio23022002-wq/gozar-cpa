import React from 'react'

export function Logo({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(142 71% 45%)" />
          <stop offset="1" stopColor="hsl(190 84% 43%)" />
        </linearGradient>
      </defs>
      <g stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M8 12h16" />
        <path d="M8 16h12" />
        <path d="M8 20h8" />
      </g>
    </svg>
  )
}