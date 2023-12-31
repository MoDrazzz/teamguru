'use client'

import { DatabaseType, UserProfileType } from '@/types'
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
  userProfile: UserProfileType | null
  logout: () => Promise<void>
}

const Context = createContext<AuthContextValue>({
  session: null,
  user: null,
  userProfile: null,
  logout: async () => {},
})

const AuthContext = ({ children }: PropsWithChildren) => {
  const supabase = createClientComponentClient<DatabaseType>()
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfileType | null>(null)
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

  useEffect(() => {
    if (!user) {
      return
    }

    const getUserProfile = async () => {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (error) {
        await supabase.auth.signOut()
      }

      if (profile) {
        setUserProfile(profile)
      }
    }

    getUserProfile()

    const profileChannel = supabase
      .channel('realtime profile')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles',
          filter: `user_id=eq.${user.id}`,
        },
        getUserProfile,
      )
      .subscribe()

    return () => {
      supabase.removeChannel(profileChannel)
    }
  }, [user, supabase])

  const logout = async () => {
    router.replace('/')
    await supabase.auth.signOut()
  }

  return (
    <Context.Provider
      value={{
        user,
        userProfile,
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
