import classNames from 'classnames'

interface Props {
  color?: 'primary' | 'slate'
}
const ProfileSkeleton = ({ color = 'slate' }: Props) => {
  return (
    <div className="flex gap-3">
      <div
        className={classNames('h-10 w-10 animate-pulse rounded-lg', {
          'bg-primary-700': color === 'primary',
          'bg-slate-200 dark:bg-zinc-700': color === 'slate',
        })}
      />
      <div className="grid h-full w-4/5">
        <div
          className={classNames('h-4 w-3/5 animate-pulse rounded-full', {
            'bg-primary-700': color === 'primary',
            'bg-slate-200 dark:bg-zinc-700': color === 'slate',
          })}
        />
        <div
          className={classNames(
            'h-4 w-1/4 animate-pulse self-end rounded-full',
            {
              'bg-primary-700': color === 'primary',
              'bg-slate-200 dark:bg-zinc-700': color === 'slate',
            },
          )}
        />
      </div>
    </div>
  )
}

export default ProfileSkeleton
