'use client'

import { FormEvent, useRef } from 'react'
import Button from './Button'
import FormField from './FormField'
import Input from './Input'
import Label from './Label'

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          refObj={passwordRef}
          type="password"
          id="password"
          placeholder="Enter your password..."
        />
      </FormField>
      <Button onClick={handleSubmit} type="submit">
        Log In
      </Button>
    </form>
  )
}
