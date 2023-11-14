'use client'

import {
  Button,
  CreateTeamModal,
  PageHeading,
  TeamsWrapper,
  TeamsSearchInput,
} from '@/components'
import { TeamsSearchContext } from '@/contexts'
import { useState } from 'react'

export default function Teams() {
  const [isCreateTeamModalVisible, setIsCreateTeamModalVisible] =
    useState(false)

  return (
    <div className="flex h-screen w-full flex-col items-start gap-6 overflow-auto bg-slate-200 p-16 dark:bg-zinc-800">
      <PageHeading
        title="Teams"
        subtitle="Manage your teams, members, and team roles."
      />
      <TeamsSearchContext>
        <div className="flex w-full gap-3">
          <Button onClick={() => setIsCreateTeamModalVisible(true)}>
            Create new team
          </Button>
          <TeamsSearchInput />
        </div>
        <TeamsWrapper />
      </TeamsSearchContext>
      <CreateTeamModal
        isVisible={isCreateTeamModalVisible}
        setIsVisible={setIsCreateTeamModalVisible}
      />
    </div>
  )
}
