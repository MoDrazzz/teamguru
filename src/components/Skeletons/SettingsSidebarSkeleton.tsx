import { NavItemSkeleton } from '@/components'

const SettingsSidebarSkeleton = () => {
  return (
    <aside className="w-full border-r-2 border-slate-400 bg-slate-100 px-4 py-12 dark:border-zinc-500 dark:bg-zinc-800">
      <div className="mb-10 h-7 w-40 animate-pulse rounded-full bg-slate-300 dark:bg-zinc-600" />
      <nav className="flex flex-col gap-2">
        <NavItemSkeleton size="sm" colorWeight="300" />
        <NavItemSkeleton size="sm" colorWeight="300" />
        <NavItemSkeleton size="sm" colorWeight="300" />
        <NavItemSkeleton size="sm" colorWeight="300" />
      </nav>
    </aside>
  )
}

export default SettingsSidebarSkeleton
