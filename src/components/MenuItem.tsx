import classNames from 'classnames'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  onClick: () => void
  highlight?: boolean
}

const MenuItem = ({ children, onClick, highlight = false }: Props) => {
  return (
    <li
      className={classNames('w-full cursor-pointer transition-colors rounded-lg p-2', {
        'bg-primary-500 text-slate-50 dark:bg-primary-700 dark:text-zinc-50': highlight,
        'hover:bg-slate-200 dark:hover:bg-zinc-900': !highlight,
      })}
      onMouseDown={onClick}
    >
      {children}
    </li>
  )
}

export default MenuItem
