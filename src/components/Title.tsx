import { PropsWithChildren } from 'react'

const Title = ({ children }: PropsWithChildren) => {
  return <h4 className="text-lg font-semibold">{children}</h4>
}

export default Title
