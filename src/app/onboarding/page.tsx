import React from 'react'
import { Button } from '@/shared/components/ui/button'

import IntroCarousel from './_widgets/IntroCarousel'

function OnboardingPage(): JSX.Element {
  return (
    <div className="flex h-screen w-full flex-col justify-center gap-y-6">
      <IntroCarousel />
      <div className="flex flex-col gap-2">
        <Button>시작하기</Button>
        <Button variant="ghost">먼저 둘러볼게요.</Button>
      </div>
    </div>
  )
}

export default OnboardingPage
