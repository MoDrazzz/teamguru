import classNames from 'classnames'
import { PropsWithChildren, RefObject } from 'react'

interface Props extends PropsWithChildren {
  isActive: boolean
  refObj?: RefObject<HTMLUListElement>
}

const Menu = ({ children, isActive, refObj }: Props) => {
  return (
    <ul
      ref={refObj}
      className={classNames(
        'absolute top-full z-20 mt-0.5 flex max-h-36 w-full origin-top flex-col gap-0.5 overflow-auto rounded-lg border-2 border-slate-400 bg-slate-50 p-1 shadow-main transition-transform dark:border-zinc-700 dark:bg-zinc-800',
        {
          'scale-y-0': !isActive,
          'scale-y-100': isActive,
        },
      )}
    >
      {children}
    </ul>
  )
}

export default Menu
