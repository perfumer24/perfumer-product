'use client'

import { useRouter } from 'next/navigation'

import Header from '@/shared/layouts/Header'
import Content from '@/shared/layouts/Content'
import BottomNavigationBar from '@/shared/layouts/BottomNavigationBar'
import { Typography } from '@/shared/components/ui/typography'

import { ArrowLeft, HelpCircle } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/components/ui/popover'

export default function PerfumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <>
      <Header className="flex justify-between">
        <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />
        <Typography variant="h5">비교함</Typography>
        <Popover>
          <PopoverTrigger>
            <HelpCircle className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent>
            <Typography variant="smallText">
              비교함에 있는 향수 중 가장 내 상황과 맞는 향수을 골라서 시향하러
              가보세요.
            </Typography>
          </PopoverContent>
        </Popover>
      </Header>
      <Content className="h-screen">{children}</Content>
      <BottomNavigationBar />
    </>
  )
}
