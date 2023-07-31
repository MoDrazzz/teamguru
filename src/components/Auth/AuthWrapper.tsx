import { PropsWithChildren } from 'react'

const AuthWrapper = ({ children }: PropsWithChildren) => {
  return <main className="rounded-xl p-3 bg-white">{children}</main>
}

export default AuthWrapper
