'use client'

import { useParams, useRouter } from 'next/navigation'

import Header from '@/shared/layouts/Header'
import Content from '@/shared/layouts/Content'
import BottomNavigationBar from '@/shared/layouts/BottomNavigationBar'
import PerfumeActionBar from './_widgets/PerfumeActionBar'
import { Typography } from '@/shared/components/ui/typography'

import { ArrowLeft, Home, ShoppingBag, User } from 'lucide-react'

export default function PerfumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams<{ id?: string }>()
  const router = useRouter()

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
      {isDetailPageIn ? <PerfumeActionBar /> : <BottomNavigationBar />}
    </>
  )
}
