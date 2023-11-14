'use client'

import { IdentitySkeleton } from '@/components'
import { useAuth } from '@/contexts'

const Identity = () => {
  const { userProfile } = useAuth()

  if (!userProfile) return <IdentitySkeleton />

  return (
    <div className="grid justify-items-center gap-1">
      <p className="text-xs font-semibold">Logged as</p>
      <p className="text-center text-xl font-semibold">
        {userProfile.first_name} {userProfile.last_name}
      </p>
    </div>
  )
}

export default Identity
