import { SettingsSidebar } from '@/components'
import { PropsWithChildren } from 'react'

export default function SettingsLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex">
      <SettingsSidebar />
      {children}
    </main>
  )
}
