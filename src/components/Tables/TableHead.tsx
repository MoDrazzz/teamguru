import { PropsWithChildren } from 'react'

const TableHead = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-6 px-8">{children}</div>
}

export default TableHead
