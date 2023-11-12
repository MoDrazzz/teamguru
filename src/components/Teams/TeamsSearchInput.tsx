'use client'

import { useRef } from 'react'
import { Input } from '@/components'

const TeamsSearchInput = () => {
  const inputRef = useRef(null)

  return (
    <Input
      refObj={inputRef}
      placeholder="Filter by team or member name..."
    />
  )
}

export default TeamsSearchInput
