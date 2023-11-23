'use client'

import { Icon, Tooltip } from '@/components'
import {
  faCircleExclamation,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { useRef } from 'react'

interface Props {
  variant: 'info' | 'error'
  tooltipMessage: string | string[]
}

const iconDefinitions = {
  info: faInfoCircle,
  error: faCircleExclamation,
}

const TooltipIcon = ({ variant, tooltipMessage }: Props) => {
  const tooltipTargetRef = useRef(null)
  const icon = iconDefinitions[variant]

  return (
    <span className="relative flex w-fit" ref={tooltipTargetRef}>
      <Icon
        className={classNames('text-base transition-colors', {
          'text-slate-500 hover:text-slate-700': variant === 'info',
          'dark:text-red-600 dark:hover:text-red-500 text-red-500 hover:text-red-600': variant === 'error',
        })}
        icon={icon}
      />
      <Tooltip tooltipTargetRef={tooltipTargetRef} message={tooltipMessage} />
    </span>
  )
}

export default TooltipIcon
