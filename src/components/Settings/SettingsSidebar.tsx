import { NavItem } from '@/components'
import {
  faAt,
  faLock,
  faPalette,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const SettingsSidebar = () => {
  return (
    <aside className="w-full border-r-2 border-slate-400 bg-slate-100 px-4 py-12">
      <h3 className="mb-10 text-xl font-semibold">Settings</h3>
      <nav className="flex flex-col gap-2">
        <NavItem
          title="Profile"
          icon={faUser}
          href="/shell/settings/profile"
          variant="secondary"
          size="sm"
        />
        <NavItem
          title="Email"
          icon={faAt}
          href="/shell/settings/email"
          variant="secondary"
          size="sm"
        />
        <NavItem
          title="Password"
          icon={faLock}
          href="/shell/settings/password"
          variant="secondary"
          size="sm"
        />
        <NavItem
          title="Appearance"
          icon={faPalette}
          href="/shell/settings/appearance"
          variant="secondary"
          size="sm"
        />
      </nav>
    </aside>
  )
}

export default SettingsSidebar
