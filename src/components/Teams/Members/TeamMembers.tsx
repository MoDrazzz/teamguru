'use client'

import {
  AddMembersModal,
  ArticleWrapper,
  ButtonAlt,
  InputAlt,
  PageHeading,
  Pagination,
  TableHead,
  TableHeadData,
  TeamFooter,
  TeamMember,
  Title,
} from '@/components'
import { TeamMemberType } from '@/types'
import {
  doesStartWithValue,
  filterMembersByName,
  sortTeamMembers,
  splitArray,
} from '@/utils'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent, useEffect, useState } from 'react'

interface Props {
  teamId: string
  members: TeamMemberType[]
}

const TeamMembers = ({ teamId, members }: Props) => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [filteredMembers, setFilteredMembers] = useState(members)
  const [isAddMembersModalVisible, setIsAddMembersModalVisible] =
    useState(false)
  const pages = splitArray(sortTeamMembers(filteredMembers), 4)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    setPage(1)

    const filteredMembersByName = filterMembersByName(members, newQuery)
    const filteredMembersByRole = members.filter((member) =>
      doesStartWithValue(member.role?.name || 'No role', newQuery),
    )

    // Delete duplicates using Set constructor
    setFilteredMembers([
      ...new Set(filteredMembersByName.concat(filteredMembersByRole)),
    ])
  }

  useEffect(() => {
    setPage(1)
    setQuery('')
    setFilteredMembers(members)
  }, [members])

  return (
    <ArticleWrapper>
      <Title>Members</Title>
      <div className="wrapper py-2">
        <div className="mb-3 grid grid-cols-2 items-center justify-items-end px-8 pt-3">
          <InputAlt
            value={query}
            onChange={handleSearch}
            placeholder="Search by name or role..."
          />
          <ButtonAlt
            onClick={() => setIsAddMembersModalVisible(true)}
            color="green"
            icon={faUserPlus}
          >
            Add members
          </ButtonAlt>
        </div>
        {pages.length ? (
          <>
            <TableHead>
              <TableHeadData width="16rem">Name</TableHeadData>
              <TableHeadData width="8rem">Role</TableHeadData>
            </TableHead>
            <ul className="h-[230px]">
              {pages[page - 1].map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </ul>
          </>
        ) : (
          <div className="grid h-[250px] w-[608px] place-items-center text-center">
            <PageHeading
              title="No Members Found"
              subtitle="There is no member with specified name or role."
              noSpacer
            />
          </div>
        )}
        <div className="px-8 py-3">
          <TeamFooter items={[`Members: ${members.length}`]}>
            <Pagination page={page} setPage={setPage} length={pages.length} />
          </TeamFooter>
        </div>
      </div>
      <AddMembersModal
        teamId={teamId}
        isVisible={isAddMembersModalVisible}
        setIsVisible={setIsAddMembersModalVisible}
      />
    </ArticleWrapper>
  )
}

export default TeamMembers
