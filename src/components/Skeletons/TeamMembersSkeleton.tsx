import { ArticleSkeleton, InputAltSkeleton } from '@/components'

const TeamMembersSkeleton = () => {
  return (
    <div className="w-[608px]">
      <ArticleSkeleton>
        <div className="flex h-[366px] flex-col px-8 py-2">
          <div className="mb-3 grid grid-cols-2 items-center justify-items-end pt-3">
            <InputAltSkeleton />
            <div className="skeleton h-7 w-36 rounded-full" />
          </div>
          <div className="flex w-full grow flex-col gap-3">
            <div className="skeleton h-6 w-4/5 rounded-lg" />
            <div className="skeleton h-6 w-3/4 rounded-lg" />
            <div className="skeleton h-6 w-3/5 rounded-lg" />
          </div>
          <footer className="mb-3 flex justify-between gap-6">
            <div className="skeleton h-5 w-24 rounded-full" />
            <div className="flex h-6 items-center gap-2">
              <div className="skeleton h-6 w-10 rounded-full" />
              <div className="skeleton h-5 w-10 rounded-full" />
              <div className="skeleton h-6 w-10 rounded-full" />
            </div>
          </footer>
        </div>
      </ArticleSkeleton>
    </div>
  )
}

export default TeamMembersSkeleton
