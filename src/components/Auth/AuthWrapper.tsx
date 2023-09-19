import { PropsWithChildren } from 'react'

const AuthWrapper = ({ children }: PropsWithChildren) => {
  return <main className="relative rounded-xl bg-slate-50 p-3">{children}</main>
}

export default AuthWrapper
