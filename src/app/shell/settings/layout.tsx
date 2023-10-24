import { SettingsSidebar, SettingsSkeleton } from '@/components'
import { PropsWithChildren, Suspense } from 'react'

async function LayoutToBeSuspensed({ children }: PropsWithChildren) {
  return (
    <div className="grid w-full grid-cols-[12rem_1fr]">
      <SettingsSidebar />
      {children}
    </div>
  )
}

export default function SettingsLayout({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<SettingsSkeleton />}>
      <LayoutToBeSuspensed>{children}</LayoutToBeSuspensed>
    </Suspense>
  )
}
