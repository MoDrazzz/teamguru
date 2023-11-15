'use client'

import { Icon } from '@/components'
import { UserProfileType } from '@/types'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

interface Props {
  receiver: UserProfileType['id']
}

const MessageIcon = ({ receiver }: Props) => {
  const router = useRouter()

  const handleDirectMessage = () => {
    router.push(`/shell/messages/${receiver}`)
  }

  return (
    <Icon
      icon={faEnvelope}
      className="cursor-pointer text-xl text-slate-600 transition-colors hover:text-slate-700 dark:text-zinc-400 dark:hover:text-zinc-300"
      onClick={handleDirectMessage}
    />
  )
}

export default MessageIcon
