'use client'

import {
  AvatarSettingsSkeleton,
  Title,
  EditButton,
  Avatar,
  Dropzone,
  Modal,
  Cropper,
  Icon,
  Button,
  Spinner,
} from '@/components'
import { useAuth } from '@/contexts'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { v4 as generateUUID } from 'uuid'
import { useEffect, useRef, useState } from 'react'
import { ReactCropperElement } from 'react-cropper'

const AvatarSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false)
  const [modalStep, setModalStep] = useState<'upload' | 'crop'>('upload')
  const [error, setError] = useState<string>('')
  const [uploadedAvatarUrl, setUploadedAvatarUrl] = useState('')
  const [newAvatar, setNewAvatar] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const cropperRef = useRef<ReactCropperElement>(null)
  const { userProfile } = useAuth()

  const supabase = createClientComponentClient()

  const handleEdit = () => {
    setIsUploadModalVisible(true)
    setError('')
  }
  const handleSave = async () => {
    if (!newAvatar || !userProfile) return

    const newAvatarId = generateUUID()

    setIsUploading(true)

    const { data: avatarData, error: avatarError } = await supabase.storage
      .from('avatars')
      .upload(`${userProfile.id}/${newAvatarId}.png`, newAvatar)

    if (!avatarData || avatarError) {
      setError('Something went wrong. Please try again.')
      return
    }

    await supabase
      .from('profiles')
      .update({
        avatar_id: newAvatarId,
      })
      .eq('id', userProfile.id)

    setIsUploading(false)
    setIsEditMode(false)
  }
  const handleCancel = () => {
    setIsEditMode(false)
    setNewAvatar(null)
  }
  const handleDrop = (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return

    if (acceptedFiles[0].size > 5 * 1024 * 1024) {
      setIsUploadModalVisible(false)
      setError('Image is too big. Maximum file size is 5MB.')
      return
    }

    setUploadedAvatarUrl(URL.createObjectURL(acceptedFiles[0]))
    setModalStep('crop')
  }
  const handleCrop = ({ isSkipped }: { isSkipped: boolean }) => {
    if (!cropperRef.current) return

    const cropper = isSkipped
      ? cropperRef.current.cropper.reset()
      : cropperRef.current.cropper

    cropper.getCroppedCanvas().toBlob((blob) => {
      if (!blob) return

      const avatar = new File([blob], `${Date.now()}.png`, {
        type: 'image/png',
      })

      setNewAvatar(avatar)
      setIsUploadModalVisible(false)
      setModalStep('upload')
      setUploadedAvatarUrl('')
      setIsEditMode(true)
    })
  }

  useEffect(() => {
    if (!isUploadModalVisible) {
      setUploadedAvatarUrl('')
      setModalStep('upload')
    }
  }, [isUploadModalVisible])

  if (!userProfile) return <AvatarSettingsSkeleton />

  return (
    <div className="grid gap-3">
      <div className="flex gap-4">
        <Title>Avatar</Title>
        <EditButton
          isEditMode={isEditMode}
          isSaveDisabled={isUploading}
          editAction={handleEdit}
          saveAction={handleSave}
          cancelAction={handleCancel}
        />
      </div>
      {newAvatar ? (
        <div className="relative w-fit">
          <Avatar
            profile={userProfile}
            customSrc={URL.createObjectURL(newAvatar)}
            size="lg"
          />
          {isUploading && (
            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-slate-900 bg-opacity-50">
              <Spinner />
              <p className="text-sm font-medium text-slate-50">Uploading...</p>
            </div>
          )}
        </div>
      ) : (
        <Avatar profile={userProfile} size="lg" />
      )}
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
                  src={uploadedAvatarUrl}
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
              <div className="flex justify-between">
                <Button
                  color="red"
                  onClick={() => handleCrop({ isSkipped: true })}
                >
                  Skip
                </Button>
                <Button onClick={handleCrop}>Confirm</Button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  )
}

export default AvatarSettings
