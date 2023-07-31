import { PropsWithChildren } from 'react'

const FormField = ({ children }: PropsWithChildren) => {
  return <div className="relative grid gap-1 w-full">{children}</div>
}

export default FormField
