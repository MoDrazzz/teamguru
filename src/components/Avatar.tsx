'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  name: string
  url?: string
  size?: 'sm' | 'lg'
  src?: string
}

const Avatar = ({ name, url, size = 'sm', src: srcProp }: Props) => {
  const supabase = createClientComponentClient()
  const [src, setSrc] = useState<string>('/avatar-placeholder.png')

  useEffect(() => {
    if (srcProp || !url) return

    const getAvatar = async () => {
      const { data: avatar, error } = await supabase.storage
        .from('public/avatars')
        .download(url)

      if (!avatar || error) return

      setSrc(URL.createObjectURL(avatar))
    }
    getAvatar()
  }, [supabase, url, srcProp])

  return (
    <Image
      src={srcProp || src}
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
