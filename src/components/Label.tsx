import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  htmlFor: string
}

const Label = ({ htmlFor, children }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs sm:text-sm text-slate-500 font-semibold"
    >
      {children}
    </label>
  )
}

export default Label
