import classNames from 'classnames'
import { ChangeEvent, RefObject } from 'react'

interface Props {
  type?: 'text' | 'email' | 'password'
  refObj?: RefObject<HTMLInputElement>
  value?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  id?: string
  isError?: boolean
  onFocus?: () => void
  onBlur?: () => void
  autocomplete?:
    | 'email'
    | 'given-name'
    | 'family-name'
    | 'new-password'
    | 'current-password'
  disabled?: boolean
}

const Input = ({
  type = 'text',
  refObj,
  value,
  onChange,
  id,
  placeholder,
  isError = false,
  onFocus,
  onBlur,
  autocomplete,
  disabled,
}: Props) => {
  return (
    <input
      type={type}
      ref={refObj}
      value={value}
      onChange={onChange}
      id={id}
      className={classNames(
        'w-full rounded-lg border-2 bg-slate-50 px-3 py-2 text-xs font-medium outline-none transition-colors dark:bg-zinc-900 sm:text-sm',
        {
          'border-red-500 text-red-700': isError,
          'border-slate-400 focus:border-slate-600 dark:border-zinc-500 dark:focus:border-zinc-400':
            !isError,
          'cursor-not-allowed opacity-50': disabled,
        },
      )}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete={autocomplete || undefined}
      disabled={disabled}
    />
  )
}

export default Input
