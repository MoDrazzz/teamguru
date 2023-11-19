'use client'
import {
  TeamMemberWrapper,
  MemberProfile,
  Select,
  ButtonIcon,
} from '@/components'
import { RoleType, SelectedMemberType } from '@/types'
import { faCrown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  member: SelectedMemberType
  roles: RoleType[]
  setSelectedMembers: Dispatch<SetStateAction<SelectedMemberType[]>>
}

const SelectedMember = ({ member, roles, setSelectedMembers }: Props) => {
  return (
    <TeamMemberWrapper>
      <MemberProfile member={member.profile} />
      <div className="w-48">
        <Select
          items={roles.map((role) => role.name)}
          selectedItem={member.role?.name || roles[0].name}
          setSelectedItem={(roleName: string) => {
            setSelectedMembers((prev) => {
              return prev.with(prev.indexOf(member), {
                profile: member.profile,
                role: roles.find((role) => role.name === roleName)!,
              })
            })
          }}
        />
      </div>
      <div className="flex w-14 items-center justify-center gap-3">
        <ButtonIcon
          onClick={() => {}}
          icon={faCrown}
          tooltipMessage="Mark as team leader"
          className="text-slate-600 transition-colors group-hover:text-slate-700 dark:text-zinc-400 dark:group-hover:text-zinc-300"
        />
        <ButtonIcon
          onClick={() => {}}
          icon={faTrashAlt}
          tooltipMessage="Delete member"
          className="text-red-500 transition-colors group-hover:text-red-600 dark:text-red-600 dark:group-hover:text-red-500"
        />
      </div>
    </TeamMemberWrapper>
  )
}

export default SelectedMember
