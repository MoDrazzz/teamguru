import { PropsWithChildren } from 'react'

export default function TeamsLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-full flex-col items-start gap-6 overflow-auto bg-slate-200 p-16 dark:bg-zinc-800">
      {children}
    </div>
  )
}
