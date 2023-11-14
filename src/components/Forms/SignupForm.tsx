'use client'

import {
  Alert,
  Button,
  ErrorModal,
  FormField,
  Icon,
  Input,
  InputError,
  Label,
  TooltipIcon,
} from '@/components'
import { SignupErrorsType } from '@/types'
import { isWithinOneMinute } from '@/utils'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { FormEvent, useRef, useState } from 'react'

const initialErrorsState: SignupErrorsType = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  error: null,
}

const emailRegex =
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/

const SignupForm = () => {
  const supabase = createClientComponentClient()

  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmationRef = useRef<HTMLInputElement>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState(initialErrorsState)
  const [isErrorsModalVisible, setIsErrorsModalVisible] = useState(false)
  const [success, setSuccess] = useState({
    isSuccess: false,
    firstName: '',
    email: '',
  })

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

  const handleResendEmail = async () => {
    if (!emailRef.current) {
      return
    }

    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: success.email,
    })

    if (error) {
      setErrors((prev) => ({
        ...prev,
        error: {
          code: error.status,
          message: error.message,
        },
      }))
      setIsErrorsModalVisible(true)
    } else {
      setSuccess((prev) => ({
        ...prev,
        isSuccess: false,
      }))
    }
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

    const newErrors: SignupErrorsType = { ...initialErrorsState }

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

    setErrors(initialErrorsState)
    setIsLoading(true)

    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signupError || !data.user) {
      setErrors((prev) => ({ ...prev, error: signupError }))
      setIsErrorsModalVisible(true)
      setIsLoading(false)
      return
    }

    // Check if user already exists (with their email confirmed)
    if (!data.user.identities?.length) {
      setErrors((prev) => ({
        ...prev,
        email: 'Email already associated with an existing account',
      }))
      setIsLoading(false)
      return
    }

    // Create user profile if account was created within the last minute or update it if it already exists (user signed up but didn't confirm their email)
    if (isWithinOneMinute(data.user.created_at)) {
      const { error: profilesInsertError } = await supabase
        .from('profiles')
        .insert({
          first_name: firstName,
          last_name: lastName,
          user_id: data.user.id,
        })

      if (profilesInsertError) {
        setErrors((prev) => ({
          ...prev,
          error: {
            code: profilesInsertError.code,
            message: profilesInsertError.message,
          },
        }))
        setIsErrorsModalVisible(true)
        setIsLoading(false)
        return
      }
    } else {
      const { error: profilesUpdateError } = await supabase
        .from('profiles')
        .update({
          first_name: firstName,
          last_name: lastName,
        })
        .eq('user_id', data.user.id)

      if (profilesUpdateError) {
        setErrors((prev) => ({
          ...prev,
          error: {
            code: profilesUpdateError.code,
            message: profilesUpdateError.message,
          },
        }))
        setIsErrorsModalVisible(true)
        setIsLoading(false)
        return
      }
    }
    // Signed Up Successfully
    setIsLoading(false)
    setErrors(initialErrorsState)
    clearForm()
    setSuccess({
      isSuccess: true,
      firstName,
      email,
    })
  }

  return (
    <form className="grid w-96 justify-items-start gap-6">
      <div className="flex w-full gap-4">
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
      <Button
        onClick={handleSubmit}
        disabled={isLoading}
        isLoading={isLoading}
        type="submit"
      >
        Sign Up
      </Button>
      {errors.error && (
        <ErrorModal
          error={{
            code: errors.error.code,
            message: errors.error.message,
          }}
          isVisible={isErrorsModalVisible}
          setIsVisible={setIsErrorsModalVisible}
        />
      )}
      {success.isSuccess && (
        <div className="absolute bottom-full left-0 mb-4 w-full">
          <Alert variant="info">
            Thank you for signing up, {success.firstName}! You’re almost there.
            Just click the link in the email we’ve sent to verify. Didn’t get
            it?{' '}
            <span
              className="cursor-pointer font-semibold"
              onClick={handleResendEmail}
            >
              Resend email <Icon icon={faPaperPlane} />
            </span>
          </Alert>
        </div>
      )}
    </form>
  )
}

export default SignupForm
