import { AspectRatio } from '@/shared/components/ui/aspect-ratio'
import Image from 'next/image'

import fleurDeFeur from '../../_assets/fleur-de-feur.png'
import { Typography } from '@/shared/components/ui/typography'

function PerfumeInfo(): JSX.Element {
  const data = [
    {
      image: fleurDeFeur,
      brand: '딥디크',
      name: '오로즈',
    },
    {
      image: fleurDeFeur,
      brand: '딥디크',
      name: '오로즈',
    },
    {
      image: fleurDeFeur,
      brand: '딥디크',
      name: '오로즈',
    },
  ]

  return (
    <section className="pt-[70px]">
      <ul className="flex justify-end">
        {data.map((item, index) => {
          return (
            <li key={index} className="flex basis-1/4 flex-col gap-1">
              <AspectRatio key={index} ratio={16 / 9}>
                <Image
                  src={item.image}
                  alt={`향수 이미지`}
                  fill
                  className="rounded-md object-cover"
                  priority
                />
              </AspectRatio>
              <Typography variant="mutedText" className="text-center text-xs">
                {item.brand}
              </Typography>
              <Typography variant="smallText" className="block text-center">
                {item.name}
              </Typography>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default PerfumeInfo
