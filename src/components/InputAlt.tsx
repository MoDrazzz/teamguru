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
  autocomplete?:
    | 'email'
    | 'given-name'
    | 'family-name'
    | 'new-password'
    | 'current-password'
    | 'organization-title'
}

const InputAlt = ({
  type = 'text',
  id,
  placeholder,
  value,
  onChange,
  disabled,
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
          'border-slate-400 focus:border-slate-700 dark:border-zinc-500 dark:focus:border-zinc-300':
            !disabled,
          'border-transparent': disabled,
        },
      )}
      placeholder={placeholder}
      autoComplete={autocomplete || undefined}
      disabled={disabled}
    />
  )
}

export default InputAlt
