'use client'

import { AvatarSkeleton } from '@/components'
import { AvatarSize, UserProfile } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  profile: UserProfile
  size?: AvatarSize
  customSrc?: string
}

const Avatar = ({ profile, size = 'sm', customSrc }: Props) => {
  const supabase = createClientComponentClient()
  const [src, setSrc] = useState('/avatar-placeholder.png')
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if (customSrc || !profile.avatar_id?.length) return

    const getAvatar = async () => {
      setIsFetching(true)

      const { data: avatar, error } = await supabase.storage
        .from('public/avatars')
        .download(`${profile.id}/${profile.avatar_id}.png`)

      setIsFetching(false)

      if (!avatar || error) return

      setSrc(URL.createObjectURL(avatar))
    }
    getAvatar()
  }, [supabase, customSrc, profile])

  if (!profile || isFetching) return <AvatarSkeleton size={size} />

  const name = `${profile.first_name} ${profile.last_name}`

  return (
    <Image
      src={customSrc || src}
      alt={`${name}'s Avatar`}
      className={classNames('rounded-lg', {
        'h-40 w-40': size === 'lg',
        'h-10 w-10': size === 'sm',
      })}
      width={size === 'lg' ? 160 : 40}
      height={size === 'lg' ? 160 : 40}
    />
  )
}

export default Avatar
