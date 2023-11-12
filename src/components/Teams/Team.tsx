import { Avatar, TeamFooter, Icon, Title } from '@/components'
import { TeamData, TeamMember } from '@/types'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface Props {
  data: TeamData
}

const sortMembers = (members: TeamMember[]) => {
  const sortedMembers = members.sort((memberA, memberB) => {
    const memberAIsTeamLeader = memberA.type === 'team_leader'
    const memberBIsTeamLeader = memberB.type === 'team_leader'

    if (memberAIsTeamLeader && !memberBIsTeamLeader) {
      return -1
    } else if (memberBIsTeamLeader && !memberAIsTeamLeader) {
      return 1
    } else {
      return 0
    }
  })

  return sortedMembers
}

const Team = ({ data: { name, members } }: Props) => {
  // TODO: Replace with real data
  const ongoingProjects = 3
  const assignedTasks = 12

  return (
    <article className="grid w-full justify-items-start gap-3">
      <Link
        href={`/shell/teams/${name}`}
        className="group flex items-center gap-3"
      >
        <Title>{name}</Title>
        <Icon
          className="text-lg text-slate-600 group-hover:animate-wiggle"
          icon={faArrowRight}
        />
      </Link>
      <div className="grid w-full gap-3 rounded-xl bg-slate-50 p-4 shadow-main">
        {members.length ? (
          <>
            <div className="flex gap-3">
              {sortMembers(members).map((member) => (
                <Avatar
                  key={member.id}
                  size="sm"
                  profile={member}
                  isTeamLeader={member.type === 'team_leader'}
                  withTooltip
                />
              ))}
            </div>
            <TeamFooter
              items={[
                `Members: ${members.length}`,
                `Ongoing Projects: ${ongoingProjects}`,
                `Tasks Assigned: ${assignedTasks}`,
              ]}
            />
          </>
        ) : (
          <p className="text-sm font-medium">This team is empty.</p>
        )}
      </div>
    </article>
  )
}

export default Team
