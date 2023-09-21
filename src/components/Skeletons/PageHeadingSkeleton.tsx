import { Spacer } from '@/components'

const PageHeadingSkeleton = () => {
  return (
    <div className="flex flex-col">
      <div className="skeleton mb-2 h-8 w-1/12 rounded-full" />
      <div className="skeleton mb-4 h-6 w-2/5 rounded-full" />
      <Spacer />
    </div>
  )
}

export default PageHeadingSkeleton
