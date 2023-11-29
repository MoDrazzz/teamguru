import { Dispatch, SetStateAction } from 'react'

export interface ModalPropsType {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}
