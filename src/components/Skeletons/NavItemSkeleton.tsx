import classNames from 'classnames'

interface Props {
  size?: 'sm' | 'md'
  colorWeight?: '300' | '200'
}

const NavItemSkeleton = ({ size = 'md', colorWeight = '200' }: Props) => {
  return (
    <div className="flex w-full items-center gap-3 rounded-md px-3 py-2 transition-colors">
      <span className="flex w-7 items-center justify-center">
        <div
          className={classNames('animate-pulse rounded-lg', {
            'h-7 w-7': size === 'md',
            'h-5 w-5': size === 'sm',
            'bg-slate-300 dark:bg-zinc-600': colorWeight === '300',
            'bg-slate-200 dark:bg-zinc-700': colorWeight === '200',
          })}
        />
      </span>
      <div
        className={classNames('w-24 animate-pulse rounded-full', {
          'h-7': size === 'md',
          'h-5': size === 'sm',
          'bg-slate-300 dark:bg-zinc-600': colorWeight === '300',
          'bg-slate-200 dark:bg-zinc-700': colorWeight === '200',
        })}
      />
    </div>
  )
}

export default NavItemSkeleton
