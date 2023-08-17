import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  htmlFor: string
}

const Label = ({ htmlFor, children }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-semibold text-slate-500 sm:text-sm"
    >
      {children}
    </label>
  )
}

export default Label
