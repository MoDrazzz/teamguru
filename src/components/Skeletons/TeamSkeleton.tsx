import { AvatarSkeleton, ArticleSkeleton } from '@/components'

AvatarSkeleton

const TeamSkeleton = () => {
  return (
    <ArticleSkeleton>
      <div className="grid gap-3 p-4">
        <div className="flex gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <AvatarSkeleton key={index} />
          ))}
        </div>
        <footer className="flex gap-6">
          <div className="skeleton h-5 w-24 rounded-full" />
          <div className="skeleton h-5 w-36 rounded-full" />
          <div className="skeleton h-5 w-32 rounded-full" />
        </footer>
      </div>
    </ArticleSkeleton>
  )
}

export default TeamSkeleton
