import { Button } from '@/shared/components/ui/button'
import { Typography } from '@/shared/components/ui/typography'
import React from 'react'
import PerfumeCardCarousel from './_widgets/PerfumeCardCarousel'
import Link from 'next/link'

function FinderPage(): JSX.Element {
  return (
    <div className="flex h-screen w-full flex-col justify-center gap-y-10">
      <div>
        <Typography variant="h3">나에게 맞는 향수 찾기</Typography>
        <Typography variant="mutedText" className="mt-4">
          나와 맞는 <br />
          향수를 찾아보세요.
        </Typography>
      </div>
      <PerfumeCardCarousel />
      <div className="flex flex-col gap-2">
        <Link href="/finder/preference-survey">
          <Button className="w-full">나에게 맞는 향수 찾기</Button>
        </Link>
        <Button variant="ghost">먼저 둘러볼게요.</Button>
      </div>
    </div>
  )
}

export default FinderPage
