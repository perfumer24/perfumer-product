'use client'

import { usePathname, useParams, useRouter } from 'next/navigation'

import Header from '@/shared/layouts/Header'
import Content from '@/shared/layouts/Content'
import NavigationBar from '@/shared/layouts/NavigationBar'
import PerfumeActionBar from './_widgets/PerfumeActionBar'
import { Typography } from '@/shared/components/ui/typography'

import { ArrowLeft, Home, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'

export default function PerfumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const params = useParams<{ id?: string }>()
  const router = useRouter()

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

  const isDetailPageIn = Boolean(params?.id)

  return (
    <>
      <Header>
        {isDetailPageIn ? (
          <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />
        ) : (
          <Typography variant="h3">로고 이름</Typography>
        )}
      </Header>
      <Content className={`pb-20 pt-14 ${isDetailPageIn ? '' : 'px-2'}`}>
        {children}
      </Content>
      <>
        {isDetailPageIn ? (
          <NavigationBar className="border-none">
            <PerfumeActionBar />
          </NavigationBar>
        ) : (
          <NavigationBar>
            {links.map((link, index) => {
              return (
                <Link key={index} href={link.pathname}>
                  <button
                    className={`${
                      link.pathname === pathname
                        ? 'text-black'
                        : 'text-gray-400'
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
          </NavigationBar>
        )}
      </>
    </>
  )
}
