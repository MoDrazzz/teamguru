import { Spacer } from '@/components'

const PageHeadingSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col">
      <div className="mb-2 h-8 w-1/12 rounded-full bg-slate-200" />
      <div className="mb-4 h-6 w-2/5 rounded-full bg-slate-200" />
      <Spacer />
    </div>
  )
}

export default PageHeadingSkeleton
