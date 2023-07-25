import { PropsWithChildren } from 'react'

export default function FormField({ children }: PropsWithChildren) {
  return <div className="relative grid gap-1 w-full">{children}</div>
}
