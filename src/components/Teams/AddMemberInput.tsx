'use client'

import { Input, MemberProfile } from '@/components'
import { TeamMemberType } from '@/types'
import { filterMembersByName } from '@/utils'
import { ChangeEvent, useState } from 'react'

interface Props {
  members: TeamMemberType[]
}

const AddMemberInput = ({ members }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [isListVisible, setIsListVisible] = useState(false)
  const [filteredMembers, setFilteredMembers] =
    useState<TeamMemberType[]>(members)

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value

    setSearchInputValue(query)

    setFilteredMembers(filterMembersByName(members, query))
  }

  return (
    <div className="relative">
      <Input
        value={searchInputValue}
        onChange={handleSearchInputChange}
        onFocus={() => setIsListVisible(true)}
        onBlur={() => setIsListVisible(false)}
        placeholder="Search by name..."
      />
      {isListVisible && (
        <ul className="absolute top-full z-20 mt-0.5 flex w-full flex-col gap-0.5 rounded-lg border-2 border-slate-400 bg-slate-50 p-1 shadow-main dark:border-zinc-600 dark:bg-zinc-800">
          {filteredMembers.length ? (
            filteredMembers.map((member) => (
              <li
                className="w-full cursor-pointer rounded-lg p-2 hover:bg-slate-200 dark:hover:bg-zinc-900"
                key={member.id}
              >
                <MemberProfile member={member} />
              </li>
            ))
          ) : (
            <p>No Members Found</p>
          )}
        </ul>
      )}
    </div>
  )
}

export default AddMemberInput
