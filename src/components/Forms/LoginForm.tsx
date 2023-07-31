'use client'

import { FormEvent, useRef, useState } from 'react'
import { LoginErrors } from '@/types'
import { FormField, Label, Input, InputError, Button } from '@/components'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const initialErrorsState: LoginErrors = {
  email: '',
  password: '',
  supabaseError: null,
}

const LoginForm = () => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const [errors, setErrors] = useState(initialErrorsState)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!emailRef.current || !passwordRef.current) return

    const newErrors: LoginErrors = { ...initialErrorsState }

    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email.trim().length) {
      newErrors.email = 'No email address provided'
    }
    if (!password.trim().length) {
      newErrors.password = 'No password provided'
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors)
      return
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setErrors((prev) => ({ ...prev, supabaseError: error }))
      return
    }

    router.push('/shell')
  }

  return (
    <form className="grid gap-6 w-56 sm:w-80 justify-items-start">
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          refObj={emailRef}
          type="email"
          id="email"
          placeholder="Enter your email..."
          isError={!!errors.email || !!errors.supabaseError}
          onFocus={() => setErrors(initialErrorsState)}
          autocomplete="email"
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
          isError={!!errors.password || !!errors.supabaseError}
          onFocus={() => setErrors(initialErrorsState)}
          autocomplete="current-password"
        />
        <InputError
          message={errors.supabaseError?.message ?? errors.password}
        />
      </FormField>
      <Button onClick={handleSubmit} type="submit">
        Log In
      </Button>
    </form>
  )
}

export default LoginForm
