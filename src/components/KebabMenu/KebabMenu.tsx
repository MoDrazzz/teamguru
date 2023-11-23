'use client'

import { KebabDot, KebabMenuItem } from '@/components'
import { useOutsideClick } from '@/hooks'
import { KebabMenuItemType } from '@/types'
import { useRef, useState } from 'react'

interface Props {
  items: KebabMenuItemType[]
}

const KebabMenu = ({ items }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const menuRef = useRef(null)
  const kebabRef = useRef(null)

  // Hide menu if user clicks outside of menu or kebab button, but only if it's active
  useOutsideClick([menuRef, kebabRef], () => setIsActive(false), !isActive)

  return (
    <div className="relative">
      <button
        ref={kebabRef}
        className="group flex flex-col gap-0.5 px-2 py-1"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <KebabDot isActive={isActive} />
        <KebabDot isActive={isActive} />
        <KebabDot isActive={isActive} />
      </button>
      {isActive && (
        <ul
          ref={menuRef}
          className="absolute right-0 top-full z-10 mt-1 rounded-md bg-slate-50 p-2 shadow-main dark:bg-zinc-800 dark:shadow-zinc-900"
        >
          {items.map((item, index) => (
            <KebabMenuItem key={index} setIsActive={setIsActive} {...item} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default KebabMenu
