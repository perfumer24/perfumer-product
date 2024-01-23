import React from 'react'
import { Progress } from '@/shared/components/ui/progress'
import { Typography } from '@/shared/components/ui/typography'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion'

function MatchMetric(): JSX.Element {
  return (
    <section className="flex flex-col gap-4 bg-white p-3">
      <Typography variant="h4">선호 비율</Typography>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-center justify-between">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger>
                <Typography className="w-1/12">성별</Typography>
                <Progress value={33} className="w-10/12" />
              </AccordionTrigger>
              <AccordionContent>어떤 성별이 많이 뿌리네요.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex items-center justify-between ">
          <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger>
                <Typography className="w-1/12" variant="smallText">
                  계절
                </Typography>
                <Progress value={33} className="w-10/12" />
              </AccordionTrigger>
              <AccordionContent>
                선호하는 계절에 뿌리고 다니네요.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex items-center justify-between">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger>
                <Typography className="w-1/12">상황</Typography>
                <Progress value={33} className="w-10/12" />
              </AccordionTrigger>
              <AccordionContent>어떤 상황에서 많이 뿌리네요.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex items-center justify-between">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger>
                <Typography className="w-1/12">날씨</Typography>
                <Progress value={33} className="w-10/12" />
              </AccordionTrigger>
              <AccordionContent>어떤 날씨에 많이 뿌리네요.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex items-center justify-between">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger>
                <Typography className="w-1/12">발향</Typography>
                <Progress value={33} className="w-10/12" />
              </AccordionTrigger>
              <AccordionContent>
                대체적으로 향이 빨리 사라져요.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default MatchMetric
