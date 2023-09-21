import classNames from 'classnames'

interface Props {
  color?: 'primary' | 'slate'
}
const ProfileSkeleton = ({ color = 'slate' }: Props) => {
  return (
    <div className="flex gap-3">
      <div
        className={classNames('h-10 w-10 rounded-lg', {
          'animate-pulse bg-primary-700': color === 'primary',
          skeleton: color === 'slate',
        })}
      />
      <div className="grid h-full w-4/5">
        <div
          className={classNames('h-4 w-3/5 rounded-full', {
            'animate-pulse bg-primary-700': color === 'primary',
            skeleton: color === 'slate',
          })}
        />
        <div
          className={classNames(
            'h-4 w-1/4 self-end rounded-full',
            {
              'animate-pulse bg-primary-700': color === 'primary',
              skeleton: color === 'slate',
            },
          )}
        />
      </div>
    </div>
  )
}

export default ProfileSkeleton
