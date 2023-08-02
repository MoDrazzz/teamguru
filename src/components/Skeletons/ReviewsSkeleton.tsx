import classNames from 'classnames'

const ReviewsSkeleton = () => {
  return (
    <div className="gap-3 grid animate-pulse">
      <div className="rounded-lg bg-primary-800 grid p-4 gap-4">
        <div className="rounded-full w-full h-4 bg-green-700" />
        <div className="rounded-full w-full h-4 bg-green-700" />
        <div className="rounded-full w-3/4 h-4 bg-green-700" />
        <div className="flex gap-3">
          <div className="rounded-lg w-10 h-10 bg-green-700" />
          <div className="grid h-full w-4/5">
            <div className="rounded-full w-3/5 h-4 bg-green-700" />
            <div className="self-end rounded-full w-1/4 h-4 bg-green-700" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={classNames('w-2 h-2 rounded-full bg-primary-50', {
              'opacity-50': index !== 0,
            })}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewsSkeleton
