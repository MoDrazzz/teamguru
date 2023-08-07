import { PropsWithChildren } from 'react'

const CodeBlock = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-slate-200 rounded-md px-3 py-2">
      <code className="text-sm font-medium text-slate-600">{children}</code>
    </div>
  )
}

export default CodeBlock
