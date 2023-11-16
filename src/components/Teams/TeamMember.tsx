'use client'

import { Avatar, MessageIcon, KebabMenu, DeleteMemberModal } from '@/components'
import { TeamMemberType } from '@/types'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface Props {
  member: TeamMemberType
}

const TeamMember = ({ member }: Props) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  return (
    <li
      key={member.id}
      className="flex border-b-2 border-slate-400 px-8 py-3 last:border-b-0 dark:border-zinc-600"
    >
      <div className="flex w-64 items-center gap-4">
        <Avatar
          profile={member}
          size="sm"
          isTeamLeader={member.type === 'team_leader'}
        />
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
              onClick: () => setIsDeleteModalVisible(true),
              isRed: true,
            },
          ]}
        />
      </div>
      <DeleteMemberModal
        isVisible={isDeleteModalVisible}
        setIsVisible={setIsDeleteModalVisible}
        member={member}
      />
    </li>
  )
}

export default TeamMember
