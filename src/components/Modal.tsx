import Icon from '@/components/Icon'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, PropsWithChildren, SetStateAction } from 'react'

interface Props extends PropsWithChildren {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ isVisible, setIsVisible, children }: Props) => {
  return (
    isVisible && (
      <div className="absolute w-screen h-screen top-0 left-0 grid place-items-center z-40 bg-slate-900 bg-opacity-50">
        <div className="relative bg-slate-50 rounded-lg p-12">
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            <Icon icon={faTimes} className="" />
          </span>
          {children}
        </div>
      </div>
    )
  )
}

export default Modal
