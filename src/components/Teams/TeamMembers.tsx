'use client'

import {
  ArticleWrapper,
  ButtonAlt,
  InputAlt,
  Pagination,
  TableHead,
  TableHeadData,
  TeamFooter,
  TeamMember,
  Title,
} from '@/components'
import { TeamMemberType } from '@/types'
import { splitArray } from '@/utils'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface Props {
  members: TeamMemberType[]
}

const TeamMembers = ({ members }: Props) => {
  const [page, setPage] = useState(1)
  const pages = splitArray(members, 4)

  const handleAddMember = () => {}

  return (
    <ArticleWrapper>
      <Title>Members</Title>
      <div className="wrapper py-2">
        <div className="grid grid-cols-2 items-center justify-items-end px-8 pt-3">
          <InputAlt
            value=""
            onChange={() => {}}
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
          {pages[page - 1].map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
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
