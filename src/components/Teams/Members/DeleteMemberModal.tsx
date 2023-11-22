'use client'

import {
  Button,
  ButtonText,
  Modal,
  ModalError,
  Profile,
  Title,
} from '@/components'
import { DatabaseType, ModalPropsType, TeamMemberType } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

interface Props extends ModalPropsType {
  member: TeamMemberType
}

const DeleteMemberModal = ({ isVisible, setIsVisible, member }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const supabase = createClientComponentClient<DatabaseType>()

  const handleDeleteMember = async () => {
    setIsLoading(true)

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        team_id: null,
        type: 'team_member',
      })
      .eq('id', member.id)

    setIsLoading(false)

    if (updateError) {
      setIsError(true)
      return
    }

    setIsVisible(false)
  }

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <div className="flex max-w-xs flex-col gap-6">
        <Title>Delete Member</Title>
        <p>You are about to delete this member from your team:</p>
        <Profile userProfile={member} />
        <p>Are you sure this is what you mean?</p>
        <div className="flex w-full items-center justify-between">
          <ButtonText onClick={() => setIsVisible(false)} disabled={isLoading}>
            Cancel
          </ButtonText>
          <Button
            isLoading={isLoading}
            onClick={handleDeleteMember}
            color="red"
          >
            Delete
          </Button>
        </div>
        <ModalError isError={isError} />
      </div>
    </Modal>
  )
}

export default DeleteMemberModal
