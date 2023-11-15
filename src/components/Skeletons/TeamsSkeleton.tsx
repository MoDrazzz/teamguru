import { PageHeadingSkeleton, TeamsWrapperSkeleton } from '@/components'

const TeamsSkeleton = () => {
  return (
    <>
      <PageHeadingSkeleton alt />
      <div className="flex w-full gap-3">
        <div className="skeleton-alt h-10 w-44 rounded-lg" />
        <div className="skeleton-alt h-10 w-full rounded-lg" />
      </div>
      <TeamsWrapperSkeleton />
    </>
  )
}

export default TeamsSkeleton
