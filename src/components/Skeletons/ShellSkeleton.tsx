import { SidebarSkeleton } from '@/components'

const ShellSkeleton = () => {
  return (
    <div className="flex h-full">
      <SidebarSkeleton />
      {/* TODO: Add skeleton for the first page */}
    </div>
  )
}

export default ShellSkeleton
