'use client'

import { Button, FormField, Input, Label, Modal, Title } from '@/components'
import { ModalProps } from '@/types'
import { useRef } from 'react'

const CreateTeamModal = ({ isVisible, setIsVisible }: ModalProps) => {
  const teamNameInputRef = useRef(null)

  const handleCreateTeam = () => {}

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <div className="flex w-80 flex-col gap-6">
        <Title>New Team</Title>
        <FormField>
          <Label htmlFor="newTeamName">Name</Label>
          <Input
            refObj={teamNameInputRef}
            id="newTeamName"
            placeholder="Team name..."
          />
        </FormField>
        <div className="flex justify-between">
          <Button onClick={() => setIsVisible(false)} color="red">
            Cancel
          </Button>
          <Button onClick={handleCreateTeam}>Create</Button>
        </div>
      </div>
    </Modal>
  )
}

export default CreateTeamModal
