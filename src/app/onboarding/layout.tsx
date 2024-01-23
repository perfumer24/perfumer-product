import Content from '@/shared/layouts/Content'
import Header from '@/shared/layouts/Header'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Content className="px-2">{children}</Content>
}
