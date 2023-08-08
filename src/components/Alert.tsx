import { Icon } from '@/components'
import {
  faCircleCheck,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  variant: 'error' | 'warning' | 'success' | 'info'
}

const iconsDefinition = {
  error: faExclamationCircle,
  warning: faExclamationTriangle,
  success: faCircleCheck,
  info: faInfoCircle,
}

const Alert = ({ variant, children }: Props) => {
  const icon = iconsDefinition[variant]

  return (
    <div
      className={classNames(
        'flex w-full gap-4 items-center px-8 py-4 border-l-4',
        {
          'border-red-500 bg-red-200': variant === 'error',
          'border-yellow-500 bg-yellow-200': variant === 'warning',
          'border-sky-500 bg-sky-200': variant === 'info',
          'border-green-500 bg-green-200': variant === 'success',
        },
      )}
    >
      <Icon
        className={classNames({
          'text-xl text-red-600': variant === 'error',
          'text-xl text-yellow-600': variant === 'warning',
          'text-xl text-sky-600': variant === 'info',
          'text-xl text-green-600': variant === 'success',
        })}
        icon={icon}
      />
      <p
        className={classNames({
          'text-red-700 font-medium': variant === 'error',
          'text-yellow-700 font-medium': variant === 'warning',
          'text-sky-700 font-medium': variant === 'info',
          'text-green-700 font-medium': variant === 'success',
        })}
      >
        {children}
      </p>
    </div>
  )
}

export default Alert
