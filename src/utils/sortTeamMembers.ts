import { TeamMemberType } from '@/types'
import { sortObjectsArrayAlphabetically } from '@/utils'

export function sortTeamMembers(members: TeamMemberType[]) {
  const sortedMembers = members.sort((memberA, memberB) => {
    const memberAIsTeamLeader = memberA.type === 'team_leader'
    const memberBIsTeamLeader = memberB.type === 'team_leader'

    return memberAIsTeamLeader && !memberBIsTeamLeader
      ? -1
      : memberBIsTeamLeader && !memberAIsTeamLeader
      ? 1
      : 0
  })

  const firstRegularTeamMemberIndex = sortedMembers.findIndex(
    (member) => member.type !== 'team_leader',
  )

  const [teamLeaders, regularTeamMembers] = [
    sortedMembers.slice(0, firstRegularTeamMemberIndex),
    sortedMembers.slice(firstRegularTeamMemberIndex),
  ]

  return [
    ...sortObjectsArrayAlphabetically(teamLeaders, 'first_name'),
    ...sortObjectsArrayAlphabetically(regularTeamMembers, 'first_name'),
  ]
}
