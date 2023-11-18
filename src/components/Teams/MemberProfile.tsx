import { Avatar } from '@/components'
import { TeamMemberType } from '@/types'

interface Props {
  member: TeamMemberType
}

const MemberProfile = ({ member }: Props) => {
  return (
    <div className="flex w-64 items-center gap-4">
      <Avatar
        profile={member}
        size="sm"
        isTeamLeader={member.type === 'team_leader'}
      />
      <p className="truncate font-semibold">
        {member.first_name} {member.last_name}
      </p>
    </div>
  )
}

export default MemberProfile
