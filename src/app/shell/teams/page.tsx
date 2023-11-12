'use client'

import { Button, PageHeading, TeamsWrapper } from '@/components'

export default function Teams() {
  return (
    <div className="flex h-screen w-full flex-col items-start gap-6 bg-slate-200 p-16 dark:bg-zinc-800">
      <PageHeading
        title="Teams"
        subtitle="Manage your teams, members, and team roles."
      />
      <Button onClick={() => {}}>Create new team</Button>
      <TeamsWrapper />
    </div>
  )
}
