import { PropsWithChildren } from 'react'

export default function AuthWrapper({ children }: PropsWithChildren) {
  return <main className="rounded-xl p-3 bg-white">{children}</main>
}
