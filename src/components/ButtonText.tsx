import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  onClick: () => void
}

const ButtonText = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="relative border-none bg-transparent outline-none transition-colors after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-slate-950 hover:text-slate-950 dark:after:bg-zinc-50 after:scale-0 hover:after:scale-100 after:transition-transform after:origin-left dark:hover:text-zinc-50"
      >
      {children}
    </button>
  )
}

export default ButtonText
