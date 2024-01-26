import PerfumeDetailInfo from '../_widgets/PerfumeDetailInfo'
import PerfumeMatchMetric from '../_widgets/PerfumeMatchMetric'
import PerfumeReviewList from '../_widgets/PerfumeReviewList'

function PerfumeDetailPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-3 bg-gray-50">
      <PerfumeDetailInfo />
      <PerfumeMatchMetric />
      <PerfumeReviewList />
    </div>
  )
}

export default PerfumeDetailPage
