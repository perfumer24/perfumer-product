import React from 'react'

interface ContentProps {
  children: React.ReactNode
}

function Content({ children }: ContentProps): JSX.Element {
  return <main className="h-full w-full bg-white px-4">{children}</main>
}

export default Content
