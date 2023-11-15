import { Icon } from '@/components'
import { KebabMenuItemType } from '@/types'
import classNames from 'classnames'

const KebabMenuItem = ({
  label,
  icon,
  onClick,
  isRed = false,
}: KebabMenuItemType) => (
  <li
    className={classNames(
      'flex cursor-pointer items-center justify-end gap-3 rounded-md px-3 py-2 hover:bg-slate-200 dark:hover:bg-zinc-900',
      {
        'text-red-500 dark:text-red-600': isRed,
      },
    )}
    onClick={onClick}
  >
    <p className="whitespace-nowrap text-sm font-medium">{label}</p>
    <Icon className="text-xs" icon={icon} />
  </li>
)

export default KebabMenuItem
