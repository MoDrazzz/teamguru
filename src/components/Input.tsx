import classNames from 'classnames'
import { RefObject } from 'react'

interface Props {
  type?: 'text' | 'email' | 'password'
  refObj: RefObject<HTMLInputElement>
  placeholder: string
  id?: string
  isError?: boolean
  onFocus?: () => void
  autocomplete?:
    | 'email'
    | 'given-name'
    | 'family-name'
    | 'new-password'
    | 'current-password'
}

const Input = ({
  type = 'text',
  refObj,
  id,
  placeholder,
  isError = false,
  onFocus,
  autocomplete,
}: Props) => {
  return (
    <input
      type={type}
      ref={refObj}
      id={id}
      className={classNames(
        'w-full rounded-lg border-2 bg-slate-50 dark:bg-zinc-900 px-3 py-2 text-xs font-medium outline-none transition-colors sm:text-sm',
        {
          'border-red-500 text-red-700': isError,
          'border-slate-400 focus:border-slate-600 dark:border-zinc-500 dark:focus:border-zinc-400': !isError,
        },
      )}
      placeholder={placeholder}
      onFocus={onFocus}
      autoComplete={autocomplete || undefined}
    />
  )
}

export default Input
