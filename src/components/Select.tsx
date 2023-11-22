'use client'

import { Icon, Menu, MenuItem } from '@/components'
import { useOutsideClick } from '@/hooks'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { useRef, useState } from 'react'

type Item = string

interface Props {
  items: Item[]
  selectedItem: Item | null
  // eslint-disable-next-line no-unused-vars
  setSelectedItem: (item: Item | null) => void
  id?: string
  disabled?: boolean
  emptySelection?: string
}

const Select = ({
  items,
  selectedItem,
  setSelectedItem,
  id,
  disabled,
  emptySelection,
}: Props) => {
  const [isActive, setIsActive] = useState(false)
  const selectRef = useRef(null)
  const menuRef = useRef(null)

  useOutsideClick([selectRef, menuRef], () => setIsActive(false), !isActive)

  const handleSelectItem = (item: Item | null) => {
    setSelectedItem(item)
    setIsActive(false)
  }

  return (
    <div className="relative w-full" id={id}>
      <div
        ref={selectRef}
        className={classNames(
          'flex w-full cursor-pointer items-center justify-between rounded-lg border-2  px-3 py-2',
          {
            'border-slate-600 dark:border-zinc-400': isActive,
            'border-slate-400 dark:border-zinc-500': !isActive,
            'pointer-events-none opacity-70': disabled,
          },
        )}
        onClick={!disabled ? () => setIsActive((prev) => !prev) : undefined}
      >
        <p className="text-sm font-medium">{selectedItem || emptySelection}</p>
        <Icon
          icon={faAngleDown}
          className={classNames(
            'text-slate-800 transition-transform duration-300 dark:text-zinc-200',
            {
              'rotate-180': isActive,
            },
          )}
        />
      </div>
      <Menu refObj={menuRef} isActive={isActive}>
        {emptySelection && (
          <MenuItem
            highlight={selectedItem === null}
            onClick={() => handleSelectItem(null)}
          >
            <p className="text-sm font-medium">{emptySelection}</p>
          </MenuItem>
        )}
        {items.map((item, index) => (
          <MenuItem
            highlight={selectedItem === item}
            onClick={() => handleSelectItem(item)}
            key={index}
          >
            <p className="text-sm font-medium">{item}</p>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default Select
