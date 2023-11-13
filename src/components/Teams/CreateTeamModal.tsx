'use client'

import {
  Button,
  FormField,
  Input,
  InputError,
  Label,
  Modal,
  Title,
} from '@/components'
import { ModalProps } from '@/types'
import { useRef, useState } from 'react'

const CreateTeamModal = ({ isVisible, setIsVisible }: ModalProps) => {
  const teamNameInputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState('')

  const handleCreateTeam = () => {
    if (!teamNameInputRef.current) return

    const teamName = teamNameInputRef.current.value

    if (teamName.trim().length === 0) {
      setError('You have to specify team name')
    }
  }

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
            isError={!!error.length}
            onFocus={() => setError('')}
          />
          <InputError message={error} />
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
