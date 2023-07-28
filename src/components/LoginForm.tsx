'use client'

import { FormEvent, useRef, useState } from 'react'
import Button from './Button'
import FormField from './FormField'
import Input from './Input'
import Label from './Label'
import InputError from './InputError'
import { LoginErrors } from '@/types'

const initialErrorsState: LoginErrors = { email: '', password: '' }

export default function LoginForm() {
  const [errors, setErrors] = useState(initialErrorsState)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newErrors: LoginErrors = { ...initialErrorsState }

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (!email?.trim().length) {
      newErrors.email = 'No email address provided'
    }
    if (!password?.trim().length) {
      newErrors.password = 'No password provided'
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors)
      return
    }
  }

  return (
    <form className="grid gap-6 w-80 justify-items-start">
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          refObj={emailRef}
          type="email"
          id="email"
          placeholder="Enter your email..."
          isError={!!errors.email}
          onFocus={() => setErrors((prev) => ({ ...prev, email: '' }))}
        />
        <InputError message={errors.email} />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          refObj={passwordRef}
          type="password"
          id="password"
          placeholder="Enter your password..."
          isError={!!errors.password}
          onFocus={() => setErrors((prev) => ({ ...prev, password: '' }))}
        />
        <InputError message={errors.password} />
      </FormField>
      <Button onClick={handleSubmit} type="submit">
        Log In
      </Button>
    </form>
  )
}
