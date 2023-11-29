import { TeamMemberType } from '@/types'
import { doesStartWithValue } from '@/utils'

export function filterMembersByName(members: TeamMemberType[], name: string) {
  const filteredMembers = members.filter(
    (member) =>
      doesStartWithValue(member.first_name, name) ||
      doesStartWithValue(member.last_name, name) ||
      doesStartWithValue(`${member.first_name} ${member.last_name}`, name),
  )

  return filteredMembers
}
