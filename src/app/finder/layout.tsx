import Content from '@/shared/layouts/Content'

export default function FinderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Content className="px-2">{children}</Content>
}
