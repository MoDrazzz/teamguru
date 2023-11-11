'use client'

import { AvatarSkeleton, Icon } from '@/components'
import { AvatarSize, UserProfile } from '@/types'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import classNames from 'classnames'
import Image from 'next/image'
import { PropsWithChildren, useEffect, useState } from 'react'

interface Props {
  profile: UserProfile
  size?: AvatarSize
  customSrc?: string
  isTeamLeader?: boolean
}

interface AvatarWrapperProps extends PropsWithChildren {
  isTeamLeader?: boolean
}

const AvatarWrapper = ({ children, isTeamLeader }: AvatarWrapperProps) => {
  return isTeamLeader ? (
    <div className="relative">
      {children}
      <Icon
        icon={faCrown}
        className="absolute -left-2 -top-2 -rotate-45 text-lg text-yellow-500"
      />
    </div>
  ) : (
    children
  )
}

const Avatar = ({ profile, size = 'sm', customSrc, isTeamLeader }: Props) => {
  const supabase = createClientComponentClient()
  const [src, setSrc] = useState('/avatar-placeholder.png')
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if (customSrc || !profile.avatar_id?.length) {
      setSrc('/avatar-placeholder.png')
      return
    }

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
    <AvatarWrapper isTeamLeader={isTeamLeader}>
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
    </AvatarWrapper>
  )
}

export default Avatar
