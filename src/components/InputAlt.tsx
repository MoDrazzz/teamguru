import classNames from 'classnames'
import { ChangeEvent } from 'react'

interface Props {
  type?: 'text' | 'email' | 'password'
  id: string
  placeholder: string
  value: string
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  isError?: boolean
  onFocus?: () => void
  autocomplete?:
    | 'email'
    | 'given-name'
    | 'family-name'
    | 'new-password'
    | 'current-password'
}

const InputAlt = ({
  type = 'text',
  id,
  placeholder,
  value,
  onChange,
  disabled,
  isError = false,
  onFocus,
  autocomplete,
}: Props) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      className={classNames(
        'w-full border-b-2 bg-transparent text-sm font-semibold outline-none transition-colors',
        {
          'border-red-500 text-red-700': isError && !disabled,
          'border-slate-400 focus:border-slate-700': !isError && !disabled,
          'border-transparent': disabled,
        },
      )}
      placeholder={placeholder}
      onFocus={onFocus}
      autoComplete={autocomplete || undefined}
      disabled={disabled}
    />
  )
}

export default InputAlt
