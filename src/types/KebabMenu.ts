import { IconProp } from "@fortawesome/fontawesome-svg-core"

export type KebabMenuItemType = {
  label: string
  icon: IconProp
  onClick: () => void
  isRed?: boolean
}