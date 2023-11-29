'use client'

import { Icon, Tooltip } from '@/components'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useRef } from 'react'

interface Props {
  onClick: () => void
  icon: IconProp
  tooltipMessage: string
  className: string
}

const ButtonIcon = ({ onClick, icon, tooltipMessage, className }: Props) => {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="group relative flex cursor-pointer p-0.5"
    >
      <Icon
        icon={icon}
        className={className}
      />
      <Tooltip tooltipTargetRef={ref} message={tooltipMessage} />
    </div>
  )
}

export default ButtonIcon
