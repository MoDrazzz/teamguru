import { ImageSkeleton } from '@/components'
import { AvatarSize } from '@/types'
import classNames from 'classnames'

interface Props {
  size?: AvatarSize
  color?: 'primary' | 'slate'
}

const AvatarSkeleton = ({ size = 'sm', color = 'slate' }: Props) => {
  return (
    <div
      className={classNames('rounded-lg', {
        'h-40 w-40': size === 'lg',
        'h-10 w-10': size === 'sm',
      })}
    >
      <ImageSkeleton color={color} />
    </div>
  )
}

export default AvatarSkeleton
