import classNames from 'classnames'

const ReviewsSkeleton = () => {
  return (
    <div className="grid animate-pulse gap-3">
      <div className="grid gap-4 rounded-lg bg-primary-800 p-4">
        <div className="h-4 w-full rounded-full bg-primary-700" />
        <div className="h-4 w-full rounded-full bg-primary-700" />
        <div className="h-4 w-3/4 rounded-full bg-primary-700" />
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary-700" />
          <div className="grid h-full w-4/5">
            <div className="h-4 w-3/5 rounded-full bg-primary-700" />
            <div className="h-4 w-1/4 self-end rounded-full bg-primary-700" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={classNames('h-2 w-2 rounded-full bg-primary-50', {
              'opacity-50': index !== 0,
            })}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewsSkeleton
