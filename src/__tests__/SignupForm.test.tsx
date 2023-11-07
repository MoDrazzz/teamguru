import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { SignupForm } from '@/components'
import {
  EMPTY_INPUT_ERROR_REGEXP,
  emailValidationSamples,
  passwordValidationSamples,
} from '@/utils'

beforeAll(() => {
  vi.mock('next/navigation', () => require('next-router-mock'))
})

afterEach(() => {
  cleanup()
})

const searchForEmailInputError = () =>
  screen.queryByText('Invalid email address')
const searchForPasswordInputError = () =>
  screen.queryByText('Password is too weak')
const searchForPasswordMismatchError = () =>
  screen.queryByText('Passwords do not match')

describe('signup form validations', () => {
  it('detects every input is empty', () => {
    render(<SignupForm />)
    const submitButton = screen.getByRole('button', { name: "Sign Up" })

    fireEvent.click(submitButton)

    const emptyInputErrors = screen.queryAllByText(EMPTY_INPUT_ERROR_REGEXP)
    const repeatPasswordInputError = screen.getByText('Repeat password')

    expect(emptyInputErrors.length).toBe(4)
    expect(repeatPasswordInputError).toBeInTheDocument()
  })
  it('validates email correctly', () => {
    render(<SignupForm />)
    const emailInput = screen.getByLabelText('Email')
    const submitButton = screen.getByRole('button', { name: "Sign Up" })

    emailValidationSamples.forEach(({ value, isCorrect }) => {
      fireEvent.change(emailInput, { target: { value } })

      fireEvent.click(submitButton)

      isCorrect
        ? expect(searchForEmailInputError()).toBeNull()
        : expect(searchForEmailInputError()).toBeInTheDocument()
    })
  })
  it('validates password correctly', () => {
    render(<SignupForm />)
    const passwordInput = screen.getByLabelText('Password')
    const passwordConfirmationInput = screen.getByLabelText('Confirm Password')
    const submitButton = screen.getByRole('button', { name: "Sign Up" })

    passwordValidationSamples.forEach(({ value, isCorrect }) => {
      fireEvent.change(passwordInput, { target: { value } })
      fireEvent.change(passwordConfirmationInput, { target: { value } })

      fireEvent.click(submitButton)

      isCorrect
        ? expect(searchForPasswordInputError()).toBeNull()
        : expect(searchForPasswordInputError()).toBeInTheDocument()
    })
  })
  it('validates passwords matching', () => {
    render(<SignupForm />)
    const passwordInput = screen.getByLabelText('Password')
    const passwordConfirmationInput = screen.getByLabelText('Confirm Password')
    const submitButton = screen.getByRole('button', { name: "Sign Up" })

    fireEvent.change(passwordInput, { target: { value: 'f@dDv1#A' } })
    fireEvent.change(passwordConfirmationInput, {
      target: { value: 'f@dDv1#A' },
    })

    fireEvent.click(submitButton)
    expect(searchForPasswordMismatchError()).toBeNull()

    fireEvent.change(passwordInput, { target: { value: 'f@dDv1#A' } })
    fireEvent.change(passwordConfirmationInput, {
      target: { value: 'DifferentPassword' },
    })

    fireEvent.click(submitButton)
    expect(searchForPasswordMismatchError()).toBeInTheDocument()
  })
})
