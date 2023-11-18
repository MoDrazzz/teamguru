'use client'

import { TeamDataType } from '@/types'
import { doesStartWithValue, filterMembersByName } from '@/utils'
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface TeamsSearchContextValue {
  teams: TeamDataType[]
  setTeams: Dispatch<SetStateAction<TeamDataType[]>>
  setQuery: Dispatch<SetStateAction<string>>
  searchResult: TeamDataType[]
}

const Context = createContext<TeamsSearchContextValue>({
  teams: [],
  setTeams: () => {},
  setQuery: () => {},
  searchResult: [],
})

const TeamsSearchContext = ({ children }: PropsWithChildren) => {
  const [teams, setTeams] = useState<TeamDataType[]>([])
  const [query, setQuery] = useState('')
  const [searchResult, setSearchResult] = useState<TeamDataType[]>([])

  useEffect(() => {
    const filteredTeamsByTeamName = teams.filter((team) =>
      doesStartWithValue(team.name, query),
    )
    const filteredTeamsByMembersNames = teams.filter(
      (team) => filterMembersByName(team.members, query).length,
    )

    // Delete duplicates using Set constructor
    setSearchResult([
      ...new Set(filteredTeamsByTeamName.concat(filteredTeamsByMembersNames)),
    ])
  }, [query, teams])

  return (
    <Context.Provider
      value={{
        teams,
        setTeams,
        setQuery,
        searchResult,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useTeamsSearchContext = () => useContext(Context)

export default TeamsSearchContext
