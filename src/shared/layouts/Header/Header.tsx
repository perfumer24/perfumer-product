import { cn } from '@/shared/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

function Header({ className, children, ...props }: HeaderProps): JSX.Element {
  return (
    <header
      className={cn(
        'fixed top-0 z-10 w-full max-w-screen-sm border-b bg-white p-4',
        className
      )}
      {...props}
    >
      {children}
    </header>
  )
}

export default Header
