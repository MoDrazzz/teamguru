'use client'

import { ButtonIcon } from '@/components'
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
    <ButtonIcon
      onClick={handleDirectMessage}
      icon={faEnvelope}
      tooltipMessage="Direct Message"
      className="text-xl text-slate-600 transition-colors group-hover:text-slate-700 dark:text-zinc-400 dark:group-hover:text-zinc-300"
    />
  )
}

export default MessageIcon
