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
  TooltipIcon,
  AddMembersModalSkeleton,
} from '@/components'
import { useAuth } from '@/contexts'
import {
  DatabaseType,
  ModalPropsType,
  RoleType,
  SelectedMemberType,
  TeamMemberType,
} from '@/types'
import { sortTeamMembers } from '@/utils'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

interface Props extends ModalPropsType {
  teamId: string
}

const AddMembersModal = ({ isVisible, setIsVisible, teamId }: Props) => {
  const supabase = createClientComponentClient<DatabaseType>()
  const { userProfile } = useAuth()
  const [membersWithoutTeam, setMembersWithoutTeam] = useState<
    TeamMemberType[]
  >([])
  const [isFetching, setIsFetching] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
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

  const handleAddMembers = async () => {
    setIsLoading(true)

    for (const selectedMember of selectedMembers) {
      await supabase
        .from('profiles')
        .update({
          team_id: teamId,
          type: selectedMember.type,
          role_id: selectedMember.role?.id || null,
        })
        .eq('id', selectedMember.profile.id)
    }

    setIsVisible(false)
    setIsLoading(false)
  }

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
      {isFetching ? (
        <AddMembersModalSkeleton />
      ) : (
        <div className="flex flex-col gap-6">
          <Title>Add Members</Title>
          <SearchMemberInput
            members={sortTeamMembers(unselectedMembersWithoutTeam)}
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
              'grid place-items-center text-center': !selectedMembers.length,
            })}
          >
            {!selectedMembers.length ? (
              <PageHeading
                title="No Members Selected"
                subtitle="Select members you want to add using above search box."
                noSpacer
              />
            ) : (
              <>
                <TableHead>
                  <TableHeadData width="16rem">Name</TableHeadData>
                  <TableHeadData width="12rem">
                    {!roles.length ? (
                      <span className="flex items-center gap-2">
                        Role
                        <TooltipIcon
                          variant="error"
                          tooltipMessage={[
                            "You haven't set up any roles yet. To do this,",
                            "go to the organisation tab. It's a good idea",
                            'to do this before adding team members.',
                          ]}
                        />
                      </span>
                    ) : (
                      'Role'
                    )}
                  </TableHeadData>
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
            <Button
              isLoading={isLoading}
              disabled={!selectedMembers.length}
              onClick={handleAddMembers}
            >
              Add Members
            </Button>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default AddMembersModal
