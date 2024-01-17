'use client'

import React from 'react'
import { Badge } from '@/shared/components/ui/badge'
import Image from 'next/image'
import { AspectRatio } from '@/shared/components/ui/aspect-ratio'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards, Navigation } from 'swiper/modules'

import fleurDeFeur from '@/app/finder/_assets/fleur-de-feur.png'
import jazzClub from '@/app/finder/_assets/jazz-club.png'
import baccaratRouge540 from '@/app/finder/_assets/baccarat-rouge-540.png'
import mallePortraitOfALady from '@/app/finder/_assets/malle-portrait-of-a-lady.png'

import 'swiper/css'
import 'swiper/css/effect-cards'

function CardCarousel(): JSX.Element {
  const contents = [
    {
      category: '안기고 싶은 향',
      perfume: fleurDeFeur.src,
    },
    {
      category: '섹시 100% 장착한 향',
      perfume: jazzClub.src,
    },
    {
      category: '달달 & 달콤한 향',
      perfume: baccaratRouge540.src,
    },
    {
      category: '쳐다보게 되는 향',
      perfume: mallePortraitOfALady.src,
    },
  ]

  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCards, Autoplay, Navigation]}
      className="h-2/5 w-4/5 md:w-1/2"
    >
      {contents.map((item, index) => {
        return (
          <SwiperSlide key={index} className="rounded-2xl bg-white shadow-xl">
            <div className="relative flex h-full flex-col items-center justify-center blur-sm">
              <Badge variant="secondary" className="absolute top-6">
                {item.category}
              </Badge>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={item.perfume}
                  alt={`${item.category} 향수 이미지`}
                  fill
                  className="rounded-md object-cover"
                  priority
                />
              </AspectRatio>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default CardCarousel
