'use client'

import { Input, MemberProfile, Menu, MenuItem } from '@/components'
import { TeamMemberType } from '@/types'
import { filterMembersByName } from '@/utils'
import { ChangeEvent, useEffect, useState } from 'react'

interface Props {
  members: TeamMemberType[]
  // eslint-disable-next-line no-unused-vars
  setSelectedMembers: (member: TeamMemberType) => void
}

const SearchMemberInput = ({ members, setSelectedMembers }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [filteredMembers, setFilteredMembers] =
    useState<TeamMemberType[]>(members)

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value

    setSearchInputValue(query)

    setFilteredMembers(filterMembersByName(members, query))
  }

  useEffect(() => {
    setSearchInputValue('')
    setFilteredMembers(members)
  }, [members])

  return (
    <div className="relative">
      <Input
        value={searchInputValue}
        onChange={handleSearchInputChange}
        onFocus={() => setIsMenuActive(true)}
        onBlur={() => setIsMenuActive(false)}
        placeholder="Search by name..."
      />
      <Menu isActive={isMenuActive}>
        {filteredMembers.length ? (
          filteredMembers.map((member) => (
            <MenuItem
              key={member.id}
              onClick={() => setSelectedMembers(member)}
            >
              <MemberProfile member={member} />
            </MenuItem>
          ))
        ) : (
          <p className="p-3 text-center font-medium">
            No members without team found.
          </p>
        )}
      </Menu>
    </div>
  )
}

export default SearchMemberInput
