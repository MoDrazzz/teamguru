import { RefObject } from 'react'

interface Props {
  type?: string
  refObj: RefObject<HTMLInputElement>
  id: string
  placeholder: string
}

export default function Input({
  type = 'text',
  refObj,
  id,
  placeholder,
}: Props) {
  return (
    <input
      type={type}
      ref={refObj}
      id={id}
      className="rounded-lg font-medium border-2 border-slate-400 px-3 py-2 text-sm w-full"
      placeholder={placeholder}
    />
  )
}
