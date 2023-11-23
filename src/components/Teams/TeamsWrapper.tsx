'use client'

import { PageHeading, Team, TeamsWrapperSkeleton } from '@/components'
import { useAuth, useTeamsSearchContext } from '@/contexts'
import { DatabaseType, TeamDataType } from '@/types'
import { sortTeams } from '@/utils'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

const TeamsWrapper = () => {
  const { userProfile } = useAuth()
  const supabase = createClientComponentClient<DatabaseType>()
  const [teams, setTeams] = useState<TeamDataType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { setTeams: setSearchSource, searchResult } = useTeamsSearchContext()

  useEffect(() => {
    if (!userProfile) return

    const getTeams = async () => {
      setIsLoading(true)
      const { data } = await supabase
        .from('teams')
        .select(
          `
        *,
        members:profiles (
          *,
          role:roles (
            *
          )
        )
      `,
        )
        .eq('organisation_id', userProfile.organisation_id)

      if (data) {
        setTeams(data)
      }

      setIsLoading(false)
    }

    getTeams()
  }, [supabase, userProfile])

  useEffect(() => {
    setSearchSource(teams)
  }, [teams, setSearchSource])

  if (!userProfile) return <TeamsWrapperSkeleton />

  return (
    <>
      {isLoading && <TeamsWrapperSkeleton />}
      {teams.length ? (
        searchResult.length ? (
          sortTeams(searchResult).map((team) => (
            <Team key={team.id} data={team} />
          ))
        ) : (
          <div className="w-full py-8 text-center">
            <PageHeading
              title="No Team Found"
              subtitle="There is no team or member with specified name."
              noSpacer
            />
          </div>
        )
      ) : (
        <div className="w-full py-8 text-center">
          <PageHeading
            title="You Have No Teams Yet"
            subtitle="Create first team using the button above."
            noSpacer
          />
        </div>
      )}
    </>
  )
}

export default TeamsWrapper
