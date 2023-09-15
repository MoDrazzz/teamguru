'use client'

import { Alert } from '@/components'
import { useAuth } from '@/contexts'
import Link from 'next/link'

const AvatarReminder = () => {
  const { userProfile } = useAuth()

  if (!userProfile || userProfile.avatar_id) return null

  return (
    <Alert variant="info">
      Don{"'"}t you want some fancy avatar? Feel free to upload your own at{' '}
      <Link
        href="/shell/settings/profile"
        className="font-semibold underline transition-colors hover:text-sky-900"
      >
        settings/profile
      </Link>
      !
    </Alert>
  )
}

export default AvatarReminder
