'use client'

import {
  Button,
  ButtonIcon,
  ButtonText,
  Input,
  MemberProfile,
  Modal,
  TableHead,
  TableHeadData,
  TeamMemberWrapper,
  Title,
} from '@/components'
import { useAuth } from '@/contexts'
import { DatabaseType, ModalPropsType, TeamMemberType } from '@/types'
import { faCrown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ChangeEvent, useEffect, useState } from 'react'

interface Props extends ModalPropsType {
  teamId: string
}

const AddMembersModal = ({ isVisible, setIsVisible }: Props) => {
  const supabase = createClientComponentClient<DatabaseType>()
  const { userProfile } = useAuth()
  const [searchInputValue, setSearchInputValue] = useState('')
  const [membersWithoutTeam, setMembersWithoutTeam] = useState<
    TeamMemberType[]
  >([])
  const [isFetching, setIsFetching] = useState(true)

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value)
  }
  const handleAddMembers = () => {}

  useEffect(() => {
    if (!isVisible || !userProfile) return

    const getMembersWithoutTeam = async () => {
      setIsFetching(true)

      const { data } = await supabase
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

      if (data) {
        setMembersWithoutTeam(data)
      }

      setIsFetching(false)
    }
    getMembersWithoutTeam()
  }, [supabase, userProfile, isVisible])

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <div className="flex flex-col gap-6">
        <Title>Add Members</Title>
        <Input
          value={searchInputValue}
          onChange={handleSearchInputChange}
          placeholder="Search by name..."
        />
        <div className="flex flex-col">
          <TableHead>
            <TableHeadData width="16rem">Name</TableHeadData>
            <TableHeadData width="12rem">Role</TableHeadData>
          </TableHead>
          <ul>
            {isFetching
              ? 'Fetching...'
              : membersWithoutTeam.map((member) => (
                  <TeamMemberWrapper key={member.id}>
                    <MemberProfile member={member} />
                    <span className="block w-48" />
                    <div className="flex w-14 items-center justify-center gap-3">
                      <ButtonIcon
                        onClick={() => {}}
                        icon={faCrown}
                        tooltipMessage="Mark as team leader"
                        className="text-slate-600 transition-colors group-hover:text-slate-700 dark:text-zinc-400 dark:group-hover:text-zinc-300"
                      />
                      <ButtonIcon
                        onClick={() => {}}
                        icon={faTrashAlt}
                        tooltipMessage="Delete member"
                        className="text-red-500 transition-colors group-hover:text-red-600 dark:text-red-600 dark:group-hover:text-red-500"
                      />
                    </div>
                  </TeamMemberWrapper>
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
