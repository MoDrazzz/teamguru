'use client'

import {
  SearchMemberInput,
  Button,
  ButtonText,
  Modal,
  TableHead,
  TableHeadData,
  Title,
  SelectedMember,
} from '@/components'
import { useAuth } from '@/contexts'
import {
  DatabaseType,
  ModalPropsType,
  RoleType,
  SelectedMemberType,
  TeamMemberType,
} from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

interface Props extends ModalPropsType {
  teamId: string
}

const AddMembersModal = ({ isVisible, setIsVisible }: Props) => {
  const supabase = createClientComponentClient<DatabaseType>()
  const { userProfile } = useAuth()
  const [membersWithoutTeam, setMembersWithoutTeam] = useState<
    TeamMemberType[]
  >([])
  const [isFetching, setIsFetching] = useState(true)
  const [selectedMembers, setSelectedMembers] = useState<SelectedMemberType[]>(
    [],
  )
  const [roles, setRoles] = useState<RoleType[]>([])

  const unselectedMembersWithoutTeam = membersWithoutTeam.filter(
    (member) =>
      !selectedMembers.find(
        (selectedMember) => selectedMember.profile === member,
      ),
  )

  const handleAddMembers = () => {}

  useEffect(() => {
    if (!isVisible || !userProfile) return

    const getMembersWithoutTeam = async () => {
      setIsFetching(true)

      const { data: membersData } = await supabase
        .from('profiles')
        .select(
          `
        *,
        role:roles (
          *
        )
      `,
        )
        .eq('organisation_id', userProfile.organisation_id)
        .is('team_id', null)

      if (membersData) {
        setMembersWithoutTeam(membersData)
      }

      const { data: rolesData } = await supabase
        .from('roles')
        .select(`*`)
        .eq('organisation_id', userProfile.organisation_id)

      if (rolesData) {
        setRoles(rolesData)
      }

      setSelectedMembers([])
      setIsFetching(false)
    }
    getMembersWithoutTeam()
  }, [supabase, userProfile, isVisible])

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <div className="flex flex-col gap-6">
        <Title>Add Members</Title>
        <SearchMemberInput
          members={unselectedMembersWithoutTeam}
          setSelectedMembers={(member: TeamMemberType) => {
            setSelectedMembers((prev) => [
              ...prev,
              {
                profile: member,
                role: member.role || null,
                type: 'team_member',
              },
            ])
          }}
        />
        <div className="flex flex-col">
          <TableHead>
            <TableHeadData width="16rem">Name</TableHeadData>
            <TableHeadData width="12rem">Role</TableHeadData>
          </TableHead>
          <ul className="min-w-[616px]">
            {isFetching
              ? 'Fetching...'
              : selectedMembers.map((selectedMember) => (
                  <SelectedMember
                    key={selectedMember.profile.id}
                    member={selectedMember}
                    roles={roles}
                    setSelectedMembers={setSelectedMembers}
                  />
                ))}
          </ul>
        </div>
        <div className="flex w-full items-center justify-between">
          <ButtonText onClick={() => setIsVisible(false)}>Cancel</ButtonText>
          <Button onClick={handleAddMembers}>Add Members</Button>
        </div>
      </div>
    </Modal>
  )
}

export default AddMembersModal
