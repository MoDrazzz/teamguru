'use client'

import classNames from 'classnames'
import { useRouter } from 'next/navigation'

interface Props {
  isClickable?: boolean
}

const Logo = ({ isClickable }: Props) => {
  const router = useRouter()

  return (
    <div
      onClick={isClickable ? () => router.push('/shell') : undefined}
      className={classNames('flex items-center justify-center gap-2 sm:gap-3', {
        'cursor-pointer': isClickable,
        'cursor-default': !isClickable,
      })}
    >
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-b from-primary-500 to-primary-600 sm:h-10 sm:w-10">
        <span className="text-sm font-semibold text-primary-50 sm:text-lg">
          TG
        </span>
      </div>
      <span className="text-lg font-semibold sm:text-2xl">TeamGuru</span>
    </div>
  )
}

export default Logo
