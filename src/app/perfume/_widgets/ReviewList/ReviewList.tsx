import { Typography } from '@/shared/components/ui/typography'
import { Badge } from '@/shared/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/shared/components/ui/avatar'

function ReviewList(): JSX.Element {
  return (
    <section className="flex flex-col gap-2 bg-white p-3">
      <Typography variant="h4">한줄평</Typography>
      <ul className="flex flex-col gap-2 divide-y p-2">
        <li>
          <Card className="border-none shadow-none">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Typography variant="h6">레오</Typography>
              </div>
              <div className="flex gap-1 pt-1">
                <Badge variant="outline">#남성</Badge>
                <Badge variant="outline">#우디</Badge>
                <Badge variant="outline">#출근</Badge>
                <Badge variant="outline">#가을</Badge>
                <Badge variant="outline">#흐림</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Typography variant="blockquote">
                흐린 가을 날의 숲속에서 하얀 피부의 남성이 사뿐사뿐 걸어다닐것
                같은 냄새
              </Typography>
            </CardContent>
          </Card>
        </li>
        <li>
          <Card className="border-none shadow-none">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Typography variant="h6">레오</Typography>
              </div>
              <div className="flex gap-1 pt-1">
                <Badge variant="outline">#남성</Badge>
                <Badge variant="outline">#우디</Badge>
                <Badge variant="outline">#출근</Badge>
                <Badge variant="outline">#가을</Badge>
                <Badge variant="outline">#흐림</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Typography variant="blockquote">
                흐린 가을 날의 숲속에서 하얀 피부의 남성이 사뿐사뿐 걸어다닐것
                같은 냄새
              </Typography>
            </CardContent>
          </Card>
        </li>
      </ul>
    </section>
  )
}

export default ReviewList
