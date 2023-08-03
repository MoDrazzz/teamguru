'use client'

import { Button, FormField, Input, Label } from '@/components'
import TooltipIcon from '@/components/TooltipIcon'
import { FormEvent, useRef } from 'react'

const SignupForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmationRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !firstNameRef.current ||
      !lastNameRef.current ||
      !emailRef.current ||
      !passwordRef.current ||
      !passwordConfirmationRef.current
    ) {
      return
    }

    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const passwordConfirmation = passwordConfirmationRef.current.value

    console.log({
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
    })
  }

  return (
    <form className="grid gap-6 justify-items-start">
      <div className="flex gap-4">
        <FormField>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            refObj={firstNameRef}
            id="firstName"
            placeholder="First name..."
            autocomplete="given-name"
          />
        </FormField>
        <FormField>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            refObj={lastNameRef}
            id="lastName"
            placeholder="Last name..."
            autocomplete="family-name"
          />
        </FormField>
      </div>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          refObj={emailRef}
          type="email"
          id="email"
          placeholder="Enter your email..."
          autocomplete="email"
        />
      </FormField>
      <FormField>
        <div className="flex items-center gap-2">
          <Label htmlFor="password">Password</Label>
          <TooltipIcon
            tooltipMessage={[
              'Password should be at least 8 characters long,',
              'including both uppercase and lowercase letters,',
              'at least one number and one special character.',
            ]}
            variant="info"
          />
        </div>
        <Input
          refObj={passwordRef}
          type="password"
          id="password"
          placeholder="Choose your password..."
          autocomplete="new-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="passwordConfirmation">Confirm Password</Label>
        <Input
          refObj={passwordConfirmationRef}
          type="password"
          id="passwordConfirmation"
          placeholder="Confirm your password..."
          autocomplete="new-password"
        />
      </FormField>
      <Button onClick={handleSubmit} type="submit">
        Sign Up
      </Button>
    </form>
  )
}

export default SignupForm
