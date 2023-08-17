import { PropsWithChildren } from 'react'

const AuthWrapper = ({ children }: PropsWithChildren) => {
  return <main className="relative rounded-xl bg-white p-3">{children}</main>
}

export default AuthWrapper
