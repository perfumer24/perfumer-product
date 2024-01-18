import Content from '@/shared/layouts/Content'
import Header from '@/shared/layouts/Header'

export default function PerfumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  )
}
