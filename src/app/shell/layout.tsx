import { ShellSkeleton, Sidebar } from '@/components'
import { AuthContext } from '@/contexts'
import { PropsWithChildren, Suspense } from 'react'

async function LayoutToBeSuspensed({ children }: PropsWithChildren) {
  return (
    <AuthContext>
      <div className="grid h-full grid-cols-[16rem_1fr]">
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
