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
}

const NavItem = ({ title, icon, href }: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={classNames(
        'flex w-full items-center gap-3 rounded-md px-3 py-2 transition-colors',
        {
          'bg-primary-500 text-green-50': isActive,
          'text-slate-400 hover:bg-slate-200 hover:text-slate-500': !isActive,
        },
      )}
    >
      <span className="flex w-7 items-center justify-center">
        <Icon icon={icon} className="text-xl" />
      </span>
      <p className="text-lg font-semibold">{title}</p>
    </Link>
  )
}

export default NavItem
