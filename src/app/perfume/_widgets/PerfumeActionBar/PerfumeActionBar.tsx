'use client'
import React, { ChangeEvent, useState } from 'react'

import { Badge } from '@/shared/components/ui/badge'
import { Button } from '@/shared/components/ui/button'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/shared/components/ui/drawer'
import { Textarea } from '@/shared/components/ui/textarea'
import { Typography } from '@/shared/components/ui/typography'
import { Plus } from 'lucide-react'
import { Label } from '@/shared/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/components/ui/popover'
import { Input } from '@/shared/components/ui/input'

const situations = [
  '편한 친구 만날 때',
  '출근할 때',
  '카페에서',
  '전시회에서',
  '술집에서',
  '여자친구 앞에서',
  '썸타는 앞에서',
]

function PerfumeActionBar(): JSX.Element {
  const [text, setText] = useState('')

  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    setText(value)
  }

  return (
    <div className="flex w-full gap-2 ">
      <Button className="w-2/5" variant="outline" size="lg">
        비교함 담기
      </Button>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="w-3/5" size="lg">
            시향 후기 남기기
          </Button>
        </DrawerTrigger>
        <DrawerContent className="mx-auto max-w-screen-sm">
          <DrawerHeader className="text-left">
            <DrawerTitle>시향 후기를 남겨주세요.</DrawerTitle>
            <div className="flex flex-col gap-6 py-2">
              <div>
                <Label>상황</Label>
                <div className="mt-1 flex flex-wrap gap-1">
                  {situations.map((situation, index) => {
                    return (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer "
                      >
                        {`#${situation}`}
                      </Badge>
                    )
                  })}
                  <Popover>
                    <PopoverTrigger>
                      <Badge variant="outline" className="cursor-pointer ">
                        <Plus size={14} />
                        직접 추가
                      </Badge>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <div className="flex flex-col gap-2">
                            <Label>직접 상황을 만들어주세요.</Label>
                            <Input
                              id="width"
                              placeholder="그 순간을 기억하고 싶을 때.."
                              className="col-span-2 h-8"
                            />
                            <Button className="mt-2" size="sm">
                              추가하기
                            </Button>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div>
                <Label>한줄평</Label>
                <Textarea
                  className="mt-1"
                  placeholder="한줄 후기를 남겨주세요."
                  value={text}
                  onChange={handleChangeText}
                  maxLength={50}
                />
                <Typography
                  className="px-1 pt-1 text-right"
                  variant="mutedText"
                >
                  {`${text.length} / 50자 이내로 작성해주세요.`}
                </Typography>
              </div>
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <Button>남기기</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default PerfumeActionBar
