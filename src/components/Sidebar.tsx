import { Identity, Logo, LogoutButton, Navigation } from '@/components'

const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col gap-12 border-r-2 border-slate-400 bg-slate-50 px-6 py-12 dark:border-zinc-500 dark:bg-zinc-900">
      <Logo isClickable />
      <Identity />
      <Navigation />
      <div className="flex h-full flex-col-reverse">
        <LogoutButton />
      </div>
    </aside>
  )
}

export default Sidebar
