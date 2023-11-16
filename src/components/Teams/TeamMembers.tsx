'use client'

import {
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
import { sortTeamMembers, splitArray } from '@/utils'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent, useState } from 'react'

interface Props {
  members: TeamMemberType[]
}

const TeamMembers = ({ members }: Props) => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [filteredMembers, setFilteredMembers] = useState(members)
  const pages = splitArray(sortTeamMembers(filteredMembers), 4)

  const handleAddMember = () => {}
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    setPage(1)

    const doesStartWithQuery = (string: string) =>
      string.toLowerCase().startsWith(newQuery.toLowerCase())

    const filteredMembersByName = members.filter(
      (member) =>
        doesStartWithQuery(member.first_name) ||
        doesStartWithQuery(member.last_name) ||
        doesStartWithQuery(`${member.first_name} ${member.last_name}`),
    )
    const filteredMembersByRole = members.filter((member) =>
      doesStartWithQuery(member.role?.name || 'No role'),
    )

    // Delete duplicates using Set constructor
    setFilteredMembers([
      ...new Set(filteredMembersByName.concat(filteredMembersByRole)),
    ])
  }

  return (
    <ArticleWrapper>
      <Title>Members</Title>
      <div className="wrapper py-2">
        <div className="grid grid-cols-2 items-center justify-items-end px-8 pt-3">
          <InputAlt
            value={query}
            onChange={handleSearch}
            placeholder="Search by name or role..."
          />
          <ButtonAlt onClick={handleAddMember} color="green" icon={faUserPlus}>
            Add members
          </ButtonAlt>
        </div>
        <TableHead>
          <TableHeadData width="16rem">Name</TableHeadData>
          <TableHeadData width="8rem">Role</TableHeadData>
        </TableHead>
        <ul className="h-[230px]">
          {pages.length ? (
            pages[page - 1].map((member) => (
              <TeamMember key={member.id} member={member} />
            ))
          ) : (
            <div className="grid h-full w-[608px] place-items-center text-center">
              <PageHeading
                title="No Members Found"
                subtitle="There is no member with specified name or role."
                noSpacer
              />
            </div>
          )}
        </ul>
        <div className="px-8 py-3">
          <TeamFooter items={[`Members: ${members.length}`]}>
            <Pagination page={page} setPage={setPage} length={pages.length} />
          </TeamFooter>
        </div>
      </div>
    </ArticleWrapper>
  )
}

export default TeamMembers
