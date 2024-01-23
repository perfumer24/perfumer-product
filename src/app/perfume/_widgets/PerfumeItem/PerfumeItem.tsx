import Image from 'next/image'

import { Card, CardContent } from '@/shared/components/ui/card'
import { AspectRatio } from '@/shared/components/ui/aspect-ratio'
import { Typography } from '@/shared/components/ui/typography'

import DiptyqueEauRose from '@/app/perfume/_assets/diptyque-eau-rose.webp'
import Link from 'next/link'

function PerfumeItem(): JSX.Element {
  return (
    <li className="cursor-pointer ">
      <Link href="perfume/1">
        <Card className="border-none shadow-none">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={DiptyqueEauRose}
              alt={`${DiptyqueEauRose}-image`}
              fill
              style={{
                objectFit: 'cover',
              }}
              sizes="(max-width: 640px) 50vw, 33vw"
              priority
            />
          </AspectRatio>
          <CardContent className="flex flex-col items-center pt-1">
            <Typography as="p" variant="h6">
              오 로즈
            </Typography>
            <Typography as="p" variant="mutedText">
              오 드 뚜왈렛 50ml
            </Typography>
            <Typography variant="inlineCode" className="mt-1">
              120,000원
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </li>
  )
}

export default PerfumeItem
