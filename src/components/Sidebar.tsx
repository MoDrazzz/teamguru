import { Identity, Logo, Navigation } from '@/components'

const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col gap-16 border-r-2 border-slate-400 bg-slate-50 px-6 py-12">
      <Logo isClickable />
      <Identity />
      <Navigation />
    </aside>
  )
}

export default Sidebar
