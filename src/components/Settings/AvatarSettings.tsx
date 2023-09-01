'use client'

import {
  Title,
  EditButton,
  Avatar,
  Dropzone,
  Modal,
  Cropper,
  Icon,
} from '@/components'
import { useAuth } from '@/contexts'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import { ReactCropperElement } from 'react-cropper'

const AvatarSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false)
  const [modalStep, setModalStep] = useState<'upload' | 'crop'>('upload')
  const [error, setError] = useState<string>('')
  const [newAvatarUrl, setNewAvatarUrl] = useState('')

  const cropperRef = useRef<ReactCropperElement>(null)
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

    setNewAvatarUrl(URL.createObjectURL(acceptedFiles[0]))
    setModalStep('crop')
  }

  useEffect(() => {
    if (!isUploadModalVisible) {
      setNewAvatarUrl('')
      setModalStep('upload')
    }
  }, [isUploadModalVisible])

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
          disableBackdropClick
        >
          {modalStep === 'upload' && (
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
          )}
          {modalStep === 'crop' && (
            <div className="flex flex-col gap-4">
              <div className="h-96 w-[512px] bg-slate-200">
                <Cropper
                  src={newAvatarUrl}
                  refObj={cropperRef}
                  aspectRatio={1 / 1}
                  minCropBoxWidth={384}
                  minCropBoxHeight={384}
                />
              </div>
              <div className="flex items-center justify-center gap-4 px-8 text-xl">
                <Icon icon={faImage} />
                <input
                  type="range"
                  className="w-full"
                  defaultValue={0}
                  min={1}
                  max={3}
                  step={0.01}
                  onChange={(e) => {
                    if (!cropperRef.current) return
                    const cropper = cropperRef.current.cropper
                    const newValue = Number(e.target.value)
                    cropper.scale(newValue)
                  }}
                />
                <Icon icon={faImage} className="text-3xl" />
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  )
}

export default AvatarSettings
