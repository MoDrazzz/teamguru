'use client'

import { Icon } from '@/components'
import { DatabaseType } from '@/types'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
  const supabase = createClientComponentClient<DatabaseType>()
  const router = useRouter()

  const handleLogout = async () => {
    const html = document.querySelector('html')
    if (!html) return

    await supabase.auth.signOut()
    
    router.refresh()
    html.classList.remove('dark', 'light')
  }

  return (
    <button
      onClick={handleLogout}
      className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-slate-500 transition-colors hover:text-slate-600 dark:text-zinc-400 dark:hover:text-zinc-300"
    >
      <span className="flex w-7 items-center justify-center">
        <Icon
          icon={faSignOutAlt}
          className="text-xl group-hover:animate-wiggle"
        />
      </span>
      <p className="text-lg font-semibold">Logout</p>
    </button>
  )
}

export default LogoutButton
