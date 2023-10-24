import { NavItem } from '@/components'
import {
  faAt,
  faLock,
  faPalette,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const SettingsSidebar = () => {
  return (
    <aside className="w-full border-r-2 border-slate-400 bg-slate-100 px-4 py-12 dark:border-zinc-500 dark:bg-zinc-800">
      <h3 className="mb-10 text-xl font-semibold dark:text-zinc-100">
        Settings
      </h3>
      <nav className="flex flex-col gap-2">
        <NavItem
          title="Profile"
          icon={faUser}
          href="/shell/settings/profile"
          color="slate"
          size="sm"
        />
        <NavItem
          title="Email"
          icon={faAt}
          href="/shell/settings/email"
          color="slate"
          size="sm"
          disabled
        />
        <NavItem
          title="Password"
          icon={faLock}
          href="/shell/settings/password"
          color="slate"
          size="sm"
          disabled
        />
        <NavItem
          title="Appearance"
          icon={faPalette}
          href="/shell/settings/appearance"
          color="slate"
          size="sm"
        />
      </nav>
    </aside>
  )
}

export default SettingsSidebar
