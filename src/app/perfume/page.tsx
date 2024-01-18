import React from 'react'
import PerfumeList from './_widgets/PerfumeList'

function Perfume(): JSX.Element {
  return (
    <div className="flex flex-col gap-12">
      <PerfumeList />
      <PerfumeList />
    </div>
  )
}

export default Perfume
