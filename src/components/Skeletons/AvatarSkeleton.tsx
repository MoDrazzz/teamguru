import { ImageSkeleton } from '@/components'
import { AvatarSize } from '@/types'
import classNames from 'classnames'

interface Props {
  size?: AvatarSize
}

const AvatarSkeleton = ({ size = 'sm' }: Props) => {
  return (
    <div
      className={classNames('animate-pulse rounded-lg', {
        'h-40 w-40': size === 'lg',
        'h-10 w-10': size === 'sm',
      })}
    >
      <ImageSkeleton />
    </div>
  )
}

export default AvatarSkeleton
