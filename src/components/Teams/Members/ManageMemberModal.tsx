'use client'

import {
  Button,
  ButtonText,
  FormField,
  Label,
  ManageMemberModalSkeleton,
  Modal,
  ModalError,
  ModalFooter,
  NoRolesLabel,
  Profile,
  Select,
  Title,
} from '@/components'
import { useAuth } from '@/contexts'
import { DatabaseType, ModalPropsType, RoleType, TeamMemberType } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

interface Props extends ModalPropsType {
  member: TeamMemberType
}

const ManageMemberModal = ({ isVisible, setIsVisible, member }: Props) => {
  const supabase = createClientComponentClient<DatabaseType>()
  const { userProfile } = useAuth()

  const [roles, setRoles] = useState<RoleType[]>([])

  const [selectedRole, setSelectedRole] = useState(member.role)
  const [selectedPosition, setSelectedPosition] = useState(member.type)

  const [isFetching, setIsFetching] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleManageMember = async () => {
    setIsLoading(true)

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        type: selectedPosition,
        role_id: selectedRole?.id || null,
      })
      .eq('id', member.id)

    setIsLoading(false)

    if (updateError) {
      setIsError(true)
      return
    }

    setIsVisible(false)
  }

  const handleCancel = () => {
    setIsVisible(false)
    setIsFetching(true)
    setSelectedRole(member.role || null)
    setSelectedPosition(member.type)
    setIsError(false)
  }

  useEffect(() => {
    if (!userProfile || !isVisible) return

    const getRoles = async () => {
      const { data: rolesData } = await supabase
        .from('roles')
        .select(`*`)
        .eq('organisation_id', userProfile.organisation_id)

      if (rolesData) {
        setRoles(rolesData)
      }

      setIsFetching(false)
    }

    getRoles()
  }, [supabase, userProfile, isVisible])

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      {isFetching ? (
        <ManageMemberModalSkeleton />
      ) : (
        <div className="flex w-80 flex-col gap-6">
          <Title>Manage Member</Title>
          <Profile userProfile={member} />
          <FormField>
            <Label htmlFor="roleSelect">
              {!roles.length ? <NoRolesLabel /> : 'Role'}
            </Label>
            <Select
              id="roleSelect"
              items={roles.map((role) => role.name)}
              selectedItem={selectedRole?.name || null}
              setSelectedItem={(roleName) =>
                setSelectedRole(
                  roleName
                    ? roles.find((role) => role.name === roleName)!
                    : null,
                )
              }
              disabled={!roles.length}
              emptySelection="No Role"
            />
          </FormField>
          <FormField>
            <Label htmlFor="positionSelect">Position</Label>
            <Select
              id="positionSelect"
              items={['Team Member', 'Team Leader']}
              selectedItem={
                selectedPosition === 'team_member'
                  ? 'Team Member'
                  : 'Team Leader'
              }
              setSelectedItem={(name) =>
                setSelectedPosition(
                  name === 'Team Member' ? 'team_member' : 'team_leader',
                )
              }
            />
          </FormField>
          <ModalFooter>
            <ButtonText onClick={handleCancel} disabled={isLoading}>
              Cancel
            </ButtonText>
            <Button
              isLoading={isLoading}
              onClick={handleManageMember}
              disabled={
                JSON.stringify(member.role) === JSON.stringify(selectedRole) &&
                member.type === selectedPosition
              }
            >
              Confirm
            </Button>
          </ModalFooter>
          <ModalError isError={isError} />
        </div>
      )}
    </Modal>
  )
}

export default ManageMemberModal
