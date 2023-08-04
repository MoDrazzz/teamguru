import { AuthError } from '@supabase/supabase-js'

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
  supabaseError: AuthError | null
}
