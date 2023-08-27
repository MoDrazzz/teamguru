'use client'

import { EditButton, Title } from '@/components'
import { useState } from 'react'

const PersonalInformationSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <div className="grid grid-cols-[12rem_12rem] gap-3">
      <div className="col-span-2 flex gap-4">
        <Title>Personal Information</Title>
        <EditButton
          isEditMode={isEditMode}
          isSaveDisabled={false}
          editAction={() => setIsEditMode(true)}
          cancelAction={() => setIsEditMode(false)}
          saveAction={() => setIsEditMode(false)}
        />
      </div>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
    </div>
  )
}

export default PersonalInformationSettings
