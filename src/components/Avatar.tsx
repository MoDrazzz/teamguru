'use client'

import { AvatarSkeleton, Icon, Tooltip } from '@/components'
import { AvatarSizeType, DatabaseType, UserProfileType } from '@/types'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import classNames from 'classnames'
import Image from 'next/image'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'

interface Props {
  profile: UserProfileType
  size?: AvatarSizeType
  customSrc?: string
  isTeamLeader?: boolean
  withTooltip?: boolean
}

interface AvatarWrapperProps extends PropsWithChildren {
  isTeamLeader: boolean
  withTooltip: boolean
}

const AvatarWrapper = ({
  children,
  isTeamLeader,
  withTooltip,
}: AvatarWrapperProps) => {
  return isTeamLeader || withTooltip ? (
    <div className="relative">{children}</div>
  ) : (
    children
  )
}

const Avatar = ({
  profile,
  size = 'sm',
  customSrc,
  isTeamLeader = false,
  withTooltip = false,
}: Props) => {
  const supabase = createClientComponentClient<DatabaseType>()
  const [src, setSrc] = useState('/avatar-placeholder.png')
  const [isFetching, setIsFetching] = useState(false)
  const avatarRef = useRef(null)

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
    <AvatarWrapper isTeamLeader={isTeamLeader} withTooltip={withTooltip}>
      <Image
        src={customSrc || src}
        alt={`${name}'s Avatar`}
        className={classNames('rounded-lg', {
          'h-40 w-40': size === 'lg',
          'h-10 w-10': size === 'sm',
        })}
        width={size === 'lg' ? 160 : 40}
        height={size === 'lg' ? 160 : 40}
        ref={avatarRef}
      />
      {isTeamLeader && (
        <Icon
          icon={faCrown}
          className="absolute -left-2 -top-2 -rotate-45 text-lg text-yellow-500"
        />
      )}
      {withTooltip && <Tooltip tooltipTargetRef={avatarRef} message={name} />}
    </AvatarWrapper>
  )
}

export default Avatar
