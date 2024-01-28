import { Progress } from '@/shared/components/ui/progress'
import { Typography } from '@/shared/components/ui/typography'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/shared/components/ui/resizable'
import { Badge } from '@/shared/components/ui/badge'
import { Frown, Laugh } from 'lucide-react'

function PerfumeMatchMetric(): JSX.Element {
  return (
    <section className="flex flex-col gap-8 bg-white p-3">
      <Typography variant="h4">선호 비율</Typography>
      <div className="flex flex-col items-center gap-4">
        <Typography variant="lead">선호하는 향과 60% 일치해요.</Typography>
        <Progress value={60} className="w-10/12" />
      </div>
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[150px] w-full"
      >
        <ResizablePanel className="flex flex-col gap-3" defaultSize={30}>
          <div className="flex items-center gap-1">
            <Laugh size={16} />
            <Typography variant="smallText">일치 항목</Typography>
          </div>
          <div className="flex flex-wrap gap-1">
            <Badge>여자</Badge>
            <Badge>플로럴</Badge>
            <Badge>10만원 대</Badge>
            <Badge>데이트</Badge>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="my-4" />
        <ResizablePanel className="flex flex-col gap-3" defaultSize={30}>
          <div className="flex items-center gap-1">
            <Frown size={16} />
            <Typography variant="smallText">불일치 항목</Typography>
          </div>
          <div className="flex flex-wrap gap-1">
            <Badge variant="destructive">여름</Badge>
            <Badge variant="destructive">흐림</Badge>
            <Badge variant="destructive">체온 낮음</Badge>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  )
}

export default PerfumeMatchMetric
