'use client'

import {
  Button,
  ButtonText,
  FormField,
  Input,
  InputError,
  Label,
  Modal,
  ModalFooter,
  Title,
} from '@/components'
import { useAuth } from '@/contexts'
import { DatabaseType, ModalPropsType } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef, useState } from 'react'

const CreateTeamModal = ({ isVisible, setIsVisible }: ModalPropsType) => {
  const supabase = createClientComponentClient<DatabaseType>()
  const { userProfile } = useAuth()
  const teamNameInputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleCreateTeam = async (e: FormEvent<SubmitEvent>) => {
    e.preventDefault()

    if (!teamNameInputRef.current || !userProfile) return

    const teamName = teamNameInputRef.current.value

    if (teamName.trim().length === 0) {
      setError('You have to specify team name')
      return
    }

    setIsLoading(true)

    const { error: insertError } = await supabase
      .from('teams')
      .insert({ name: teamName, organisation_id: userProfile.organisation_id })

    setIsLoading(false)

    if (insertError) {
      if (insertError.code === '23505') {
        setError('Team with specified name already exists')
      } else {
        setError(insertError.message)
      }
      return
    }

    router.push(`/shell/teams/${teamName}`)
  }

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <form className="flex w-80 flex-col gap-6">
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
        <ModalFooter>
          <ButtonText onClick={() => setIsVisible(false)} disabled={isLoading}>
            Cancel
          </ButtonText>
          <Button
            type="submit"
            isLoading={isLoading}
            onClick={handleCreateTeam}
          >
            Create
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}

export default CreateTeamModal
