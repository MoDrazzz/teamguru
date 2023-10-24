'use client'

import { Sidebar } from '@/components'
import { AuthContext } from '@/contexts'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

export default function ShellLayout({ children }: PropsWithChildren) {
  return (
    <AuthContext>
      <ThemeProvider
        attribute="class"
        enableColorScheme={false}
        defaultTheme="light"
        enableSystem={false}
      >
        <div className="grid h-full grid-cols-[16rem_1fr] bg-slate-50 dark:bg-zinc-900">
          <Sidebar />
          {children}
        </div>
      </ThemeProvider>
    </AuthContext>
  )
}
