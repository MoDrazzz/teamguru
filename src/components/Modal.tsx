'use client'

import { Icon } from '@/components'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, PropsWithChildren, SetStateAction, useEffect } from 'react'

interface Props extends PropsWithChildren {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ isVisible, setIsVisible, children }: Props) => {
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
        className="fixed left-0 top-0 z-40 grid h-screen w-screen place-items-center bg-slate-900 bg-opacity-50"
        onClick={() => setIsVisible(false)}
      >
        <div
          className="relative rounded-lg bg-slate-50 p-12"
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            <Icon icon={faTimes} className="text-xl" />
          </span>
          {children}
        </div>
      </div>
    )
  )
}

export default Modal
