import { Sidebar } from '@/components'
import { AuthContext } from '@/contexts'
import { PropsWithChildren } from 'react'

export default function ShellLayout({ children }: PropsWithChildren) {
  return (
    <AuthContext>
      <div className="flex h-full">
        <Sidebar />
        {children}
      </div>
    </AuthContext>
  )
}
