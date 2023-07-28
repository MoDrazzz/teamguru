import { AuthError } from '@supabase/supabase-js'

export interface LoginErrors {
  email: string
  password: string
  supabaseError: AuthError | null
}
