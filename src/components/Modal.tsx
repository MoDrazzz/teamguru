'use client'

import { Icon } from '@/components'
import { ModalProps } from '@/types'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { PropsWithChildren, useEffect } from 'react'

interface Props extends PropsWithChildren, ModalProps {
  disableBackdropClick?: boolean
}

const Modal = ({
  isVisible,
  setIsVisible,
  disableBackdropClick,
  children,
}: Props) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVisible(false)
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [setIsVisible])

  return (
    isVisible && (
      <div
        className="fixed left-0 top-0 z-40 grid h-screen w-screen place-items-center bg-slate-900 bg-opacity-50 dark:bg-zinc-400 dark:bg-opacity-20"
        onClick={disableBackdropClick ? undefined : () => setIsVisible(false)}
      >
        <div
          className="relative rounded-lg bg-slate-50 p-12 dark:bg-zinc-900"
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            <Icon
              icon={faTimes}
              className="text-xl text-slate-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition-colors hover:text-slate-900"
            />
          </span>
          {children}
        </div>
      </div>
    )
  )
}

export default Modal
