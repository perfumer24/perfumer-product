import React, { HTMLAttributes } from 'react'

interface ContentProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

function Content({ children, className, ...props }: ContentProps): JSX.Element {
  return (
    <main className={`h-full w-full bg-white px-4 ${className}`} {...props}>
      {children}
    </main>
  )
}

export default Content
