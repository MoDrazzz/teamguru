import { IdentitySkeleton, LogoSkeleton, NavItemSkeleton } from '@/components'

const SidebarSkeleton = () => {
  return (
    <aside className="flex w-64 flex-col gap-12 border-r-2 border-slate-400 bg-slate-50 px-6 py-12 dark:border-zinc-500 dark:bg-zinc-900">
      <LogoSkeleton />
      <IdentitySkeleton />
      <div className="grid gap-3">
        <NavItemSkeleton />
        <NavItemSkeleton />
        <NavItemSkeleton />
        <NavItemSkeleton />
        <NavItemSkeleton />
        <NavItemSkeleton />
      </div>
      <div className="flex h-full flex-col-reverse">
        <NavItemSkeleton />
      </div>
    </aside>
  )
}

export default SidebarSkeleton
