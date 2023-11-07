import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { LoginForm } from '@/components'

beforeAll(() => {
  vi.mock('next/navigation', () => require('next-router-mock'))
})

afterEach(() => {
  cleanup()
})

const EMPTY_INPUT_REGEXP = /No\s(.+?)\sprovided/

describe('login form validations', () => {
  describe('empty input(s)', () => {
    it('detects both inputs are empty', () => {
      render(<LoginForm />)
      const submitButton = screen.getByRole('button', { name: /Log In/i })

      fireEvent.click(submitButton)

      const emptyInputErrors = screen.queryAllByText(EMPTY_INPUT_REGEXP)

      expect(emptyInputErrors.length).toBe(2)
    })

    it('detects one of the inputs is empty', () => {
      render(<LoginForm />)
      const emailInput = screen.getByLabelText('Email')
      const passwordInput = screen.getByLabelText('Password')
      const submitButton = screen.getByRole('button', { name: /Log In/i })

      if (Math.random() > 0.5) {
        fireEvent.change(emailInput, { target: { value: 'email@example.com' } })
      } else {
        fireEvent.change(passwordInput, {
          target: { value: 'f@dDv1#A' },
        })
      }

      fireEvent.click(submitButton)

      const emptyInputErrors = screen.queryAllByText(EMPTY_INPUT_REGEXP)

      expect(emptyInputErrors.length).toBe(1)
    })

    it('detects no empty inputs', () => {
      render(<LoginForm />)
      const emailInput = screen.getByLabelText('Email')
      const passwordInput = screen.getByLabelText('Password')
      const submitButton = screen.getByRole('button', { name: /Log In/i })

      fireEvent.change(emailInput, { target: { value: 'email@example.com' } })
      fireEvent.change(passwordInput, {
        target: { value: 'f@dDv1#A' },
      })

      fireEvent.click(submitButton)

      const emptyInputErrors = screen.queryAllByText(EMPTY_INPUT_REGEXP)

      expect(emptyInputErrors.length).toBe(0)
    })
  })
})