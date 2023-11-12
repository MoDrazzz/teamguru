'use client'

import {
  Button,
  PageHeading,
  TeamsWrapper,
  TeamsSearchInput,
} from '@/components'

export default function Teams() {
  return (
    <div className="flex h-screen w-full flex-col items-start gap-6 overflow-auto bg-slate-200 p-16 dark:bg-zinc-800">
      <PageHeading
        title="Teams"
        subtitle="Manage your teams, members, and team roles."
      />
      <div className="flex w-full gap-3">
        <Button onClick={() => {}}>Create new team</Button>
        <TeamsSearchInput />
      </div>
      <TeamsWrapper />
    </div>
  )
}
