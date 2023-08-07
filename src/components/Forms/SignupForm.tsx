'use client'

import { Button, FormField, Input, InputError, Label } from '@/components'
import TooltipIcon from '@/components/TooltipIcon'
import { SignupErrors } from '@/types/Errors'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { FormEvent, useRef, useState } from 'react'

const initialErrorsState: SignupErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  supabaseError: null,
}

const emailRegex =
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const SignupForm = () => {
  const supabase = createClientComponentClient()

  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmationRef = useRef<HTMLInputElement>(null)

  const [errors, setErrors] = useState(initialErrorsState)

  const clearForm = () => {
    if (
      !firstNameRef.current ||
      !lastNameRef.current ||
      !emailRef.current ||
      !passwordRef.current ||
      !passwordConfirmationRef.current
    ) {
      return
    }

    firstNameRef.current.value = ''
    lastNameRef.current.value = ''
    emailRef.current.value = ''
    passwordRef.current.value = ''
    passwordConfirmationRef.current.value = ''
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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

    const newErrors: SignupErrors = { ...initialErrorsState }

    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const passwordConfirmation = passwordConfirmationRef.current.value

    if (!firstName.trim().length) {
      newErrors.firstName = 'No first name provided'
    }
    if (!lastName.trim().length) {
      newErrors.lastName = 'No last name provided'
    }
    if (!email.trim().length) {
      newErrors.email = 'No email address provided'
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!password.trim().length) {
      newErrors.password = 'No password provided'
    } else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password is too weak'
    }
    if (!passwordConfirmation.trim().length) {
      newErrors.passwordConfirmation = 'Repeat password'
    } else if (passwordConfirmation !== password) {
      newErrors.passwordConfirmation = 'Passwords do not match'
    }

    if (
      newErrors.firstName ||
      newErrors.lastName ||
      newErrors.email ||
      newErrors.password ||
      newErrors.passwordConfirmation
    ) {
      setErrors(newErrors)
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error || !data.user) {
      setErrors((prev) => ({ ...prev, supabaseError: error }))
      // TODO: Handle error
      return
    }

    if (!data.user.identities?.length) {
      // There is an existing user with this email address
      // TODO: Handle error
      clearForm()
    }

    setErrors(initialErrorsState)

    // Signed Up Successfully
    clearForm()
    // TODO: Handle success
  }

  return (
    <form className="grid gap-6 justify-items-start w-96">
      <div className="flex gap-4 w-full">
        <FormField>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            refObj={firstNameRef}
            id="firstName"
            placeholder="First name..."
            autocomplete="given-name"
            isError={!!errors.firstName}
            onFocus={() => setErrors((prev) => ({ ...prev, firstName: '' }))}
          />
          <InputError message={errors.firstName} />
        </FormField>
        <FormField>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            refObj={lastNameRef}
            id="lastName"
            placeholder="Last name..."
            autocomplete="family-name"
            isError={!!errors.lastName}
            onFocus={() => setErrors((prev) => ({ ...prev, lastName: '' }))}
          />
          <InputError message={errors.lastName} />
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
          isError={!!errors.email}
          onFocus={() => setErrors((prev) => ({ ...prev, email: '' }))}
        />
        <InputError message={errors.email} />
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
          isError={!!errors.password}
          onFocus={() => setErrors((prev) => ({ ...prev, password: '' }))}
        />
        <InputError message={errors.password} />
      </FormField>
      <FormField>
        <Label htmlFor="passwordConfirmation">Confirm Password</Label>
        <Input
          refObj={passwordConfirmationRef}
          type="password"
          id="passwordConfirmation"
          placeholder="Confirm your password..."
          autocomplete="new-password"
          isError={!!errors.passwordConfirmation}
          onFocus={() =>
            setErrors((prev) => ({ ...prev, passwordConfirmation: '' }))
          }
        />
        <InputError message={errors.passwordConfirmation} />
      </FormField>
      <Button onClick={handleSubmit} type="submit">
        Sign Up
      </Button>
    </form>
  )
}

export default SignupForm
