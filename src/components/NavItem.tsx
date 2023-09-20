'use client'

import { Icon } from '@/components'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  title: string
  icon: IconProp
  href: string
  color?: 'primary' | 'slate'
  size?: 'sm' | 'md'
}

const NavItem = ({
  title,
  icon,
  href,
  color = 'primary',
  size = 'md',
}: Props) => {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={classNames(
        'flex w-full items-center gap-3 rounded-md px-3 py-2 transition-colors',
        {
          'bg-primary-500 text-primary-50 dark:bg-primary-600':
            isActive && color === 'primary',
          'text-slate-400 hover:bg-slate-200 hover:text-slate-500 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-300':
            !isActive && color === 'primary',
          'bg-slate-700 text-slate-50': isActive && color === 'slate',
          'text-slate-500 hover:bg-slate-300 hover:text-slate-600':
            !isActive && color === 'slate',
        },
      )}
    >
      <span className="flex w-7 items-center justify-center">
        <Icon
          icon={icon}
          className={classNames({
            'text-xl': size === 'md',
            'text-base': size === 'sm',
          })}
        />
      </span>
      <p
        className={classNames('font-semibold', {
          'text-lg': size === 'md',
          'text-sm': size === 'sm',
        })}
      >
        {title}
      </p>
    </Link>
  )
}

export default NavItem
