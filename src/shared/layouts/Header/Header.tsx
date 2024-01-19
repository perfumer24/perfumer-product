import React, { HTMLAttributes } from 'react'
import { Typography } from '@/shared/components/ui/typography'

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

function Header({ className, ...props }: HeaderProps): JSX.Element {
  return (
    <header
      className={`fixed top-0 z-10 w-full max-w-screen-sm border-b bg-white p-4 ${className}`}
      {...props}
    >
      <Typography variant="h3">로고 이름</Typography>
    </header>
  )
}

export default Header
