import { Icon } from '@/components'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'

interface Props {
  icon: IconProp
  color?: 'sky' | 'red' | 'green'
  onClick: () => void
  disabled?: boolean
}

const ButtonAlt = ({
  children,
  icon,
  color = 'sky',
  onClick,
  disabled,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={classNames(
        'flex items-center gap-2 rounded-full border-2 px-3 py-1 text-xs font-semibold transition duration-300',
        {
          'border-sky-500 bg-sky-200 text-sky-700': color === 'sky',
          'hover:border-sky-700 hover:text-sky-900':
            color === 'sky' && !disabled,
          'border-red-500 bg-red-200 text-red-700': color === 'red',
          'hover:border-red-700 hover:text-red-900':
            color === 'red' && !disabled,
          'border-green-500 bg-green-200 text-green-700': color === 'green',
          'hover:border-green-700 hover:text-green-900':
            color === 'green' && !disabled,
          'opacity-80': disabled,
        },
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <Icon icon={icon} />
    </button>
  )
}

export default ButtonAlt
