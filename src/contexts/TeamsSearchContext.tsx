'use client'

import { TeamDataType } from '@/types'
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
    const doesStartWithQuery = (string: string) =>
      string.toLowerCase().startsWith(query.toLowerCase())

    const sortedTeamsByTeamName = teams.filter((team) =>
      doesStartWithQuery(team.name),
    )
    const sortedTeamsByMembersNames = teams.filter((team) =>
      team.members.some(
        (member) =>
          doesStartWithQuery(member.first_name) ||
          doesStartWithQuery(member.last_name) ||
          doesStartWithQuery(`${member.first_name} ${member.last_name}`),
      ),
    )

    // Delete duplicates using Set constructor
    setSearchResult([
      ...new Set(sortedTeamsByTeamName.concat(sortedTeamsByMembersNames)),
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
