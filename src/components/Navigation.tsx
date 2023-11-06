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
      <NavItem title="Dashboard" icon={faHomeAlt} href={`/shell/dashboard`} />
      <NavItem
        title="Teams"
        icon={faPeopleGroup}
        href={`/shell/teams`}
        disabled
      />
      <NavItem
        title="Messages"
        icon={faEnvelope}
        href={`/shell/messages`}
        disabled
      />
      <NavItem title="Tasks" icon={faTasks} href={`/shell/tasks`} disabled />
      <NavItem
        title="Calendar"
        icon={faCalendar}
        href={`/shell/calendar`}
        disabled
      />
      <NavItem title="Settings" icon={faGear} href={`/shell/settings`} />
    </nav>
  )
}

export default Navigation
