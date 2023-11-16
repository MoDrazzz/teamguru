import { PropsWithChildren } from 'react'

const ScrollGradient = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative">
      {children}
      <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-full bg-gradient-to-b from-transparent to-slate-50 dark:to-zinc-900" />
    </div>
  )
}

export default ScrollGradient
