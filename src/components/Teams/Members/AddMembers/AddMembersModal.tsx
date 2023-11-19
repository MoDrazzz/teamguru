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
  PageHeading,
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
import classNames from 'classnames'
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
        <div
          className={classNames('min-h-[282px] min-w-[616px]', {
            'flex flex-col': selectedMembers.length,
            'grid place-items-center text-center':
              isFetching || !selectedMembers.length,
          })}
        >
          {isFetching || !selectedMembers.length ? (
            <PageHeading
              title={isFetching ? 'Fetching...' : 'No Members Selected'}
              subtitle={
                isFetching
                  ? 'We are preparing data for you. Please, stand by.'
                  : 'Select members you want to add using above search box.'
              }
              noSpacer
            />
          ) : (
            <>
              <TableHead>
                <TableHeadData width="16rem">Name</TableHeadData>
                <TableHeadData width="12rem">Role</TableHeadData>
              </TableHead>
              <ul>
                {selectedMembers.map((selectedMember) => (
                  <SelectedMember
                    key={selectedMember.profile.id}
                    member={selectedMember}
                    roles={roles}
                    setSelectedMembers={setSelectedMembers}
                  />
                ))}
              </ul>
            </>
          )}
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
