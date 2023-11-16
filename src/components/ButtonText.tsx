import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  onClick: () => void
  disabled?: boolean
}

const ButtonText = ({ children, onClick, disabled = false }: Props) => {
  return (
    <button
      onClick={onClick}
      className="relative border-none bg-transparent outline-none transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-0 after:bg-slate-950 after:transition-transform hover:text-slate-950 hover:after:scale-100 dark:after:bg-zinc-50 dark:hover:text-zinc-50"
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ButtonText
