import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  htmlFor: string
}

const Label = ({ htmlFor, children }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-semibold text-slate-500 group-focus-within:text-slate-700 transition-colors sm:text-sm"
    >
      {children}
    </label>
  )
}

export default Label
