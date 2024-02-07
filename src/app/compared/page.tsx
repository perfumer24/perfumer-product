import React from 'react'
import PerfumeComparisonTable from './_widgets/PerfumeComparisonTable'
import PerfumeComparisonView from './_widgets/PerfumeComparisonView'

function ComparedPage(): JSX.Element {
  return (
    <>
      <PerfumeComparisonView />
      <PerfumeComparisonTable />
    </>
  )
}

export default ComparedPage
