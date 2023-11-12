'use client'

import { ChangeEvent, useState } from 'react'
import { Input } from '@/components'
import { useTeamsSearchContext } from '@/contexts'

const TeamsSearchInput = () => {
  const [inputValue, setInputValue] = useState('')
  const { teams, setQuery } = useTeamsSearchContext()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    setQuery(newValue)
    setInputValue(newValue)
  }

  return (
    <Input
      value={inputValue}
      onChange={handleInputChange}
      disabled={!teams.length}
      placeholder="Filter by team or member name..."
    />
  )
}

export default TeamsSearchInput
