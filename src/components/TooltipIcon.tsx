'use client'

import { Icon, Tooltip } from '@/components'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

interface Props {
  variant: 'info'
  tooltipMessage: string | string[]
}

const iconDefinitions = {
  info: faInfoCircle,
}

const TooltipIcon = ({ variant, tooltipMessage }: Props) => {
  const tooltipTargetRef = useRef(null)
  const icon = iconDefinitions[variant]

  return (
    <span className="relative flex w-fit" ref={tooltipTargetRef}>
      <Icon
        className="h-3 w-3 text-slate-500 transition-colors hover:text-slate-700"
        icon={icon}
      />
      <Tooltip tooltipTargetRef={tooltipTargetRef} message={tooltipMessage} />
    </span>
  )
}

export default TooltipIcon
