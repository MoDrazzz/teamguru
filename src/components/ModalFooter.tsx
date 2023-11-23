import { PropsWithChildren } from 'react'

const ModalFooter = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full items-center justify-between">{children}</div>
  )
}

export default ModalFooter
