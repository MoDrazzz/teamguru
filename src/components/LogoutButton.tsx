'use client'

import { Icon } from '@/components'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()

    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-slate-500"
    >
      <span className="flex w-7 items-center justify-center">
        <Icon
          icon={faSignOutAlt}
          className="group-hover:animate-wiggle text-xl"
        />
      </span>
      <p className="text-lg font-semibold">Logout</p>
    </button>
  )
}

export default LogoutButton
