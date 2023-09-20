'use client'

import { IdentitySkeleton } from '@/components'
import { useAuth } from '@/contexts'

const Identity = () => {
  const { userProfile } = useAuth()

  if (!userProfile) return <IdentitySkeleton />

  return (
    <div className="grid justify-items-center gap-1 dark:text-zinc-200">
      <p className="text-xs font-semibold">Logged as</p>
      <p className="text-xl font-semibold text-center">
        {userProfile.first_name} {userProfile.last_name}
      </p>
    </div>
  )
}

export default Identity
