import { SettingsSidebar } from '@/components'
import { PropsWithChildren } from 'react'

export default function SettingsLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid w-full grid-cols-[12rem_1fr]">
      <SettingsSidebar />
      {children}
    </div>
  )
}
