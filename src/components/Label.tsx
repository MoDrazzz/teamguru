import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  htmlFor: string
}

const Label = ({ htmlFor, children }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-semibold text-slate-500 group-focus-within:text-slate-700 transition-colors sm:text-sm dark:text-zinc-400 dark:group-focus-within:text-zinc-300"
    >
      {children}
    </label>
  )
}

export default Label
