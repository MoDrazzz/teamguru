'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Session, User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface AuthContextValue {
  session: Session | null
  user: User | null
  logout: () => Promise<void>
}

const Context = createContext<AuthContextValue>({
  session: null,
  user: null,
  logout: async () => {},
})

const AuthContext = ({ children }: PropsWithChildren) => {
  const supabase = createClientComponentClient()
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const router = useRouter()

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      setSession(session)
      setUser(session?.user ?? null)
    }

    getSession()

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })
  }, [supabase.auth])

  const logout = async () => {
    router.replace('/')
    await supabase.auth.signOut()
  }

  return (
    <Context.Provider
      value={{
        user,
        session,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => useContext(Context)

export default AuthContext
