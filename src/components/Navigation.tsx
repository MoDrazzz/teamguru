import { NavItem } from '@/components'
import {
  faCalendar,
  faEnvelope,
  faGear,
  faHomeAlt,
  faPeopleGroup,
  faTasks,
} from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <nav className="grid gap-3">
      <NavItem
        title="Dashboard"
        icon={faHomeAlt}
        href={`/shell/dashboard`}
      />
      <NavItem
        disabled
        title="Teams"
        icon={faPeopleGroup}
        href={`/shell/teams`}
      />
      <NavItem
        disabled
        title="Messages"
        icon={faEnvelope}
        href={`/shell/messages`}
      />
      <NavItem disabled title="Tasks" icon={faTasks} href={`/shell/tasks`} />
      <NavItem
        disabled
        title="Calendar"
        icon={faCalendar}
        href={`/shell/calendar`}
      />
      <NavItem title="Settings" icon={faGear} href={`/shell/settings`} />
    </nav>
  )
}

export default Navigation
