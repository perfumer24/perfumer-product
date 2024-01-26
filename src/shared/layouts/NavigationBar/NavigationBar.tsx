import { HTMLAttributes, ReactNode } from 'react'

interface NavigationBarProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

function NavigationBar({
  className,
  children,
  ...props
}: NavigationBarProps): JSX.Element {
  return (
    <div
      className={`fixed bottom-0 z-20 flex w-full max-w-screen-sm justify-around gap-1 border-t bg-white px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default NavigationBar
