import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/shared/components/ui/table'
import { Typography } from '@/shared/components/ui/typography'

const COLUMN_LABELS: { [key: string]: string } = {
  gender: '성별',
  scent: '향',
  situation: '상황',
  price: '가격',
  season: '계절',
  whether: '날씨',
  temperature: '체온',
}

function PerfumeComparisonTable(): JSX.Element {
  const data: Record<string, (string | number)[]> = {
    gender: ['남자', '여자', '남자'],
    scent: ['우디', '플로럴', '프루티'],
    situation: ['데이트', '출근', '술자리'],
    price: [120000, 120000, 120000],
    season: ['봄', '가을', '봄'],
    whether: ['화창함', '흐림', '화창함'],
    temperature: ['체온 높음', '체온 낮음', '체온 높음'],
  }

  const keys: string[] = Object.keys(data)

  return (
    <>
      <Table className="mt-2">
        <TableBody>
          {keys.map((key) => {
            return (
              <TableRow key={key}>
                <TableHead className="w-1/4">
                  <Typography variant="mutedText">
                    {COLUMN_LABELS[key]}
                  </Typography>
                </TableHead>
                {data[key].map((item, index) => {
                  return (
                    <TableCell key={index} className="text-center">
                      {typeof item === 'number' ? (
                        <>
                          <Typography variant="inlineCode" className="text-xs">
                            {item.toLocaleString()}
                          </Typography>
                          <br />
                          <Typography variant="mutedText" className="text-xs">
                            50ml
                            <br />
                            {`(1뿌당 150원)`}
                          </Typography>
                        </>
                      ) : (
                        <Typography variant="inlineCode" className="text-xs">
                          {item}
                        </Typography>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}

export default PerfumeComparisonTable
