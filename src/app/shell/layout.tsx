import { AuthContext } from '@/contexts'
import { PropsWithChildren } from 'react'

export default function ShellLayout({ children }: PropsWithChildren) {
  return <AuthContext>{children}</AuthContext>
}
