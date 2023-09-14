import classNames from 'classnames'

interface Props {
  size?: 'sm' | 'md'
  colorWeight?: '300' | '200'
}

const NavItemSkeleton = ({ size = 'md', colorWeight = '200' }: Props) => {
  return (
    <div className="flex w-full animate-pulse items-center gap-3 rounded-md px-3 py-2 transition-colors">
      <span className="flex w-7 items-center justify-center">
        <div
          className={classNames('rounded-lg', {
            'h-7 w-7': size === 'md',
            'h-5 w-5': size === 'sm',
            'bg-slate-300': colorWeight === '300',
            'bg-slate-200': colorWeight === '200',
          })}
        />
      </span>
      <div
        className={classNames('w-24 rounded-full', {
          'h-7': size === 'md',
          'h-5': size === 'sm',
          'bg-slate-300': colorWeight === '300',
          'bg-slate-200': colorWeight === '200',
        })}
      />
    </div>
  )
}

export default NavItemSkeleton
