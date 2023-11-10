import { Avatar, TeamFooter, Icon, Title } from '@/components'
import { UserProfile } from '@/types'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface Props {
  name: string
  members: UserProfile[]
}

const Team = ({ name, members }: Props) => {
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
      <div className="shadow-main grid w-full gap-3 rounded-xl bg-slate-50 p-4">
        {members.length ? (
          <>
            <div className="flex gap-3">
              {members.map((member) => (
                <Avatar key={member.id} size="sm" profile={member} />
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
