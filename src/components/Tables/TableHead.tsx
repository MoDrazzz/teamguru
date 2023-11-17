import { PropsWithChildren } from 'react'

const TableHead = ({ children }: PropsWithChildren) => {
  return <div className="flex px-8 gap-6 pt-3">{children}</div>
}

export default TableHead
