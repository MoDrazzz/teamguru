import classNames from "classnames"

interface KebabDotProps {
  isActive: boolean
}

const KebabDot = ({ isActive }: KebabDotProps) => (
  <span
    className={classNames('h-1 w-1 rounded-full transition-colors', {
      'bg-slate-800 dark:bg-zinc-200': isActive,
      'bg-slate-500 group-hover:bg-slate-600 dark:bg-zinc-500 dark:group-hover:bg-zinc-400':
        !isActive,
    })}
  />
)

export default KebabDot
