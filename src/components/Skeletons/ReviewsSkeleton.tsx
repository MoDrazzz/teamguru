import { ProfileSkeleton } from '@/components'
import classNames from 'classnames'

const ReviewsSkeleton = () => {
  return (
    <div className="grid gap-3">
      <div className="grid animate-pulse gap-4 rounded-lg bg-primary-800 p-4">
        <div className="h-4 w-full animate-pulse rounded-full bg-primary-700" />
        <div className="h-4 w-full animate-pulse rounded-full bg-primary-700" />
        <div className="h-4 w-3/4 animate-pulse rounded-full bg-primary-700" />
        <ProfileSkeleton color="primary" />
      </div>
      <div className="flex justify-center gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={classNames(
              'h-2 w-2 animate-pulse rounded-full bg-primary-50',
              {
                'opacity-50': index !== 0,
              },
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewsSkeleton
