import { Avatar, MessageIcon, KebabMenu } from '@/components'
import { TeamMemberType } from '@/types'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

interface Props {
  member: TeamMemberType
}

const TeamMember = ({ member }: Props) => {
  return (
    <li
      key={member.id}
      className="flex border-b-2 border-slate-400 px-8 py-3 last:border-b-0 dark:border-zinc-600"
    >
      <div className="flex w-64 items-center gap-4">
        <Avatar profile={member} size="sm" />
        <p className="font-semibold">
          {member.first_name} {member.last_name}
        </p>
      </div>
      <div className="flex w-40 items-center">
        <p className="truncate text-sm">{member.role?.name || 'No Role'}</p>
      </div>
      <div className="flex w-32 items-center justify-end gap-6">
        <MessageIcon receiver={member.id} />
        <KebabMenu
          items={[
            {
              label: 'Manage',
              icon: faEdit,
              onClick: () => {},
            },
            {
              label: 'Delete member',
              icon: faTrashAlt,
              onClick: () => {},
              isRed: true,
            },
          ]}
        />
      </div>
    </li>
  )
}

export default TeamMember
