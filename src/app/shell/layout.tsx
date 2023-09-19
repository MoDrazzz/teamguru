'use client'

import { Sidebar } from '@/components'
import { AuthContext } from '@/contexts'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

export default function ShellLayout({ children }: PropsWithChildren) {
  return (
    <AuthContext>
      <ThemeProvider attribute="class" enableColorScheme={false}>
        <div className="grid h-full grid-cols-[16rem_1fr]">
          <Sidebar />
          {children}
        </div>
      </ThemeProvider>
    </AuthContext>
  )
}
