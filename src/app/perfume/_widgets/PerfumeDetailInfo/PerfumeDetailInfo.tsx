import React from 'react'
import Image from 'next/image'

import { AspectRatio } from '@/shared/components/ui/aspect-ratio'
import { Typography } from '@/shared/components/ui/typography'
import { Badge } from '@/shared/components/ui/badge'

import DiptyqueEauRose from '@/app/perfume/_assets/diptyque-eau-rose.webp'
import { CircleDollarSign, Layers3, Pencil } from 'lucide-react'

function PerfumeDetailInfo(): JSX.Element {
  return (
    <section className="flex flex-col gap-6 bg-white">
      <AspectRatio ratio={16 / 9} className=" bg-gray-50">
        <Image
          src={DiptyqueEauRose}
          alt={`${DiptyqueEauRose}-image`}
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes="100vw"
          priority
        />
      </AspectRatio>
      <div className="flex flex-col gap-2 pl-2">
        <Typography variant="smallText">딥디크</Typography>
        <Typography variant="h3">플레르 드 뽀 오 드</Typography>
      </div>
      <div>
        <div className="flex flex-col gap-6 pb-2 pl-2">
          <div className="flex gap-2">
            <Pencil className="p-1" />
            <div className="flex flex-col gap-2">
              <Typography variant="h6">한줄평</Typography>
              <Typography variant="smallText">
                깨끗한 꽃비누향인데 엠버향이 지배적인 느낌
              </Typography>
            </div>
          </div>
          <div className="flex gap-2">
            <CircleDollarSign className="p-1" />
            <div className="flex flex-col gap-2">
              <Typography variant="h6">가격</Typography>
              <div className="flex items-center gap-1">
                <Typography variant="inlineCode">120,000원</Typography>
                <Typography variant="smallText">(100ml)</Typography>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <Layers3 className="p-1" />
              <div className="flex flex-col gap-2">
                <Typography variant="h6">향조</Typography>
                <div className="flex gap-1">
                  <Badge variant="outline">레몬</Badge>
                  <Badge variant="outline">핑크페퍼</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerfumeDetailInfo
