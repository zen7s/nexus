import type { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className="bg-black text-white">{children}</div>
}
