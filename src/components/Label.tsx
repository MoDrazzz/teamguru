import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  htmlFor: string
}

export default function Label({ htmlFor, children }: Props) {
  return (
    <label htmlFor={htmlFor} className="text-sm text-slate-500 font-semibold">
      {children}
    </label>
  )
}
