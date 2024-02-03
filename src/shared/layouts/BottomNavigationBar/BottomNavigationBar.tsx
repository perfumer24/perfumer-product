import { cn } from '@/shared/lib/utils'
import { HTMLAttributes } from 'react'
import { Home, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useParams, useRouter } from 'next/navigation'

interface BottomNavigationBarProps extends HTMLAttributes<HTMLElement> {}

function BottomNavigationBar({
  className,
  children,
  ...props
}: BottomNavigationBarProps): JSX.Element {
  const pathname = usePathname()

  const links = [
    {
      pathname: '/perfume',
      icon: <Home />,
      text: '홈',
    },
    {
      pathname: '/compared',
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
      className={cn(
        'fixed bottom-0 z-20 flex w-full max-w-screen-sm justify-around gap-1 border-t bg-white px-4 py-2',
        className
      )}
      {...props}
    >
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.pathname}>
            <button
              className={`${
                link.pathname === pathname ? 'text-black' : 'text-gray-400'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                {link.icon}
                <p>{link.text}</p>
              </div>
            </button>
          </Link>
        )
      })}
    </div>
  )
}

export default BottomNavigationBar
