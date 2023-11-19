import { PropsWithChildren } from 'react'

const TeamMemberWrapper = ({ children }: PropsWithChildren) => {
  return (
    <li className="flex gap-6 border-b-2 border-slate-400 px-8 py-3 last:border-b-0 dark:border-zinc-600">
      {children}
    </li>
  )
}

export default TeamMemberWrapper
