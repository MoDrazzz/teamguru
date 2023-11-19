'use client'

import {
  MemberProfile,
  MessageIcon,
  KebabMenu,
  DeleteMemberModal,
  TeamMemberWrapper,
} from '@/components'
import { TeamMemberType } from '@/types'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface Props {
  member: TeamMemberType
}

const TeamMember = ({ member }: Props) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  return (
    <TeamMemberWrapper>
      <MemberProfile member={member} />
      <div className="flex w-40 items-center">
        <p className="truncate text-sm">{member.role?.name || 'No Role'}</p>
      </div>
      <div className="flex w-20 items-center justify-end gap-4">
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
    </TeamMemberWrapper>
  )
}

export default TeamMember
