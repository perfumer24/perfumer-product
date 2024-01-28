import { Typography } from '@/shared/components/ui/typography'
import { Badge } from '@/shared/components/ui/badge'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/shared/components/ui/avatar'
import { Info } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/components/ui/popover'

function PerfumeReviewList(): JSX.Element {
  return (
    <section className="flex flex-col gap-2 bg-white p-3">
      <div className="flex items-center gap-2">
        <Typography variant="h4">시향 후기</Typography>
        <Popover>
          <PopoverTrigger>
            <Info size={18} />
          </PopoverTrigger>
          <PopoverContent>
            <Typography variant="mutedText">
              본인과 다른 사용자들을 위해 <br />
              향수 시향 후 바로 느낌을 남겨주세요.
            </Typography>
          </PopoverContent>
        </Popover>
      </div>
      <ul className="flex flex-col gap-2 divide-y">
        <li className="flex flex-col gap-3 px-2 py-6">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Typography variant="h6">맷</Typography>
          </div>
          <div className="flex gap-1">
            <Badge variant="outline">#남성</Badge>
            <Badge variant="outline">#출근할 때</Badge>
          </div>
          <Typography variant="blockquote">알랑알랑한 꽃 같은 냄새</Typography>
        </li>
        <li className="flex flex-col gap-3 px-2 py-6">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Typography variant="h6">레오</Typography>
          </div>
          <div className="flex gap-1">
            <Badge variant="outline">#여성</Badge>
            <Badge variant="outline">#카페에서</Badge>
          </div>
          <Typography variant="blockquote">
            흐린 가을 날의 숲속에서 하얀 피부의 남성이 사뿐사뿐 걸어다닐것 같은
            냄새
          </Typography>
        </li>
      </ul>
    </section>
  )
}

export default PerfumeReviewList
