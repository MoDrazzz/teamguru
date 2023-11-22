import { AvatarSkeleton } from '@/components'
import classNames from 'classnames'

interface Props {
  color?: 'primary' | 'slate'
}
const ProfileSkeleton = ({ color = 'slate' }: Props) => {
  return (
    <div className="flex gap-3">
      <AvatarSkeleton color={color} />
      <div className="grid min-h-full w-32">
        <div
          className={classNames('h-4 w-full rounded-full', {
            'animate-pulse bg-primary-700': color === 'primary',
            skeleton: color === 'slate',
          })}
        />
        <div
          className={classNames('h-4 w-3/5 self-end rounded-full', {
            'animate-pulse bg-primary-700': color === 'primary',
            skeleton: color === 'slate',
          })}
        />
      </div>
    </div>
  )
}

export default ProfileSkeleton
