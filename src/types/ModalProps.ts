import { Dispatch, SetStateAction } from 'react'

export interface ModalProps {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}
