'use client'

import { Title, EditButton, Avatar, Dropzone, Modal } from '@/components'
import { useAuth } from '@/contexts'
import { useState } from 'react'

const AvatarSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false)
  const [error, setError] = useState<string>('')
  const { userProfile } = useAuth()

  const handleEdit = () => {
    setIsUploadModalVisible(true)
    setError('')
  }
  const handleSave = () => {
    setIsEditMode(false)
  }
  const handleCancel = () => {
    setIsEditMode(false)
  }
  const handleDrop = (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return

    if (acceptedFiles[0].size > 5 * 1024 * 1024) {
      setIsUploadModalVisible(false)
      setError('Image is too big. Maximum file size is 5MB.')
      return
    }

    setIsUploadModalVisible(false)
    setIsEditMode(true)
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
      <Avatar
        name={`${userProfile.first_name} ${userProfile.last_name}`}
        url={userProfile.avatar_url}
        size="lg"
      />
      {error && <p className="text-sm font-semibold text-red-500">{error}</p>}
      {isUploadModalVisible && (
        <Modal
          isVisible={isUploadModalVisible}
          setIsVisible={setIsUploadModalVisible}
        >
          <div className="h-64 w-64">
            <Dropzone
              onDrop={handleDrop}
              accept={{
                'image/png': ['.png'],
                'image/jpeg': ['.jpeg'],
                'image/jpg': ['.jpg'],
              }}
              multiple={false}
              label="Drag and drop new avatar here, or click to open file dialog"
            />
          </div>
        </Modal>
      )}
    </div>
  )
}

export default AvatarSettings
