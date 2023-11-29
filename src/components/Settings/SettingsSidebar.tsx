import { SettingsNavigation } from '@/components'

const SettingsSidebar = () => {
  return (
    <aside className="w-full border-r-2 border-slate-400 bg-slate-100 px-4 py-12 dark:border-zinc-500 dark:bg-zinc-800">
      <h3 className="mb-10 text-xl font-semibold dark:text-zinc-100">
        Settings
      </h3>
      <SettingsNavigation />
    </aside>
  )
}

export default SettingsSidebar
