import { PropsWithChildren } from 'react'

const CodeBlock = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-md bg-slate-200 px-3 py-2">
      <code className="text-sm font-medium text-slate-600">{children}</code>
    </div>
  )
}

export default CodeBlock
