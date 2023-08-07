import { PropsWithChildren } from 'react'
import NextLink from 'next/link'

interface Props extends PropsWithChildren {
  href: string
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href} className="text-primary-500 font-semibold">
      {children}
    </NextLink>
  )
}

export default Link
