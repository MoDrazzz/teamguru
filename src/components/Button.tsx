import { Spinner } from '@/components'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  // eslint-disable-next-line no-unused-vars
  onClick: (...args: any[]) => void
  type?: 'button' | 'submit'
  disabled?: boolean
  isLoading?: boolean
}

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled,
  isLoading,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        'relative bg-primary-500 text-sm sm:text-base rounded-lg text-primary-50 px-4 sm:px-5 py-2 font-semibold',
        {
          'opacity-80': disabled,
        },
      )}
      disabled={disabled}
    >
      {children}
      {isLoading && (
        <span className="absolute w-full h-full left-0 top-0 bg-slate-800 bg-opacity-50 z-20 rounded-lg flex justify-center items-center">
          <Spinner />
        </span>
      )}
    </button>
  )
}

export default Button
