'use client'

import { Icon, Tooltip } from '@/components'
import { UserProfileType } from '@/types'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

interface Props {
  receiver: UserProfileType['id']
}

const MessageIcon = ({ receiver }: Props) => {
  const router = useRouter()
  const ref = useRef(null)

  const handleDirectMessage = () => {
    router.push(`/shell/messages/${receiver}`)
  }

  return (
    <div
      ref={ref}
      onClick={handleDirectMessage}
      className="group relative flex cursor-pointer p-0.5"
    >
      <Icon
        icon={faEnvelope}
        className="text-xl text-slate-600 transition-colors group-hover:text-slate-700 dark:text-zinc-400 dark:group-hover:text-zinc-300"
      />
      <Tooltip tooltipTargetRef={ref} message="Direct Message" />
    </div>
  )
}

export default MessageIcon
