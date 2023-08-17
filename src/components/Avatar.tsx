'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  name: string
  url: string
}

const Avatar = ({ name, url }: Props) => {
  const supabase = createClientComponentClient()
  const [src, setSrc] = useState<string>('/avatar-placeholder.png')

  useEffect(() => {
    const getAvatar = async () => {
      const { data: avatar, error } = await supabase.storage
        .from('public/avatars')
        .download(url)

      if (!avatar || error) return

      setSrc(URL.createObjectURL(avatar))
    }
    getAvatar()
  }, [supabase, url])

  return (
    <Image
      src={src}
      alt={`${name}'s Avatar`}
      className="rounded-lg w-10 h-10"
      width={40}
      height={40}
    />
  )
}

export default Avatar
