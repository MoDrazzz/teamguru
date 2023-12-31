import { PropsWithChildren } from 'react'
import NextLink from 'next/link'

interface Props extends PropsWithChildren {
  href: string
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLink
      href={href}
      className="font-semibold text-primary-500 transition-colors hover:text-primary-600"
    >
      {children}
    </NextLink>
  )
}

export default Link
