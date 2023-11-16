import { Icon } from '@/components'
import { KebabMenuItemType } from '@/types'
import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'

interface Props extends KebabMenuItemType {
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const KebabMenuItem = ({
  label,
  icon,
  onClick,
  isRed = false,
  setIsActive,
}: Props) => {
  const handleClick = () => {
    setIsActive(false)

    onClick()
  }

  return (
    <li
      className={classNames(
        'flex cursor-pointer items-center justify-end gap-3 rounded-md px-3 py-2 hover:bg-slate-200 dark:hover:bg-zinc-900',
        {
          'text-red-500 dark:text-red-600': isRed,
        },
      )}
      onClick={handleClick}
    >
      <p className="select-none whitespace-nowrap text-sm font-medium">
        {label}
      </p>
      <Icon className="text-xs" icon={icon} />
    </li>
  )
}

export default KebabMenuItem
