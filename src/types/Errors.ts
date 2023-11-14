import { AuthError } from '@supabase/supabase-js'

export interface ErrorType {
  code?: number | string
  message: string
}

export interface LoginErrorsType {
  email: string
  password: string
  supabaseError: AuthError | null
}

export interface SignupErrorsType {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
  error: ErrorType | null
}
