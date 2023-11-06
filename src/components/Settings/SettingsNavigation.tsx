import { NavItem } from '@/components'
import {
  faUser,
  faAt,
  faLock,
  faPalette,
} from '@fortawesome/free-solid-svg-icons'

const SettingsNavigation = () => {
  return (
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
  )
}

export default SettingsNavigation
