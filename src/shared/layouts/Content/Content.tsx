import { cn } from '@/shared/lib/utils'
import React, { HTMLAttributes } from 'react'

interface ContentProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

function Content({ children, className, ...props }: ContentProps): JSX.Element {
  return (
    <main className={cn('h-full w-full bg-white', className)} {...props}>
      {children}
    </main>
  )
}

export default Content
