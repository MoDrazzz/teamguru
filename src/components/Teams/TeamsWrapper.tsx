'use client'

import { Team, TeamSkeleton } from '@/components'
import { useAuth, useTeamsSearchContext } from '@/contexts'
import { Database, TeamData } from '@/types'
import { sortTeams } from '@/utils'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

const TeamsWrapper = () => {
  const { userProfile } = useAuth()
  const supabase = createClientComponentClient<Database>()
  const [teams, setTeams] = useState<TeamData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { setTeams: setSearchSource, searchResult } = useTeamsSearchContext()

  useEffect(() => {
    const getTeams = async () => {
      setIsLoading(true)
      const { data } = await supabase.from('teams').select(`
        *,
        members:profiles (
          *,
          role:roles (
            *
          )
        )
      `)

      if (data) {
        setTeams(data)
      }

      setIsLoading(false)
    }

    getTeams()
  }, [supabase])

  useEffect(() => {
    setSearchSource(teams)
  }, [teams, setSearchSource])

  const TeamSkeletons = () =>
    Array.from({ length: 5 }).map((_, index) => <TeamSkeleton key={index} />)

  if (!userProfile) return <TeamSkeletons />

  return (
    <>
      {isLoading && <TeamSkeletons />}
      {teams.length ? (
        sortTeams(searchResult).map((team) => (
          <Team key={team.id} data={team} />
        ))
      ) : (
        <div className="flex h-1/2 w-full flex-col items-center justify-center">
          <h3 className="mb-2 text-3xl font-semibold">You have no teams yet</h3>
          <h4 className="text-xl text-slate-600 dark:text-zinc-400">
            Create first team using the button above.
          </h4>
        </div>
      )}
    </>
  )
}

export default TeamsWrapper
