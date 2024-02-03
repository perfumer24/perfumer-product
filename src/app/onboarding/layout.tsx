import Content from '@/shared/layouts/Content'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Content className="px-2">{children}</Content>
}
