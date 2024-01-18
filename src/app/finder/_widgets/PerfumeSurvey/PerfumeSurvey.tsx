'use client'

import React, { useState } from 'react'

import { Typography } from '@/shared/components/ui/typography'
import { Progress } from '@/shared/components/ui/progress'
import { Button } from '@/shared/components/ui/button'
import { AspectRatio } from '@/shared/components/ui/aspect-ratio'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

import fleurDeFeur from '@/app/finder/_assets/fleur-de-feur.png'
import { SURVEY_CONTENTS } from '@/app/finder/_constants'

function PerfumeSurvey(): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = SURVEY_CONTENTS.length
  const progress = (currentStep / totalSteps) * 100
  const title = SURVEY_CONTENTS[currentStep]?.title
  const options = SURVEY_CONTENTS[currentStep]?.options

  const handleNextOption = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevOption = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleRestart = () => {
    setCurrentStep(0)
  }

  return (
    <div className="flex h-screen w-full flex-col gap-10 pt-16">
      {currentStep !== SURVEY_CONTENTS.length ? (
        <>
          <div>
            <Typography
              variant="mutedText"
              className="text-right"
            >{`${currentStep} / ${totalSteps}`}</Typography>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                disabled={currentStep === 0}
                onClick={handlePrevOption}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Progress value={progress} />
            </div>
          </div>
          <div>
            <Typography variant="h3" className="mb-4">
              {title}
            </Typography>
            <div className="flex flex-col gap-2">
              {options?.map((option, index) => {
                return (
                  <Button
                    key={index}
                    size="lg"
                    variant="outline"
                    onClick={handleNextOption}
                  >
                    {option}
                  </Button>
                )
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Typography variant="h2">딥디크 오르페옹을 뿌려보세요.</Typography>
            <Typography variant="mutedText">
              다른 향수와 비교해서
              <br /> 합리적으로 고를 수 있도록 도와드릴게요.
            </Typography>
          </div>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={fleurDeFeur.src}
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full object-contain"
            />
          </AspectRatio>
          <div className="flex flex-col gap-2">
            <Link href="/perfume">
              <Button size="lg" className="w-full">
                다른 향수와 비교하기
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="lg"
              className="w-full"
              onClick={handleRestart}
            >
              다시 찾기
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PerfumeSurvey
