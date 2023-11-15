import { ImageSkeleton } from '@/components'
import { AvatarSizeType } from '@/types'
import classNames from 'classnames'

interface Props {
  size?: AvatarSizeType
  color?: 'primary' | 'slate'
}

const AvatarSkeleton = ({ size = 'sm', color = 'slate' }: Props) => {
  return (
    <div
      className={classNames('overflow-hidden', {
        'h-40 w-40 rounded-xl': size === 'lg',
        'h-10 w-10 rounded-lg': size === 'md',
        'h-8 w-8 rounded-md': size === 'sm',
      })}
    >
      <ImageSkeleton color={color} />
    </div>
  )
}

export default AvatarSkeleton
