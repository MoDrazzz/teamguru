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
        className="fixed w-screen h-screen top-0 left-0 grid place-items-center z-40 bg-slate-900 bg-opacity-50"
        onClick={() => setIsVisible(false)}
      >
        <div
          className="relative bg-slate-50 rounded-lg p-12"
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
