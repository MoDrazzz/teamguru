import { TeamDataType } from '@/types'
import { sortObjectsArrayAlphabetically } from '@/utils'

export function sortTeams(teams: TeamDataType[]) {
  const sortedTeamsByMembers = teams.sort((teamA, teamB) => {
    const teamAHasMembers = !!teamA.members.length
    const teamBHasMembers = !!teamB.members.length

    return teamAHasMembers && !teamBHasMembers
      ? -1
      : teamBHasMembers && !teamAHasMembers
      ? 1
      : 0
  })

  const firstTeamWithNoMembersIndex = sortedTeamsByMembers.findIndex(
    (team) => !team.members.length,
  )

  const [teamsWithMembers, teamsWithNoMembers] = [
    sortedTeamsByMembers.slice(0, firstTeamWithNoMembersIndex),
    sortedTeamsByMembers.slice(firstTeamWithNoMembersIndex),
  ]

  return [
    ...sortObjectsArrayAlphabetically(teamsWithMembers, 'name'),
    ...sortObjectsArrayAlphabetically(teamsWithNoMembers, 'name'),
  ]
}
