import { Spacer } from '@/components'

const PageHeadingSkeleton = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-2 h-8 w-1/12 rounded-full bg-slate-200 animate-pulse dark:bg-zinc-700" />
      <div className="mb-4 h-6 w-2/5 rounded-full bg-slate-200 animate-pulse dark:bg-zinc-700" />
      <Spacer />
    </div>
  )
}

export default PageHeadingSkeleton
