'use client'

import React, { HTMLAttributes } from 'react'
import { usePathname } from 'next/navigation'

import { Home, ShoppingBag, User } from 'lucide-react'

interface NavigationBarProps extends HTMLAttributes<HTMLElement> {}

function NavigationBar({
  className,
  ...props
}: NavigationBarProps): JSX.Element {
  const pathname = usePathname()

  const links = [
    {
      pathname: '/perfume',
      icon: <Home />,
      text: '홈',
    },
    {
      pathname: '/compare',
      icon: <ShoppingBag />,
      text: '비교함',
    },
    {
      pathname: '/my',
      icon: <User />,
      text: '마이',
    },
  ]

  return (
    <div
      className={`fixed bottom-0 flex w-full max-w-screen-sm justify-around gap-1 border-t bg-white p-4 ${className}`}
      {...props}
    >
      {links.map((link, index) => {
        return (
          <button
            key={index}
            className={`${
              link.pathname === pathname ? 'text-black' : 'text-gray-400'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              {link.icon}
              <p>{link.text}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default NavigationBar
