import { AvatarSkeleton } from '@/components'

AvatarSkeleton

const TeamSkeleton = () => {
  return (
    <article className="grid w-full justify-items-start gap-3">
      <div className="skeleton-alt h-7 w-32 rounded-full" />
      <div className="grid w-full gap-3 rounded-xl bg-slate-50 p-4 shadow-main dark:bg-zinc-900">
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
    </article>
  )
}

export default TeamSkeleton
