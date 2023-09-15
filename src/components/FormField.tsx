import { PropsWithChildren } from 'react'

const FormField = ({ children }: PropsWithChildren) => {
  return <div className="group relative grid w-full gap-1">{children}</div>
}

export default FormField
