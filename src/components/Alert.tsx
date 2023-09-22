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
        'flex w-full items-center gap-4 border-l-4 px-8 py-4',
        {
          'border-red-500 bg-red-200 dark:border-red-300 dark:bg-red-800':
            variant === 'error',
          'border-yellow-500 bg-yellow-200 dark:border-yellow-300 dark:bg-yellow-800':
            variant === 'warning',
          'border-sky-500 bg-sky-200 dark:border-sky-300 dark:bg-sky-800':
            variant === 'info',
          'border-green-500 bg-green-200 dark:border-green-300 dark:bg-green-800':
            variant === 'success',
        },
      )}
    >
      <Icon
        className={classNames({
          'text-xl text-red-600 dark:text-red-300': variant === 'error',
          'text-xl text-yellow-600 dark:text-yellow-300': variant === 'warning',
          'text-xl text-sky-600 dark:text-sky-300': variant === 'info',
          'text-xl text-green-600 dark:text-green-300': variant === 'success',
        })}
        icon={icon}
      />
      <p
        className={classNames({
          'font-medium text-red-700 dark:text-red-200': variant === 'error',
          'font-medium text-yellow-700 dark:text-yellow-200':
            variant === 'warning',
          'font-medium text-sky-700 dark:text-sky-200': variant === 'info',
          'font-medium text-green-700 dark:text-green-200':
            variant === 'success',
        })}
      >
        {children}
      </p>
    </div>
  )
}

export default Alert
