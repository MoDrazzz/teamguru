import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  icon: IconProp
  className?: string
}

const Icon = ({ icon, className }: Props) => {
  return <FontAwesomeIcon className={className} icon={icon} />
}

export default Icon
