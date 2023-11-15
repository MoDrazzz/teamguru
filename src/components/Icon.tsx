import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  icon: IconProp
  className?: string
  onClick?: () => void
}

const Icon = ({ icon, className, onClick }: Props) => {
  return <FontAwesomeIcon className={className} icon={icon} onClick={onClick} />
}

export default Icon
