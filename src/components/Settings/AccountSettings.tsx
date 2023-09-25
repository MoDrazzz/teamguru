'use client'

import { EditButton, FormField, InputAlt, Label, Title } from '@/components'
import { useState } from 'react'

const AccountSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [isSaveDisabled] = useState(true)

  // TODO: change default values
  const initialFormValues = {
    email: '',
    emailConfirmation: '',
    password: '',
    passwordConfirmation: '',
  }

  const [formValues, setFormValues] = useState(initialFormValues)

  const handleCancel = () => {}
  const handleSave = () => {}

  return (
    <form className="grid grid-cols-[12rem_12rem] gap-3">
      <div className="col-span-2 flex gap-4">
        <Title>Account Details</Title>
        <EditButton
          isEditMode={isEditMode}
          isSaveDisabled={isSaveDisabled}
          editAction={() => setIsEditMode(true)}
          cancelAction={handleCancel}
          saveAction={handleSave}
        />
      </div>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <InputAlt
          id="email"
          placeholder="Email..."
          value={formValues.email}
          onChange={(event) =>
            setFormValues((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
          disabled={!isEditMode}
          autocomplete="email"
        />
      </FormField>
      <FormField>
        <Label htmlFor="emailConfirmation">Confirm Email</Label>
        <InputAlt
          id="emailConfirmation"
          placeholder="Confirm email..."
          value={formValues.emailConfirmation}
          onChange={(event) =>
            setFormValues((prev) => ({
              ...prev,
              emailConfirmation: event.target.value,
            }))
          }
          disabled={!isEditMode}
          autocomplete="email"
        />
      </FormField>
      <FormField>
        <Label htmlFor="Password">New Password</Label>
        <InputAlt
          id="password"
          type="password"
          placeholder="New password..."
          value={formValues.password}
          onChange={(event) =>
            setFormValues((prev) => ({
              ...prev,
              password: event.target.value,
            }))
          }
          disabled={!isEditMode}
          autocomplete="new-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="passwordConfirmation">Confirm Password</Label>
        <InputAlt
          id="passwordConfirmation"
          type="password"
          placeholder="Confirm password..."
          value={formValues.passwordConfirmation}
          onChange={(event) =>
            setFormValues((prev) => ({
              ...prev,
              passwordConfirmation: event.target.value,
            }))
          }
          disabled={!isEditMode}
          autocomplete="new-password"
        />
      </FormField>
    </form>
  )
}

export default AccountSettings
