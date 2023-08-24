import { ShellSkeleton, Sidebar } from '@/components'
import { AuthContext } from '@/contexts'
import { PropsWithChildren, Suspense } from 'react'

async function LayoutToBeSuspensed({ children }: PropsWithChildren) {
  return (
    <AuthContext>
      <div className="flex h-full">
        <Sidebar />
        {children}
      </div>
    </AuthContext>
  )
}

export default function ShellLayout({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<ShellSkeleton />}>
      <LayoutToBeSuspensed>{children}</LayoutToBeSuspensed>
    </Suspense>
  )
}
