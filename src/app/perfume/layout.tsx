import Header from '@/shared/layouts/Header'
import Content from '@/shared/layouts/Content'
import NavigationBar from '@/shared/layouts/NavigationBar'

export default function PerfumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <Content className="pt-16">{children}</Content>
      <NavigationBar />
    </>
  )
}
