'use client'

import { EditButton, FormField, InputAlt, Label, Title } from '@/components'
import { useAuth } from '@/contexts'
import { FormEvent, useEffect, useState } from 'react'

const PersonalInformationSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [isSaveDisabled, setIsSaveDisabled] = useState(true)
  const { userProfile } = useAuth()

  const initialFormValues = {
    firstName: userProfile?.first_name || '',
    lastName: userProfile?.last_name || '',
    bio: userProfile?.bio || '',
  }

  const [formValues, setFormValues] = useState(initialFormValues)

  useEffect(() => {
    if (!userProfile) return

    if (
      !formValues.firstName.trim().length ||
      !formValues.lastName.trim().length ||
      !formValues.bio.trim().length
    ) {
      setIsSaveDisabled(true)
      return
    }

    if (
      formValues.firstName.trim() === userProfile.first_name.trim() &&
      formValues.lastName.trim() === userProfile.last_name.trim() &&
      formValues.bio.trim() === userProfile.bio.trim()
    ) {
      setIsSaveDisabled(true)
      return
    }

    setIsSaveDisabled(false)
  }, [formValues, userProfile])

  const handleCancel = () => {
    setFormValues(initialFormValues)
    setIsEditMode(false)
  }

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsEditMode(false)
  }

  // TODO: add skeleton
  if (!userProfile) return null

  return (
    <form className="grid grid-cols-[12rem_12rem] gap-3">
      <div className="col-span-2 flex gap-4">
        <Title>Personal Information</Title>
        <EditButton
          isEditMode={isEditMode}
          isSaveDisabled={isSaveDisabled}
          editAction={() => setIsEditMode(true)}
          cancelAction={handleCancel}
          saveAction={handleSave}
        />
      </div>
      <FormField>
        <Label htmlFor="firstName">First Name</Label>
        <InputAlt
          id="firstName"
          placeholder="First name..."
          value={formValues.firstName}
          onChange={(event) =>
            setFormValues((prev) => ({
              ...prev,
              firstName: event.target.value,
            }))
          }
          disabled={!isEditMode}
          isError={false}
          onFocus={() => {}}
          autocomplete="given-name"
        />
      </FormField>
      <FormField>
        <Label htmlFor="lastName">Last Name</Label>
        <InputAlt
          id="lastName"
          placeholder="Last name..."
          value={formValues.lastName}
          onChange={(event) =>
            setFormValues((prev) => ({
              ...prev,
              lastName: event.target.value,
            }))
          }
          disabled={!isEditMode}
          isError={false}
          onFocus={() => {}}
          autocomplete="family-name"
        />
      </FormField>
      <FormField>
        <Label htmlFor="bio">Bio</Label>
        <InputAlt
          id="bio"
          placeholder="Bio..."
          value={formValues.bio}
          onChange={(event) =>
            setFormValues((prev) => ({
              ...prev,
              bio: event.target.value,
            }))
          }
          disabled={!isEditMode}
          isError={false}
          onFocus={() => {}}
        />
      </FormField>
    </form>
  )
}

export default PersonalInformationSettings
