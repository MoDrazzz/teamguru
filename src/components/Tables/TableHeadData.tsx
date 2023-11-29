import { CSSProperties, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  width: CSSProperties['width']
}

const TableHeadData = ({ children, width }: Props) => {
  return (
    <p
      style={{
        width,
      }}
      className="text-sm font-semibold text-slate-600 dark:text-zinc-400"
    >
      {children}
    </p>
  )
}

export default TableHeadData
