'use client'

import { EditButton, FormField, InputAlt, Label, Title } from '@/components'
import { useAuth } from '@/contexts'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { FormEvent, useEffect, useState } from 'react'

const PersonalInformationSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [isSaveDisabled, setIsSaveDisabled] = useState(true)
  const { userProfile } = useAuth()
  const supabase = createClientComponentClient()

  const initialFormValues = {
    firstName: userProfile?.first_name || '',
    lastName: userProfile?.last_name || '',
    bio: userProfile?.bio || '',
  }

  const [formValues, setFormValues] = useState(initialFormValues)

  useEffect(() => {
    if (!userProfile) return

    // is one of fields is empty?
    if (
      !formValues.firstName.trim().length ||
      !formValues.lastName.trim().length ||
      !formValues.bio.trim().length
    ) {
      setIsSaveDisabled(true)
      return
    }

    // is every field the same as in the database?
    if (
      formValues.firstName.trim() === userProfile.first_name.trim() &&
      formValues.lastName.trim() === userProfile.last_name.trim() &&
      formValues.bio.trim() === userProfile.bio.trim()
    ) {
      setIsSaveDisabled(true)
      return
    }

    setIsSaveDisabled(false)
  }, [formValues, userProfile, supabase])

  const handleCancel = () => {
    setFormValues(initialFormValues)
    setIsEditMode(false)
  }

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const updateUserProfile = async () => {
      await supabase
        .from('profiles')
        .update({
          first_name: formValues.firstName,
          last_name: formValues.lastName,
          bio: formValues.bio,
        })
        .eq('id', userProfile?.id)
    }

    updateUserProfile()

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
          placeholder="Bio... (eg. Team Lead)"
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
          autocomplete="organization-title"
        />
      </FormField>
    </form>
  )
}

export default PersonalInformationSettings
