import classNames from 'classnames'
import { RefObject } from 'react'

interface Props {
  type?: string
  refObj: RefObject<HTMLInputElement>
  id: string
  placeholder: string
  isError?: boolean
  onFocus?: () => void
}

export default function Input({
  type = 'text',
  refObj,
  id,
  placeholder,
  isError = false,
  onFocus,
}: Props) {
  return (
    <input
      type={type}
      ref={refObj}
      id={id}
      className={classNames(
        'rounded-lg font-medium border-2 px-3 py-2 text-sm w-full',
        {
          'border-red-500 text-red-700': isError,
          'border-slate-400': !isError,
        },
      )}
      placeholder={placeholder}
      onFocus={onFocus}
    />
  )
}
