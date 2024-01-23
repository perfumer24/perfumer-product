import PerfumeDetailInfo from '../_widgets/PerfumeDetailInfo'
import MatchMetric from '../_widgets/MatchMetric'
import ReviewList from '../_widgets/ReviewList'

function PerfumeDetailPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-3 bg-gray-50">
      <PerfumeDetailInfo />
      <MatchMetric />
      <ReviewList />
    </div>
  )
}

export default PerfumeDetailPage
