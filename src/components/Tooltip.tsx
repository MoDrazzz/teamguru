'use client'

import classNames from 'classnames'
import { RefObject, useEffect, useState } from 'react'

interface Props {
  tooltipTargetRef: RefObject<HTMLElement>
  message: string | string[]
}

const Tooltip = ({ tooltipTargetRef, message }: Props) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const isMessageArray = Array.isArray(message)

  useEffect(() => {
    const tooltipTarget = tooltipTargetRef.current

    if (!tooltipTarget) return

    const handleMouseEnter = () => {
      setIsTooltipVisible(true)
    }
    const handleMouseLeave = () => {
      setIsTooltipVisible(false)
    }

    tooltipTarget.addEventListener('mouseenter', handleMouseEnter)
    tooltipTarget.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      tooltipTarget.removeEventListener('mouseenter', handleMouseEnter)
      tooltipTarget.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [tooltipTargetRef])

  return (
    <span
      className={classNames(
        'absolute z-50 left-1/2 -translate-x-1/2 top-full mt-1 w-max px-3 py-2 rounded-md bg-slate-800 transition-transform',
        {
          'scale-100': isTooltipVisible,
          'scale-0': !isTooltipVisible,
        },
      )}
    >
      <p
        className={classNames('text-xs font-medium text-slate-50', {
          'text-center whitespace-pre-wrap': isMessageArray,
        })}
      >
        {isMessageArray ? message.join('\n') : message}
      </p>
    </span>
  )
}

export default Tooltip
