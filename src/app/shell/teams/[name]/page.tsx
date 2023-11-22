'use client'

import { PageHeading, TeamMembers, TeamPageSkeleton } from '@/components'
import { useAuth } from '@/contexts'
import { TeamDataType, DatabaseType } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect } from 'react'

export default function TeamPage({ params }: { params: { name: string } }) {
  const supabase = createClientComponentClient<DatabaseType>()
  const { userProfile } = useAuth()
  const [team, setTeam] = useState<TeamDataType | null>(null)
  const [isFetching, setIsFetching] = useState(true)

  const teamName = params.name.replaceAll('%20', ' ')

  useEffect(() => {
    if (!userProfile) return

    const getTeam = async () => {
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
        .eq('name', teamName)
        .single()

      if (data) {
        setTeam(data)
      }
      setIsFetching(false)
    }

    getTeam()

    supabase
      .channel('team_members')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles',
          filter: `organisation_id=eq.${userProfile.organisation_id}`,
        },
        getTeam,
      )
      .subscribe()
  }, [supabase, teamName, userProfile])

  // TODO: Replace with skeleton
  if (isFetching) return <TeamPageSkeleton />
  // TODO: Replace with 404
  if (!team) return <h1>Team not found</h1>

  return (
    <>
      <PageHeading title={team.name} subtitle="See the insights." />
      <TeamMembers teamId={team.id} members={team.members} />
    </>
  )
}
