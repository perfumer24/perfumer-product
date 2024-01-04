'use client'

import React from 'react'
import Image from 'next/image'
import { Typography } from '@/shared/components/ui/typography'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import perfumeBuyRunningImg from '@/app/onboarding/_assets/perfume-buy-running.png'
import perfumeChooseImg from '@/app/onboarding/_assets/perfume-choose.png'
import perfumeResearchImg from '@/app/onboarding/_assets/perfume-research.png'
import perfumeSearchImg from '@/app/onboarding/_assets/perfume-search.png'

import 'swiper/css'
import 'swiper/css/pagination'

function IntroCarousel(): JSX.Element {
  const contents = [
    {
      title: '향수 찾기 어려웠지?',
      illustration: perfumeSearchImg.src,
    },
    {
      title: '나는 어떤 향수가 어울릴까?',
      illustration: perfumeChooseImg.src,
    },
    {
      title: '향수도 비교가 가능해?',
      illustration: perfumeResearchImg.src,
    },
    {
      title: '향수 고르러 가자!',
      illustration: perfumeBuyRunningImg.src,
    },
  ]
  const lastIndex = contents.length - 1

  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        slidesPerView={1}
      >
        {contents.map((content, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center gap-8">
                <Typography variant="h2">{content.title}</Typography>
                <Image
                  src={content.illustration}
                  alt={`purfume-illustration-${index + 1}`}
                  width={index !== lastIndex ? 300 : 250}
                  height={index !== lastIndex ? 300 : 250}
                  loading="lazy"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default IntroCarousel
