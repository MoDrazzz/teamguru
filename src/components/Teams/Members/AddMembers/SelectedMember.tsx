'use client'
import {
  TeamMemberWrapper,
  MemberProfile,
  Select,
  ButtonIcon,
} from '@/components'
import { RoleType, SelectedMemberType } from '@/types'
import { faCrown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  member: SelectedMemberType
  roles: RoleType[]
  setSelectedMembers: Dispatch<SetStateAction<SelectedMemberType[]>>
}

const SelectedMember = ({ member, roles, setSelectedMembers }: Props) => {
  const isTeamLeader = member.type === 'team_leader'

  return (
    <TeamMemberWrapper>
      <MemberProfile member={member.profile} />
      <div className="w-48">
        {roles.length ? (
          <Select
            items={roles.map((role) => role.name)}
            selectedItem={member.role?.name || roles[0].name}
            setSelectedItem={(roleName) => {
              setSelectedMembers((prev) => {
                return prev.with(prev.indexOf(member), {
                  ...member,
                  role: roles.find((role) => role.name === roleName)!,
                })
              })
            }}
          />
        ) : (
          <p className="text-sm">No role</p>
        )}
      </div>
      <div className="flex w-14 items-center justify-center gap-3">
        <ButtonIcon
          onClick={() =>
            setSelectedMembers((prev) =>
              prev.with(prev.indexOf(member), {
                ...member,
                type: isTeamLeader ? 'team_member' : 'team_leader',
              }),
            )
          }
          icon={faCrown}
          tooltipMessage={
            isTeamLeader ? 'Mark as team member' : 'Mark as team leader'
          }
          className={classNames('transition-colors', {
            'text-slate-600 group-hover:text-slate-700 dark:text-zinc-400 dark:group-hover:text-zinc-300':
              !isTeamLeader,
            'text-yellow-500': isTeamLeader,
          })}
        />
        <ButtonIcon
          onClick={() =>
            setSelectedMembers((prev) =>
              prev.filter((selectedMember) => member !== selectedMember),
            )
          }
          icon={faTrashAlt}
          tooltipMessage="Delete member"
          className="text-red-500 transition-colors group-hover:text-red-600 dark:text-red-600 dark:group-hover:text-red-500"
        />
      </div>
    </TeamMemberWrapper>
  )
}

export default SelectedMember
