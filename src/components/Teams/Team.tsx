import { Avatar, TeamFooter, Icon, Title } from '@/components'
import { TeamDataType } from '@/types'
import { sortTeamMembers } from '@/utils'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface Props {
  data: TeamDataType
}

const Team = ({ data: { name, members } }: Props) => {
  // TODO: Replace with real data
  const ongoingProjects = '-'
  const assignedTasks = '-'

  return (
    <article className="grid w-full justify-items-start gap-3">
      <Link
        href={`/shell/teams/${name}`}
        className="group flex items-center gap-3"
      >
        <Title>{name}</Title>
        <Icon
          className="text-lg text-slate-600 group-hover:animate-wiggle dark:text-zinc-400"
          icon={faArrowRight}
        />
      </Link>
      <div className="grid w-full gap-3 rounded-xl bg-slate-50 p-4 shadow-main dark:bg-zinc-900">
        {members.length ? (
          <>
            <div className="flex flex-wrap gap-3">
              {sortTeamMembers(members).map((member) => (
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
