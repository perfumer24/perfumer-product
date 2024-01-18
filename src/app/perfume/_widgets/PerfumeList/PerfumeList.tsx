import React from 'react'
import PerfumeItem from '../PerfumeItem'
import { Typography } from '@/shared/components/ui/typography'

function PerfumeList(): JSX.Element {
  return (
    <div className="flex h-full flex-col gap-4">
      <Typography variant="h4">딥디크</Typography>
      <ul className="grid grid-cols-2 grid-rows-2 gap-3 sm:grid-cols-3">
        <PerfumeItem />
        <PerfumeItem />
        <PerfumeItem />
        <PerfumeItem />
        <PerfumeItem />
      </ul>
    </div>
  )
}

export default PerfumeList
