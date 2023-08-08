import { AuthError } from '@supabase/supabase-js'

export interface Error {
  code?: number | string
  message: string
}

export interface LoginErrors {
  email: string
  password: string
  supabaseError: AuthError | null
}

export interface SignupErrors {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
  error: Error | null
}
