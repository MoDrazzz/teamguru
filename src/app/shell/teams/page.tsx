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
    <>
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
    </>
  )
}
