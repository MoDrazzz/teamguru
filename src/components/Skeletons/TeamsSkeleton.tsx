import { PageHeadingSkeleton, TeamsWrapperSkeleton } from '@/components'

const TeamsSkeleton = () => {
  return (
    <div className="flex h-screen w-full flex-col items-start gap-6 overflow-auto bg-slate-200 p-16 dark:bg-zinc-800">
      <PageHeadingSkeleton alt />
      <div className="flex w-full gap-3">
        <div className="skeleton-alt h-10 w-44 rounded-lg" />
        <div className="skeleton-alt h-10 w-full rounded-lg" />
      </div>
      <TeamsWrapperSkeleton />
    </div>
  )
}

export default TeamsSkeleton
