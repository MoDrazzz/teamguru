import { Spinner } from '@/components'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  // eslint-disable-next-line no-unused-vars
  onClick: (...args: any[]) => void
  type?: 'button' | 'submit'
  disabled?: boolean
  isLoading?: boolean
  color?: 'primary' | 'red'
}

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled,
  isLoading,
  color = 'primary',
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        'relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors sm:px-5 sm:text-base',
        {
          'opacity-80': disabled,
          'bg-primary-500 text-primary-50 hover:bg-primary-600':
            color === 'primary',
          'bg-red-500 text-red-50 hover:bg-red-600': color === 'red',
        },
      )}
      disabled={disabled}
    >
      {children}
      {isLoading && (
        <span className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center rounded-lg bg-slate-800 bg-opacity-50">
          <Spinner />
        </span>
      )}
    </button>
  )
}

export default Button
