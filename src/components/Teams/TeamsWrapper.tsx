'use client'

import { Team } from '@/components'
import { Database, TeamData } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

const TeamsWrapper = () => {
  const supabase = createClientComponentClient<Database>()
  const [teams, setTeams] = useState<TeamData[]>([])

  useEffect(() => {
    const getTeams = async () => {
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
    }

    getTeams()
  }, [supabase])

  return (
    <>
      {teams.map((team) => (
        <Team key={team.id} data={team} />
      ))}
    </>
  )
}

export default TeamsWrapper
