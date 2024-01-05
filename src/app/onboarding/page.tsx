import React from 'react'
import { Button } from '@/shared/components/ui/button'

import IntroCarousel from './_widgets/IntroCarousel'
import Link from 'next/link'

function OnboardingPage(): JSX.Element {
  return (
    <div className="flex h-screen w-full flex-col justify-center gap-y-6">
      <IntroCarousel />
      <Link href="/preference-survey">
        <Button className="w-full">시작하기</Button>
      </Link>
    </div>
  )
}

export default OnboardingPage
