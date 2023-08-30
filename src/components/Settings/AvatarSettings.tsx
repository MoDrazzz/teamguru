'use client'

import { Title, EditButton, Avatar } from '@/components'
import { useAuth } from '@/contexts'
import { useState } from 'react'

const AvatarSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const { userProfile } = useAuth()

  const handleEdit = () => {
    setIsEditMode(true)
  }
  const handleSave = () => {
    setIsEditMode(false)
  }
  const handleCancel = () => {
    setIsEditMode(false)
  }

  // TODO: add skeleton
  if (!userProfile) return null

  return (
    <div className="grid gap-3">
      <div className="flex gap-4">
        <Title>Avatar</Title>
        <EditButton
          isEditMode={isEditMode}
          isSaveDisabled={false}
          editAction={handleEdit}
          saveAction={handleSave}
          cancelAction={handleCancel}
        />
      </div>
      <div className="flex gap-3">
        <Avatar
          name={`${userProfile.first_name} ${userProfile.last_name}`}
          url={userProfile.avatar_url}
          size="lg"
        />
      </div>
    </div>
  )
}

export default AvatarSettings
