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
        'absolute cursor-default left-1/2 top-full z-50 mt-1 w-max -translate-x-1/2 rounded-md bg-slate-800 px-3 py-2 transition-transform dark:bg-zinc-200',
        {
          'scale-100': isTooltipVisible,
          'scale-0': !isTooltipVisible,
        },
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <p
        className={classNames(
          'text-xs font-medium text-slate-100 dark:text-zinc-900',
          {
            'whitespace-pre-wrap text-center': isMessageArray,
          },
        )}
      >
        {isMessageArray ? message.join('\n') : message}
      </p>
    </span>
  )
}

export default Tooltip
